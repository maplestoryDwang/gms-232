package net.swordie.ms.client.jobs.flora;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.avatar.EarStyle;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.items.BodyPart;
import net.swordie.ms.client.character.items.Equip;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtomCollisionInfo;
import net.swordie.ms.client.character.skills.info.*;
import net.swordie.ms.client.character.skills.shootobject.ShootObjectSkillInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.MobConstants;
import net.swordie.ms.constants.SkillChangeConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.AssistType;
import net.swordie.ms.enums.ForceAtomEnum;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.enums.Stat;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.ImmovableObj;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.*;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * @author Sjonnie
 * Created on 6/25/2018.
 */
public class Illium extends Job {

    public static final int SHELTER_RETURN = 150001021; // requires Complete QuestId  34900
    public static final int MAGIC_CONVERSION = 150000079;

    public static final int EX = 152001003;
    public static final int RADIANT_ORB = 152001002;
    public static final int RADIANT_JAVELIN = 152001001;
    public static final int CRYSTALLINE_WINGS = 152001004;
    public static final int CRYSTALLINE_WINGS_FLY = 152001005;
    public static final int LUCENT_BRAND = 152000007;

    public static final int REACTION_DESTRUCTION = 152100001;
    public static final int REACTION_DOMINATION = 152100002;
    public static final int DEPLOY_CRYSTAL = 152101000;
    public static final int REPOSITION_CRYSTAL = 152101003;
    public static final int REPOSITION_CRYSTAL_2 = 152101004;
    public static final int CRYSTAL_BATTERY = 152100010;
    public static final int VORTEX_OF_LIGHT = 152101006;
    public static final int UMBRAL_BRAND = 152100012;
    public static final int GAUNTLET_FRENZY = 152101007;
    public static final int MACHINA = 152101008;
    public static final int AEGIS_OF_LIGHT = 152100011;

    public static final int CRYSTAL_BATTERY_II = 152110008;
    public static final int LUCENT_BRAND_II = 152110009;
    public static final int UMBRAL_BRAND_II = 152110010;
    public static final int RESONANCE = 152111007;
    public static final int REACTION_DESTRUCTION_II = 152110001;
    public static final int REACTION_DOMINATION_II = 152110002;
    public static final int RADIANT_JAVELIN_ENHANCED = 152110004;

    public static final int RADIANT_ORB_II = 152120003;
    public static final int CRYSTAL_BATTERY_III = 152120014;
    public static final int LUCENT_BRAND_III = 152120012;
    public static final int UMBRAL_BRAND_III = 152120013;
    public static final int CRYSTAL_SKILL_DEUS = 152121005;
    public static final int HERO_OF_THE_FLORA = 152121009;
    public static final int FLORAN_HERO_WILL = 152121010;
    public static final int FLASH_CRYSTAL_BATTERY = 152121011;
    public static final int RADIANT_JAVELIN_II = 152120001;
    public static final int RADIANT_JAVELIN_II_SPLIT = 152120002;
    public static final int LONGINUS_SPEAR = 152121004;
    public static final int WINGS_OF_GLORY = 152111003;
    public static final int DEUS_SUB = 152121006;
    public static final int RESONANT_WINGS = 152120008;
    public static final int RESONANT_WINGS_ATOM = 152120017;
    public static final int VORTEX_WINGS = 152121007;

    public static final int DIVINE_WRATH = 152121042;
    public static final int CRYSTALLINE_BULWARK = 152121043;
    public static final int LONGINUS_ZONE = 152121041;

    // V skills
    public static final int CRYSTAL_IGNITION = 400021061;
    public static final int REFLECTION_SPECTRAL_BLAST = 400021062;
    public static final int TEMPLAR_KNIGHT = 400021063;
    public static final int TEMPLAR_KNIGHT_SHOOT_OBJECT = 400021064;
    public static final int TEMPLAR_KNIGHT_SHOOT_OBJECT_2 = 400021065;
    public static final int CRYSTALLINE_SPIRIT = 400021068;

    public static final int CRYSTAL_GATE = 400021099;
    public static final int CRYSTAL_GATE_PORTAL = 400021100;
    public static final int CRYSTAL_GATE_PORTAL_ATTACK = 400021111;


    public static final int CRYSTAL_SKILL_ID_VORTEX_OF_LIGHT = 1;
    public static final int CRYSTAL_SKILL_ID_RESONANCE = 2;
    public static final int CRYSTAL_SKILL_ID_DEUS = 3;
    public static final int CRYSTAL_SKILL_ID_WINGS_OF_GLORY = 4;
    public static final int CRYSTAL_SKILL_ID_VORTEX_WINGS = 5;

    private static final int[] lucentSkills = new int[]{
            LUCENT_BRAND,
            LUCENT_BRAND_II,
            LUCENT_BRAND_III
    };

    private static final int[] umbralSkills = new int[]{
            UMBRAL_BRAND,
            UMBRAL_BRAND_II,
            UMBRAL_BRAND_III
    };

    public Map<Integer, Boolean> crystalSkillMap = new HashMap<>() {{
        put(CRYSTAL_SKILL_ID_VORTEX_OF_LIGHT, true);
        put(CRYSTAL_SKILL_ID_RESONANCE, true);
        put(CRYSTAL_SKILL_ID_DEUS, true);
        put(CRYSTAL_SKILL_ID_WINGS_OF_GLORY, true);
        put(CRYSTAL_SKILL_ID_VORTEX_WINGS, true);
    }};

    private static final int[] addedSkills = new int[]{
            SHELTER_RETURN,
            MAGIC_CONVERSION,
    };

    private ScheduledFuture resonantWingsTimer;
    private int swLonginusDecreaseCDCount;

