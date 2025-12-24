package net.swordie.ms.loaders;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.client.character.skills.vmatrix.MatrixRecord;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.jwzlib.WzFile;
import net.swordie.ms.jwzlib.WzObject;
import net.swordie.ms.jwzlib.WzProperty;
import net.swordie.ms.loaders.containerclasses.VCoreInfo;
import net.swordie.ms.loaders.containerclasses.VNodeInfo;
import net.swordie.ms.util.Util;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.*;
import java.util.*;

/**
 * @author Sjonnie
 * Created on 10/1/2018.
 */
public class VCoreData {
    private static final Logger log = LogManager.getLogger();

    // job -> [(skillID, iconID)]
    private static Map<Integer, List<VCoreInfo>> jobSkills = new HashMap<>();
    private static Map<String, Set<Integer>> nameToJob = new HashMap<>();
    // type (1-skill, 2-enforcement, 3-special) -> level -> VNodeInfo
    private static Map<Integer, Map<Integer, VNodeInfo>> nodeInfos = new HashMap<>();
    private static Map<Integer, Map<Integer, Long>> slotExpansionCost = new HashMap<>();

    static {
        nameToJob.put("warrior", new HashSet<>());
        nameToJob.put("magician", new HashSet<>());
        nameToJob.put("archer", new HashSet<>());
        nameToJob.put("rogue", new HashSet<>());
        nameToJob.put("pirate", new HashSet<>());
        nameToJob.put("none", new HashSet<>());
        nameToJob.put("all", new HashSet<>());
        nameToJob.get("warrior").addAll(Arrays.asList(
                JobConstants.JobEnum.HERO.getJobId(),
                JobConstants.JobEnum.PALADIN.getJobId(),
                JobConstants.JobEnum.DARK_KNIGHT.getJobId(),
                JobConstants.JobEnum.DAWN_WARRIOR_4.getJobId(),
                JobConstants.JobEnum.ARAN_4.getJobId(),
                JobConstants.JobEnum.DEMON_AVENGER_4.getJobId(),
                JobConstants.JobEnum.DEMON_SLAYER_4.getJobId(),
                JobConstants.JobEnum.BLASTER_4.getJobId(),
                JobConstants.JobEnum.HAYATO_4.getJobId(),
                JobConstants.JobEnum.MIHILE_4.getJobId(),
                JobConstants.JobEnum.KAISER_4.getJobId(),
                JobConstants.JobEnum.ZERO_4.getJobId(),
                JobConstants.JobEnum.ADELE_4.getJobId()
        ));
        nameToJob.get("magician").addAll(Arrays.asList(
                JobConstants.JobEnum.FP_ARCHMAGE.getJobId(),
                JobConstants.JobEnum.IL_ARCHMAGE.getJobId(),
                JobConstants.JobEnum.BISHOP.getJobId(),
                JobConstants.JobEnum.BLAZE_WIZARD_4.getJobId(),
                JobConstants.JobEnum.EVAN_4.getJobId(),
                JobConstants.JobEnum.LUMINOUS_4.getJobId(),
                JobConstants.JobEnum.BATTLE_MAGE_4.getJobId(),
                JobConstants.JobEnum.KANNA_4.getJobId(),
                JobConstants.JobEnum.BEAST_TAMER_4.getJobId(),
                JobConstants.JobEnum.KINESIS_4.getJobId(),
                JobConstants.JobEnum.ILLIUM_4.getJobId(),
                JobConstants.JobEnum.LARA_4.getJobId()
        ));
        nameToJob.get("archer").addAll(Arrays.asList(
                JobConstants.JobEnum.BOWMASTER.getJobId(),
                JobConstants.JobEnum.MARKSMAN.getJobId(),
                JobConstants.JobEnum.PATHFINDER_4.getJobId(),
                JobConstants.JobEnum.WIND_ARCHER_4.getJobId(),
                JobConstants.JobEnum.MERCEDES_4.getJobId(),
                JobConstants.JobEnum.WILD_HUNTER_4.getJobId(),
                JobConstants.JobEnum.KAIN_4.getJobId()
        ));
        nameToJob.get("rogue").addAll(Arrays.asList(
                JobConstants.JobEnum.NIGHT_LORD.getJobId(),
                JobConstants.JobEnum.SHADOWER.getJobId(),
                JobConstants.JobEnum.BLADE_MASTER.getJobId(),
                JobConstants.JobEnum.NIGHT_WALKER_4.getJobId(),
                JobConstants.JobEnum.PHANTOM_4.getJobId(),
                JobConstants.JobEnum.XENON_4.getJobId(),
                JobConstants.JobEnum.CADENA_4.getJobId(),
                JobConstants.JobEnum.HO_YOUNG_4.getJobId()
        ));
        nameToJob.get("pirate").addAll(Arrays.asList(
                JobConstants.JobEnum.BUCCANEER.getJobId(),
                JobConstants.JobEnum.CORSAIR.getJobId(),
                JobConstants.JobEnum.CANNON_MASTER.getJobId(),
                JobConstants.JobEnum.JETT_4.getJobId(),
                JobConstants.JobEnum.THUNDER_BREAKER_4.getJobId(),
                JobConstants.JobEnum.SHADE_4.getJobId(),
                JobConstants.JobEnum.MECHANIC_4.getJobId(),
                JobConstants.JobEnum.XENON_4.getJobId(),
                JobConstants.JobEnum.ANGELIC_BUSTER_4.getJobId(),
                JobConstants.JobEnum.ARK_4.getJobId()
        ));
        nameToJob.get("all").addAll(nameToJob.get("warrior"));
        nameToJob.get("all").addAll(nameToJob.get("magician"));
        nameToJob.get("all").addAll(nameToJob.get("archer"));
        nameToJob.get("all").addAll(nameToJob.get("rogue"));
        nameToJob.get("all").addAll(nameToJob.get("pirate"));
    }

