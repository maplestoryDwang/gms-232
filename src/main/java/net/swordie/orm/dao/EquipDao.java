package net.swordie.orm.dao;

import net.swordie.ms.client.character.items.Equip;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import net.swordie.ms.connection.db.converters.InlinedIntArrayConverter;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;

public class EquipDao implements SworDao<Equip> {

    private static final Logger log = LogManager.getLogger();

    private static final String INSERT_STRING =
            "title, " +
            "equippedDate, " +
            "prevBonusExpRate, " +
            "tuc, " +
            "cuc, " +
            "iStr, " +
            "iDex, " +
            "iInt, " +
            "iLuk, " +
            "iMaxHp, " +

            "iMaxMp, " +
            "iPad, " +
            "iMad, " +
            "iPDD, " +
            "iMDD, " +
            "iAcc, " +
            "iEva, " +
            "iCraft, " +
            "iSpeed, " +
            "iJump, " +

            "attribute, " +
            "levelUpType, " +
            "level, " +
            "exp, " +
            "durability, " +
            "iuc, " +
            "iPvpDamage, " +
            "iReduceReq, " +
            "specialAttribute, " +
            "durabilityMax, " +

            "iIncReq, " +
            "growthEnchant, " +
            "psEnchant, " +
            "bdr, " +
            "imdr, " +
            "damR, " +
            "statR, " +
            "cuttable, " +
            "exGradeOption, " +
            "hyperUpgrade, " +

            "itemState, " +
            "chuc, " +
            "soulOptionId, " +
            "soulSocketId, " +
            "soulOption, " +
            "options, " +
            "specialGrade, " +
            "tradeBlock, " +
            "equipTradeBlock, " +
            "sockets, " +

            "arc, " +
            "symbolExp, " +
            "symbolLevel, " +
            "fSTR, " +
            "fDEX, " +
            "fINT, " +
            "fLUK, " +
            "fATT, " +
            "fMATT, " +
            "fDEF, " +

            "fHP, " +
            "fMP, " +
            "fSpeed, " +
            "fJump, " +
            "fAllStat, " +
            "fBoss, " +
            "fDamage, " +
            "fLevel, ";

    private static final String UPDATE_STRING = ", " +
            "title = ?," +
            "equippedDate = ?," +
            "prevBonusExpRate = ?," +
            "tuc = ?," +
            "cuc = ?," +
            "iStr = ?," +
            "iDex = ?," +
            "iInt = ?," +
            "iLuk = ?," +
            "iMaxHp = ?," +
            "iMaxMp = ?," +
            "iPad = ?," +
            "iMad = ?," +
            "iPDD = ?," +
            "iMDD = ?," +
            "iAcc = ?," +
            "iEva = ?," +
            "iCraft = ?," +
            "iSpeed = ?," +
            "iJump = ?," +
            "attribute = ?," +
            "levelUpType = ?," +
            "level = ?," +
            "exp = ?," +
            "durability = ?," +
            "iuc = ?," +
            "iPvpDamage = ?," +
            "iReduceReq = ?," +
            "specialAttribute = ?," +
            "durabilityMax = ?," +
            "iIncReq = ?," +
            "growthEnchant = ?," +
            "psEnchant = ?," +
            "bdr = ?," +
            "imdr = ?," +
            "damR = ?," +
            "statR = ?," +
            "cuttable = ?," +
            "exGradeOption = ?," +
            "hyperUpgrade = ?," +
            "itemState = ?," +
            "chuc = ?," +
            "soulOptionId = ?," +
            "soulSocketId = ?," +
            "soulOption = ?," +
            "options = ?," +
            "specialGrade = ?," +
            "tradeBlock = ?," +
            "equipTradeBlock = ?," +
            "sockets = ?," +
            "arc = ?," +
            "symbolExp = ?," +
            "symbolLevel = ?," +
            "fSTR = ?," +
            "fDEX = ?," +
            "fINT = ?," +
            "fLUK = ?," +
            "fATT = ?," +
            "fMATT = ?," +
            "fDEF = ?," +
            "fHP = ?," +
            "fMP = ?," +
            "fSpeed = ?," +
            "fJump = ?," +
            "fAllStat = ?," +
            "fBoss = ?," +
            "fDamage = ?," +
            "fLevel = ?";

    public String createQuery(boolean needsId) {
        return needsId ? INSERT_STRING : UPDATE_STRING;
    }

