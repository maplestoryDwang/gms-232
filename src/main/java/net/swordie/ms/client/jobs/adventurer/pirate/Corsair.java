package net.swordie.ms.client.jobs.adventurer.pirate;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.GuidedBullet;
import net.swordie.ms.client.character.skills.*;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillChangeConstants;
import net.swordie.ms.enums.AssistType;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.enums.TSIndex;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

public class Corsair extends Pirate {
    public static final int INFINITY_BLAST = 5201008; //Buff
    public static final int SCURVY_SUMMONS_MURAT = 5201012; // Summon & Skill Use Request
    public static final int SCURVY_SUMMONS_VALERIE = 5201012; // Summon
    public static final int SCURVY_SUMMONS_JACK = 5201012; // Summon
    public static final int GUN_BOOSTER = 5201003; //Buff


    public static final int ALL_ABOARD_MURAT = 5210015; //Summon
    public static final int ALL_ABOARD_VALERIE = 5210016; //Summon
    public static final int ALL_ABOARD_JACK = 5210017; //Summon
    public static final int ALL_ABOARD_CUTTER = 5210018; //Summon
    public static final int ROLL_OF_THE_DICE_SAIR = 5211007; //Buff
    public static final int OCTO_CANNON = 5211014; //Summon


    public static final int PARROTARGETTING = 5221015; //Special Attack
    public static final int NAUTILUS_STRIKE_SAIR = 5221013; //Special Attack
    public static final int MAPLE_WARRIOR_SAIR = 5221000; //Buff
    public static final int PIRATE_REVENGE_SAIR = 5220012;
    public static final int ROLL_OF_THE_DICE_SAIR_DD = 5220014;
    public static final int ROLL_OF_THE_DICE_SAIR_ADDITION = 5220044;
    public static final int ROLL_OF_THE_DICE_SAIR_SAVING_GRACE = 5220043;
    public static final int ROLL_OF_THE_DICE_SAIR_ENHANCE = 5220045;
    public static final int HEROS_WILL_SAIR = 5221010;
    public static final int MAJESTIC_PRESENCE = 5220020;
    public static final int AHOY_MATEYS = 5220019;
    public static final int BROADSIDE_BLACK_BARK = 5221022; // Summon
    public static final int BROADSIDE_SHULYNCH = 5220023; // Summon
    public static final int BROADSIDE_DONDLASS = 5220024; // Summon
    public static final int BROADSIDE_JONATHAN = 5220025; // Summon

    public static final int JOLLY_ROGER = 5221018; //Buff
    public static final int QUICKDRAW = 5221021; //Buff
    public static final int RAPID_FIRE = 5221004;
    public static final int BRAIN_SCRAMBLER = 5221016;

    public static final int EPIC_ADVENTURER_SAIR = 5221053;
    public static final int WHALERS_POTION = 5221054;
    public static final int UGLY_BOMB = 5221052;


    // V skills
    public static final int BULLET_BARRAGE = 400051006;
    public static final int TARGET_LOCK = 400051021;
    public static final int NAUTILUS_ASSAULT = 400051040;
    public static final int NAUTILUS_ASSAULT_2 = 400051049;
    public static final int NAUTILUS_ASSAULT_3 = 400051050;
    public static final int DEATH_TRIGGER = 400051073;
    public static final int DEATH_TRIGGER_2 = 400051081;

    private int curDurationIncCount = 0;
    private ScheduledFuture targetLockTimer;
    private boolean canRegisterExtraSkillDeathTrigger = false;

    private static final List<Integer> scurvySummons = new ArrayList<>() {{
        add(SCURVY_SUMMONS_MURAT);
        add(SCURVY_SUMMONS_VALERIE);
        add(SCURVY_SUMMONS_JACK);
    }};

    private static final List<Integer> allAboardSummons = new ArrayList<>() {{
        add(ALL_ABOARD_MURAT);
        add(ALL_ABOARD_VALERIE);
        add(ALL_ABOARD_JACK);
        add(ALL_ABOARD_CUTTER);
    }};

    private static final List<Integer> broadsideSummons = new ArrayList<>() {{
        add(BROADSIDE_BLACK_BARK);
        add(BROADSIDE_SHULYNCH);
        add(BROADSIDE_DONDLASS);
        add(BROADSIDE_JONATHAN);
    }};

