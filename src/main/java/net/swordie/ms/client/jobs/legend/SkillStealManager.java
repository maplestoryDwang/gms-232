package net.swordie.ms.client.jobs.legend;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.ChosenSkill;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.StolenSkill;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.loaders.StolenSkillData;
import net.swordie.ms.util.container.Tuple;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.stream.Collectors;

import static net.swordie.ms.enums.StealMemoryType.REMOVE_STEAL_MEMORY;

/**
 * Created on 07/05/2021.
 *
 * @author Asura
 */
public class SkillStealManager {

    // region [Phantom] Custom Skill Change

    /**
     * Allow phantom to save 1 preset of Chosen Skills. And have GHOSTWALK quick swap.
     *
     * @param chr
     */
    public static void swapPresets(Char chr) {
        var qm = chr.getQuestManager();
        var q = qm.getQuestById(QuestConstants.SW_PHANTOM_LOADOUT_PRESET);
        if (q == null) {
            return;
        }

        // Extract Saved Chosen Skills
        Map<Integer, Integer> preset = new HashMap<>();
        for (int tab = 1; tab <= 5; tab++) {
            String key = String.valueOf(tab);
            var skillId = q.getIntProperty(key);
            if (skillId > 0) {
                preset.put(tab, skillId);
            }
        }

        // Save Current Loadout
        saveCurrentChosenSkills(chr);

        // Apply Other Loadout
        for (var entry : preset.entrySet()) {
            var tab = entry.getKey();
            var skillId = entry.getValue();
            if (getStolenSkillBySkillId(chr, skillId) != null) {
                addChosenSkill(chr, skillId, getImpeccableSkillIdByTab(tab));
                chr.write(UserLocal.resultSetStealSkill(true, getImpeccableSkillIdByTab(tab), skillId));
            }
        }
    }

    /**
     * Save current Chosen Skills as a preset
     * @param chr
     */
    public static void saveCurrentChosenSkills(Char chr) {
        var qm = chr.getQuestManager();
        var q = qm.getOrCreateQuestById(QuestConstants.SW_PHANTOM_LOADOUT_PRESET);
        var chosenSkills = chr.getChosenSkills();
        for (var cs : chosenSkills) {
            q.setProperty(cs.getPosition() + "", cs.getSkillId());
        }
    }

    public static int getPresetChosenSkillByTab(Char chr, int tab) {
        var qm = chr.getQuestManager();
        var q = qm.getOrCreateQuestById(QuestConstants.SW_PHANTOM_LOADOUT_PRESET);
        if (q != null) {
            return q.getIntProperty(String.valueOf(tab));
        }
        return 0;
    }
    // endregion

    public static boolean hasStolenSkill(Char chr, int skillId) {
        return chr.getStolenSkills().stream().anyMatch(sk -> sk.getSkillId() == skillId);
    }

    public static StolenSkill getStolenSkillBySkillId(Char chr, int skillId) {
        return chr.getStolenSkills().stream().filter(sk -> sk.getSkillId() == skillId).findFirst().orElse(null);
    }

    public static StolenSkill getStolenSkillByPosition(Char chr, int position) {
        return chr.getStolenSkills().stream().filter(sk -> sk.getSkillId() > 0 && sk.getPosition() == position).findFirst().orElse(null);
    }

    public static ChosenSkill getChosenSkillByTab(Char chr, int tab) {
        return chr.getChosenSkills().stream().filter(cs -> cs.getPosition() == tab).findFirst().orElse(null);
    }

    public static boolean hasEnoughSpace(Char chr, int tab) {
        return chr.getStolenSkills().stream()
                .filter(sk -> sk.getSkillId() > 0
                        && (StolenSkillData.getStolenSkillInfoBySkillId(sk.getSkillId()) != null)
                        && StolenSkillData.getStolenSkillInfoBySkillId(sk.getSkillId()).getTabPos() == tab)
                .count() < getMaxPositionsByTab(tab);
    }

    public static int getFirstEmptyPosition(Char chr, int tab) {
        // return -1  means no space.
        var maxSlotsByTab = getMaxPositionsByTab(tab);
        var lowerBoundByTab = getStartPositionByTab(tab);
        var upperBoundByTab = lowerBoundByTab + maxSlotsByTab;
        for (int position = lowerBoundByTab; position < upperBoundByTab; position++) {
            if (getStolenSkillByPosition(chr, position) == null) {
                return position;
            }
        }

        return -1;
    }

    public static void addStolenSkill(Char chr, int skillId, int slv, int pos) {
        Skill skill = SkillData.getSkillDeepCopyById(skillId);
        skill.setCurrentLevel(slv);
        chr.addSkill(skill);

        StolenSkill stolenSkill = new StolenSkill(chr, 0, skillId, pos, slv);
        chr.addStolenSkill(stolenSkill);
    }

