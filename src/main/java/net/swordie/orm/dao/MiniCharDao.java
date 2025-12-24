package net.swordie.orm.dao;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.character.MiniChar;
import net.swordie.ms.client.character.avatar.AvatarData;
import net.swordie.ms.connection.db.DatabaseManager;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class MiniCharDao implements SworDao<MiniChar> {

    private static final AvatarDataDao avatarDataDao = (AvatarDataDao) SworDaoFactory.getByClass(AvatarData.class);

    @Override
    public MiniChar fromResultSet(ResultSet resultSet, String alias) {
        MiniChar chr = null;

        try {
            chr = new MiniChar();

            var avatarData = avatarDataDao.fromResultSet(resultSet, "ad");
            var cs = avatarData.getCharacterStat();
            var al = avatarData.getAvatarLook();

            chr.setId(resultSet.getInt(alias + ".id"));
            chr.setJob(cs.getJob());
            chr.setName(cs.getName());
//            chr.setUserId(resultSet.getInt(alias + ".userid"));
//            chr.setGuildId(resultSet.getInt(alias + ".guild"));
//            chr.setRewardPoints(resultSet.getInt(alias + ".rewardPoints"));
//            chr.setPartyID(resultSet.getInt(alias + ".partyid"));
//            chr.setMonsterParkCount(resultSet.getByte(alias + ".monsterparkcount"));
//            chr.setPreviousFieldID(resultSet.getInt(alias + ".previousFieldID"));
//            chr.setQuickslotKeys(InlinedIntArrayConverter.fromDbColumn(resultSet.getString(alias + ".quickslotKeys")));
//            chr.setTowerChairs(InlinedIntArrayConverter.fromDbColumn(resultSet.getString(alias + ".towerChairs")));
//            chr.setHyperRockFields(InlinedIntArrayConverter.fromDbColumn(resultSet.getString(alias + ".hyperrockfields")));
//            chr.setLocation(resultSet.getInt(alias + ".location"));
//
//            chr.setAvatarData(avatarDataDao.fromResultSet(resultSet, "ad"));
//            chr.setEquippedInventory(inventoryDao.fromResultSet(resultSet, "i1"));
//            chr.setEquipInventory(inventoryDao.fromResultSet(resultSet, "i2"));
//            chr.setConsumeInventory(inventoryDao.fromResultSet(resultSet, "i3"));
//            chr.setEtcInventory(inventoryDao.fromResultSet(resultSet, "i4"));
//            chr.setInstallInventory(inventoryDao.fromResultSet(resultSet, "i5"));
//            chr.setCashInventory(inventoryDao.fromResultSet(resultSet, "i6"));
//            chr.setQuestManager(questManagerDao.fromResultSet(resultSet, "qm"));
//            chr.setMonsterBookInfo(monsterBookInfoDao.fromResultSet(resultSet, "mbi"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return chr;
    }

    public Set<MiniChar> byAccountMini(Account account) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM characters c " +
                "INNER JOIN avatardata ad on ad.id = c.avatardata " +
                "INNER JOIN avatarlook al on al.id = ad.avatarlook " +
                "INNER JOIN characterstats cs on cs.id = ad.characterstat " +
                "WHERE accid = ?", "c", account.getId());
        Set<MiniChar> chars = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                chars.add((MiniChar) obj);
            }
        }
        return chars;
    }
}
