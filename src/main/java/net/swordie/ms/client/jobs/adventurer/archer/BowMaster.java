package net.swordie.ms.client.jobs.adventurer.archer;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillStat;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.debuff.DebuffInfo;
import net.swordie.ms.client.character.skills.debuff.DebuffUtil;
import net.swordie.ms.client.character.skills.info.*;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.Effect;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.connection.packet.UserRemote;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.ForceAtomEnum;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.*;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

public class BowMaster extends Archer {
    public static final int SOUL_ARROW_BOW = 3101004;
    public static final int ARROW_BOMB = 3101005;
    public static final int BOW_BOOSTER = 3101002;
    public static final int FINAL_ATTACK_BOW = 3100001;
    public static final int QUIVER_CARTRIDGE = 3101009;
    public static final int QUIVER_CARTRIDGE_ATOM = 3100010;


    public static final int PHOENIX = 3111005;
    public static final int FLAME_SURGE = 3111003;
    public static final int FOCUSED_FURY = 3110012;
    public static final int MORTAL_BLOW_BOW = 3110001;
    public static final int ARROW_PLATTER = 3111013;
    public static final int ARROW_PLATTER_TURRET = 95001000; // placed down arrow platter
    public static final int EVASION_BOOST = 3110007;
    public static final int HOOKSHOT_BM = 3111010;
    public static final int RECKLESS_HUNT_BOW = 3111011;
    public static final int COVERING_FIRE = 3101008;


    public static final int HURRICANE = 3121020;
    public static final int SHARP_EYES_BOW = 3121002;
    public static final int SHARP_EYES_BOW_PERSIST = 3120043;
    public static final int SHARP_EYES_BOW_GUARDBREAK = 3120044;
    public static final int SHARP_EYES_BOW_CRITICAL_CHANCE = 3120045;
    public static final int ILLUSION_STEP_BOW = 3121007;
    public static final int BINDING_SHOT = 3121014;
    public static final int ENCHANTED_QUIVER = 3121016;
    public static final int ENCHANTED_QUIVER_ATOM = 3120017;
    public static final int MAPLE_WARRIOR_BOW = 3121000;
    public static final int HEROS_WILL_BM = 3121009;
    public static final int EPIC_ADVENTURE_BOW = 3121053;
    public static final int ADVANCED_FINAL_ATTACK_BOW = 3120008;
    public static final int ARMOR_BREAK = 3120018;
    public static final int CONCENTRATION = 3121054;
    public static final int GRITTY_GUST = 3121052;


    // V skills
    public static final int STORM_OF_ARROWS = 400031002;
    public static final int STORM_OF_ARROWS_AA = 400030002;
    public static final int INHUMAN_SPEED = 400031020;
    public static final int INHUMAN_SPEED_2 = 400031021;
    public static final int QUIVER_BARRAGE = 400031028;
    public static final int QUIVER_BARRAGE_ATOM = 400031029;
    public static final int SILHOUETTE_MIRAGE = 400031053;
    public static final int SILHOUETTE_MIRAGE_ATTACK = 400031054;


    private int inhumanSpeedCounter = 0;
    private ScheduledFuture silhouetteMirageTimer;
    private QuiverCartridge quiverCartridge;

    public static final int[] handledAttacks = new int[] {
            STORM_OF_ARROWS,
            STORM_OF_ARROWS_AA,
            INHUMAN_SPEED,
            INHUMAN_SPEED_2,
            QUIVER_BARRAGE,
            QUIVER_BARRAGE_ATOM,
            SILHOUETTE_MIRAGE,
            SILHOUETTE_MIRAGE_ATTACK,
    };


