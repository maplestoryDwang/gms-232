package net.swordie.ms.loaders;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.client.character.chair.CustomChairType;
import net.swordie.ms.client.character.items.*;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.enums.*;
import net.swordie.ms.jwzlib.WzFile;
import net.swordie.ms.jwzlib.WzObject;
import net.swordie.ms.jwzlib.WzProperty;
import net.swordie.ms.loaders.containerclasses.*;
import net.swordie.ms.util.Loader;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Tuple;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.*;
import java.util.*;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.items.Item.Type.ITEM;
import static net.swordie.ms.enums.ScrollStat.*;

/**
 * Created on 11/17/2017.
 */
public class ItemData {
    public static final String EQUIPS_FILE = ServerConstants.DAT_DIR + "/equips.dat";
    private static final String ITEMS_FILE = ServerConstants.DAT_DIR + "/items.dat";
    private static final String PETS_FILE = ServerConstants.DAT_DIR + "/pets.dat";

    public static Set<Integer> blockedOptions = new HashSet<>(Set.of(
            10054, 20047, 20048, 20054, 30047, 30048, 30054, 40047, 40048, 40054
    ));

    public static Map<Integer, EquipItemInfo> equips = new HashMap<>();
    public static Map<Integer, Integer> equipOffsets;
    public static Map<Integer, ItemInfo> items = new HashMap<>();
    public static Map<Integer, Integer> itemOffsets;
    public static Map<Integer, PetInfo> pets = new HashMap<>();
    public static Map<Integer, Integer> petOffsets;
    public static Map<Integer, ItemOption> itemOptions = new HashMap<>();
    public static Map<Integer, ItemOption> familiarOptions = new HashMap<>();
    public static Set<ItemOption> equipCubeItemOptions;
    public static Map<Integer, Integer> skillIdByItemId = new HashMap<>();
    private static Set<Integer> startingItems = new HashSet<>();

    private static final Logger log = LogManager.getRootLogger();
    private static final boolean LOG_UNKS = false;

    public static Equip getEquipDeepCopy(int itemId, boolean randomizeStats) {
        var eqp = getEquipDeepCopy(itemId, randomizeStats, (short) 0);

        // Equips that are created with a random level.
        if (ItemConstants.isRandomLevelUponEquipCreationItem(itemId)) {
            eqp.setLevel((short) ItemConstants.getRandomLevelByItemId(itemId));
        }

        return eqp;
    }

    /**
     * Creates a new Equip given an itemId.
     *
     * @param itemId         The itemId of the wanted equip.
     * @param randomizeStats Whether or not to randomize the stats of the created object
     * @param job            The job of the Char receiving the item (only relevant for arcane symbols)
     * @return A deep copy of the default values of the corresponding Equip, or null if there is no equip with itemId
     * <code>itemId</code>.
     */
    public static Equip getEquipDeepCopy(int itemId, boolean randomizeStats, short job) {
        var equipInfo = getEquipInfoById(itemId);
        Equip ret = equipInfo == null ? null : equipInfo.toEquip();
        if (ret != null) {
            ret.setQuantity(1);
            ret.setCuttable((short) -1);
            ret.setHyperUpgrade((short) ItemState.AmazingHyperUpgradeChecked.getVal());
            ret.setType(Item.Type.EQUIP);
            ret.setInvType(equipInfo.isCash() ? InvType.DEC : InvType.EQUIP);
            if (randomizeStats) {
                if (ItemConstants.canEquipHaveFlame(ret)) {
                    ret.randomizeFlameStats(true);
                }
                if (ItemConstants.canEquipHavePotential(ret)) {
                    ItemGrade grade = ItemGrade.None;
                    if (Util.succeedProp(GameConstants.RANDOM_EQUIP_UNIQUE_CHANCE)) {
                        grade = ItemGrade.HiddenUnique;
                    } else if (Util.succeedProp(GameConstants.RANDOM_EQUIP_EPIC_CHANCE)) {
                        grade = ItemGrade.HiddenEpic;
                    } else if (Util.succeedProp(GameConstants.RANDOM_EQUIP_RARE_CHANCE)) {
                        grade = ItemGrade.HiddenRare;
                    }
                    if (grade != ItemGrade.None) {
                        ret.setHiddenOptionBase(grade.getVal(), ItemConstants.THIRD_LINE_CHANCE);
                    }
                }
            }
            if (ItemConstants.isSymbol(ret.getItemId())) {
                ret.initSymbolStats(1, 1, job);
            }
        }
        return ret;
    }

    public static EquipItemInfo getEquipInfoById(int itemId) {
        var equipInfo = getEquips().get(itemId);

        return equipInfo != null ? equipInfo : getEquipFromFile(itemId);
    }

