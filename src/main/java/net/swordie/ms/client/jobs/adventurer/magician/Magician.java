package net.swordie.ms.client.jobs.adventurer.magician;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.MobAttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.adventurer.Beginner;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.Effect;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.connection.packet.UserRemote;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillChangeConstants;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.Collections;
import java.util.concurrent.ScheduledFuture;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 12/14/2017.
 */
public class Magician extends Beginner {
    //Common
    public static final int TELEPORT = 2001009;
    public static final int MAGIC_GUARD = 2001002;


    // V skills
    public static final int UNRELIABLE_MEMORY = 400001021;


    private ScheduledFuture infinityTimer;


    public Magician(Char chr) {
        super(chr);
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return id == JobConstants.JobEnum.MAGICIAN.getJobId();
    }

    private void infinity(int skillId) {
        if (!chr.hasSkill(skillId)) {
            infinityTimer.cancel(true);
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = chr.getSkill(skillId);
        int slv = skill.getCurrentLevel();
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        if (tsm.hasStat(Infinity)) {
            Option o1 = new Option();
            o1.nOption = tsm.getOption(Infinity).nOption + 1;
            o1.rOption = skillId;
            o1.tOption = (int) tsm.getRemainingTime(Infinity, skillId);
            o1.setInMillis(true);
            tsm.putCharacterStatValue(Infinity, o1, true);
            tsm.sendSetStatPacket();

            chr.heal((int) (chr.getMaxHP() / ((double) 100 / si.getValue(y, slv))));
            chr.healMP((int) (chr.getMaxMP() / ((double) 100 / si.getValue(y, slv))));
        } else {
            infinityTimer.cancel(true);
            tsm.removeStatsBySkill(skillId);
        }
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
            slv = (byte) skill.getCurrentLevel();
            skillID = skill.getSkillId();
        }

        if (hasHitMobs) {
            incrementArcaneAim();
            mpEaterEffect(attackInfo);
        }
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (attackInfo.skillId) {

        }
        if (!JobConstants.isPhantom(chr.getJob())) {
            super.handleAttack(c, attackInfo);
        }
    }


    private void incrementArcaneAim() {
        Skill skill = chr.getSkill(getArcaneAimSkill());
        if (skill == null) {
            return;
        }
        SkillInfo arcaneAimInfo = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        int arcaneAimProp = arcaneAimInfo.getValue(prop, slv);
        if (!Util.succeedProp(arcaneAimProp)) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        Option o1 = new Option();
        Option o2 = new Option();
        int amount = 1;
        if (tsm.hasStat(ArcaneAim)) {
            amount = tsm.getOption(ArcaneAim).nOption;
            if (amount < arcaneAimInfo.getValue(y, slv)) {
                amount++;
            }
        }
        o.nOption = amount;
        o.rOption = FirePoison.ARCANE_AIM_FP;
        o.tOption = 5; // No Time Variable
        tsm.putCharacterStatValue(ArcaneAim, o);
        o1.rOption = FirePoison.ARCANE_AIM_FP;
        o1.nOption = arcaneAimInfo.getValue(ignoreMobpdpR, slv);
        o1.tOption = 5; // No Time Variable
        tsm.putCharacterStatValue(IndieIgnoreMobpdpR, o1);
        o2.rOption = FirePoison.ARCANE_AIM_FP;
        o2.nOption = (amount * arcaneAimInfo.getValue(x, slv));
        o2.tOption = 5; // No Time Variable
        tsm.putCharacterStatValue(IndieDamR, o2);
        tsm.sendSetStatPacket();
    }

    private int getArcaneAimSkill() {
        int res = 0;
        if (chr.hasSkill(FirePoison.ARCANE_AIM_FP)) {
            res = FirePoison.ARCANE_AIM_FP;
        } else if (chr.hasSkill(IceLightning.ARCANE_AIM_IL)) {
            res = IceLightning.ARCANE_AIM_IL;
        } else if (chr.hasSkill(Bishop.ARCANE_AIM_BISH)) {
            res = Bishop.ARCANE_AIM_BISH;
        }
        return res;
    }



    // Skill related methods -------------------------------------------------------------------------------------------

