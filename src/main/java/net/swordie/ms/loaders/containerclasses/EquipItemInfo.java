package net.swordie.ms.loaders.containerclasses;

import net.swordie.ms.client.character.items.Equip;
import net.swordie.ms.client.character.items.ItemSkill;
import net.swordie.ms.constants.ItemConstants;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EquipItemInfo {

    private int itemId;
    private short tuc;
    private short cuc;
    private short iStr;
    private short iDex;
    private short iInt;
    private short iLuk;
    private short iMaxHp;
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
    private boolean bossReward;
    private boolean superiorEqp;
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
    private short rStr;
    private short rDex;
    private short rInt;
    private short rLuk;
    private short rLevel;
    private short rJob;
    private short rPop;
    private List<Integer> options; // base + add pot + anvil
    private int specialGrade;
    private boolean fixedPotential;
    private boolean noPotential;
    private boolean tradeBlock;
    private boolean only;
    private boolean notSale;
    private int attackSpeed;
    private int price;
    private int charmEXP;
    private boolean expireOnLogout;
    private int setItemID;
    private boolean exItem;
    private boolean equipTradeBlock;
    private int fixedGrade;
    private boolean onlyEquip;

    private List<Integer> sockets;
    private Map<Integer, List<ItemSkill>> itemSkills = new HashMap<>();
    private short iucMax = ItemConstants.MAX_HAMMER_SLOTS;
    private boolean hasIUCMax;

    private int android;
    private int androidGrade;

    private byte tradeAvailable; // so far only encountered 2 (untradable, but SoKable)
    private boolean jokerToSetItem;
    private boolean cash;

    public short getTuc() {
        return tuc;
    }

    public void setTuc(short tuc) {
        this.tuc = tuc;
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

    public short getiMaxHp() {
        return iMaxHp;
    }

    public void setiMaxHp(short iMaxHp) {
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

    public short getLevelUpType() {
        return levelUpType;
    }

    public void setLevelUpType(short levelUpType) {
        this.levelUpType = levelUpType;
    }

    public short getLevel() {
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

    public void setiReduceReq(byte iReduceReq) {
        this.iReduceReq = iReduceReq;
    }

    public short getSpecialAttribute() {
        return specialAttribute;
    }

    public void setSpecialAttribute(short specialAttribute) {
        this.specialAttribute = specialAttribute;
    }

    public short getDurabilityMax() {
        return durabilityMax;
    }

    public void setDurabilityMax(short durabilityMax) {
        this.durabilityMax = durabilityMax;
    }

    public short getiIncReq() {
        return iIncReq;
    }

    public void setiIncReq(short iIncReq) {
        this.iIncReq = iIncReq;
    }

    public short getGrowthEnchant() {
        return growthEnchant;
    }

    public void setGrowthEnchant(short growthEnchant) {
        this.growthEnchant = growthEnchant;
    }

    public short getPsEnchant() {
        return psEnchant;
    }

    public void setPsEnchant(short psEnchant) {
        this.psEnchant = psEnchant;
    }

    public short getBdr() {
        return bdr;
    }

    public void setBdr(short bdr) {
        this.bdr = bdr;
    }

    public short getImdr() {
        return imdr;
    }

    public void setImdr(short imdr) {
        this.imdr = imdr;
    }

    public boolean isBossReward() {
        return bossReward;
    }

    public void setBossReward(boolean bossReward) {
        this.bossReward = bossReward;
    }

    public boolean isSuperiorEqp() {
        return superiorEqp;
    }

    public void setSuperiorEqp(boolean superiorEqp) {
        this.superiorEqp = superiorEqp;
    }

    public short getDamR() {
        return damR;
    }

    public void setDamR(short damR) {
        this.damR = damR;
    }

    public short getStatR() {
        return statR;
    }

    public void setStatR(short statR) {
        this.statR = statR;
    }

    public short getCuttable() {
        return cuttable;
    }

    public void setCuttable(short cuttable) {
        this.cuttable = cuttable;
    }

    public long getExGradeOption() {
        return exGradeOption;
    }

    public void setExGradeOption(long exGradeOption) {
        this.exGradeOption = exGradeOption;
    }

    public short getHyperUpgrade() {
        return hyperUpgrade;
    }

    public void setHyperUpgrade(short hyperUpgrade) {
        this.hyperUpgrade = hyperUpgrade;
    }

    public short getItemState() {
        return itemState;
    }

    public void setItemState(short itemState) {
        this.itemState = itemState;
    }

    public short getChuc() {
        return chuc;
    }

    public void setChuc(short chuc) {
        this.chuc = chuc;
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

    public short getrStr() {
        return rStr;
    }

    public void setrStr(short rStr) {
        this.rStr = rStr;
    }

    public short getrDex() {
        return rDex;
    }

    public void setrDex(short rDex) {
        this.rDex = rDex;
    }

    public short getrInt() {
        return rInt;
    }

    public void setrInt(short rInt) {
        this.rInt = rInt;
    }

    public short getrLuk() {
        return rLuk;
    }

    public void setrLuk(short rLuk) {
        this.rLuk = rLuk;
    }

    public short getrLevel() {
        return rLevel;
    }

    public void setrLevel(short rLevel) {
        this.rLevel = rLevel;
    }

    public short getrJob() {
        return rJob;
    }

    public void setrJob(short rJob) {
        this.rJob = rJob;
    }

    public short getrPop() {
        return rPop;
    }

    public void setrPop(short rPop) {
        this.rPop = rPop;
    }

    public List<Integer> getOptions() {
        return options;
    }

    public void setOptions(List<Integer> options) {
        this.options = options;
    }

    public int getSpecialGrade() {
        return specialGrade;
    }

    public void setSpecialGrade(int specialGrade) {
        this.specialGrade = specialGrade;
    }

    public boolean isFixedPotential() {
        return fixedPotential;
    }

    public void setFixedPotential(boolean fixedPotential) {
        this.fixedPotential = fixedPotential;
    }

    public boolean isNoPotential() {
        return noPotential;
    }

    public void setNoPotential(boolean noPotential) {
        this.noPotential = noPotential;
    }

    public boolean isTradeBlock() {
        return tradeBlock;
    }

    public void setTradeBlock(boolean tradeBlock) {
        this.tradeBlock = tradeBlock;
    }

    public boolean isOnly() {
        return only;
    }

    public void setOnly(boolean only) {
        this.only = only;
    }

    public boolean isNotSale() {
        return notSale;
    }

    public void setNotSale(boolean notSale) {
        this.notSale = notSale;
    }

    public int getAttackSpeed() {
        return attackSpeed;
    }

    public void setAttackSpeed(int attackSpeed) {
        this.attackSpeed = attackSpeed;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getCharmEXP() {
        return charmEXP;
    }

    public void setCharmEXP(int charmEXP) {
        this.charmEXP = charmEXP;
    }

    public boolean isExpireOnLogout() {
        return expireOnLogout;
    }

    public void setExpireOnLogout(boolean expireOnLogout) {
        this.expireOnLogout = expireOnLogout;
    }

    public int getSetItemID() {
        return setItemID;
    }

    public void setSetItemID(int setItemID) {
        this.setItemID = setItemID;
    }

    public boolean isExItem() {
        return exItem;
    }

    public void setExItem(boolean exItem) {
        this.exItem = exItem;
    }

    public boolean isEquipTradeBlock() {
        return equipTradeBlock;
    }

    public void setEquipTradeBlock(boolean equipTradeBlock) {
        this.equipTradeBlock = equipTradeBlock;
    }

    public int getFixedGrade() {
        return fixedGrade;
    }

    public void setFixedGrade(int fixedGrade) {
        this.fixedGrade = fixedGrade;
    }

    public List<Integer> getSockets() {
        return sockets;
    }

    public void setSockets(List<Integer> sockets) {
        this.sockets = sockets;
    }

    public Map<Integer, List<ItemSkill>> getItemSkills() {
        return itemSkills;
    }

    public void setItemSkills(Map<Integer, List<ItemSkill>> itemSkills) {
        this.itemSkills = itemSkills;
    }

    public short getIucMax() {
        return iucMax;
    }

    public void setIucMax(short iucMax) {
        this.iucMax = iucMax;
    }

    public int getAndroid() {
        return android;
    }

    public void setAndroid(int android) {
        this.android = android;
    }

    public int getAndroidGrade() {
        return androidGrade;
    }

    public void setAndroidGrade(int androidGrade) {
        this.androidGrade = androidGrade;
    }

    public byte getTradeAvailable() {
        return tradeAvailable;
    }

    public void setTradeAvailable(byte tradeAvailable) {
        this.tradeAvailable = tradeAvailable;
    }

    public boolean isJokerToSetItem() {
        return jokerToSetItem;
    }

    public void setJokerToSetItem(boolean jokerToSetItem) {
        this.jokerToSetItem = jokerToSetItem;
    }

    public void setCash(boolean cash) {
        this.cash = cash;
    }

    public boolean isCash() {
        return cash;
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public boolean isHasIUCMax() {
        return hasIUCMax;
    }

    public void setHasIUCMax(boolean hasIUCMax) {
        this.hasIUCMax = hasIUCMax;
    }

    public void addItemSkill(int equipLv, ItemSkill itemSkill) {
        if (!getItemSkills().containsKey(equipLv)) {
            getItemSkills().put(equipLv, new ArrayList<>());
        }
        var skills = getItemSkills().get(equipLv);
        skills.add(itemSkill);

        getItemSkills().put(equipLv, skills);
    }

    public List<ItemSkill> getItemSkillsByEquipLv(int equipLv) {
        if (equipLv == 0) {
            equipLv = 1;
        }
        return getItemSkills().getOrDefault(equipLv, new ArrayList<>());
    }

    public Equip toEquip() {
        var equip = new Equip();

         equip.setItemId(itemId);
         equip.setTuc(tuc);
         equip.setCuc(cuc);
         equip.setiStr(iStr);
         equip.setiDex(iDex);
         equip.setiInt(iInt);
         equip.setiLuk(iLuk);
         equip.setiMaxHp(iMaxHp);
         equip.setiMaxMp(iMaxMp);
         equip.setiPad(iPad);
         equip.setiMad(iMad);
         equip.setiPDD(iPDD);
         equip.setiMDD(iMDD);
         equip.setiAcc(iAcc);
         equip.setiEva(iEva);
         equip.setiCraft(iCraft);
         equip.setiSpeed(iSpeed);
         equip.setiJump(iJump);
         equip.setAttribute(attribute);
         equip.setLevelUpType(levelUpType);
         equip.setLevel(level);
         equip.setExp(exp);
         equip.setDurability(durability);
         equip.setIuc(iuc);
         equip.setiPvpDamage(iPvpDamage);
         equip.setiReduceReq(iReduceReq);
         equip.setSpecialAttribute(specialAttribute);
         equip.setDurabilityMax(durabilityMax);
         equip.setiIncReq(iIncReq);
         equip.setGrowthEnchant(growthEnchant);
         equip.setPsEnchant(psEnchant);
         equip.setBdr(bdr);
         equip.setImdr(imdr);
         equip.setDamR(damR);
         equip.setStatR(statR);
         equip.setCuttable(cuttable);
         equip.setExGradeOption(exGradeOption);
         equip.setHyperUpgrade(hyperUpgrade);
         equip.setItemState(itemState);
         equip.setChuc(chuc);
         equip.setSoulOptionId(soulOptionId);
         equip.setSoulSocketId(soulSocketId);
         equip.setSoulOption(soulOption);
         equip.setOptions(new ArrayList<>(options)); // base + add pot + anvil
         equip.setSpecialGrade(specialGrade);
         equip.setTradeBlock(tradeBlock);
         equip.setEquipTradeBlock(equipTradeBlock);
         equip.setSockets(sockets);
         equip.setCash(cash);

        return equip;
    }

    public boolean isOnlyEquip() {
        return onlyEquip;
    }

    public void setOnlyEquip(boolean onlyEquip) {
        this.onlyEquip = onlyEquip;
    }
}
