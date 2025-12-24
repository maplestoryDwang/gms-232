package net.swordie.ms.loaders;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.constants.SkillChangeConstants;
import net.swordie.ms.jwzlib.WzFile;
import net.swordie.ms.jwzlib.WzObject;
import net.swordie.ms.jwzlib.WzProperty;
import net.swordie.ms.loaders.containerclasses.familiarcodex.BadgeInfo;
import net.swordie.ms.loaders.containerclasses.familiarcodex.FamiliarInfo;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Tuple;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.*;
import java.util.HashMap;
import java.util.Map;

/**
 * Created on 4/24/2020.
 *
 * @author Asura
 */
public class FamiliarData {
    private static final Logger log = LogManager.getLogger();

    private static final Map<Integer, FamiliarInfo> familiarInfos = new HashMap<>();
    private static final Map<Integer, BadgeInfo> badgeInfos = new HashMap<>();
    private static final Map<Integer, Integer> levelExpReqInfo = new HashMap<>();
    private static final Map<Integer, Map<Integer, Tuple<Integer, Integer>>> growInfo = new HashMap<>();

    public static int getGradeValByGradeStr(String grade) {
        switch (grade) {
            case "Common":
                return 0;
            case "Rare":
                return 1;
            case "Epic":
                return 2;
            case "Unique":
                return 3;
            case "Legendary":
                return 4;
        }
        return -1;
    }

    public static int getExpReqByLevel(int lv) {
        if (SkillChangeConstants.USE_CUSTOM_EXP_REQ) {
            int val = SkillChangeConstants.expValues.getOrDefault(lv, -1);
            if (val != -1) {
                return val;
            }
        }
        return levelExpReqInfo.getOrDefault(lv, 0);
    }

    public static Tuple<Integer, Integer> getMinMaxByGradeAndLevel(int grade, int level) {
        return growInfo.getOrDefault(grade, new HashMap<>()).getOrDefault(level, new Tuple<>(0, 0));
    }

    private static void loadFamiliarDataFromWz() {
        WzFile file = new WzFile(ServerConstants.WZ_DIR + "/Etc.wz");
        WzObject<?, ?> root = file.getChild("FamiliarData.img");

        // GrowInfo
        WzObject<?, ?> growNode = root.getChild("Grow");
        if (growNode != null) {
            WzObject<?, ?> padNode = growNode.getChild("PAD");
            if (padNode != null) {
                for (WzObject<?, ?> gradeNode : padNode) {
                    int grade = getGradeValByGradeStr(gradeNode.getName());
                    Map<Integer, Tuple<Integer, Integer>> gradeMap = new HashMap<>();
                    for (WzObject<?, ?> lvNode : gradeNode) {
                        int lv = Integer.parseInt(lvNode.getName());
                        int min = ((WzProperty) lvNode.getChild("min", 0)).getIntValue();
                        int max = ((WzProperty) lvNode.getChild("max", 0)).getIntValue();
                        Tuple<Integer, Integer> t = new Tuple<>(min, max);
                        gradeMap.put(lv, t);
                    }
                    growInfo.put(grade, gradeMap);
                }
            }
        }

        // Level ExpReq Info
        WzObject<?, ?> levelNode = root.getChild("Level");
        if (levelNode != null) {
            WzObject<?, ?> reqExpPerLevelNode = levelNode.getChild("reqExpPerLevel");
            for (WzObject<?, ?> nodeLvNode : reqExpPerLevelNode) {
                int lv = Integer.parseInt(nodeLvNode.getName());
                int exp = ((WzProperty) nodeLvNode).getIntValue();
                levelExpReqInfo.put(lv, exp);
            }
        }
    }

