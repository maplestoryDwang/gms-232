package net.swordie.orm.dao;

import net.swordie.ms.client.character.items.*;
import net.swordie.ms.client.trunk.Trunk;
import net.swordie.ms.connection.db.BatchQueryHolder;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.QueryHolder;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.enums.InvType;
import net.swordie.ms.util.FileTime;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class ItemDao implements SworDao<Item> {

    public static final int REMOVE_ITEMS_BATCH_SIZE = 100;
    public static final String TABLE = "items";

    private static final Logger log = LogManager.getLogger();
    private static final Lock itemWriteLock = new ReentrantLock();
    private static final EquipDao equipDao = (EquipDao) SworDaoFactory.getByClass(Equip.class);
    private static final PetItemDao petItemDao = (PetItemDao) SworDaoFactory.getByClass(PetItem.class);

    public QueryHolder<Item> createQueryHolder(Item item) {
        if (item == null || item.isClean()) {
            return QueryHolder.clean();
        }
        boolean needsId = item.isInit();
        item.setInit(false);
        var queryHolder = new QueryHolder<>(item, needsId, false);

        StringBuilder query;
        if (needsId) {
            query = new StringBuilder("INSERT INTO items(" +
                    "itemId, " +
                    "bagIndex, " +
                    "bagItemIndex, " +
                    "cashItemSerialNumber, " +
                    "dateExpire, " +
                    "invType, " +
                    "type, " +
                    "isCash, " +
                    "quantity, " +
                    "owner, " +
                    "trunkid, " +
                    "inventoryid, " +
                    "bossid, " +
                    "playercount, " +
                    "price, " +
                    "obtaineddate, ");

        } else {
            query = new StringBuilder("UPDATE items SET " +
                    "itemId = ?," +
                    "bagIndex = ?," +
                    "bagItemIndex = ?," +
                    "cashItemSerialNumber = ?," +
                    "dateExpire = ?," +
                    "invType = ?," +
                    "type = ?," +
                    "isCash = ?," +
                    "quantity = ?," +
                    "owner = ?, " +
                    "trunkid = ?, " +
                    "inventoryid = ?," +
                    "bossid = ?," +
                    "playercount = ?," +
                    "price = ?," +
                    "obtaineddate = ?");

        }

        Object[] args;
        if (item instanceof Equip) {
            var equip = (Equip) item;
            query.append(equipDao.createQuery(needsId));
            args = equipDao.getArgs(equip);
        } else if (item instanceof PetItem) {
            var petItem = ((PetItem) item);
            query.append(petItemDao.createQuery(needsId));
            args = petItemDao.getArgs(petItem);
        } else {
            //Args added here need to be added in the getArgs func of equipDao and petItemDao too
            args = new Object[]{
                    item.getItemId(),
                    item.getBagIndex(),
                    item.getBagItemIndex(),
                    item.getCashItemSerialNumber(),
                    FileTimeConverter.toDbColumn(item.getDateExpire()),
                    item.getInvType().ordinal(),
                    item.getType().ordinal(),
                    item.isCash(),
                    item.getQuantity(),
                    item.getOwner(),
                    item.getTrunk() == null ? null : item.getTrunk().getId(),
                    item.getInventory() == null ? null : item.getInventory().getId(),
                    item.getPowerCrystalInfo() == null ? null : item.getPowerCrystalInfo().getBossId(),
                    item.getPowerCrystalInfo() == null ? null : item.getPowerCrystalInfo().getPlayerCount(),
                    item.getPowerCrystalInfo() == null ? null : item.getPowerCrystalInfo().getPrice(),
                    item.getPowerCrystalInfo() == null ? null : FileTimeConverter.toDbColumn(item.getPowerCrystalInfo().getObtainedDate()),
                    item.getId()
            };
        }
        if (needsId) {
            query.append(" id) ");
            // adds the VALUES (?, ?, ?....) string
            query.append(createValueStringFromArgCount(args.length));
        } else {
            query.append(" WHERE id = ?");
        }

        queryHolder.setQuery(query.toString());
        queryHolder.setArgs(args);

        return queryHolder;
    }

    public void delete(Collection<Item> items) {
        var nonInitItems = new HashSet<Item>();
        for (var item : items) {
            if (item != null && !item.isInit() && item.getId() != 0) {
                nonInitItems.add(item);
            }
        }
        if (nonInitItems.size() == 0) {
            return;
        }
        var query = new StringBuilder("DELETE FROM items WHERE id IN (");
        int i = 0;
        for (var item : nonInitItems) {
            if (i == nonInitItems.size() - 1) {
                query.append(item.getId()).append(")");
            } else {
                query.append(item.getId()).append(", ");
            }
            i++;
        }

        try {
            itemWriteLock.lock();
            DatabaseManager.executeQuery(query.toString());
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            itemWriteLock.unlock();
        }
    }

    @Override
    public Item fromResultSet(ResultSet resultSet, String alias) {
        Item item = null;

        try {
            Item.Type type = Item.Type.values()[resultSet.getInt(alias + ".type")];

            switch (type) {
                case EQUIP:
                    item = new Equip();
                    equipDao.fromResultSet(resultSet, alias, item);
                    break;
                case PET:
                    item = new PetItem();
                    petItemDao.fromResultSet(resultSet, alias, item);
                    break;
                default:
                    item = new Item();
                    break;
            }

            item.setId(resultSet.getLong(alias + ".id"));
            item.setType(type);
            item.setItemId(resultSet.getInt(alias + ".itemid"));
            item.setBagIndex(resultSet.getInt(alias + ".bagindex"));
            item.setBagItemIndex(resultSet.getInt(alias + ".bagitemindex"));
            item.setCashItemSerialNumber(resultSet.getLong(alias + ".cashitemserialnumber"));
            item.setDateExpire(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".dateexpire")));
            item.setInvType(InvType.values()[resultSet.getInt(alias + ".invtype")]);
            item.setCash(resultSet.getBoolean(alias + ".iscash"));
            item.setQuantity(resultSet.getInt(alias + ".quantity"));
            item.setOwner(resultSet.getString(alias + ".owner"));
            item.setLastSavedHash();

            //Load in Power Crystal data
            if (item.getItemId() == ItemConstants.INTENSE_POWER_CRYSTAL) {
                int bossId = resultSet.getInt(alias + ".bossid");
                int playerCount = resultSet.getInt(alias + ".playercount");
                long price = resultSet.getLong(alias + ".price");
                FileTime obtainedDate = FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".obtaineddate"));
                item.setPowerCrystalInfo(new PowerCrystal(bossId, playerCount, price, obtainedDate));
            }

            if (type.equals(Item.Type.EQUIP)) {
                ((Equip) item).recalcEnchantmentStats();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return item;
    }

    public List<Item> byInventory(Inventory inventory) {
        var objs = DatabaseManager.executeSelect(this,
                "SELECT * FROM items i WHERE inventoryid = ?",
                "i", inventory.getId());
        List<Item> saveDatas = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                var item = ((Item) obj);
                item.setInventory(inventory);
                saveDatas.add(item);
            }
        }
        return saveDatas;
    }

    public List<Item> byTrunk(Trunk trunk) {
        var objs = DatabaseManager.executeSelect(this,
                "SELECT * FROM items i WHERE trunkid = ?",
                "i", trunk.getId());
        List<Item> saveDatas = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                var item = ((Item) obj);
                item.setTrunk(trunk);
                saveDatas.add(item);
            }
        }
        return saveDatas;
    }

    public void saveOrUpdate(Collection<Item> items) {
        var bqhItem = new BatchQueryHolder<Item>();
        var bqhEquip = new BatchQueryHolder<Item>();
        var bqhPetItem = new BatchQueryHolder<Item>();
        for (var item : new HashSet<>(items)) {
            if (item instanceof Equip) {
                bqhEquip.addQueryInfo(createQueryHolder(item));
            } else if (item instanceof PetItem) {
                bqhPetItem.addQueryInfo(createQueryHolder(item));
            } else {
                bqhItem.addQueryInfo(createQueryHolder(item));
            }
        }

        executeQuery(bqhItem);
        executeQuery(bqhEquip);
        executeQuery(bqhPetItem);
    }

    public void saveOrUpdate(Item item) {
        var bqh = new BatchQueryHolder<Item>();
        bqh.addQueryInfo(createQueryHolder(item));
        executeQuery(bqh);
    }

    private void executeQuery(BatchQueryHolder batchQueryHolder) {
        try {
            itemWriteLock.lock();
            DatabaseManager.executeBatchQuery(batchQueryHolder);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            itemWriteLock.unlock();
        }
    }
}
