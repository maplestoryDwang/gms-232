package net.swordie.ms.client.jobs.adventurer;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.loaders.SkillData;

/**
 * Created on 12/14/2017.
 */
public class Beginner extends Job {
    public static final int THREE_SNAILS = 1000;
    public static final int RECOVERY = 1001;
    public static final int NIMBLE_FEET = 1002;

    public static final int MAPLE_RETURN = 1281;

    private static final int[] addedSkills = new int[]{
            RECOVERY,
            NIMBLE_FEET,
            THREE_SNAILS
    };

    public Beginner(Char chr) {
        super(chr);

        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id)) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setRootId(0);
                    skill.setMasterLevel(3);
                    skill.setMaxLevel(3);
                    chr.addSkill(skill);
                }
            }
            if (!JobConstants.isPathFinder(chr.getJob()) && !JobConstants.isDualBlade(chr.getJob()) && !JobConstants.isJett(chr.getJob())) {
                Skill skill = SkillData.getSkillDeepCopyById(MAPLE_RETURN);
                skill.setCurrentLevel(skill.getMasterLevel());
                chr.addSkill(skill);
            }
        }
    }

    @Override
    public void handleAttack(Client c, AttackInfo attackInfo) {
        super.handleAttack(c, attackInfo);
    }

    @Override
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillId, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {
        super.handleSkill(chr, tsm, skillId, slv, inPacket, skillUseInfo);
        Skill skill = chr.getSkill(skillId);
        SkillInfo si = null;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skillId);
        }
        Option o1 = new Option();
        switch (skillId) {
            case NIMBLE_FEET:
                o1.nOption = 20;
                o1.rOption = NIMBLE_FEET;
                o1.tOption = 12;
                tsm.putCharacterStatValue(CharacterTemporaryStat.IndieSpeed, o1);
                break;
            case RECOVERY:

                break;
        }
        tsm.sendSetStatPacket();
    }


    @Override
    public boolean isHandlerOfJob(short id) {
        JobConstants.JobEnum job = JobConstants.JobEnum.getJobById(id);
        return job == JobConstants.JobEnum.BEGINNER;
    }

    @Override
    public void setCharCreationStats(Char chr) {
        super.setCharCreationStats(chr);
        CharacterStat cs = chr.getAvatarData().getCharacterStat();
        if (chr.getSubJob() == 1) {
            cs.setPosMap(103050900);
        } else if (chr.getSubJob() == 2) {
            cs.setPosMap(3000600);
        } else if (chr.getSubJob() == 10){ //Jett
            cs.setPosMap(552000060);
        }else {
            cs.setPosMap(4000011);
        }
    }
}