    public static void loadVCoreDataFromWz() {
        WzFile file = new WzFile(ServerConstants.WZ_DIR + "/Etc.wz");
        WzObject<?, ?> topNode = file.getChild("VCore.img");
        WzObject<?, ?> coreData = topNode.getChild("CoreData");
        for (WzObject<?, ?> iconIdNode : coreData) {
            VCoreInfo vci = new VCoreInfo();
            vci.setIconID(Integer.parseInt(iconIdNode.getName()));
            WzObject<?, ?> connectSkillNode = iconIdNode.getChild("connectSkill");
            if (connectSkillNode == null) {
                WzObject<?, ?> spCoreOption = iconIdNode.getChild("spCoreOption");
                if (spCoreOption == null) {
                    // id 40000000 doesn't have this
                    continue;
                }
                WzObject<?, ?> cond = spCoreOption.getChild("cond");
                if (cond != null) {
                    vci.setCooltime(((WzProperty) cond.getChild("cooltime", 0)).getIntValue());
                    vci.setCount(((WzProperty) cond.getChild("count", 0)).getIntValue());
                    vci.setType(cond.getChild("type", 0).toString());
                    vci.setValidTime(((WzProperty) cond.getChild("validTime", 0)).getIntValue());
                    if (cond.getChild("prob") != null) {
                        double val = (double) (((WzProperty) cond.getChild("prob", 0)).getValue());
                        vci.setProp(val);
                    }
                }

                WzObject<?, ?> effect = spCoreOption.getChild("effect");
                if (effect != null) {
                    vci.setSkillID(((WzProperty) effect.getChild("skill_id", 0)).getIntValue());
                    vci.setSlv(((WzProperty) effect.getChild("skill_level", 0)).getIntValue());
                    vci.setEffectType(effect.getChild("type", 0).toString());
                    vci.setHealR(((WzProperty) effect.getChild("heal_percent", 0)).getIntValue());
                    vci.setReduceR(((WzProperty) effect.getChild("reducePercent", 0)).getIntValue());
                }
            } else {
                vci.setSkillID(((WzProperty) connectSkillNode.getChild("0")).getIntValue());
            }

            vci.setMaxLevel(((WzProperty) iconIdNode.getChild("maxLevel", 0)).getIntValue());
            for (Object jobNodeObj : iconIdNode.getChild("job")) {
                WzObject<?, ?> jobNode = (WzObject<?, ?>) jobNodeObj;
                String val = jobNode.toString();
                if (Util.isNumber(val)) {
                    addInfo(Integer.parseInt(val), vci);
                } else {
                    Set<Integer> jobs = nameToJob.get(val);
                    for (int job : jobs) {
                        addInfo(job, vci);
                    }
                }
            }
        }
        WzObject<?, ?> enforcementNode = topNode.getChild("Enforcement");
        if (enforcementNode != null) {
            for (WzObject<?, ?> typeNode : enforcementNode) {
                String typeName = typeNode.getName();
                int type = -1;
                switch (typeName) {
                    case "Enforce":
                        type = 2;
                        break;
                    case "Skill":
                        type = 1;
                        break;
                    case "Special":
                        type = 3;
                        break;
                    case "expCore":
                        type = 4;
                        break;
                }
                for (WzObject<?, ?> levelNode : typeNode) {
                    VNodeInfo vni = new VNodeInfo();
                    int level = Integer.parseInt(levelNode.getName());
                    vni.setExpEnforce(((WzProperty) levelNode.getChild("expEnforce", 0)).getIntValue());
                    vni.setExtract(((WzProperty) levelNode.getChild("extract", 0)).getIntValue());
                    vni.setNextExp(((WzProperty) levelNode.getChild("nextExp", 0)).getIntValue());
                    addNodeInfo(type, level, vni);
                }
            }
        }
        WzObject<?, ?> vMatrixOptionNode = file.getChild("VMatrixOption.img");
        WzObject<?, ?> slotExpansionMesoNode = vMatrixOptionNode.getChild("slotExpansionMeso");
        for (WzObject<?, ?> perLevel : slotExpansionMesoNode) {
            int curLv = Integer.parseInt(perLevel.getName());
            Map<Integer, Long> cost = new HashMap<>();
            if (perLevel.getChild("0") != null) {
                cost.put(0, ((WzProperty) perLevel.getChild("0", 0)).getLongValue());
            }
            if (perLevel.getChild("1") != null) {
                cost.put(1, ((WzProperty) perLevel.getChild("1", 0)).getLongValue());
            }
            slotExpansionCost.put(curLv, cost);
        }
    }

