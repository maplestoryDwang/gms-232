package net.swordie.ms.client.jobs.anima;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.items.BodyPart;
import net.swordie.ms.client.character.skills.*;
import net.swordie.ms.client.character.skills.atom.secondatom.SecondAtom;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.Effect;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.connection.packet.UserRemote;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.AssistType;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.enums.Stat;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 26/11/2021.
 *
 * @author Asura
 */
public class Lara extends Job {
    public static final int WIND_SWING_FLY_SKILLID = 80003059;

    // Link Skill
    public static final int NATURE_FRIEND_ORIGIN = 160010001; // Link Skill
    public static final int NATURE_FRIEND_LINKED = 80003058; // Link Skill
    public static final int NATURE_FRIEND_LINKED_BUFF = 80003070; // Link Skill Buff

    // 0th Job
    public static final int SPIRIT_AFFINITY = 160010000;

    // 1st Job
        // Passive
    public static final int MOUNTAIN_KID_PASSIVE = 162000003;
    public static final int RESPONSE = 162000006;
        // Active
    public static final int ESSENCE_SPRINKLE = 162001000;
    public static final int JUMP_FOR_JOY = 162001001; // Flash Jump
    public static final int LEAP_UP = 162001002; // Up Jump
    public static final int MOUNTAIN_KID_ACTIVE = 162001004;
    public static final int PEERLESS_MOUNTAIN = 162001005; // ON/OFF (CTS Val: 686)


    // 2nd Job
        // Passive
    public static final int ERUPTION_HEAVING_RIVER_PASSIVE = 162100002;
    public static final int ERUPTION_WHIRLWIND_PASSIVE = 162100005;
    public static final int ERUPTION_SUNRISE_WELL_PASSIVE = 162100008;
    public static final int WAND_MASTERY = 162100014;
    public static final int FORTUNE_FITNESS = 162100015;
        // Active
    public static final int DRAGON_VEIN_READING = 162101000; // (CTS Val: 684)
    public static final int DRAGON_VEIN_ERUPTION = 162101001;
    public static final int ERUPTION_HEAVING_RIVER_ACTIVE_1 = 162101003; // Summon
    public static final int ERUPTION_HEAVING_RIVER_ACTIVE_2 = 162101004;
    public static final int ERUPTION_WHIRLWIND_ACTIVE_1 = 162101006; // Summon
    public static final int ERUPTION_WHIRLWIND_ACTIVE_2 = 162101007;
    public static final int ERUPTION_SUNRISE_WELL_ACTIVE_1 = 162101009; // Normal Attack
    public static final int ERUPTION_SUNRISE_WELL_ACTIVE_2 = 162101010; // Affected Area (creates second Atoms)
    public static final int ERUPTION_SUNRISE_WELL_ACTIVE_3 = 162101011; // SecondAtom
    public static final int MOUNTAIN_SEEDS = 162101012; // Summon
    public static final int WAND_BOOSTER = 162101013;


    // 3rd Job
        // Passive
    public static final int DRAGON_VEIN_ECHO = 162110007;
    public static final int IMMACULATE_THOUGHT = 162110008;
    public static final int GEOMANCY = 162110009;
        // Active
    public static final int MANIFESTATION_WIND_SWING_ACTIVE_1 = 162111000; // Affected Area
    public static final int MANIFESTATION_WIND_SWING_ACTIVE_2 = 162111001; // Buff Info
    public static final int MANIFESTATION_WHERE_THE_RIVER_COURSES_ACTIVE_1 = 162111002; // SecondAtom
    public static final int MANIFESTATION_WHERE_THE_RIVER_COURSES_ACTIVE_2 = 162111010; // Contains Counter Number
    public static final int MANIFESTATION_SUNLIGHT_FILLED_GROUND_ACTIVE_1 = 162111003; // Affected Area
    public static final int MANIFESTATION_SUNLIGHT_FILLED_GROUND_ACTIVE_2 = 162111004; // Buff Info
    public static final int WAKEUP_CALL = 162111005;
    public static final int DRAGON_VEIN_TRACES = 162111006;


    // 4th Job
        // Passive
    public static final int ABSORPTION_RIVER_PUDDLE_DOUSE_PASSIVE = 162120002;
    public static final int ABSORPTION_FIERCE_WIND_PASSIVE = 162120005;
    public static final int ABSORPTION_SUNLIT_GRAIN_PASSIVE = 162120008;
    public static final int NATURE_MASTER = 162120011;
    public static final int BEST_FRIEND = 162120020;
    public static final int ADVANCED_WAND_MASTERY = 162120025;
    public static final int IN_DEPTH_GEOMANCY = 162120026;
    public static final int INSIGHT = 162120027;
    public static final int SOB = 162120028;
        // Active
    public static final int DRAGON_VEIN_ABSORPTION = 162121000;
    public static final int DRAGON_VEIN_CONVERSION = 162121001;
    public static final int ABSORPTION_RIVER_PUDDLE_DOUSE_ACTIVE_1 = 162121003;
    public static final int ABSORPTION_RIVER_PUDDLE_DOUSE_ACTIVE_2 = 162121004;
    public static final int ABSORPTION_FIERCE_WIND_ACTIVE_1 = 162121006;
    public static final int ABSORPTION_FIERCE_WIND_ACTIVE_2 = 162121007;
    public static final int ABSORPTION_SUNLIT_GRAIN_ACTIVE_1 = 162121009;
    public static final int ABSORPTION_SUNLIT_GRAIN_ACTIVE_2 = 162121010; // Second Atom & Called through extraSkillinfo
    public static final int ERUPTION_HEAVING_RIVER_UPGRADE_4_ACTIVE_1 = 162121012;
    public static final int ERUPTION_HEAVING_RIVER_UPGRADE_4_ACTIVE_2 = 162121013;
    public static final int ERUPTION_HEAVING_RIVER_UPGRADE_4_ACTIVE_3 = 162121014;
    public static final int ERUPTION_WHIRLWIND_UPGRADE_4_ACTIVE_1 = 162121015;
    public static final int ERUPTION_WHIRLWIND_UPGRADE_4_ACTIVE_2 = 162121016;
    public static final int ERUPTION_SUNRISE_WELL_UPGRADE_4_ACTIVE_1 = 162121017;
    public static final int ERUPTION_SUNRISE_WELL_UPGRADE_4_ACTIVE_2 = 162121018;
    public static final int ERUPTION_SUNRISE_WELL_UPGRADE_4_ACTIVE_3 = 162121019; // SecondAtom
    public static final int ESSENCE_SPRINKLE_UPGRADE_4 = 162121021;
    public static final int MOUNTAIN_EMBRACE = 162121022;
    public static final int ANIMA_WARRIOR = 162121023;
    public static final int ANIMA_HERO_WILL = 162121024;


