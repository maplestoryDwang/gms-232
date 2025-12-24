package net.swordie.ms.client.jobs.cygnus;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.info.*;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillChangeConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.AssistType;
import net.swordie.ms.enums.ForceAtomEnum;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 12/14/2017.
 */
public class WindArcher extends Noblesse {


    public static final int ELEMENTAL_HARMONY_DEX = 10000247;

    public static final int STORM_ELEMENTAL = 13001022; //Buff

    public static final int TRIFLING_WIND_I = 13101022; //Special Buff (Proc) (ON/OFF)  // Normal Arrow - Atom
    public static final int TRIFLING_WIND_ATOM = 13100022;
    public static final int TRIFLING_WIND_ATOM_ENHANCED = 13100027;                     // Enhanced Arrow - Atom
    public static final int BOW_BOOSTER = 13101023; //Buff
    public static final int SYLVAN_AID = 13101024; //Buff

    public static final int TRIFLING_WIND_II = 13110022; //Special Buff Upgrade         // Enhanced Arrow - Atom
    public static final int TRIFLING_WIND_II_ATOM = 13110027;                           // Normal Arrow - Atom
    public static final int ALBATROSS = 13111023; //Buff
    public static final int EMERALD_FLOWER = 13111024; //Summon (Stationary, No Attack, Aggros)
    public static final int SECOND_WIND = 13110026; //
    public static final int FEATHER_WEIGHT = 13110025;
    public static final int PINPOINT_PIERCE = 13111021;
    public static final int SENTIENT_ARROW = 13111020;

    public static final int SONG_OF_HEAVEN = 13121001;
    public static final int TRIFLING_WIND_III_ENHANCED = 13120010;                      // Enhanced Arrow - Atom
    public static final int ALBATROSS_MAX = 13120008; //Upgrade on Albatross
    public static final int TRIFLING_WIND_III = 13120003; //Special Buff Upgrade        // Normal Arrow - Atom
    public static final int SHARP_EYES = 13121005; //Buff
    public static final int TOUCH_OF_THE_WIND = 13120004; // Passive
    public static final int CALL_OF_CYGNUS_WA = 13121000; //Buff
    public static final int EMERALD_DUST = 13120007;
    public static final int SPIRALING_VORTEX = 13121002;
    public static final int SPIRALING_VORTEX_EXPLOSION = 13121009;
    public static final int TRIFLING_WIND_ENHANCE = 13120044;
    public static final int TRIFLING_WIND_DOUBLE_CHANCE = 13120045;

    public static final int GLORY_OF_THE_GUARDIANS_WA = 13121053;
    public static final int STORM_BRINGER = 13121054;
    public static final int MONSOON = 13121052;

    public static final int HOWLING_GALE_1 = 400031003; // takes 1 Wind Energy
    public static final int HOWLING_GALE_2 = 400031004; // takes 2 Wind Energy
    public static final int MERCILESS_WINDS = 400031022;
    public static final int GALE_BARRIER = 400031030;
    public static final int GALE_BARRIER_ATOM = 400031031;
    public static final int VORTEX_SPHERE = 400031058;
    public static final int VORTEX_SPHERE_2 = 400031059;

    private long lastGaleBarrierFA = Long.MIN_VALUE;
    private long startSongOfHeaven = Long.MAX_VALUE;

    private static final int[] addedSkills = new int[]{
            ELEMENTAL_HARMONY_DEX,
            CALL_OF_CYGNUS_WA
    };
    private ScheduledFuture windEnergyTimer;
    private ScheduledFuture startSongOfHeavenTimer;

