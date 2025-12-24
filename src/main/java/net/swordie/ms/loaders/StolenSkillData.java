package net.swordie.ms.loaders;

import net.swordie.ms.client.jobs.legend.SkillStealManager;
import net.swordie.ms.loaders.containerclasses.StolenSkillInfo;

import java.util.HashMap;
import java.util.Map;

/**
 * Created on 07/05/2021.
 *
 * @author Asura
 */
public class StolenSkillData {
    // Cache SkillId -> Position
    private static Map<Integer, StolenSkillInfo> stolenSkills = new HashMap<>(); // <skillId, ssi>

    public static StolenSkillInfo getStolenSkillInfoBySkillId(int skillId) {
        if (stolenSkills.containsKey(skillId)) {
            return stolenSkills.get(skillId);

        } else {
            var tabPos = SkillStealManager.getTabPosBySkillId(skillId);
            if (tabPos <= 0) {
                return null;
            }

            var impeccableSkillId = SkillStealManager.getImpeccableSkillIdByTab(tabPos);
            if (impeccableSkillId <= 0) {
                return null;
            }

            var ssi = new StolenSkillInfo(skillId, tabPos, impeccableSkillId);
            stolenSkills.put(skillId, ssi);

            return ssi;
        }
    }
}
