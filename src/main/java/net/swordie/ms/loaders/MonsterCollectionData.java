package net.swordie.ms.loaders;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.jwzlib.WzFile;
import net.swordie.ms.jwzlib.WzObject;
import net.swordie.ms.jwzlib.WzProperty;
import net.swordie.ms.loaders.containerclasses.MonsterCollectionMobInfo;
import net.swordie.ms.loaders.containerclasses.mobcollection.MobCollectionClearQuest;
import net.swordie.ms.loaders.containerclasses.mobcollection.MobCollectionGroup;
import net.swordie.ms.loaders.containerclasses.mobcollection.MobCollectionRegion;
import net.swordie.ms.loaders.containerclasses.mobcollection.MobCollectionSession;
import net.swordie.ms.util.Loader;
import net.swordie.ms.util.Saver;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Tuple;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.File;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.HashMap;
import java.util.Map;

/**
 * @author Sjonnie
 * Created on 7/23/2018.
 */
public class MonsterCollectionData {
    private static final Logger log = LogManager.getLogger();

    private static final int GROUP_MOB_SIZE = 5;

    private static Map<Integer, MobCollectionRegion> mobCollectionRegions = new HashMap<>();
    private static Map<Integer, MonsterCollectionMobInfo> monsterInfo = new HashMap<>();
    // reward from group -> hours for exploration
    private static Map<Integer, Integer> rewardToMinutes = new HashMap<>();
    // reward from group -> (reward id, chance)
    private static Map<Integer, Tuple<Integer, Integer>> explorationRewards = new HashMap<>();

    static {
        rewardToMinutes.put(2434929, 30);
        rewardToMinutes.put(2434930, 60 * 3);
        rewardToMinutes.put(2434931, 60 * 12);
        rewardToMinutes.put(2434932, 60 * 24);
        rewardToMinutes.put(2434958, 60 * 3);
        rewardToMinutes.put(2434959, 60 * 3);
    }

    private static void loadMobCollectionFromWz() {
        var wzFile = new WzFile(ServerConstants.WZ_DIR + "/Etc.wz");
        var mobCollectionImg = wzFile.getChild("mobCollection.img");

        for (WzObject<?, ?> regionNode : mobCollectionImg) {
            if (!Util.isNumber(regionNode.getName())) {
                continue;
            }

            var region = new MobCollectionRegion();
            region.setRegionId(Integer.parseInt(regionNode.getName()));

            var infoNode = regionNode.getChild("info");
            region.setRecordId(((WzProperty) infoNode.getChild("recordID")).getIntValue());
            region.setRewardId(((WzProperty) infoNode.getChild("rewardID")).getIntValue());
            region.setRewardCount(((WzProperty) infoNode.getChild("count", 1)).getIntValue());

            var clearQuestMainNode = infoNode.getChild("clearQuest");
            if (clearQuestMainNode != null) {
                for (WzObject<?, ?> clearQuestNode : clearQuestMainNode) {
                    if (!Util.isNumber(clearQuestNode.getName())) {
                        continue;
                    }
                    var clearQuest = new MobCollectionClearQuest();

                    clearQuest.setClearCount(((WzProperty) clearQuestNode.getChild("clearCount")).getIntValue());
                    clearQuest.setRecordId(((WzProperty) clearQuestNode.getChild("recordID")).getIntValue());
                    clearQuest.setRewardId(((WzProperty) clearQuestNode.getChild("rewardID")).getIntValue());

                    region.addClearQuest(clearQuest);
                }
            }

//            for (WzObject<?, ?> sessionMainNode : regionNode) {
//                if (!Util.isNumber(sessionMainNode.getName())) {
//                    continue;
//                }
//                var session = new MobCollectionSession();
//                session.setSessionId(Integer.parseInt(sessionMainNode.getName()));
//
//                region.addSession(session);
//
//                infoNode = regionNode.getChild("info");
//                session.setRecordId(((WzProperty) infoNode.getChild("recordID")).getIntValue());
//                session.setRewardId(((WzProperty) infoNode.getChild("rewardID")).getIntValue());
//                session.setRewardCount(((WzProperty) infoNode.getChild("count", 1)).getIntValue());
//
//                for (WzObject<?, ?> groupMainNode : sessionMainNode.getChild("group")) {
//                    var group = new MobCollectionGroup();
//                    group.setGroupId(Integer.parseInt(groupMainNode.getName()));
//
//                    session.addGroup(group);
//
//                    group.setRecordId(((WzProperty) groupMainNode.getChild("recordID")).getIntValue());
//                    group.setRewardId(((WzProperty) groupMainNode.getChild("rewardID")).getIntValue());
//                    group.setRewardCount(((WzProperty) groupMainNode.getChild("count", 1)).getIntValue());
//                    group.setExplorationCycle(((WzProperty) groupMainNode.getChild("exploraionCycle", 60)).getIntValue());
//                    group.setExplorationReward(((WzProperty) groupMainNode.getChild("exploraionReward", 0)).getIntValue());
//
//                    for (WzObject<?, ?> mobMainNode : groupMainNode.getChild("mob")) {
//                        var mobTemplateId = ((WzProperty) mobMainNode.getChild("id")).getIntValue();
//                        var regionId = region.getRegionId();
//                        var sessionId = session.getSessionId();
//                        var groupId = group.getGroupId();
//                        var groupPosition = group.getMobs().size();
//                        var regionPosition = Integer.parseInt(mobMainNode.getName());
//
//                        var mobInfo = new MonsterCollectionMobInfo(mobTemplateId, regionId, sessionId, groupId, groupPosition, regionPosition);
//                        monsterInfo.put(mobTemplateId, mobInfo);
//                        group.addMob(mobTemplateId);
//                    }
//                }
//            }

            mobCollectionRegions.put(region.getRegionId(), region);
        }
    }