    public Object[] getArgs(Equip equip) {
        return new Object[] {
                // Item
                equip.getItemId(),
                equip.getBagIndex(),
                equip.getBagItemIndex(),
                equip.getCashItemSerialNumber(),
                FileTimeConverter.toDbColumn(equip.getDateExpire()),
                equip.getInvType().ordinal(),
                equip.getType().ordinal(),
                equip.isCash(),
                equip.getQuantity(),
                equip.getOwner(),
                equip.getTrunk() == null ? null : equip.getTrunk().getId(),
                equip.getInventory() == null ? null : equip.getInventory().getId(),
                equip.getPowerCrystalInfo() == null ? null : equip.getPowerCrystalInfo().getBossId(),
                equip.getPowerCrystalInfo() == null ? null : equip.getPowerCrystalInfo().getPlayerCount(),
                equip.getPowerCrystalInfo() == null ? null : equip.getPowerCrystalInfo().getPrice(),
                equip.getPowerCrystalInfo() == null ? null : FileTimeConverter.toDbColumn(equip.getPowerCrystalInfo().getObtainedDate()),

                // Equip
                equip.getTitle(),
                FileTimeConverter.toDbColumn(equip.getEquippedDate()),
                equip.getPrevBonusExpRate(),
                equip.getTuc(),
                equip.getCuc(),
                equip.getiStr(),
                equip.getiDex(),
                equip.getiInt(),
                equip.getiLuk(),
                equip.getiMaxHp(),
                equip.getiMaxMp(),
                equip.getiPad(),
                equip.getiMad(),
                equip.getiPDD(),
                equip.getiMDD(),
                equip.getiAcc(),
                equip.getiEva(),
                equip.getiCraft(),
                equip.getiSpeed(),
                equip.getiJump(),
                equip.getAttribute(),
                equip.getLevelUpType(),
                equip.getItemLevel(),
                equip.getExp(),
                equip.getDurability(),
                equip.getIuc(),
                equip.getiPvpDamage(),
                equip.getiReduceReq(),
                equip.getSpecialAttribute(),
                equip.getDurabilityMax(),
                equip.getiIncReq(),
                equip.getGrowthEnchant(),
                equip.getPsEnchant(),
                equip.getBdr(),
                equip.getImdr(),
                equip.getDamR(),
                equip.getStatR(),
                equip.getCuttable(),
                equip.getExGradeOption(),
                equip.getHyperUpgrade(),
                equip.getItemState(),
                equip.getChuc(),
                equip.getSoulOptionId(),
                equip.getSoulSocketId(),
                equip.getSoulOption(),
                InlinedIntArrayConverter.toDbColumn(equip.getOptions()),
                equip.getSpecialGrade(),
                equip.isTradeBlock(),
                equip.isEquipTradeBlock(),
                InlinedIntArrayConverter.toDbColumn(equip.getSockets()),
                equip.getArc(),
                equip.getSymbolExp(),
                equip.getSymbolLevel(),
                equip.getfSTR(),
                equip.getfDEX(),
                equip.getfINT(),
                equip.getfLUK(),
                equip.getfATT(),
                equip.getfMATT(),
                equip.getfDEF(),
                equip.getfHP(),
                equip.getfMP(),
                equip.getfSpeed(),
                equip.getfJump(),
                equip.getfAllStat(),
                equip.getfBoss(),
                equip.getfDamage(),
                equip.getfLevel(),

                equip.getId(),
        };
    }