    public static void saveVCoreData(String dir) {
        File file = new File(String.format("%s/vcore_data.dat", dir));
        try (DataOutputStream dos = new DataOutputStream(new FileOutputStream(file))) {
            dos.writeShort(jobSkills.size());
            for (Map.Entry<Integer, List<VCoreInfo>> entry : jobSkills.entrySet()) {
                dos.writeInt(entry.getKey());
                dos.writeShort(entry.getValue().size());
                for (VCoreInfo vci : entry.getValue()) {
                    dos.writeInt(vci.getSkillID());
                    dos.writeInt(vci.getIconID());
                    dos.writeInt(vci.getMaxLevel());
                    dos.writeInt(vci.getCooltime());
                    dos.writeInt(vci.getCount());
                    dos.writeInt(vci.getValidTime());
                    dos.writeInt(vci.getSlv());
                    dos.writeDouble(vci.getProp());
                    dos.writeInt(vci.getHealR());
                    dos.writeInt(vci.getReduceR());
                    dos.writeUTF(vci.getType());
                    dos.writeUTF(vci.getEffectType());
                }
            }
            dos.writeShort(nodeInfos.size());
            for (Map.Entry<Integer, Map<Integer, VNodeInfo>> entry1 : nodeInfos.entrySet()) {
                dos.writeInt(entry1.getKey());
                dos.writeShort(entry1.getValue().size());
                for (Map.Entry<Integer, VNodeInfo> entry2 : entry1.getValue().entrySet()) {
                    dos.writeInt(entry2.getKey());
                    VNodeInfo vni = entry2.getValue();
                    dos.writeInt(vni.getExpEnforce());
                    dos.writeInt(vni.getExtract());
                    dos.writeInt(vni.getNextExp());
                }
            }
            dos.writeShort(slotExpansionCost.size());
            for (Map.Entry<Integer, Map<Integer, Long>> entry1 : slotExpansionCost.entrySet()) {
                dos.writeInt(entry1.getKey());
                dos.writeShort(entry1.getValue().size());
                for (Map.Entry<Integer, Long> entry2 : entry1.getValue().entrySet()) {
                    dos.writeInt(entry2.getKey());
                    dos.writeLong(entry2.getValue());
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void loadVCoreData() {
        String dir = ServerConstants.DAT_DIR;
        File file = new File(String.format("%s/vcore_data.dat", dir));
        try (DataInputStream dis = new DataInputStream(new FileInputStream(file))) {
            short size = dis.readShort();
            for (int i = 0; i < size; i++) {
                int job = dis.readInt();
                int size2 = dis.readShort();
                List<VCoreInfo> vcis = new ArrayList<>();
                for (int j = 0; j < size2; j++) {
                    VCoreInfo vci = new VCoreInfo();
                    vci.setSkillID(dis.readInt());
                    vci.setIconID(dis.readInt());
                    vci.setMaxLevel(dis.readInt());
                    vci.setCooltime(dis.readInt());
                    vci.setCount(dis.readInt());
                    vci.setValidTime(dis.readInt());
                    vci.setSlv(dis.readInt());
                    vci.setProp(dis.readDouble());
                    vci.setHealR(dis.readInt());
                    vci.setReduceR(dis.readInt());
                    vci.setType(dis.readUTF());
                    vci.setEffectType(dis.readUTF());
                    vcis.add(vci);
                }
                jobSkills.put(job, vcis);
            }
            size = dis.readShort();
            for (int i = 0; i < size; i++) {
                int type = dis.readInt();
                int size2 = dis.readShort();
                for (int j = 0; j < size2; j++) {
                    int level = dis.readInt();
                    VNodeInfo vni = new VNodeInfo();
                    vni.setExpEnforce(dis.readInt());
                    vni.setExtract(dis.readInt());
                    vni.setNextExp(dis.readInt());
                    addNodeInfo(type, level, vni);
                }
            }
            size = dis.readShort();
            for (int i = 0; i < size; i++) {
                int curLv = dis.readInt();
                int size2 = dis.readShort();
                for (int j = 0; j < size2; j++) {
                    int slot = dis.readInt();
                    long mesoCost = dis.readLong();
                    addExpansionCost(curLv, slot, mesoCost);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void addInfo(int job, VCoreInfo vci) {
        if (!jobSkills.containsKey(job)) {
            jobSkills.put(job, new ArrayList<>());
        }
        jobSkills.get(job).add(vci);
    }

    private static void addNodeInfo(int type, int level, VNodeInfo info) {
        if (!nodeInfos.containsKey(type)) {
            nodeInfos.put(type, new HashMap<>());
        }
        nodeInfos.get(type).put(level, info);
    }

    private static void addExpansionCost(int level, int slot, long mesoCost) {
        if (!slotExpansionCost.containsKey(level)) {
            slotExpansionCost.put(level, new HashMap<>());
        }
        slotExpansionCost.get(level).put(slot, mesoCost);
    }

    public static List<VCoreInfo> getPossibilitiesByJob(int job) {
        return jobSkills.getOrDefault(job, null);
    }

    public static Map<Integer, List<VCoreInfo>> getJobSkills() {
        return jobSkills;
    }

    public static VNodeInfo getNodeInfo(MatrixRecord mr) {
        return getNodeInfo(mr.getIconID(), mr.getSlv());
    }

    public static VNodeInfo getNodeInfo(int iconID, int level) {
        return nodeInfos.get(iconID / 10000000).get(level);
    }

    public static long getMesoCost(int curLv, int nodeSlot) {
        return slotExpansionCost.get(curLv).get(nodeSlot);
    }

    public static void generateDatFiles() {
        long start = System.currentTimeMillis();
        log.info("Started generating VCore data.");
        loadVCoreDataFromWz();
        saveVCoreData(ServerConstants.DAT_DIR);
        log.info("Completed generating VCore data in " + (System.currentTimeMillis() - start) + "ms.");
    }

    public static void main(String[] args) {
        generateDatFiles();
    }
}