    public WindArcher(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id) || chr.getSkill(id).getCurrentLevel() == 0) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setCurrentLevel(skill.getMasterLevel());
                    chr.addSkill(skill);
                }
            }
            incrementWindEnergy();
        }
    }


    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isWindArcher(id);
    }


    private void incrementWindEnergy() {
        EventManager.stopTimer(windEnergyTimer);
        windEnergyTimer = EventManager.addFixedRateEvent(this::increaseWindEnergy, 20, 20, TimeUnit.SECONDS);
    }

    private void increaseWindEnergy() {
        if (!chr.hasSkill(HOWLING_GALE_1)) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        int count = 1;
        if (tsm.hasStat(WindEnergy)) {
            count = tsm.getOption(WindEnergy).nOption;
            if (count < 2) {
                count++;
            }
        }
        updateWindEnergy(count);
    }

    private void updateWindEnergy(int energy) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        o.nOption = energy;
        o.rOption = 0;
        tsm.putCharacterStatValue(WindEnergy, o);
        tsm.sendSetStatPacket();
    }

    public void diminishGaleBarrier(int elemental) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option prevOpt = tsm.getOptByCTSAndSkill(GaleBarrier, GALE_BARRIER);
        Option o = new Option();
        o.nOption = prevOpt.nOption - elemental;
        o.rOption = prevOpt.rOption;
        o.tOption = (int) tsm.getRemainingTime(GaleBarrier, GALE_BARRIER);
        o.setInMillis(true);
        if (o.nOption <= 0) {
            tsm.removeStatsBySkill(GALE_BARRIER);
        } else {
            tsm.putCharacterStatValue(GaleBarrier, o, true);
            tsm.sendSetStatPacket();
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
            if (!SkillConstants.isForceAtomSkill(attackInfo.skillId)
                    && attackInfo.skillId != 0
                    && attackInfo.skillId != SENTIENT_ARROW
                    && attackInfo.skillId != SPIRALING_VORTEX_EXPLOSION) {

                createStormBringerForceAtom(attackInfo);

                if (!chr.hasSkillOnCooldown(TRIFLING_WIND_III)) {
                    createTriflingWhimForceAtom(attackInfo);
                }

                createGaleBarrierForceAtom();


            }
        }
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (attackInfo.skillId) {
            case MONSOON:
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.createAndAddBurnedInfo(chr, skill);
                }
                break;
            case PINPOINT_PIERCE:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillID;
                o1.tOption = 20;
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.addStatOptionsAndBroadcast(chr, MobStat.FinalDmgReceived, o1);
                }
                break;
            case SPIRALING_VORTEX:
                List<MobAttackInfo> mai1 = attackInfo.mobAttackInfo;
                if (mai1.size() <= 0) {
                    return;
                }
                Mob mob = (Mob) chr.getField().getLifeByObjectID(Util.getRandomFromCollection(mai1).mobId);
                if (mob == null) {
                    return;
                }
                chr.write(UserLocal.explosionAttack(SPIRALING_VORTEX_EXPLOSION, mob.getPosition(), mob.getObjectId(), 1));
                break;
            case MERCILESS_WINDS:
                for (var mai : attackInfo.mobAttackInfo) {
                    mob = mai.mob;
                    if (mob == null) {
                        continue;
                    }

                    var mts = mob.getTemporaryStat();
                    mts.createAndAddBurnedInfo(chr, skill);
                }
                break;
        }
        super.handleAttack(c, attackInfo);
    }

    private void createGaleBarrierForceAtom() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (chr.hasSkill(GALE_BARRIER) && tsm.hasStat(GaleBarrier) && (lastGaleBarrierFA + 2000 < Util.getCurrentTimeLong())) {
            Skill skill = chr.getSkill(GALE_BARRIER);
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int slv = skill.getCurrentLevel();

            for (int i = 0; i < si.getValue(q2, slv); i++) {
                Rect rect = chr.getRectAround(new Rect(-350, -200, 100, 100));
                if (!chr.isLeft()) {
                    rect = rect.horizontalFlipAround(chr.getPosition().getX());
                }
                if (chr.getField().getMobsInRect(rect).size() <= 0) {
                    continue;
                }
                Mob mob = Util.getRandomFromCollection(chr.getField().getMobsInRect(rect));
                int randomfImpact = Util.getRandom(6) + 30;
                int randomsImpact = Util.getRandom(3) + 4;

                ForceAtomEnum fae = ForceAtomEnum.GREEN_TORNADO;
                ForceAtomInfo forceAtomInfo = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), randomfImpact, randomsImpact,
                        (int) Util.getAngleOfTwoPositions(chr.getPosition(), mob.getPosition()), 500, Util.getCurrentTime(), 1, 0,
                        new Position());
                chr.createForceAtom(new ForceAtom(false, 0, chr.getId(), fae,
                        true, mob.getObjectId(), GALE_BARRIER_ATOM, forceAtomInfo, new Rect(), 0, 300,
                        mob.getPosition(), GALE_BARRIER_ATOM, mob.getPosition(), 0));
            }
            lastGaleBarrierFA = Util.getCurrentTimeLong();
        }
    }

    private void createMercilessWindForceAtom() {
        Field field = chr.getField();
        if (!chr.hasSkill(MERCILESS_WINDS)) {
            return;
        }
        Skill skill = chr.getSkill(MERCILESS_WINDS);
        SkillInfo si = SkillData.getSkillInfoById(MERCILESS_WINDS);
        int slv = skill.getCurrentLevel();
        int forceAtomCount = si.getValue(x, slv);
        ForceAtomEnum fae = ForceAtomEnum.MERCILESS_WINDS;
        for (int i = 0; i < forceAtomCount; i++) {
            int angle = (360 / forceAtomCount) * i;
            int circleRadii = 150;
            int vTranslation = (int) (Math.sin(angle) * circleRadii);
            int hTranslation = (int) (Math.cos(angle) * circleRadii);
            Mob mob = Util.getRandomFromCollection(field.getMobs());
            ForceAtomInfo forceAtomInfo = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 35, 5,
                    angle, 500, Util.getCurrentTime(), 1, 0,
                    new Position(chr.getPosition().getX() + hTranslation, chr.getPosition().getY() + vTranslation));
            chr.createForceAtom(new ForceAtom(false, 0, chr.getId(), fae,
                    true, mob == null ? 0 : mob.getObjectId(), MERCILESS_WINDS, forceAtomInfo, new Rect(), 0, 300,
                    chr.getPosition(), MERCILESS_WINDS, mob == null ? new Position() : mob.getPosition(), 0));
        }
    }

    private void createTriflingWhimForceAtom(AttackInfo attackInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = getTriflingWindSkill();
        if (skill == null || !tsm.hasStat(TriflingWhimOnOff)) {
            return;
        }

        var mainProp = getTriflingWindProp();
        var prop = getTriflingWindSubProp();

        var impactMulti = getTrifflingsImpactMultiplier();
        int sImpact = 6;

        if (SkillChangeConstants.MORE_TRIFFLING_WIND_WHILE_KEYDOWN) {
            sImpact = (int) (sImpact * impactMulti);
        }

        var delayReduction = getTrifflingWindDelayReduction();
        var maxTriffling = getMaxTriffling();
        boolean sub = Util.succeedProp(prop);
        ForceAtomEnum fae = sub ? ForceAtomEnum.WA_ARROW_2 : ForceAtomEnum.WA_ARROW_1;
        int skillId = sub ? TRIFLING_WIND_ATOM_ENHANCED : skill.getSkillId();
        switch (skill.getSkillId()) {
            case TRIFLING_WIND_II:
                skillId = Util.succeedProp(prop) ? skill.getSkillId() : TRIFLING_WIND_II_ATOM;
                break;
            case TRIFLING_WIND_III:
                skillId = Util.succeedProp(prop) ? TRIFLING_WIND_III_ENHANCED : skill.getSkillId();
                break;
        }
        var targetList = new ArrayList<Integer>();
        var faiList = new ArrayList<ForceAtomInfo>();
        for (int i = 0; i < maxTriffling; i++) {
            if (!Util.succeedProp(mainProp)) {
                continue;
            }

            var mobId = 0;
            if (attackInfo.mobCount > 0) {
                mobId = Util.getRandomFromCollection(attackInfo.mobAttackInfo).mobId;
            }

            int fImpact = Util.getRandom(10) + 47; // 36

            ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), fImpact, sImpact,
                    Util.randBoolean() ? 180 : 0, 0, Util.getCurrentTime(), 0, 0,
                    new Position(30, 0));
            faiList.add(fai);
            targetList.add(mobId);
        }

        ForceAtom fa = new ForceAtom(false, 0, chr.getId(), fae,
                true, targetList, skillId, faiList, new Rect(), 0, 0,
                new Position(), 0, new Position(), 0);
        chr.createForceAtom(fa);

        var delay = 180;
        // [Wind Archer] Custom Skill Change
        if (SkillChangeConstants.MORE_TRIFFLING_WIND_WHILE_KEYDOWN) {
            delay -= delayReduction;
        }
        if (delay > 0) {
            chr.addSkillCoolTime(TRIFLING_WIND_III, delay);
        }
    }

    private void createStormBringerForceAtom(AttackInfo attackInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(StormBringer)) {
            SkillInfo si = SkillData.getSkillInfoById(STORM_BRINGER);
            for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                if (mob == null) {
                    continue;
                }
                int ranY = Util.getRandom(150) - 100;
                int hyperprop = si.getValue(prop, 1);
                if (Util.succeedProp(hyperprop)) {
                    int mobID = mai.mobId;
                    ForceAtomEnum fae = ForceAtomEnum.WA_ARROW_HYPER;
                    ForceAtomInfo forceAtomInfo = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 5, 5,
                            270, 0, Util.getCurrentTime(), 1, 0,
                            new Position(35, ranY)); //Slightly behind the player
                    chr.createForceAtom(new ForceAtom(false, 0, chr.getId(), fae,
                            true, mobID, STORM_BRINGER, forceAtomInfo, new Rect(), 0, 300,
                            mob.getPosition(), STORM_BRINGER, mob.getPosition(), 0));
                }
            }
        }
    }

    private Skill getTriflingWindSkill() {
        Skill skill = null;
        if (chr.hasSkill(TRIFLING_WIND_III)) {
            skill = chr.getSkill(TRIFLING_WIND_III);
        } else if (chr.hasSkill(TRIFLING_WIND_II)) {
            skill = chr.getSkill(TRIFLING_WIND_II);
        } else if (chr.hasSkill(TRIFLING_WIND_I)) {
            skill = chr.getSkill(TRIFLING_WIND_I);
        }

        return skill;
    }

    private int getTriflingWindProp() {
        Skill skill = getTriflingWindSkill();
        if (skill != null) {
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int slv = skill.getCurrentLevel();

            var proc = si.getValue(prop, slv) + (chr.hasSkill(TRIFLING_WIND_ENHANCE) ? 10 : 0);

            // [Wind Archer] Custom Skill Change
            if (SkillChangeConstants.MORE_TRIFFLING_WIND_WHILE_KEYDOWN) {
                proc += getTrifflingWindProcBonus();
            }

            return proc;
        }
        return 0;
    }

    private int getTriflingWindSubProp() {
        Skill skill = getTriflingWindSkill();
        if (skill != null) {
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int slv = skill.getCurrentLevel();

            return si.getValue(subProp, slv);
        }
        return 0;
    }

    private int getMaxTriffling() {
        Skill skill = getTriflingWindSkill();
        if (skill != null) {
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int slv = skill.getCurrentLevel();

            return si.getValue(x, slv);
        }
        return 0;
    }

    public static Skill getEmeraldFlowerSkill(Char chr) {
        Skill skill = null;
        if (chr.hasSkill(EMERALD_FLOWER)) {
            skill = chr.getSkill(EMERALD_FLOWER);
        }
        if (chr.hasSkill(EMERALD_DUST)) {
            skill = chr.getSkill(EMERALD_DUST);
        }

        return skill;
    }

    public void applyEmeraldFlowerDebuffToMob(Summon summon, int mobTemplateId) {
        Skill skill = getEmeraldFlowerSkill(chr);
        if (skill == null) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();

        List<Mob> mobListWithTemplateId = chr.getField()
                .getMobsInRect(summon.getPosition().getRectAround(si.getRects().get(0)))
                .stream()
                .filter(mob -> mob.getTemplateId() == mobTemplateId)
                .collect(Collectors.toList());
        Option o = new Option();
        o.nOption = si.getValue(z, slv);
        o.rOption = skill.getSkillId();
        o.tOption = si.getValue(time, slv);
        for (Mob mob : mobListWithTemplateId) {
            MobTemporaryStat mts = mob.getTemporaryStat();
            mts.addStatOptionsAndBroadcast(chr, MobStat.Speed, o);
        }
    }

    public void applyEmeraldDustDebuffToMob(Summon summon, int mobTemplateId) {
        Skill skill = getEmeraldFlowerSkill(chr);
        if (skill == null) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();

        List<Mob> mobListWithTemplateId = chr.getField()
                .getMobsInRect(summon.getPosition().getRectAround(si.getRects().get(0)))
                .stream()
                .filter(mob -> mob.getTemplateId() == mobTemplateId)
                .collect(Collectors.toList());
        Option o = new Option();
        o.nOption = si.getValue(w, slv);
        o.rOption = skill.getSkillId();
        o.tOption = si.getValue(time, slv);
        for (Mob mob : mobListWithTemplateId) {
            MobTemporaryStat mts = mob.getTemporaryStat();
            mts.addStatOptionsAndBroadcast(chr, MobStat.PDR, o);
        }
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
        Option o6 = new Option();
        Option o7 = new Option();
        Option o8 = new Option();
        Option o9 = new Option();
        switch (skillId) {
            case MERCILESS_WINDS:
                createMercilessWindForceAtom();
                break;

            case HOWLING_GALE_1:
                int newCount;
                if (tsm.hasStat(WindEnergy)) {
                    var count = tsm.getOption(WindEnergy).nOption;
                    newCount = Math.max(0, count - 1);
                } else {
                    newCount = 0;
                }
                updateWindEnergy(newCount);
                break;
            case HOWLING_GALE_2:
                updateWindEnergy(0);
                break;
            case STORM_ELEMENTAL:
                if (!tsm.hasStatBySkillId(STORM_ELEMENTAL)) {
                    o1.rOption = skillId;
                    o1.nOption = si.getValue(indieDamR, slv);
                    tsm.putCharacterStatValue(IndieDamR, o1); //Indie
                } else {
                    tsm.removeStatsBySkill(STORM_ELEMENTAL);
                }
                break;
            case BOW_BOOSTER:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;
            case SYLVAN_AID:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indiePad, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePAD, o1); //Indie
                o2.rOption = skillId;
                o2.nOption = si.getValue(x, slv);
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieCr, o2);
                o3.nOption = 1;
                o3.rOption = skillId;
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(SoulArrow, o3);
                break;
            case ALBATROSS:
                o5.nOption = 1;
                o5.rOption = skillId;
                o5.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(Albatross, o5);
                break;
            case ALBATROSS_MAX:
                var tOpt = si.getValue(time, slv);
                o9.nOption = 1;
                o9.rOption = skillId;
                o9.tOption = tOpt;
                tsm.putCharacterStatValue(Albatross, o9);
                break;
            case SHARP_EYES: // x = crit rate    y = max crit dmg
                // Short nOption is split in  2 bytes,  first one = CritDmg  second one = Crit%
                int cr = si.getValue(x, slv);
                int crDmg = si.getValue(y, slv);
                o1.xOption = cr;
                o1.yOption = crDmg;
                o1.nOption = (cr << 8) + crDmg;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(SharpEyes, o1);
                break;
            case TRIFLING_WIND_I:
                o1.nOption = 1;
                o1.rOption = getTriflingWindSkill().getSkillId();
                tsm.putCharacterStatValue(TriflingWhimOnOff, o1);
                break;
            case EMERALD_FLOWER:
            case EMERALD_DUST:
                Position position = inPacket.decodePosition();
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setAssistType(AssistType.None);
                summon.setPosition(position);
                summon.setCurFoothold((short) field.findFootHoldBelow(summon.getPosition()).getId());
                summon.setMaxHP(si.getValue(x, slv));
                summon.setHp(summon.getMaxHP());
                field.spawnSummonAndRemoveOld(summon);
                break;
            case GLORY_OF_THE_GUARDIANS_WA:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                break;
            case STORM_BRINGER:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(StormBringer, o1);
                break;
            case GALE_BARRIER:
                o1.nOption = si.getValue(w, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(GaleBarrier, o1);
                break;
        }
        tsm.sendSetStatPacket();
    }


    public void handleSkillRemove(Char chr, int skillID, Map<CharacterTemporaryStat, Option> removedOptions) {
        switch (skillID) {
            case TRIFLING_WIND_I:
            case TRIFLING_WIND_II:
            case TRIFLING_WIND_III:
                chr.getTemporaryStatManager().removeStatsBySkill(getTriflingWindSkill().getSkillId());
                break;
        }
    }

    public void handleKeyDownSkill(Char chr, int skillID, InPacket inPacket) {
        super.handleKeyDownSkill(chr, skillID, inPacket);

        switch (skillID) {
            case SONG_OF_HEAVEN:
                if (SkillChangeConstants.MORE_TRIFFLING_WIND_WHILE_KEYDOWN) {
                    startSongOfHeaven();
                }
                break;
        }
    }

    @Override
    public void handleCancelKeyDownSkill(Char chr, int skillID) {
        super.handleCancelKeyDownSkill(chr, skillID);

        switch (skillID) {
            case SONG_OF_HEAVEN:
                if (SkillChangeConstants.MORE_TRIFFLING_WIND_WHILE_KEYDOWN) {
                    startSongOfHeavenTimer = EventManager.addEvent(this::resetSongOfHeaven, SkillChangeConstants.TRIFFLING_WIND_KEYDOWN_GIFT_MS, TimeUnit.MILLISECONDS); // [Wind Archer] Custom Skill Change
                }
                break;
        }
    }

    // [Wind Archer] Custom Skill Change
    private void startSongOfHeaven() {
        EventManager.stopTimer(startSongOfHeavenTimer);
        if (startSongOfHeaven == Long.MAX_VALUE) {
            startSongOfHeaven = Util.getCurrentTimeLong();
        }
    }

    // [Wind Archer] Custom Skill Change
    private void resetSongOfHeaven() {
        startSongOfHeaven = Long.MAX_VALUE;
    }

    // [WindArcher] Custom Skill Change
    private int getTrifflingWindProcBonus() {
        if (!SkillChangeConstants.MORE_TRIFFLING_WIND_WHILE_KEYDOWN) {
            return 0;
        }

        var curTime = Util.getCurrentTimeLong();

        var elapsedTime = curTime - startSongOfHeaven;
        if (startSongOfHeaven != Long.MAX_VALUE && elapsedTime > 0) {
            var elapsedSec = elapsedTime / 1000;

            var bonusPerSec = SkillChangeConstants.TRIFFLING_WIND_PROC_BONUS_PER_SEC * elapsedSec;

            return (int) Math.min(SkillChangeConstants.TRIFFLING_WIND_PROC_BONUS_MAX, bonusPerSec);
        }

        return 0;
    }

    // [WindArcher] Custom Skill Change
    private int getTrifflingWindDelayReduction() {
        if (!SkillChangeConstants.MORE_TRIFFLING_WIND_WHILE_KEYDOWN) {
            return 0;
        }

        var curTime = Util.getCurrentTimeLong();

        var elapsedTime = curTime - startSongOfHeaven;
        if (startSongOfHeaven != Long.MAX_VALUE && elapsedTime > 0) {
            var elapsedSec = elapsedTime / 1000;

            var bonusPerSec = SkillChangeConstants.TRIFFLING_WIND_DELAY_REDUCTION_PER_SEC * elapsedSec;

            return (int) Math.min(SkillChangeConstants.TRIFFLING_WIND_DELAY_REDUCTION_MAX, bonusPerSec);
        }

        return 0;
    }

    // [Wind Archer] Custom Skill Change
    private double getTrifflingsImpactMultiplier() {
        if (!SkillChangeConstants.MORE_TRIFFLING_WIND_WHILE_KEYDOWN) {
            return 1D;
        }

        var curTime = Util.getCurrentTimeLong();

        var elapsedTime = curTime - startSongOfHeaven;
        if (startSongOfHeaven != Long.MAX_VALUE && elapsedTime > 0) {
            var elapsedSec = elapsedTime / 1000;

            var multiplier = 1 + (elapsedSec / SkillChangeConstants.TRIFFLING_WIND_SIMPACT_MULTIPLIER_PER_SECOND);

            return Math.min(SkillChangeConstants.TRIFFLING_WIND_SIMPACT_MULTIPLIER_MAX, multiplier);
        }

        return 1D;
    }

    // Hit related methods ---------------------------------------------------------------------------------------------

    @Override
    public void handleHit(Client c, InPacket inPacket, HitInfo hitInfo) {
        var tsm = chr.getTemporaryStatManager();

        // Second Wind
        if (hitInfo.hpDamage <= 0 && hitInfo.mpDamage <= 0) {
            giveSecondWindBuff();
        }

        // Gale Barrier
        if (hitInfo.hpDamage > 0 && tsm.hasStat(GaleBarrier)) {
            var opt = tsm.getOption(GaleBarrier);
            var curBarrier = opt.nOption;
            var hpProtection = chr.getHPPerc(curBarrier);

            if (hpProtection >= hitInfo.hpDamage) {
                var minusBarrier = (int) (((double) hitInfo.hpDamage) / chr.getMaxHP() * 100);
                hitInfo.hpDamage = 0; // nullified

                // Update Barrier
                opt.nOption -= minusBarrier;
                opt.nOption = Math.max(0, opt.nOption);
                tsm.updateBuff(GaleBarrier, opt);
            } else {
                // Lose Barrier
                hitInfo.hpDamage -= hpProtection;

                // Update Barrier
                tsm.removeStat(GaleBarrier);
            }
        }
        super.handleHit(c, inPacket, hitInfo);
    }

    private void giveSecondWindBuff() {
        Skill skill = chr.getSkill(SECOND_WIND);
        if (skill == null) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        var slv = skill.getCurrentLevel();
        var skillId = skill.getSkillId();
        var tOpt = si.getValue(time, slv);
        tsm.putCharacterStatValue(IndieDEF, new Option(si.getValue(pddX, slv), skillId, tOpt));
        tsm.putCharacterStatValue(IndiePAD, new Option(si.getValue(indiePad, slv), skillId, tOpt));
        tsm.sendSetStatPacket();
    }

    @Override
    public void stopTimers() {
        EventManager.stopTimer(windEnergyTimer);
        EventManager.stopTimer(startSongOfHeavenTimer);

        super.stopTimers();
    }
}