    public BowMaster(Char chr) {
        super(chr);
    }


    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isBowMaster(id);
    }


    public void createInhumanSpeedForceAtom(int mobId) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Mob mob = (Mob) chr.getField().getLifeByObjectID(mobId);
        if (!chr.hasSkill(INHUMAN_SPEED)
                || (tsm.getOptByCTSAndSkill(ExtraSkillCTS, INHUMAN_SPEED) == null && tsm.getOptByCTSAndSkill(ExtraSkillCTS, INHUMAN_SPEED_2) == null)
                || mob == null) {
            return;
        }

        int randomfImpact = new Random().nextInt(1) + 35;
        int randomsImpact = new Random().nextInt(1) + 5;

        ForceAtomEnum fae = ForceAtomEnum.INHUMAN_SPEED;
        ForceAtomInfo forceAtomInfo = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), randomfImpact, randomsImpact,
                chr.isLeft() ? 270 : 90, 0, Util.getCurrentTime(), 1, 0,
                new Position());
        chr.createForceAtom(new ForceAtom(chr.getId(), fae, mob.getObjectId(), INHUMAN_SPEED_2, forceAtomInfo));
    }

    private void quiverCartridge(TemporaryStatManager tsm, AttackInfo attackInfo) {
        if (quiverCartridge == null) {
            return;
        }
        if (attackInfo.skillId == ENCHANTED_QUIVER_ATOM || attackInfo.skillId == QUIVER_CARTRIDGE_ATOM) {
            return;
        }

        Skill skill = chr.hasSkill(ENCHANTED_QUIVER) ? chr.getSkill(ENCHANTED_QUIVER)
                : chr.getSkill(QUIVER_CARTRIDGE);
        var slv = skill.getCurrentLevel();
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
            if (mob == null) {
                continue;
            }
            MobTemporaryStat mts = mob.getTemporaryStat();
            if (tsm.getOptByCTSAndSkill(QuiverBarrage, QUIVER_BARRAGE) != null) {
                bloodArrowEffect(si, (byte) slv);
                mts.createAndAddBurnedInfo(chr, skill);
                quiverCartridge.decrementAmount();
                magicArrowEffect(mob, si, (byte) slv);
            } else {
                switch (quiverCartridge.getType()) {
                    case 1: // Blood
                        bloodArrowEffect(si, (byte) slv);
                        break;
                    case 2: // Poison
                        int maxStacks = si.getValue(dotSuperpos, slv);
                        mts.createAndAddBurnedInfo(chr, QUIVER_CARTRIDGE, slv, maxStacks);
                        quiverCartridge.decrementAmount();
                        break;
                    case 3: // Magic
                        magicArrowEffect(mob, si, (byte) slv);
                        break;
                }
            }
        }
        tsm.putCharacterStatValue(QuiverCatridge, quiverCartridge.getOption());
        tsm.sendSetStatPacket();
    }

    private void bloodArrowEffect(SkillInfo si, int slv) {
        quiverCartridge.decrementAmount();
        if (Util.succeedProp(si.getValue(w, slv))) {
            int healrate = si.getValue(x, slv);
            chr.heal(chr.getHPPerc(healrate));
        }
    }

    private void magicArrowEffect(Mob mob, SkillInfo si, int slv) {
        quiverCartridge.decrementAmount();
        if (Util.succeedProp(si.getValue(u, slv))) {
            ForceAtomEnum fae = ForceAtomEnum.BM_ARROW;
            ForceAtomInfo forceAtomInfo = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 13, 12,
                    (int) Util.getAngleOfTwoPositions(chr.getPosition(), mob.getPosition()), 150, Util.getCurrentTime(), 1, 0,
                    new Position());
            chr.createForceAtom(new ForceAtom(chr.getId(), fae, mob.getObjectId(), chr.hasSkill(ENCHANTED_QUIVER) ? ENCHANTED_QUIVER_ATOM : QUIVER_CARTRIDGE_ATOM, forceAtomInfo));
        }
    }

    // Attack related methods ------------------------------------------------------------------------------------------

    private boolean isBowMasterSkillId(int skillId) {
        return JobConstants.isBowMaster(SkillConstants.getSkillRootFromSkill(skillId)) || Arrays.stream(handledAttacks).anyMatch(s -> s == skillId);
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
        if (hasHitMobs && isBowMasterSkillId(attackInfo.skillId)) {
            // Quiver Cartridge | Enchanted Cartridge
            quiverCartridge(tsm, attackInfo);

            // Focused Fury
            incrementFocusedFury();

            // Mortal Blow
            incrementMortalBlow();

            // Storm of Arrows
            doStormOfArrowsAttack(attackInfo);

            // Quiver Barrage
            createQuiverBarrageForceAtom(attackInfo);

            // Inhuman Speed
            incrementInhumanSpeedCounter(attackInfo);

            // Armor Break
            procArmorBreak();
            if (chr.hasSkillOnCooldown(ARMOR_BREAK)) {
                chr.reduceSkillCoolTime(ARMOR_BREAK, 1000);
            }

            // Silhouette Mirage
            silhouetteMirageAttack(attackInfo);
        }

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        switch (attackInfo.skillId) {
            case ARROW_BOMB:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds(), new DebuffInfo(true, si.getValue(prop, slv)));
                break;
            case PHOENIX:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = 3;

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds(), new DebuffInfo(true, si.getValue(prop, slv)));
                break;
            case FLAME_SURGE:
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }

                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.createAndAddBurnedInfo(chr, skill);
                }
                break;
            case BINDING_SHOT:
                o1.nOption = si.getValue(s, slv); // Already negative in SI
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                o2.nOption = -si.getValue(x, slv);
                o2.rOption = skillID;
                o2.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, Map.of(MobStat.Speed, o1, MobStat.DebuffHealing, o2), attackInfo.getMobIds());
                break;
            case GRITTY_GUST:
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }

                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.createAndAddBurnedInfo(chr, skill);
                }
                break;
        }
        super.handleAttack(c, attackInfo);
    }

    private void silhouetteMirageAttack(AttackInfo attackInfo) {
        var skill = chr.getSkill(SILHOUETTE_MIRAGE);
        if (skill == null || chr.hasSkillOnCooldown(SILHOUETTE_MIRAGE_ATTACK)) {
            return;
        }

        var tsm = chr.getTemporaryStatManager();
        if (attackInfo.mobCount <= 0 || attackInfo.skillId == SILHOUETTE_MIRAGE_ATTACK || SkillConstants.isForceAtomSkill(attackInfo.skillId) || tsm.getOption(SilhouetteMirage).xOption <= 0) {
            return;
        }

        var si = SkillData.getSkillInfoById(skill.getSkillId());
        var siAttack = SkillData.getSkillInfoById(SILHOUETTE_MIRAGE_ATTACK);
        var slv = skill.getCurrentLevel();

        var bulletCount = si.getValue(SkillStat.bulletCount, slv);

        // Effect
        var effect = Effect.showSillhouteMirageAttack(SILHOUETTE_MIRAGE, 0, attackInfo.chrPos);
        chr.write(UserPacket.effect(effect));

        // Force Atom
        var fae = ForceAtomEnum.SILHOUTTE_MIRAGE;
        List<ForceAtomInfo> faiList = new ArrayList<>();
        List<Integer> targetList = new ArrayList<>();
        var delay = siAttack.getValue(q2, slv); // init 90  += 210 every atom
        var ballDelay = siAttack.getValue(SkillStat.ballDelay, slv);
        for (int i = 0; i < bulletCount; i++) {
            var fImpact = Util.getRandom(21, 27);
            var sImpact = Util.getRandom(7, 12);
            var fai = new ForceAtomInfo(1, fae.getInc(), fImpact, sImpact,
                    0, delay += ballDelay, Util.getCurrentTime(), 0, 0,
                    new Position(42, -150));
            var target = Util.getRandomFromCollection(attackInfo.mobAttackInfo).mobId;

            faiList.add(fai);
            targetList.add(target);
        }
        var fa = new ForceAtom(false, chr.getId(), chr.getId(), fae,
                true, targetList, SILHOUETTE_MIRAGE_ATTACK, faiList, new Rect(), 0, 0,
                new Position(), 0, new Position(), 0);
        chr.createForceAtom(fa);

        chr.addSkillCoolTime(SILHOUETTE_MIRAGE_ATTACK, si.getValue(w, slv));
    }

    private void incrementMortalBlow() {
        Skill skill = chr.getSkill(MORTAL_BLOW_BOW);
        if (skill == null) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        int amount = 1;
        if (tsm.hasStat(BowMasterMortalBlow)) {
            amount = tsm.getOption(BowMasterMortalBlow).nOption;
            if (amount < si.getValue(x, slv)) {
                amount++;
            } else {
                tsm.removeStatsBySkill(MORTAL_BLOW_BOW);
                tsm.putCharacterStatValue(IndieDamR, new Option(si.getValue(y, slv), MORTAL_BLOW_BOW, si.getValue(time, slv)));
                tsm.sendSetStatPacket();
                return;
            }
        }
        o.nOption = amount;
        o.rOption = MORTAL_BLOW_BOW;
        tsm.putCharacterStatValue(BowMasterMortalBlow, o);
        tsm.sendSetStatPacket();
    }

    private void incrementInhumanSpeedCounter(AttackInfo attackInfo) {
        if (attackInfo.skillId == INHUMAN_SPEED || SkillConstants.isForceAtomSkill(attackInfo.skillId)) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!chr.hasSkill(INHUMAN_SPEED)
                || !chr.hasSkillOnCooldown(INHUMAN_SPEED)
                || tsm.getOptByCTSAndSkill(ExtraSkillCTS, INHUMAN_SPEED) != null
                || tsm.getOptByCTSAndSkill(ExtraSkillCTS, INHUMAN_SPEED_2) != null) {
            return;
        }

        if (inhumanSpeedCounter < 10) {
            inhumanSpeedCounter++;
        } else {
            inhumanSpeedCounter = 0;
            giveInhumanPassiveBuff();
        }
    }

    private void giveInhumanPassiveBuff() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o1 = new Option();
        SkillInfo si = SkillData.getSkillInfoById(INHUMAN_SPEED);
        int slv = chr.getSkillLevel(INHUMAN_SPEED);
        o1.nOption = 1;
        o1.rOption = INHUMAN_SPEED_2;
        o1.tOption = si.getValue(q, slv);
        tsm.putCharacterStatValue(ExtraSkillCTS, o1);
        tsm.sendSetStatPacket();
    }

    private void createQuiverBarrageForceAtom(AttackInfo attackInfo) {
        var tsm = chr.getTemporaryStatManager();
        if (chr.hasSkillOnCooldown(-QUIVER_BARRAGE_ATOM) || attackInfo.skillId == STORM_OF_ARROWS_AA
                || SkillConstants.isForceAtomSkill(attackInfo.skillId) || tsm.getOptByCTSAndSkill(QuiverBarrage, QUIVER_BARRAGE) == null) {
            return;
        }
        var si = SkillData.getSkillInfoById(QUIVER_BARRAGE);
        var slv = chr.getSkillLevel(QUIVER_BARRAGE);

        var pos = new Position(attackInfo.mobAttackInfo.get(0).hitX, attackInfo.mobAttackInfo.get(0).hitY);

        int firstImpact = Util.getRandom(15, 35);
        int secondImpact = Util.getRandom(2, 5);
        ForceAtomEnum fae = ForceAtomEnum.QUIVER_FULL_BURST;
        var faiList = new ArrayList<ForceAtomInfo>();
        var targetList = new ArrayList<Integer>();
        for (int i = 0; i < 6; i++) {
            ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), firstImpact, secondImpact,
                    attackInfo.left ? 320 : 40, i * 100, Util.getCurrentTime(), 1, 0,
                    new Position(0, 0));
            faiList.add(fai);
            targetList.add(0);
        }
        ForceAtom fa = new ForceAtom(chr.getId(), fae, targetList, QUIVER_BARRAGE_ATOM, faiList);
        fa.setForcedTargetPosition(pos);
        chr.createForceAtom(fa);
        chr.addSkillCoolTime(-QUIVER_BARRAGE_ATOM, si.getValue(z, slv) * 1000);
    }

    private void procArmorBreak() {
        if (!chr.hasSkill(ARMOR_BREAK) || chr.hasSkillOnCooldown(ARMOR_BREAK)) {
            return;
        }
        Skill skill = chr.getSkill(ARMOR_BREAK);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();

        chr.write(UserPacket.effect(Effect.skillUse(skill.getSkillId(), chr.getLevel(), slv, 0)));
        chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.skillUse(skill.getSkillId(), chr.getLevel(), slv, 0)));
        chr.addSkillCoolTime(skill.getSkillId(), si.getValue(y, slv) * 1000);
    }

    private void incrementFocusedFury() {
        if (!chr.hasSkill(FOCUSED_FURY)) {
            return;
        }
        Skill skill = chr.getSkill(FOCUSED_FURY);
        int slv = skill.getCurrentLevel();
        SkillInfo si = SkillData.getSkillInfoById(FOCUSED_FURY);
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o2 = new Option();
        int amount = 0;

        if (tsm.hasStat(BowMasterConcentration)) {
            amount = tsm.getOption(BowMasterConcentration).nOption;
            if (amount < (100 / si.getValue(x, slv))) {
                amount++;
            }
        }
        o2.nOption = amount;
        o2.rOption = FOCUSED_FURY;
        o2.tOption = 10;
        tsm.putCharacterStatValue(BowMasterConcentration, o2);
        tsm.sendSetStatPacket();
        if (amount % 10 == 0 && amount < (100 / si.getValue(x, slv))) {
            chr.write(UserPacket.effect(Effect.skillUse(skill.getSkillId(), chr.getLevel(), slv, 0)));
            chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.skillUse(skill.getSkillId(), chr.getLevel(), slv, 0)));
        }
    }

    private void doStormOfArrowsAttack(AttackInfo attackInfo) {
        if (attackInfo.skillId == STORM_OF_ARROWS_AA || SkillConstants.isForceAtomSkill(attackInfo.skillId) || chr.hasSkillOnCooldown(-STORM_OF_ARROWS_AA)) {
            return;
        }

        TemporaryStatManager tsm = chr.getTemporaryStatManager();

        if (tsm.getOptByCTSAndSkill(IndieDamR, STORM_OF_ARROWS) != null) {
            Field field = chr.getField();
            for (int i = 0; i < 5; i++) {
                Mob mob = Util.getRandomFromCollection(chr.getField().getMobs());
                AffectedArea aa = AffectedArea.getPassiveAA(chr, STORM_OF_ARROWS_AA, (byte) chr.getSkill(STORM_OF_ARROWS).getCurrentLevel());
                if (mob == null) {
                    continue;
                }
                aa.setPosition(new Position(mob.getX() + 250, mob.getY()));
                aa.setDuration(2500);
                int randomX = new Random().nextInt(200) - 100;
                int randomY = new Random().nextInt(150) - 75;
                aa.setPosition(new Position(aa.getX() + randomX, aa.getY() + randomY));
                aa.setRect(aa.getPosition().getRectAround(SkillData.getSkillInfoById(STORM_OF_ARROWS_AA).getLastRect()));
                field.spawnAffectedArea(aa);
            }
            chr.addSkillCoolTime(-STORM_OF_ARROWS_AA, chr.getSkillStatValue(x, STORM_OF_ARROWS) * 1000);
        }
    }

    private Skill getFinalAtkSkill() {
        Skill skill = null;
        if (chr.hasSkill(FINAL_ATTACK_BOW)) {
            skill = chr.getSkill(FINAL_ATTACK_BOW);
        }
        if (chr.hasSkill(ADVANCED_FINAL_ATTACK_BOW)) {
            skill = chr.getSkill(ADVANCED_FINAL_ATTACK_BOW);
        }
        return skill;
    }

    @Override
    public int getFinalAttackSkill() {
        Skill faSkill = getFinalAtkSkill();
        if (faSkill != null) {
            SkillInfo si = SkillData.getSkillInfoById(faSkill.getSkillId());
            int slv = faSkill.getCurrentLevel();
            int proc = si.getValue(prop, slv);
            if (Util.succeedProp(proc)) {
                return faSkill.getSkillId();
            }
        }
        return super.getFinalAttackSkill();
    }

    @Override
    public void handleKeyDownSkill(Char chr, int skillID, InPacket inPacket) {
        var tsm = chr.getTemporaryStatManager();

        if (skillID == COVERING_FIRE) {
            tsm.putCharacterStatValue(IndieStance, new Option(100, COVERING_FIRE, 0));
        }

        super.handleKeyDownSkill(chr, skillID, inPacket);
    }

    @Override
    public void handleCancelKeyDownSkill(Char chr, int skillID) {
        var tsm = chr.getTemporaryStatManager();

        if (skillID == COVERING_FIRE) {
            tsm.removeStatsBySkill(COVERING_FIRE);
        }

        super.handleCancelKeyDownSkill(chr, skillID);
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
        switch (skillId) {
            case QUIVER_CARTRIDGE:
                if (!tsm.hasStat(AdvancedQuiver)) {
                    if (quiverCartridge == null) {
                        quiverCartridge = new QuiverCartridge(chr);
                    } else if (tsm.hasStat(QuiverCatridge)) {
                        quiverCartridge.incType();
                    }
                    o1 = quiverCartridge.getOption();
                    tsm.putCharacterStatValue(QuiverCatridge, o1);
                }
                break;
            case RECKLESS_HUNT_BOW:
                if (tsm.hasStatBySkillId(skillId)) {
                    tsm.removeStatsBySkill(skillId);
                } else {
                    o1.nOption = -si.getValue(x, slv);
                    o1.rOption = skillId;
                    tsm.putCharacterStatValue(IndiePDDR, o1);
                    o2.nOption = si.getValue(indiePMdR, slv);
                    o2.rOption = skillId;
                    tsm.putCharacterStatValue(IndiePMdR, o2);
                    o3.nOption = si.getValue(padX, slv);
                    o3.rOption = skillId;
                    tsm.putCharacterStatValue(PAD, o3);
                }
                break;
            case ENCHANTED_QUIVER:
                if (!tsm.hasStat(QuiverBarrage)) {
                    o1.nOption = 1;
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(AdvancedQuiver, o1);
                }
                break;
            case CONCENTRATION:
                o1.nOption = si.getValue(indiePad, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePAD, o1);
                o2.nOption = si.getValue(x, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieStance, o2);
                o3.nOption = si.getValue(y, slv);
                o3.rOption = skillId;
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(Preparation, o3); //preparation = BD%
                break;
            case STORM_OF_ARROWS:
                o1.nOption = si.getValue(indieDamR, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                break;
            case INHUMAN_SPEED:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(ExtraSkillCTS, o1);
                break;
            case QUIVER_BARRAGE:
                tsm.removeStatsBySkill(ENCHANTED_QUIVER);
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(QuiverBarrage, o1);
                break;
            case SILHOUETTE_MIRAGE:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.xOption = 0; // clones
                tsm.putCharacterStatValue(SilhouetteMirage, o1);
                EventManager.stopTimer(silhouetteMirageTimer);
                var delay = si.getValue(u, slv);
                if (delay > 0) {
                    silhouetteMirageTimer = EventManager.addFixedRateEvent(this::increaseSilhouetteMirageClone, delay, delay, TimeUnit.SECONDS);
                }
                break;
        }
        tsm.sendSetStatPacket();
    }

    private void increaseSilhouetteMirageClone() {
        var tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(SilhouetteMirage)) {
            return;
        }

        var opt = tsm.getOption(SilhouetteMirage);
        opt.xOption++;
        opt.xOption = Math.max(0, Math.min(opt.xOption, 2));
        tsm.updateBuffExtendTime(SilhouetteMirage, opt);
    }

    private void decreaseSilhouetteMirageClone() {
        var tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(SilhouetteMirage)) {
            return;
        }

        var opt = tsm.getOption(SilhouetteMirage);
        opt.xOption--;
        opt.xOption = Math.max(0, Math.min(opt.xOption, 2));
        tsm.updateBuffExtendTime(SilhouetteMirage, opt);
    }


    // Hit related methods ---------------------------------------------------------------------------------------------


    @Override
    public void handleHit(Client c, InPacket inPacket, HitInfo hitInfo) {
        var tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(SilhouetteMirage) && tsm.getOption(SilhouetteMirage).xOption > 0) { // has Atleast 1 clone
            var si = SkillData.getSkillInfoById(SILHOUETTE_MIRAGE);
            var slv = chr.getSkillLevel(SILHOUETTE_MIRAGE);
            var threshold = chr.getHPPerc(si.getValue(y, slv));
            if (hitInfo.hpDamage >= threshold) {
                decreaseSilhouetteMirageClone();
                var protection = si.getValue(q, slv);
                hitInfo.hpDamage -= (hitInfo.hpDamage * protection) / 100D;
            }
        }
        super.handleHit(c, inPacket, hitInfo);
    }

    public void handleMobDebuffSkill(Char chr) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (chr.hasSkill(FOCUSED_FURY) && tsm.hasStat(BowMasterConcentration)) {
            tsm.removeStatsBySkill(FOCUSED_FURY);
            tsm.sendResetStatPacket();
            chr.write(UserPacket.effect(Effect.skillSpecial(FOCUSED_FURY)));
            chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.skillSpecial(FOCUSED_FURY)));
            tsm.removeAllDebuffs();
        }
    }

    @Override
    public void handleRemoveCTS(CharacterTemporaryStat cts, Option option) {
        if (cts.equals(SilhouetteMirage)) {
            EventManager.stopTimer(silhouetteMirageTimer);
        }
        super.handleRemoveCTS(cts, option);
    }

    @Override
    public void stopTimers() {
        EventManager.stopTimer(silhouetteMirageTimer);
        super.stopTimers();
    }

    public enum QCType {
        BLOOD(1),
        POISON(2),
        MAGIC(3),
        ;
        private byte val;

        QCType(int val) {
            this.val = (byte) val;
        }

        public byte getVal() {
            return val;
        }
    }

    public class QuiverCartridge {

        private int blood; // 1
        private int poison; // 2
        private int magic; // 3
        private int type;
        private Char chr;

        public QuiverCartridge(Char chr) {
            blood = getMaxNumberOfArrows(QCType.BLOOD.getVal());
            poison = getMaxNumberOfArrows(QCType.POISON.getVal());
            magic = getMaxNumberOfArrows(QCType.MAGIC.getVal());
            type = 1;
            this.chr = chr;
        }

        public void decrementAmount() {
            if (chr.getTemporaryStatManager().hasStat(AdvancedQuiver) || chr.getTemporaryStatManager().hasStat(QuiverBarrage)) {
                return;
            }
            switch (type) {
                case 1:
                    blood--;
                    if (blood == 0) {
                        blood = getMaxNumberOfArrows(QCType.BLOOD.getVal());
                        incType();
                    }
                    break;
                case 2:
                    poison--;
                    if (poison == 0) {
                        poison = getMaxNumberOfArrows(QCType.POISON.getVal());
                        incType();
                    }
                    break;
                case 3:
                    magic--;
                    if (magic == 0) {
                        magic = getMaxNumberOfArrows(QCType.MAGIC.getVal());
                        incType();
                    }
                    break;
            }
        }

        public int getNumberArrowInQuiverFromType(int type) {
            switch (type) {
                case 1:
                    return blood;
                case 2:
                    return poison;
                case 3:
                    return magic;
            }
            return -1;
        }

        public void incType() {
            type = (type % 3) + 1;
            chr.write(UserPacket.effect(Effect.skillModeEffect(QUIVER_CARTRIDGE, type - 1, quiverCartridge.getNumberArrowInQuiverFromType(type))));
            chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.skillModeEffect(QUIVER_CARTRIDGE, type - 1, quiverCartridge.getNumberArrowInQuiverFromType(type))));
        }

        public int getTotal() {
            return blood * 10000 + poison * 100 + magic;
        }

        public Option getOption() {
            Option o = new Option();
            o.nOption = getTotal();
            o.rOption = QUIVER_CARTRIDGE;
            o.xOption = type;
            return o;
        }

        public int getType() {
            return type;
        }
    }

    public int getMaxNumberOfArrows(int type) {
        int num = 0;
        Skill firstSkill = chr.getSkill(QUIVER_CARTRIDGE);
        Skill secondSkill = chr.getSkill(ENCHANTED_QUIVER);
        if (secondSkill != null && secondSkill.getCurrentLevel() > 0) {
            if (type == 3) {
                return chr.getSkillStatValue(z, secondSkill.getSkillId());
            } else {
                return chr.getSkillStatValue(y, secondSkill.getSkillId());
            }

        } else if (firstSkill != null && firstSkill.getCurrentLevel() > 0) {
            num = 10;
        }
        return type == 3 ? num * 2 : num; // Magic Arrow has 2x as many arrows
    }

}