    // Hypers
        // Passive
    public static final int ERUPTION_ABSORPTION_GUARD_BREAK = 162120031;
    public static final int ERUPTION_ABSORPTION_GUARD_REINFORCE = 162120032;
    public static final int ERUPTION_ABSORPTION_GUARD_BOSS_RUSH = 162120033;
    public static final int ESSENCE_SPRINKLE_BOSS_RUSH = 162120034;
    public static final int WAKEUP_CALL_COOLDOWN_CUTTER = 162120035; // Should automatically be handled
    public static final int MOUNTAIN_SEEDS_REINFORCE = 162120036;
    public static final int DRAGON_VEIN_ECHO_ENHANCE = 162120037;
    public static final int MOUNTAIN_EMBRACE_EXTRA_SHIELD = 162120038;
    public static final int DRAGON_VEIN_ENHANCE = 162120039;
        // Active
    public static final int VINE_COIL = 162121041; // 140
    public static final int UNCONSTRAINED_DRAGON_VEIN = 162121042; // 160
    public static final int ARBOR_AWAY_1 = 162121043; // 190
    public static final int ARBOR_AWAY_2 = 162121044; // 190

    // V skills
    public static final int BIG_STRETCH = 400021122;
    public static final int LANDS_CONNECTION = 400021123;
    public static final int LANDS_CONNECTION_PASSIVE_1 = 400021124;
    public static final int LANDS_CONNECTION_PASSIVE_2 = 400021125;
    public static final int LANDS_CONNECTION_PASSIVE_3 = 400021126;
    public static final int LANDS_CONNECTION_PASSIVE_4 = 400021127;
    public static final int LANDS_CONNECTION_PASSIVE_5 = 400021128;
    public static final int SURGING_ESSENCE = 400021129;
    public static final int WINDING_MOUNTAIN_RIDGE_1 = 400021130;
    public static final int WINDING_MOUNTAIN_RIDGE_2 = 400021131;


    private static final int[] addedSkills = new int[]{
            SPIRIT_AFFINITY
    };