    public void delete(Equip equip) {
        if (equip == null || equip.getId() == 0) {
            log.debug("Trying to delete object " + equip + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM items WHERE id = ?;", equip.getId());
    }


    @Override
    public Equip fromResultSet(ResultSet resultSet, String alias) {
        // should never be called?
        return null;
    }

    public void fromResultSet(ResultSet resultSet, String alias, Item item) {
        Equip equip = (Equip) item;

        try {
            equip.setTitle(resultSet.getString(alias + ".title"));
            equip.setEquippedDate(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".equippeddate")));
            equip.setPrevBonusExpRate(resultSet.getInt(alias + ".prevbonusexprate"));
            equip.setOptions(InlinedIntArrayConverter.fromDbColumn(resultSet.getString(alias + ".options")));
            equip.setSockets(InlinedIntArrayConverter.fromDbColumn(resultSet.getString(alias + ".sockets")));
            equip.setTuc(resultSet.getShort(alias + ".tuc"));
            equip.setCuc(resultSet.getShort(alias + ".cuc"));
            equip.setiStr(resultSet.getShort(alias + ".istr"));
            equip.setiDex(resultSet.getShort(alias + ".idex"));
            equip.setiInt(resultSet.getShort(alias + ".iint"));
            equip.setiLuk(resultSet.getShort(alias + ".iluk"));
            equip.setiMaxHp(resultSet.getInt(alias + ".imaxhp"));
            equip.setiMaxMp(resultSet.getShort(alias + ".imaxmp"));
            equip.setiPad(resultSet.getShort(alias + ".ipad"));
            equip.setiMad(resultSet.getShort(alias + ".imad"));
            equip.setiPDD(resultSet.getShort(alias + ".ipdd"));
            equip.setiMDD(resultSet.getShort(alias + ".imdd"));
            equip.setiAcc(resultSet.getShort(alias + ".iacc"));
            equip.setiEva(resultSet.getShort(alias + ".ieva"));
            equip.setiCraft(resultSet.getShort(alias + ".icraft"));
            equip.setiSpeed(resultSet.getShort(alias + ".ispeed"));
            equip.setiJump(resultSet.getShort(alias + ".ijump"));
            equip.setAttribute(resultSet.getShort(alias + ".attribute"));
            equip.setLevelUpType(resultSet.getShort(alias + ".leveluptype"));
            equip.setLevel(resultSet.getShort(alias + ".level"));
            equip.setExp(resultSet.getShort(alias + ".exp"));
            equip.setDurability(resultSet.getShort(alias + ".durability"));
            equip.setIuc(resultSet.getShort(alias + ".iuc"));
            equip.setiPvpDamage(resultSet.getShort(alias + ".ipvpdamage"));
            equip.setiReduceReq(resultSet.getShort(alias + ".ireducereq"));
            equip.setSpecialAttribute(resultSet.getShort(alias + ".specialattribute"));
            equip.setDurabilityMax(resultSet.getShort(alias + ".durabilitymax"));
            equip.setiIncReq(resultSet.getShort(alias + ".iincreq"));
            equip.setGrowthEnchant(resultSet.getShort(alias + ".growthenchant"));
            equip.setPsEnchant(resultSet.getShort(alias + ".psenchant"));
            equip.setHyperUpgrade(resultSet.getShort(alias + ".hyperupgrade"));
            equip.setBdr(resultSet.getShort(alias + ".bdr"));
            equip.setImdr(resultSet.getShort(alias + ".imdr"));
            equip.setDamR(resultSet.getShort(alias + ".damr"));
            equip.setStatR(resultSet.getShort(alias + ".statr"));
            equip.setCuttable(resultSet.getShort(alias + ".cuttable"));
            equip.setExGradeOption(resultSet.getLong(alias + ".exgradeoption"));
            equip.setItemState(resultSet.getShort(alias + ".itemstate"));
            equip.setChuc(resultSet.getShort(alias + ".chuc"), false);
            equip.setSoulOptionId(resultSet.getShort(alias + ".souloptionid"));
            equip.setSoulSocketId(resultSet.getShort(alias + ".soulsocketid"));
            equip.setSoulOption(resultSet.getShort(alias + ".souloption"));
            equip.setSpecialGrade(resultSet.getInt(alias + ".specialgrade"));
            equip.setTradeBlock(resultSet.getBoolean(alias + ".tradeblock"));
            equip.setEquipTradeBlock(resultSet.getBoolean(alias + ".equiptradeblock"));
            equip.setArc(resultSet.getShort(alias + ".arc"));
            equip.setSymbolExp(resultSet.getInt(alias + ".symbolexp"));
            equip.setSymbolLevel(resultSet.getShort(alias + ".symbollevel"));
            equip.setfSTR(resultSet.getShort(alias + ".fstr"));
            equip.setfDEX(resultSet.getShort(alias + ".fdex"));
            equip.setfINT(resultSet.getShort(alias + ".fint"));
            equip.setfLUK(resultSet.getShort(alias + ".fluk"));
            equip.setfATT(resultSet.getShort(alias + ".fatt"));
            equip.setfMATT(resultSet.getShort(alias + ".fmatt"));
            equip.setfDEF(resultSet.getShort(alias + ".fdef"));
            equip.setfHP(resultSet.getShort(alias + ".fhp"));
            equip.setfMP(resultSet.getShort(alias + ".fmp"));
            equip.setfSpeed(resultSet.getShort(alias + ".fspeed"));
            equip.setfJump(resultSet.getShort(alias + ".fjump"));
            equip.setfAllStat(resultSet.getShort(alias + ".fallstat"));
            equip.setfBoss(resultSet.getShort(alias + ".fboss"));
            equip.setfDamage(resultSet.getShort(alias + ".fdamage"));
            equip.setfLevel(resultSet.getShort(alias + ".flevel"));
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