    public Illium(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id)) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setCurrentLevel(skill.getMasterLevel());
                    chr.addSkill(skill);
                }
            }
            if (!chr.getQuestManager().hasQuestCompleted(34900)) {
                chr.getQuestManager().completeQuest(34900); // required to get quests
            }
        }
    }

    public void increaseCrystallineSpirit() {
        if (!chr.hasSkill(CRYSTALLINE_SPIRIT)) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        int count = 1;
        if (tsm.hasStat(StackOverTimeSkill)) {
            count = tsm.getOption(StackOverTimeSkill).nOption;
            if (count < 2) {
                count++;
            }
        }
        updateCrystallineSpirit(count);
    }

    private void updateCrystallineSpirit(int count) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        o.nOption = count;
        o.rOption = CRYSTALLINE_SPIRIT;
        tsm.putCharacterStatValue(StackOverTimeSkill, o);
        tsm.sendSetStatPacket();
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isIllium(id);
    }


    public Summon getCrystal() {
        return chr.getField().getSummons().stream().filter(s -> s.getSkillID() == DEPLOY_CRYSTAL && s.getChr() == chr).findAny().orElse(null);
    }

    private int getCrystalCharge() {
        var crystal = getCrystal();
        if (crystal == null) {
            return 0;
        }
        return crystal.getCount();
    }

    private void setCrystalCharge(int charge) {
        var crystal = getCrystal();
        if (crystal != null) {
            crystal.setCount(charge);
        }
    }

    private void reduceCrystalCharge(int decCharge) {
        setCrystalCharge(Math.max(0, getCrystalCharge() - decCharge));
    }

    private int getCrystalChargeBySkill(int skillId) {
        switch (skillId) {
            case CRYSTAL_SKILL_ID_VORTEX_OF_LIGHT:
                return 30;
            case CRYSTAL_SKILL_ID_RESONANCE:
                return 60;
            case CRYSTAL_SKILL_ID_DEUS:
                return 90;
            case CRYSTAL_SKILL_ID_WINGS_OF_GLORY:
                return 150;
            case CRYSTAL_SKILL_ID_VORTEX_WINGS:
                return 30;
            default:
                return 0;
        }
    }

    private void resetCrystalBattery() {
        // [Illium] Custom Skill Change
        crystalSkillMap.put(CRYSTAL_SKILL_ID_VORTEX_OF_LIGHT, !SkillChangeConstants.CUSTOM_GAUGE_SYSTEM);
        crystalSkillMap.put(CRYSTAL_SKILL_ID_RESONANCE, !SkillChangeConstants.CUSTOM_GAUGE_SYSTEM);
        crystalSkillMap.put(CRYSTAL_SKILL_ID_DEUS, !SkillChangeConstants.CUSTOM_GAUGE_SYSTEM);
        crystalSkillMap.put(CRYSTAL_SKILL_ID_WINGS_OF_GLORY, !SkillChangeConstants.CUSTOM_GAUGE_SYSTEM);
        crystalSkillMap.put(CRYSTAL_SKILL_ID_VORTEX_WINGS, !SkillChangeConstants.CUSTOM_GAUGE_SYSTEM);
        var crystal = getCrystal();
        chr.getField().broadcastPacket(Summoned.stateChanged(crystal, 2, crystalSkillMap));
        chr.getField().broadcastPacket(Summoned.summonUpgradeStage(crystal, 3, 0, 0)); // resets crystal attacks
    }

    public void doResonanceSkill() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        var crystal = getCrystal();
        chr.getField().broadcastPacket(Summoned.stateChanged(crystal, 1, crystalSkillMap));
        if (!chr.hasSkill(RESONANCE)) {
            return;
        }
        Skill skill = chr.getSkill(RESONANCE);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        o.nOption = 1;
        o.rOption = skill.getSkillId();
        o.tOption = si.getValue(x, slv);
        tsm.putCharacterStatValue(Resonance, o);
        tsm.sendSetStatPacket();

        // [Illium] Custom Skill Change
        if (SkillChangeConstants.CUSTOM_GAUGE_SYSTEM) {
            reduceCrystalCharge(getCrystalChargeBySkill(CRYSTAL_SKILL_ID_RESONANCE));
            changeCrystalCharge(getCrystalCharge());
        } else {
            crystalSkillMap.put(CRYSTAL_SKILL_ID_RESONANCE, false);
        }

        chr.getField().broadcastPacket(Summoned.stateChanged(crystal, 2, crystalSkillMap));
        chr.getField().broadcastPacket(Summoned.summonUpgradeStage(crystal, 3, 0, 0)); // resets crystal attacks
    }

    public void giveResonanceBenefits(List<Mob> mobs, List<Char> chrs) {
        if (!chr.hasSkill(RESONANCE)) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(RESONANCE);
        int slv = chr.getSkillLevel(RESONANCE);

        for (Mob mob : mobs) {
            applyUmbralBrand(mob);
            chr.getField().broadcastPacket(MobPool.effectBySkill(mob, RESONANCE));
        }
        for (Char pChr : chrs) {
            pChr.heal(pChr.getHPPerc(si.getValue(damage, slv)));
        }
        gainLucentBrand();
    }

    public void handleCrystalSkillRequest(int skillId) {
        var destructionSkill = getDestructionSkill();
        int increment = 0;
        switch (skillId) {
            case RADIANT_JAVELIN:
            case RADIANT_JAVELIN_II:
                if (!chr.hasSkillOnCooldown(destructionSkill) && destructionSkill == REACTION_DESTRUCTION_II) {
                    useCrystalSkill(destructionSkill);
                }
                increment = 1;
                break;
            case RADIANT_ORB:
            case RADIANT_ORB_II:
                increment = 2;
                break;
            case LONGINUS_SPEAR:
                if (!chr.hasSkillOnCooldown(destructionSkill) && destructionSkill == REACTION_DESTRUCTION_II) {
                    useCrystalSkill(destructionSkill);
                }
                increment = 3;
                break;

            // [Illium] Custom Skill Change
            case LONGINUS_ZONE:
                if (SkillChangeConstants.REACT_ON_LONGINUS_ZONE) {
                    if (destructionSkill == REACTION_DESTRUCTION_II) {
                        useCrystalSkill(destructionSkill, false);
                    }
                    increment = SkillChangeConstants.REACT_ON_LONGINUS_ZONE_INCREASE; // [Illium] Custom Skill Change
                }
                break;

            // [Illium] Custom Skill Change
            case TEMPLAR_KNIGHT:
                if (SkillChangeConstants.REACT_ON_TEMPLAR_KNIGHT) {
                    if (destructionSkill == REACTION_DESTRUCTION_II) {
                        useCrystalSkill(destructionSkill, false);
                    }
                    increment = SkillChangeConstants.REACT_ON_TEMPLAR_KNIGHT_INCREASE; // [Illium] Custom Skill Change
                }
                break;

        }
        if (hasFlashCrystalBattery()) {
            increment *= 2;
        }
        changeCrystalCharge(getCrystalCharge() + increment);

        // [Illium] Custom Skill Change
        if (SkillChangeConstants.DECREASE_LONGINUS_SPEAR_CD) {
            swDecreaseLonginusSpear(increment);
        }
    }

    public void useCrystalSkill(int skillid) {
        useCrystalSkill(skillid, true);
    }

    public void useCrystalSkill(int skillid, boolean applyCooltime) {
        var crystal = getCrystal();
        if (applyCooltime) {
            chr.addSkillCoolTime(skillid, chr.getSkillStatValue(cooltime, skillid) * 1000);
        }
        chr.write(Summoned.summonUseSpecifiedSkill(crystal, skillid));
        chr.getField().broadcastPacket(Summoned.summonUpgradeStage(crystal, 3, 0, 0)); // resets crystal attacks
    }

    public void useCrystallineSpiritSkill(Summon crystallineSpirit, int skillID) {
        useCrystallineSpiritSkill(crystallineSpirit, skillID, true);
    }

    public void useCrystallineSpiritSkill(Summon crystallineSpirit, int skillID, boolean applyCooltime) {
        if (!chr.hasSkill(skillID)) {
            return;
        }
        var cd = 0;
        if (applyCooltime) {
            cd = chr.getSkillStatValue(cooltime, skillID) * 1000;
        }

        chr.write(Summoned.summonUpgradeStage(crystallineSpirit, 5, skillID, cd));
        if (skillID == REACTION_DESTRUCTION_II) {
            chr.write(Summoned.summonUseSpecifiedSkill(crystallineSpirit, skillID));
        }
    }

    public int getDestructionSkill() {
        if (chr.hasSkill(REACTION_DESTRUCTION_II)) {
            return REACTION_DESTRUCTION_II;
        } else if (chr.hasSkill(REACTION_DESTRUCTION)) {
            return REACTION_DESTRUCTION;
        }
        return 0;
    }

    public int getDominationSkill() {
        if (chr.hasSkill(REACTION_DOMINATION_II)) {
            return REACTION_DOMINATION_II;
        } else if (chr.hasSkill(REACTION_DOMINATION)) {
            return REACTION_DOMINATION;
        }
        return 0;
    }

    private void changeCrystalCharge(int charge) {
        var crystal = getCrystal();
        if (crystal == null) {
            return;
        }
        int curState = crystal.getState();

        charge = charge < 0 ? 0 : charge > getMaxCrystalCharge() ? getMaxCrystalCharge() : charge;
        setCrystalCharge(charge);
        crystal.setState(getCrystalStateByCharge(charge));
        chr.getField().broadcastPacket(Summoned.summonUpgradeStage(crystal, 2, 0, 0)); // change Crystal Summon State

        if (curState != crystal.getState()) {
            chr.getField().broadcastPacket(Summoned.effect(crystal, 3, 0)); // new form effect
        } else {
            chr.getField().broadcastPacket(Summoned.effect(crystal, 2, 0)); // increment effect
        }

        if (getCrystalCharge() >= getMaxCrystalCharge() && !chr.getTemporaryStatManager().hasStat(CrystalBattery)) {
            giveCrystalBatteryBuff();
        }
        // [Illium] Custom Skill Change
        if (SkillChangeConstants.CUSTOM_GAUGE_SYSTEM) {
            crystalSkillMap.put(CRYSTAL_SKILL_ID_VORTEX_OF_LIGHT, getCrystalCharge() >= 30);
            crystalSkillMap.put(CRYSTAL_SKILL_ID_RESONANCE, getCrystalCharge() >= 60);
            crystalSkillMap.put(CRYSTAL_SKILL_ID_DEUS, getCrystalCharge() >= 90);
            crystalSkillMap.put(CRYSTAL_SKILL_ID_WINGS_OF_GLORY, getCrystalCharge() >= 150);
            crystalSkillMap.put(CRYSTAL_SKILL_ID_VORTEX_WINGS, getCrystalCharge() >= 30);
            chr.getField().broadcastPacket(Summoned.stateChanged(crystal, 2, crystalSkillMap));
        }
    }

    private int getMaxCrystalCharge() {
        int maxCrystalCharge = 0;
        if (chr.hasSkill(CRYSTAL_BATTERY)) {
            maxCrystalCharge = 30;
        }
        if (chr.hasSkill(CRYSTAL_BATTERY_II)) {
            maxCrystalCharge = 150;
        }
        return maxCrystalCharge;
    }

    private Skill getCrystalBatterySkill() {
        Skill skill = null;
        if (chr.hasSkill(CRYSTAL_BATTERY)) {
            skill = chr.getSkill(CRYSTAL_BATTERY);
        }
        if (chr.hasSkill(CRYSTAL_BATTERY_II)) {
            skill = chr.getSkill(CRYSTAL_BATTERY_II);
        }
        if (chr.hasSkill(CRYSTAL_BATTERY_III)) {
            skill = chr.getSkill(CRYSTAL_BATTERY_III);
        }
        return skill;
    }

    private boolean hasFlashCrystalBattery() {
        return chr.getTemporaryStatManager().hasStat(FlashCrystalBattery);
    }

    private void giveCrystalBatteryBuff() {
        if (getCrystalBatterySkill() != null) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            Option o = new Option();
            o.nOption = 1;
            o.rOption = getCrystalBatterySkill().getSkillId();
            o.tOption = 10;
            tsm.putCharacterStatValue(CrystalBattery, o);
            tsm.sendSetStatPacket();
        }
    }

    private int getCrystalStateByCharge(int count) {
        int state = 0;
        if (count >= 0) {
            state = 0;
        }
        if (count >= 30) {
            state = 1;
        }
        if (count >= 60) {
            state = 2;
        }
        if (count >= 100) {
            state = 3;
        }
        if (count >= 150) {
            state = 4;
        }
        return state;
    }

    // [Illium] Custom Skill Change
    private void swDecreaseLonginusSpear(int gaugeInc) {
        swLonginusDecreaseCDCount += gaugeInc;

        if (swLonginusDecreaseCDCount >= SkillChangeConstants.DEC_LONGINUS_GAUGE_COUNT) {
            chr.reduceSkillCoolTime(LONGINUS_SPEAR, 1000);
            swLonginusDecreaseCDCount = Math.max(0, swLonginusDecreaseCDCount - SkillChangeConstants.DEC_LONGINUS_GAUGE_COUNT);
        }
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
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        if (hasHitMobs && attackInfo.skillId != CONVERSION_OVERDRIVE_ATTACK && !SkillConstants.isSummon(attackInfo.skillId)) {
            bonusConversionOverdriveAttack();

            // Crystal Gate
            if (tsm.hasStat(CrystalGate) && attackInfo.skillId != CRYSTAL_GATE_PORTAL_ATTACK) {
                doCrystalGateAttack();
            }
        }

        switch (attackInfo.skillId) {
            case DEPLOY_CRYSTAL:
                var crystal = getCrystal();
                int attackingSkillId = attackInfo.summonSpecialSkillId;
                switch (attackingSkillId) {
                    case REACTION_DOMINATION_II:
                    case REACTION_DOMINATION:
                        applyUmbralBrandFromAttack(attackInfo);
                        // Fallthrough intended
                    case REACTION_DESTRUCTION:
                        chr.addSkillCoolTime(attackingSkillId, chr.getSkillStatValue(cooltime, attackingSkillId) * 1000);
                        break;
                    case VORTEX_OF_LIGHT:
                        // [Illium] Custom Skill Change
                        if (SkillChangeConstants.CUSTOM_GAUGE_SYSTEM) {
                            reduceCrystalCharge(getCrystalChargeBySkill(CRYSTAL_SKILL_ID_VORTEX_OF_LIGHT));
                            changeCrystalCharge(getCrystalCharge());
                        } else {
                            crystalSkillMap.put(CRYSTAL_SKILL_ID_VORTEX_OF_LIGHT, false);
                            chr.getField().broadcastPacket(Summoned.stateChanged(crystal, 2, crystalSkillMap));
                        }
                        break;
                    case REFLECTION_SPECTRAL_BLAST:
                        chr.setSkillCooldown(attackingSkillId, chr.getSkillLevel(CRYSTAL_IGNITION));
                        break;
                }
                chr.getField().broadcastPacket(Summoned.summonUpgradeStage(crystal, 3, 0, 0)); // resets crystal attacks
                break;
            case CRYSTALLINE_SPIRIT:
                attackingSkillId = attackInfo.summonSpecialSkillId;
                if (attackInfo.summon == null || attackInfo.summon.getChr() != chr) {
                    return;
                }
                switch (attackingSkillId) {
                    case REACTION_DOMINATION:
                    case REACTION_DESTRUCTION:
                    case REACTION_DOMINATION_II:
                        chr.write(Summoned.summonUpgradeStage(attackInfo.summon, 5, attackingSkillId, chr.getSkillStatValue(cooltime, attackingSkillId) * 1000));
                        break;
                }
                break;
            case VORTEX_WINGS:
                if (tsm.hasStat(WingsOfGlory)) {
                    o1.nOption = 1;
                    o1.rOption = WINGS_OF_GLORY;
                    o1.tOption = (int) tsm.getRemainingTime(WingsOfGlory, WINGS_OF_GLORY);
                    o1.xOption = tsm.getOption(WingsOfGlory).xOption - 1; // Vortex Wings
                    o1.cOption = chr.hasSkill(RESONANT_WINGS) ? 1 : 0; // Resonant Wings
                    o1.setInMillis(true);
                    tsm.putCharacterStatValue(WingsOfGlory, o1);
                    tsm.sendSetStatPacket();
                }
                break;
            case RADIANT_JAVELIN_II:
                createRadiantJavelinSplitForceAtoms(attackInfo);
                break;
            case RADIANT_JAVELIN_ENHANCED:
                createRadiantJavelinSplitGloryWingsForceAtoms(attackInfo);
                break;
        }
        super.handleAttack(c, attackInfo);
    }

    public void createResonantWingsForceAtoms() {
        Field field = chr.getField();
        Random random = new Random();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!chr.hasSkill(RESONANT_WINGS) || !tsm.hasStat(WingsOfGlory) || tsm.getOption(WingsOfGlory).cOption != 1) {
            resonantWingsTimer.cancel(true);
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(RESONANT_WINGS);
        int slv = chr.getSkillLevel(RESONANT_WINGS);
        ForceAtomEnum fae = ForceAtomEnum.GLORY_WING_WING_BEAT;

        List<Integer> targetList = new ArrayList<>();
        List<ForceAtomInfo> faiList = new ArrayList<>();
        List<Mob> mobList = field.getMobsInRect(chr.getRectAround(si.getFirstRect())).stream().filter(m -> !MobConstants.isFriendlyMob(m.getTemplateId())).collect(Collectors.toList());;

        for (int i = 0; i < mobList.size() && i < si.getValue(mobCount, slv); i++) {
            ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 40, 2,
                    random.nextInt(360), 0, Util.getCurrentTime(), 0, 0,
                    new Position());
            Mob mob = mobList.get(i);
            if (mob == null) {
                continue;
            }
            faiList.add(fai);
            targetList.add(mob.getObjectId());
        }

        ForceAtom fa = new ForceAtom(false, chr.getId(), chr.getId(), fae,
                true, targetList, RESONANT_WINGS_ATOM, faiList, si.getFirstRect(), 0, 0,
                new Position(200, 0), 0, new Position(), 0);
        chr.createForceAtom(fa);
    }

    @Override
    public void handleForceAtomCollision(ForceAtom fa, ForceAtomCollisionInfo faci) {
        var faKey = faci.forceAtomKey;
        var ownerId = faci.ownerId;

        Field field = chr.getField();
        if (fa != null) {
            switch (fa.getSkillId()) {
                case RESONANT_WINGS_ATOM:
                    Mob mob = (Mob) field.getLifeByObjectID(ownerId);
                    if (mob == null) {
                        return;
                    }
                    applyUmbralBrand(mob);
                    break;
            }
        }
        field.broadcastPacket(FieldPacket.removeForceAtom(1, chr.getId(), faKey)); // 1 = Remove By FaKey&ChrId

        super.handleForceAtomCollision(fa, faci);
    }

    public void createRadiantJavelinSplitForceAtoms(AttackInfo attackInfo) {
        if (!chr.hasSkill(RADIANT_JAVELIN_II)) {
            return;
        }

        SkillInfo si = SkillData.getSkillInfoById(RADIANT_JAVELIN_II_SPLIT);
        ForceAtomEnum fae = ForceAtomEnum.GLORY_WING_JAVELIN_SMALL;
        var mai = attackInfo.mobAttackInfo.get(0);
        var mob = mai.mob;
        if (mob == null || mob.getHp() <= mai.totalDamage) {
            return;
        }

        List<ForceAtomInfo> faiList = new ArrayList<>();
        List<Integer> targetList = new ArrayList<>();
        for (int i = 0; i < 2; i++) {
            ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 55, 6,
                    Util.getRandom(359), 250, Util.getCurrentTime(), 0, 0,
                    mob.getPosition());
            faiList.add(fai);
            targetList.add(mob.getObjectId());
        }
        ForceAtom fa = new ForceAtom(false, chr.getId(), chr.getId(), fae,
                true, targetList, RADIANT_JAVELIN_II_SPLIT, faiList, si.getFirstRect(), 0, 0,
                new Position(), 0, new Position(), 0);
        chr.createForceAtom(fa);
    }

    public void createRadiantJavelinSplitGloryWingsForceAtoms(AttackInfo attackInfo) {
        if (!chr.hasSkill(RADIANT_JAVELIN_II) || !chr.hasSkill(CRYSTAL_BATTERY_III)) {
            return;
        }

        SkillInfo si = SkillData.getSkillInfoById(RADIANT_JAVELIN_II_SPLIT);
        ForceAtomEnum fae = ForceAtomEnum.GLORY_WING_JAVELIN_SMALL;
        var mai = attackInfo.mobAttackInfo.get(0);
        var mob = mai.mob;
        if (mob == null || mob.getHp() <= mai.totalDamage) {
            return;
        }

        List<ForceAtomInfo> faiList = new ArrayList<>();
        List<Integer> targetList = new ArrayList<>();
        for (int i = 0; i < 3; i++) {
            ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 47, 6,
                    Util.getRandom(359), 250, Util.getCurrentTime(), 0, 0,
                    chr.getPosition());
            faiList.add(fai);
            targetList.add(mob.getObjectId());
        }
        ForceAtom fa = new ForceAtom(false, chr.getId(), chr.getId(), fae,
                true, targetList, RADIANT_JAVELIN_II_SPLIT, faiList, si.getFirstRect(), 0, 0,
                mob.getPosition(), 0, mob.getPosition(), 0);
        chr.createForceAtom(fa);
    }

    private void applyUmbralBrandFromAttack(AttackInfo attackInfo) {
        if (getUmbralBrandSkillID() == 0) {
            return;
        }

        Field field = chr.getField();
        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            Mob mob = field.getLifeByObjectID(Mob.class, mai.mobId);
            if (mob == null) {
                continue;
            }

            applyUmbralBrand(mob);
        }
    }

    private void applyUmbralBrand(Mob mob) {
        if (getUmbralBrandSkillID() == 0) {
            return;
        }
        MobTemporaryStat mts = mob.getTemporaryStat();
        Option o = new Option();
        SkillInfo si = SkillData.getSkillInfoById(getUmbralBrandSkillID());
        int slv = chr.getSkillLevel(getUmbralBrandSkillID());
        int stack = 1;
        if (mts.hasCurrentMobStat(MobStat.UmbralBrand)) {
            stack = mts.getCurrentOptionsByMobStat(MobStat.UmbralBrand).nOption;
            if (stack < getMaxUmbralBrand()) {
                stack++;
            }
        }
        o.nOption = stack;
        o.rOption = 152000010;
        o.tOption = si.getValue(time, slv);
        o.xOption = getDEFDecreaseByUmbralStack(stack);
        o.yOption = 0;
        o.zOption = getUmbralBrandSkillID();
        mts.addStatOptionsAndBroadcast(chr, MobStat.UmbralBrand, o);
        chr.getField().broadcastPacket(MobPool.statusEffectBySkill(mob, UMBRAL_BRAND));
    }

    private int getDEFDecreaseByUmbralStack(int stack) {
        int def = 0;
        if (stack >= 1) {
            def += chr.getSkillStatValue(w, getUmbralBrandSkillID());
        }
        if (stack >= 2) {
            def += chr.getSkillStatValue(z, getUmbralBrandSkillID());
        }
        if (stack >= 4) {
            def += chr.getSkillStatValue(y, getUmbralBrandSkillID());
        }
        return def;
    }


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
        switch (skillId) {
            case REPOSITION_CRYSTAL:
                var crystal = getCrystal();
                if (crystal != null) {
                    inPacket.decodeInt(); // unknown
                    boolean isLeft = inPacket.decodeByte() != 0;
                    Position position = inPacket.decodePosition();
                    field.broadcastPacket(Summoned.repositionSummon(crystal, REPOSITION_CRYSTAL, position)); // move crystal
                    crystal.setPosition(position);
                }
                break;
            case REPOSITION_CRYSTAL_2:
                crystal = getCrystal();
                if (crystal != null) {
                    inPacket.decodeInt(); // unknown
                    boolean isLeft = inPacket.decodeByte() != 0;
                    Position position = inPacket.decodePosition();
                    field.broadcastPacket(Summoned.summonedSetNewPosition(crystal, position)); // teleport crystal
                    crystal.setPosition(position);
                }
                break;
            case RADIANT_JAVELIN:
                ForceAtomEnum fae = ForceAtomEnum.RADIANT_JAVELIN;
                ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 50, 50,
                        0, 390, Util.getCurrentTime(), 0, 0,
                        new Position(-48, 7));
                ForceAtom fa = new ForceAtom(false, chr.getId(), chr.getId(), fae,
                        false, 0, skillId, fai, si.getFirstRect(), si.getValue(z, slv), si.getValue(range, slv),
                        new Position(), 0, new Position(), 0);
                fa.setRect2(si.getRects().get(1));
                chr.createForceAtom(fa);
                break;
            case RADIANT_JAVELIN_ENHANCED:
                si = SkillData.getSkillInfoById(RADIANT_JAVELIN_ENHANCED);

                fae = ForceAtomEnum.GLORY_WING_JAVELIN;
                fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 41, 60,
                        173, 420, Util.getCurrentTime(), 0, 0,
                        new Position());
                fa = new ForceAtom(false, chr.getId(), chr.getId(), fae,
                        false, 0, skillId, fai, si.getLastRect(), 0, 0,
                        new Position(200, 0), 0, new Position(), 0);
                chr.createForceAtom(fa);
                break;
            case RADIANT_JAVELIN_II:
                fae = ForceAtomEnum.RADIANT_JAVELIN_2;
                fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 50, 50,
                        0, 390, Util.getCurrentTime(), 0, 0,
                        new Position(-48, 7));
                fa = new ForceAtom(false, chr.getId(), chr.getId(), fae,
                        false, 0, skillId, fai, si.getFirstRect(), si.getValue(z, slv), si.getValue(range, slv),
                        new Position(), 0, new Position(), 0);
                fa.setRect2(si.getRects().get(1));
                chr.createForceAtom(fa);
                break;
            case CRYSTALLINE_WINGS_FLY:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = 1;
                tsm.putCharacterStatValue(NewFlying, o1);
                break;
            case GAUNTLET_FRENZY:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;
            case DIVINE_WRATH:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                break;
            case FLASH_CRYSTAL_BATTERY:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(FlashCrystalBattery, o1);
                break;
            case WINGS_OF_GLORY:
                if (tsm.hasStat(WingsOfGlory)) {
                    return;
                }
                while (field.getSummonByChrAndSkillId(chr, CRYSTALLINE_SPIRIT) != null) {
                    field.removeSummon(field.getSummonByChrAndSkillId(chr, CRYSTALLINE_SPIRIT));
                }
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                // [Illium] Custom Skill Change
                o1.xOption = chr.hasSkill(VORTEX_WINGS) ? SkillChangeConstants.VORTEX_WINGS_USAGES : 0; // Vortex Wings
                o1.cOption = chr.hasSkill(RESONANT_WINGS) ? 1 : 0; // Resonant Wings
                tsm.putCharacterStatValue(WingsOfGlory, o1);
                tsm.putCharacterStatValue(NewFlying, o1);
                o2.nOption = si.getValue(indiePMdR, slv) + (getCrystallineSpiritsCount() * chr.getSkillStatValue(u, CRYSTALLINE_SPIRIT));
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePMdR, o2);
                o3.nOption = si.getValue(indieBDR, slv);
                o3.rOption = skillId;
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBDR, o3);
                o4.nOption = si.getValue(indieStance, slv);
                o4.rOption = skillId;
                o4.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieStance, o4);

                if (chr.hasSkill(RESONANT_WINGS)) {
                    int executions = o1.tOption / 2;
                    EventManager.stopTimer(resonantWingsTimer);
                    resonantWingsTimer = EventManager.addFixedRateEvent(this::createResonantWingsForceAtoms, 2000, 2000, executions);
                }
                // [Illium] Custom Skill Change
                if (SkillChangeConstants.CUSTOM_GAUGE_SYSTEM) {
                    reduceCrystalCharge(getCrystalChargeBySkill(CRYSTAL_SKILL_ID_WINGS_OF_GLORY));
                    changeCrystalCharge(getCrystalCharge());
                } else {
                    crystalSkillMap.put(CRYSTAL_SKILL_ID_WINGS_OF_GLORY, false);
                }
                crystal = getCrystal();
                if (crystal != null) {
                    field.broadcastPacket(Summoned.stateChanged(crystal, 2, crystalSkillMap));
                    field.broadcastPacket(Summoned.summonUpgradeStage(crystal, 3, 0, 0)); // resets crystal attacks
                }
                field.removeSummon(crystal);
                break;
            case EX:
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Walk);
                summon.setAssistType(AssistType.AttackCounter);
                field.spawnSummonAndRemoveOld(summon);
                break;
            case MACHINA: // spawn at Crystal Position
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Fly);
                summon.setAssistType(AssistType.Attack);
                field.spawnSummonAndRemoveOld(summon);
                break;
            case CRYSTAL_SKILL_DEUS:
                tsm.removeStatsBySkill(EX);
                tsm.removeStatsBySkill(MACHINA);

                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Walk);
                field.spawnSummonAndRemoveOld(summon);

                for (int i = 0; i < 5; i++) {
                    summon = Summon.getSummonByNoCTS(chr, DEUS_SUB, slv);
                    summon.setMoveAbility(MoveAbility.Fly);
                    summon.setAssistType(AssistType.AttackCounter);
                    field.spawnSummon(summon);
                }

                // [Illium] Custom Skill Change
                if (SkillChangeConstants.CUSTOM_GAUGE_SYSTEM) {
                    reduceCrystalCharge(getCrystalChargeBySkill(CRYSTAL_SKILL_ID_DEUS));
                    changeCrystalCharge(getCrystalCharge());
                } else {
                    crystalSkillMap.put(CRYSTAL_SKILL_ID_DEUS, false);
                }
                crystal = getCrystal();
                field.broadcastPacket(Summoned.stateChanged(crystal, 2, crystalSkillMap));
                field.broadcastPacket(Summoned.summonUpgradeStage(crystal, 3, 0, 0)); // resets crystal attacks
                break;
            case DEPLOY_CRYSTAL:
                deployCrystal();
                break;
            case CONVERSION_OVERDRIVE:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(ConversionOverdrive, o1);
                break;
            case TEMPLAR_KNIGHT:
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setAssistType(AssistType.CreateShootObj);
                field.spawnSummonAndRemoveOld(summon);
                break;
            case CRYSTALLINE_BULWARK:
                int curLucentBrandStack = getCurLucentBrand();
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = (int) (si.getValue(time, slv) + curLucentBrandStack * si.getValueD(t, slv));
                tsm.putCharacterStatValue(IndieNotDamaged, o1, true);
                break;
            case LONGINUS_ZONE:
                inPacket.decodeShort();
                var y = inPacket.decodeShort();
                inPacket.decodeByte();
                var x = inPacket.decodeShort();
                inPacket.decodeByte();
                var left = inPacket.decodeByte() != 0;
                Position position = chr.getPosition().deepCopy();
                position.setX(left ? position.getX() - 500 : position.getX() + 500);

                AffectedArea aa = AffectedArea.getPassiveAA(chr, skillId, slv);
                aa.setPosition(position);
                aa.setRect(aa.getPosition().getRectAround(si.getFirstRect()));
                aa.setDuration(si.getValue(time, slv));
                field.spawnAffectedAreaAndRemoveOld(aa);
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                o1.setInMillis(true);
                tsm.putCharacterStatValue(IndieNotDamaged, o1, true);

                // [Illium] Custom Skill Change
                swReactOnLonginusZone(aa.getRect());
                break;
            case CRYSTALLINE_SPIRIT:
                crystal = getCrystal();
                if (!tsm.hasStat(StackOverTimeSkill) || crystal == null) {
                    return;
                }
                if (getCrystallineSpiritsCount() >= 2) {
                    removeFirstCrystallineSpirit();
                }
                updateCrystallineSpirit(tsm.getOption(StackOverTimeSkill).nOption - 1);
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Crystal);
                summon.setAssistType(AssistType.AttackCounter);
                summon.setCurFoothold((short) 0);
                summon.setPosition(crystal.getPosition());

                field.spawnSummon(summon);
                break;
            case CRYSTAL_GATE: // UserSkillType 7
                if (tsm.hasStat(CrystalGate)) {
                    createCrystalGate(skillUseInfo.targetPosition);
                    var o = tsm.getOption(CrystalGate);
                    o.xOption--;
                    tsm.updateBuff(CrystalGate, o);
                } else {
                    o1.nOption = 1;
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    o1.xOption = si.getValue(prop, slv) - 1; // -1 cuz we are immediately creating a gate  |  gatesRemaining
                    tsm.putCharacterStatValue(CrystalGate, o1);

                    createCrystalGate(skillUseInfo.targetPosition);

                    chr.setSkillCooldown(skillId, slv);
                }
                break;
        }
        tsm.sendSetStatPacket();
    }

    // [Illium] Custom Skill Change
    public void swReactOnLonginusZone(Rect rect) {
        for (var crystal : getAllCrystals()) {
            if (SkillChangeConstants.REACT_ON_LONGINUS_ZONE && crystal != null) {
                var isInZone = rect.hasPositionInside(crystal.getPosition());
                if (isInZone) {
                    if (crystal.getSkillID() == DEPLOY_CRYSTAL) {
                        handleCrystalSkillRequest(LONGINUS_ZONE);
                    } else {
                        useCrystallineSpiritSkill(crystal, getDestructionSkill(), false);
                    }
                }
            }
        }
    }

    public void swReactOnTemplarKnight(ShootObjectSkillInfo sosi) {
        var maxDelay = 600;
        var minDelay = 10;
        if (SkillChangeConstants.REACT_ON_TEMPLAR_KNIGHT) {
            var shootObj = sosi.getShootObjects().get(0);
            var flip = shootObj.isFlip();
            var templarKnight = chr.getField().getSummonByChrAndSkillId(chr, TEMPLAR_KNIGHT);
            if (templarKnight != null) {
                var templarPos = templarKnight.getPosition();
                Rect rect = templarPos.getRectAround(new Rect(-1200, -200, 20, 20));
                if (flip) {
                    rect = rect.horizontalFlipAround(templarPos.getX());
                }
                for (var crystal : getAllCrystals()) {
                    if (crystal != null) {
                        if (rect.hasPositionInside(crystal.getPosition())) {

                            // Math to make effect delays based on how far crystal is from templar knight
                            var xDiff = Math.abs(templarPos.getX() - crystal.getPosition().getX());
                            var xDiffMax = 1200;
                            var ratio = ((double) xDiff / xDiffMax);
                            var delay = Math.max(minDelay, Math.min((int) ((double) maxDelay * ratio), maxDelay)); // ms

                            if (crystal.getSkillID() == DEPLOY_CRYSTAL) {
                                EventManager.addEvent(() -> handleCrystalSkillRequest(TEMPLAR_KNIGHT), delay, TimeUnit.MILLISECONDS);
                            } else {
                                EventManager.addEvent(() -> useCrystallineSpiritSkill(crystal, getDestructionSkill(), false), delay, TimeUnit.MILLISECONDS);
                            }
                        }
                    }
                }
            }
        }
    }

    private void doCrystalGateAttack() {
        var skillId = CRYSTAL_GATE_PORTAL_ATTACK;
        if (chr.hasSkillOnCooldown(skillId)) {
            return;
        }

        chr.write(UserLocal.userBonusAttackRequest(skillId));
        chr.addSkillCoolTime(skillId, chr.getSkillStatValue(t, CRYSTAL_GATE) * 1000);
    }

    public void giveCrystalGateBuff(Position pos) {
        var rect = new Rect(-350, -350, 350, 350);
        var skillId = CRYSTAL_GATE_PORTAL;
        if (chr.hasSkillOnCooldown(skillId) ||
                chr.getField().getImmovableObjs()
                        .stream()
                        .filter(vp -> vp.getOwner().equals(chr)
                                && vp.getSkillId() == skillId
                                && vp.getRectAround(rect).hasPositionInside(pos))
                        .findFirst()
                        .orElse(null)
                        == null) {
            return;
        }
        var si = SkillData.getSkillInfoById(CRYSTAL_GATE);
        var slv = chr.getSkillLevel(CRYSTAL_GATE);

        var cooltime = 3000;
        var mattBuff = si.getValue(s, slv);
        var mattBuffTime = si.getValue(u2, slv);

        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        tsm.putCharacterStatValue(IndieMAD, new Option(mattBuff, skillId, mattBuffTime));
        tsm.sendSetStatPacket();
        chr.addSkillCoolTime(skillId, cooltime);
    }

    private void createCrystalGate(Position pos) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!chr.hasSkill(CRYSTAL_GATE) || !tsm.hasStat(CrystalGate)) {
            return;
        }
        var o = tsm.getOption(CrystalGate);
        var gatesRemaining = o.xOption;

        if (gatesRemaining <= 0) {
            return;
        }

        var immovableObj = ImmovableObj.getByInfo(chr, CRYSTAL_GATE_PORTAL, pos, o.tOption);
        chr.getField().spawnImmovableObj(immovableObj);
    }

    @Override
    public void onWarp(Field oldField, Field newField) {
        // chr.getField().getImmovableObjs().stream().filter(vp -> vp.getOwner().equals(chr) && vp.getSkillId() == CRYSTAL_GATE_PORTAL).forEach(vp -> vp.getField().removeImmovableObj(vp));
        super.onWarp(oldField, newField);
    }

    private int getCrystallineSpiritsCount() {
        Field field = chr.getField();
        return (int) field.getSummons().stream().filter(s -> s.getSkillID() == CRYSTALLINE_SPIRIT && s.getChr() == chr).count();
    }

    private void removeFirstCrystallineSpirit() {
        Field field = chr.getField();
        Summon firstCrystallineSpirit = field.getSummons().stream()
                .filter(s -> s.getSkillID() == CRYSTALLINE_SPIRIT && s.getChr() == chr)
                .min(Comparator.comparingInt(Life::getObjectId))
                .orElse(null);
        field.removeSummon(firstCrystallineSpirit);
    }

    private void deployCrystal() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o1 = new Option();
        Summon crystal = Summon.getSummonByNoCTS(chr, DEPLOY_CRYSTAL, 1);
        crystal.setMoveAbility(MoveAbility.Crystal);
        crystal.setAssistType(AssistType.AttackCounter);
        crystal.setCurFoothold((short) 0);
        crystal.setSummonTerm(0);
        o1.nOption = 1;
        o1.rOption = DEPLOY_CRYSTAL;
        o1.summon = crystal;
        tsm.putCharacterStatValue(IndieSummon, o1, true);
        chr.getField().spawnSummonAndRemoveOld(crystal);
        resetCrystalBattery();
    }

    public void handleShootObj(Char chr, ShootObjectSkillInfo sosi) {
        var skillId = sosi.getSkillId();
        var slv = sosi.getSlv();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        switch (skillId) {
            case RADIANT_ORB:
            case RADIANT_ORB_II:
                gainLucentBrand();

                SkillInfo si = SkillData.getSkillInfoById(skillId);
                slv = chr.getSkillLevel(skillId);
                Option o = new Option();
                Option o1 = new Option();
                o.nOption = si.getValue(y, slv);
                o.rOption = skillId;
                o.tOption = si.getValue(time, slv);
                o.setInMillis(true);
                tsm.putCharacterStatValue(RadiantOrb, o);

                o1.nOption = 1;//Job.MANA_OVERLOAD;
                o1.rOption = skillId;// == RADIANT_ORB_II ? RADIANT_JAVELIN_II : RADIANT_JAVELIN;
                o1.tOption = si.getValue(time, slv);
                o1.setInMillis(true);
                tsm.putCharacterStatValue(IndieFloating, o1);
                tsm.sendSetStatPacket();
                break;

            case TEMPLAR_KNIGHT_SHOOT_OBJECT:
            case TEMPLAR_KNIGHT_SHOOT_OBJECT_2:

                // [Illium] Custom Skill Change
                swReactOnTemplarKnight(sosi);
                break;
        }
        super.handleShootObj(chr, sosi);
    }

    public List<Summon> getAllCrystals() {
        return chr.getField().getSummons().stream().filter(s -> s.getChr() == chr && (s.getSkillID() == CRYSTALLINE_SPIRIT || s.getSkillID() == DEPLOY_CRYSTAL)).collect(Collectors.toList());
    }

    private void deductLucentBrand() {
        giveLucentBrand(getCurLucentBrand() - 1);
    }

    private void gainLucentBrand() {
        giveLucentBrand(getCurLucentBrand() + 1);
    }

    private void giveLucentBrand(int stack) {
        Skill skill = getLucentBrandSkill();
        if (skill == null) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        var curLucentBrand = tsm.getOption(LucentBrand).nOption;
        if (stack <= 0) {
            tsm.removeStatsBySkill(skill.getSkillId());
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        Option o1 = new Option();
        Option o2 = new Option();
        o1.nOption = Math.min(stack, getMaxLucentBrand());
        o1.rOption = skill.getSkillId();
        o1.tOption = si.getValue(time, slv);
        o1.xOption = curLucentBrand > stack ? 1 : 0; // 1 = decrease | 0 = increase
        o1.cOption = 0;
        tsm.putCharacterStatValue(LucentBrand, o1);
        o2.rOption = skill.getSkillId();
        o2.nOption = si.getValue(w, slv) * o1.nOption;
        o2.tOption = si.getValue(time, slv);
        tsm.putCharacterStatValue(IndiePAD, o2);
        tsm.putCharacterStatValue(IndieMAD, o2);
        tsm.sendSetStatPacket();
    }

    private int getMaxLucentBrand() {
        int maxStack = 0;
        for (int lucentSkillId : lucentSkills) {
            if (chr.hasSkill(lucentSkillId)) {
                SkillInfo si = SkillData.getSkillInfoById(lucentSkillId);
                maxStack = si.getValue(x, chr.getSkillLevel(lucentSkillId));
            }
        }
        return maxStack;
    }

    private int getCurLucentBrand() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        return tsm.hasStat(LucentBrand) ? tsm.getOption(LucentBrand).nOption : 0;
    }

    private Skill getLucentBrandSkill() {
        Skill skill = null;
        for (int lucentSkillId : lucentSkills) {
            if (chr.hasSkill(lucentSkillId)) {
                skill = chr.getSkill(lucentSkillId);
            }
        }
        return skill;
    }

    private int getMaxUmbralBrand() {
        int maxStack = 0;
        for (int umbralSkillId : umbralSkills) {
            if (chr.hasSkill(umbralSkillId)) {
                maxStack = chr.getSkillStatValue(x, umbralSkillId);
            }
        }
        return maxStack;
    }

    private int getUmbralBrandSkillID() {
        int skillID = 0;
        for (int umbralSkillId : umbralSkills) {
            if (chr.hasSkill(umbralSkillId)) {
                skillID = umbralSkillId;
            }
        }
        return skillID;
    }

    public void handleRemoveCTS(CharacterTemporaryStat cts, Option o) {
        if (cts == CrystalBattery) {
            if (getCrystal() != null) {
                changeCrystalCharge(0);
                resetCrystalBattery();
            }
        } else if (cts == WingsOfGlory) {
            deployCrystal();
        } else if (cts == CrystalGate) {
            chr.getField().getImmovableObjs().stream().filter(vp -> vp.getOwner().equals(chr) && vp.getSkillId() == CRYSTAL_GATE_PORTAL).forEach(vp -> vp.getField().removeImmovableObj(vp));
        } else if (cts == IndieSummon && o.rOption == CRYSTAL_SKILL_DEUS) {
            handleSkill(chr, chr.getTemporaryStatManager(), EX, chr.getSkillLevel(EX), null, null);
            handleSkill(chr, chr.getTemporaryStatManager(), MACHINA, chr.getSkillLevel(MACHINA), null, null);
        }

        super.handleRemoveCTS(cts, o);
    }

    @Override
    public void handleHit(Client c, InPacket inPacket, HitInfo hitInfo) {
        if (chr.hasSkill(AEGIS_OF_LIGHT) && getCurLucentBrand() > 0) {
            SkillInfo si = SkillData.getSkillInfoById(AEGIS_OF_LIGHT);
            int slv = chr.getSkillLevel(AEGIS_OF_LIGHT);
            int dmgReduceR = si.getValue(x, slv);
            hitInfo.hpDamage = (int) (hitInfo.hpDamage - (hitInfo.hpDamage * (dmgReduceR / 100F)));
            deductLucentBrand();
            var effect = Effect.skillSpecial(AEGIS_OF_LIGHT);
            chr.write(UserPacket.effect(effect));
            chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), effect), chr);
        }
        super.handleHit(c, inPacket, hitInfo);
    }

    @Override
    public void setCharCreationStats(Char chr) {
        super.setCharCreationStats(chr);
        var weaponItem = chr.getEquippedInventory().getFirstItemByBodyPart(BodyPart.Weapon);
        if (weaponItem instanceof Equip weapon) {
            weapon.setiMad(weapon.getiPad());
        }
        CharacterStat cs = chr.getAvatarData().getCharacterStat();
        cs.setPosMap(940202013);
        cs.setHp(250);
        var secondary = ItemData.getItemDeepCopy(1353500);
        secondary.setQuantity(100);
        secondary.setBagIndex(BodyPart.Shield.getVal());
        chr.getAvatarData().getAvatarLook().getHairEquips().add(secondary.getItemId());
        chr.getEquippedInventory().addItem(secondary);

        chr.getAvatarData().getAvatarLook().setEarStyle(EarStyle.Flora);
    }

    @Override
    public void stopTimers() {
        if (resonantWingsTimer != null) {
            resonantWingsTimer.cancel(true);
        }
        super.stopTimers();
    }

    @Override
    public void handleLevelUp() {
        super.handleLevelUp();
        int level = chr.getLevel();
        if (level == 10) {
            chr.setJob(JobConstants.JobEnum.ILLIUM_1.getJobId());
            chr.setStatAndSendPacket(Stat.job, chr.getJob());
            chr.setStatAndSendPacket(Stat.inte, 65);
            chr.setStatAndSendPacket(Stat.ap, 5);
            chr.setStatAndSendPacket(Stat.str, 4);
            chr.addStatAndSendPacket(Stat.mhp, 350);
            chr.addStatAndSendPacket(Stat.mmp, 250);
            chr.addSpToJobByCurrentJob(8);
        } else if (level == 30) {
            chr.setJob(JobConstants.JobEnum.ILLIUM_2.getJobId());
            chr.setStatAndSendPacket(Stat.job, chr.getJob());
            chr.addStatAndSendPacket(Stat.mhp, 350);
            chr.addStatAndSendPacket(Stat.mmp, 250);
            chr.addSpToJobByCurrentJob(7);
        } else if (level == 60) {
            chr.setJob(JobConstants.JobEnum.ILLIUM_3.getJobId());
            chr.setStatAndSendPacket(Stat.job, chr.getJob());
            chr.addStatAndSendPacket(Stat.mhp, 350);
            chr.addStatAndSendPacket(Stat.mmp, 250);
            chr.addSpToJobByCurrentJob(7);
        } else if (level == 100) {
            chr.setJob(JobConstants.JobEnum.ILLIUM_4.getJobId());
            chr.setStatAndSendPacket(Stat.job, chr.getJob());
            chr.addStatAndSendPacket(Stat.mhp, 350);
            chr.addStatAndSendPacket(Stat.mmp, 250);
            chr.addSpToJobByCurrentJob(5);
        }
    }
}