    @Saver(varName = "mobCollectionRegions")
    private static void saveMobCollections(File file) {
        try (RandomAccessFile raf = new RandomAccessFile(file, IOHelper.READ_WRITE_MODE)) {
            var mc = mobCollectionRegions;
            raf.writeInt(mc.size());
            for (var region : mc.values()) {
                raf.writeInt(region.getRegionId());
                raf.writeInt(region.getRecordId());
                raf.writeInt(region.getRewardId());

                raf.writeInt(region.getMobCollectionClearQuests().size());
                for (var clearQuest : region.getMobCollectionClearQuests()) {
                    raf.writeInt(clearQuest.getClearCount());
                    raf.writeInt(clearQuest.getRecordId());
                    raf.writeInt(clearQuest.getRewardId());
                }

                raf.writeInt(region.getMobCollectionSessions().size());
                for (var session : region.getMobCollectionSessions().values()) {
                    raf.writeInt(session.getSessionId());
                    raf.writeInt(session.getRecordId());
                    raf.writeInt(session.getRewardId());

                    raf.writeInt(session.getMobCollectionGroups().size());
                    for (var group : session.getMobCollectionGroups().values()) {
                        raf.writeInt(group.getGroupId());
                        raf.writeInt(group.getRecordId());
                        raf.writeInt(group.getRewardId());
                        raf.writeInt(group.getExplorationCycle());
                        raf.writeInt(group.getExplorationReward());

                        raf.writeInt(group.getMobs().size());
                        for (var mob : group.getMobs()) {
                            raf.writeInt(mob);
                            raf.writeInt(getMobInfoByID(mob).getRegionPosition());
                        }
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Loader(varName = "mobCollectionRegions")
    public static void loadMobCollectionFromFile(File file, boolean exists) {
        if (!exists) {
            loadMobCollectionFromWz();
            saveMobCollections(file);
        } else {
            try (RandomAccessFile raf = new RandomAccessFile(file, IOHelper.READ_MODE)) {
                var mc = mobCollectionRegions;
                var regionSize = raf.readInt();
                for (int i = 0; i < regionSize; i++) {
                    var region = new MobCollectionRegion();
                    region.setRegionId(raf.readInt());
                    region.setRecordId(raf.readInt());
                    region.setRewardId(raf.readInt());

                    var clearQuestSize = raf.readInt();
                    for (int j = 0; j < clearQuestSize; j++) {
                        var clearQuest = new MobCollectionClearQuest();
                        clearQuest.setClearCount(raf.readInt());
                        clearQuest.setRecordId(raf.readInt());
                        clearQuest.setRewardId(raf.readInt());
                    }

                    var sessionSize = raf.readInt();
                    for (int k = 0; k < sessionSize; k++) {
                        var session = new MobCollectionSession();
                        session.setSessionId(raf.readInt());
                        session.setRecordId(raf.readInt());
                        session.setRewardId(raf.readInt());

                        var groupSize = raf.readInt();
                        for (int l = 0; l < groupSize; l++) {
                            var group = new MobCollectionGroup();
                            group.setGroupId(raf.readInt());
                            group.setRecordId(raf.readInt());
                            group.setRewardId(raf.readInt());
                            group.setExplorationCycle(raf.readInt());
                            group.setExplorationReward(raf.readInt());

                            var mobSize = raf.readInt();
                            for (int groupPosition = 0; groupPosition < mobSize; groupPosition++) {
                                var mobTemplateId = raf.readInt();
                                var regionPosition = raf.readInt();
                                group.addMob(mobTemplateId);
                                monsterInfo.put(mobTemplateId, new MonsterCollectionMobInfo(
                                        mobTemplateId,
                                        region.getRegionId(),
                                        session.getSessionId(),
                                        group.getGroupId(),
                                        groupPosition,
                                        regionPosition
                                ));
                            }

                            session.addGroup(group);
                        }
                        region.addSession(session);
                    }
                    mc.put(region.getRegionId(), region);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public static MonsterCollectionMobInfo getMobInfoByID(int templateID) {
        return monsterInfo.get(templateID);
    }

    public static int getRequiredMobs(int region, int session, int group) {
        return mobCollectionRegions.get(region).getSession(session).gerGroup(group)
                .getMobs().size();
    }

    private static MobCollectionSession getSession(int region, int session) {
        return mobCollectionRegions.get(region).getSession(session);
    }

    private static MobCollectionGroup getGroup(int region, int session, int group) {
        return getSession(region, session).gerGroup(group);
    }

    public static void main(String[] args) {
        loadMobCollectionFromWz();
        saveMobCollections(new File(ServerConstants.DAT_DIR + "/mobCollectionRegions.dat"));
        System.out.println();
    }

    public static int getExplorationMinutes(int region, int session, int groupId) {
        var group = getGroup(region, session, groupId);
        return group.getExplorationCycle();
    }

    public static Tuple<Integer, Integer> getReward(int region, int session, int groupId) {
        var group = getGroup(region, session, groupId);
        return group.getRewardInfo();
    }
}
