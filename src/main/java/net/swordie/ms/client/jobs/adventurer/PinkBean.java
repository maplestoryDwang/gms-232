package net.swordie.ms.client.jobs.adventurer;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.MobAttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.enums.AssistType;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.concurrent.ScheduledFuture;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 12/14/2017.
 */
public class PinkBean extends Job {

    public static final int CHILL_OUT_ZZZ = 131001306; //Buff
    public static final int CHILL_OUT_TONGUE_OUT = 131001106; //Buff
    public static final int CHILL_OUT_MYSTERIOUS_COCKTAIL = 131001406; //Buff
    public static final int CHILL_OUT_NOM_NOM_MEAT = 131001206; //Buff
    public static final int CHILL_OUT_HEADSET = 131001506; //Buff

    public static final int INSTANT_GARDEN_POSIE = 131001107; //Area of Effect
    public static final int INSTANT_GARDEN_BREEZY = 131001207; //Area of Effect
    public static final int INSTANT_GARDEN_PRETTY = 131001307; //Summon

    public static final int GO_MINI_BEANS = 131001015; //   ON/OFF buff
    public static final int MINI_BEANS = 131002015; //Summon Info
    public static final int EVERYBODY_HAPPY = 131001009; //Buff
    public static final int LETS_ROLL = 131001004;
    public static final int BLAZING_YOYO = 131001010;
    public static final int BLAZING_YOYO_2 = 131001011;

    private int yoyo;
    private static final int MAX_YOYO_STACK = 8;
    private ScheduledFuture yoyoStackTimer;


    public PinkBean(Char chr) {
        super(chr);
        // TODO yoyo Stack timer
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isPinkBean(id);
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
            if (skillID != MINI_BEANS) {
                summonGoMiniBeans(attackInfo);
            }
        }
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (attackInfo.skillId) {
        }

        super.handleAttack(c, attackInfo);
    }

    private void yoyoIncrement() {
        incrementYoYoStack(1);
    }

    private void costYoYo() {
        Option o = new Option();
        o.nOption = (yoyo - 1);
        chr.getTemporaryStatManager().putCharacterStatValue(PinkbeanYoYoStack, o);
        chr.getTemporaryStatManager().sendSetStatPacket();
    }

    public void incrementYoYoStack(int amount) {
        yoyo += amount;
        yoyo = Math.min(MAX_YOYO_STACK, yoyo);
        //updateYoYo();
    }

    public void yoyoInterval() {
        if (yoyoStackTimer != null && !yoyoStackTimer.isDone()) {
            yoyoStackTimer.cancel(false);
        }
        yoyoStackTimer = EventManager.addFixedRateEvent(this::yoyoInterval, 0, 1000);
    }