    private static final List<Integer> corsairSummons = new ArrayList<>() {{
        add(SCURVY_SUMMONS_MURAT);
        add(SCURVY_SUMMONS_VALERIE);
        add(SCURVY_SUMMONS_JACK);
        add(ALL_ABOARD_MURAT);
        add(ALL_ABOARD_VALERIE);
        add(ALL_ABOARD_JACK);
        add(ALL_ABOARD_CUTTER);
        add(OCTO_CANNON);
        add(BROADSIDE_BLACK_BARK);
        add(BROADSIDE_SHULYNCH);
        add(BROADSIDE_DONDLASS);
        add(BROADSIDE_JONATHAN);
    }};

    public Corsair(Char chr) {
        super(chr);
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isCorsair(id);
    }

    private void scurvySummons() {
        //removeCorsairSummons();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        scurvySummons.forEach(tsm::removeStatsBySkill);
        int randSkillID = Util.getRandomFromCollection(scurvySummons);
        Summon summon = Summon.getSummonBy(chr, randSkillID, chr.getSkillLevel(SCURVY_SUMMONS_MURAT));
        Field field = chr.getField();
        summon.setMoveAbility(MoveAbility.WalkSmart);
        summon.setAssistType(AssistType.Jaguar); // 10
        field.spawnSummonAndRemoveOld(summon);
    }