    private static void saveFamiliarData() {
        String dir = ServerConstants.DAT_DIR;
        File file = new File(String.format("%s/familiarData.dat", dir));
        try (DataOutputStream dos = new DataOutputStream(new FileOutputStream(file))) {
            dos.writeInt(levelExpReqInfo.size());
            for (Map.Entry<Integer, Integer> entry : levelExpReqInfo.entrySet()) {
                dos.writeInt(entry.getKey());
                dos.writeInt(entry.getValue());
            }

            dos.writeInt(growInfo.size());
            for (Map.Entry<Integer, Map<Integer, Tuple<Integer, Integer>>> entry : growInfo.entrySet()) {
                dos.writeInt(entry.getKey()); // grade
                dos.writeInt(entry.getValue().size());
                for (Map.Entry<Integer, Tuple<Integer, Integer>> entry1 : entry.getValue().entrySet()) {
                    dos.writeInt(entry1.getKey()); // level
                    dos.writeInt(entry1.getValue().getLeft()); // min
                    dos.writeInt(entry1.getValue().getRight()); // max
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void loadFamiliarData() {
        String dir = ServerConstants.DAT_DIR;
        File file = new File(String.format("%s/familiarData.dat", dir));
        try (DataInputStream dis = new DataInputStream(new FileInputStream(file))) {
            int size = dis.readInt();
            for (int i = 0; i < size; i++) {
                int lv = dis.readInt();
                int expReq = dis.readInt();
                levelExpReqInfo.put(lv, expReq);
            }

            size = dis.readInt();
            for (int i = 0; i < size; i ++) {
                int grade = dis.readInt();

                int size2 = dis.readInt();
                Map<Integer, Tuple<Integer, Integer>> gradeMap = new HashMap<>();
                for (int j = 0; j < size2; j++) {
                    int level = dis.readInt();
                    int min = dis.readInt();
                    int max = dis.readInt();
                    Tuple<Integer, Integer> t = new Tuple<>(min, max);
                    gradeMap.put(level, t);
                }

                growInfo.put(grade, gradeMap);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void loadBadgeInfosFromWz() {
        WzFile file = new WzFile(ServerConstants.WZ_DIR + "/Etc.wz");
        WzObject<?, ?> root = file.getChild("FamiliarSet.img");
        for (WzObject<?, ?> node : root) {
            BadgeInfo bi = new BadgeInfo();
            int badgeId = Integer.parseInt(node.getName());
            bi.setBadgeId(badgeId);
            bi.setName(node.getChild("setName").toString());

            // Familiars Required for Badge
            WzObject<?, ?> famNode = node.getChild("familiarList");
            if (famNode != null) {
                for (WzObject<?, ?> famIdNode : famNode) {
                    var familiarId = ((WzProperty) famIdNode).getIntValue();
                    bi.addFamiliar(familiarId);

                    addBadgeToFamiliarInfo(badgeId, familiarId);
                }
            }

            // Potential Effect List
            WzObject<?, ?> statsNode = node.getChild("stats");
            if (statsNode != null) {
                WzObject<?, ?> potentialNode = statsNode.getChild("potential");
                if (potentialNode != null) {
                    for (WzObject<?, ?> optionId : potentialNode) {
                        if (Util.isNumber(optionId.getName())) {
                            bi.addOption(((WzProperty) optionId).getIntValue());
                        }
                    }
                }
            }

            badgeInfos.put(badgeId, bi);
        }
    }

    private static void addBadgeToFamiliarInfo(int badgeId, int familiarId) {
        var familiarInfo = getFamiliarInfoById(familiarId);
        if (familiarInfo != null) {
            getFamiliarInfoById(familiarId).addBadgeSetId(badgeId);
        } else {
            var newFamiliarInfo = new FamiliarInfo();
            newFamiliarInfo.setFamiliarId(familiarId);
            newFamiliarInfo.addBadgeSetId(badgeId);
            familiarInfos.put(newFamiliarInfo.getFamiliarId(), newFamiliarInfo);
        }
    }

    private static void saveBadgeInfos() {
        String dir = ServerConstants.DAT_DIR;
        File file = new File(String.format("%s/badgeinfos.dat", dir));
        try (DataOutputStream dos = new DataOutputStream(new FileOutputStream(file))) {
            dos.writeInt(badgeInfos.size());
            for (Map.Entry<Integer, BadgeInfo> entry : badgeInfos.entrySet()) {
                entry.getValue().write(dos);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void loadBadgeInfos() {
        String dir = ServerConstants.DAT_DIR;
        File file = new File(String.format("%s/badgeinfos.dat", dir));
        try (DataInputStream dis = new DataInputStream(new FileInputStream(file))) {
            int size = dis.readInt();
            for (int i = 0; i < size; i++) {
                BadgeInfo bi = BadgeInfo.read(dis);
                badgeInfos.put(bi.getBadgeId(), bi);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void createFamiliarInfoFromBadgeInfo() {
        for (var bi : badgeInfos.values()) {
            for (var fam : bi.getFamList()) {
                addBadgeToFamiliarInfo(bi.getBadgeId(), fam);
            }
        }
    }

    public static FamiliarInfo getFamiliarInfoById(int familiarId) {
        return familiarInfos.getOrDefault(familiarId, null);
    }

    public static BadgeInfo getBadgeInfoById(int badgeId) {
        return badgeInfos.getOrDefault(badgeId, null);
    }

    public static void generateDatFiles() {
        log.info("Started generating Familiar data.");
        long start = System.currentTimeMillis();
        loadBadgeInfosFromWz();
        loadFamiliarDataFromWz();

        saveBadgeInfos();
        saveFamiliarData();

        log.info("Completed generating Familiar data in " + (System.currentTimeMillis() - start) + "ms.");
    }

    public static void loadFamiliarDataInfo() {
        loadBadgeInfos();
        createFamiliarInfoFromBadgeInfo();
        loadFamiliarData();
    }

    public static void main(String[] args) {
        generateDatFiles();
        System.out.println();
    }
}