    private static EquipItemInfo getEquipFromFile(int itemId) {
        if (equipOffsets == null) {
            equipOffsets = new HashMap<>();
            IOHelper.loadOffsets(equipOffsets, EQUIPS_FILE);
        }

        if (!equipOffsets.containsKey(itemId)) {
//            if (itemId > 0) {
//                ErrorLogger.logAsClientError("[ItemData] Could not find equip " + itemId);
//            }
            return null;
        }

        EquipItemInfo equip = null;
        try (RandomAccessFile raf = new RandomAccessFile(EQUIPS_FILE, IOHelper.READ_MODE)) {
            raf.seek(equipOffsets.get(itemId));
            equip = new EquipItemInfo();
            equip.setItemId(raf.readInt());
            equip.setrJob(raf.readShort());
            equip.setrLevel(raf.readShort());
            equip.setrStr(raf.readShort());
            equip.setrDex(raf.readShort());
            equip.setrInt(raf.readShort());
            equip.setrLuk(raf.readShort());
            equip.setrPop(raf.readShort());
            equip.setiStr(raf.readShort());
            equip.setiDex(raf.readShort());
            equip.setiInt(raf.readShort());
            equip.setiLuk(raf.readShort());
            equip.setiPDD(raf.readShort());
            equip.setiMDD(raf.readShort());
            equip.setiMaxHp(raf.readShort());
            equip.setiMaxMp(raf.readShort());
            equip.setiPad(raf.readShort());
            equip.setiMad(raf.readShort());
            equip.setiEva(raf.readShort());
            equip.setiAcc(raf.readShort());
            equip.setiCraft(raf.readShort());
            equip.setiSpeed(raf.readShort());
            equip.setiJump(raf.readShort());
            equip.setDamR(raf.readShort());
            equip.setStatR(raf.readShort());
            equip.setBdr(raf.readShort());
            equip.setImdr(raf.readShort());
            equip.setTuc(raf.readShort());
            equip.setCharmEXP(raf.readInt());
            equip.setSetItemID(raf.readInt());
            equip.setPrice(raf.readInt());
            equip.setAttackSpeed(raf.readInt());
            equip.setCash(raf.readBoolean());
            equip.setExpireOnLogout(raf.readBoolean());
            equip.setExItem(raf.readBoolean());
            equip.setNotSale(raf.readBoolean());
            equip.setOnly(raf.readBoolean());
            equip.setTradeBlock(raf.readBoolean());
            equip.setTradeAvailable(raf.readByte());
            equip.setEquipTradeBlock(raf.readBoolean());
            equip.setJokerToSetItem(raf.readBoolean());
            equip.setFixedPotential(raf.readBoolean());
            equip.setNoPotential(raf.readBoolean());
            equip.setBossReward(raf.readBoolean()
                    || Util.makeSet(ItemConstants.NON_KMS_BOSS_SETS).contains(equip.getSetItemID())
                    || Util.makeSet(ItemConstants.NON_KMS_BOSS_ITEMS).contains(equip.getItemId()));
            equip.setSuperiorEqp(raf.readBoolean());
            equip.setiReduceReq(raf.readByte());
            equip.setHasIUCMax(raf.readBoolean());
            if (equip.isHasIUCMax()) {
                equip.setIucMax(raf.readShort());
            }
            short optionLength = raf.readShort();
            List<Integer> options = new ArrayList<>(optionLength);
            for (int i = 0; i < optionLength; i++) {
                options.add(raf.readInt());
            }
            for (int i = 0; i < 7 - optionLength; i++) {
                options.add(0);
            }
            equip.setOptions(options);
            short skillsLength = raf.readShort();
            for (int i = 0; i < skillsLength; i++) {
                var equipLv = raf.readInt();

                var skills = raf.readShort();
                for (int ii = 0; ii < skills; ii++) {
                    equip.addItemSkill(equipLv, new ItemSkill(raf.readInt(), raf.readByte()));
                }
            }
            equip.setFixedGrade(raf.readInt());
            equip.setSpecialGrade(raf.readInt());
            equip.setAndroid(raf.readInt());
            equip.setAndroidGrade(raf.readInt());
            equip.setOnlyEquip(raf.readBoolean());
            equips.put(equip.getItemId(), equip);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return equip;
    }

    public static void saveEquips(String dir) {
        int tableSize = getEquips().values().size() * 8 + 4; // 4 for id, 4 for offset pos, single 4 for size
        equipOffsets = new HashMap<>();
        try (RandomAccessFile raf = new RandomAccessFile(dir, IOHelper.READ_WRITE_MODE)) {
            raf.seek(tableSize);
            for (var equip : getEquips().values()) {
                equipOffsets.put(equip.getItemId(), (int) raf.getFilePointer());
                raf.writeInt(equip.getItemId());
                raf.writeShort(equip.getrJob());
                raf.writeShort(equip.getrLevel());
                raf.writeShort(equip.getrStr());
                raf.writeShort(equip.getrDex());
                raf.writeShort(equip.getrInt());
                raf.writeShort(equip.getrLuk());
                raf.writeShort(equip.getrPop());
                raf.writeShort(equip.getiStr());
                raf.writeShort(equip.getiDex());
                raf.writeShort(equip.getiInt());
                raf.writeShort(equip.getiLuk());
                raf.writeShort(equip.getiPDD());
                raf.writeShort(equip.getiMDD());
                raf.writeShort(equip.getiMaxHp());
                raf.writeShort(equip.getiMaxMp());
                raf.writeShort(equip.getiPad());
                raf.writeShort(equip.getiMad());
                raf.writeShort(equip.getiEva());
                raf.writeShort(equip.getiAcc());
                raf.writeShort(equip.getiCraft());
                raf.writeShort(equip.getiSpeed());
                raf.writeShort(equip.getiJump());
                raf.writeShort(equip.getDamR());
                raf.writeShort(equip.getStatR());
                raf.writeShort(equip.getBdr());
                raf.writeShort(equip.getImdr());
                raf.writeShort(equip.getTuc());
                raf.writeInt(equip.getCharmEXP());
                raf.writeInt(equip.getSetItemID());
                raf.writeInt(equip.getPrice());
                raf.writeInt(equip.getAttackSpeed());
                raf.writeBoolean(equip.isCash());
                raf.writeBoolean(equip.isExpireOnLogout());
                raf.writeBoolean(equip.isExItem());
                raf.writeBoolean(equip.isNotSale());
                raf.writeBoolean(equip.isOnly());
                raf.writeBoolean(equip.isTradeBlock());
                raf.writeByte(equip.getTradeAvailable());
                raf.writeBoolean(equip.isEquipTradeBlock());
                raf.writeBoolean(equip.isJokerToSetItem());
                raf.writeBoolean(equip.isFixedPotential());
                raf.writeBoolean(equip.isNoPotential());
                raf.writeBoolean(equip.isBossReward()
                        || Util.arrayContains(ItemConstants.NON_KMS_BOSS_SETS, equip.getSetItemID())
                        || Util.arrayContains(ItemConstants.NON_KMS_BOSS_ITEMS, equip.getItemId()));
                raf.writeBoolean(equip.isSuperiorEqp());
                raf.writeByte(equip.getiReduceReq());
                raf.writeBoolean(equip.isHasIUCMax());
                if (equip.isHasIUCMax()) {
                    raf.writeShort(equip.getIucMax());
                }
                raf.writeShort(equip.getOptions().size());
                for (int i : equip.getOptions()) {
                    raf.writeInt(i);
                }
                raf.writeShort(equip.getItemSkills().size());
                for (var entry : equip.getItemSkills().entrySet()) {
                    raf.writeInt(entry.getKey()); // equip lv

                    raf.writeShort(entry.getValue().size());
                    for (ItemSkill skill : entry.getValue()) {
                        raf.writeInt(skill.getSkill());
                        raf.writeByte(skill.getSlv());
                    }
                }
                raf.writeInt(equip.getFixedGrade());
                raf.writeInt(equip.getSpecialGrade());
                raf.writeInt(equip.getAndroid());
                raf.writeInt(equip.getAndroidGrade());
                raf.writeBoolean(equip.isOnlyEquip());
            }
            IOHelper.writeOffsetTable(equipOffsets, raf);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void loadEquipsFromWz() {
        WzFile file = new WzFile(ServerConstants.WZ_DIR + "/Character.wz");
        String[] subMaps = new String[]{"Accessory", "Android", "Cap", "Cape", "Coat", "Dragon", "Face", "Glove",
                "Longcoat", "Mechanic", "Pants", "PetEquip", "Ring", "Shield", "Shoes", "Totem", "Weapon", "MonsterBook",
                "ArcaneForce", "Hair", "AuthenticForce"};
        for (String subMap : subMaps) {
            WzObject<?, ?> subMapNode = file.getChild(subMap);
            for (WzObject<?, ?> node : subMapNode) {
                var name = node.getName().replace(".img", "");
                if (!Util.isNumber(name)) {
                    continue;
                }
                int itemId = Integer.parseInt(name);
                var equip = new EquipItemInfo();
                equip.setItemId(itemId);
                List<Integer> options = new ArrayList<>(7);
                for (int i = 0; i < 7; i++) {
                    options.add(0);
                }

                WzObject<?, ?> infoNode = node.getChild("info");
                equip.setrJob((short) ((WzProperty) infoNode.getChild("reqJob", 0)).getIntValue());
                equip.setrLevel((short) ((WzProperty) infoNode.getChild("reqLevel", 0)).getIntValue());
                equip.setrStr((short) ((WzProperty) infoNode.getChild("reqSTR", 0)).getIntValue());
                equip.setrDex((short) ((WzProperty) infoNode.getChild("reqDEX", 0)).getIntValue());
                equip.setrInt((short) ((WzProperty) infoNode.getChild("reqINT", 0)).getIntValue());
                equip.setrLuk((short) ((WzProperty) infoNode.getChild("reqLUK", 0)).getIntValue());
                equip.setrPop((short) ((WzProperty) infoNode.getChild("reqPOP", 0)).getIntValue());
                equip.setiStr((short) ((WzProperty) infoNode.getChild("incSTR", 0)).getIntValue());
                equip.setiDex((short) ((WzProperty) infoNode.getChild("incDEX", 0)).getIntValue());
                equip.setiInt((short) ((WzProperty) infoNode.getChild("incINT", 0)).getIntValue());
                equip.setiLuk((short) ((WzProperty) infoNode.getChild("incLUK", 0)).getIntValue());
                equip.setiPDD((short) ((WzProperty) infoNode.getChild("incPDD", 0)).getIntValue());
                equip.setiMDD((short) ((WzProperty) infoNode.getChild("incMDD", 0)).getIntValue());
                equip.setiMaxHp((short) ((WzProperty) infoNode.getChild("incMHP", 0)).getIntValue());
                equip.setiMaxMp((short) ((WzProperty) infoNode.getChild("incMMP", 0)).getIntValue());
                equip.setiPad((short) ((WzProperty) infoNode.getChild("incPAD", 0)).getIntValue());
                equip.setiMad((short) ((WzProperty) infoNode.getChild("incMAD", 0)).getIntValue());
                equip.setiEva((short) ((WzProperty) infoNode.getChild("incEVA", 0)).getIntValue());
                equip.setiAcc((short) ((WzProperty) infoNode.getChild("incACC", 0)).getIntValue());
                equip.setiSpeed((short) ((WzProperty) infoNode.getChild("incSpeed", 0)).getIntValue());
                equip.setiJump((short) ((WzProperty) infoNode.getChild("incJump", 0)).getIntValue());
                equip.setDamR((short) ((WzProperty) infoNode.getChild("damR", 0)).getIntValue());
                equip.setStatR((short) ((WzProperty) infoNode.getChild("statR", 0)).getIntValue());
                equip.setImdr((short) ((WzProperty) infoNode.getChild("imdR", 0)).getIntValue());
                equip.setBdr((short) ((WzProperty) infoNode.getChild("bdR", 0)).getIntValue());
                equip.setTuc((short) ((WzProperty) infoNode.getChild("tuc", 0)).getIntValue());
                equip.setIucMax((short) ((WzProperty) infoNode.getChild("IUCMax", 0)).getIntValue());
                equip.setSetItemID(((WzProperty) infoNode.getChild("setItemID", 0)).getIntValue());
                equip.setPrice(((WzProperty) infoNode.getChild("price", 0)).getIntValue());
                equip.setAttackSpeed(((WzProperty) infoNode.getChild("attackSpeed", 0)).getIntValue());
                equip.setCash(((WzProperty) infoNode.getChild("cash", 0)).getIntValue() != 0);
                equip.setExpireOnLogout(((WzProperty) infoNode.getChild("expireOnLogout", 0)).getIntValue() != 0);
                equip.setExItem(((WzProperty) infoNode.getChild("exItem", 0)).getIntValue() != 0);
                equip.setNotSale(((WzProperty) infoNode.getChild("notSale", 0)).getIntValue() != 0);
                equip.setOnly(((WzProperty) infoNode.getChild("only", 0)).getIntValue() != 0);
                equip.setTradeBlock(((WzProperty) infoNode.getChild("tradeBlock", 0)).getIntValue() != 0);
                equip.setTradeAvailable((byte) ((WzProperty) infoNode.getChild("tradeAvailable", 0)).getIntValue());
                equip.setFixedPotential(((WzProperty) infoNode.getChild("fixedPotential", 0)).getIntValue() != 0);
                equip.setNoPotential(((WzProperty) infoNode.getChild("noPotential", 0)).getIntValue() != 0);
                equip.setBossReward(((WzProperty) infoNode.getChild("bossReward", 0)).getIntValue() != 0);
                equip.setSuperiorEqp(((WzProperty) infoNode.getChild("superiorEqp", 0)).getIntValue() != 0);
                equip.setiReduceReq((byte) (int) ((WzProperty<Integer>) infoNode.getChild("reduceReq", 0)).getValue());
                equip.setFixedGrade(((WzProperty) infoNode.getChild("fixedGrade", 0)).getIntValue());
                equip.setSpecialGrade(((WzProperty) infoNode.getChild("specialGrade", 0)).getIntValue());
                equip.setCharmEXP(((WzProperty) infoNode.getChild("charmEXP", 0)).getIntValue());

                // Cash Equips do not have their Charm Exp in the WzFiles.
                if (equip.isCash() && equip.getCharmEXP() <= 0) {
                    equip.setCharmEXP(ItemConstants.getCharmExpByItemId(itemId));
                }

                equip.setEquipTradeBlock(((WzProperty) infoNode.getChild("equipTradeBlock", 0)).getIntValue() != 0);
                equip.setJokerToSetItem(((WzProperty) infoNode.getChild("jokerToSetItem", 0)).getIntValue() != 0);
                equip.setOnlyEquip(((WzProperty) infoNode.getChild("onlyEquip", 0)).getIntValue() != 0);

                WzObject<?, ?> levelinfoNode = infoNode.getChild("level");
                if (levelinfoNode != null) {
                    WzObject<?, ?> caseNode = levelinfoNode.getChild("case");
                    if (caseNode != null) {
                        WzObject<?, ?> case0Node = caseNode.getChild("0");
                        if (case0Node != null) {
                            for (WzObject<?, ?> levelNode : case0Node) {
                                var lvNodeName = levelNode.getName();
                                if (!Util.isNumber(lvNodeName)) {
                                    continue;
                                }

                                var equipLv = Integer.parseInt(levelNode.getName());

                                WzObject<?, ?> equipmentSkillNode = levelNode.getChild("EquipmentSkill");
                                if (equipmentSkillNode != null) {
                                    for (WzObject<?, ?> equipSkill : equipmentSkillNode) {
                                        equip.addItemSkill(equipLv, new ItemSkill(
                                                ((WzProperty) equipSkill.getChild("id")).getIntValue(),
                                                ((WzProperty) equipSkill.getChild("level")).getIntValue()
                                        ));
                                    }
                                }
                            }
                        }
                    }
                }

                WzObject<?, ?> optionNode = infoNode.getChild("option");
                if (optionNode != null) {
                    for (WzObject<?, ?> whichOptionNode : optionNode) {
                        int index = Integer.parseInt(whichOptionNode.getName());
                        options.set(index, ((WzProperty) whichOptionNode.getChild("option")).getIntValue());
                    }
                }

                equip.setAndroid(((WzProperty<Integer>) infoNode.getChild("android", 0)).getValue());
                equip.setAndroidGrade(((WzProperty<Integer>) infoNode.getChild("grade", 0)).getValue());
                for (int i = 0; i < 7 - options.size(); i++) {
                    options.add(0);
                }
                equip.setOptions(options);
                equips.put(equip.getItemId(), equip);
                node.clear();
            }
        }
        file.clear();
    }

    public static void saveItems(String dir) {
        int tableSize = getItems().size() * 8 + 4; // 4 for id, 4 for offset pos, single 4 for size
        itemOffsets = new HashMap<>();
        try (RandomAccessFile raf = new RandomAccessFile(dir, IOHelper.READ_WRITE_MODE)) {
            raf.seek(tableSize);
            for (ItemInfo ii : getItems().values()) {
                itemOffsets.put(ii.getItemId(), (int) raf.getFilePointer());
                raf.writeInt(ii.getItemId());
                raf.writeUTF(ii.getInvType().toString());
                raf.writeBoolean(ii.isCash());
                raf.writeInt(ii.getPrice());
                raf.writeInt(ii.getSlotMax());
                raf.writeBoolean(ii.isTradeBlock());
                raf.writeBoolean(ii.isNotSale());
                raf.writeBoolean(ii.isAccountSharable());
                raf.writeUTF(ii.getPath());
                raf.writeBoolean(ii.isNoCursed());
                raf.writeInt(ii.getBagType());
                raf.writeInt(ii.getCharmEXP());
                raf.writeInt(ii.getSenseEXP());
                raf.writeBoolean(ii.isQuest());
                raf.writeInt(ii.getReqQuestOnProgress());
                raf.writeBoolean(ii.isNotConsume());
                raf.writeBoolean(ii.isMonsterBook());
                raf.writeInt(ii.getMobID());
                raf.writeInt(ii.getNpcID());
                raf.writeInt(ii.getLinkedID());
                raf.writeUTF(ii.getScript());
                raf.writeInt(ii.getScriptNPC());
                raf.writeUTF(ii.getNebString());
                raf.writeShort(ii.getScrollStats().size());
                for (Map.Entry<ScrollStat, Integer> entry : ii.getScrollStats().entrySet()) {
                    raf.writeUTF(entry.getKey().toString());
                    raf.writeInt(entry.getValue());
                }
                raf.writeShort(ii.getSpecStats().size());
                for (Map.Entry<SpecStat, Integer> entry : ii.getSpecStats().entrySet()) {
                    raf.writeUTF(entry.getKey().toString());
                    raf.writeInt(entry.getValue());
                }
                raf.writeShort(ii.getOptionStats().size());
                for (Map.Entry<BaseStat, Double> entry : ii.getOptionStats().entrySet()) {
                    raf.writeInt(entry.getKey().ordinal());
                    raf.writeDouble(entry.getValue());
                }
                raf.writeShort(ii.getQuestIDs().size());
                for (int i : ii.getQuestIDs()) {
                    raf.writeInt(i);
                }

                raf.writeShort(ii.getSkills().size());
                for (int i : ii.getSkills()) {
                    raf.writeInt(i);
                }
                raf.writeShort(ii.getItemRewardInfos().size());
                for (ItemRewardInfo iri : ii.getItemRewardInfos()) {
                    raf.writeInt(iri.getCount());
                    raf.writeInt(iri.getItemID());
                    raf.writeDouble(iri.getProb());
                    raf.writeInt(iri.getPeriod());
                    raf.writeUTF(iri.getEffect());
                }
                raf.writeInt(ii.getReqSkillLv());
                raf.writeInt(ii.getMasterLv());

                raf.writeInt(ii.getMoveTo());
                raf.writeInt(ii.getSkillId());
                raf.writeInt(ii.getDelta());
                raf.writeInt(ii.getFamiliarId());
                raf.writeInt(ii.getGrade());

                raf.writeInt(ii.getFamiliarCons().size());
                for (Tuple<Integer, Integer> t : ii.getFamiliarCons()) {
                    raf.writeInt(t.getLeft());
                    raf.writeInt(t.getRight());
                }

                raf.writeBoolean(ii.getGroupChairInfo() != null);
                if (ii.getGroupChairInfo() != null) {
                    ii.getGroupChairInfo().write(raf);
                }
                raf.writeInt(ii.getReqs().size());
                for (var req : ii.getReqs()) {
                    raf.writeInt(req);
                }

                raf.writeBoolean(ii.getCustomChairInfo() != null);
                if (ii.getCustomChairInfo() != null) {
                    ii.getCustomChairInfo().write(raf);
                }
            }
            IOHelper.writeOffsetTable(itemOffsets, raf);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void savePets(String dir) {
        int tableSize = getPets().size() * 8 + 4; // 4 for id, 4 for offset pos, single 4 for size
        petOffsets = new HashMap<>();
        try (RandomAccessFile raf = new RandomAccessFile(dir, IOHelper.READ_WRITE_MODE)) {
            raf.seek(tableSize);
            for (PetInfo pi : getPets().values()) {
                petOffsets.put(pi.getItemID(), (int) raf.getFilePointer());
                raf.writeInt(pi.getItemID());
                raf.writeByte(pi.getInvType().getVal());
                raf.writeInt(pi.getLife());
                raf.writeInt(pi.getSetItemID());
                raf.writeInt(pi.getLimitedLife());
                raf.writeInt(pi.getEvolutionID());
                raf.writeInt(pi.getType());
                raf.writeInt(pi.getEvolReqItemID());
                raf.writeInt(pi.getEvolNo());
                raf.writeInt(pi.getEvol1());
                raf.writeInt(pi.getEvol2());
                raf.writeInt(pi.getEvol3());
                raf.writeInt(pi.getEvol4());
                raf.writeInt(pi.getEvol5());
                raf.writeInt(pi.getProbEvol1());
                raf.writeInt(pi.getProbEvol2());
                raf.writeInt(pi.getProbEvol3());
                raf.writeInt(pi.getProbEvol4());
                raf.writeInt(pi.getProbEvol5());
                raf.writeInt(pi.getEvolReqPetLvl());
                raf.writeBoolean(pi.isAllowOverlappedSet());
                raf.writeBoolean(pi.isNoRevive());
                raf.writeBoolean(pi.isNoScroll());
                raf.writeBoolean(pi.isCash());
                raf.writeBoolean(pi.isGiantPet());
                raf.writeBoolean(pi.isPermanent());
                raf.writeBoolean(pi.isPickupItem());
                raf.writeBoolean(pi.isInteractByUserAction());
                raf.writeBoolean(pi.isLongRange());
                raf.writeBoolean(pi.isMultiPet());
                raf.writeBoolean(pi.isAutoBuff());
                raf.writeBoolean(pi.isStarPlanetPet());
                raf.writeBoolean(pi.isEvol());
                raf.writeBoolean(pi.isAutoReact());
                raf.writeBoolean(pi.isPickupAll());
                raf.writeBoolean(pi.isSweepForDrop());
                raf.writeBoolean(pi.isConsumeMP());
                raf.writeBoolean(pi.isNoMoveToLocker());
                raf.writeUTF(pi.getRunScript() == null ? "" : pi.getRunScript());
            }
            IOHelper.writeOffsetTable(petOffsets, raf);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static PetInfo getPetInfoByID(int id) {
        var pet = getPets().get(id);
        return pet != null ? pet : loadPetByID(id);
    }

    public static PetInfo loadPetByID(int id) {
        if (petOffsets == null) {
            petOffsets = new HashMap<>();
            IOHelper.loadOffsets(petOffsets, PETS_FILE);
        }
        if (!petOffsets.containsKey(id)) {
            return null;
        }

        PetInfo pi = null;
        try (RandomAccessFile raf = new RandomAccessFile(PETS_FILE, IOHelper.READ_MODE)) {
            raf.seek(petOffsets.get(id));
            pi = new PetInfo();
            pi.setItemID(raf.readInt());
            pi.setInvType(InvType.getInvTypeByVal(raf.readByte()));
            pi.setLife(raf.readInt());
            pi.setSetItemID(raf.readInt());
            pi.setLimitedLife(raf.readInt());
            pi.setEvolutionID(raf.readInt());
            pi.setType(raf.readInt());
            pi.setEvolReqItemID(raf.readInt());
            pi.setEvolNo(raf.readInt());
            pi.setEvol1(raf.readInt());
            pi.setEvol2(raf.readInt());
            pi.setEvol3(raf.readInt());
            pi.setEvol4(raf.readInt());
            pi.setEvol5(raf.readInt());
            pi.setProbEvol1(raf.readInt());
            pi.setProbEvol2(raf.readInt());
            pi.setProbEvol3(raf.readInt());
            pi.setProbEvol4(raf.readInt());
            pi.setProbEvol5(raf.readInt());
            pi.setEvolReqPetLvl(raf.readInt());
            pi.setAllowOverlappedSet(raf.readBoolean());
            pi.setNoRevive(raf.readBoolean());
            pi.setNoScroll(raf.readBoolean());
            pi.setCash(raf.readBoolean());
            pi.setGiantPet(raf.readBoolean());
            pi.setPermanent(raf.readBoolean());
            pi.setPickupItem(raf.readBoolean());
            pi.setInteractByUserAction(raf.readBoolean());
            pi.setLongRange(raf.readBoolean());
            pi.setMultiPet(raf.readBoolean());
            pi.setAutoBuff(raf.readBoolean());
            pi.setStarPlanetPet(raf.readBoolean());
            pi.setEvol(raf.readBoolean());
            pi.setAutoReact(raf.readBoolean());
            pi.setPickupAll(raf.readBoolean());
            pi.setSweepForDrop(raf.readBoolean());
            pi.setConsumeMP(raf.readBoolean());
            pi.setNoMoveToLocker(raf.readBoolean());
            pi.setRunScript(raf.readUTF());
            addPetInfo(pi);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return pi;
    }

    public static void loadPetsFromWZ() {
        WzFile file = new WzFile(ServerConstants.WZ_DIR + "/Item.wz");
        WzObject<?, ?> petNode = file.getChild("Pet");
        for (WzObject<?, ?> node : petNode) {
            int id = Integer.parseInt(node.getName().replace(".img", ""));
            PetInfo pi = new PetInfo();
            pi.setItemID(id);
            pi.setInvType(InvType.CASH);
            WzObject<?, ?> infoNode = node.getChild("info");

            pi.setLife(((WzProperty) infoNode.getChild("life", 0)).getIntValue());
            pi.setSetItemID(((WzProperty) infoNode.getChild("setItemID", 0)).getIntValue());
            pi.setEvolutionID(((WzProperty) infoNode.getChild("evolutionID", 0)).getIntValue());
            pi.setType(((WzProperty) infoNode.getChild("type", 0)).getIntValue());
            pi.setLimitedLife(((WzProperty) infoNode.getChild("limitedLife", 0)).getIntValue());
            pi.setEvol1(((WzProperty) infoNode.getChild("evol1", 0)).getIntValue());
            pi.setEvol2(((WzProperty) infoNode.getChild("evol2", 0)).getIntValue());
            pi.setEvol3(((WzProperty) infoNode.getChild("evol3", 0)).getIntValue());
            pi.setEvol4(((WzProperty) infoNode.getChild("evol4", 0)).getIntValue());
            pi.setEvol5(((WzProperty) infoNode.getChild("evol5", 0)).getIntValue());
            pi.setProbEvol1(((WzProperty) infoNode.getChild("evolProp1", 0)).getIntValue());
            pi.setProbEvol2(((WzProperty) infoNode.getChild("evolProp2", 0)).getIntValue());
            pi.setProbEvol3(((WzProperty) infoNode.getChild("evolProp3", 0)).getIntValue());
            pi.setProbEvol4(((WzProperty) infoNode.getChild("evolProp4", 0)).getIntValue());
            pi.setProbEvol5(((WzProperty) infoNode.getChild("evolProp5", 0)).getIntValue());
            pi.setEvolReqItemID(((WzProperty) infoNode.getChild("evolReqItemID", 0)).getIntValue());
            pi.setEvolReqPetLvl(((WzProperty) infoNode.getChild("evolReqPetLvl", 0)).getIntValue());
            pi.setEvolNo(((WzProperty) infoNode.getChild("evolNo", 0)).getIntValue());
            pi.setPermanent(((WzProperty) infoNode.getChild("permanent", 0)).getIntValue() != 0);
            pi.setPickupItem(((WzProperty) infoNode.getChild("pickupItem", 0)).getIntValue() != 0);
            pi.setPickupAll(((WzProperty) infoNode.getChild("interactByUserAction", 0)).getIntValue() != 0);
            pi.setLongRange(((WzProperty) infoNode.getChild("longRange", 0)).getIntValue() != 0);
            pi.setGiantPet(((WzProperty) infoNode.getChild("giantPet", 0)).getIntValue() != 0);
            pi.setNoMoveToLocker(((WzProperty) infoNode.getChild("noMoveToLocker", 0)).getIntValue() != 0);
            pi.setAllowOverlappedSet(((WzProperty) infoNode.getChild("allowOverlappedSet", 0)).getIntValue() != 0);
            pi.setNoRevive(((WzProperty) infoNode.getChild("noRevive", 0)).getIntValue() != 0);
            pi.setNoScroll(((WzProperty) infoNode.getChild("noScroll", 0)).getIntValue() != 0);
            pi.setAutoBuff(((WzProperty) infoNode.getChild("autoBuff", 0)).getIntValue() != 0);
            pi.setMultiPet(((WzProperty) infoNode.getChild("multiPet", 0)).getIntValue() != 0);
            pi.setAutoReact(((WzProperty) infoNode.getChild("autoReact", 0)).getIntValue() != 0);
            pi.setPickupAll(((WzProperty) infoNode.getChild("pickupAll", 0)).getIntValue() != 0);
            pi.setSweepForDrop(((WzProperty) infoNode.getChild("sweepForDrop", 0)).getIntValue() != 0);
            pi.setConsumeMP(((WzProperty) infoNode.getChild("consumeMP", 0)).getIntValue() != 0);
            pi.setEvol(((WzProperty) infoNode.getChild("evol", 0)).getIntValue() != 0);
            pi.setStarPlanetPet(((WzProperty) infoNode.getChild("starPlanetPet", 0)).getIntValue() != 0);
            pi.setCash(((WzProperty) infoNode.getChild("cash", 0)).getIntValue() != 0);
            pi.setRunScript(((WzProperty<String>) infoNode.getChild("runScript", "")).getValue());

            addPetInfo(pi);
            ItemInfo ii = new ItemInfo();
            ii.setItemId(pi.getItemID());
            ii.setInvType(pi.getInvType());
            addItemInfo(ii);
            node.clear();
        }
        file.clear();
    }

    public static void loadItemsFromWZ() {
        WzFile file = new WzFile(ServerConstants.WZ_DIR + "/Item.wz");
        String[] subMaps = new String[]{"Cash", "Consume", "Etc", "Install", "Special"}; // not pet
        for (String subMap : subMaps) {
            WzObject<?, ?> subDir = file.getChild(subMap);
            for (WzObject<?, ?> catNode : subDir) {
                for (WzObject<?, ?> idNode : catNode) {
                    if (!Util.isNumber(idNode.getName())) {
                        idNode.clear();
                        continue;
                    }
                    int id = Integer.parseInt(idNode.getName());
                    ItemInfo item = new ItemInfo();
                    item.setItemId(id);
                    item.setInvType(InvType.getInvTypeByString(subMap));
                    WzObject<?, ?> infoNode = idNode.getChild("info");
                    if (infoNode != null) {
                        item.setCash(((WzProperty) infoNode.getChild("cash", 0)).getIntValue() != 0);
                        item.setPrice(((WzProperty) infoNode.getChild("price", 1)).getIntValue());
                        item.setSlotMax((((WzProperty) infoNode.getChild("slotMax", 200)).getIntValue()));
                        if (ItemConstants.isRebirthFlame(item.getItemId())) {
                            item.setSlotMax(100);
                        }

                        if (((WzProperty) infoNode.getChild("autoPrice", 0)).getIntValue() != 0) {
                            item.setPrice(((WzProperty) infoNode.getChild("lv", 0)).getIntValue() * 2);
                        }

                        WzObject<?, ?> skillNode = infoNode.getChild("skill");
                        if (skillNode != null) {
                            for (WzObject<?, ?> skillIdNode : skillNode) {
                                item.addSkill(((WzProperty) skillIdNode).getIntValue());
                            }
                        }

                        item.setReqSkillLv(((WzProperty) infoNode.getChild("reqSkillLevel", 0)).getIntValue());
                        item.setMasterLv(((WzProperty) infoNode.getChild("masterLevel", 0)).getIntValue());
                        item.setTradeBlock(((WzProperty) infoNode.getChild("tradeBlock", 0)).getIntValue() != 0);
                        item.setNotSale(((WzProperty) infoNode.getChild("notSale", 0)).getIntValue() != 0);
                        item.setAccountSharable(((WzProperty) infoNode.getChild("accountSharable", 0)).getIntValue() != 0);

                        if (infoNode.hasChild("path")) {
                            WzProperty pathNode = (WzProperty) infoNode.getChild("path");
                            if (pathNode.getPropertyType() == WzProperty.Type.STRING) {
                                item.setPath(((WzProperty<String>) infoNode.getChild("path", 0)).getValue());
                            } else {
                                item.setPath(((WzProperty) infoNode.getChild("path", 0)).getIntValue() + "");
                            }
                        }

                        item.setNoCursed(((WzProperty) infoNode.getChild("noCursed", 0)).getIntValue() != 0);

                        Map<ScrollStat, String> mcnScrollStats = new HashMap<ScrollStat, String>() {{
                            put(incMHP, "incMaxHP");  // Second Name
                            put(incMMP, "incMaxMP");
                            put(randStat, "randstat");
                        }};
                        for (ScrollStat ss : ScrollStat.values()) {
                            if (infoNode.getChild(ss.toString()) != null) {
                                item.putScrollStat(ss, ((WzProperty) infoNode.getChild(ss.toString(), 0)).getIntValue());
                            } else if (mcnScrollStats.containsKey(ss) && infoNode.getChild(mcnScrollStats.get(ss)) != null) {
                                item.putScrollStat(ss, ((WzProperty) infoNode.getChild(mcnScrollStats.get(ss), 0)).getIntValue());
                            }
                        }

                        item.setBagType(((WzProperty) infoNode.getChild("bagType", 0)).getIntValue());
                        item.setCharmEXP(((WzProperty) infoNode.getChild(0, "charmEXP", "charismaEXP")).getIntValue());
                        item.setSenseEXP(((WzProperty) infoNode.getChild("senseEXP", 0)).getIntValue());
                        item.setQuest(((WzProperty) infoNode.getChild("quest", 0)).getIntValue() != 0);
                        item.setReqQuestOnProgress(((WzProperty) infoNode.getChild("reqQuestOnProgress", 0)).getIntValue());

                        Object value = ((WzProperty) infoNode.getChild(null, "qid", "questId")).getValue();
                        if (value != null) {
                            if (value instanceof String) {
                                String strVal = (String) value;
                                if (strVal.contains(".") && strVal.split("[.]").length > 0) {
                                    item.addQuest(Integer.parseInt(strVal.split("[.]")[0]));
                                }
                            } else {
                                item.addQuest((Integer) value);
                            }
                        }

                        item.setNotConsume(((WzProperty) infoNode.getChild("notConsume", 0)).getIntValue() != 0);
                        item.setMonsterBook(((WzProperty) infoNode.getChild("monsterBook", 0)).getIntValue() != 0);
                        item.setMobID(((WzProperty) infoNode.getChild("mob", 0)).getIntValue());
                        item.setNpcID(((WzProperty) infoNode.getChild("npc", 0)).getIntValue());
                        item.setLinkedID(((WzProperty) infoNode.getChild("linkedID", 0)).getIntValue());
                        item.setGrade(((WzProperty) infoNode.getChild("grade", 0)).getIntValue());
                        item.setAndroid(((WzProperty) infoNode.getChild("android", 0)).getIntValue());
                        item.setFamiliarId(((WzProperty) infoNode.getChild("familiarID", 0)).getIntValue());

                        // Group Chair Info
                        if (infoNode.hasChild("group")) {
                            GroupChairInfo groupChairInfo = new GroupChairInfo();
                            var chairNode = infoNode.getChild("group");

                            var chairInfoNode = chairNode.getChild("info");
                            if (chairInfoNode != null) {
                                groupChairInfo.setRandomMainSolo(((WzProperty) chairInfoNode.getChild("randomMainSolo", 0)).getIntValue() != 0);
                                groupChairInfo.setRandomSit(((WzProperty) chairInfoNode.getChild("randomSit", 0)).getIntValue() != 0);
                                groupChairInfo.setInvite(((WzProperty) chairInfoNode.getChild("invite", 0)).getIntValue() != 0);
                                groupChairInfo.setHeight(((WzProperty) chairInfoNode.getChild("height", 0)).getIntValue());
                                groupChairInfo.setWidth(((WzProperty) chairInfoNode.getChild("width", 0)).getIntValue());
                            }
                            var chairRandomNode = chairNode.getChild("random");
                            if (chairRandomNode != null) {
                                for (var emotion : chairRandomNode.getChild("emotion")) {
                                    groupChairInfo.addEmotion(((WzProperty) emotion).getIntValue());
                                }
                            }
                            var chairSitNode = chairNode.getChild("sit");
                            if (chairSitNode != null) {
                                groupChairInfo.setSeats(chairSitNode.getChildren().size());
                            }
                            item.setGroupChairInfo(groupChairInfo);
                        }


                        // Custom Chair Info
                        WzObject<?, ?> textInfoNode = infoNode.getChild("textInfo");
                        if (textInfoNode != null) {
                            CustomChairInfo cci = new CustomChairInfo();
                            cci.setChairType(CustomChairType.TextChair);
                            item.setCustomChairInfo(cci);
                        }

                        WzObject<?, ?> mesoChairNode = infoNode.getChild("mesoChair");
                        if (mesoChairNode != null) {
                            CustomChairInfo cci = new CustomChairInfo();
                            cci.setChairType(CustomChairType.MesoChair);
                            item.setCustomChairInfo(cci);
                        }

                        WzObject<?, ?> lvChairInfoNode = infoNode.getChild("lvChairInfo");
                        if (lvChairInfoNode != null) {
                            CustomChairInfo cci = new CustomChairInfo();
                            cci.setChairType(CustomChairType.TotalChair);
                            item.setCustomChairInfo(cci);
                        }

                        WzObject<?, ?> towerChairNode = infoNode.getChild("towerBottom");
                        if (towerChairNode != null) {
                            CustomChairInfo cci = new CustomChairInfo();
                            cci.setChairType(CustomChairType.TowerChair);
                            item.setCustomChairInfo(cci);
                        }

                        // TODO ArcaneForce Chair

                        WzObject<?, ?> customChairNode = infoNode.getChild("customChair");
                        if (customChairNode != null) {
                            CustomChairInfo cci = new CustomChairInfo();
                            WzObject<?, ?> customChairType = customChairNode.getChild("type");
                            if (customChairType != null) {
                                String s = ((WzProperty) customChairType).getValue().toString();
                                CustomChairType type = CustomChairType.getByString(s);
                                if (type == null) {
                                    System.out.println(String.format("Unhandled Chair Type {%s} from Item {%d}", s, id));
                                } else {
                                    cci.setChairType(type);

                                    switch (type) {
                                        case SaveTimeChair:
                                            // timeSaveQr
                                            WzObject<?, ?> saveTimeChairInfoNode = customChairNode.getChild("timeChairInfo");
                                            if (saveTimeChairInfoNode != null) {
                                                cci.setQuestID(((WzProperty) saveTimeChairInfoNode.getChild("timeSaveQr")).getIntValue());
                                            }
                                            break;
                                        case TrickOrTreatChair:
                                            // dispenseCandyQr
                                            WzObject<?, ?> trickOrtreatChairInfoNode = customChairNode.getChild("trickOrTreatChairInfo");
                                            if (trickOrtreatChairInfoNode != null) {
                                                cci.setQuestID(((WzProperty) trickOrtreatChairInfoNode.getChild("dispenseCandyQr")).getIntValue());
                                            }
                                            break;
                                        case CelebChair:
                                            // linkChair
                                            WzObject<?, ?> celebChairInfoNode = customChairNode.getChild("celebChairInfo");
                                            if (celebChairInfoNode != null) {
                                                for (WzObject<?, ?> celebChairNode : celebChairInfoNode) {
                                                    if (!Util.isNumber(celebChairNode.getName())) {
                                                        continue;
                                                    }
                                                    int threshold = Integer.parseInt(celebChairNode.getName());
                                                    int linkChair = ((WzProperty) celebChairNode.getChild("linkChair")).getIntValue();
                                                    cci.addLinkChair(threshold, linkChair);
                                                }
                                            }
                                            break;
                                        case TraitsChair:
                                            // subType
                                            WzObject<?, ?> subTypeTraitNode = customChairNode.getChild("subType");
                                            if (subTypeTraitNode != null) {
                                                cci.setTrait(((WzProperty) subTypeTraitNode).getValue().toString());
                                            }
                                            // linkChair
                                            WzObject<?, ?> traitsChairInfoNode = customChairNode.getChild("TraitsChairInfo");
                                            if (traitsChairInfoNode != null) {
                                                for (WzObject<?, ?> traitsChairNode : traitsChairInfoNode) {
                                                    if (!Util.isNumber(traitsChairNode.getName())) {
                                                        continue;
                                                    }
                                                    int threshold = Integer.parseInt(traitsChairNode.getName());
                                                    int linkChair = ((WzProperty) traitsChairNode.getChild("linkChair")).getIntValue();
                                                    cci.addLinkChair(threshold, linkChair);
                                                }
                                            }
                                            break;
                                        case RollingHouseChair:
                                            // partsQuestID
                                            WzObject<?, ?> partsQuestIDNode = customChairNode.getChild("partsQuestID");
                                            if (partsQuestIDNode != null) {
                                                cci.setQuestID(((WzProperty) partsQuestIDNode).getIntValue());
                                            }
                                            // partsCount
                                            WzObject<?, ?> partsCountNode = customChairNode.getChild("partsCount");
                                            if (partsCountNode != null) {
                                                cci.setPartsCount(((WzProperty) partsCountNode).getIntValue());
                                            }
                                            break;
                                        case HashTagChair:
                                            // questID
                                            WzObject<?, ?> questIDNode = customChairNode.getChild("questID");
                                            if (questIDNode != null) {
                                                cci.setQuestID(((WzProperty) questIDNode).getIntValue());
                                            }
                                            // totalQrNum
                                            WzObject<?, ?> totalQrNumNode = customChairNode.getChild("totalQrNum");
                                            if (totalQrNumNode != null) {
                                                cci.setTotalQrNum(((WzProperty) totalQrNumNode).getIntValue());
                                            }
                                            break;
                                        case ScoreChair:
                                            // scoreInfo -> questID | questEx
                                            WzObject<?, ?> scoreChairInfoNode = customChairNode.getChild("scoreChairInfo");
                                            if (scoreChairInfoNode != null) {
                                                WzObject<?, ?> scoreInfoNode = scoreChairInfoNode.getChild("scoreInfo");
                                                if (scoreInfoNode != null) {
                                                    // questID
                                                    questIDNode = scoreInfoNode.getChild("questID");
                                                    if (questIDNode != null) {
                                                        cci.setQuestID(((WzProperty) questIDNode).getIntValue());
                                                    }
                                                    // questEx
                                                    WzObject<?, ?> questExNode = scoreInfoNode.getChild("questEx");
                                                    if (questExNode != null) {
                                                        cci.setQuestEx(((WzProperty) questExNode).getValue().toString());
                                                    }
                                                }
                                            }
                                            break;
                                        case ScaleAvatarChair:
                                            // QR -> id | key
                                            WzObject<?, ?> scaleAvatarNode = customChairNode.getChild("scaleAvatar");
                                            if (scaleAvatarNode != null) {
                                                WzObject<?, ?> qrNode = scaleAvatarNode.getChild("QR");
                                                if (qrNode != null) {
                                                    // id
                                                    questIDNode = qrNode.getChild("id");
                                                    if (questIDNode != null) {
                                                        cci.setQuestID(((WzProperty) questIDNode).getIntValue());
                                                    }
                                                    // key
                                                    WzObject<?, ?> questExNode = qrNode.getChild("key");
                                                    if (questExNode != null) {
                                                        cci.setQuestEx(((WzProperty) questExNode).getValue().toString());
                                                    }
                                                }
                                            }
                                            break;
                                        case WasteChair:
                                            // targetQrExKey | targetQrExID
                                            // saveQrID
                                            WzObject<?, ?> wasteChairInfoNode = customChairNode.getChild("wasteChairInfo");
                                            if (wasteChairInfoNode != null) {
                                                // targetQrExKey
                                                cci.setQuestEx(((WzProperty) wasteChairInfoNode.getChild("targetQrExKey")).getValue().toString());

                                                // targetQrExID
                                                cci.setQuestID(((WzProperty) wasteChairInfoNode.getChild("targetQrExID")).getIntValue());

                                                // saveQrID
                                                cci.setSaveQrID(((WzProperty) wasteChairInfoNode.getChild("saveQrID")).getIntValue());
                                            }
                                            break;
                                    }
                                }
                            }
                            item.setCustomChairInfo(cci);

                        }
                    }

                    WzObject<?, ?> socketMainNode = idNode.getChild("socket");
                    if (socketMainNode != null) {
                        if (socketMainNode.hasChild("optionType")) {
                            item.putScrollStat(optionType, ((WzProperty) socketMainNode.getChild("optionType")).getIntValue());
                        }
                        item.setNebString((String) (((WzProperty) socketMainNode.getChild("string")).getValue()));
                        WzObject<?, ?> socketOptionNode = socketMainNode.getChild("option");
                        if (socketOptionNode != null) {
                            for (WzObject<?, ?> ioNode : socketOptionNode) {
                                double val = ((WzProperty) ioNode.getChild("level")).getIntValue();
                                BaseStat bs = null;
                                String optionString = (String) ((WzProperty) ioNode.getChild("optionString")).getValue();
                                switch (optionString) {
                                    case "incSTR":
                                        bs = BaseStat.str;
                                        break;
                                    case "incDEX":
                                        bs = BaseStat.dex;
                                        break;
                                    case "incINT":
                                        bs = BaseStat.inte;
                                        break;
                                    case "incLUK":
                                        bs = BaseStat.luk;
                                        break;
                                    case "incMHP":
                                        bs = BaseStat.mhp;
                                        break;
                                    case "incMMP":
                                        bs = BaseStat.mmp;
                                        break;
                                    case "incACC":
                                        bs = BaseStat.acc;
                                        break;
                                    case "incEVA":
                                        bs = BaseStat.eva;
                                        break;
                                    case "incSpeed":
                                        bs = BaseStat.speed;
                                        break;
                                    case "incJump":
                                        bs = BaseStat.jump;
                                        break;
                                    case "incPAD":
                                        bs = BaseStat.pad;
                                        break;
                                    case "incMAD":
                                        bs = BaseStat.mad;
                                        break;
                                    case "incPDD":
                                        bs = BaseStat.pdd;
                                        break;
                                    case "incMDD":
                                        bs = BaseStat.mdd;
                                        break;
                                    case "incCr":
                                        bs = BaseStat.cr;
                                        break;
                                    case "incPADr":
                                        bs = BaseStat.padR;
                                        break;
                                    case "incMADr":
                                        bs = BaseStat.madR;
                                        break;
                                    case "incSTRr":
                                        bs = BaseStat.strR;
                                        break;
                                    case "incDEXr":
                                        bs = BaseStat.dexR;
                                        break;
                                    case "incINTr":
                                        bs = BaseStat.intR;
                                        break;
                                    case "incLUKr":
                                        bs = BaseStat.lukR;
                                        break;
                                    case "ignoreTargetDEF":
                                        bs = BaseStat.ied;
                                        break;
                                    case "boss":
                                        bs = BaseStat.bd;
                                        break;
                                    case "incDAMr":
                                        bs = BaseStat.damR;
                                        break;
                                    case "incAllskill":
                                        bs = BaseStat.incAllSkill;
                                        break;
                                    case "incMHPr":
                                        bs = BaseStat.mhpR;
                                        break;
                                    case "incMMPr":
                                        bs = BaseStat.mmpR;
                                        break;
                                    case "incACCr":
                                        bs = BaseStat.accR;
                                        break;
                                    case "incEVAr":
                                        bs = BaseStat.evaR;
                                        break;
                                    case "incPDDr":
                                        bs = BaseStat.pddR;
                                        break;
                                    case "incMDDr":
                                        bs = BaseStat.mddR;
                                        break;
                                    case "RecoveryHP":
                                        bs = BaseStat.hpRecovery;
                                        break;
                                    case "RecoveryMP":
                                        bs = BaseStat.mpRecovery;
                                        break;
                                    case "RecoveryUP":
                                        bs = BaseStat.recoveryUp;
                                        break;
                                    case "incTerR":
                                        bs = BaseStat.ter;
                                        break;
                                    case "incAsrR":
                                        bs = BaseStat.asr;
                                        break;
                                    case "incEXPr":
                                        bs = BaseStat.expR;
                                        break;
                                    case "mpconReduce":
                                        bs = BaseStat.mpconReduce;
                                        break;
                                    case "reduceCooltime":
                                        bs = BaseStat.reduceCooltime;
                                        break;
                                    case "incMesoProp":
                                        bs = BaseStat.mesoR;
                                        break;
                                    case "incRewardProp":
                                        bs = BaseStat.dropR;
                                        break;
                                    case "incCriticaldamageMin":
                                        bs = BaseStat.crDmg;
                                        break;
                                    case "incCriticaldamageMax":
                                        bs = BaseStat.crDmg;
                                        break;
                                    case "incCriticaldamage":
                                        bs = BaseStat.crDmg;
                                        break;
                                }
                                if (bs != null) {
                                    item.addOptionStat(bs, val);
                                }
                            }
                            if (item.getOptionStats().containsKey(BaseStat.bd) && item.getOptionStats().containsKey(BaseStat.damR)) {
                                Map<BaseStat, Double> optionStats = new HashMap<>();
                                optionStats.put(BaseStat.bd, item.getOptionStats().get(BaseStat.damR));
                                item.setOptionStats(optionStats);
                            }
                        }
                    }

                    WzObject<?, ?> specMainNode = idNode.getChild("spec");
                    if (specMainNode != null) {
                        for (WzObject<?, ?> specNode : specMainNode) {
                            WzProperty prop = (WzProperty) specNode;
                            String name = specNode.getName();
                            int intVal = 0;
                            if (prop.getPropertyType().isInteger()) {
                                intVal = prop.getIntValue();
                            }
                            switch (specNode.getName()) {
                                case "con": // Restrictions to Buffs (Mostly Familiars/MonsterCard Buffs) such as X +5% if in El Nath
                                    for (WzObject<?, ?> conNode : specNode) {
                                        if (conNode.getChild("type") != null) {
                                            var type = ((WzProperty) conNode.getChild("type")).getIntValue();
                                            switch (type) {
                                                case 0: // Field Restrictions
                                                    if (conNode.getChild("sMap") == null || conNode.getChild("eMap") == null) {
                                                        continue;
                                                    }
                                                    var sMap = ((WzProperty) conNode.getChild("sMap")).getIntValue();
                                                    var eMap = ((WzProperty) conNode.getChild("eMap")).getIntValue();
                                                    item.addFamiliarCon(sMap, eMap);
                                                    break;
                                                case 2: // Party Restrictions
                                                    var inParty = ((WzProperty) conNode.getChild("inParty")).getIntValue();
                                                    break;
                                                default:
                                                    log.warn(String.format("Unhandled con for id %d, type %s", id, type));
                                                    break;
                                            }
                                        }
                                    }
                                    break;
                                case "script":
                                    item.setScript(((WzProperty<String>) prop).getValue());
                                    break;
                                case "npc":
                                    item.setScriptNPC(intVal);
                                    break;
                                case "moveTo":
                                    item.setMoveTo(intVal);
                                    break;
                                default:
                                    SpecStat ss = SpecStat.getSpecStatByName(name);
                                    if (ss != null) {
                                        item.putSpecStat(ss, intVal);
                                    } else if (LOG_UNKS) {
                                        log.warn(String.format("Unhandled spec for id %d, name %s, value %s", id, name, prop.getValue()));
                                    }
                            }
                        }
                    }

                    WzObject<?, ?> rewardNode = idNode.getChild("reward");
                    if (rewardNode != null) {
                        for (WzObject<?, ?> rewardIdNode : rewardNode) {
                            ItemRewardInfo iri = new ItemRewardInfo();

                            iri.setCount(((WzProperty) rewardIdNode.getChild("count", 0)).getIntValue());
                            iri.setItemID(Integer.parseInt(rewardIdNode.getChild("item", 0).toString().replaceAll("[\\r\\n]", "")));
                            iri.setProb(Double.parseDouble(rewardIdNode.getChild("prob", 0)
                                            .toString()
                                            .replace("[R8]", "")
                                            .replaceAll("[\\r\\n]", "")
                                    )
                            );
                            iri.setPeriod(((WzProperty) rewardIdNode.getChild("period", 0)).getIntValue());
                            iri.setEffect(((WzProperty<String>) rewardIdNode.getChild("", "effect", "Effect")).getValue());

                            item.addItemReward(iri);
                        }
                    }

                    WzObject<?, ?> reqMainNode = idNode.getChild("req");
                    if (reqMainNode != null) {
                        for (WzObject<?, ?> reqNode : reqMainNode) {
                            item.addReq(((WzProperty) reqNode).getIntValue());
                        }
                    }

                    item.setDelta(((WzProperty) idNode.getChild("delta", 0)).getIntValue());

                    item.setSkillId(getSkillIdByItemId(id));
                    getItems().put(item.getItemId(), item);
                    idNode.clear();
                }
            }
        }
        file.clear();
    }

    public static void loadMountItemsFromFile() {
        File file = new File(String.format("%s/mountsFromItem.txt", ServerConstants.RESOURCES_DIR));
        try (Scanner scanner = new Scanner(new FileInputStream(file))) {
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                String[] lineSplit = line.split(" ");
                int itemId = Integer.parseInt(lineSplit[0]);
                int skillId = Integer.parseInt(lineSplit[1]);
                skillIdByItemId.put(itemId, skillId);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static int getSkillIdByItemId(int itemId) {
        return skillIdByItemId.getOrDefault(itemId, 0);
    }

    public static Item getDeepCopyByItemInfo(ItemInfo itemInfo) {
        if (itemInfo == null) {
            return null;
        }
        Item res = new Item();
        res.setItemId(itemInfo.getItemId());
        res.setQuantity(1);
        res.setType(ITEM);
        res.setInvType(itemInfo.getInvType());
        res.setCash(itemInfo.isCash());
        return res;
    }

    public static Item getItemDeepCopy(int id) {
        return getItemDeepCopy(id, false);
    }

    public static Item getItemDeepCopy(int id, boolean randomize) {
        if (ItemConstants.isEquip(id) || ItemConstants.isFace(id) || ItemConstants.isHair(id)) {
            return getEquipDeepCopy(id, randomize);
        } else if (ItemConstants.isPet(id)) {
            return getPetDeepCopyFromID(id);
        }
        return getDeepCopyByItemInfo(getItemInfoByID(id));
    }

    private static PetItem getPetDeepCopyFromID(int id) {
        return getPetInfoByID(id) == null ? null : getPetInfoByID(id).createPetItem();
    }

    public static ItemInfo getItemInfoByID(int itemId) {
        if (getItems().containsKey(itemId)) {
            return getItems().get(itemId);
        }
        if (itemOffsets == null) {
            itemOffsets = new HashMap<>();
            IOHelper.loadOffsets(itemOffsets, ITEMS_FILE);
        }
        if (!itemOffsets.containsKey(itemId)) {
            if (!ItemConstants.isEquip(itemId)) {
                log.error("[ItemData] Could not find item " + itemId);
            }
            return null;
        }

        ItemInfo itemInfo = null;
        try (RandomAccessFile raf = new RandomAccessFile(ITEMS_FILE, IOHelper.READ_MODE)) {
            raf.seek(itemOffsets.get(itemId));
            itemInfo = new ItemInfo();
            itemInfo.setItemId(raf.readInt());
            itemInfo.setInvType(InvType.getInvTypeByString(raf.readUTF()));
            itemInfo.setCash(raf.readBoolean());
            itemInfo.setPrice(raf.readInt());
            itemInfo.setSlotMax(raf.readInt());
            itemInfo.setTradeBlock(raf.readBoolean());
            itemInfo.setNotSale(raf.readBoolean());
            itemInfo.setAccountSharable(raf.readBoolean());
            itemInfo.setPath(raf.readUTF());
            itemInfo.setNoCursed(raf.readBoolean());
            itemInfo.setBagType(raf.readInt());
            itemInfo.setCharmEXP(raf.readInt());
            itemInfo.setSenseEXP(raf.readInt());
            itemInfo.setQuest(raf.readBoolean());
            itemInfo.setReqQuestOnProgress(raf.readInt());
            itemInfo.setNotConsume(raf.readBoolean());
            itemInfo.setMonsterBook(raf.readBoolean());
            itemInfo.setMobID(raf.readInt());
            itemInfo.setNpcID(raf.readInt());
            itemInfo.setLinkedID(raf.readInt());
            itemInfo.setScript(raf.readUTF());
            itemInfo.setScriptNPC(raf.readInt());
            itemInfo.setNebString(raf.readUTF());
            short size = raf.readShort();
            for (int i = 0; i < size; i++) {
                ScrollStat ss = ScrollStat.getScrollStatByString(raf.readUTF());
                int val = raf.readInt();
                itemInfo.putScrollStat(ss, val);
            }
            size = raf.readShort();
            for (int i = 0; i < size; i++) {
                SpecStat ss = SpecStat.getSpecStatByName(raf.readUTF());
                int val = raf.readInt();
                itemInfo.putSpecStat(ss, val);
            }
            size = raf.readShort();
            for (int i = 0; i < size; i++) {
                BaseStat bs = BaseStat.values()[raf.readInt()];
                double val = raf.readDouble();
                itemInfo.addOptionStat(bs, val);
            }
            size = raf.readShort();
            for (int i = 0; i < size; i++) {
                itemInfo.addQuest(raf.readInt());
            }

            size = raf.readShort();
            for (int i = 0; i < size; i++) {
                itemInfo.addSkill(raf.readInt());
            }

            size = raf.readShort();
            for (int i = 0; i < size; i++) {
                ItemRewardInfo iri = new ItemRewardInfo();
                iri.setCount(raf.readInt());
                iri.setItemID(raf.readInt());
                iri.setProb(raf.readDouble());
                iri.setPeriod(raf.readInt());
                iri.setEffect(raf.readUTF());
                itemInfo.addItemReward(iri);
            }
            itemInfo.setReqSkillLv(raf.readInt());
            itemInfo.setMasterLv(raf.readInt());

            itemInfo.setMoveTo(raf.readInt());
            itemInfo.setSkillId(raf.readInt());
            itemInfo.setDelta(raf.readInt());
            itemInfo.setFamiliarId(raf.readInt());
            itemInfo.setGrade(raf.readInt());

            int sizeInt = raf.readInt();
            for (int i = 0; i < sizeInt; i++) {
                var sMap = raf.readInt();
                var eMap = raf.readInt();
                itemInfo.addFamiliarCon(sMap, eMap);
            }
            if (raf.readBoolean()) {
                itemInfo.setGroupChairInfo(GroupChairInfo.load(raf));
            }
            sizeInt = raf.readInt();
            for (int i = 0; i < sizeInt; i++) {
                itemInfo.addReq(raf.readInt());
            }

            if (raf.readBoolean()) {
                itemInfo.setCustomChairInfo(CustomChairInfo.load(raf));
            }

            getItems().put(itemInfo.getItemId(), itemInfo);

        } catch (IOException e) {
            e.printStackTrace();
        }
        return itemInfo;
    }

    public static Map<Integer, EquipItemInfo> getEquips() {
        return equips;
    }

    public static void loadItemOptionsFromWZ() {
        WzFile file = new WzFile(ServerConstants.WZ_DIR + "/Item.wz");
        String[] subMaps = new String[] {"ItemOption.img", "FamiliarOption.img"};
        for (String subMap : subMaps) {
            WzObject<?, ?> root = file.getChild(subMap);
            for (WzObject<?, ?> idNode : root) {
                int id = Integer.parseInt(idNode.getName());
                ItemOption io = new ItemOption();
                io.setId(id);
                WzObject<?, ?> infoNode = idNode.getChild("info");
                if (infoNode != null) {
                    io.setOptionType(((WzProperty) infoNode.getChild("optionType", 0)).getIntValue());
                    io.setWeight(((WzProperty) infoNode.getChild("weight", 0)).getIntValue());
                    io.setReqLevel(((WzProperty) infoNode.getChild("reqLevel", 0)).getIntValue());
                    io.setString(((WzProperty<String>) infoNode.getChild("string", "")).getValue());
                    int optionBlockVal = ((WzProperty) infoNode.getChild("optionBlock", 0)).getIntValue();
                    if (optionBlockVal != 0) {
                        continue;
                    }
                }

                WzObject<?, ?> levelNode = idNode.getChild("level");
                if (levelNode != null) {
                    for (WzObject<?, ?> levelIdNode : levelNode) {
                        int level = Integer.parseInt(levelIdNode.getName());
                        io.addStatValue(level, BaseStat.str, ((WzProperty) levelIdNode.getChild("incSTR", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.dex, ((WzProperty) levelIdNode.getChild("incDEX", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.inte, ((WzProperty) levelIdNode.getChild("incINT", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.luk, ((WzProperty) levelIdNode.getChild("incLUK", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.mhp, ((WzProperty) levelIdNode.getChild("incMHP", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.mmp, ((WzProperty) levelIdNode.getChild("incMMP", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.acc, ((WzProperty) levelIdNode.getChild("incACC", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.eva, ((WzProperty) levelIdNode.getChild("incEVA", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.speed, ((WzProperty) levelIdNode.getChild("incSpeed", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.jump, ((WzProperty) levelIdNode.getChild("incJump", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.pad, ((WzProperty) levelIdNode.getChild("incPAD", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.mad, ((WzProperty) levelIdNode.getChild("incMAD", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.pdd, ((WzProperty) levelIdNode.getChild("incPDD", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.mdd, ((WzProperty) levelIdNode.getChild("incMDD", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.cr, ((WzProperty) levelIdNode.getChild("incCr", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.padR, ((WzProperty) levelIdNode.getChild("incPADr", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.madR, ((WzProperty) levelIdNode.getChild("incMADr", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.strR, ((WzProperty) levelIdNode.getChild("incSTRr", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.dexR, ((WzProperty) levelIdNode.getChild("incDEXr", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.intR, ((WzProperty) levelIdNode.getChild("incINTr", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.lukR, ((WzProperty) levelIdNode.getChild("incLUKr", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.ied, ((WzProperty) levelIdNode.getChild("ignoreTargetDEF", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.incAllSkill, ((WzProperty) levelIdNode.getChild("incAllskill", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.mhpR, ((WzProperty) levelIdNode.getChild("incMHPr", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.mmpR, ((WzProperty) levelIdNode.getChild("incMMPr", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.accR, ((WzProperty) levelIdNode.getChild("incACCr", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.evaR, ((WzProperty) levelIdNode.getChild("incEVAr", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.pddR, ((WzProperty) levelIdNode.getChild("incPDDr", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.mddR, ((WzProperty) levelIdNode.getChild("incMDDr", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.hpRecovery, ((WzProperty) levelIdNode.getChild("RecoveryHP", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.mpRecovery, ((WzProperty) levelIdNode.getChild("RecoveryMP", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.damageOver, ((WzProperty) levelIdNode.getChild("incMaxDamage", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.strLv, ((WzProperty) levelIdNode.getChild("incSTRlv", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.dexLv, ((WzProperty) levelIdNode.getChild("incDEXlv", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.intLv, ((WzProperty) levelIdNode.getChild("incINTlv", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.lukLv, ((WzProperty) levelIdNode.getChild("incLUKlv", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.recoveryUp, ((WzProperty) levelIdNode.getChild("RecoveryUP", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.ter, ((WzProperty) levelIdNode.getChild("incTerR", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.asr, ((WzProperty) levelIdNode.getChild("incAsrR", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.expR, ((WzProperty) levelIdNode.getChild("incEXPr", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.mpconReduce, ((WzProperty) levelIdNode.getChild("mpconReduce", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.reduceCooltime, ((WzProperty) levelIdNode.getChild("reduceCooltime", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.mesoR, ((WzProperty) levelIdNode.getChild("incMesoProp", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.dropR, ((WzProperty) levelIdNode.getChild("incRewardProp", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.crDmg, ((WzProperty) levelIdNode.getChild("incCriticaldamageMin", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.crDmg, ((WzProperty) levelIdNode.getChild("incCriticaldamageMax", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.crDmg, ((WzProperty) levelIdNode.getChild("incCriticaldamage", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.padLv, ((WzProperty) levelIdNode.getChild("incPADlv", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.madLv, ((WzProperty) levelIdNode.getChild("incMADlv", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.mhpLv, ((WzProperty) levelIdNode.getChild("incMHPlv", 0)).getIntValue());
                        io.addStatValue(level, BaseStat.mmpLv, ((WzProperty) levelIdNode.getChild("incMMPlv", 0)).getIntValue());
                        io.addMiscValue(level, ItemOption.ItemOptionType.prop, ((WzProperty) levelIdNode.getChild("prop", 0)).getIntValue());
                        io.addMiscValue(level, ItemOption.ItemOptionType.time, ((WzProperty) levelIdNode.getChild("time", 0)).getIntValue());
                        io.addMiscValue(level, ItemOption.ItemOptionType.hpRecoveryOnHit, ((WzProperty) levelIdNode.getChild("HP", 0)).getIntValue());
                        io.addMiscValue(level, ItemOption.ItemOptionType.mpRecoveryOnHit, ((WzProperty) levelIdNode.getChild("MP", 0)).getIntValue());
                        io.addMiscValue(level, ItemOption.ItemOptionType.attackType, ((WzProperty) levelIdNode.getChild("attackType", 0)).getIntValue());
                        io.addMiscValue(level, ItemOption.ItemOptionType.level, ((WzProperty) levelIdNode.getChild("level", 0)).getIntValue());
                        io.addMiscValue(level, ItemOption.ItemOptionType.ignoreDam, ((WzProperty) levelIdNode.getChild("ignoreDAM", 0)).getIntValue());
                        io.addMiscValue(level, ItemOption.ItemOptionType.familiarBuff, ((WzProperty) levelIdNode.getChild("familiarBuff", 0)).getIntValue());

                        var boss = levelIdNode.hasChild("boss");
                        var stat = BaseStat.damR;
                        if (boss) {
                            stat = BaseStat.bd;
                        }
                        io.addStatValue(level, stat, ((WzProperty) levelIdNode.getChild("incDAMr", 0)).getIntValue());
                    }
                }
                if (io.getWeight() == 0) {
                    io.setWeight(1);
                }

                if (subMap.contains("Item")) {
                    getItemOptions().put(io.getId(), io);
                } else if (subMap.contains("Familiar")) {
                    getFamiliarOptions().put(io.getId(), io);
                }
            }
        }
        file.clear();
    }

    public static Map<Integer, ItemOption> getItemOptions() {
        return itemOptions;
    }

    public static ItemOption getItemOptionById(int id) {
        return itemOptions.getOrDefault(id, null);
    }

    public static List<ItemOption> getItemOptionsByName(String name) {
        return itemOptions.values().stream().filter(io -> io.getString().toLowerCase().contains(name)).collect(Collectors.toList());
    }

    public static Map<Integer, ItemOption> getFamiliarOptions() {
        return familiarOptions;
    }

    public static ItemOption getFamiliarOptionById(int id) {
        return familiarOptions.getOrDefault(id, null);
    }

    public static List<ItemOption> getFamiliarOptionsByName(String name) {
        return familiarOptions.values().stream().filter(io -> io.getString().toLowerCase().contains(name)).collect(Collectors.toList());
    }

    public static List<ItemOption> getFamiliarOptionByGrade(int grade) {
        return familiarOptions.values().stream().filter(io -> io.getFamiliarGrade() == grade).collect(Collectors.toList());
    }

    public static void saveFamiliarOptions(String dir) {
        File file = new File(String.format("%s/familiarOptions.dat", dir));
        try (DataOutputStream dos = new DataOutputStream(new FileOutputStream(file))) {
            dos.writeInt(getFamiliarOptions().size());
            for (ItemOption io : getFamiliarOptions().values()) {
                dos.writeInt(io.getId());
                dos.writeInt(io.getOptionType());
                dos.writeInt(io.getWeight());
                dos.writeInt(io.getReqLevel());
                dos.writeUTF(io.getString());
                dos.writeShort(io.getStatValuesPerLevel().size());
                for (Map.Entry<Integer, Map<BaseStat, Double>> entry1 : io.getStatValuesPerLevel().entrySet()) {
                    dos.writeInt(entry1.getKey());
                    dos.writeShort(entry1.getValue().size());
                    for (Map.Entry<BaseStat, Double> entry2 : entry1.getValue().entrySet()) {
                        dos.writeInt(entry2.getKey().ordinal());
                        dos.writeDouble(entry2.getValue());
                    }
                }
                dos.writeShort(io.getMiscValuesPerLevel().size());
                for (Map.Entry<Integer, Map<ItemOption.ItemOptionType, Integer>> entry1 : io.getMiscValuesPerLevel().entrySet()) {
                    dos.writeInt(entry1.getKey());
                    dos.writeShort(entry1.getValue().size());
                    for (Map.Entry<ItemOption.ItemOptionType, Integer> entry2 : entry1.getValue().entrySet()) {
                        dos.writeInt(entry2.getKey().ordinal());
                        dos.writeInt(entry2.getValue());
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    @Loader(varName = "familiarOptions")
    public static void loadFamiliarOptions(File file, boolean exists) {
        if (!exists) {
            loadItemOptionsFromWZ();
            saveFamiliarOptions(ServerConstants.DAT_DIR);
        } else {
            try (DataInputStream dis = new DataInputStream(new FileInputStream(file))) {
                int size = dis.readInt();
                for (int i = 0; i < size; i++) {
                    ItemOption io = new ItemOption();
                    io.setId(dis.readInt());
                    io.setOptionType(dis.readInt());
                    io.setWeight(dis.readInt());
                    io.setReqLevel(dis.readInt());
                    io.setString(dis.readUTF());
                    short size2 = dis.readShort();
                    for (int j = 0; j < size2; j++) {
                        int level = dis.readInt();
                        short size3 = dis.readShort();
                        for (int k = 0; k < size3; k++) {
                            io.addStatValue(level, BaseStat.values()[dis.readInt()], dis.readDouble());
                        }
                    }
                    size2 = dis.readShort();
                    for (int j = 0; j < size2; j++) {
                        int level = dis.readInt();
                        short size3 = dis.readShort();
                        for (int k = 0; k < size3; k++) {
                            io.addMiscValue(level, ItemOption.ItemOptionType.values()[dis.readInt()], dis.readInt());
                        }
                    }
                    if (!blockedOptions.contains(io.getId())) {
                        getFamiliarOptions().put(io.getId(), io);
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public static void saveItemOptions(String dir) {
        File file = new File(String.format("%s/itemOptions.dat", dir));
        try (DataOutputStream dos = new DataOutputStream(new FileOutputStream(file))) {
            dos.writeInt(getItemOptions().size());
            for (ItemOption io : getItemOptions().values()) {
                dos.writeInt(io.getId());
                dos.writeInt(io.getOptionType());
                dos.writeInt(io.getWeight());
                dos.writeInt(io.getReqLevel());
                dos.writeUTF(io.getString());
                dos.writeShort(io.getStatValuesPerLevel().size());
                for (Map.Entry<Integer, Map<BaseStat, Double>> entry1 : io.getStatValuesPerLevel().entrySet()) {
                    dos.writeInt(entry1.getKey());
                    dos.writeShort(entry1.getValue().size());
                    for (Map.Entry<BaseStat, Double> entry2 : entry1.getValue().entrySet()) {
                        dos.writeInt(entry2.getKey().ordinal());
                        dos.writeDouble(entry2.getValue());
                    }
                }
                dos.writeShort(io.getMiscValuesPerLevel().size());
                for (Map.Entry<Integer, Map<ItemOption.ItemOptionType, Integer>> entry1 : io.getMiscValuesPerLevel().entrySet()) {
                    dos.writeInt(entry1.getKey());
                    dos.writeShort(entry1.getValue().size());
                    for (Map.Entry<ItemOption.ItemOptionType, Integer> entry2 : entry1.getValue().entrySet()) {
                        dos.writeInt(entry2.getKey().ordinal());
                        dos.writeInt(entry2.getValue());
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static Set<ItemOption> getEquipCubeItemOptions() {
        return equipCubeItemOptions;
    }

    private static void createFilteredOptions() {
        Collection<ItemOption> data = getItemOptions().values();
        equipCubeItemOptions = data.stream().filter(io ->
                io.getId() % 1000 != 14 // Old Magic Def, now regular Def ; removed to not have duplicates
                        && io.getId() != 14 // Old Magic Def, now regular Def ; removed to not have duplicates
                        && io.getId() % 1000 != 54 // Old Magic Def%, now regular Def% ; removed to not have duplicates
                        && (io.getId() % 1000 != 7 || io.getId() == 41007) // Old Accuracy, now Max HP ; removed to not have duplicates (41007 = Decent Speed Infusion For Gloves)
                        && io.getId() != 7 // Old Accuracy, now Max HP ; removed to not have duplicates
                        && (io.getId() % 1000 != 47 || io.getId() == 12047) // Old Accuracy%, now Max HP% ; removed to not have duplicates (12047 = Bonus Weapons STR% Rare)
                        && io.getId() % 1000 != 8 // Old Avoid, now Max MP ; removed to not have duplicates
                        && io.getId() != 8 // Old Accuracy, now Max HP ; removed to not have duplicates
                        && (io.getId() % 1000 != 48 || io.getId() == 12048) // Old Avoid%, now Max MP% ; removed to not have duplicates (12048 = Bonus Weapons DEX% Rare)
                        && io.getId() != 40081 // Flat AllStat
                        && io.getId() % 1000 != 202 // Additional %HP Recovery ; removed to not have duplicates
                        && io.getId() % 1000 != 207 // Additional %MP Recovery ; removed to not have duplicates
                        && io.getId() != 10222 // Secondary Rare-Prime 20% Poison Chance - WeaponsEmblemSecondary
                        && io.getId() != 10227 // Secondary Rare-Prime 10% Stun Chance - WeaponsEmblemSecondary
                        && io.getId() != 10232 // Secondary Rare-Prime 20% Slow Chance - WeaponsEmblemSecondary
                        && io.getId() != 10237 // Secondary Rare-Prime 20% Blind Chance - WeaponsEmblemSecondary
                        && io.getId() != 10242 // Secondary Rare-Prime 10% Freeze Chance - WeaponsEmblemSecondary
                        && io.getId() != 10247 // Secondary Rare-Prime 10% Seal Chance - WeaponsEmblemSecondary
                        && io.getId() % 1000 != 801 // Old Damage Cap Increase, now AllStat/Ignore Enemy Defense/AllStat%/Abnormal Status Res
                        && io.getId() % 1000 != 802 // Old Damage Cap Increase, now AllStat%/ElementalResist
                        && io.getId() % 10000 != 2056 // Old CritRate/Magic Def%, now AllStat%/ElementalResist ; removed to not have duplicates
                        && io.getId() != 32661 // EXP Obtained
                        && io.getId() != 42661 // EXP Obtained
                        && io.getId() != 20396 // Duplicate "invincible for additional seconds"
                        && io.getId() != 40057 // Glove's Crit Damage Duplicate
                        && io.getId() != 42061 // Bonus - Glove's Crit Damage Duplicate
                        && io.getId() != 42062 // Bonus - Armor's 1% Crit Damage Duplicate
                        && io.getId() != 22056 // Bonus - Non-Weapon Crit Rate%
                        && io.getId() != 32052 // Bonus - Non-Weapon Attack%
                        && io.getId() != 32054 // Bonus - Non-Weapon MagicAttack%
                        && io.getId() != 32058 // Bonus - Non-Weapon Crit Rate%
                        && io.getId() != 32071 // Bonus - Non-Weapon Damage%
                        && io.getId() != 42052 // Bonus - Non-Weapon Attack%
                        && io.getId() != 42054 // Bonus - Non-Weapon MagicAttack%
                        && io.getId() != 42058 // Bonus - Non-Weapon Crit Rate%
                        && io.getId() != 42071 // Bonus - Non-Weapon Damage%
                        && !(io.getId() > 14 && io.getId() < 900) // Rare Junk Filter
                        && !(io.getId() > 20000 && io.getId() < 20014) // No Flat Stats Above Rare
                        && !(io.getId() > 30000 && io.getId() < 30014) // No Flat Stats Above Rare
                        && !(io.getId() > 40000 && io.getId() < 40014) // No Flat Stats Above Rare
        ).collect(Collectors.toSet());
    }

    @Loader(varName = "itemOptions")
    public static void loadItemOptions(File file, boolean exists) {
        if (!exists) {
            loadItemOptionsFromWZ();
            saveItemOptions(ServerConstants.DAT_DIR);
        } else {
            try (DataInputStream dis = new DataInputStream(new FileInputStream(file))) {
                int size = dis.readInt();
                for (int i = 0; i < size; i++) {
                    ItemOption io = new ItemOption();
                    io.setId(dis.readInt());
                    io.setOptionType(dis.readInt());
                    io.setWeight(dis.readInt());
                    io.setReqLevel(dis.readInt());
                    io.setString(dis.readUTF());
                    short size2 = dis.readShort();
                    for (int j = 0; j < size2; j++) {
                        int level = dis.readInt();
                        short size3 = dis.readShort();
                        for (int k = 0; k < size3; k++) {
                            io.addStatValue(level, BaseStat.values()[dis.readInt()], dis.readDouble());
                        }
                    }
                    size2 = dis.readShort();
                    for (int j = 0; j < size2; j++) {
                        int level = dis.readInt();
                        short size3 = dis.readShort();
                        for (int k = 0; k < size3; k++) {
                            io.addMiscValue(level, ItemOption.ItemOptionType.values()[dis.readInt()], dis.readInt());
                        }
                    }
                    if (!blockedOptions.contains(io.getId())) {
                        getItemOptions().put(io.getId(), io);
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
            createFilteredOptions();
        }
    }

    private static void saveStartingItems(String dir) {
        File file = new File(String.format("%s/startingItems.dat", dir));
        try (DataOutputStream dos = new DataOutputStream(new FileOutputStream(file))) {
            dos.writeInt(startingItems.size());
            for (int i : startingItems) {
                dos.writeInt(i);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void loadStartingItemsFromWZ() {
        WzFile file = new WzFile(ServerConstants.WZ_DIR + "/Etc.wz");
        WzObject<?, ?> makeCharInfo = file.getChild("MakeCharInfo.img");
        startingItems.addAll(searchForStartingItems(makeCharInfo));
    }

    private static Set<Integer> searchForStartingItems(WzObject<?, ?> n) {
        for (WzObject<?, ?> node : n) {
            if (node instanceof WzProperty) {
                WzProperty prop = (WzProperty) node;
                if (node.getChildren() != null && node.getChildren().size() > 0) {
                    startingItems.addAll(searchForStartingItems(node));
                } else if (Util.isNumber(prop.getName()) && Util.isNumber(prop.getValue().toString())) {
                    startingItems.add(prop.getIntValue());
                }
            }
        }
        return startingItems;
    }

    @Loader(varName = "startingItems")
    public static void loadStartingItems(File file, boolean exists) {
        if (!exists) {
            loadStartingItemsFromWZ();
            saveStartingItems(ServerConstants.DAT_DIR);
        } else {
            try (DataInputStream dis = new DataInputStream(new FileInputStream(file))) {
                int size = dis.readInt();
                for (int i = 0; i < size; i++) {
                    startingItems.add(dis.readInt());
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    @SuppressWarnings("unused") // Reflection
    public static void generateDatFiles() {
        log.info("Started generating item data.");
        long totalStart = System.currentTimeMillis();
        long start = System.currentTimeMillis();
        // Load
        loadEquipsFromWz();
        log.info(String.format("Loaded equips in %dms.", System.currentTimeMillis() - start));
        start = System.currentTimeMillis();
        loadMountItemsFromFile();
        log.info(String.format("Loaded mount items in %dms.", System.currentTimeMillis() - start));
        start = System.currentTimeMillis();
        loadItemsFromWZ();
        log.info(String.format("Loaded items in %dms.", System.currentTimeMillis() - start));
        start = System.currentTimeMillis();
        loadPetsFromWZ();
        log.info(String.format("Loaded pets in %dms.", System.currentTimeMillis() - start));
        start = System.currentTimeMillis();
        loadItemOptionsFromWZ();
        log.info(String.format("Loaded item options in %dms.", System.currentTimeMillis() - start));
        start = System.currentTimeMillis();
        // Link
        QuestData.linkItemData();
        log.info(String.format("Linked quest to items in %dms.", System.currentTimeMillis() - start));
        start = System.currentTimeMillis();
        // Save
        saveEquips(EQUIPS_FILE);
        log.info(String.format("Saved equips in %dms.", System.currentTimeMillis() - start));
        start = System.currentTimeMillis();
        saveItems(ITEMS_FILE);
        log.info(String.format("Saved items in %dms.", System.currentTimeMillis() - start));
        start = System.currentTimeMillis();
        savePets(PETS_FILE);
        log.info(String.format("Saved pets in %dms.", System.currentTimeMillis() - start));
        start = System.currentTimeMillis();
        saveItemOptions(ServerConstants.DAT_DIR);
        log.info(String.format("Saved item options in %dms.", System.currentTimeMillis() - start));

        log.info(String.format("Completed generating item data in %dms.", System.currentTimeMillis() - totalStart));
    }

    public static void main(String[] args) {
        DatabaseManager.init();
        generateDatFiles();
    }

    public static Map<Integer, ItemInfo> getItems() {
        return items;
    }

    public static void addItemInfo(ItemInfo ii) {
        getItems().put(ii.getItemId(), ii);
    }

    private static Map<Integer, PetInfo> getPets() {
        return pets;
    }

    public static void addPetInfo(PetInfo pi) {
        getPets().put(pi.getItemID(), pi);
    }

    public static void clear() {
        getEquips().clear();
        if (equipOffsets != null) {
            equipOffsets = null;
        }
        getItems().clear();
        if (itemOffsets != null) {
            itemOffsets = null;
        }
        getPets().clear();
        if (petOffsets != null) {
            petOffsets = null;
        }
    }

    public static boolean isStartingItems(int[] items) {
        for (int item : items) {
            if (!isStartingItem(item)) {
                return false;
            }
        }
        return true;
    }

    public static boolean isStartingItem(int item) {
        return startingItems.contains(item);
    }
}