    public Lara(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id)) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setCurrentLevel(skill.getMasterLevel());
                    chr.addSkill(skill);
                }
            }
        }
    }

    private int lastVeinInteractionSkill = -1;

    private ScheduledFuture mountainSeedTimer;
    private ScheduledFuture dragonVeinTraceTimer;
    private ScheduledFuture unconstrainedDragonVeinTimer;

    private ScheduledFuture mountainEmbraceTimer;
    private ScheduledFuture dragonVeinEchoTimer;

    private static final int[] skillUseReqBeforeCommand = new int[]{
            DRAGON_VEIN_ERUPTION,

            ERUPTION_WHIRLWIND_ACTIVE_1,
            ERUPTION_SUNRISE_WELL_ACTIVE_1,
            ERUPTION_HEAVING_RIVER_ACTIVE_1,

            ERUPTION_HEAVING_RIVER_UPGRADE_4_ACTIVE_1,
            ERUPTION_WHIRLWIND_UPGRADE_4_ACTIVE_1,
            ERUPTION_SUNRISE_WELL_UPGRADE_4_ACTIVE_1,
    };

    private boolean isSkillUseReqBeforeCommand(int skillId) {
        return Arrays.stream(skillUseReqBeforeCommand).anyMatch(s -> s == skillId);
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isLara(id);
    }

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

        //
        // Mountain Kid
        // Passive Register Extra Skill Proc
        //
        mountainKidPassive(attackInfo);

        //
        // Absorption Skill Procs
        //
        manageAbsorptionProc(attackInfo);

        switch (attackInfo.skillId) {

            case VINE_COIL:
                for (var mai : attackInfo.mobAttackInfo) {
                    if (mai.mob == null) {
                        return;
                    }

                    var stunDuration = SkillConstants.getBindDuration(mai.mob.getMaxHp(), mai.totalDamage, si.getValue(time, slv));

                    if (mai.mob != null) {
                        mai.mob.getTemporaryStat()
                                .addStatOptionsAndBroadcast(chr, MobStat.Stun, new Option(1, skillID, stunDuration));
                    }
                }
                break;
        }
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
        Option o2 = new Option();
        Option o3 = new Option();

        if (isSkillUseReqBeforeCommand(skillId)) {
            lastVeinInteractionSkill = skillId;
        }

        SecondAtom vein = null;
        if (skillUseInfo.targetPosition != null) {
            vein = chr.getSecondAtoms().values().stream().filter(sa -> sa.getDataIndex() == 20 && skillUseInfo.targetPosition.getRectAround(new Rect(-20, -20, 20, 20)).hasPositionInside(sa.getPosition())).findFirst().orElse(null);
        }

        var field = chr.getField();
        switch (skillId) {

            // region 1st Job Skills Handling
            case PEERLESS_MOUNTAIN:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                tsm.putCharacterStatValue(PeerlessMountain, o1);
                break;
            // endregion

            // region 2nd Job Skills Handling
            case DRAGON_VEIN_READING:
                if (tsm.hasStat(DragonVeinReading)) {
                    tsm.removeStatsBySkill(skillId);
                } else {
                    o1.nOption = 1;
                    o1.rOption = skillId;
                    tsm.putCharacterStatValue(DragonVeinReading, o1);
                }
                break;

            case WAND_BOOSTER:
                tsm.putCharacterStatValue(IndieBooster, new Option(si.getValue(x, slv), skillId, si.getValue(time, slv)));
                break;

            case MOUNTAIN_SEEDS:
                var position = inPacket.decodePosition();
                var isLeft = inPacket.decodeByte() != 0;
                inPacket.decodeByte();
                inPacket.decodeByte();
                var dumpAll = inPacket.decodeByte() != 0;

                var count = 1;
                if (dumpAll) {
                    count = tsm.getOption(MountainSeeds).nOption;
                }
                for (var i = 0; i < count; i++) {
                    spawnMountainSeed(position);
                }
                break;

            case ERUPTION_SUNRISE_WELL_ACTIVE_1:
                tsm.removeStat(AbsorptionSun);

                var tileSI = SkillData.getSkillInfoById(ERUPTION_SUNRISE_WELL_ACTIVE_2);
                var aa = AffectedArea.getPassiveAA(chr, ERUPTION_SUNRISE_WELL_ACTIVE_2, chr.getSkillLevel(ERUPTION_SUNRISE_WELL_PASSIVE));
                aa.setPosition(skillUseInfo.targetPosition);
                aa.setRect(aa.getPosition().getRectAround(tileSI.getFirstRect()));
                aa.activateTimer(1000, 3000);
                field.spawnAffectedAreaAndRemoveOld(aa);
                break;
            // endregion

            // region 3rd Job Skills Handling
            case MANIFESTATION_SUNLIGHT_FILLED_GROUND_ACTIVE_1:
                if (vein != null) {
                    manifestSunVein(vein);
                }
                break;

            case MANIFESTATION_WIND_SWING_ACTIVE_1:
                if (vein != null) {
                    manifestWindVein(vein);
                }
                break;

            case MANIFESTATION_WHERE_THE_RIVER_COURSES_ACTIVE_1:
                var opt = tsm.getOptByCTSAndSkill(IndieSummon, MANIFESTATION_WHERE_THE_RIVER_COURSES_ACTIVE_1);
                if (opt == null || opt.nOption == 2) {
                    if (vein != null) {
                        // remove previous courses
                        chr.removeSecondAtom(chr.getSecondAtoms().values().stream().filter(sa -> sa.getDataIndex() == 31 || sa.getDataIndex() == 32).map(sa -> sa.getObjectId()).collect(Collectors.toList()));
                        manifestWhereTheRiverCoursesFirst(vein);
                    }
                } else if (opt.nOption == 1) {
                    var firstVein = chr.getSecondAtoms().values().stream().filter(sa -> sa.getDataIndex() == 31).findFirst().orElse(null);
                    if (firstVein != null) {
                        position = skillUseInfo.targetPosition;
                        manifestWhereTheRiverCoursesSecond(firstVein.getObjectId(), position);
                    }
                }
                break;

            case WAKEUP_CALL:
                if (vein != null) {
                    wakeupCall(si, slv, vein, false);
                }
                break;

            case DRAGON_VEIN_TRACES:
                var currentStack = tsm.getOption(DragonVeinTrace).nOption;
                tsm.putCharacterStatValue(DragonVeinTrace, new Option(currentStack - 1, skillId, 0), true);
                break;
            // endregion

            // region 4th Job Skill Handling
            case DRAGON_VEIN_ABSORPTION:
                break;

            case ABSORPTION_RIVER_PUDDLE_DOUSE_ACTIVE_1:
                si = SkillData.getSkillInfoById(skillId);
                slv = chr.getSkillLevel(ABSORPTION_RIVER_PUDDLE_DOUSE_PASSIVE);

                tsm.putCharacterStatValue(AbsorptionWater, new Option(1, skillId, si.getValue(time, slv)), true);

                // Cancel eruption
                field.removeSummon(ERUPTION_HEAVING_RIVER_ACTIVE_1, chr.getId());
                field.removeSummon(ERUPTION_HEAVING_RIVER_UPGRADE_4_ACTIVE_1, chr.getId());
                break;
            case ABSORPTION_FIERCE_WIND_ACTIVE_1:
                si = SkillData.getSkillInfoById(skillId);
                slv = chr.getSkillLevel(ABSORPTION_FIERCE_WIND_PASSIVE);

                tsm.putCharacterStatValue(AbsorptionWind, new Option(1, skillId, si.getValue(time, slv)), true);

                // Cancel eruption
                field.removeSummon(ERUPTION_WHIRLWIND_ACTIVE_1, chr.getId());
                field.removeSummon(ERUPTION_WHIRLWIND_UPGRADE_4_ACTIVE_1, chr.getId());
                break;
            case ABSORPTION_SUNLIT_GRAIN_ACTIVE_1:
                si = SkillData.getSkillInfoById(skillId);
                slv = chr.getSkillLevel(ABSORPTION_SUNLIT_GRAIN_PASSIVE);

                tsm.putCharacterStatValue(AbsorptionSun, new Option(1, skillId, si.getValue(time, slv)), true);

                // Cancel eruption
                field.removeAffectedAreas(ERUPTION_SUNRISE_WELL_ACTIVE_1, chr.getId());
                field.removeAffectedAreas(ERUPTION_SUNRISE_WELL_ACTIVE_2, chr.getId());
                field.removeAffectedAreas(ERUPTION_SUNRISE_WELL_UPGRADE_4_ACTIVE_1, chr.getId());
                field.removeAffectedAreas(ERUPTION_SUNRISE_WELL_UPGRADE_4_ACTIVE_2, chr.getId());
                break;
            case ABSORPTION_SUNLIT_GRAIN_ACTIVE_2:
                var targetList = new ArrayList<Integer>();
                var size = inPacket.decodeByte();
                for (int i = 0; i < size; i++) {
                    targetList.add(inPacket.decodeInt());
                }
                si = SkillData.getSkillInfoById(skillId);
                slv = chr.getSkillLevel(ABSORPTION_SUNLIT_GRAIN_PASSIVE);
                var createDelay = si.getValue(w, slv); // create delay
                var createDelayIncrement = si.getValue(u, slv);

                var saList = new ArrayList<SecondAtom>();
                for (var sai : si.getSecondAtomInfos()) {
                    var sa = SecondAtom.createFromInfo(chr, skillId, sai);
                    var target = Util.getRandomFromCollection(targetList);
                    sa.setTargetId(targetList.size() <= 0 ? 0 : target);
                    position = sai.getPosition();
                    if (skillUseInfo.isLeft) {
                        position.setX(-position.getX());
                    }
                    sa.setPosition(skillUseInfo.targetPosition.add(position));
                    sa.setCreateDelay(createDelay);
                    sa.setEnableDelay(createDelay + sai.getEnableDelay());
                    sa.setCustomList(new ArrayList<>() {{ add(skillUseInfo.targetPosition.getX()); add(skillUseInfo.targetPosition.getY()); }});
                    saList.add(sa);

                    createDelay += createDelayIncrement;
                }
                if (saList.size() > 0) {
                    chr.spawnSecondAtoms(saList);
                }
                var eff = Effect.skillUse(skillId, chr.getLevel(), slv, 0);
                eff.setArg5(skillUseInfo.isLeft ? 1 : 0);
                eff.setArg6(skillUseInfo.targetPosition.getX());
                eff.setArg7(skillUseInfo.targetPosition.getY());
                chr.write(UserPacket.effect(eff));
                chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), eff), chr);
                chr.addSkillCoolTime(ABSORPTION_SUNLIT_GRAIN_ACTIVE_2, SkillData.getSkillInfoById(ABSORPTION_SUNLIT_GRAIN_ACTIVE_1).getValue(u, chr.getSkillLevel(ABSORPTION_SUNLIT_GRAIN_PASSIVE)));
                break;

            case ERUPTION_SUNRISE_WELL_UPGRADE_4_ACTIVE_1:
                tileSI = SkillData.getSkillInfoById(ERUPTION_SUNRISE_WELL_UPGRADE_4_ACTIVE_2);
                aa = AffectedArea.getPassiveAA(chr, ERUPTION_SUNRISE_WELL_UPGRADE_4_ACTIVE_2, chr.getSkillLevel(NATURE_MASTER));
                aa.setPosition(skillUseInfo.targetPosition);
                aa.setRect(aa.getPosition().getRectAround(tileSI.getFirstRect()));
                aa.activateTimer(1000, 2000);
                field.spawnAffectedAreaAndRemoveOld(aa);
                break;
            // endregion

            // region Hyper Skill Handling
            case UNCONSTRAINED_DRAGON_VEIN:
                createDragonVein(skillUseInfo.lifeObjectId, VeinType.DRAGON_VEIN.getVal(), skillUseInfo.targetPosition, skillUseInfo.unk);

                currentStack = tsm.getOption(UnconstrainedDragonVein).nOption;
                tsm.putCharacterStatValue(UnconstrainedDragonVein, new Option(currentStack - 1, skillId, 0), true);
                break;
            case ARBOR_AWAY_1:
                aa = AffectedArea.getPassiveAA(chr, skillId, slv);
                aa.activateTimer(2000, 2000);
                field.spawnAffectedAreaAndRemoveOld(aa);
                break;
            // endregion

            // region V Skill Handling
            case BIG_STRETCH:
                if (vein != null) {
                    wakeupCall(si, slv, vein, true);
                }
                break;

            case LANDS_CONNECTION:
                var pos = skillUseInfo.targetPosition;
                var left = skillUseInfo.isLeft;

                var esiList = new ArrayList<ExtraSkillInfo>();
                for (var esiMap : si.getExtraSkillInfo()) {
                    for (var entry : esiMap.entrySet()) {
                        var extraSkillId = entry.getKey();
                        var delay = entry.getValue();
                        esiList.add(new ExtraSkillInfo(extraSkillId, pos, left, delay, 0));
                    }
                }

                chr.write(FieldPacket.registerExtraSkill(skillId, esiList));
                break;
            // endregion
        }

        tsm.sendSetStatPacket();
    }

    private void spawnMountainSeed(Position position) {
        var tsm = chr.getTemporaryStatManager();
        var field = chr.getField();

        var skillId = MOUNTAIN_SEEDS;
        var slv = chr.getSkillLevel(MOUNTAIN_SEEDS);

        var currentStack = tsm.getOption(MountainSeeds).nOption;

        if (currentStack <= 0) {
            return;
        }

        var seedList = field.getSummons().stream().filter(s -> s.getChr() == chr && s.getSkillID() == skillId).sorted(Comparator.comparingInt(Life::getObjectId)).collect(Collectors.toList());
        if (seedList.size() == 4) {
            var removedSeed = seedList.get(0);
            field.removeSummon(removedSeed);
        }

        var summon = Summon.getSummonByNoCTS(chr, skillId, slv);
        summon.setMoveAbility(MoveAbility.WalkRandom);
        summon.setPosition(position);
        field.spawnSummon(summon);

        tsm.putCharacterStatValue(MountainSeeds, new Option(currentStack - 1, skillId, 0), true);
        tsm.sendSetStatPacket();
    }

    @Override
    public void handleKeyDownSkill(Char chr, int skillID, InPacket inPacket) {
        switch (skillID) {
            case MOUNTAIN_EMBRACE:
                var si = SkillData.getSkillInfoById(skillID);
                var slv = chr.getSkillLevel(skillID);
                var tsm = chr.getTemporaryStatManager();
                var o1 = new Option();
                var o2 = new Option();
                var o3 = new Option();
                var o4 = new Option();
                var o5 = new Option();
                var o6 = new Option();

                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = 8;
                o1.xOption = 8000;
                tsm.putCharacterStatValue(AntiMagicShell, o1, true);

                o2.nOption = 1;
                o2.rOption = skillID;
                o2.tOption = 8;
                tsm.putCharacterStatValue(AT_DreamShangriLa, o2, true);

                o3.nOption = -si.getValue(x, slv);
                o3.rOption = skillID;
                o3.tOption = 8;
                tsm.putCharacterStatValue(IndieHitDamageInclHPR, o3, true);

                o4.nOption = 1;
                o4.rOption = skillID;
                o4.tOption = 8;
                tsm.putCharacterStatValue(IndieFloating, o4, true);

                if (chr.hasSkill(MOUNTAIN_EMBRACE_EXTRA_SHIELD)) {
                    var shieldSI = SkillData.getSkillInfoById(MOUNTAIN_EMBRACE_EXTRA_SHIELD);
                    var shieldHPR = shieldSI.getValue(x, 1);
                    o5.nOption = 1;
                    o5.rOption = MOUNTAIN_EMBRACE_EXTRA_SHIELD;
                    o5.tOption = 8;
                    tsm.putCharacterStatValue(IndieFloating, o5, true);

                    var val = chr.getHPPerc(shieldHPR);
                    o6.nOption = val;
                    o6.rOption = MOUNTAIN_EMBRACE_EXTRA_SHIELD;
                    o6.tOption = 9;
                    tsm.putCharacterStatValue(IndieProtectiveShield, o6, true);
                    EventManager.stopTimer(mountainEmbraceTimer);
                    mountainEmbraceTimer = EventManager.addFixedRateEvent(() -> increaseMountainEmbraceShield(val), 1, 1, TimeUnit.SECONDS);
                }

                tsm.sendSetStatPacket();
                break;
        }
        super.handleKeyDownSkill(chr, skillID, inPacket);
    }

    private void increaseMountainEmbraceShield(int shieldInc) {
        var tsm = chr.getTemporaryStatManager();
        var opt = tsm.getOptByCTSAndSkill(IndieProtectiveShield, MOUNTAIN_EMBRACE_EXTRA_SHIELD);

        if (opt == null) {
            EventManager.stopTimer(mountainEmbraceTimer);
            return;
        }

        opt.nOption += shieldInc;
        tsm.updateBuff(IndieProtectiveShield, opt);
    }

    @Override
    public void handleCancelKeyDownSkill(Char chr, int skillID) {
        var tsm = chr.getTemporaryStatManager();
        switch (skillID) {
            case MOUNTAIN_EMBRACE:
                EventManager.stopTimer(mountainEmbraceTimer);

                int remainingDuration = (int) (tsm.getRemainingTime(IndieHitDamageInclHPR, MOUNTAIN_EMBRACE) / 1000);
                if (remainingDuration > 0) {
                    chr.reduceSkillCoolTime(skillID, remainingDuration * 3_500); // 3.5 seconds reduction to CD per second remaining
                }

                var opt = tsm.getOptByCTSAndSkill(IndieProtectiveShield, MOUNTAIN_EMBRACE_EXTRA_SHIELD);
                if (opt != null) {
                    opt.tOption = 1000;
                    opt.setInMillis(true);
                    tsm.updateBuffExtendTime(IndieProtectiveShield, opt);
                }
                break;
        }

        super.handleCancelKeyDownSkill(chr, skillID);
    }

    @Override
    public void handleRemoveCTS(CharacterTemporaryStat cts, Option option) {

        if (cts == IndieSummon && option.rOption == MANIFESTATION_WHERE_THE_RIVER_COURSES_ACTIVE_1) {
            var manifestations = chr.getSecondAtoms().values().stream().filter(sa -> sa.getDataIndex() == 30 || sa.getDataIndex() == 31).map(sa -> sa.getObjectId()).collect(Collectors.toList());
            chr.removeSecondAtom(manifestations);
        }

        super.handleRemoveCTS(cts, option);
    }

    @Override
    public int alterCooldownSkill(int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        switch (skillId) {
            case BIG_STRETCH:
                if (sui.unk > 0) {
                    var si = SkillData.getSkillInfoById(skillId);
                    var maxVeins = si.getValue(u, slv);
                    var cdReduction = si.getValue(w, slv) * 1000;
                    var diff = Math.max(0, Math.min(maxVeins - sui.unk, maxVeins));
                    var totalCdReduction = diff * cdReduction;

                    var skillCooltime = si.getValue(cooltime, slv) * 1000;
                    return skillCooltime - totalCdReduction;
                }
                break;
        }
        return super.alterCooldownSkill(skillId, slv, attackInfo, sui, source);
    }

    @Override
    public BypassCooldownCheckType canBypassCooldownCheck(int skillId, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        switch (skillId) {
            case MANIFESTATION_WHERE_THE_RIVER_COURSES_ACTIVE_1:
                var tsm = chr.getTemporaryStatManager();
                var opt = tsm.getOptByCTSAndSkill(IndieSummon, MANIFESTATION_WHERE_THE_RIVER_COURSES_ACTIVE_1);
                if (opt != null && opt.nOption == 1) {
                    return BypassCooldownCheckType.BypassCheckAndCooldown;
                }
                break;

            case BIG_STRETCH:
                if (sui.unk <= 0) {
                    return BypassCooldownCheckType.BypassCheckAndCooldown;
                }
                break;
        }

        return super.canBypassCooldownCheck(skillId, attackInfo, sui, source);
    }

    @Override
    public boolean handleSecondAtomRemoveRequest(int objectId) {
        var waterManifestationVein = chr.getSecondAtomById(objectId);
        if (waterManifestationVein != null && waterManifestationVein.getDataIndex() == 31 && chr.getSecondAtoms().values().stream().anyMatch(sa -> sa.getDataIndex() == 32)) {
            return false;
        }
        if (waterManifestationVein != null && waterManifestationVein.getDataIndex() == 32) {
            var waterManifestationVeinFirst = chr.getSecondAtoms().values().stream().filter(sa -> sa.getDataIndex() == 31).findFirst().orElse(null);
            if (waterManifestationVeinFirst != null) {
                chr.removeSecondAtom(Collections.singletonList(waterManifestationVeinFirst.getObjectId()));
            }
            return true;
        }
        return super.handleSecondAtomRemoveRequest(objectId);
    }

    // region Mountain Kid
    public void mountainKidPassive(AttackInfo attackInfo) {
        if (attackInfo.skillId != ESSENCE_SPRINKLE_UPGRADE_4 && attackInfo.skillId != ESSENCE_SPRINKLE) {
            return;
        }
        var skill = chr.getSkill(MOUNTAIN_KID_PASSIVE);
        if (skill == null || attackInfo.mobCount <= 0) {
            return;
        }

        var si = SkillData.getSkillInfoById(MOUNTAIN_KID_PASSIVE);
        var slv = skill.getCurrentLevel();

        var prop = si.getValue(SkillStat.prop, slv);

        if (Util.succeedProp(prop)) {
            doMountainKidProc(attackInfo.skillId, attackInfo.mobAttackInfo.get(0).pos1);
        }
    }

    public void doMountainKidProc(int essenceSprinkle, Position position) {
        var esi = new ExtraSkillInfo(MOUNTAIN_KID_ACTIVE, position, Util.randBoolean(), 0, 1);
        chr.write(FieldPacket.registerExtraSkill(essenceSprinkle, esi));
    }
    // endregion

    // region Dragon Vein Reading
    public void createDragonVein(int veinIncrement, int veinType, Position position, int unk) {
        var sa = new SecondAtom();

        // SecondAtom Owner Info
        sa.setObjectId(chr.getNewSecondAtomKey());
        sa.setChrId(chr.getId());
        sa.setKey(1);

        // SecondAtom Info
        sa.setSource(DRAGON_VEIN_READING);
        sa.setDataIndex(20);
        sa.setPosition(position);
        sa.setUnk(unk);
        sa.setCustomList(new ArrayList<>() {{ add(veinType); add(veinIncrement); }});

        // Broadcast Info
        sa.setLocalOnly(true);

        chr.spawnSecondAtoms(Collections.singletonList(sa));
    }

    public VeinType getVeinTypeByVein(SecondAtom vein) {
        if (vein == null) {
            return null;
        }
        if (vein.getCustomList() == null || vein.getCustomList().size() <= 0) {
            return null;
        }
        return VeinType.getByVal(vein.getCustomList().get(0));
    }

    public void consumeDragonVein() {
        // Dragon Vein Echo
        dragonVeinEcho();
    }
    // endregion

    public void secondAtomCommandRequest(SecondAtom vein) {
        var tsm = chr.getTemporaryStatManager();
        if (lastVeinInteractionSkill == 0) {
            return;
        }

        if (vein.getCustomList() == null || vein.getCustomList().size() <= 0) {
            return;
        }

        var veinType = VeinType.getByVal(vein.getCustomList().get(0));
        switch (lastVeinInteractionSkill) {
            case ERUPTION_HEAVING_RIVER_ACTIVE_1:
                eruptWaterVein(vein);
                tsm.removeStat(AbsorptionWater);
                break;

            case ERUPTION_WHIRLWIND_ACTIVE_1:
                eruptWindVein(vein);
                tsm.removeStat(AbsorptionWind);
                break;

            case ERUPTION_SUNRISE_WELL_ACTIVE_1:
                eruptSunVein(vein);
                tsm.removeStat(AbsorptionSun);
                break;

            case ERUPTION_HEAVING_RIVER_UPGRADE_4_ACTIVE_1:
                eruptWaterVeinUpgrade(vein);
                tsm.removeStat(AbsorptionWater);
                break;

            case ERUPTION_WHIRLWIND_UPGRADE_4_ACTIVE_1:
                eruptWindVeinUpgrade(vein);
                tsm.removeStat(AbsorptionWind);
                break;

            case ERUPTION_SUNRISE_WELL_UPGRADE_4_ACTIVE_1:
                eruptSunVeinUpgrade(vein);
                tsm.removeStat(AbsorptionSun);
                break;
        }

        consumeDragonVein();

        lastVeinInteractionSkill = 0;
    }

    // region Eruption methods
    private void eruptWaterVein(SecondAtom vein) {
        var field = chr.getField();
        var slv = chr.getSkillLevel(ERUPTION_HEAVING_RIVER_PASSIVE);

        // erupt vein
        var summon = Summon.getSummonBy(chr, ERUPTION_HEAVING_RIVER_ACTIVE_1, slv);
        summon.setMoveAbility(MoveAbility.Stop);
        summon.setAssistType(AssistType.SequenceAttack);
        summon.setPosition(vein.getPosition());
        summon.setFlip(true);
        summon.setCurFoothold((short) 0);

        field.spawnSummonAndRemoveOld(summon);

        var sequence = new ArrayList<Integer>() {{
            add(ERUPTION_HEAVING_RIVER_ACTIVE_2);
            add(ERUPTION_HEAVING_RIVER_ACTIVE_2);
            add(ERUPTION_HEAVING_RIVER_ACTIVE_2);
            add(ERUPTION_HEAVING_RIVER_ACTIVE_2);
            add(ERUPTION_HEAVING_RIVER_ACTIVE_2);
            add(ERUPTION_HEAVING_RIVER_ACTIVE_2);
            add(ERUPTION_HEAVING_RIVER_ACTIVE_2);
            add(ERUPTION_HEAVING_RIVER_ACTIVE_2);
        }};
        chr.write(UserLocal.summonSequenceAttackInstructions(summon.getSkillID(), sequence));
    }

    private void eruptWindVein(SecondAtom vein) {
        var field = chr.getField();
        var slv = chr.getSkillLevel(ERUPTION_WHIRLWIND_PASSIVE);

        // erupt vein
        var summon = Summon.getSummonBy(chr, ERUPTION_WHIRLWIND_ACTIVE_1, slv);
        summon.setMoveAbility(MoveAbility.Stop);
        summon.setAssistType(AssistType.SequenceAttack);
        summon.setPosition(vein.getPosition());
        summon.setCurFoothold((short) 0);

        field.spawnSummonAndRemoveOld(summon);
    }

    private void eruptSunVein(SecondAtom vein) {
        // Handled by attack
    }

    private void eruptWaterVeinUpgrade(SecondAtom vein) {
        var field = chr.getField();
        var slv = chr.getSkillLevel(NATURE_MASTER);

        // erupt vein
        var summon = Summon.getSummonBy(chr, ERUPTION_HEAVING_RIVER_UPGRADE_4_ACTIVE_1, slv);
        summon.setMoveAbility(MoveAbility.Stop);
        summon.setAssistType(AssistType.SequenceAttack);
        summon.setPosition(vein.getPosition());
        summon.setFlip(true);
        summon.setCurFoothold((short) 0);

        field.spawnSummonAndRemoveOld(summon);

        var sequence = new ArrayList<Integer>() {{
            add(ERUPTION_HEAVING_RIVER_UPGRADE_4_ACTIVE_3);
            add(ERUPTION_HEAVING_RIVER_UPGRADE_4_ACTIVE_2);
            add(ERUPTION_HEAVING_RIVER_UPGRADE_4_ACTIVE_2);
            add(ERUPTION_HEAVING_RIVER_UPGRADE_4_ACTIVE_3);
            add(ERUPTION_HEAVING_RIVER_UPGRADE_4_ACTIVE_2);
            add(ERUPTION_HEAVING_RIVER_UPGRADE_4_ACTIVE_2);
            add(ERUPTION_HEAVING_RIVER_UPGRADE_4_ACTIVE_3);
            add(ERUPTION_HEAVING_RIVER_UPGRADE_4_ACTIVE_2);
            add(ERUPTION_HEAVING_RIVER_UPGRADE_4_ACTIVE_2);
        }};
        chr.write(UserLocal.summonSequenceAttackInstructions(summon.getSkillID(), sequence));
    }

    private void eruptWindVeinUpgrade(SecondAtom vein) {
        var field = chr.getField();
        var slv = chr.getSkillLevel(NATURE_MASTER);

        // erupt vein
        var summon = Summon.getSummonBy(chr, ERUPTION_WHIRLWIND_UPGRADE_4_ACTIVE_1, slv);
        summon.setMoveAbility(MoveAbility.Stop);
        summon.setAssistType(AssistType.SequenceAttack);
        summon.setPosition(vein.getPosition());
        summon.setCurFoothold((short) 0);

        field.spawnSummonAndRemoveOld(summon);
    }

    private void eruptSunVeinUpgrade(SecondAtom vein) {

    }
    // endregion

    // region Manifestation methods
    private void manifestSunVein(SecondAtom vein) {
        var field = chr.getField();
        var si = SkillData.getSkillInfoById(MANIFESTATION_SUNLIGHT_FILLED_GROUND_ACTIVE_1);
        var slv = chr.getSkillLevel(MANIFESTATION_SUNLIGHT_FILLED_GROUND_ACTIVE_1);
        var aa = AffectedArea.getPassiveAA(chr, MANIFESTATION_SUNLIGHT_FILLED_GROUND_ACTIVE_1, slv);
        aa.setPosition(vein.getPosition());
        aa.setRect(aa.getPosition().getRectAround(si.getFirstRect()));

        // spawn aa
        field.spawnAffectedAreaAndRemoveOld(aa);

        // set Healing Timer
        aa.activateTimer(2000, 2000);

        consumeDragonVein();
    }

    private void manifestWindVein(SecondAtom vein) {
        var field = chr.getField();
        var si = SkillData.getSkillInfoById(MANIFESTATION_WIND_SWING_ACTIVE_1);
        var slv = chr.getSkillLevel(MANIFESTATION_WIND_SWING_ACTIVE_1);
        var aa = AffectedArea.getPassiveAA(chr, MANIFESTATION_WIND_SWING_ACTIVE_1, slv);
        aa.setPosition(vein.getPosition());
        aa.setRect(aa.getPosition().getRectAround(si.getFirstRect()));
        aa.setRect2(aa.getPosition().getRectAround(si.getRects().get(2))); // get third rect

        // spawn aa
        field.spawnAffectedAreaAndRemoveOld(aa); // TODO Flying gets insta-cancelled

        consumeDragonVein();
    }

    private void manifestWhereTheRiverCoursesFirst(SecondAtom vein) {
        var tsm = chr.getTemporaryStatManager();
        tsm.putCharacterStatValue(IndieSummon, new Option(1, MANIFESTATION_WHERE_THE_RIVER_COURSES_ACTIVE_1, 20));

        var si = SkillData.getSkillInfoById(MANIFESTATION_WHERE_THE_RIVER_COURSES_ACTIVE_1);
        var sai = si.getSecondAtomInfos().get(0);
        var sa = SecondAtom.createFromInfo(chr, MANIFESTATION_WHERE_THE_RIVER_COURSES_ACTIVE_1, sai);
        sa.setPosition(vein.getPosition());
        sa.setFirstAngleStart(20);
        sa.setExpire(0);
        sa.setAttackableCount(1);

        sa.setCustomList(new ArrayList<>() {{ add(0); }});
        chr.spawnSecondAtoms(Collections.singletonList(sa));

        consumeDragonVein();
    }

    private void manifestWhereTheRiverCoursesSecond(int otherVeinObjId, Position position) {
        var tsm = chr.getTemporaryStatManager();
        tsm.putCharacterStatValue(IndieSummon, new Option(2, MANIFESTATION_WHERE_THE_RIVER_COURSES_ACTIVE_1, 120));

        var si = SkillData.getSkillInfoById(MANIFESTATION_WHERE_THE_RIVER_COURSES_ACTIVE_1);
        var sai = si.getSecondAtomInfos().get(1);
        var sa = SecondAtom.createFromInfo(chr, MANIFESTATION_WHERE_THE_RIVER_COURSES_ACTIVE_1, sai);
        sa.setPosition(position);
        sa.setFirstAngleStart(20);
        sa.setExpire(0);
        sa.setAttackableCount(1);
        sa.setCustomList(new ArrayList<>() {{ add(otherVeinObjId); }});
        chr.spawnSecondAtoms(Collections.singletonList(sa));
    }
    // endregion

    // region Absorption Methods
    private void manageAbsorptionProc(AttackInfo attackInfo) {
        if (attackInfo.skillId != ESSENCE_SPRINKLE_UPGRADE_4 && attackInfo.skillId != ESSENCE_SPRINKLE) {
            return;
        }

        var tsm = chr.getTemporaryStatManager();
        var activeAbsorptions = new ArrayList<Integer>();
        if (tsm.hasStat(AbsorptionWater)) {
            activeAbsorptions.add(ABSORPTION_RIVER_PUDDLE_DOUSE_ACTIVE_2);
        }
        if (tsm.hasStat(AbsorptionWind)) {
            activeAbsorptions.add(ABSORPTION_FIERCE_WIND_ACTIVE_2);
        }
        if (tsm.hasStat(AbsorptionSun)) {
            activeAbsorptions.add(ABSORPTION_SUNLIT_GRAIN_ACTIVE_2);
        }

        // Has no absorptions
        if (activeAbsorptions.size() <= 0) {
            return;
        }

        var activeAndAvailableAbsorptions = activeAbsorptions.stream().filter(s -> !chr.hasSkillOnCooldown(s)).collect(Collectors.toList());

        // Has no available absorptions
        if (activeAndAvailableAbsorptions.size() <= 0) {
            return;
        }

        var randomAbsorption = Util.getRandomFromCollection(activeAndAvailableAbsorptions);
        switch (randomAbsorption) {
            case ABSORPTION_RIVER_PUDDLE_DOUSE_ACTIVE_2:
                procRiverPuddleDouse(attackInfo);
                break;
            case ABSORPTION_FIERCE_WIND_ACTIVE_2:
                procFierceWind(attackInfo);
                break;
            case ABSORPTION_SUNLIT_GRAIN_ACTIVE_2:
                procSunlitGrain(attackInfo);
                break;
        }

        consumeDragonVein();
    }

    private void procSunlitGrain(AttackInfo attackInfo) {
        var esi = new ExtraSkillInfo(ABSORPTION_SUNLIT_GRAIN_ACTIVE_2, chr.getPosition(), attackInfo.left, 0, 5);
        chr.write(FieldPacket.registerExtraSkill(ABSORPTION_SUNLIT_GRAIN_ACTIVE_2, esi));
    }

    private void procRiverPuddleDouse(AttackInfo attackInfo) {
        var esi = new ExtraSkillInfo(ABSORPTION_RIVER_PUDDLE_DOUSE_ACTIVE_2, chr.getPosition(), attackInfo.left, 0, 1);
        chr.write(FieldPacket.registerExtraSkill(ABSORPTION_RIVER_PUDDLE_DOUSE_ACTIVE_2, esi));
        chr.addSkillCoolTime(ABSORPTION_RIVER_PUDDLE_DOUSE_ACTIVE_2, 2500);
    }

    private void procFierceWind(AttackInfo attackInfo) {
        var esi = new ExtraSkillInfo(ABSORPTION_FIERCE_WIND_ACTIVE_2, chr.getPosition(), attackInfo.left, 0, 7);
        chr.write(FieldPacket.registerExtraSkill(ABSORPTION_FIERCE_WIND_ACTIVE_2, esi));
        chr.addSkillCoolTime(ABSORPTION_FIERCE_WIND_ACTIVE_2, 2500);
    }
    // endregion

    // region wakeup call
    private void wakeupCall(SkillInfo si, int slv, SecondAtom vein, boolean byBigStretch) {
        var count = si.getValue(bulletCount, slv);
        var sai = si.getSecondAtomInfos().get(0);
        var veinType = getVeinTypeByVein(vein);
        if (veinType == null) {
            return;
        }
        var dataIndex = 0;
        switch (veinType) {
            case WATER_VEIN:
                dataIndex = byBigStretch ? 24 : 22; // 22
                break;
            case WIND_VEIN:
                dataIndex = byBigStretch ? 28 : 25; // 25
                break;
            case SUN_VEIN:
                dataIndex = byBigStretch ? 29 : 26; // 26
                break;
            case DRAGON_VEIN:
                dataIndex = byBigStretch ? 30 : 27; // 27
                break;
        }
        var saList = new ArrayList<SecondAtom>();
        var rect = vein.getPosition().getRectAround(new Rect(-200, -400, 200, 0));
        for (var i = 0; i < count; i++) {
            var sa = SecondAtom.createFromInfo(chr, byBigStretch ? BIG_STRETCH : WAKEUP_CALL, sai);
            sa.setDataIndex(dataIndex);
            sa.setPosition(rect.getRandomPositionInside());

            saList.add(sa);
        }

        chr.spawnSecondAtoms(saList);

        consumeDragonVein();
    }
    // endregion

    // region Dragon Vein Echo
    private void dragonVeinEcho() {
        var skill = chr.getSkill(DRAGON_VEIN_ECHO);

        if (skill == null) {
            return;
        }

        var si = SkillData.getSkillInfoById(skill.getSkillId());
        var slv = skill.getCurrentLevel();

        // Heal HP & MP
        var percentageHealed = si.getValue(u, slv);
        chr.heal(chr.getHPPerc(percentageHealed));
        chr.healMP(chr.getMPPerc(percentageHealed));

        var tOpt = si.getValue(time, slv);

        // FinalDmg Buff
        var tsm = chr.getTemporaryStatManager();
        tsm.putCharacterStatValue(IndiePMdR, new Option(si.getValue(x, slv), skill.getSkillId(), tOpt), true);

        if (chr.hasSkill(DRAGON_VEIN_ECHO_ENHANCE)) {
            var siUpgrade = SkillData.getSkillInfoById(DRAGON_VEIN_ECHO_ENHANCE);
            var slvUpgrade = 1;
            tsm.putCharacterStatValue(IndieSpeed, new Option(siUpgrade.getValue(x, slvUpgrade), skill.getSkillId(), tOpt), true);
            tsm.putCharacterStatValue(IndieJump, new Option(siUpgrade.getValue(y, slvUpgrade), skill.getSkillId(), tOpt), true);

            EventManager.stopTimer(dragonVeinEchoTimer);
            var healedAmount = chr.getHPPerc(siUpgrade.getValue(w, slvUpgrade));
            var executes = tOpt / 5;
            dragonVeinEchoTimer = EventManager.addFixedRateEvent(() -> healByDragonVeinEchoEnhance(healedAmount), 5000, 5000, executes);
        }
    }

    private void healByDragonVeinEchoEnhance(int amount) {
        var tsm = chr.getTemporaryStatManager();
        if (tsm.hasStatBySkillId(DRAGON_VEIN_ECHO_ENHANCE)) {
            EventManager.stopTimer(dragonVeinEchoTimer);
        }
        chr.heal(amount);
    }
    // endregion

    // region Stacking Skills
    public void stackSkillManager(int skillId) {
        if (chr.hasSkillOnCooldown(-skillId)) {
            //return;
        }

        var si = SkillData.getSkillInfoById(skillId);
        var slv = chr.getSkillLevel(skillId);

        switch (skillId) {
            case MOUNTAIN_SEEDS:
                // Timer is already started
                if (mountainSeedTimer != null) {
                    return;
                }
                var maxStack = si.getValue(w2, slv);
                var delay = si.getValue(w, slv);
                EventManager.stopTimer(mountainSeedTimer);
                mountainSeedTimer = EventManager.addFixedRateEvent(() -> stackMountainSeeds(maxStack), 0, delay);
                break;

            case DRAGON_VEIN_TRACES:
                // Timer is already started
                if (dragonVeinTraceTimer != null) {
                    return;
                }
                delay = si.getValue(s, slv);
                maxStack = si.getValue(v, slv);
                EventManager.stopTimer(dragonVeinTraceTimer);
                dragonVeinTraceTimer = EventManager.addFixedRateEvent(() -> stackDragonVeinTrace(maxStack), 0, delay);
                break;

            case UNCONSTRAINED_DRAGON_VEIN:
                if (unconstrainedDragonVeinTimer != null) {
                    return;
                }
                delay = si.getValue(w, slv);
                maxStack = si.getValue(u, slv);
                EventManager.stopTimer(unconstrainedDragonVeinTimer);
                unconstrainedDragonVeinTimer = EventManager.addFixedRateEvent(() -> stackUnstronstrainedDragonVein(maxStack), 0, delay, TimeUnit.SECONDS);
        }
    }

    private void stackMountainSeeds(int maxStack) {
        var tsm = chr.getTemporaryStatManager();
        var currentStack = tsm.getOption(MountainSeeds).nOption;
        var opt = new Option(Math.max(0, Math.min(currentStack + 1, maxStack)), MOUNTAIN_SEEDS, 0);
        tsm.putCharacterStatValue(MountainSeeds, opt, true);
        tsm.sendSetStatPacket();
    }

    private void stackDragonVeinTrace(int maxStack) {
        var tsm = chr.getTemporaryStatManager();
        var currentStack = tsm.getOption(DragonVeinTrace).nOption;
        var opt = new Option(Math.max(0, Math.min(currentStack + 1, maxStack)), DRAGON_VEIN_TRACES, 0);
        tsm.putCharacterStatValue(DragonVeinTrace, opt, true);
        tsm.sendSetStatPacket();
    }

    private void stackUnstronstrainedDragonVein(int maxStack) {
        var tsm = chr.getTemporaryStatManager();
        var currentStack = tsm.getOption(UnconstrainedDragonVein).nOption;
        var opt = new Option(Math.max(0, Math.min(currentStack + 1, maxStack)), UNCONSTRAINED_DRAGON_VEIN, 0);
        tsm.putCharacterStatValue(UnconstrainedDragonVein, opt, true);
        tsm.sendSetStatPacket();
    }
    // endregion

    @Override
    public void setCharCreationStats(Char chr) {
        super.setCharCreationStats(chr);

        var cs = chr.getAvatarData().getCharacterStat();
        chr.setJob(JobConstants.JobEnum.LARA_1.getJobId());
        chr.addSpToJobByCurrentJob(5);
        cs.setLevel(10);
        cs.setStr(5);
        cs.setDex(5);
        cs.setInt(5);
        cs.setLuk(5);
        cs.setAp(4 + cs.getLevel() * 5);
        cs.setHp(450);
        cs.setMaxHp(450);
        cs.setMp(300);
        cs.setMaxMp(300);

        var secondary = ItemData.getItemDeepCopy(1354020);
        secondary.setBagIndex(BodyPart.Shield.getVal());
        chr.getAvatarData().getAvatarLook().getHairEquips().add(secondary.getItemId());
        chr.getEquippedInventory().addItem(secondary);
    }

    @Override
    public void handleLevelUp() {
        super.handleLevelUp();
        var level = chr.getLevel();
        if (level == 10) {
            chr.setJob(JobConstants.JobEnum.LARA_1.getJobId());
            chr.addSpToJobByCurrentJob(5);
            chr.addStatAndSendPacket(Stat.ap, 5);
        } else if (level == 30) {
            chr.setJob(JobConstants.JobEnum.LARA_2.getJobId());
            chr.addSpToJobByCurrentJob(5);
            chr.addStatAndSendPacket(Stat.ap, 4);
        } else if (level == 60) {
            chr.setJob(JobConstants.JobEnum.LARA_3.getJobId());
            chr.addSpToJobByCurrentJob(5);
            chr.addStatAndSendPacket(Stat.ap, 5);
        } else if (level == 100) {
            chr.setJob(JobConstants.JobEnum.LARA_4.getJobId());
            chr.addSpToJobByCurrentJob(5);
            chr.addStatAndSendPacket(Stat.ap, 5);
        }

    }

    @Override
    public void handleHit(Client c, InPacket inPacket, HitInfo hitInfo) {
        var tsm = chr.getTemporaryStatManager();
        var field = chr.getField();
        if (tsm.hasStat(PeerlessMountain)) {
            var reduction = tsm.getOption(PeerlessMountain).nOption;
            var mobObjId = hitInfo.mobID;
            var mob = field.getLifeByObjectID(Mob.class, mobObjId);
            if (mob == null || !mob.isBoss()) {
                hitInfo.hpDamage = (int) ((reduction * hitInfo.hpDamage) / 100D);
                var eff = Effect.skillSpecial(PEERLESS_MOUNTAIN);
                chr.write(UserPacket.effect(eff));
                chr.healMP(-chr.getSkillStatValue(u, PEERLESS_MOUNTAIN));
            }
        }

        super.handleHit(c, inPacket, hitInfo);
    }

    @Override
    public void stopTimers() {
        EventManager.stopTimer(mountainSeedTimer);
        EventManager.stopTimer(dragonVeinTraceTimer);
        EventManager.stopTimer(unconstrainedDragonVeinTimer);
        EventManager.stopTimer(mountainEmbraceTimer);
        EventManager.stopTimer(dragonVeinEchoTimer);

        super.stopTimers();
    }

    public enum VeinType {
        WATER_VEIN(1),
        WIND_VEIN(2),
        DRAGON_VEIN(8),
        SUN_VEIN(4),
        ;

        private int val;

        VeinType(int val) {
            this.val = val;
        }

        public int getVal() {
            return val;
        }

        public static VeinType getByVal(int val) {
            return Arrays.stream(values()).filter(vt -> vt.getVal() == val).findFirst().orElse(null);
        }
    }
}