    public static void removeStolenSkill(Char chr, int skillId) {
        StolenSkill stolenSkill = getStolenSkillBySkillId(chr, skillId);
        if (stolenSkill == null) {
            return;
        }

        // Check if removed stolen skill was chosen.
        var chosenSkills = chr.getChosenSkills().stream().filter(cs -> cs.getSkillId() == skillId).collect(Collectors.toList());
        for (var cs : chosenSkills) {
            removeChosenSkill(chr, cs);
            chr.write(UserLocal.resultSetStealSkill(true, getImpeccableSkillIdByTab(cs.getPosition()), 0));
        }

        chr.getTemporaryStatManager().removeStatsBySkill(skillId);

        chr.removeStolenSkill(stolenSkill);
        if (chr.hasSkill(skillId)) {
            chr.removeSkill(skillId);
        }
    }

    public static void resetStolenSkills(Char chr) {
        var stolenSkills = new ArrayList<>(chr.getStolenSkills());

        for (var sk : stolenSkills) {
            removeStolenSkill(chr, sk.getSkillId());
            var adjusted = SkillStealManager.getAdjustedPositionByRealPosition(sk.getPosition());

            if (adjusted == null) {
                continue;
            }

            var adjustedTab = adjusted.getLeft();
            var adjustedPosition = adjusted.getRight();

            chr.write(UserLocal.changeStealMemoryResult(REMOVE_STEAL_MEMORY, adjustedTab, adjustedPosition, 0, 0, 0));
        }
        chr.setStolenSkills(new HashSet<>());
    }

    public static void addChosenSkill(Char chr, int skillId, int impeccableSkillId) {
        var tab = getTabByImpeccableSkillId(impeccableSkillId);
        var chosenSkill = getChosenSkillByTab(chr, tab);
        if(chosenSkill != null) {
            removeChosenSkill(chr, chosenSkill);
        }

        if (skillId > 0) {
            ChosenSkill newChosenSkill = new ChosenSkill(chr, 0, skillId, tab);
            chr.addChosenSkill(newChosenSkill);
        }
    }

    public static void removeChosenSkill(Char chr, ChosenSkill chosenSkill) {
        chr.removeChosenSkill(chosenSkill);
    }

    private static int getMaxPositionsByTab(int tab) {
        switch (tab) {
            case 1:
            case 2:
                return 4;

            case 3:
            case 4:
                return 3;

            case 5:
                return 2;
        }
        return 0;
    }

    private static int getStartPositionByTab(int tab) {
        int startPos = 0;
        switch (tab) {
            case 1:
                startPos = 0;
                break;
            case 2:
                startPos = 4;
                break;
            case 3:
                startPos = 8;
                break;
            case 4:
                startPos = 11;
                break;
            case 5:
                startPos = 14;
                break;
        }
        return startPos;
    }

    /**
     * Calculates the Adjusted Position and Tab, based of the actual position. Adjusted Position and Tab are used by the client. Whilst the 'actual position' is what the server stores.
     * @param position
     * @return
     */
    public static Tuple<Integer, Integer> getAdjustedPositionByRealPosition(int position) {
        // Tab 1
        if (position >= 0 && position <= 3) {
            return new Tuple<>(1, position);
        }

        // Tab 2
        if (position >= 4 && position <= 7) {
            return new Tuple<>(2, position - 4);
        }

        // Tab 3
        if (position >= 8 && position <= 10) {
            return new Tuple<>(3, position - 8);
        }

        // Tab 4
        if (position >= 11 && position <= 13) {
            return new Tuple<>(4, position - 11);
        }

        // Tab 5
        if (position >= 14 && position <= 15) {
            return new Tuple<>(5, position - 14);
        }

        return null;
    }

    public static int getTabPosBySkillId(int skillID) {
        //Hyper Skills
        SkillInfo si = SkillData.getSkillInfoById(skillID);
        if (si == null) {
            return -1;
        }

        if (si.getHyper() == 2) {
            return 5;
        }

        switch (SkillConstants.getPrefix(skillID)) {

            // 1st Job Tab
            case 100:
            case 200:
            case 300:
            case 301:
            case 400:
            case 430:
            case 500:
            case 501:
                return 1;

            // 2nd Job Tab
            case 110:
            case 120:
            case 130:

            case 210:
            case 220:
            case 230:

            case 310:
            case 320:
            case 330:

            case 410:
            case 420:
            case 431:
            case 432:

            case 510:
            case 520:
            case 530:
                return 2;

            // 3rd Job Tab
            case 111:
            case 121:
            case 131:

            case 211:
            case 221:
            case 231:

            case 311:
            case 321:
            case 331:

            case 411:
            case 421:
            case 433:

            case 511:
            case 521:
            case 531:
                return 3;

            // 4th job Tab
            case 112:
            case 122:
            case 132:

            case 212:
            case 222:
            case 232:

            case 312:
            case 322:
            case 332:

            case 412:
            case 422:
            case 434:

            case 512:
            case 522:
            case 532:
                return 4;
        }

        return -1;
    }

    public static int getImpeccableSkillIdByTab(int tab) {
        switch (tab) {
            case 1:
                return 24001001;
            case 2:
                return 24101001;
            case 3:
                return 24111001;
            case 4:
                return 24121001;
            case 5:
                return 24121054;
        }

        return 0;
    }

    private static int getTabByImpeccableSkillId(int skillId) {
        switch (skillId) {
            case 24001001:
                return 1;
            case 24101001:
                return 2;
            case 24111001:
                return 3;
            case 24121001:
                return 4;
            case 24121054:
                return 5;
        }

        return 0;
    }
}