    @Override
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillId, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {
        if (!JobConstants.isPhantom(chr.getJob())) {
            super.handleSkill(chr, tsm, skillId, slv, inPacket, skillUseInfo);
        }
        Skill skill = chr.getSkill(skillId);
        SkillInfo si = null;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skillId);
        }
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (skillId) {
            case UNRELIABLE_MEMORY:
                chr.write(UserLocal.skillRequestRequest(Util.getRandomFromCollection(
                        JobConstants.isFirePoison(chr.getJob()) ? FirePoison.unreliableMemFP :
                        JobConstants.isIceLightning(chr.getJob()) ? IceLightning.unreliableMemIL :
                        JobConstants.isBishop(chr.getJob()) ? Bishop.unreliableMemBishop :
                            Collections.singleton(1))));
                break;
            case MAGIC_GUARD:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                tsm.putCharacterStatValue(MagicGuard, o1);
                break;
            case FirePoison.MAGIC_BOOSTER_FP:
            case IceLightning.MAGIC_BOOSTER_IL:
            case Bishop.MAGIC_BOOSTER_BISH:
                var nOpt = si.getValue(x, slv);
                if (skillId == IceLightning.MAGIC_BOOSTER_IL) {
                    nOpt = SkillChangeConstants.MAGIC_BOOSTER_IL_BOOSTER;
                }
                o1.nOption = nOpt;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;
            case FirePoison.MEDITATION_FP:
            case IceLightning.MEDITATION_IL:
                o1.nOption = si.getValue(indieMad, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMAD, o1);
                break;
            case FirePoison.ELEMENTAL_DECREASE_FP:
            case IceLightning.ELEMENTAL_DECREASE_IL:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(ElementalReset, o1);
                break;
            case FirePoison.TELEPORT_MASTERY_FP:
            case IceLightning.TELEPORT_MASTERY_IL:
            case IceLightning.TELEPORT_MASTERY_RANGE_IL:
            case Bishop.TELEPORT_MASTERY_BISH:
                CharacterTemporaryStat masteryStat = skillId == IceLightning.TELEPORT_MASTERY_RANGE_IL ? TeleportMasteryRange : TeleportMasteryOn;
                if (tsm.hasStat(masteryStat)) {
                    tsm.removeStatsBySkill(skillId);
                    tsm.sendResetStatPacket();
                } else {
                    o1.nOption = si.getValue(x, slv);
                    o1.rOption = skillId;
                    tsm.putCharacterStatValue(masteryStat, o1);
                }
                break;
            case FirePoison.INFINITY_FP:
            case IceLightning.INFINITY_IL:
            case Bishop.INFINITY_BISH:
                int t = si.getValue(time, slv);
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = t;
                tsm.putCharacterStatValue(Infinity, o1);
                o2.nOption = si.getValue(prop, slv);
                o2.rOption = skillId;
                o2.tOption = t;
                tsm.putCharacterStatValue(Stance, o2);

                int delay = 5;
                int executes = t / delay;
                EventManager.stopTimer(infinityTimer);
                infinityTimer = EventManager.addFixedRateEvent(() -> infinity(skillId), delay * 1000, delay * 1000, executes);
                break;
            case FirePoison.IFRIT:
            case IceLightning.ELQUINES:
            case Bishop.BAHAMUT:
                Summon summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setFlyMob(true);
                summon.setMoveAbility(MoveAbility.Walk);
                Field field = chr.getField();
                field.spawnSummonAndRemoveOld(summon);
                break;
            case FirePoison.EPIC_ADVENTURE_FP:
            case IceLightning.EPIC_ADVENTURE_IL:
            case Bishop.EPIC_ADVENTURE_BISH:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                break;
        }
        tsm.sendSetStatPacket();
    }

    private void mpEaterEffect(AttackInfo attackInfo) {
        Skill skill = getMPEaterSkill();
        if (skill == null || attackInfo.skillId == 0) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        int mpStolen = si.getValue(x, slv);
        boolean showedEffect = false;
        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            if (Util.succeedProp(si.getValue(prop, slv))) {
                Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                if (mob == null || mob.isBoss() || mob.getMp() <= 0) {
                    continue;
                }
                long mobMaxMP = mob.getMaxMp();
                int mpAbsorbed = (int) (mobMaxMP * ((double) mpStolen / 100));
                mob.healMP(-(mpAbsorbed > 500 ? 500 : mpAbsorbed));
                chr.healMP(mpAbsorbed > 500 ? 500 : mpAbsorbed);

                if (!showedEffect) {
                    showedEffect = true;
                    chr.write(UserPacket.effect(Effect.skillUse(getMPEaterSkill().getSkillId(), chr.getLevel(), slv, 0)));
                    chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.skillUse(getMPEaterSkill().getSkillId(), chr.getLevel(), slv, 0)));
                }
            }
        }
    }

    private Skill getMPEaterSkill() {
        Skill skill = null;
        if (chr.hasSkill(FirePoison.MP_EATER_FP)) {
            skill = chr.getSkill(FirePoison.MP_EATER_FP);

        } else if (chr.hasSkill(IceLightning.MP_EATER_IL)) {
            skill = chr.getSkill(IceLightning.MP_EATER_IL);

        } else if (chr.hasSkill(Bishop.MP_EATER_BISHOP)) {
            skill = chr.getSkill(Bishop.MP_EATER_BISHOP);
        }
        return skill;
    }

    // Hit related methods ---------------------------------------------------------------------------------------------

    public void handleMobDebuffSkill(Char chr) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();

        // Elemental Adaptation - FP
        if (chr.hasSkill(FirePoison.ELEMENTAL_ADAPTATION_FP) && tsm.getOptByCTSAndSkill(AntiMagicShell, FirePoison.ELEMENTAL_ADAPTATION_FP) != null) {
            deductEleAdaptationFP();
            tsm.removeAllDebuffs();
        }

        // Elemental Adaptation - IL
        if (chr.hasSkill(IceLightning.ELEMENTAL_ADAPTATION_IL) && tsm.getOptByCTSAndSkill(AntiMagicShell, IceLightning.ELEMENTAL_ADAPTATION_IL) != null) {
            if (tsm.getOption(AntiMagicShell).bOption == 0) {
                Skill skill = chr.getSkill(IceLightning.ELEMENTAL_ADAPTATION_IL);
                SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
                int slv = skill.getCurrentLevel();

                tsm.removeStatsBySkill(skill.getSkillId());
                tsm.removeAllDebuffs();

                Option o = new Option();
                o.nOption = 1;
                o.rOption = skill.getSkillId();
                o.tOption = si.getValue(time, slv);
                o.bOption = 1;
                tsm.putCharacterStatValue(AntiMagicShell, o);
                tsm.sendSetStatPacket();
            } else {
                tsm.removeAllDebuffs();
            }
        }

        // Divine Protection - Bishop
        if (chr.hasSkill(Bishop.DIVINE_PROTECTION) && tsm.getOptByCTSAndSkill(AntiMagicShell, Bishop.DIVINE_PROTECTION) != null) {
            tsm.removeStatsBySkill(Bishop.DIVINE_PROTECTION);
            tsm.sendResetStatPacket();
            tsm.removeAllDebuffs();
        }
    }

    // Elemental Adaptation - FP
    private void deductEleAdaptationFP() {
        if (!chr.hasSkill(FirePoison.ELEMENTAL_ADAPTATION_FP)) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        Skill skill = chr.getSkill(FirePoison.ELEMENTAL_ADAPTATION_FP);
        int slv = skill.getCurrentLevel();
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int proc = si.getValue(prop, slv);

        int stack = tsm.getOption(AntiMagicShell).nOption;
        if (stack > 0) {
            if (Util.succeedProp(proc)) {
                stack--;

                o.nOption = stack;
                o.rOption = FirePoison.ELEMENTAL_ADAPTATION_FP;
                tsm.putCharacterStatValue(AntiMagicShell, o);
                tsm.sendSetStatPacket();
            } else {
                tsm.removeStatsBySkill(FirePoison.ELEMENTAL_ADAPTATION_FP);
                tsm.sendResetStatPacket();
            }
        } else {
            tsm.removeStatsBySkill(FirePoison.ELEMENTAL_ADAPTATION_FP);
            tsm.sendResetStatPacket();
        }
    }

    @Override
    public void stopTimers() {
        if (infinityTimer != null) {
            infinityTimer.cancel(true);
        }
        super.stopTimers();
    }
}

