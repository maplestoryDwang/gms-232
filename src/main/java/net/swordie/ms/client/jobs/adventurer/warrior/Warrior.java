package net.swordie.ms.client.jobs.adventurer.warrior;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.adventurer.Beginner;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 12/14/2017.
 */
public class Warrior extends Beginner {


    // V skill
    public static final int BLITZ_SHIELD_BUFF = 400001010;
    public static final int BLITZ_SHIELD_ATTACK = 400001011;

    public Warrior(Char chr) {
        super(chr);
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return id == JobConstants.JobEnum.WARRIOR.getJobId();
    }



    // Attack related methods ------------------------------------------------------------------------------------------

    @Override
    public void handleAttack(Client c, AttackInfo attackInfo) {
        Char chr = c.getChr();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = chr.getSkill(attackInfo.skillId);
        int skillID = 0;
        SkillInfo si = null;
        boolean hasHitMobs = attackInfo.mobAttackInfo.size() > 0;
        int slv = 0;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skill.getSkillId());
            slv = skill.getCurrentLevel();
            skillID = skill.getSkillId();
        }


        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        switch (attackInfo.skillId) {

        }
        if (!JobConstants.isPhantom(chr.getJob())) {
            super.handleAttack(c, attackInfo);
        }
    }


    // Skill related methods -------------------------------------------------------------------------------------------

    @Override
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillId, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {
        if (!JobConstants.isPhantom(chr.getJob())) {
            super.handleSkill(chr, tsm, skillId, slv, inPacket, skillUseInfo);
        }
        Skill skill = chr.getSkill(skillId);
        SkillInfo si = null;
        if (skill != null || SkillConstants.isDivineEchoMimicSkills(skillId)) {
            si = SkillData.getSkillInfoById(skillId);
        }
        Field field = chr.getField();
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (skillId) {
            case DarkKnight.MAGIC_CRASH_DRK:
            case Hero.MAGIC_CRASH_HERO:
            case Paladin.MAGIC_CRASH_PALLY:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                o1.chr = chr;

                var rect = chr.getRectAround(si.getFirstRect());

                for (var mob : field.getMobsInRect(rect)) {
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    if (Util.succeedProp(si.getValue(prop, slv))) {
                        mts.removeBuffs();
                        mts.addStatOptionsAndBroadcast(chr, MobStat.MagicCrash, o1);
                    }
                }
                break;
            case BLITZ_SHIELD_ATTACK:
                tsm.removeStatsBySkill(BLITZ_SHIELD_BUFF);
                break;
            case Hero.WEAPON_BOOSTER_FIGHTER:
            case DarkKnight.WEAPON_BOOSTER_SPEARMAN:
            case Paladin.WEAPON_BOOSTER_PAGE:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;
            case DarkKnight.EPIC_ADVENTURE_DRK:
            case Hero.EPIC_ADVENTURE_HERO:
            case Paladin.EPIC_ADVENTURE_PALA:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                break;
            case BLITZ_SHIELD_BUFF:
                o1.nOption = chr.getHPPerc(si.getValue(x, slv));
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(BlitzShield, o1);
                break;
        }
        tsm.sendSetStatPacket();
    }


    public void handleRemoveCTS(CharacterTemporaryStat cts, Option o) {
        if (cts == BlitzShield && o.nOption > 0) {
            chr.write(UserLocal.userBonusAttackRequest(BLITZ_SHIELD_ATTACK));
        }

        super.handleRemoveCTS(cts, o);
    }


    // Hit related methods ---------------------------------------------------------------------------------------------
}

