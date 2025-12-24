package net.swordie.orm.dao;

import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.items.PetItem;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PetItemDao implements SworDao<PetItem> {

    private static final Logger log = LogManager.getLogger();

    private static final String INSERT_STRING =
            "name," +
            "level," +
            "tameness," +
            "repleteness," +
            "petAttribute," +
            "petSkill," +
            "dateDead," +
            "remainLife," +
            "attribute," +
            "activeState," +
            "autoBuffSkill," +
            "autoBuffSkill2," +
            "petHue," +
            "giantRate, ";

    private static final String UPDATE_STRING = ", " +
            "name = ?," +
            "level = ?," +
            "tameness = ?," +
            "repleteness = ?," +
            "petAttribute = ?," +
            "petSkill = ?," +
            "dateDead = ?," +
            "remainLife = ?," +
            "attribute = ?," +
            "activeState = ?," +
            "autoBuffSkill = ?," +
            "autoBuffSkill2 = ?," +
            "petHue = ?," +
            "giantRate = ?";

    public String createQuery(boolean needsId) {
        return needsId ? INSERT_STRING : UPDATE_STRING;
    }

    public Object[] getArgs(PetItem petItem) {
        return new Object[] {
                // Item
                petItem.getItemId(),
                petItem.getBagIndex(),
                petItem.getBagItemIndex(),
                petItem.getCashItemSerialNumber(),
                FileTimeConverter.toDbColumn(petItem.getDateExpire()),
                petItem.getInvType().ordinal(),
                petItem.getType().ordinal(),
                petItem.isCash(),
                petItem.getQuantity(),
                petItem.getOwner(),
                petItem.getTrunk() == null ? null : petItem.getTrunk().getId(),
                petItem.getInventory() == null ? null : petItem.getInventory().getId(),
                petItem.getPowerCrystalInfo() == null ? null : petItem.getPowerCrystalInfo().getBossId(),
                petItem.getPowerCrystalInfo() == null ? null : petItem.getPowerCrystalInfo().getPlayerCount(),
                petItem.getPowerCrystalInfo() == null ? null : petItem.getPowerCrystalInfo().getPrice(),
                petItem.getPowerCrystalInfo() == null ? null : FileTimeConverter.toDbColumn(petItem.getPowerCrystalInfo().getObtainedDate()),

                // PetItem
                petItem.getName(),
                petItem.getLevel(),
                petItem.getTameness(),
                petItem.getRepleteness(),
                petItem.getPetAttribute(),
                petItem.getPetSkill(),
                FileTimeConverter.toDbColumn(petItem.getDateDead()),
                petItem.getRemainLife(),
                petItem.getAttribute(),
                petItem.getActiveState(),
                petItem.getAutoBuffSkill(),
                petItem.getAutoBuffSkill2(),
                petItem.getPetHue(),
                petItem.getGiantRate(),

                petItem.getId(),
        };
    }

    public void delete(PetItem petItem) {
        if (petItem == null || petItem.getId() == 0) {
            log.debug("Trying to delete object " + petItem + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM petitems WHERE id = ?;", petItem.getId());
    }


    @Override
    public PetItem fromResultSet(ResultSet resultSet, String alias) {
        // should never be called?
        return null;
    }

    public void fromResultSet(ResultSet resultSet, String alias, Item item) {
        PetItem pi = (PetItem) item;

        try {
            pi.setName(resultSet.getString(alias + ".name"));
            pi.setLevel(resultSet.getByte(alias + ".level"));
            pi.setTameness(resultSet.getShort(alias + ".tameness"));
            pi.setRepleteness(resultSet.getByte(alias + ".repleteness"));
            pi.setPetAttribute(resultSet.getShort(alias + ".petattribute"));
            pi.setPetSkill(resultSet.getInt(alias + ".petskill"));
            pi.setDateDead(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".datedead")));
            pi.setRemainLife(resultSet.getInt(alias + ".remainlife"));
            pi.setAttribute(resultSet.getShort(alias + ".attribute"));
            pi.setActiveState(resultSet.getByte(alias + ".activestate"));
            pi.setAutoBuffSkill(resultSet.getInt(alias + ".autobuffskill"));
            pi.setAutoBuffSkill2(resultSet.getInt(alias + ".autobuffskill2"));
            pi.setPetHue(resultSet.getInt(alias + ".pethue"));
            pi.setGiantRate(resultSet.getShort(alias + ".giantrate"));
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
