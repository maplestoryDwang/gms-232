package net.swordie.ms.client.character.hyperstats;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.loaders.SkillData;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.ArrayList;
import java.util.List;

/**
 * Created on 01/02/2022.
 *
 * @author Asura
 */
public class HyperStatsModule {

    private static final Logger log = LogManager.getLogger();

    public static void increaseHyperStatSkill(Char chr, int presetIndex, int skillId) {
        var si = SkillData.getSkillInfoById(skillId);
        if (si == null) {
            log.error(String.format("Character %d attempted assigning hyper SP to a skill with null skillinfo (%d).", chr.getId(), skillId));
            chr.dispose();
            return;
        }
        if (!SkillConstants.isHyperstatSkill(skillId)) {
            log.error(String.format("Character %d attempted assigning hyper stat SP to a wrong skill (skill id %d, player job %d)", chr.getId(), skillId, chr.getJob()));
            chr.dispose();
            return;
        }
        if (si.getHyperStat() == 0) {
            chr.getOffenseManager().addOffense(
                    String.format("Character %d attempted assigning hyper stat to an improper skill. (%d, job %d)",
                            chr.getId(), skillId, chr.getJob()));
            chr.dispose();
            return;
        }
        if (skillId == Job.HYPER_STAT_ARCANE_FORCE && !chr.getQuestManager().hasQuestCompleted(QuestConstants.FIFTH_JOB_QUEST)) {
            chr.getOffenseManager().addOffense("Tried adding to AF hyper stat without having the proper quest completed.");
            chr.dispose();
            return;
        }

        var hsm = chr.getHyperStatsManager();
        var skill = chr.getSkill(skillId, true);
        var level = chr.getLevel();

        var totalHyperSp = SkillConstants.getTotalHyperStatSpByLevel(level);
        var spentSp = chr.getSpentHyperSp();
        var availableSp = totalHyperSp - spentSp;

        var neededSp = SkillConstants.getNeededSpForHyperStatSkill(skill.getCurrentLevel() + 1);

        if (skill.getCurrentLevel() >= skill.getMaxLevel() || availableSp < neededSp) {
            chr.getOffenseManager().addOffense(
                    String.format("Character %d attempted assigning too many hyper stat levels. Available SP %d, " +
                                    "needed %d, current %d (%d, job %d)", chr.getId(), availableSp, neededSp,
                            skill.getCurrentLevel(), skillId, chr.getJob()));
            chr.dispose();
            return;
        }
        var newSkill = SkillData.getSkillDeepCopy(skill);
        newSkill.setCurrentLevel(skill.getCurrentLevel() + 1);
        chr.addSkill(newSkill);
        addHyperStatToPreset(chr, hsm, newSkill, presetIndex);
        chr.write(WvsContext.changeSkillRecordResult(newSkill));

        if (skillId == Job.HYPER_STAT_ARCANE_FORCE) {
            chr.getJobHandler().giveHyperAfBuff();
        }
    }

    private static void addHyperStatToPreset(Char chr, HyperStatsManager hsm, Skill hyperStatSkill, int presetIndex) {
        var info = HyperStatInfo.fromSkill(hyperStatSkill, presetIndex);
        hsm.addHyperStatInfoToPreset(info);
        chr.write(WvsContext.hyperStatSkillUpdateResult(hsm, true));
    }


    public static void switchPreset(Char chr, int presentIndex) {
        var hsm = chr.getHyperStatsManager();

        resetHyperStats(chr);

        hsm.setCurrentPreset(presentIndex);
        chr.write(WvsContext.hyperStatSkillUpdateResult(hsm, true));
        giveHyperStatsByPreset(chr, presentIndex);
    }

    public static void resetPreset(Char chr, int presetIndex) {
        var hsm = chr.getHyperStatsManager();

        hsm.resetPreset(presetIndex);
        resetHyperStats(chr);
    }

    private static void resetHyperStats(Char chr) {
        List<Skill> skills = new ArrayList<>();
        for (int skillId : SkillConstants.HYPER_STAT_SKILLS) {
            Skill skill = chr.getSkill(skillId);
            if (skill != null) {
                chr.removeSkill(skillId);
                skill.setCurrentLevel(0);
                skills.add(skill);
            }
        }
        chr.write(WvsContext.changeSkillRecordResult(skills, true, false, false, false));
    }

    private static void giveHyperStatsByPreset(Char chr, int presetIndex) {
        var hsm = chr.getHyperStatsManager();
        var infos = hsm.getHyperStatSkillsByPreset(presetIndex);
        var skills = new ArrayList<Skill>();
        for (var info : infos) {
            var skill = chr.getSkill(info.getSkillId(), true);
            skill.setCurrentLevel(info.getLevel());
            chr.addSkill(skill);

            skills.add(skill);
        }
        if (skills.size() > 0) {
            chr.write(WvsContext.changeSkillRecordResult(skills, true, false, false, false));
        }
    }
}