    private void allAboard() {
        Field field = chr.getField();
        List<Integer> summons = new ArrayList<>() {{
            add(ALL_ABOARD_MURAT);
            add(ALL_ABOARD_VALERIE);
            add(ALL_ABOARD_JACK);
            add(ALL_ABOARD_CUTTER);
        }};
        List<Integer> summonList = new ArrayList<>();
        int randSkillID = Util.getRandomFromCollection(summons);
        summonList.add(randSkillID);
        summons.remove((Object)randSkillID);
        int randSkillID2 = Util.getRandomFromCollection(summons);
        summonList.add(randSkillID2);
        Option o5 = new Option();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        tsm.removeStatsBySkill(AHOY_MATEYS);
        for (int summonSkillID : summonList) {
            Summon summon = Summon.getSummonBy(chr, summonSkillID, chr.getSkillLevel(ALL_ABOARD_MURAT));
            summon.setMoveAbility(MoveAbility.WalkSmart);
            summon.setAssistType(AssistType.Jaguar); // 10
            field.spawnSummonAndRemoveOld(summon);

            if (chr.hasSkill(AHOY_MATEYS)) {
                Skill skill = chr.getSkill(AHOY_MATEYS);
                int slv = skill.getCurrentLevel();
                SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());

                Option o1 = new Option();
                Option o2 = new Option();
                Option o3 = new Option();
                Option o4 = new Option();

                o1.nOption = si.getValue(z, slv);
                o1.rOption = summonSkillID;
                o1.tOption = 120;
                tsm.putCharacterStatValue(EnrageCrDamMin, o1);

                o2.nOption = si.getValue(s, slv);
                o2.rOption = summonSkillID;
                o2.tOption = 120;
                tsm.putCharacterStatValue(IndieCr, o2);

                o3.nOption = si.getValue(x, slv);
                o3.rOption = summonSkillID;
                o3.tOption = 120;
                tsm.putCharacterStatValue(IndieSpeed, o3);

                o4.nOption = si.getValue(y, slv);
                o4.rOption = summonSkillID;
                o4.tOption = 120;
                tsm.putCharacterStatValue(DamageReduce, o4);
            }
        }
        if (chr.hasSkill(AHOY_MATEYS)) {
            Skill skill = chr.getSkill(AHOY_MATEYS);
            int slv = skill.getCurrentLevel();
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            o5.nOption = si.getValue(w, slv);
            o5.rOption = skill.getSkillId();
            o5.tOption = 120;
            tsm.putCharacterStatValue(IndiePAD, o5);
            tsm.sendSetStatPacket();
        }
    }

    public void extendBulletBarrageDuration() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(BulletParty)) {
            return;
        }
        Skill skill = chr.getSkill(BULLET_BARRAGE);
        if (skill == null) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        Option o1 = new Option();

        int maxDurationIncCount = si.getValue(y, slv);
        if (curDurationIncCount < maxDurationIncCount) {
            var remainingTime = tsm.getRemainingTime(BulletParty, skill.getSkillId());
            var tOpt = remainingTime + 1000;

            o1.nOption = 1;
            o1.rOption = skill.getSkillId();
            o1.tOption = (int) tOpt;
            o1.setInMillis(true);
            tsm.putCharacterStatValue(BulletParty, o1, true);
            tsm.sendSetStatPacket();
            curDurationIncCount++;
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
            slv = skill.getCurrentLevel();
            skillID = skill.getSkillId();
        }

        // Quickdraw
        activateQuickdraw();


        // [Corsair] Custom Skill Change
        if (hasHitMobs) {
            allAboardProcNautilusStrike(attackInfo);
            broadsideProcUglyBomb(attackInfo);
        }

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        switch (attackInfo.skillId) {
            case PARROTARGETTING:
                if (attackInfo.mobCount > 0) {
                    net.swordie.ms.client.character.skills.GuidedBullet gb = (GuidedBullet) tsm.getTSBByTSIndex(TSIndex.GuidedBullet);
                    var mobId = attackInfo.mobAttackInfo.get(0).mobId;
                    if (tsm.hasStat(GuidedBullet)) {
                        if (gb.getMobID() == mobId) {
                            return;
                        }
                        tsm.removeStat(GuidedBullet);
                    }

                    gb.setNOption(1);
                    gb.setROption(skillID);
                    gb.setDynamicTermSet(true);
                    gb.setMobID(mobId);
                    tsm.putCharacterStatValue(GuidedBullet, gb.getOption());
                    tsm.sendSetStatPacket();
                }
                break;
            case NAUTILUS_STRIKE_SAIR:
                chr.reduceSkillCoolTime(SCURVY_SUMMONS_MURAT, (int) (chr.getRemainingCoolTime(SCURVY_SUMMONS_MURAT) * 0.5F));
                chr.reduceSkillCoolTime(ALL_ABOARD_MURAT, (int) (chr.getRemainingCoolTime(ALL_ABOARD_MURAT) * 0.5F));
                chr.reduceSkillCoolTime(BROADSIDE_BLACK_BARK, (int) (chr.getRemainingCoolTime(BROADSIDE_BLACK_BARK) * 0.5F));
                chr.reduceSkillCoolTime(ROLL_OF_THE_DICE_SAIR, (int) (chr.getRemainingCoolTime(ROLL_OF_THE_DICE_SAIR) * 0.5F));

                if (chr.getRemainingCoolTime(NAUTILUS_ASSAULT) < 8000) {
                    chr.addSkillCoolTime(NAUTILUS_ASSAULT, 8000);
                }
                break;
            case TARGET_LOCK:
                chr.addSkillCoolTime(attackInfo.skillId, si.getValue(cooltime, slv) * 1000);
                if (targetLockTimer != null && !targetLockTimer.isDone()) {
                    EventManager.stopTimer(targetLockTimer);
                }
                targetLockTimer = EventManager.addEvent(() -> chr.write(UserLocal.skillCooltimeSetM(TARGET_LOCK, 0)), si.getValue(cooltime, slv), TimeUnit.SECONDS);

                tsm.putCharacterStatValue(IndieNotDamaged, new Option(1, TARGET_LOCK, 2));
                tsm.sendSetStatPacket();
                break;
            case DEATH_TRIGGER:
            case DEATH_TRIGGER_2:
                if (canRegisterExtraSkillDeathTrigger) {
                    ExtraSkillInfo esi = new ExtraSkillInfo(DEATH_TRIGGER_2, attackInfo.sui.position, attackInfo.left, 0, 1);
                    chr.write(FieldPacket.registerExtraSkill(skillID, esi));
                }
                break;
        }
        super.handleAttack(c, attackInfo);
    }

    // [Corsair] Custom Skill Change
    private void allAboardProcNautilusStrike(AttackInfo attackInfo) {
        var skillId = attackInfo.skillId;
        for (var mai : attackInfo.mobAttackInfo) {
            Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
            if (mob == null) {
                continue;
            }

            if (mob.hasDamageReflect()) {
                return;
            }
        }
        if (SkillChangeConstants.SCURVY_SUMMON_PROC_NAUTILUS_STRIKE && !chr.hasSkillOnCooldown(NAUTILUS_STRIKE_SAIR) && allAboardSummons.stream().anyMatch(s -> s == skillId) && chr.hasSkill(NAUTILUS_STRIKE_SAIR)) {
            chr.write(UserLocal.userBonusAttackRequest(NAUTILUS_STRIKE_SAIR));
        }
    }

    // [Corsair] Custom Skill Change
    private void broadsideProcUglyBomb(AttackInfo attackInfo) {
        var skillId = attackInfo.skillId;
        for (var mai : attackInfo.mobAttackInfo) {
            Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
            if (mob == null) {
                continue;
            }

            if (mob.hasDamageReflect()) {
                return;
            }
        }
        if (SkillChangeConstants.BROADSIDE_PROC_UGLY_BOMB && !chr.hasSkillOnCooldown(UGLY_BOMB) && broadsideSummons.stream().anyMatch(s -> s == skillId) && chr.hasSkill(UGLY_BOMB)) {
            chr.write(UserLocal.userBonusAttackRequest(UGLY_BOMB));
        }
    }

    private void activateQuickdraw() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!chr.hasSkill(QUICKDRAW)) {
            return;
        }
        Option o = new Option();
        SkillInfo quickdrawInfo = SkillData.getSkillInfoById(QUICKDRAW);
        int slv = 10;
        if (tsm.getOption(QuickDraw).nOption == 2) {
            tsm.removeStatsBySkill(QUICKDRAW);
        } else if (Util.succeedProp(quickdrawInfo.getValue(prop, slv))) {
            o.nOption = 1;
            o.rOption = QUICKDRAW;
            tsm.putCharacterStatValue(QuickDraw, o);
            tsm.sendSetStatPacket();
        }
    }

    @Override
    public int getFinalAttackSkill() {
        if (chr.hasSkill(MAJESTIC_PRESENCE)) {
            return MAJESTIC_PRESENCE;
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
        Option o4 = new Option();
        Option o5 = new Option();
        switch (skillId) {
            case INFINITY_BLAST:
                break;
            case QUICKDRAW:
                o1.nOption = 2;
                o1.rOption = skillId;
                o1.tOption = 10;
                tsm.putCharacterStatValue(QuickDraw, o1);
                o2.rOption = skillId;
                o2.nOption = si.getValue(damR, slv);
                o2.tOption = 10;
                tsm.putCharacterStatValue(IndieDamR, o2);
                break;
            case JOLLY_ROGER:
                o2.rOption = skillId;
                o2.nOption = si.getValue(indiePadR, slv);
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePADR, o2);
                o3.rOption = skillId;
                o3.nOption = si.getValue(indieStance, slv);
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieStance, o3);
                o4.rOption = skillId;
                o4.nOption = si.getValue(indieAsrR, slv);
                o4.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieAsrR, o4);
                o5.rOption = skillId;
                o5.nOption = si.getValue(indieTerR, slv);
                o5.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieTerR, o5);
                break;
            case WHALERS_POTION:
                o2.nOption = si.getValue(w, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(DamageReduce, o2);
                chr.heal(chr.getHPPerc(si.getValue(z, slv)));
                break;
            case OCTO_CANNON: //Stationary, Attacks
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setFlyMob(false);
                summon.setMoveAction((byte) 0);
                summon.setMoveAbility(MoveAbility.Stop);
                if (skillId == Jett.TURRET_DEPLOYMENT) {
                    field.spawnSummon(summon);
                } else {
                    field.spawnSummonAndRemoveOld(summon);
                }
                break;
            case ALL_ABOARD_MURAT:
                allAboard();
                break;
            case SCURVY_SUMMONS_MURAT:
                scurvySummons();
                break;
            case BROADSIDE_BLACK_BARK:
            case BROADSIDE_SHULYNCH:
            case BROADSIDE_DONDLASS:
            case BROADSIDE_JONATHAN:

                var broadsideList = field.getSummons().stream()
                        .filter(s -> s.getChr() == chr &&
                                (s.getSkillID() == BROADSIDE_BLACK_BARK || s.getSkillID() == BROADSIDE_SHULYNCH
                                        || s.getSkillID() == BROADSIDE_DONDLASS || s.getSkillID() == BROADSIDE_JONATHAN))
                        .sorted(Comparator.comparingInt(Summon::getObjectId))
                        .collect(Collectors.toList());

                removeBroadsideSummons(broadsideList); // checks for max broadside summons and if it is reached, remove the first summon

                var newBroadSideSummons = new ArrayList<>(broadsideSummons);
                newBroadSideSummons.removeAll(broadsideList.stream().map(Summon::getSkillID).collect(Collectors.toList()));

                Position position = inPacket.decodePosition();
                boolean isLeft = inPacket.decodeByte() != 0;
                summon = Summon.getSummonBy(chr, Util.getRandomFromCollection(newBroadSideSummons), slv);
                summon.setMoveAction((byte) 5);
                summon.setFlip(!isLeft);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setAssistType(AssistType.CreateB2BodyRequests);
                summon.setPosition(position);
                field.spawnSummon(summon);

                broadsideSummons.forEach(s -> chr.setSkillCooldown(s, slv));
                break;
            case BULLET_BARRAGE:
                var addedDuration = 0;
                if (SkillChangeConstants.BULLET_PARTY_SACRIFICE_SUMMONS) {
                    var sumList = new ArrayList<>(field.getSummons());
                    for (var sum : sumList) {
                        if (sum != null && sum.getChr() == chr && corsairSummons.stream().anyMatch(s -> s == sum.getSkillID())) {
                            addedDuration += SkillChangeConstants.BULLET_PARTY_DURATION_GAIN_PER_SUMMON;
                            tsm.removeStatsBySkill(sum.getSkillID());
                            field.removeSummon(sum);
                        }
                    }

                    chr.resetSkillCoolTime(SCURVY_SUMMONS_MURAT);
                    chr.resetSkillCoolTime(ALL_ABOARD_MURAT);
                    chr.resetSkillCoolTime(OCTO_CANNON);
                    chr.resetSkillCoolTime(BROADSIDE_BLACK_BARK);
                }
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv) + addedDuration;
                tsm.putCharacterStatValue(BulletParty, o1);
                curDurationIncCount = 0;
                break;
        }
        tsm.sendSetStatPacket();
    }

    private void removeBroadsideSummons(List<Summon> broadsideList) {
        var field = chr.getField();

        if (broadsideList.size() >= 2) {
            var removedSummon = broadsideList.get(0);
            if (removedSummon != null) {
                var tsm = chr.getTemporaryStatManager();
                tsm.removeStatsBySkill(removedSummon.getSkillID());
                field.removeSummon(removedSummon);
            }
        }
    }

    @Override
    public int alterCooldownSkill(int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        switch (skillId) {
            case DEATH_TRIGGER:
                if (!SkillChangeConstants.DEATH_TRIGGER_COOLDOWN_DECREASE) {
                    return -1;
                }
                var reducedCd = 0;
                Field field = chr.getField();
                for (var sum : field.getSummons()) {
                    if (sum != null && sum.getChr() == chr && corsairSummons.stream().anyMatch(s -> s == sum.getSkillID())) {
                        reducedCd += SkillChangeConstants.DEATH_TRIGGER_COOLDOWN_DECREASE_PER_SUMMON;
                    }
                }

                var cd = SkillData.getSkillInfoById(skillId).getValue(cooltime, slv) - reducedCd;
                return cd * 1000;
        }

        return super.alterCooldownSkill(skillId, slv, attackInfo, sui, source);
    }

    @Override
    public void handleSkillPrepareStart(Char chr, int skillId, SkillUseInfo sui) {
        if (skillId == NAUTILUS_ASSAULT) {
            if (chr.getRemainingCoolTime(NAUTILUS_STRIKE_SAIR) < 8000) {
                chr.addSkillCoolTime(NAUTILUS_STRIKE_SAIR, 8000);
            }
            chr.setSkillCooldown(skillId, sui.slv);
            var tsm = chr.getTemporaryStatManager();
            var opt = new Option(1, skillId, 3);
            tsm.putCharacterStatValue(IndieNotDamaged, opt, true);
            tsm.sendSetStatPacket();
        }

        if (skillId == DEATH_TRIGGER) {
            chr.applyMpCon(skillId, sui.slv, new AttackInfo(), sui, SkillUseSource.SkillUseRequest);
            canRegisterExtraSkillDeathTrigger = true;
            chr.setSkillCooldown(skillId, sui.slv);
        }

        super.handleSkillPrepareStart(chr, skillId, sui);
    }

    @Override
    public void handleSkillPrepareStop(Char chr, int skillId, SkillUseInfo sui) {
        if (skillId == DEATH_TRIGGER) {
            canRegisterExtraSkillDeathTrigger = false;
        }

        super.handleSkillPrepareStop(chr, skillId, sui);
    }

    @Override
    public int alterMpCon(int mpCon, int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        if (skillId == BULLET_BARRAGE) {
            return -1;
        }

        return super.alterMpCon(mpCon, skillId, slv, attackInfo, sui, source);
    }

    // Hit related methods ---------------------------------------------------------------------------------------------


    @Override
    public void stopTimers() {
        EventManager.stopTimer(targetLockTimer);
        super.stopTimers();
    }

    @Override
    public void onWarp(Field oldField, Field newField) {
        super.onWarp(oldField, newField);
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(GuidedBullet)) {
            tsm.removeStat(GuidedBullet);
        }
        if (chr.hasSkill(Corsair.TARGET_LOCK) && !chr.hasSkillOnCooldown(Corsair.TARGET_LOCK)) {
            chr.write(UserLocal.skillCooltimeSetM(Corsair.TARGET_LOCK, 0)); // needs to be sent, to reset the passive effect
        }
    }
}
