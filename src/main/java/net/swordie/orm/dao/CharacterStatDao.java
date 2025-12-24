package net.swordie.orm.dao;

import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.ExtendSP;
import net.swordie.ms.client.character.NonCombatStatDayLimit;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CharacterStatDao implements SworDao<CharacterStat> {

    private static final Logger log = LogManager.getLogger();

    private static final ExtendSPDao extendSpDao = (ExtendSPDao) SworDaoFactory.getByClass(ExtendSP.class);
    private static final NonCombatStatDayLimitDao nonCombatStatDayLimitDao = (NonCombatStatDayLimitDao) SworDaoFactory.getByClass(NonCombatStatDayLimit.class);

    public void saveOrUpdate(CharacterStat characterStat) {
        if (characterStat == null) {
            return;
        }
        boolean needsId = characterStat.getId() == 0;

        // 1 to 1
        extendSpDao.saveOrUpdate(characterStat.getExtendSP());
        nonCombatStatDayLimitDao.saveOrUpdate(characterStat.getNonCombatStatDayLimit());

        String query;
        if (needsId) {
            query = "INSERT INTO characterstats(" +
                    "characterId, " +
                    "characterIdForLog, " +
                    "worldIdForLog, " +
                    "name, " +
                    "gender, " +
                    "skin, " +
                    "face, " +
                    "hair, " +
                    "mixBaseHairColor, " +
                    "mixAddHairColor, " +
                    "mixHairBaseProb, " +
                    "level, " +
                    "job, " +
                    "str, " +
                    "dex, " +
                    "inte, " +
                    "luk, " +
                    "hp, " +
                    "maxHp, " +
                    "mp, " +
                    "maxMp, " +
                    "ap, " +
                    "sp, " +
                    "exp, " +
                    "pop, " +
                    "money, " +
                    "wp, " +
                    "extendSP, " +
                    "posMap, " +
                    "portal, " +
                    "subJob, " +
                    "defFaceAcc, " +
                    "fatigue, " +
                    "lastFatigueUpdateTime, " +
                    "charismaExp, " +
                    "insightExp, " +
                    "willExp, " +
                    "craftExp, " +
                    "senseExp, " +
                    "charmExp, " +
                    "nonCombatStatDayLimit, " +
                    "pvpExp, " +
                    "pvpGrade, " +
                    "pvpPoint, " +
                    "pvpModeLevel, " +
                    "pvpModeType, " +
                    "eventPoint, " +
                    "albaActivityID, " +
                    "albaStartTime, " +
                    "albaDuration, " +
                    "albaSpecialReward, " +
                    "burning, " +
                    "lastLogout, " +
                    "gachExp, " +
                    "honorExp, " +
                    "nextAvailableFameTime, " +
                    "lastLevelObtainedTime, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE characterstats SET " +
                    "characterId = ?," +
                    "characterIdForLog = ?," +
                    "worldIdForLog = ?," +
                    "name = ?," +
                    "gender = ?," +
                    "skin = ?," +
                    "face = ?," +
                    "hair = ?," +
                    "mixBaseHairColor = ?," +
                    "mixAddHairColor = ?," +
                    "mixHairBaseProb = ?," +
                    "level = ?," +
                    "job = ?," +
                    "str = ?," +
                    "dex = ?," +
                    "inte = ?," +
                    "luk = ?," +
                    "hp = ?," +
                    "maxHp = ?," +
                    "mp = ?," +
                    "maxMp = ?," +
                    "ap = ?," +
                    "sp = ?," +
                    "exp = ?," +
                    "pop = ?," +
                    "money = ?," +
                    "wp = ?," +
                    "extendSP = ?," +
                    "posMap = ?," +
                    "portal = ?," +
                    "subJob = ?," +
                    "defFaceAcc = ?," +
                    "fatigue = ?," +
                    "lastFatigueUpdateTime = ?," +
                    "charismaExp = ?," +
                    "insightExp = ?," +
                    "willExp = ?," +
                    "craftExp = ?," +
                    "senseExp = ?," +
                    "charmExp = ?," +
                    "nonCombatStatDayLimit = ?," +
                    "pvpExp = ?," +
                    "pvpGrade = ?," +
                    "pvpPoint = ?," +
                    "pvpModeLevel = ?," +
                    "pvpModeType = ?," +
                    "eventPoint = ?," +
                    "albaActivityID = ?," +
                    "albaStartTime = ?," +
                    "albaDuration = ?," +
                    "albaSpecialReward = ?," +
                    "burning = ?," +
                    "lastLogout = ?," +
                    "gachExp = ?," +
                    "honorExp = ?," +
                    "nextAvailableFameTime = ?," +
                    "lastLevelObtainedTime = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                characterStat.getCharacterId(),
                characterStat.getCharacterIdForLog(),
                characterStat.getWorldIdForLog(),
                characterStat.getName(),
                characterStat.getGender(),
                characterStat.getSkin(),
                characterStat.getFace(),
                characterStat.getHair(),
                characterStat.getMixBaseHairColor(),
                characterStat.getMixAddHairColor(),
                characterStat.getMixHairBaseProb(),
                characterStat.getLevel(),
                characterStat.getJob(),
                characterStat.getStr(),
                characterStat.getDex(),
                characterStat.getInt(),
                characterStat.getLuk(),
                characterStat.getHp(),
                characterStat.getMaxHp(),
                characterStat.getMp(),
                characterStat.getMaxMp(),
                characterStat.getAp(),
                characterStat.getSp(),
                characterStat.getExp(),
                characterStat.getPop(),
                characterStat.getMoney(),
                characterStat.getWp(),
                characterStat.getExtendSP() == null ? null : characterStat.getExtendSP().getId(),
                characterStat.getPosMap(),
                characterStat.getPortal(),
                characterStat.getSubJob(),
                characterStat.getDefFaceAcc(),
                characterStat.getFatigue(),
                characterStat.getLastFatigueUpdateTime(),
                characterStat.getCharismaExp(),
                characterStat.getInsightExp(),
                characterStat.getWillExp(),
                characterStat.getCraftExp(),
                characterStat.getSenseExp(),
                characterStat.getCharmExp(),
                characterStat.getNonCombatStatDayLimit() == null ? null : characterStat.getNonCombatStatDayLimit().getId(),
                characterStat.getPvpExp(),
                characterStat.getPvpGrade(),
                characterStat.getPvpPoint(),
                characterStat.getPvpModeLevel(),
                characterStat.getPvpModeType(),
                characterStat.getEventPoint(),
                characterStat.getAlbaActivityID(),
                FileTimeConverter.toDbColumn(characterStat.getAlbaStartTime()),
                characterStat.getAlbaDuration(),
                characterStat.getAlbaSpecialReward(),
                characterStat.isBurning(),
                FileTimeConverter.toDbColumn(characterStat.getLastLogout()),
                characterStat.getGachExp(),
                characterStat.getHonorExp(),
                FileTimeConverter.toDbColumn(characterStat.getNextAvailableFameTime()),
                FileTimeConverter.toDbColumn(characterStat.getLastLevelObtainedTime()),
                characterStat.getId()
        );
        if (needsId) {
            characterStat.setId((int) id);
        }
    }

    public void delete(CharacterStat characterStat) {
        if (characterStat == null || characterStat.getId() == 0) {
            log.debug("Trying to delete object " + characterStat + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM characterstats WHERE ID = ?", characterStat.getId());
    }


    @Override
    public CharacterStat fromResultSet(ResultSet resultSet, String alias) {
        CharacterStat characterStat = null;

        try {
            characterStat = new CharacterStat(false);
            characterStat.setId(resultSet.getInt(alias + ".id"));
            characterStat.setCharacterId(resultSet.getInt(alias + ".characterid"));
            characterStat.setCharacterIdForLog(resultSet.getInt(alias + ".characteridforlog"));
            characterStat.setWorldIdForLog(resultSet.getInt(alias + ".worldidforlog"));
            characterStat.setName(resultSet.getString(alias + ".name"));
            characterStat.setGender(resultSet.getInt(alias + ".gender"));
            characterStat.setSkin(resultSet.getInt(alias + ".skin"));
            characterStat.setFace(resultSet.getInt(alias + ".face"));
            characterStat.setHair(resultSet.getInt(alias + ".hair"));
            characterStat.setMixBaseHairColor(resultSet.getInt(alias + ".mixbasehaircolor"));
            characterStat.setMixAddHairColor(resultSet.getInt(alias + ".mixaddhaircolor"));
            characterStat.setMixHairBaseProb(resultSet.getInt(alias + ".mixhairbaseprob"));
            characterStat.setLevel(resultSet.getInt(alias + ".level"));
            characterStat.setPrevLevel(resultSet.getInt(alias + ".level"));
            characterStat.setJob(resultSet.getInt(alias + ".job"));
            characterStat.setStr(resultSet.getInt(alias + ".str"));
            characterStat.setDex(resultSet.getInt(alias + ".dex"));
            characterStat.setInt(resultSet.getInt(alias + ".inte"));
            characterStat.setLuk(resultSet.getInt(alias + ".luk"));
            characterStat.setHp(resultSet.getInt(alias + ".hp"));
            characterStat.setMaxHp(resultSet.getInt(alias + ".maxhp"));
            characterStat.setMp(resultSet.getInt(alias + ".mp"));
            characterStat.setMaxMp(resultSet.getInt(alias + ".maxmp"));
            characterStat.setAp(resultSet.getInt(alias + ".ap"));
            characterStat.setSp(resultSet.getInt(alias + ".sp"));
            characterStat.setExp(resultSet.getLong(alias + ".exp"));
            characterStat.setPrevExp(resultSet.getLong(alias + ".exp"));
            characterStat.setPop(resultSet.getInt(alias + ".pop"));
            characterStat.setPrevPop(resultSet.getInt(alias + ".pop"));
            characterStat.setMoney(resultSet.getLong(alias + ".money"));
            characterStat.setWp(resultSet.getInt(alias + ".wp"));
            characterStat.setPosMap(resultSet.getLong(alias + ".posmap"));
            characterStat.setPortal(resultSet.getInt(alias + ".portal"));
            characterStat.setSubJob(resultSet.getInt(alias + ".subjob"));
            characterStat.setDefFaceAcc(resultSet.getInt(alias + ".deffaceacc"));
            characterStat.setFatigue(resultSet.getInt(alias + ".fatigue"));
            characterStat.setLastFatigueUpdateTime(resultSet.getInt(alias + ".lastfatigueupdatetime"));
            characterStat.setCharismaExp(resultSet.getInt(alias + ".charismaexp"));
            characterStat.setInsightExp(resultSet.getInt(alias + ".insightexp"));
            characterStat.setWillExp(resultSet.getInt(alias + ".willexp"));
            characterStat.setCraftExp(resultSet.getInt(alias + ".craftexp"));
            characterStat.setSenseExp(resultSet.getInt(alias + ".senseexp"));
            characterStat.setCharmExp(resultSet.getInt(alias + ".charmexp"));
            characterStat.setPvpExp(resultSet.getInt(alias + ".pvpexp"));
            characterStat.setPvpGrade(resultSet.getInt(alias + ".pvpgrade"));
            characterStat.setPvpPoint(resultSet.getInt(alias + ".pvppoint"));
            characterStat.setPvpModeLevel(resultSet.getInt(alias + ".pvpmodelevel"));
            characterStat.setPvpModeType(resultSet.getInt(alias + ".pvpmodetype"));
            characterStat.setEventPoint(resultSet.getInt(alias + ".eventpoint"));
            characterStat.setAlbaActivityID(resultSet.getInt(alias + ".albaactivityid"));
            characterStat.setAlbaStartTime(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".albastarttime")));
            characterStat.setAlbaDuration(resultSet.getInt(alias + ".albaduration"));
            characterStat.setAlbaSpecialReward(resultSet.getInt(alias + ".albaspecialreward"));
            characterStat.setBurning(resultSet.getBoolean(alias + ".burning"));
            characterStat.setLastLogout(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".lastlogout")));
            characterStat.setGachExp(resultSet.getInt(alias + ".gachexp"));
            characterStat.setHonorExp(resultSet.getInt(alias + ".honorexp"));
            characterStat.setNextAvailableFameTime(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".nextavailablefametime")));
            characterStat.setLastLevelObtainedTime(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".lastlevelobtainedtime")));

            characterStat.setExtendSP(extendSpDao.fromResultSet(resultSet, "esp"));
            characterStat.setNonCombatStatDayLimit(nonCombatStatDayLimitDao.fromResultSet(resultSet, "ncsdl"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return characterStat;
    }
}
