package net.swordie.ms.client.character.items;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.db.converters.InlinedIntArrayConverter;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.*;
import net.swordie.ms.life.Android;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.containerclasses.EquipItemInfo;
import net.swordie.ms.loaders.containerclasses.ItemInfo;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Util;

import javax.persistence.Convert;
import javax.persistence.Transient;
import java.util.*;

/**
 * Created on 11/23/2017.
 */
public class Equip extends Item {
    private static final int MAX_OPTIONS = 7;

    private long serialNumber;
    private String title = "";
    private FileTime equippedDate = FileTime.fromType(FileTime.Type.PLAIN_ZERO);
    private int prevBonusExpRate;
    private short tuc;
    private short cuc;
    private short iStr;
    private short iDex;
    private short iInt;
    private short iLuk;
    private int iMaxHp;
    private short iMaxMp;
    private short iPad;
    private short iMad;
    private short iPDD;
    private short iMDD;
    private short iAcc;
    private short iEva;
    private short iCraft;
    private short iSpeed;
    private short iJump;
    private short attribute;
    private short levelUpType;
    private short level;
    private short exp;
    private short durability;
    private short iuc;
    private short iPvpDamage;
    private byte iReduceReq;
    private short specialAttribute;
    private short durabilityMax;
    private short iIncReq;
    private short growthEnchant;
    private short psEnchant;
    private short bdr;
    private short imdr;
    private short damR;
    private short statR;
    private short cuttable;
    private long exGradeOption;
    private short hyperUpgrade;
    private short itemState;
    private short chuc;
    private short soulOptionId;
    private short soulSocketId;
    private short soulOption;
    @Convert(converter = InlinedIntArrayConverter.class)
    private List<Integer> options; // base + add pot + anvil
    private int specialGrade;
    private boolean tradeBlock;
    private boolean equipTradeBlock;
    @Transient
    private Map<EnchantStat, Integer> enchantStats = new HashMap<>();

    @Convert(converter = InlinedIntArrayConverter.class)
    private List<Integer> sockets;
    private short arc;
    private int symbolExp;
    private short symbolLevel;
    @Transient
    private int dropStreak = 0;

    // flame stats
    // TODO: refactor these to be in a different table
    private short fSTR;
    private short fDEX;
    private short fINT;
    private short fLUK;
    private short fATT;
    private short fMATT;
    private short fDEF;
    private short fHP;
    private short fMP;
    private short fSpeed;
    private short fJump;
    private short fAllStat;
    private short fBoss;
    private short fDamage;
    private byte fLevel;

    public Equip() {
        super();
    }

    public Equip deepCopy() {
        Equip ret = new Equip();
        ret.quantity = quantity;
        ret.bagIndex = bagIndex;
        ret.serialNumber = serialNumber;
        ret.title = title;
        if (equippedDate != null) {
            ret.equippedDate = FileTime.currentTime();
        }
        ret.prevBonusExpRate = prevBonusExpRate;
        ret.tuc = tuc;
        ret.cuc = cuc;
        ret.iStr = iStr;
        ret.iDex = iDex;
        ret.iInt = iInt;
        ret.iLuk = iLuk;
        ret.iMaxHp = iMaxHp;
        ret.iMaxMp = iMaxMp;
        ret.iPad = iPad;
        ret.iMad = iMad;
        ret.iPDD = iPDD;
        ret.iMDD = iMDD;
        ret.iAcc = iAcc;
        ret.iEva = iEva;
        ret.iCraft = iCraft;
        ret.iSpeed = iSpeed;
        ret.iJump = iJump;
        ret.attribute = attribute;
        ret.levelUpType = levelUpType;
        ret.level = level;
        ret.exp = exp;
        ret.durability = durability;
        ret.iuc = iuc;
        ret.iPvpDamage = iPvpDamage;
        ret.iReduceReq = iReduceReq;
        ret.specialAttribute = specialAttribute;
        ret.durabilityMax = durabilityMax;
        ret.iIncReq = iIncReq;
        ret.growthEnchant = growthEnchant;
        ret.psEnchant = psEnchant;
        ret.bdr = bdr;
        ret.imdr = imdr;
        ret.damR = damR;
        ret.statR = statR;
        ret.cuttable = cuttable;
        ret.exGradeOption = exGradeOption;
        ret.hyperUpgrade = hyperUpgrade;
        ret.itemState = itemState;
        ret.chuc = chuc;
        ret.soulOptionId = soulOptionId;
        ret.soulSocketId = soulSocketId;
        ret.soulOption = soulOption;
        ret.options = new ArrayList<>();
        ret.options.addAll(Objects.requireNonNullElseGet(new ArrayList<>(options), () -> Arrays.asList(0, 0, 0, 0, 0, 0, 0)));
        ret.specialGrade = specialGrade;
        ret.tradeBlock = tradeBlock;
        ret.equipTradeBlock = equipTradeBlock;
        ret.setOwner(getOwner());
        ret.itemId = itemId;
        ret.cashItemSerialNumber = cashItemSerialNumber;
        ret.dateExpire = dateExpire.deepCopy();
        ret.invType = invType;
        ret.type = type;
        ret.isCash = isCash;
        ret.arc = arc;
        ret.symbolExp = symbolExp;
        ret.symbolLevel = symbolLevel;
        if (sockets != null && sockets.size() > 0) {
            ret.sockets = new ArrayList<>(sockets);
        } else {
            ret.sockets = Arrays.asList(0, 0, 0);
        }
        ret.fSTR = fSTR;
        ret.fDEX = fDEX;
        ret.fINT = fINT;
        ret.fLUK = fLUK;
        ret.fATT = fATT;
        ret.fMATT = fMATT;
        ret.fDEF = fDEF;
        ret.fHP = fHP;
        ret.fMP = fMP;
        ret.fSpeed = fSpeed;
        ret.fJump = fJump;
        ret.fAllStat = fAllStat;
        ret.fBoss = fBoss;
        ret.fDamage = fDamage;
        ret.fLevel = fLevel;
        ret.dropStreak = dropStreak;
        ret.arc = arc;
        ret.symbolExp = symbolExp;
        ret.symbolLevel = symbolLevel;
        ret.recalcEnchantmentStats();

        return ret;
    }

