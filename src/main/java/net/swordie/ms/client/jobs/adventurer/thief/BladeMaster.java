package net.swordie.ms.client.jobs.adventurer.thief;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.debuff.DebuffInfo;
import net.swordie.ms.client.character.skills.debuff.DebuffUtil;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.AssistType;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.Map;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

public class BladeMaster extends Thief {
    public static final int RETURN = 1282;


    public static final int SELF_HASTE = 4301003; //Buff


    public static final int KATARA_BOOSTER = 4311009; //Buff


    public static final int VENOM_DB = 4320005;
    public static final int FLYING_ASSAULTER = 4321006; //Special Attack (Stun Debuff)
    public static final int FLASHBANG = 4321002; //Special Attack
    public static final int UPPER_STAB = 4321004;


    public static final int CHAINS_OF_HELL = 4331006; //Special Attack (Stun Debuff)
    public static final int MIRROR_IMAGE = 4331002; //Buff
    public static final int SHADOW_MELD = 4330009;
    public static final int LIFE_DRAIN = 4330007;
    public static final int ADVANCED_DARK_SIGHT_DB = 4330001;


    public static final int PHANTOM_BLOW = 4341009;
    public static final int BLADE_FURY = 4341004;
    public static final int FINAL_CUT = 4341002; //Special Attack
    public static final int SUDDEN_RAID_DB = 4341011; //Special Attack
    public static final int MAPLE_WARRIOR_DB = 4341000; //Buff
    public static final int TOXIC_VENOM_DB = 4340012;
    public static final int HEROS_WILL_DB = 4341008;
    public static final int EPIC_ADVENTURE_DB = 4341053;
    public static final int ASURAS_ANGER = 4341052;
    public static final int BLADE_CLONE = 4341054;
    public static final int MIRRORED_TARGET = 4341006;


    // V skills
    public static final int BLADE_TEMPEST = 400041006;
    public static final int BLADES_OF_DESTINY = 400041021;
    public static final int BLADE_TORNADO = 400041042;
    public static final int BLADE_TORNADO_SHOOT_OBJECT = 400041043;
    public static final int HAUNTED_EDGE = 400041075;
    public static final int HAUNTED_EDGE_ASURA = 400041076;
    public static final int HAUNTED_EDGE_ASURA_WIND = 400041077;
    public static final int HAUNTED_EDGE_YAKSA = 400041078;


    public BladeMaster(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            if (!chr.hasSkill(RETURN)) {
                Skill skill = SkillData.getSkillDeepCopyById(RETURN);
                skill.setCurrentLevel(skill.getMasterLevel());
                chr.addSkill(skill);
            }
        }
    }


    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isDualBlade(id);
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
        if (!SkillConstants.isSummon(attackInfo.skillId) && hasHitMobs) {

            // Life Drain
            recoverHPByLifeDrain();
        }

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        switch (attackInfo.skillId) {
            case FLASHBANG:
                o1.nOption = -si.getValue(x, slv);
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                o2.nOption = si.getValue(z, slv);
                o2.rOption = skillID;
                o2.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, Map.of(MobStat.ACC, o1, MobStat.AddDamSkill, o2), attackInfo.getMobIds(), new DebuffInfo(si.getValue(prop, slv)));
                break;
            case UPPER_STAB:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = 3;

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Lifting, o1, attackInfo.getMobIds(), new DebuffInfo(true, si.getValue(prop, slv)));
                break;
            case FLYING_ASSAULTER:
                o1.nOption = 1;
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds(), new DebuffInfo(true, si.getValue(prop, slv)));
                break;
            case CHAINS_OF_HELL:
                o1.nOption = 1;
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds(), new DebuffInfo(true, si.getValue(prop, slv)));
                break;
            case FINAL_CUT:
                o1.nOption = 100 + si.getValue(w, slv);
                o1.rOption = attackInfo.skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(FinalCut, o1);
                tsm.sendSetStatPacket();
                o2.nOption = 1;
                o2.rOption = attackInfo.skillId;
                o2.tOption = si.getValue(v, slv);
                tsm.putCharacterStatValue(IndieNotDamaged, o2, true);
                tsm.sendSetStatPacket();
                break;
        }
        super.handleAttack(c, attackInfo);
    }

    private void recoverHPByLifeDrain() {
        if (chr.hasSkill(LIFE_DRAIN)) {
            Skill skill = chr.getSkill(LIFE_DRAIN);
            int slv = skill.getCurrentLevel();
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int proc = si.getValue(prop, slv);
            int amounthealed = si.getValue(x, slv);
            if (Util.succeedProp(proc)) {
                int healamount = (int) ((chr.getMaxHP()) / ((double) 100 / amounthealed));
                chr.heal(healamount);
            }
        }
    }

    @Override
    public int getFinalAttackSkill() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.getOptByCTSAndSkill(WindBreakerFinal, BLADE_CLONE) != null) {
            return BLADE_CLONE;
        }
        return super.getFinalAttackSkill();
    }

    // Skill related methods -------------------------------------------------------------------------------------------

    @Override
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillId, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {
        super.handleSkill(chr, tsm, skillId, slv, inPacket, skillUseInfo);
        Skill skill = chr.getSkill(skillId);
        SkillInfo si = null;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skillId);
        }
        Summon summon;
        Field field = chr.getField();
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (skillId) {
            case MIRRORED_TARGET:
                if (tsm.getOptByCTSAndSkill(ShadowPartner, MIRROR_IMAGE) != null) {
                    summon = Summon.getSummonBy(chr, skillId, slv);
                    summon.setFlyMob(false);
                    summon.setMoveAction((byte) 0);
                    summon.setMoveAbility(MoveAbility.Stop);
                    summon.setAssistType(AssistType.None);
                    summon.setAttackActive(false);
                    summon.setAvatarLook(chr.getAvatarData().getAvatarLook());
                    summon.setMaxHP(si.getValue(x, slv));
                    summon.setHp(summon.getMaxHP());
                    field.spawnSummonAndRemoveOld(summon);

                    // tsm.removeStatsBySkill(MIRROR_IMAGE);
                }
                break;
            case CHAINS_OF_HELL:
                o2.nOption = 1;
                o2.rOption = skillId;
                o2.tOption = 3;
                tsm.putCharacterStatValue(IndieNotDamaged, o2, true);
                break;
            case ASURAS_ANGER:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = 10;
                tsm.putCharacterStatValue(Asura, o1);
                break;
            case BLADE_CLONE:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(WindBreakerFinal, o1);
                o2.nOption = 10;
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o2);
                break;
            case BLADES_OF_DESTINY:
                chr.write(WvsContext.skillUseResult(true, skillId));
                break;
        }
        tsm.sendSetStatPacket();
    }

    @Override
    public void handleSkillPrepareStop(Char chr, int skillId, SkillUseInfo sui) {
        if (skillId == FINAL_CUT) {
            return;
        }
        super.handleSkillPrepareStop(chr, skillId, sui);
    }

    // Hit related methods ---------------------------------------------------------------------------------------------
}
