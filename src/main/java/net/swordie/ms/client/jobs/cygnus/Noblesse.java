package net.swordie.ms.client.jobs.cygnus;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.loaders.SkillData;

/**
 * Created on 12/14/2017.
 */
public class Noblesse extends Job {
    public static final int IMPERIAL_RECALL = 10001245;
    public static final int ELEMENTAL_SLASH = 10001244;
    public static final int NOBLE_MIND = 10000202; // unlocked through a quest [The Mind of a Knight]
    public static final int ELEMENTAL_EXPERT = 10000250; // unlocked at 4th Job adv
    public static final int ELEMENTAL_SHIFT_BASE = 10000252;
    public static final int ELEMENTAL_SHIFT_HIGH = 10001253;
    public static final int ELEMENTAL_SHIFT_FLASH = 10001254;

    // V Skill  KoC Common
    public static final int PHALANX_CHARGE = 400001018;

    private static final int[] addedSkills = {
            IMPERIAL_RECALL,
            ELEMENTAL_SLASH,
            ELEMENTAL_SHIFT_BASE,
            ELEMENTAL_SHIFT_HIGH,
            ELEMENTAL_SHIFT_FLASH,
    };

    public Noblesse(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id)) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    if (skill != null) {
                        skill.setCurrentLevel(1);
                        chr.addSkill(skill);
                    }
                }
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

    }

    @Override
    public void handleHit(Client c, InPacket inPacket, HitInfo hitInfo) {
        super.handleHit(c, inPacket, hitInfo);
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return id == JobConstants.JobEnum.NOBLESSE.getJobId();
    }

    @Override
    public void setCharCreationStats(Char chr) {
        super.setCharCreationStats(chr);
        chr.getAvatarData().getCharacterStat().setPosMap(130030000);
    }
}