    public long getSerialNumber() {
        return getId();
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public FileTime getEquippedDate() {
        return equippedDate;
    }

    public int getPrevBonusExpRate() {
        return prevBonusExpRate;
    }

    // scroll slots
    public short getTuc() {
        return tuc;
    }

    public short getCuc() {
        return cuc;
    }

    public void setCuc(short cuc) {
        this.cuc = cuc;
    }

    public short getiStr() {
        return iStr;
    }

    public void setiStr(short iStr) {
        this.iStr = iStr;
    }

    public short getiDex() {
        return iDex;
    }

    public void setiDex(short iDex) {
        this.iDex = iDex;
    }

    public short getiInt() {
        return iInt;
    }

    public void setiInt(short iInt) {
        this.iInt = iInt;
    }

    public short getiLuk() {
        return iLuk;
    }

    public void setiLuk(short iLuk) {
        this.iLuk = iLuk;
    }

    public int getiMaxHp() {
        return iMaxHp;
    }

    public void setiMaxHp(int iMaxHp) {
        this.iMaxHp = iMaxHp;
    }

    public short getiMaxMp() {
        return iMaxMp;
    }

    public void setiMaxMp(short iMaxMp) {
        this.iMaxMp = iMaxMp;
    }

    public short getiPad() {
        return iPad;
    }

    public void setiPad(short iPad) {
        this.iPad = iPad;
    }

    public short getiMad() {
        return iMad;
    }

    public void setiMad(short iMad) {
        this.iMad = iMad;
    }

    public short getiPDD() {
        return iPDD;
    }

    public void setiPDD(short iPDD) {
        this.iPDD = iPDD;
    }

    public short getiMDD() {
        return iMDD;
    }

    public void setiMDD(short iMDD) {
        this.iMDD = iMDD;
    }

    public short getiAcc() {
        return iAcc;
    }

    public void setiAcc(short iAcc) {
        this.iAcc = iAcc;
    }

    public short getiEva() {
        return iEva;
    }

    public void setiEva(short iEva) {
        this.iEva = iEva;
    }

    public short getiCraft() {
        return iCraft;
    }

    public void setiCraft(short iCraft) {
        this.iCraft = iCraft;
    }

    public short getiSpeed() {
        return iSpeed;
    }

    public void setiSpeed(short iSpeed) {
        this.iSpeed = iSpeed;
    }

    public short getiJump() {
        return iJump;
    }

    public void setiJump(short iJump) {
        this.iJump = iJump;
    }

    public short getAttribute() {
        return attribute;
    }

    public void setAttribute(short attribute) {
        this.attribute = attribute;
    }

    public void addAttribute(EquipAttribute ea) {
        short attr = getAttribute();
        attr |= ea.getVal();
        setAttribute(attr);
    }

    public short getLevelUpType() {
        return levelUpType;
    }

    public void setLevelUpType(short levelUpType) {
        this.levelUpType = levelUpType;
    }

    public short getItemLevel() {
        return level;
    }

    public void setLevel(short level) {
        this.level = level;
    }

    public short getExp() {
        return exp;
    }

    public void setExp(short exp) {
        this.exp = exp;
    }

    public short getDurability() {
        return durability;
    }

    public void setDurability(short durability) {
        this.durability = durability;
    }

    public short getIuc() {
        return iuc;
    }

    public void setIuc(short iuc) {
        this.iuc = iuc;
    }

    public short getiPvpDamage() {
        return iPvpDamage;
    }

    public void setiPvpDamage(short iPvpDamage) {
        this.iPvpDamage = iPvpDamage;
    }

    public byte getiReduceReq() {
        return iReduceReq;
    }

    public void setiReduceReq(short iReduceReq) {
        this.iReduceReq = (byte) iReduceReq;
    }

    public short getSpecialAttribute() {
        return specialAttribute;
    }

    public void setSpecialAttribute(short specialAttribute) {
        this.specialAttribute = specialAttribute;
    }

    public void addSpecialAttribute(EquipSpecialAttribute esa) {
        short attr = getSpecialAttribute();
        attr |= esa.getVal();
        setSpecialAttribute(attr);
    }

    public long getExGradeOption() {
        return exGradeOption;
    }

    public void setExGradeOption(long exGradeOption) {
        this.exGradeOption = exGradeOption;
    }

    public short getCuttable() {
        return cuttable;
    }

    public void setCuttable(short cuttable) {
        this.cuttable = cuttable;
    }

    public short getStatR() {
        return statR;
    }

    public void setStatR(short statR) {
        this.statR = statR;
    }

    public short getDamR() {
        return damR;
    }

    public void setDamR(short damR) {
        this.damR = damR;
    }

    public short getImdr() {
        return imdr;
    }

    public void setImdr(short imdr) {
        this.imdr = imdr;
    }

    public short getBdr() {
        return bdr;
    }

    public void setBdr(short bdr) {
        this.bdr = bdr;
    }

    public short getPsEnchant() {
        return psEnchant;
    }

    public void setPsEnchant(short psEnchant) {
        this.psEnchant = psEnchant;
    }

    public short getGrowthEnchant() {
        return growthEnchant;
    }

    public void setGrowthEnchant(short growthEnchant) {
        this.growthEnchant = growthEnchant;
    }

    public short getiIncReq() {
        return iIncReq;
    }

    public void setiIncReq(short iIncReq) {
        this.iIncReq = iIncReq;
    }

    public short getDurabilityMax() {
        return durabilityMax;
    }

    public void setDurabilityMax(short durabilityMax) {
        this.durabilityMax = durabilityMax;
    }

    public short getItemState() {
        return itemState;
    }

    public void setItemState(short itemState) {
        this.itemState = itemState;
    }

    public short getHyperUpgrade() {
        return hyperUpgrade;
    }

    public void setHyperUpgrade(short hyperUpgrade) {
        this.hyperUpgrade = hyperUpgrade;
    }

    public short getGrade() {
        ItemGrade bonusGrade = ItemGrade.getGradeByVal(getBonusGrade());
        if (bonusGrade.isHidden()) {
            return ItemGrade.getHiddenBonusGradeByBaseGrade(ItemGrade.getGradeByVal(getBaseGrade())).getVal();
        }
        return getBaseGrade();
    }

    public short getBaseGrade() {
        return ItemGrade.getGradeByOption(getOptionBase(0)).getVal();
    }

    public short getBonusGrade() {
        return ItemGrade.getGradeByOption(getOptionBonus(0)).getVal();
    }


    public short getChuc() {
        return chuc;
    }

    public void setChuc(short chuc) {
        setChuc(chuc, true);
    }

    public void setChuc(short chuc, boolean recalc) {
        this.chuc = chuc;
        if (recalc) {
            recalcEnchantmentStats();
        }
    }

    public short getSoulOptionId() {
        return soulOptionId;
    }

    public void setSoulOptionId(short soulOptionId) {
        this.soulOptionId = soulOptionId;
    }

    public short getSoulSocketId() {
        return soulSocketId;
    }

    public void setSoulSocketId(short soulSocketId) {
        this.soulSocketId = soulSocketId;
    }

    public short getSoulOption() {
        return soulOption;
    }

    public void setSoulOption(short soulOption) {
        this.soulOption = soulOption;
    }

    public List<Integer> getOptions() {
        if (options == null) {
            options = new ArrayList<>();
        }
        while (options.size() < MAX_OPTIONS) {
            options.add(0);
        }
        return options;
    }

    public void setOptions(List<Integer> options) {
        this.options = options;
    }

    public int getSpecialGrade() {
        return specialGrade;
    }

    public boolean isTradeBlock() {
        return tradeBlock;
    }

    public boolean isEquipTradeBlock() {
        return equipTradeBlock;
    }

    public void setEquipTradeBlock(boolean equipTradeBlock) {
        this.equipTradeBlock = equipTradeBlock;
    }

    public void setSerialNumber(long serialNumber) {
        this.serialNumber = serialNumber;
    }

    public void setEquippedDate(FileTime equippedDate) {
        this.equippedDate = equippedDate;
    }

    public void setPrevBonusExpRate(int prevBonusExpRate) {
        this.prevBonusExpRate = prevBonusExpRate;
    }

    public void setTuc(short tuc) {
        this.tuc = tuc;
    }

    public void setSpecialGrade(int specialGrade) {
        this.specialGrade = specialGrade;
    }

    public void setTradeBlock(boolean tradeBlock) {
        this.tradeBlock = tradeBlock;
    }

    public short getfSTR() {
        return fSTR;
    }

    public void setfSTR(int fSTR) {
        this.fSTR = (short) fSTR;
    }

    public short getfDEX() {
        return fDEX;
    }

    public void setfDEX(int fDEX) {
        this.fDEX = (short) fDEX;
    }

    public short getfINT() {
        return fINT;
    }

    public void setfINT(int fINT) {
        this.fINT = (short) fINT;
    }

    public short getfLUK() {
        return fLUK;
    }

    public void setfLUK(int fLUK) {
        this.fLUK = (short) fLUK;
    }

    public short getfATT() {
        return fATT;
    }

    public void setfATT(int fATT) {
        this.fATT = (short) fATT;
    }

    public short getfMATT() {
        return fMATT;
    }

    public void setfMATT(int fMATT) {
        this.fMATT = (short) fMATT;
    }

    public short getfDEF() {
        return fDEF;
    }

    public void setfDEF(int fDEF) {
        this.fDEF = (short) fDEF;
    }

    public short getfHP() {
        return fHP;
    }

    public void setfHP(int fHP) {
        this.fHP = (short) fHP;
    }

    public short getfMP() {
        return fMP;
    }

    public void setfMP(int fMP) {
        this.fMP = (short) fMP;
    }

    public short getfSpeed() {
        return fSpeed;
    }

    public void setfSpeed(int fSpeed) {
        this.fSpeed = (short) fSpeed;
    }

    public short getfJump() {
        return fJump;
    }

    public void setfJump(int fJump) {
        this.fJump = (short) fJump;
    }

    public short getfAllStat() {
        return fAllStat;
    }

    public void setfAllStat(int fAllStat) {
        this.fAllStat = (short) fAllStat;
    }

    public short getfBoss() {
        return fBoss;
    }

    public void setfBoss(int fBoss) {
        this.fBoss = (short) fBoss;
    }

    public short getfDamage() {
        return fDamage;
    }

    public void setfDamage(int fDamage) {
        this.fDamage = (short) fDamage;
    }

    public byte getfLevel() {
        return fLevel;
    }

    public void setfLevel(int fLevel) {
        this.fLevel = (byte) fLevel;
    }

    public void resetFlameStats() {
        this.fSTR = 0;
        this.fDEX = 0;
        this.fINT = 0;
        this.fLUK = 0;
        this.fATT = 0;
        this.fMATT = 0;
        this.fDEF = 0;
        this.fHP = 0;
        this.fMP = 0;
        this.fSpeed = 0;
        this.fJump = 0;
        this.fAllStat = 0;
        this.fBoss = 0;
        this.fDamage = 0;
        this.fLevel = 0;
    }

    public int getDropStreak() {
        return dropStreak;
    }

    public void setDropStreak(int dropStreak) {
        this.dropStreak = dropStreak;
    }

    public void encode(OutPacket outPacket) {
        // GW_ItemSlotBase
        super.encode(outPacket);
        // GW_ItemSlotEquip
//        outPacket.encodeLong(getSerialNumber());
//        outPacket.encodeString(getTitle(), 13);
//        getEquippedDate().encode(outPacket);
//        outPacket.encodeInt(getPrevBonusExpRate());
        // GW_ItemSlotEquipBase
        int mask = getStatMask(0);
        outPacket.encodeInt(mask);
        if (hasStat(EquipBaseStat.tuc)) {
            outPacket.encodeByte(getTuc());
        }
        if (hasStat(EquipBaseStat.cuc)) {
            outPacket.encodeByte(getCuc());
        }
        if (hasStat(EquipBaseStat.iStr)) {
            outPacket.encodeShort(getTotalStat(EquipBaseStat.iStr));
        }
        if (hasStat(EquipBaseStat.iDex)) {
            outPacket.encodeShort(getTotalStat(EquipBaseStat.iDex));
        }
        if (hasStat(EquipBaseStat.iInt)) {
            outPacket.encodeShort(getTotalStat(EquipBaseStat.iInt));
        }
        if (hasStat(EquipBaseStat.iLuk)) {
            outPacket.encodeShort(getTotalStat(EquipBaseStat.iLuk));
        }
        if (hasStat(EquipBaseStat.iMaxHP)) {
            var hp = getTotalStat(EquipBaseStat.iMaxHP);
            if (ItemConstants.isSymbol(getItemId())) {
                hp &= hp & 0xFFFF; // make HP nonnegative
                hp /= 10;
            }
            outPacket.encodeShort(hp);
        }
        if (hasStat(EquipBaseStat.iMaxMP)) {
            outPacket.encodeShort(getTotalStat(EquipBaseStat.iMaxMP));
        }
        if (hasStat(EquipBaseStat.iPAD)) {
            outPacket.encodeShort(getTotalStat(EquipBaseStat.iPAD));
        }
        if (hasStat(EquipBaseStat.iMAD)) {
            outPacket.encodeShort(getTotalStat(EquipBaseStat.iMAD));
        }
        if (hasStat(EquipBaseStat.iDEF)) {
            outPacket.encodeShort(getTotalStat(EquipBaseStat.iDEF));
        }
        if (hasStat(EquipBaseStat.iCraft)) {
            outPacket.encodeShort(getiCraft());
        }
        if (hasStat(EquipBaseStat.iSpeed)) {
            outPacket.encodeShort(getTotalStat(EquipBaseStat.iSpeed));
        }
        if (hasStat(EquipBaseStat.iJump)) {
            outPacket.encodeShort(getTotalStat(EquipBaseStat.iJump));
        }
        if (hasStat(EquipBaseStat.attribute)) {
            outPacket.encodeShort(getAttribute());
        }
        if (hasStat(EquipBaseStat.levelUpType)) {
            outPacket.encodeByte(getLevelUpType());
        }
        if (hasStat(EquipBaseStat.level)) {
            outPacket.encodeByte(getItemLevel());
        }
        if (hasStat(EquipBaseStat.exp)) {
            outPacket.encodeLong(getExp());
        }
        if (hasStat(EquipBaseStat.durability)) {
            outPacket.encodeInt(getDurability());
        }
        if (hasStat(EquipBaseStat.iuc)) {
            outPacket.encodeInt(getIuc()); // hammer
        }
        if (hasStat(EquipBaseStat.iPvpDamage)) {
            outPacket.encodeShort(getiPvpDamage());
        }
        if (hasStat(EquipBaseStat.iReduceReq)) {
            outPacket.encodeByte(getTotalStat(EquipBaseStat.iReduceReq));
        }
        if (hasStat(EquipBaseStat.specialAttribute)) {
            outPacket.encodeShort(getSpecialAttribute());
        }
        if (hasStat(EquipBaseStat.durabilityMax)) {
            outPacket.encodeInt(getDurabilityMax());
        }
        if (hasStat(EquipBaseStat.iIncReq)) {
            outPacket.encodeByte(getiIncReq());
        }
        if (hasStat(EquipBaseStat.growthEnchant)) {
            outPacket.encodeByte(getGrowthEnchant()); // ygg
        }
        if (hasStat(EquipBaseStat.psEnchant)) {
            outPacket.encodeByte(getPsEnchant()); // final strike
        }
        if (hasStat(EquipBaseStat.bdr)) {
            outPacket.encodeByte(getBdr() + getfBoss()); // bd
        }
        if (hasStat(EquipBaseStat.imdr)) {
            outPacket.encodeByte(getImdr()); // ied
        }
        outPacket.encodeInt(getStatMask(1)); // mask 2
        if (hasStat(EquipBaseStat.damR)) {
            outPacket.encodeByte(getTotalStat(EquipBaseStat.damR)); // td
        }
        if (hasStat(EquipBaseStat.statR)) {
            outPacket.encodeByte(getTotalStat(EquipBaseStat.statR)); // as
        }
        if (hasStat(EquipBaseStat.cuttable)) {
            outPacket.encodeByte(getCuttable()); // sok
        }
        if (hasStat(EquipBaseStat.exGradeOption)) {
            outPacket.encodeLong(getExGradeOption());
        }
        if (hasStat(EquipBaseStat.hyperUpgrade)) {
            outPacket.encodeInt(getHyperUpgrade());
        }
        // GW_ItemSlotEquipOpt
        outPacket.encodeString(getOwner());
        outPacket.encodeByte(getGrade());
        outPacket.encodeByte(getChuc());
        for (int i = 0; i < 7; i++) {
            outPacket.encodeShort(getOptions().get(i)); // 7x, last is fusion anvil
        }
        short socketMask = 0; // 0b0nnn_kkkb: from right to left: boolean active, k empty, n has socket
        for (int i = 0; i < getSockets().size(); i++) {
            int socket = getSocket(i);
            // Self made numbers for socket: 3 == empty (since 0 is already taken for STR+1, similar for 1/2)
            if (socket != 0) {
                socketMask |= 1;
                socketMask |= 1 << i + 1;
                if (socket != ItemConstants.EMPTY_SOCKET_ID) {
                    socketMask |= 1 << (i + 4); // 3 sockets, look at the comment at socketMask.
                }
            }
        }
        outPacket.encodeShort(socketMask); // socket state, 0 = nothing, 0xFF = see loop
        for (int i = 0; i < 3; i++) {
            // sockets 0 through 2 (-1 = none, 0 = empty, >0 = filled
            outPacket.encodeShort(getSocket(i));
        }
        outPacket.encodeInt(0);
        if (!isCash()) {
            outPacket.encodeLong(getId());
        }
        outPacket.encodeFT(FileTime.fromType(FileTime.Type.MAX_TIME)); // ftDateExpire

        // GW_CashItemOption::Decode
        outPacket.encodeLong(isCash() ? 0 : getId()); // cash sn already encoded in the super's encode
        outPacket.encodeFT(FileTime.fromType(FileTime.Type.MAX_TIME)); // ftDateExpire
        outPacket.encodeInt(getGrade());
        for (int i = 0; i < 3; i++) {
            outPacket.encodeInt(getOptionBase(i));
        }
        // ~

        outPacket.encodeShort(getSoulOptionId()); // soul ID
        outPacket.encodeShort(getSoulSocketId()); // enchanter ID
        outPacket.encodeShort(getSoulOption()); // optionID (same as potentials)

        if (ItemConstants.isSymbol(getItemId())) {
            outPacket.encodeShort(getArc());
            outPacket.encodeInt(getSymbolExp());
            outPacket.encodeShort(getSymbolLevel());
        }

        // sub start
        outPacket.encodeShort(0);
        outPacket.encodeLong(0);
        outPacket.encodeLong(0);
        outPacket.encodeLong(0);
        // sub end

        if (ItemConstants.isAndroid(getItemId())) {
            Android.encodeDefaultAndroidInfo(outPacket);
        }
    }

    public int getTotalStat(EquipBaseStat stat) {
        switch (stat) {
            case tuc:
                return getTuc();
            case cuc:
                return getCuc();
            case iStr:
                return getiStr() + getfSTR() + getEnchantStat(EnchantStat.STR);
            case iDex:
                return getiDex() + getfDEX() + getEnchantStat(EnchantStat.DEX);
            case iInt:
                return getiInt() + getfINT() + getEnchantStat(EnchantStat.INT);
            case iLuk:
                return getiLuk() + getfLUK() + getEnchantStat(EnchantStat.LUK);
            case iMaxHP:
                return getiMaxHp() + getfHP() + getEnchantStat(EnchantStat.MHP);
            case iMaxMP:
                return getiMaxMp() + getfMP() + getEnchantStat(EnchantStat.MMP);
            case iPAD:
                return getiPad() + getfATT() + getEnchantStat(EnchantStat.PAD);
            case iMAD:
                return getiMad() + getfMATT() + getEnchantStat(EnchantStat.MAD);
            case iDEF:
                return getiPDD() + getfDEF() + getEnchantStat(EnchantStat.DEF);
            case iCraft:
                return getiCraft();
            case iSpeed:
                return getiSpeed() + getfSpeed() + getEnchantStat(EnchantStat.SPEED);
            case iJump:
                return getiJump() + getfJump() + getEnchantStat(EnchantStat.JUMP);
            case attribute:
                return getAttribute();
            case levelUpType:
                return getLevelUpType();
            case level:
                return getItemLevel();
            case exp:
                return getExp();
            case durability:
                return getDurability();
            case iuc:
                return getIuc(); // hammer
            case iPvpDamage:
                return getiPvpDamage();
            case iReduceReq:
                return getiReduceReq() + getfLevel();
            case specialAttribute:
                return getSpecialAttribute();
            case durabilityMax:
                return getDurabilityMax();
            case iIncReq:
                return getiIncReq();
            case growthEnchant:
                return getGrowthEnchant(); // ygg
            case psEnchant:
                return getPsEnchant(); // final strike
            case bdr:
                return getBdr() + getfBoss(); // bd
            case imdr:
                return getImdr(); // ied
            case damR:
                return getDamR() + getfDamage(); // td
            case statR:
                return getStatR() + getfAllStat(); // as
            case cuttable:
                return getCuttable(); // sok
            case exGradeOption:
                return (int) getExGradeOption();
            case hyperUpgrade:
                return getHyperUpgrade();
        }
        return 0;
    }

    private boolean hasStat(EquipBaseStat ebs) {
        return getBaseStat(ebs) != 0 || getBaseStatFlame(ebs) != 0 || getEnchantmentStat(ebs) != 0;
    }

    private int getStatMask(int pos) {
        int mask = 0;
        for (EquipBaseStat ebs : EquipBaseStat.values()) {
            if (hasStat(ebs) && ebs.getPos() == pos) {
                mask |= ebs.getVal();
            }
        }
        return mask;
    }

    public void setBaseStat(EquipBaseStat equipBaseStat, long amount) {
        switch (equipBaseStat) {
            case tuc:
                setTuc((short) amount);
                break;
            case cuc:
                setCuc((short) amount);
                break;
            case iStr:
                setiStr((short) amount);
                break;
            case iDex:
                setiDex((short) amount);
                break;
            case iInt:
                setiInt((short) amount);
                break;
            case iLuk:
                setiLuk((short) amount);
                break;
            case iMaxHP:
                setiMaxHp((short) amount);
                break;
            case iMaxMP:
                setiMaxMp((short) amount);
                break;
            case iPAD:
                setiPad((short) amount);
                break;
            case iMAD:
                setiMad((short) amount);
                break;
            case iDEF:
                setiPDD((short) amount);
                break;
            case iCraft:
                setiCraft((short) amount);
                break;
            case iSpeed:
                setiSpeed((short) amount);
                break;
            case iJump:
                setiJump((short) amount);
                break;
            case attribute:
                setAttribute((short) amount);
                break;
            case levelUpType:
                setLevelUpType((short) amount);
                break;
            case level:
                setLevel((short) amount);
                break;
            case exp:
                setExp((short) amount);
                break;
            case durability:
                setDurability((short) amount);
                break;
            case iuc:
                setIuc((short) amount);
                break;
            case iPvpDamage:
                setiPvpDamage((short) amount);
                break;
            case iReduceReq:
                setiReduceReq((byte) amount);
                break;
            case specialAttribute:
                setSpecialAttribute((short) amount);
                break;
            case durabilityMax:
                setDurabilityMax((short) amount);
                break;
            case iIncReq:
                setiIncReq((short) amount);
                break;
            case growthEnchant:
                setGrowthEnchant((short) amount);
                break;
            case psEnchant:
                setPsEnchant((short) amount);
                break;
            case bdr:
                setBdr((short) amount);
                break;
            case imdr:
                setImdr((short) amount);
                break;
            case damR:
                setDamR((short) amount);
                break;
            case statR:
                setStatR((short) amount);
                break;
            case cuttable:
                setCuttable((short) amount);
                break;
            case exGradeOption:
                setExGradeOption(amount);
                break;
            case hyperUpgrade:
                setHyperUpgrade((short) amount);
                break;
        }
    }

    public long getBaseStat(EquipBaseStat equipBaseStat) {
        switch (equipBaseStat) {
            case tuc:
                return getTuc();
            case cuc:
                return getCuc();
            case iStr:
                return getiStr();
            case iDex:
                return getiDex();
            case iInt:
                return getiInt();
            case iLuk:
                return getiLuk();
            case iMaxHP:
                return getiMaxHp();
            case iMaxMP:
                return getiMaxMp();
            case iPAD:
                return getiPad();
            case iMAD:
                return getiMad();
            case iDEF:
                return getiPDD();
            case iCraft:
                return getiCraft();
            case iSpeed:
                return getiSpeed();
            case iJump:
                return getiJump();
            case attribute:
                return getAttribute();
            case levelUpType:
                return getLevelUpType();
            case level:
                return getItemLevel();
            case exp:
                return getExp();
            case durability:
                return getDurability();
            case iuc:
                return getIuc();
            case iPvpDamage:
                return getiPvpDamage();
            case iReduceReq:
                return getiReduceReq();
            case specialAttribute:
                return getSpecialAttribute();
            case durabilityMax:
                return getDurabilityMax();
            case iIncReq:
                return getiIncReq();
            case growthEnchant:
                return getGrowthEnchant();
            case psEnchant:
                return getPsEnchant();
            case bdr:
                return getBdr();
            case imdr:
                return getImdr();
            case damR:
                return getDamR();
            case statR:
                return getStatR();
            case cuttable:
                return getCuttable();
            case exGradeOption:
                return getExGradeOption();
            case hyperUpgrade:
                return getHyperUpgrade();
            default:
                return 0;
        }
    }

    public long getBaseStatFlame(EquipBaseStat equipBaseStat) {
        switch (equipBaseStat) {
            case iStr:
                return getfSTR();
            case iDex:
                return getfDEX();
            case iInt:
                return getfINT();
            case iLuk:
                return getfLUK();
            case iMaxHP:
                return getfHP();
            case iMaxMP:
                return getfMP();
            case iPAD:
                return getfATT();
            case iMAD:
                return getfMATT();
            case iDEF:
                return getfDEF();
            case iSpeed:
                return getfSpeed();
            case iJump:
                return getfJump();
            case statR:
                return getfAllStat();
            case bdr:
                return getfBoss();
            case damR:
                return getfDamage();
            case iReduceReq:
                return getfLevel();
            default:
                return 0;
        }
    }

    public long getEnchantmentStat(EquipBaseStat equipBaseStat) {
        switch (equipBaseStat) {
            case iStr:
                return getEnchantStat(EnchantStat.STR);
            case iDex:
                return getEnchantStat(EnchantStat.DEX);
            case iInt:
                return getEnchantStat(EnchantStat.INT);
            case iLuk:
                return getEnchantStat(EnchantStat.LUK);
            case iMaxHP:
                return getEnchantStat(EnchantStat.MHP);
            case iMaxMP:
                return getEnchantStat(EnchantStat.MMP);
            case iPAD:
                return getEnchantStat(EnchantStat.PAD);
            case iMAD:
                return getEnchantStat(EnchantStat.MAD);
            case iDEF:
                return getEnchantStat(EnchantStat.DEF);
            case iSpeed:
                return getEnchantStat(EnchantStat.SPEED);
            case iJump:
                return getEnchantStat(EnchantStat.JUMP);
            default:
                return 0;
        }
    }

    public void addStat(EquipBaseStat stat, int amount) {
        int cur = (int) getBaseStat(stat);
        int newStat = cur + amount >= 0 ? cur + amount : 0; // stat cannot be negative
        setBaseStat(stat, newStat);
    }

    public boolean hasAttribute(EquipAttribute equipAttribute) {
        return (getAttribute() & equipAttribute.getVal()) != 0;
    }

    public boolean hasSpecialAttribute(EquipSpecialAttribute equipSpecialAttribute) {
        return (getSpecialAttribute() & equipSpecialAttribute.getVal()) != 0;
    }

    public void removeAttribute(EquipAttribute equipAttribute) {
        if (!hasAttribute(equipAttribute)) {
            return;
        }
        short attr = getAttribute();
        attr ^= equipAttribute.getVal();
        setAttribute(attr);
    }

    public void removeSpecialAttribute(EquipSpecialAttribute equipSpecialAttribute) {
        if (!hasSpecialAttribute(equipSpecialAttribute)) {
            return;
        }
        short attr = getSpecialAttribute();
        attr ^= equipSpecialAttribute.getVal();
        setSpecialAttribute(attr);
    }

    public TreeMap<EnchantStat, Integer> getHyperUpgradeStats() {
        Comparator<EnchantStat> comparator = Comparator.comparingInt(EnchantStat::getVal);
        TreeMap<EnchantStat, Integer> res = new TreeMap<>(comparator);
        for (EnchantStat es : EnchantStat.values()) {
            int curAmount = (int) getBaseStat(es.getEquipBaseStat());
            if (curAmount > 0 || es == EnchantStat.PAD || es == EnchantStat.MAD || es == EnchantStat.DEF) {
                res.put(es, GameConstants.getEnchantmentValByChuc(this, es, getChuc(), curAmount));
            }
        }
        return res;
    }

    public int[] getOptionBase() {
        return new int[]{getOptions().get(0), getOptions().get(1), getOptions().get(2)};
    }

    public int getOptionBase(int num) {
        return getOptions().get(num);
    }

    public int setOptionBase(int num, int val) {
        return getOptions().set(num, val);
    }

    public int[] getOptionBonus() {
        return new int[]{getOptions().get(3), getOptions().get(4), getOptions().get(5)};
    }

    public int getOption(int num, boolean bonus) {
        return bonus ? getOptionBonus(num) : getOptionBase(num);
    }

    public int getOptionBonus(int num) {
        return getOptions().get(num + 3);
    }

    public void setOptionBonus(int num, int val) {
        getOptions().set(num + 3, val);
    }

    public void setOption(int num, int val, boolean bonus) {
        if (bonus) {
            setOptionBonus(num, val);
        } else {
            setOptionBase(num, val);
        }
    }

    public int getRandomOption(boolean bonus, int line) {
        List<Integer> possibleOptions = ItemConstants.getWeightedOptionsByEquip(this, bonus, line);
        return Util.getRandomFromCollection(possibleOptions);
    }

    // required level for players to equip this
    public int getRequiredLevel() {
        // the highest of them as negative values won't work as intended
        var equipBase = ItemData.getEquipInfoById(getItemId());
        var rlevel = equipBase != null ? equipBase.getrLevel() : 0;
        return Math.max(0, rlevel + getiIncReq() - (getiReduceReq() + getfLevel()));
    }

    /**
     * Resets the potential of this equip's base options. Takes the value of an ItemGrade (1-4), and sets the appropriate values.
     * Also calculates if a third line should be added.
     *
     * @param val             The value of the item's grade (HiddenRare~HiddenLegendary).getVal().
     * @param thirdLineChance The chance of a third line being added.
     */
    public void setHiddenOptionBase(short val, int thirdLineChance) {
        if (!ItemConstants.canEquipHavePotential(this)) {
            return;
        }

        int max = 3;
        if (getOptionBase(2) == 0) {
            // If this equip did not have a 3rd line already, thirdLineChance to get it
            if (Util.succeedProp(100 - thirdLineChance)) {
                max = 2;
            }
        }
        for (int i = 0; i < max; i++) {
            setOptionBase(i, -val);
        }
    }

    public void setHiddenOptionBonus(short val, int thirdLineChance) {
        if (!ItemConstants.canEquipHavePotential(this)) {
            return;
        }

        int max = 3;
        if (getOptionBonus(2) == 0) {
            // If this equip did not have a 3rd line already, thirdLineChance to get it
            if (Util.succeedProp(100 - thirdLineChance)) {
                max = 2;
            }
        }
        for (int i = 0; i < max; i++) {
            setOptionBonus(i, -val);
        }
    }

    public void releaseOptions(boolean bonus) {
        if (!ItemConstants.canEquipHavePotential(this)) {
            return;
        }

        for (int i = 0; i < 3; i++) {
            if (getOption(i, bonus) < 0) {
                setOption(i, getRandomOption(bonus, i), bonus);
            }
        }
    }

    public int getAnvilId() {
        return getOptions().get(6); // Anvil
    }

    public Map<EnchantStat, Integer> getEnchantStats() {
        return enchantStats;
    }

    public void putEnchantStat(EnchantStat es, int val) {
        getEnchantStats().put(es, val);
    }

    public void setEnchantStats(Map<EnchantStat, Integer> enchantStats) {
        this.enchantStats = enchantStats;
    }

    public void recalcEnchantmentStats() {
        if (getChuc() >= GameConstants.getMaxStars(this)) {
            setHyperUpgrade((short) 0);
        } else if (getHyperUpgrade() == 0) {
            setHyperUpgrade((short) ItemState.AmazingHyperUpgradeChecked.getVal());
        }

        getEnchantStats().clear();
        for (int i = 0; i < getChuc(); i++) {
            for (EnchantStat es : getHyperUpgradeStats().keySet()) {
                putEnchantStat(es, getEnchantStats().getOrDefault(es, 0) +
                        GameConstants.getEnchantmentValByChuc(this, es, (short) i, (int) getBaseStat(es.getEquipBaseStat())));
            }
        }
    }

    /**
     * Returns the current value of an EnchantStat. Zero if absent.
     *
     * @param es The EnchantStat to get
     * @return the corresponding stat value
     */
    public int getEnchantStat(EnchantStat es) {
        return getEnchantStats().getOrDefault(es, 0);
    }

    public List<Integer> getSockets() {
        if (sockets == null) {
            sockets = Arrays.asList(0, 0, 0);
        }
        return sockets;
    }

    public void setSockets(List<Integer> sockets) {
        this.sockets = sockets;
    }

    public double getBaseStatForHakuFan(BaseStat baseStat) { // Only used for Inventory BaseStat calculating
        double res = 0;
        var equipBase = ItemData.getEquipInfoById(getItemId());
        var reqLevel = equipBase != null ? equipBase.getrLevel() : 0;

        // Potential
        for (int i = 0; i < getOptions().size() - 1; i++) { // last one is anvil => skipped
            int id = getOptions().get(i);
            int level = (reqLevel + getiIncReq()) / 10;
            ItemOption io = ItemData.getItemOptionById(id);
            if (io != null && io.isAppliedFromFan()) {
                Map<BaseStat, Double> valMap = io.getStatValuesByLevel(level);
                res += valMap.getOrDefault(baseStat, 0D);
            }
        }

        // Soul Potential
        if (getSoulOptionId() > 0) {
            int id = getSoulOption();
            int level = (reqLevel + getiIncReq()) / 10;
            ItemOption io = ItemData.getItemOptionById(id);
            if (io != null && io.isAppliedFromFan()) {
                Map<BaseStat, Double> valMap = io.getStatValuesByLevel(level);
                res += valMap.getOrDefault(baseStat, 0D);
            }
        }

        return res;
    }

    public double getBaseStat(BaseStat baseStat) {
        double res = 0;
        var equipBase = ItemData.getEquipInfoById(getItemId());
        var reqLevel = equipBase != null ? equipBase.getrLevel() : 0;

        // Potential
        for (int i = 0; i < getOptions().size() - 1; i++) { // last one is anvil => skipped
            int id = getOptions().get(i);
            int level = (reqLevel + getiIncReq()) / 10;
            ItemOption io = ItemData.getItemOptionById(id);
            if (io != null) {
                Map<BaseStat, Double> valMap = io.getStatValuesByLevel(level);
                res += valMap.getOrDefault(baseStat, 0D);
            }
        }

        // Nebulites
        for (int socket : getSockets()) {
            if (socket <= 0) {
                continue;
            }
            ItemInfo ii = ItemData.getItemInfoByID(ItemConstants.NEBILITE_BASE_ID + socket);
            if (ii != null) {
                Map<BaseStat, Double> valMap = ii.getOptionStats();
                res += valMap.getOrDefault(baseStat, 0D);
            }
        }

        // Soul Potential
        if (getSoulOptionId() > 0) {
            int id = getSoulOption();
            int level = (reqLevel + getiIncReq()) / 10;
            ItemOption io = ItemData.getItemOptionById(id);
            if (io != null) {
                Map<BaseStat, Double> valMap = io.getStatValuesByLevel(level);
                res += valMap.getOrDefault(baseStat, 0D);
            }
        }

        switch (baseStat) {
            case str:
                res += getTotalStat(EquipBaseStat.iStr);
                break;
            case dex:
                res += getTotalStat(EquipBaseStat.iDex);
                break;
            case inte:
                res += getTotalStat(EquipBaseStat.iInt);
                break;
            case luk:
                res += getTotalStat(EquipBaseStat.iLuk);
                break;
            case pad:
                res += getTotalStat(EquipBaseStat.iPAD);
                break;
            case mad:
                res += getTotalStat(EquipBaseStat.iMAD);
                break;
            case pdd:
                res += getTotalStat(EquipBaseStat.iDEF);
                break;
            case mdd:
                res += getTotalStat(EquipBaseStat.iDEF);
                break;
            case mhp:
                res += getTotalStat(EquipBaseStat.iMaxHP);
                break;
            case mmp:
                res += getTotalStat(EquipBaseStat.iMaxMP);
                break;
            case damR:
                res += getTotalStat(EquipBaseStat.damR);
                break;
            case bd:
                res += getTotalStat(EquipBaseStat.bdr);
                break;
            case ied:
                res += getTotalStat(EquipBaseStat.imdr);
                break;
            case speed:
                res += getTotalStat(EquipBaseStat.iSpeed);
                break;
            case jump:
                res += getTotalStat(EquipBaseStat.iJump);
                break;
            case booster:
                if (getInvType() == InvType.EQUIPPED && getBagIndex() == BodyPart.Weapon.getVal()) {
                    res += equipBase != null ? equipBase.getAttackSpeed() : 0;
                }
                break;
            case strR:
            case dexR:
            case intR:
            case lukR:
                res += getTotalStat(EquipBaseStat.statR);
                break;
            case arc:
                res += getArc();
                break;
        }
        return res;
    }

    @Override
    public int getTransactionalHash() {
        return Objects.hash(super.getTransactionalHash(), serialNumber, title, equippedDate, prevBonusExpRate, tuc, cuc,
                iStr, iDex, iInt, iLuk, iMaxHp, iMaxMp, iPad, iMad, iPDD, iMDD, iAcc, iEva, iCraft, iSpeed, iJump,
                attribute, levelUpType, level, exp, durability, iuc, iPvpDamage, iReduceReq, specialAttribute,
                durabilityMax, iIncReq, growthEnchant, psEnchant, bdr, imdr, damR, statR, cuttable, exGradeOption,
                hyperUpgrade, itemState, chuc, soulOptionId, soulSocketId, soulOption, options, specialGrade,
                tradeBlock, equipTradeBlock, sockets, arc, symbolExp, symbolLevel, fSTR, fDEX, fINT, fLUK, fATT, fMATT,
                fDEF, fHP, fMP, fSpeed, fJump, fAllStat, fBoss, fDamage, fLevel);
    }

    public Set<Integer> getNonAddBaseStat(BaseStat baseStat) {
        var equipBase = ItemData.getEquipInfoById(getItemId());
        var reqLevel = equipBase != null ? equipBase.getrLevel() : 0;
        // TODO: Sockets
        Set<Integer> res = new HashSet<>();
        for (int i = 0; i < getOptions().size() - 1; i++) { // last one is anvil => skipped
            int id = getOptions().get(i);
            int level = (reqLevel + getiIncReq()) / 10;
            ItemOption io = ItemData.getItemOptionById(id);
            if (io != null) {
                Map<BaseStat, Double> valMap = io.getStatValuesByLevel(level);
                double val = valMap.getOrDefault(baseStat, 0D);
                if (val != 0) {
                    res.add((int) val);
                }
            }
        }
        switch (baseStat) {
            case fd:
                // can't get fd on equips?
                break;
            case ied:
                res.add(getTotalStat(EquipBaseStat.imdr));
                break;
        }

        return res;
    }

    @Override
    public boolean isTradable() {
        return hasAttribute(EquipAttribute.UntradableAfterTransaction) || !hasAttribute(EquipAttribute.Untradable) && !isTradeBlock();
    }

    public void applyInnocenceScroll() {
        Equip defaultEquip = ItemData.getEquipDeepCopy(getItemId(), false);
        for (EquipBaseStat ebs : EquipBaseStat.values()) {
            if (ebs != EquipBaseStat.attribute && ebs != EquipBaseStat.growthEnchant && ebs != EquipBaseStat.psEnchant && ebs != EquipBaseStat.exGradeOption) {
                setBaseStat(ebs, defaultEquip.getBaseStat(ebs));
            }
        }
        setChuc((short) 0);
    }

    public boolean hasUsedSlots() {
        Equip defaultEquip = ItemData.getEquipDeepCopy(getItemId(), false);
        return defaultEquip.getTuc() != getTuc();
    }

    // https://strategywiki.org/wiki/MapleStory/Bonus_Stats_and_Nebulites

    // Flame level used according to the level's equip.
    // Used for STR/DEX/INT/LUK/DEF additions.
    public short getFlameLevelExtended() {
        return (short) Math.ceil((getReqLevel() + getiIncReq() + 1.0) / ItemConstants.EQUIP_FLAME_LEVEL_DIVIDER_EXTENDED);
    }

    public int getReqLevel() {
        var equipBase = ItemData.getEquipInfoById(getItemId());
        return equipBase != null ? equipBase.getrLevel() : 0;
    }

    public short getArc() {
        return arc;
    }

    public void setArc(short arc) {
        this.arc = arc;
    }

    public int getSymbolExp() {
        return symbolExp;
    }

    public void setSymbolExp(int symbolExp) {
        this.symbolExp = symbolExp;
    }

    public short getSymbolLevel() {
        return symbolLevel;
    }

    public void setSymbolLevel(short symbolLevel) {
        this.symbolLevel = symbolLevel;
    }

    // Flame level used according to the level's equip.
    // Used for secondary stat increasing.
    public short getFlameLevel() {
        return (short) Math.ceil((getReqLevel() + getiIncReq() + 1.0) / ItemConstants.EQUIP_FLAME_LEVEL_DIVIDER);
    }

    // Gets ATT bonus by flame tier.
    public short getATTBonus(short tier) {
        if (ItemConstants.isWeapon(getItemId())) {
            var baseEquip = ItemData.getEquipInfoById(getItemId());
            final double multipliers[] = baseEquip.isBossReward() ? ItemConstants.WEAPON_FLAME_MULTIPLIER_BOSS_WEAPON : ItemConstants.WEAPON_FLAME_MULTIPLIER;
            int att = Math.max(baseEquip.getiPad(), baseEquip.getiMad());
            return (short) Math.ceil(att * (multipliers[tier - 1] * getFlameLevel()) / 100.0);
        } else {
            return tier;
        }
    }

    // Randomizes the equip's flame stats.
    // 'obtained' is true in case the equip has been obtained or has been flamed with an eternal flame.
    // 'obtained' means that the equip will get higher tier flames.
    // Boss rewards are guaranteed to give 4 bonus stats.
    public void randomizeFlameStats(boolean obtained) {
        resetFlameStats();

        if (!ItemConstants.canEquipHaveFlame(this)) {
            // This equip type is not eligible for bonus stats.
            return;
        }

        var info = getInfo();

        long exGradeOption = 0;
        int minTier = info.isBossReward() || obtained ? 4 : 1;
        int maxTier = info.isBossReward() || obtained ? 7 : 6;
        int bonusStats = info.isBossReward() ? 4 : Util.getRandom(1, 4);
        int statsApplied = 0;
        boolean[] flameApplied = new boolean[FlameStat.values().length];
        while (statsApplied < bonusStats) {
            int stat = Util.getRandom(flameApplied.length - 1);

            // keep rolling so we don't apply the same bonus stat twice
            if (flameApplied[stat] ||
                    // no -level flames on equips that will overflow
                    (FlameStat.getByVal(stat) == FlameStat.LevelReduction && getReqLevel() + getiIncReq() < 5) ||
                    // don't roll boss/td lines on armors
                    ((FlameStat.getByVal(stat) == FlameStat.BossDamage || FlameStat.getByVal(stat) == FlameStat.Damage) && !ItemConstants.isWeapon(getItemId()))) {
                continue;
            }

            short flameTier = (short) Util.getRandom(minTier, maxTier + 1);
            int iAddedStat = flameTier * getFlameLevel();
            int iAddedStatExtended = flameTier * getFlameLevelExtended();

            FlameStat flameStat = FlameStat.getByVal(stat);
            switch (flameStat) {
                case STR:
                    setfSTR(getfSTR() + iAddedStatExtended);
                    break;
                case DEX:
                    setfDEX(getfDEX() + iAddedStatExtended);
                    break;
                case INT:
                    setfINT(getfINT() + iAddedStatExtended);
                    break;
                case LUK:
                    setfLUK(getfLUK() + iAddedStatExtended);
                    break;
                case STRDEX:
                    setfSTR(getfSTR() + iAddedStat);
                    setfDEX(getfDEX() + iAddedStat);
                    break;
                case STRINT:
                    setfSTR(getfSTR() + iAddedStat);
                    setfINT(getfINT() + iAddedStat);
                    break;
                case STRLUK:
                    setfSTR(getfSTR() + iAddedStat);
                    setfLUK(getfLUK() + iAddedStat);
                    break;
                case DEXINT:
                    setfDEX(getfDEX() + iAddedStat);
                    setfINT(getfINT() + iAddedStat);
                    break;
                case DEXLUK:
                    setfDEX(getfDEX() + iAddedStat);
                    setfLUK(getfLUK() + iAddedStat);
                    break;
                case INTLUK:
                    setfINT(getfINT() + iAddedStat);
                    setfLUK(getfLUK() + iAddedStat);
                    break;
                case Attack:
                    setfATT(getfATT() + getATTBonus(flameTier));
                    break;
                case MagicAttack:
                    setfMATT(getfMATT() + getATTBonus(flameTier));
                    break;
                case Defense:
                    setfDEF(getfDEF() + iAddedStatExtended);
                    break;
                case MaxHP:
                    setfHP(getfHP() + ((getReqLevel() + getiIncReq()) / 10) * 30 * flameTier);
                    break;
                case MaxMP:
                    setfMP(getfMP() + ((getReqLevel() + getiIncReq()) / 10) * 30 * flameTier);
                    break;
                case Speed:
                    setfSpeed(getfSpeed() + flameTier);
                    break;
                case Jump:
                    setfJump(getfJump() + flameTier);
                    break;
                case AllStats:
                    setfAllStat(getfAllStat() + flameTier);
                    break;
                case BossDamage:
                    setfBoss(getfBoss() + flameTier * 2);
                    break;
                case Damage:
                    setfDamage(getfDamage() + flameTier);
                    break;
                case LevelReduction:
                    setfLevel(getfLevel() + (5 * flameTier));
                    break;
            }
            // format for exGradeOption: [aab][aab]... (decimal), aa = exGradeType, b = tier
            exGradeOption += Math.pow(1000, statsApplied) * (flameTier + 10 * flameStat.getExGrade());
            flameApplied[stat] = true;
            statsApplied++;
        }
        setExGradeOption(exGradeOption);
    }

    public boolean canSafeguardHyperUpgrade() {
        return !getInfo().isSuperiorEqp() && chuc >= 12 && chuc < 17;
    }

    public void resetStats() {
        Equip normalEquip = ItemData.getEquipDeepCopy(getItemId(), false);

        // ugly af, but intention is clear :)
        setBaseStat(EquipBaseStat.tuc, normalEquip.getBaseStat(EquipBaseStat.tuc));
        setBaseStat(EquipBaseStat.cuc, normalEquip.getBaseStat(EquipBaseStat.cuc));
        setBaseStat(EquipBaseStat.iStr, normalEquip.getBaseStat(EquipBaseStat.iStr));
        setBaseStat(EquipBaseStat.iDex, normalEquip.getBaseStat(EquipBaseStat.iDex));
        setBaseStat(EquipBaseStat.iInt, normalEquip.getBaseStat(EquipBaseStat.iInt));
        setBaseStat(EquipBaseStat.iLuk, normalEquip.getBaseStat(EquipBaseStat.iLuk));
        setBaseStat(EquipBaseStat.iMaxHP, normalEquip.getBaseStat(EquipBaseStat.iMaxHP));
        setBaseStat(EquipBaseStat.iMaxMP, normalEquip.getBaseStat(EquipBaseStat.iMaxMP));
        setBaseStat(EquipBaseStat.iPAD, normalEquip.getBaseStat(EquipBaseStat.iPAD));
        setBaseStat(EquipBaseStat.iMAD, normalEquip.getBaseStat(EquipBaseStat.iMAD));
        setBaseStat(EquipBaseStat.iDEF, normalEquip.getBaseStat(EquipBaseStat.iDEF));
        setBaseStat(EquipBaseStat.iCraft, normalEquip.getBaseStat(EquipBaseStat.iCraft));
        setBaseStat(EquipBaseStat.iSpeed, normalEquip.getBaseStat(EquipBaseStat.iSpeed));
        setBaseStat(EquipBaseStat.iJump, normalEquip.getBaseStat(EquipBaseStat.iJump));
        setBaseStat(EquipBaseStat.level, normalEquip.getBaseStat(EquipBaseStat.level));
        setBaseStat(EquipBaseStat.exp, normalEquip.getBaseStat(EquipBaseStat.exp));
        setBaseStat(EquipBaseStat.iuc, normalEquip.getBaseStat(EquipBaseStat.iuc));
        setBaseStat(EquipBaseStat.bdr, normalEquip.getBaseStat(EquipBaseStat.bdr));
        setBaseStat(EquipBaseStat.imdr, normalEquip.getBaseStat(EquipBaseStat.imdr));
        setBaseStat(EquipBaseStat.damR, normalEquip.getBaseStat(EquipBaseStat.damR));
        setBaseStat(EquipBaseStat.statR, normalEquip.getBaseStat(EquipBaseStat.statR));

        setQuantity(1);
        setCuttable((short) -1);
        setHyperUpgrade((short) ItemState.AmazingHyperUpgradeChecked.getVal());
        setChuc((short) 0);
    }

    public short getSocket(int num) {
        int i = num < getSockets().size() ? getSockets().get(num) : 0; // do it like this to unbox the int
        return (short) i;
    }

    public void setSocket(int num, int value) {
        while (num >= getSockets().size()) {
            getSockets().add(0);
        }
        getSockets().set(num, value);
    }

    public void encodeSymbolData(OutPacket outPacket) {
        int level = getSymbolLevel();
        outPacket.encodeInt(0);
        outPacket.encodeInt(level);
        outPacket.encodeInt(ItemConstants.getRequiredSymbolExp(level, getItemId()));
        outPacket.encodeLong(ItemConstants.getSymbolMoneyReqByLevel(level, getItemId()));
        outPacket.encodeLong(getId());
        // ?
        outPacket.encodeShort(1);
        outPacket.encodeShort(2);
        outPacket.encodeShort(3);
        outPacket.encodeShort(4);
        outPacket.encodeShort(5);
        outPacket.encodeShort(6);
        outPacket.encodeShort(7);
        outPacket.encodeShort(8);
        outPacket.encodeShort(9);
        outPacket.encodeShort(10);
        outPacket.encodeShort(20);
        outPacket.encodeShort(30);
    }

    public void initSymbolStats(int level, int exp, short job) {
        if (level <= 0) {
            level = 1;
            exp = 1;
        }
        var itemId = getItemId();

        setiStr((short) 0);
        setiInt((short) 0);
        setiDex((short) 0);
        setiLuk((short) 0);
        setiMaxHp((short) 0);
        setSymbolLevel((short) level);
        setArc((short) ItemConstants.getSymbolAfByLevel(level, itemId));
        setSymbolExp(exp);
        if (JobConstants.isXenon(job)) {
            short stat = (short) ItemConstants.getSymbolXenonStatByLevel(level, itemId);
            setiStr(stat);
            setiDex(stat);
            setiLuk(stat);
        } else {
            short stat = (short) ItemConstants.getSymbolStatByLevel(level, itemId);
            switch (GameConstants.getMainStatByJob(job)) {
                case mhp:
                    setiMaxHp((int)ItemConstants.getSymbolDaHpByLevel(level, itemId));
                    break;
                case str:
                    setiStr(stat);
                    break;
                case inte:
                    setiInt(stat);
                    break;
                case dex:
                    setiDex(stat);
                    break;
                case luk:
                    setiLuk(stat);
                    break;
            }
        }

    }

    public void addSymbolExp(int symbolExp) {
        setSymbolExp(getSymbolExp() + symbolExp);
    }

    public boolean hasSymbolExpForLevelUp() {
        return getSymbolExp() >= ItemConstants.getRequiredSymbolExp(getSymbolLevel(), getItemId());
    }

    public int getTotalSymbolExp() {
        int total = 0;
        for (int i = 1; i < getSymbolLevel(); i++) {
            total += ItemConstants.getRequiredSymbolExp(i, getItemId());
        }
        total += getSymbolExp();
        return total;
    }

    public boolean isVestige() {
        return hasSpecialAttribute(EquipSpecialAttribute.Vestige)
                || hasSpecialAttribute(EquipSpecialAttribute.VestigeAppliedAccountShare)
                || hasSpecialAttribute(EquipSpecialAttribute.VestigeBound)
                || hasSpecialAttribute(EquipSpecialAttribute.VestigePossibleTrading);
    }

    public void makeVestige() {
        addSpecialAttribute(EquipSpecialAttribute.Vestige);
    }

    public void removeVestige() {
        removeSpecialAttribute(EquipSpecialAttribute.Vestige);
        removeSpecialAttribute(EquipSpecialAttribute.VestigePossibleTrading);
        removeSpecialAttribute(EquipSpecialAttribute.VestigeBound);
        removeSpecialAttribute(EquipSpecialAttribute.VestigeAppliedAccountShare);
    }

    public boolean applyPsok(Char chr) {
        var equipBase = ItemData.getEquipDeepCopy(getItemId(), false);
        var equipInfo = ItemData.getEquipInfoById(getItemId());

        if (isTradable()) {
            chr.chatMessage("This item is already tradable.");
            chr.dispose();
            return false;
        }

        if (equipBase.isTradable()) {
            if (!equipBase.hasAttribute(EquipAttribute.Untradable)) {
                removeAttribute(EquipAttribute.Untradable);
            }
            if (equipBase.hasAttribute(EquipAttribute.UntradableAfterTransaction)) {
                addAttribute(EquipAttribute.UntradableAfterTransaction);
            }
            if (equipBase.hasAttribute(EquipAttribute.TradedOnceWithinAccount)) {
                addAttribute(EquipAttribute.TradedOnceWithinAccount);
            }
            if (equipBase.isEquipTradeBlock()) {
                setEquipTradeBlock(true);
                setTradeBlock(false);
            }
            updateToChar(chr);
        } else if (equipInfo.getTradeAvailable() != 0) { // PSoKable
            addAttribute(EquipAttribute.UntradableAfterTransaction);
            updateToChar(chr);
        } else {
            var trunk = chr.getAccount().getTrunk();
            if (trunk.isFullItems()) {
                chr.chatMessage("Your storage is full.");
                chr.dispose();
                return false;
            }
            trunk.addItem(this, getQuantity());
            chr.consumeItemFull(this);
            chr.chatMessage("The item has been moved into your storage.");
        }

        return true;
    }


    public void removeScissor() {
        removeAttribute(EquipAttribute.UntradableAfterTransaction);
    }

    public boolean applyCube(Char chr, int cubeId, boolean bonus) {
        int tierUpChance = ItemConstants.getTierUpChance(cubeId);
        var grade = bonus ? getBonusGrade() : getBaseGrade();

        short hiddenValue = ItemGrade.getHiddenGradeByVal(grade).getVal();
        boolean tierUp = !(hiddenValue >= ItemGrade.HiddenLegendary.getVal()) && Util.succeedProp(tierUpChance);
        if (tierUp) {
            hiddenValue++;
        }

        if (bonus) {
            setHiddenOptionBonus(hiddenValue, ItemConstants.THIRD_LINE_CHANCE);
        } else {
            setHiddenOptionBase(hiddenValue, ItemConstants.THIRD_LINE_CHANCE);
        }

        releaseOptions(bonus);

        if (ItemConstants.isLongOrBigSword(getItemId())) {
            int otherEquipPos = Math.abs(getBagIndex()) == 10 ? 11 : 10;
            Equip otherEquip = (Equip) chr.getEquippedInventory().getItemBySlot(otherEquipPos);
            otherEquip.copyItemOptionsFrom(this);
            otherEquip.updateToChar(chr);
        }

        return tierUp;
    }

    public void updateDecentSkills(Char chr, boolean equip) { // Works on the principle that equips cannot have their potential/socket changed whilst equipped.
        int jobId = chr.getJob();
        Set<Integer> decentSkills = new HashSet<>();
        for (int line : getOptionBase()) {
            if (ItemConstants.isDecentSkillItemOption(line)) {
                int skillID = SkillConstants.getDecentSkillByItemOption(line, jobId);
                if (skillID != 0) {
                    decentSkills.add(skillID);
                }
            }
        }
        for (int socket : getSockets()) {
            if (ItemConstants.isDecentSkillSocketOption(socket)) {
                int skillID = SkillConstants.getDecentSkillBySocketOption(socket, jobId);
                if (skillID != 0) {
                    decentSkills.add(skillID);
                }
            }
        }
        for (int skill : decentSkills) {
            if (equip) {
                chr.addSkill(skill, 1, 1);
            } else {
                chr.removeSkillAndSendPacket(skill);
            }
        }
    }

    public int getPotentialStat(BaseStat baseStat, boolean bonus) {
        int start = 0;
        int end = 0;
        if (bonus) {
            start = 3;
            end = 6;
        } else {
            start = 0;
            end = 3;
        }
        int res = 0;
        for (int i = start; i < end; i++) { // last one is anvil => skipped
            int id = getOptions().get(i);
            int level = (getReqLevel() + getiIncReq()) / 10;
            ItemOption io = ItemData.getItemOptionById(id);
            if (io != null) {
                Map<BaseStat, Double> valMap = io.getStatValuesByLevel(level);
                res += valMap.getOrDefault(baseStat, 0D);
            }
        }
        return res;
    }

    public void copyItemOptionsFrom(Equip equip) {
        this.setOptions(equip.getOptions());
    }

    public void copySocketsFrom(Equip equip) {
        this.setSockets(equip.getSockets());
    }

    public void copySoulOptionsFrom(Equip equip) {
        this.setSoulOption(equip.getSoulOption());
        this.setSoulOptionId(equip.getSoulOptionId());
        this.setSoulSocketId(equip.getSoulSocketId());
    }

    public void copyFlameStatsFrom(Equip equip) {
        this.setfSTR(equip.getfSTR());
        this.setfDEX(equip.getfDEX());
        this.setfINT(equip.getfINT());
        this.setfLUK(equip.getfLUK());
        this.setfATT(equip.getfATT());
        this.setfMATT(equip.getfMATT());
        this.setfDEF(equip.getfDEF());
        this.setfHP(equip.getfHP());
        this.setfMP(equip.getfMP());
        this.setfSpeed(equip.getfSpeed());
        this.setfJump(equip.getfJump());
        this.setfAllStat(equip.getfAllStat());
        this.setfBoss(equip.getfBoss());
        this.setfDamage(equip.getfDamage());
        this.setfLevel(equip.getfLevel());
        this.setExGradeOption(equip.getExGradeOption());
    }

    public void copyScrollStatsFrom(Equip equip) {
        Equip cleanEqp = ItemData.getEquipDeepCopy(equip.getItemId(), false);
        Equip cleanThisEqp = ItemData.getEquipDeepCopy(this.getItemId(), false);

        this.setiStr((short) (cleanThisEqp.getiStr() + (equip.getiStr() - cleanEqp.getBaseStat(EquipBaseStat.iStr))));
        this.setiDex((short) (cleanThisEqp.getiDex() + (equip.getiDex() - cleanEqp.getBaseStat(EquipBaseStat.iDex))));
        this.setiInt((short) (cleanThisEqp.getiInt() + (equip.getiInt() - cleanEqp.getBaseStat(EquipBaseStat.iInt))));
        this.setiLuk((short) (cleanThisEqp.getiLuk() + (equip.getiLuk() - cleanEqp.getBaseStat(EquipBaseStat.iLuk))));
        this.setiMaxHp((short) (cleanThisEqp.getiMaxHp() + (equip.getiMaxHp() - cleanEqp.getBaseStat(EquipBaseStat.iMaxHP))));
        this.setiMaxMp((short) (cleanThisEqp.getiMaxMp() + (equip.getiMaxMp() - cleanEqp.getBaseStat(EquipBaseStat.iMaxMP))));
        this.setiPad((short) (cleanThisEqp.getiPad() + (equip.getiPad() - cleanEqp.getBaseStat(EquipBaseStat.iPAD))));
        this.setiMad((short) (cleanThisEqp.getiMad() + (equip.getiMad() - cleanEqp.getBaseStat(EquipBaseStat.iMAD))));
        this.setiPDD((short) (cleanThisEqp.getiPDD() + (equip.getiPDD() - cleanEqp.getBaseStat(EquipBaseStat.iDEF))));
        this.setiCraft((short) (cleanThisEqp.getiCraft() + (equip.getiCraft() - cleanEqp.getBaseStat(EquipBaseStat.iCraft))));
        this.setiSpeed((short) (cleanThisEqp.getiSpeed() + (equip.getiSpeed() - cleanEqp.getBaseStat(EquipBaseStat.iSpeed))));
        this.setiJump((short) (cleanThisEqp.getiJump() + (equip.getiJump() - cleanEqp.getBaseStat(EquipBaseStat.iJump))));

        this.setCuc(equip.getCuc());
        this.setIuc(equip.getIuc());
        this.setTuc(equip.getTuc());

        this.setLevel(equip.getItemLevel());
        this.setExp(equip.getExp());
    }

    public long getStatFromBaseEquip(EquipBaseStat baseStat) {
        Equip cleanEq = ItemData.getEquipDeepCopy(getItemId(), false);
        return cleanEq.getBaseStat(baseStat);
    }

    public void copyChucFrom(Equip equip) {
        this.setChuc(equip.getChuc());
    }

    public void copyAttributesFrom(Equip equip) {
        this.setAttribute(equip.getAttribute());
        this.setSpecialAttribute(equip.getSpecialAttribute());
    }

    public void copySecondaryStatsFrom(Equip equip) {
        copySecondaryStatsFrom(equip, true, true, true, true, true, true, true);
    }

    public void copySecondaryStatsFrom(Equip equip, boolean options, boolean sockets, boolean soul, boolean flames, boolean scroll, boolean attributes, boolean chuc) {
        if (options) {
            copyItemOptionsFrom(equip); // Options
        }
        if (sockets) {
            copySocketsFrom(equip); // Nebulites
        }
        if (soul) {
            copySoulOptionsFrom(equip); // Souls
        }
        if (flames) {
            copyFlameStatsFrom(equip); // Flame Stats
        }
        if (scroll) {
            copyScrollStatsFrom(equip); // Scroll Stats
        }
        if (attributes) {
            copyAttributesFrom(equip); // Assist Scrolls (LuckyDay/Protection/Safety..)
        }
        if (chuc) {
            copyChucFrom(equip);
        }
        this.recalcEnchantmentStats(); // Recalc at the end
    }

    public EquipItemInfo getInfo() {
        return ItemData.getEquipInfoById(getItemId());
    }

    public boolean cannotBeEnhanced(Char chr) {
        return !ItemConstants.isUpgradable(getItemId())
                || (getBaseStat(EquipBaseStat.tuc) != 0 && !chr.getWorld().isReboot())
                || chr.getEquipInventory().getEmptySlots() == 0
                || getChuc() >= GameConstants.getMaxStars(this)
                || hasSpecialAttribute(EquipSpecialAttribute.Vestige);
    }
}
