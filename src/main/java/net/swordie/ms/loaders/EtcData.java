package net.swordie.ms.loaders;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.ScrollStat;
import net.swordie.ms.jwzlib.WzFile;
import net.swordie.ms.jwzlib.WzImage;
import net.swordie.ms.jwzlib.WzObject;
import net.swordie.ms.jwzlib.WzProperty;
import net.swordie.ms.jwzlib.io.WzMappedInputStream;
import net.swordie.ms.loaders.containerclasses.*;
import net.swordie.ms.util.Loader;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Saver;
import net.swordie.ms.util.Util;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.awt.*;
import java.io.*;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Sjonnie
 * Created on 1/4/2019.
 */
public class EtcData {
    private static final Logger log = LogManager.getLogger();
    private static final String ANDROID_FILE = ServerConstants.DAT_DIR + "/androids.dat";
    private static final String COMMODITY_FILE = ServerConstants.DAT_DIR + "/commodity.dat";

    private static final Map<Integer, AndroidInfo> androidInfo = new HashMap<>();
    private static Map<Integer, Integer> androidOffsets;
    private static final Map<Integer, CommodityItem> commodityItems = new HashMap<>();
    private static final Map<Integer, Integer> growthHelp = new HashMap<>();
    private static final Map<Integer, SetItemInfo> setItemInfos = new HashMap<>();
    // MapleUnion
    private static final Map<Integer, Map<Integer, List<Position>>> unionCharacterSizeInfo = new HashMap<>(); // job -> grid piece
    private static final Map<Integer, UnionBoardInfo> unionBoardInfos = new HashMap<>(); // grid Position -> UnionBoardInfo
    private static final Map<Integer, Integer> unionCardInfo = new HashMap<>(); // jobId -> SkillID
    // Commerce
    private static final Map<Integer, VesselInfo> vesselInfo = new HashMap<>(); // VesselId -> VesselInfo
    private static final Map<Integer, VoyageInfo> voyageInfo = new HashMap<>(); // LocalId -> VoyageInfo
    // OX Quiz
    // private static final List<QuestionAnswer> oxQuestionAnswers = new ArrayList<>();



    private static void loadGrowthHelpFromWz() {
        WzFile file = new WzFile(ServerConstants.WZ_DIR + "/Etc.wz");
        WzObject<?, ?> root = file.getChild("GrowHelp.img");
        WzObject<?, ?> defaultFieldChild = root.getChildByPath("field/default");
        for (WzObject<?, ?> node : defaultFieldChild) {
            growthHelp.put(((WzProperty<?>) node.getChild("field", 0)).getIntValue(),
                    ((WzProperty<?>) node.getChild("beginLv", 0)).getIntValue()
            );
        }
    }