/*
    private void updateYoYo() {
        Option o = new Option();
        o.nOption = yoyo;
        chr.getTemporaryStatManager().putCharacterStatValue(PinkbeanYoYoStack, o);
        chr.getTemporaryStatManager().sendSetStatPacket();
    }
*/

    private void summonGoMiniBeans(AttackInfo attackInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o1 = new Option();
        Field field;
        Summon summon;
       /* if (tsm.hasStat(PinkbeanMinibeenMove)) {
            SkillInfo miniBeanInfo = SkillData.getSkillInfoById(GO_MINI_BEANS);
            int slv = (byte) miniBeanInfo.getCurrentLevel();
            int minibeanproc = 100;//   miniBeanInfo.getValue(z, miniBeanInfo.getCurrentLevel());
            for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                if (mob == null) {
                    continue;
                }
                if (Util.succeedProp(minibeanproc)) {
                    summon = Summon.getSummonBy(chr, MINI_BEANS, slv);
                    field = chr.getField();
                    summon.setFlyMob(true);
                    summon.setPosition(mob.getPosition());
                    summon.setMoveAbility(MoveAbility.FlyRandom);
                    field.spawnSummon(summon);
                }
            }
        }*/
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
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        Option o5 = new Option();
        Option o6 = new Option();
        switch (skillId) {
            case CHILL_OUT_TONGUE_OUT:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                o2.nOption = -si.getValue(z, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(subTime, slv);
                Rect rect = new Rect(inPacket.decodeShort(), inPacket.decodeShort()
                        , inPacket.decodeShort(), inPacket.decodeShort());
                for (Life life : chr.getField().getLifesInRect(rect)) {
                    if (life instanceof Mob && ((Mob) life).getHp() > 0) {
                        Mob mob = (Mob) life;
                        MobTemporaryStat mts = mob.getTemporaryStat();
                        if (Util.succeedProp(si.getValue(prop, slv))) {
                            mts.addStatOptions(MobStat.PDR, o1);
                            mts.addStatOptions(MobStat.MDR, o1);
                            mts.addStatOptionsAndBroadcast(chr, MobStat.Darkness, o2);
                        }
                    }
                }
                o3.rOption = skillId;
                o3.nOption = si.getValue(indieExp, slv);
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieEXP, o3);
                break;
            case BLAZING_YOYO:
            case BLAZING_YOYO_2:
                costYoYo();
                break;

            case INSTANT_GARDEN_BREEZY:
                SkillInfo isb = SkillData.getSkillInfoById(INSTANT_GARDEN_BREEZY);
                AffectedArea aa = AffectedArea.getPassiveAA(chr, INSTANT_GARDEN_BREEZY, slv);
                aa.setPosition(chr.getPosition());
                if (chr.isLeft()) {
                    aa.setFlip(false);
                } else {
                    aa.setFlip(true);
                }
                aa.setRect(aa.getPosition().getRectAround(isb.getRects().get(0)));
                aa.setDelay((short) 10);
                chr.getField().spawnAffectedArea(aa);
                break;
            case INSTANT_GARDEN_POSIE:
                SkillInfo isp = SkillData.getSkillInfoById(INSTANT_GARDEN_POSIE);
                AffectedArea aa2 = AffectedArea.getPassiveAA(chr, INSTANT_GARDEN_POSIE, slv);
                aa2.setPosition(chr.getPosition());
                if (chr.isLeft()) {
                    aa2.setFlip(false);
                } else {
                    aa2.setFlip(true);
                }
                aa2.setRect(aa2.getPosition().getRectAround(isp.getRects().get(0)));
                aa2.setDelay((short) 12);
                chr.getField().spawnAffectedArea(aa2);
                break;
            case CHILL_OUT_ZZZ:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indiePadR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePADR, o1);
                o2.rOption = skillId;
                o2.nOption = si.getValue(indieExp, slv);
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieEXP, o2);
                break;
            case CHILL_OUT_MYSTERIOUS_COCKTAIL:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieAsrR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieAsrR, o1);
                o2.rOption = skillId;
                o2.nOption = si.getValue(indieExp, slv);
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieEXP, o2);
                break;
            case CHILL_OUT_NOM_NOM_MEAT:    //Regen 1%MaxHP per second
                o1.nOption = si.getValue(dotHealHPPerSecondR, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(DotHealHPPerSecond, o1);  //DoTHealHPPerSecond  Rate?
                o2.rOption = skillId;
                o2.nOption = si.getValue(indieExp, slv);
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieEXP, o2);
                break;
            case CHILL_OUT_HEADSET:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieAsrR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieAsrR, o1);
                o2.rOption = skillId;
                o2.nOption = si.getValue(indieExp, slv);
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieEXP, o2);
                o3.rOption = skillId;
                o3.nOption = si.getValue(indiePadR, slv);
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePADR, o3);
                break;

            case INSTANT_GARDEN_PRETTY: //Summon
                Summon summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setFlyMob(false);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setAssistType(AssistType.None);
                summon.setAttackActive(false);
                chr.getField().spawnSummonAndRemoveOld(summon);
                break;

         /*   case GO_MINI_BEANS: //  ON/OFF Buff
                o1.nOption = 1;
                o1.rOption = skillId;
                tsm.putCharacterStatValue(PinkbeanMinibeenMove, o1);
                break;*/
            case EVERYBODY_HAPPY:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(y, slv);
                tsm.putCharacterStatValue(NotDamaged, o1);
                o2.rOption = skillId;
                o2.nOption = si.getValue(indieExp, slv);
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieEXP, o2);
                o3.rOption = skillId;
                o3.nOption = si.getValue(indieSpeed, slv);
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieSpeed, o3);
                o4.rOption = skillId;
                o4.nOption = si.getValue(indiePadR, slv);
                o4.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePADR, o4);
                o5.rOption = skillId;
                o5.nOption = si.getValue(indieMadR, slv);
                o5.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMADR, o5);
                break;
        }
        tsm.sendSetStatPacket();
    }


    @Override
    public void stopTimers() {
        if (yoyoStackTimer != null) {
            yoyoStackTimer.cancel(false);
        }
        super.stopTimers();
    }
}