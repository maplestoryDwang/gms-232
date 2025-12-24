package net.swordie.ms.loaders;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.client.character.achievement.AchievementCheckValueType;
import net.swordie.ms.client.character.achievement.AchievementType;
import net.swordie.ms.jwzlib.WzFile;
import net.swordie.ms.jwzlib.WzObject;
import net.swordie.ms.jwzlib.WzProperty;
import net.swordie.ms.loaders.containerclasses.achievement.AchievementInfo;
import net.swordie.ms.loaders.containerclasses.achievement.AchievementMission;

import java.util.HashSet;
import java.util.Map;

public class AchievementData {

    private static Map<Integer, Integer> fieldOffsets;
    private static Map<Integer, AchievementInfo> achievementInfoMap;

    private static void loadAchievementsFromWz() {

        WzFile file = new WzFile(ServerConstants.WZ_DIR + "/Etc.wz");
        WzObject<?, ?> root = file.getChild("Achievement").getChild("AchievementData");

        var set = new HashSet<String>();
        var setCheck = new HashSet<String>();

        for (WzObject<?, ?> node : root) {
            var data = new AchievementInfo(Integer.parseInt(node.getName().replace(".img", "")));

            var infoNode = node.getChild("info");

            data.setName(((WzProperty<String>) infoNode.getChild("name", "")).getValue());
            data.setDesc(((WzProperty<String>) infoNode.getChild("desc", "")).getValue());
            data.setScore(((WzProperty) infoNode.getChild("score", 0)).getIntValue());


            var missionRoot = node.getChild("mission");
            for (WzObject<?, ?> missionNode : missionRoot) {
                var mission = new AchievementMission();

                mission.setName(((WzProperty<String>) missionNode.getChild("name", "")).getValue());

                var subMissionRoot = missionNode.getChild("subMission");
                for (var subMissionNode : subMissionRoot) {
                    AchievementType type;
                    try {
                        type = AchievementType.valueOf(subMissionNode.getName());
                    } catch (IllegalArgumentException e) {
                        set.add(subMissionNode.getName());
                        break;
                    }

                    mission.setType(type);

                    var checkValueRoot = subMissionNode.getChild("checkValue");
                    for (var checkValueNode : checkValueRoot) {

                        AchievementCheckValueType checkType;
                        try {
                            checkType = AchievementCheckValueType.valueOf(checkValueNode.getName());
                        } catch (IllegalArgumentException e) {
                            setCheck.add(checkValueNode.getName());
                            break;
                        }
                    }

                    var scoreRoot = subMissionNode.getChild("score");
                    break;
                }
            }
        }

        System.out.println("Unknown subMissions types:");
        for (var str : set) {
            System.out.printf("%s,%n", str);
        }

        System.out.println("Unknown checkValue types:");
        for (var str : setCheck) {
            System.out.printf("%s,%n", str);
        }
    }

    public static void main(String[] args) {
        loadAchievementsFromWz();
    }

}