    @Saver(varName = "growthHelp")
    private static void saveGrowthHelp(File file) {
        try (DataOutputStream dos = new DataOutputStream(new FileOutputStream(file))) {
            dos.writeInt(growthHelp.size());
            for (Map.Entry<Integer, Integer> entry : growthHelp.entrySet()) {
                dos.writeInt(entry.getKey()); // fieldId
                dos.writeInt(entry.getValue()); // minLevel
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Loader(varName = "growthHelp")
    public static void loadGrowthHelp(File file, boolean exists) {
        if (!exists) {
            loadGrowthHelpFromWz();
            saveGrowthHelp(file);
        } else {
            try (DataInputStream dis = new DataInputStream(new FileInputStream(file))) {
                int growthInfos = dis.readInt();
                for (int j = 0; j < growthInfos; j++) {
                    int fieldId = dis.readInt();
                    int requiredLevel = dis.readInt();
                    growthHelp.put(fieldId, requiredLevel);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public static Map<Integer, Integer> getGrowthHelp() {
        return growthHelp;
    }

    @Saver(varName = "commodityItems")
    private static void saveCommodityItems(File file) {
        try (DataOutputStream dos = new DataOutputStream(new FileOutputStream(file))) {
            dos.writeInt(commodityItems.size());
            for (CommodityItem ci : commodityItems.values()) {
                dos.writeInt(ci.getSn());
                dos.writeInt(ci.getItemId());
                dos.writeInt(ci.getCount());
                dos.writeInt(ci.getPeriod());
                dos.writeInt(ci.getPrice());
                dos.writeInt(ci.getPriority());
                dos.writeInt(ci.getOriginalPrice());
                dos.writeInt(ci.getMileageRate());
                dos.writeBoolean(ci.isCredit());
                dos.writeBoolean(ci.isGift());
                dos.writeBoolean(ci.isPoint());
                dos.writeBoolean(ci.isPrepaid());
                dos.writeBoolean(ci.hasBonus());
                dos.writeBoolean(ci.isOnSale());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Loader(varName = "commodityItems")
    public static void loadCommodityItems(File file, boolean exists) {
        if (!exists) {
            loadCommodityItemsFromWz();
            saveCommodityItems(file);
        } else {
            try (DataInputStream dis = new DataInputStream(new FileInputStream(file))) {
                int size = dis.readInt();
                for (int i = 0; i < size; i++) {
                    CommodityItem ci = new CommodityItem();

                    ci.setSn(dis.readInt());
                    ci.setItemId(dis.readInt());
                    ci.setCount(dis.readInt());
                    ci.setPeriod(dis.readInt());
                    ci.setPrice(dis.readInt());
                    ci.setPriority(dis.readInt());
                    ci.setOriginalPrice(dis.readInt());
                    ci.setMileageRate(dis.readInt());
                    ci.setCredit(dis.readBoolean());
                    ci.setGift(dis.readBoolean());
                    ci.setPoint(dis.readBoolean());
                    ci.setPrepaid(dis.readBoolean());
                    ci.setBonus(dis.readBoolean());
                    ci.setOnSale(dis.readBoolean());

                    commodityItems.put(ci.getSn(), ci);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    private static void loadCommodityItemsFromWz() {
        String wzDir = ServerConstants.WZ_DIR + "/Etc.wz";
        WzFile dir = new WzFile(wzDir);
        dir.parse(new WzMappedInputStream(Paths.get(wzDir)));
        WzObject<?, ?> wzObjects = dir.getChild("Commodity.img");
        for (WzObject<?, ?> commodityId : wzObjects) {
            CommodityItem ci = new CommodityItem();

            ci.setSn(((WzProperty) commodityId.getChild("SN")).getIntValue());
            ci.setItemId(((WzProperty) commodityId.getChild("ItemId")).getIntValue());
            ci.setCount(((WzProperty) commodityId.getChild("Count", 0)).getIntValue());
            ci.setPeriod(((WzProperty) commodityId.getChild("Period", 0)).getIntValue());
            ci.setPrice(((WzProperty) commodityId.getChild("Price", 1)).getIntValue());
            ci.setPriority(((WzProperty) commodityId.getChild("Priority", 0)).getIntValue());
            ci.setOriginalPrice(((WzProperty) commodityId.getChild("originalPrice", 0)).getIntValue());
            ci.setMileageRate(((WzProperty) commodityId.getChild("mileageRate", 0)).getIntValue());
            ci.setCredit(((WzProperty) commodityId.getChild("IsCredit", 0)).getIntValue() != 0);
            ci.setGift(((WzProperty) commodityId.getChild("IsGift", 0)).getIntValue() != 0);
            ci.setPoint(((WzProperty) commodityId.getChild("IsPoint", 0)).getIntValue() != 0);
            ci.setPrepaid(((WzProperty) commodityId.getChild("IsPrepaid", 0)).getIntValue() != 0);
            ci.setBonus(((WzProperty) commodityId.getChild("Bonus", 0)).getIntValue() != 0);
            ci.setOnSale(((WzProperty) commodityId.getChild("OnSale", 0)).getIntValue() != 0);

            commodityItems.put(ci.getSn(), ci);
        }
    }


    public static void loadAndroidsFromWz() {
        String wzDir = ServerConstants.WZ_DIR + "/Etc.wz";
        WzFile dir = new WzFile(wzDir);
        dir.parse(new WzMappedInputStream(Paths.get(wzDir)));
        WzObject<?, ?> wzObject = dir.getChild("Android");
        for (WzObject file : wzObject.getChildren().values()) {
            WzImage img = (WzImage) file;
            AndroidInfo ai = new AndroidInfo(Integer.parseInt(img.getName().replace(".img", "")));
            WzProperty<?> prop = img.getChild("costume");
            WzObject<?, ?> face = prop.getChild("face");
            for (WzObject obj : face) {
                ai.addFace(((WzProperty<Integer>) obj).getValue());
            }
            WzObject<?, ?> hair = prop.getChild("hair");
            for (WzObject obj : hair) {
                ai.addHair(((WzProperty<Integer>) obj).getValue());
            }
            WzObject<?, ?> skin = prop.getChild("skin");
            for (WzObject obj : skin) {
                WzProperty<?> skinProp = (WzProperty<?>) obj;
                if (skinProp.getPropertyType() == WzProperty.Type.STRING) {
                    ai.addSkin(Integer.parseInt(((WzProperty<String>) obj).getValue()));
                } else {
                    ai.addSkin(((WzProperty<Integer>) obj).getValue());
                }
            }
            androidInfo.put(ai.getId(), ai);
        }
    }

    public static void saveAndroidInfo(String dir) {
        int tableSize = androidInfo.size() * 8 + 4; // 4 for id, 4 for offset pos, single 4 for size
        androidOffsets = new HashMap<>();
        try (RandomAccessFile raf = new RandomAccessFile(dir, IOHelper.READ_WRITE_MODE)) {
            raf.seek(tableSize);
            for (AndroidInfo ai : androidInfo.values()) {
                androidOffsets.put(ai.getId(), (int) raf.getFilePointer());
                raf.writeInt(ai.getId());
                raf.writeInt(ai.getHairs().size());
                for (int hair : ai.getHairs()) {
                    raf.writeInt(hair);
                }
                raf.writeInt(ai.getFaces().size());
                for (int face : ai.getFaces()) {
                    raf.writeInt(face);
                }
                raf.writeInt(ai.getSkins().size());
                for (int skin : ai.getSkins()) {
                    raf.writeInt(skin);
                }
            }
            IOHelper.writeOffsetTable(androidOffsets, raf);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static AndroidInfo getAndroidInfoById(int androidId) {
        if (androidInfo.containsKey(androidId)) {
            return androidInfo.get(androidId);
        }
        if (androidOffsets == null) {
            androidOffsets = new HashMap<>();
            IOHelper.loadOffsets(androidOffsets, ANDROID_FILE);
        }
        if (!androidOffsets.containsKey(androidId)) {
            return null;
        }
        AndroidInfo ai = null;
        try (RandomAccessFile raf = new RandomAccessFile(ANDROID_FILE, IOHelper.READ_MODE)) {
            raf.seek(androidOffsets.get(androidId));
            ai = new AndroidInfo(raf.readInt());
            int size = raf.readInt();
            for (int i = 0; i < size; i++) {
                ai.addHair(raf.readInt());
            }
            size = raf.readInt();
            for (int i = 0; i < size; i++) {
                ai.addFace(raf.readInt());
            }
            size = raf.readInt();
            for (int i = 0; i < size; i++) {
                ai.addSkin(raf.readInt());
            }
            androidInfo.put(ai.getId(), ai);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return ai;
    }

    private static void loadSetItemInfoFromWz() {
        var ioFile = new File(ServerConstants.DAT_DIR + "/itemOptions.dat");
        boolean itemOptionsExists = ioFile.exists();
        ItemData.loadItemOptions(ioFile, itemOptionsExists);

        WzFile file = new WzFile(ServerConstants.WZ_DIR + "/Etc.wz");
        WzObject<?, ?> root = file.getChild("SetItemInfo.img");
        for (WzObject<?, ?> idNode : root) {
            var id = Integer.parseInt(idNode.getName());
            var sii = new SetItemInfo(id);
            sii.setJokerPossible(((WzProperty<Integer>) idNode.getChild("jokerPossible", 0)).getIntValue() != 0);
            sii.setZeroWeaponJokerPossible(((WzProperty<Integer>) idNode.getChild("zeroWeaponJokerPossible", 0)).getIntValue() != 0);

            for (WzObject<?, ?> itemIdNode : (WzObject<?, ?>)idNode.getChild("ItemID")) {
                if (itemIdNode.getChildren() == null) {
                    sii.addItemId(((WzProperty) itemIdNode).getIntValue());
                } else {
                    if (itemIdNode.getChild("1") != null) {
                        sii.addItemId(((WzProperty) itemIdNode.getChild("1")).getIntValue());
                    }
                }
            }

            for (WzObject<?, ?> effectLevelNode : (WzObject<?, ?>)idNode.getChild("Effect")) {
                var effectLevel = Integer.parseInt(effectLevelNode.getName());

                for (WzObject<?, ?> effect : effectLevelNode) {
                    var name = effect.getName();

                    switch (name) {
                        case "activeSkill":
                            for (WzObject<?, ?> activeSkills : effect) {
                                var skillId = 0;
                                var slv = 0;
                                if (activeSkills.getChild("id") != null && activeSkills.getChild("level") != null) {
                                    skillId = ((WzProperty) activeSkills.getChild("id")).getIntValue();
                                    slv = ((WzProperty) activeSkills.getChild("level")).getIntValue();
                                    if (skillId > 0 && slv > 0) {
                                        sii.addEffectActiveSkill(effectLevel, skillId, slv);
                                    }
                                }
                            }
                            break;
                        case "setKey":
                        case "incPQEXPr":
                        case "OptionToMob":
                        case "bonusByTime":
                            break;
                        case "Option":
                            for (WzObject<?, ?> optionIdNode : effect) {
                                var optionId = ((WzProperty) optionIdNode.getChild("option")).getIntValue();
                                var level = ((WzProperty) optionIdNode.getChild("level")).getIntValue();

                                var itemOption = ItemData.getItemOptionById(optionId);
                                for (var entry : itemOption.getStatValuesByLevel(level).entrySet()) {
                                    var bs = entry.getKey();
                                    var val = entry.getValue();

                                    sii.addEffectStat(effectLevel, bs, (int) (double) val);
                                }
                            }
                            break;
                        default:
                            var stat = ScrollStat.valueOf(name).getBaseStat();
                            var value = ((WzProperty) effect).getIntValue();

                            sii.addEffectStat(effectLevel, stat, value);
                    }
                }
            }

            setItemInfos.put(id, sii);
        }
    }

    @Saver(varName = "setItemInfos")
    private static void saveSetItemInfos(File file) {
        try (DataOutputStream dos = new DataOutputStream(new FileOutputStream(file))) {
            dos.writeInt(setItemInfos.size());
            for (Map.Entry<Integer, SetItemInfo> entry : setItemInfos.entrySet()) {
                var sii = entry.getValue();
                dos.writeInt(entry.getKey());
                dos.writeBoolean(sii.isJokerPossible());
                dos.writeBoolean(sii.isZeroWeaponJokerPossible());

                dos.writeInt(sii.getItemIds().size());
                for (var itemId : sii.getItemIds()) {
                    dos.writeInt(itemId);
                }

                // effectLevel -> baseStat -> int
                dos.writeInt(sii.getEffectStats().size());
                for (var mainEntry : sii.getEffectStats().entrySet()) {
                    dos.writeInt(mainEntry.getKey());

                    dos.writeInt(mainEntry.getValue().size());
                    for (var innerEntry : mainEntry.getValue().entrySet()) {
                        dos.writeInt(innerEntry.getKey().ordinal());
                        dos.writeInt(innerEntry.getValue());
                    }
                }

                // effectLevel -> baseStat -> [int]
                dos.writeInt(sii.getNonAddEffectStats().size());
                for (var mainEntry : sii.getNonAddEffectStats().entrySet()) {
                    dos.writeInt(mainEntry.getKey());

                    dos.writeInt(mainEntry.getValue().size());
                    for (var innerEntry : mainEntry.getValue().entrySet()) {
                        dos.writeInt(innerEntry.getKey().ordinal());

                        dos.writeInt(innerEntry.getValue().size());
                        for (var val : innerEntry.getValue()) {
                            dos.writeInt(val);
                        }
                    }
                }

                // effectLevel -> activeSkill
                dos.writeInt(sii.getEffectActiveSkills().size());
                for (var effectActiveSkillEntry : sii.getEffectActiveSkills().entrySet()) {
                    dos.writeInt(effectActiveSkillEntry.getKey()); // EffectLevel

                    dos.writeInt(effectActiveSkillEntry.getValue().size());
                    for (var activeSkillMap : effectActiveSkillEntry.getValue().entrySet()) {
                        dos.writeInt(activeSkillMap.getKey()); // SkillID
                        dos.writeInt(activeSkillMap.getValue()); // SLV
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Loader(varName = "setItemInfos")
    public static void loadSetItemInfos(File file, boolean exists) {
        if (!exists) {
            loadSetItemInfoFromWz();
            saveSetItemInfos(file);
        } else {
            try (DataInputStream dis = new DataInputStream(new FileInputStream(file))) {
                int setItemInfoSize = dis.readInt();
                for (int i = 0; i < setItemInfoSize; i++) {
                    int id = dis.readInt();
                    var sii = new SetItemInfo(id);
                    sii.setJokerPossible(dis.readBoolean());
                    sii.setZeroWeaponJokerPossible(dis.readBoolean());

                    int size = dis.readInt();
                    for (int j = 0; j < size; j++) {
                        sii.addItemId(dis.readInt());
                    }

                    size = dis.readInt();
                    for (int j = 0; j < size; j++) {
                        var effectLevel = dis.readInt();

                        var size2 = dis.readInt();
                        for (int k = 0; k < size2; k++) {
                            var baseStat = BaseStat.values()[dis.readInt()];
                            var val = dis.readInt();

                            sii.addEffectStat(effectLevel, baseStat, val);
                        }
                    }

                    size = dis.readInt();
                    for (int j = 0; j < size; j++) {
                        var effectLevel = dis.readInt();

                        var size2 = dis.readInt();
                        for (int k = 0; k < size2; k++) {
                            var baseStat = BaseStat.values()[dis.readInt()];

                            var valSize = dis.readInt();
                            for (int l = 0; l < valSize; l++) {
                                var val = dis.readInt();
                                sii.addEffectStat(effectLevel, baseStat, val);
                            }
                        }
                    }

                    size = dis.readInt();
                    for (int j = 0; j < size; j++) {
                        var effectLevel = dis.readInt();

                        var size2 = dis.readInt();
                        for (var k = 0; k < size2; k++) {
                            var skillId = dis.readInt();
                            var slv = dis.readInt();

                            sii.addEffectActiveSkill(effectLevel, skillId, slv);
                        }
                    }

                    setItemInfos.put(id, sii);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    private static void loadUnionBoardInfoFromWz() {
        String wzDir = ServerConstants.WZ_DIR + "/Etc.wz";
        WzFile dir = new WzFile(wzDir);
        dir.parse(new WzMappedInputStream(Paths.get(wzDir)));
        WzObject<?, ?> wzObjects = dir.getChild("mapleUnion.img");
        wzObjects = wzObjects.getChild("BoardInfo");
        for (WzObject<?, ?> gridSlotNode : wzObjects) {
            var name = gridSlotNode.getName();
            if (!Util.isNumber(name)) {
                continue;
            }
            int gridSlotId = Integer.parseInt(name);
            UnionBoardInfo ubi = new UnionBoardInfo(gridSlotId);
            ubi.setChangeable(((WzProperty) gridSlotNode.getChild("changeable", 0)).getIntValue() != 0);
            ubi.setChangeable(((WzProperty) gridSlotNode.getChild("startingPoint", 0)).getIntValue() != 0);
            ubi.setGroupIndex(((WzProperty) gridSlotNode.getChild("groupIndex", 0)).getIntValue());
            ubi.setOpenLevel(((WzProperty) gridSlotNode.getChild("openLevel", 0)).getIntValue());
            var xPos = ((WzProperty) gridSlotNode.getChild("xPos")).getIntValue();
            var yPos = ((WzProperty) gridSlotNode.getChild("yPos")).getIntValue();
            ubi.setPosition(new Position(xPos, yPos));

            unionBoardInfos.put(gridSlotId, ubi);
        }
    }

    private static void loadUnionCardInfoFromWz() {
        String wzDir = ServerConstants.WZ_DIR + "/Etc.wz";
        WzFile dir = new WzFile(wzDir);
        dir.parse(new WzMappedInputStream(Paths.get(wzDir)));
        WzObject<?, ?> wzObjects = dir.getChild("mapleUnion.img");
        wzObjects = wzObjects.getChild("Card");
        for (WzObject<?, ?> cardNode : wzObjects) {
            var name = cardNode.getName();
            if (!Util.isNumber(name)) {
                continue;
            }
            int cardId = Integer.parseInt(name);
            int skillId = ((WzProperty) cardNode.getChild("skillID", 0)).getIntValue();

            if (skillId > 0 && cardId > 0) {
                unionCardInfo.put(cardId, skillId);
            }
        }
    }

    private static void loadUnionCharacterSizeFromWz() {
        String wzDir = ServerConstants.WZ_DIR + "/Etc.wz";
        WzFile dir = new WzFile(wzDir);
        dir.parse(new WzMappedInputStream(Paths.get(wzDir)));
        WzObject<?, ?> wzObjects = dir.getChild("mapleUnion.img");
        wzObjects = wzObjects.getChild("CharacterSize");
        for (WzObject<?, ?> pieceNode : wzObjects) {
            var name = pieceNode.getName();
            if (!Util.isNumber(name)) {
                continue;
            }
            // -1001    = Enh Lab
            // -1000    = Lab
            // 36       = Mobile
            int branchId = Integer.parseInt(name); // 1 is warrior, ..., ..., ...,  5 is pirate

            Map<Integer, List<Position>> map = new HashMap<>();
            for (WzObject<?, ?> blockNode : pieceNode.getChildren().values()) {
                var name2 = blockNode.getName();
                if (!Util.isNumber(name2)) {
                    continue;
                }
                int pieceLv = Integer.parseInt(name2);
                List<Position> positions = new ArrayList<>();

                for (WzObject<?, ?> info : blockNode) {
                    Position position = new Position(((WzProperty<Point>) info).getValue());
                    positions.add(position);
                }

                map.put(pieceLv, positions);
            }

            unionCharacterSizeInfo.put(branchId, map);
        }
    }

    @Saver(varName = "union")
    public static void saveUnionInfos(File file) {
        try (DataOutputStream dos = new DataOutputStream(new FileOutputStream(file))) {

            // Union Board Info
            dos.writeInt(unionBoardInfos.size());
            for (Map.Entry<Integer, UnionBoardInfo> entry : unionBoardInfos.entrySet()) {
                UnionBoardInfo ubi = entry.getValue();

                dos.writeInt(entry.getKey()); // grid slot Id
                dos.writeBoolean(ubi.isStartingPoint());
                dos.writeBoolean(ubi.isChangeable());
                dos.writeInt(ubi.getGroupIndex());
                dos.writeInt(ubi.getOpenLevel());
                dos.writeInt(ubi.getPosition().getX());
                dos.writeInt(ubi.getPosition().getY());
            }

            // Card Info
            dos.writeInt(unionCardInfo.size());
            for (Map.Entry<Integer, Integer> entry : unionCardInfo.entrySet()) {
                dos.writeInt(entry.getKey()); // card Id
                dos.writeInt(entry.getValue()); // Skill Id
            }

            // CharacterSize Info
            dos.writeInt(unionCharacterSizeInfo.size());
            for (Map.Entry<Integer, Map<Integer, List<Position>>> entry : unionCharacterSizeInfo.entrySet()) {
                int branchId = entry.getKey();
                dos.writeInt(branchId);

                Map<Integer, List<Position>> map = entry.getValue();
                dos.writeInt(map.size());
                for (Map.Entry<Integer, List<Position>> entry2 : map.entrySet()) {
                    int blockId = entry2.getKey();
                    dos.writeInt(blockId);

                    List<Position> positions = entry2.getValue();
                    dos.writeInt(positions.size());
                    for (Position pos : positions) {
                        dos.writeInt(pos.getX());
                        dos.writeInt(pos.getY());
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void loadUnionInfo() {
        loadUnionBoardInfoFromWz();
        loadUnionCardInfoFromWz();
        loadUnionCharacterSizeFromWz();
    }

    @Loader(varName = "union")
    public static void loadUnionInfos(File file, boolean exists) {
        if (!exists) {
            loadUnionInfo();
            saveUnionInfos(file);
        } else {
            try (DataInputStream dis = new DataInputStream(new FileInputStream(file))) {

                // Union Board Info
                int unionboardInfoSize = dis.readInt();
                for (int i = 0; i < unionboardInfoSize; i++) {
                    int gridSlotId = dis.readInt();
                    UnionBoardInfo ubi = new UnionBoardInfo(gridSlotId);
                    ubi.setStartingPoint(dis.readBoolean());
                    ubi.setChangeable(dis.readBoolean());
                    ubi.setGroupIndex(dis.readInt());
                    ubi.setOpenLevel(dis.readInt());
                    int x = dis.readInt();
                    int y = dis.readInt();
                    ubi.setPosition(new Position(x, y));

                    unionBoardInfos.put(gridSlotId, ubi);
                }

                // Card Info
                int unionCardInfoSize = dis.readInt();
                for (int i = 0; i < unionCardInfoSize; i++) {
                    int cardId = dis.readInt();
                    int skillId = dis.readInt();

                    unionCardInfo.put(cardId, skillId);
                }

                // CharacterSize Info
                int unionCharacterSizeInfoSize = dis.readInt();
                for (int i = 0; i < unionCharacterSizeInfoSize; i++) {
                    int branchId = dis.readInt();

                    Map<Integer, List<Position>> map = new HashMap<>();
                    int size = dis.readInt();
                    for (int j = 0; j < size; j++) {
                        int blockId = dis.readInt();

                        List<Position> positions = new ArrayList<>();
                        int size2 = dis.readInt();
                        for (int k = 0; k < size2; k++) {
                            int xPos = dis.readInt();
                            int yPos = dis.readInt();
                            positions.add(new Position(xPos, yPos));
                        }

                        map.put(blockId, positions);
                    }

                    unionCharacterSizeInfo.put(branchId, map);
                }

            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public static UnionBoardInfo getUnionBoardInfoById(int gridPosition) {
        return unionBoardInfos.getOrDefault(gridPosition, null);
    }

    public static Integer getUnionMemberSkillIDByJob(int jobId) {
        return unionCardInfo.getOrDefault(jobId / 10, null);
    }

    public static List<Position> getUnionPositionsByJobAndRank(int job, int rank) {
        return getUnionPositionsByBranchAndRank(JobConstants.getBranchIdByJob(job), rank);
    }

    public static List<Position> getUnionPositionsByBranchAndRank(int branchId, int rank) {
        Map<Integer, List<Position>> map = unionCharacterSizeInfo.getOrDefault(branchId, null);
        if (map != null) {
            return map.getOrDefault(rank, null);
        }
        return null;
    }

    public static void loadCommerceInfoFromWz() {
        String wzDir = ServerConstants.WZ_DIR + "/Etc.wz";
        WzFile dir = new WzFile(wzDir);
        dir.parse(new WzMappedInputStream(Paths.get(wzDir)));
        WzObject<?, ?> wzObjects = dir.getChild("commerce.img");

        // Local
        WzObject<?, ?> localObjects = wzObjects.getChild("local");
        for (WzObject<?, ?> localObject : localObjects) {
            var objName = localObject.getName();
            if (!Util.isNumber(objName)) {
                continue;
            }

            var vi = new VoyageInfo();
            // Voyage Id
            vi.setVoyageId(Integer.parseInt(objName));

            // Voyage Title
            vi.setTitle((String) ((WzProperty) localObject.getChild("title", "")).getValue());

            // Active
            var activeNode = localObject.getChild("active");
            if (activeNode != null) {
                vi.setUnlockCoinCost(((WzProperty) activeNode.getChild("coin", 0)).getIntValue());

                var sailingNode = activeNode.getChild("sailing");
                if (sailingNode != null) {
                    for (WzObject<?, ?> sailingObj : sailingNode) {
                        var voyageId = Integer.parseInt(sailingObj.getName());
                        var amount = ((WzProperty) sailingObj).getIntValue();
                        vi.getSailingReq().put(voyageId, amount);
                    }
                }
            }

            // Energy Cost
            vi.setEnergyCost(((WzProperty) localObject.getChild("energy", 0)).getIntValue());

            // Time Sec (Voyage Duration)
            vi.setTimeSec(((WzProperty) localObject.getChild("time sec", 0)).getIntValue());

            // MobList
            var mobNode = localObject.getChild("mob");
            if (mobNode != null) {
                for (WzObject<?, ?> mobObj : mobNode) {
                    var mobId = ((WzProperty) mobObj).getIntValue();
                    vi.getMobList().add(mobId);
                }
            }

            // TimeAdv
            var timeAdvNode = localObject.getChild("time adv");
            if (timeAdvNode != null) {
                for (WzObject<?, ?> timeAdvObj : timeAdvNode) {
                    var timeSecShortened = Integer.parseInt(timeAdvObj.getName());
                    var amount = ((WzProperty) timeAdvObj).getIntValue();
                    vi.getTimeAdv().put(timeSecShortened, amount);
                }
            }

            // ItemAdv
            var itemAdvNode = localObject.getChild("item adv");
            if (itemAdvNode != null) {
                for (WzObject<?, ?> itemAdvObj : itemAdvNode) {
                    var itemId = Integer.parseInt(itemAdvObj.getName());
                    var timeSecShortened = ((WzProperty) itemAdvObj).getIntValue();
                    vi.getItemAdv().put(itemId, timeSecShortened);
                }
            }

            voyageInfo.put(vi.getVoyageId(), vi);
        }

        // Vessel
        WzObject<?, ?> vesselObjects = wzObjects.getChild("vessel");
        for (WzObject<?, ?> vesselObject : vesselObjects) {
            var objName = vesselObject.getName();
            if (!Util.isNumber(objName)) {
                continue;
            }

            var vi = new VesselInfo();
            // Vessel Id | Type
            vi.setVesselId(Integer.parseInt(objName));

            // Upgrade Cost
            if (vesselObject.getChild("coin") != null) { // coin node doesn't exist in CargoSkiff (0)
                vi.setCost(((WzProperty) vesselObject.getChild("coin")).getIntValue());
            }

            // Energy
            vi.setEnergy(((WzProperty) vesselObject.getChild("energy")).getIntValue());

            // ExpTable & CargoTable
            var levelNode = vesselObject.getChild("level");
            if (levelNode != null) {
                for (WzObject<?, ?> levelObject : levelNode) {
                    var levelObjName = levelObject.getName();
                    if (!Util.isNumber(levelObjName)) {
                        continue;
                    }

                    var level = Integer.parseInt(levelObjName);

                    var maxCargo = ((WzProperty) levelObject.getChild("cargo", 0)).getIntValue();
                    var expReq = ((WzProperty) levelObject.getChild("sailing exp", -1)).getIntValue();

                    vi.getExpTable().put(level, expReq);
                    vi.getCargoTable().put(level, maxCargo);
                }
            }

            // PAD
            vi.setPad(((WzProperty) vesselObject.getChild("pad")).getIntValue());

            // SkillMap
            var skillNode = vesselObject.getChild("skill");
            if (skillNode != null) {
                for (WzObject<?, ?> skillObject : skillNode) {
                    var skillObjName = skillObject.getName();
                    if (!Util.isNumber(skillObjName)) {
                        continue;
                    }

                    var skillId = Integer.parseInt(skillObjName);
                    var isEnabled = ((String) ((WzProperty) skillObject).getValue()).equalsIgnoreCase("able");

                    vi.getSkillMap().put(skillId, isEnabled);
                }
            }

            vesselInfo.put(vi.getVesselId(), vi);
        }
    }

    @Loader(varName = "commerce")
    public static void loadCommerceInfo(File file, boolean exists) {
        if (!exists) {
            loadCommerceInfoFromWz();
            saveCommerceInfo(file);
        } else {
            try (DataInputStream dis = new DataInputStream(new FileInputStream(file))) {
                // Local
                var size = dis.readInt();
                for (int i = 0; i < size; i++) {
                    var voyageId = dis.readInt();
                    var vi = VoyageInfo.read(dis);
                    voyageInfo.put(voyageId, vi);
                }

                // Vessel
                size = dis.readInt();
                for (int i = 0; i < size; i++) {
                    var vesselId = dis.readInt();
                    var vi = VesselInfo.read(dis);
                    vesselInfo.put(vesselId, vi);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    @Saver(varName = "commerce")
    public static void saveCommerceInfo(File file) {
        try (DataOutputStream dos = new DataOutputStream(new FileOutputStream(file))) {
            // Local
            dos.writeInt(voyageInfo.size());
            for (var entry : voyageInfo.entrySet()) {
                dos.writeInt(entry.getKey());
                entry.getValue().write(dos);
            }

            // Vessel
            dos.writeInt(vesselInfo.size());
            for (var entry : vesselInfo.entrySet()) {
                dos.writeInt(entry.getKey());
                entry.getValue().write(dos);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static VesselInfo getVesselInfoById(int vesselId) {
        return vesselInfo.getOrDefault(vesselId, null);
    }

    public static int getVesselExpRequirement(int level, int vesselId) {
        var vi = getVesselInfoById(vesselId);
        if (vi == null) {
            return -1;
        }
        return vi.getExpTable().getOrDefault(level, -1);
    }

    public static VoyageInfo getVoyageInfoById(int voyageId) {
        return voyageInfo.getOrDefault(voyageId, null);
    }
/*

    public static void loadOxQuestionsFromWz() {
        String wzDir = ServerConstants.WZ_DIR + "/Etc.wz";
        WzFile dir = new WzFile(wzDir, ServerConstants.VERSION);
        dir.parse(new WzMappedInputStream(Paths.get(wzDir)));
        WzObject<?, ?> wzObjects = dir.getChild("OXQuiz.img");

        for (WzObject<?, ?> collectionNode : wzObjects) {
            for (WzObject<?, ?> qaNode : collectionNode) {

                var q = (String) ((WzProperty) qaNode.getChild("q")).getValue();
                var a = ((WzProperty) qaNode.getChild("a")).getIntValue() != 0;
                var d = (String) ((WzProperty) qaNode.getChild("d")).getValue();

                oxQuestionAnswers.add(new QuestionAnswer(q, a, d));
            }
        }
    }

    @Loader(varName = "oxquestions")
    public static void loadOxQuestions(File file, boolean exists) {
        if (!exists) {
            loadOxQuestionsFromWz();
            saveOxQuestions(file);
        } else {
            try (DataInputStream dis = new DataInputStream(new FileInputStream(file))) {
                var size = dis.readInt();
                for (var i = 0; i < size; i++) {
                    var q = dis.readUTF();
                    var a = dis.readBoolean();
                    var d = dis.readUTF();

                    oxQuestionAnswers.add(new QuestionAnswer(q, a, d));
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public static void saveOxQuestions(File file) {
        try (DataOutputStream dos = new DataOutputStream(new FileOutputStream(file))) {
            dos.writeInt(oxQuestionAnswers.size());
            for (var item : oxQuestionAnswers) {
                dos.writeUTF(item.getQuestion());
                dos.writeBoolean(item.isTrue());
                dos.writeUTF(item.getDescription());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static List<QuestionAnswer> getOxQuestions() {
        return oxQuestionAnswers;
    }
*/


    public static void generateDatFiles() {
        log.info("Started generating etc data.");
        Util.makeDirIfAbsent(ServerConstants.DAT_DIR + "/etc");
        long start = System.currentTimeMillis();
        loadAndroidsFromWz();
        saveAndroidInfo(ANDROID_FILE);
        log.info(String.format("Completed generating etc data in %dms.", System.currentTimeMillis() - start));
    }

    public static void clear() {
        androidInfo.clear();
        if (androidOffsets != null) {
            androidOffsets = null;
        }
    }

    public static void main(String[] args) {
        generateDatFiles();
    }

    public static CommodityItem getCommodityItem(int itemSn) {
        return commodityItems.get(itemSn);
    }

    public static SetItemInfo getSetItemInfoById(Integer id) {
        return setItemInfos.get(id);
    }
}
