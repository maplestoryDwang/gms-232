package net.swordie.ms.client.jobs.nova;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.items.BodyPart;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillUseSource;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtomCollisionInfo;
import net.swordie.ms.client.character.skills.atom.forceatom.StopForceAtom;
import net.swordie.ms.client.character.skills.atom.secondatom.SecondAtom;
import net.swordie.ms.client.character.skills.debuff.DebuffInfo;
import net.swordie.ms.client.character.skills.debuff.DebuffUtil;
import net.swordie.ms.client.character.skills.info.*;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillChangeConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.AssistType;
import net.swordie.ms.enums.ForceAtomEnum;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;
import net.swordie.ms.world.field.fieldeffect.GreyFieldType;

import java.util.*;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 12/14/2017.
 */
public class Kaiser extends Job {

    /**
     * Ideas:
     *
     * Effect.wz / EventEff.img / HasteBooker / ScreenEff
     *
     */

    public static final int GUARDIANS_RETURN = 60001296;
    public static final int VERTICAL_GRAPPLE = 60001218;
    public static final int TRANSFIGURATION = 60000219;     // Morph Gauge (SmashStack) | Stage 1
    public static final int TRANSFIGURATION_2 = 60000221;   // Morph Gauge (SmashStack) | Stage 2
    public static final int DRAGON_LINK = 60001225;

    public static final int TEMPEST_BLADES_THREE = 61101002;
    public static final int TEMPEST_BLADES_THREE_FF = 61110211;
    public static final int BLAZE_ON = 61101004; //Buff

    public static final int FINAL_FORM_THIRD = 61111008; //Buff 3rd Job
    public static final int STONE_DRAGON = 61111002; //Summon (Speed Debuff)
    public static final int STONE_DRAGON_FINAL_FORM = 61111220; //Summon (Speed Debuff)
    public static final int CURSEBITE = 61111003; //Buff
    public static final int SELF_RECOVERY = 61110006;

    public static final int FINAL_FORM_FOURTH = 61120008; //Buff 4rd Job
    public static final int TEMPEST_BLADES_FIVE = 61120007;
    public static final int TEMPEST_BLADES_FIVE_FF = 61121217;
    public static final int GRAND_ARMOR = 61121009; //Buff
    public static final int NOVA_WARRIOR_KAISER = 61121014; //Buff
    public static final int NOVA_TEMPERANCE_KAISER = 61121015;

    public static final int ANCESTRAL_PROMINENCE = 61121052;
    public static final int FINAL_TRANCE = 61121053;
    public static final int KAISERS_MAJESTY = 61121054;

    // V skills
    public static final int NOVA_GUARDIANS = 400011012;
    public static final int NOVA_GUARDIANS_2 = 400011013;
    public static final int NOVA_GUARDIANS_3 = 400011014;

    public static final int BLADEFALL_ATTACK = 400011058;
    public static final int BLADEFALL_ATTACK_FF = 400011059;
    public static final int BLADEFALL_TILE = 400011060;
    public static final int BLADEFALL_TILE_FF = 400011061;

    public static final int DRACO_SURGE_ATTACK = 400011079;
    public static final int DRACO_SURGE_ATTACK_FF = 400011080;
    public static final int DRACO_SURGE_SHOOTOBJ = 400011081;
    public static final int DRACO_SURGE_SHOOTOBJ_FF = 400011082;

    public static final int DRAGON_BLAZE = 400011118;
    public static final int DRAGON_BLAZE_FIRE_ENERY = 400011119;
    public static final int DRAGON_BLAZE_FIRE_ORB = 400011120;
    public static final int DRAGON_BLAZE_FIRE_ENERGY_EXPLOSION = 400011130;


    //Attacking Skills
    public static final int DRAGON_SLASH_1 = 61001000; //First Swing
    public static final int DRAGON_SLASH_2 = 61001004; //2nd Swing
    public static final int DRAGON_SLASH_3 = 61001005; //Last Swing
    public static final int DRAGON_SLASH_1_FINAL_FORM = 61120219; //Swing Final Form

    public static final int FLAME_SURGE = 61001101;
    public static final int FLAME_SURGE_FINAL_FORM = 61111215;

    public static final int IMPACT_WAVE = 61101100;
    public static final int IMPACT_WAVE_FINAL_FORM = 61111216;
    public static final int PIERCING_BLAZE = 61101101; //Special Attack (Stun Debuff)
    public static final int PIERCING_BLAZE_FINAL_FORM = 61111217;

    public static final int WING_BEAT = 61111100; //Special Attack (Speed Debuff)
    public static final int WING_BEAT_FINAL_FORM = 61111111;
    public static final int PRESSURE_CHAIN = 61111101; //Special Attack (Stun Debuff)
    public static final int PRESSURE_CHAIN_FINAL_FORM = 61111219;

    public static final int GIGA_WAVE = 61121100; //Special Attack (Speed Debuff)
    public static final int GIGA_WAVE_FINAL_FORM = 61121201;
    public static final int GIGA_WAVE_BURDEN = 61120044;
    public static final int INFERNO_BREATH = 61121105;
    public static final int INFERNO_BREATH_FINAL_FORM = 61121222;
    public static final int INFERNO_BREATH_BURN = 61120047;
    public static final int DRAGON_BARRAGE = 61121102;
    public static final int DRAGON_BARRAGE_FINAL_FORM = 61121203;
    public static final int BLADE_BURST = 61121104;
    public static final int BLADE_BURST_AIR = 61121124;
    public static final int BLADE_BURST_FF_AIR = 61121225;
    public static final int BLADE_BURST_FINAL_FORM = 61121221;
    public static final int BLADE_BURST_EXPLOSION = 61121116;
    public static final int BLADE_BURST_FF_EXPLOSION = 61121223;


    //Realign Skills
    public static final int REALIGN_ATTACKER_MODE = 60001217; //Unlimited Duration
    public static final int REALIGN_DEFENDER_MODE = 60001216; //Unlimited Duration

    public static final int REALIGN_ATTACKER_MODE_I = 61100008;
    public static final int REALIGN_DEFENDER_MODE_I = 61100005;

    public static final int REALIGN_ATTACKER_MODE_II = 61110010;
    public static final int REALIGN_DEFENDER_MODE_II = 61110005;

    public static final int REALIGN_ATTACKER_MODE_III = 61120013;
    public static final int REALIGN_DEFENDER_MODE_III = 61120010;

    private ScheduledFuture selfRecoveryTimer;
    private ScheduledFuture dragonBlazeFireEnergyTimer;
    private String curFireEffectResolution = "";

    private static final int[] addedSkills = new int[]{
            REALIGN_ATTACKER_MODE,
            REALIGN_DEFENDER_MODE,
            VERTICAL_GRAPPLE,
            TRANSFIGURATION,
            DRAGON_LINK,
            GUARDIANS_RETURN,
    };

    public Kaiser(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id)) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setCurrentLevel(skill.getMasterLevel());
                    chr.addSkill(skill);
                }
            }
            startSelfRecovery();
        }
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isKaiser(id);
    }

    @Override
    public void setCharCreationStats(Char chr) {
        super.setCharCreationStats(chr);
        CharacterStat cs = chr.getAvatarData().getCharacterStat();
        chr.setSpToCurrentJob(5);
        cs.setLevel(10);
        cs.setJob(6100);
        cs.setStr(5);
        cs.setDex(5);
        cs.setInt(5);
        cs.setLuk(5);
        cs.setAp(4 + cs.getLevel() * 5);
        Item secondary = ItemData.getItemDeepCopy(1352500);
        secondary.setBagIndex(10);
        chr.getAvatarData().getAvatarLook().getHairEquips().add(secondary.getItemId());
        chr.getEquippedInventory().addItem(secondary);
        chr.getAvatarData().getCharacterStat().setPosMap(400000000);
    }


    public void giveRealignAttackBuffs(boolean inFinalForm) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        int[] realignattacks = new int[]{
                REALIGN_ATTACKER_MODE,
                REALIGN_ATTACKER_MODE_I,
                REALIGN_ATTACKER_MODE_II,
                REALIGN_ATTACKER_MODE_III,
        };
        int zPadX = 0;
        int zCr = 0;
        int zBdR = 0;
        for (int realignattack : realignattacks) {
            if (chr.hasSkill(realignattack)) {
                Skill skill = chr.getSkill(realignattack);
                int slv = skill.getCurrentLevel();
                SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
                zPadX += si.getValue(padX, slv);
                zCr += si.getValue(cr, slv);
                zBdR += si.getValue(bdR, slv);

                if (skill.getSkillId() == REALIGN_ATTACKER_MODE_III) {
                    zBdR += inFinalForm ? si.getValue(x, slv) : 0;
                }
            }
        }
        o1.nOption = zPadX;
        o1.rOption = REALIGN_ATTACKER_MODE;
        tsm.putCharacterStatValue(IndiePAD, o1);
        o2.nOption = zCr;
        o2.rOption = REALIGN_ATTACKER_MODE;
        tsm.putCharacterStatValue(IndieCr, o2);
        o3.nOption = zBdR;
        o3.rOption = REALIGN_ATTACKER_MODE;
        tsm.putCharacterStatValue(IndieBDR, o3);
        tsm.sendSetStatPacket();
    }

    public void giveRealignDefendBuffs(boolean inFinalForm) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        int[] realigndefends = new int[]{
                REALIGN_DEFENDER_MODE,
                REALIGN_DEFENDER_MODE_I,
                REALIGN_DEFENDER_MODE_II,
                REALIGN_DEFENDER_MODE_III,
        };
        int zDef = 0;
        int zAcc = 0;
        int zMHPR = 0;
        int dmgR = 0;
        for (int realigndefend : realigndefends) {
            if (chr.hasSkill(realigndefend)) {
                Skill skill = chr.getSkill(realigndefend);
                int slv = skill.getCurrentLevel();
                SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
                zDef += si.getValue(pddX, slv);
                zAcc += si.getValue(accX, slv);
                zMHPR += si.getValue(mhpR, slv);

                if (skill.getSkillId() == REALIGN_DEFENDER_MODE_III) {
                    dmgR += si.getValue(x, slv);
                }
            }
        }
        o1.nOption = zDef;
        o1.rOption = REALIGN_DEFENDER_MODE;
        tsm.putCharacterStatValue(IndieDEF, o1);
        o2.nOption = zAcc;
        o2.rOption = REALIGN_DEFENDER_MODE;
        tsm.putCharacterStatValue(IndieACC, o2);
        o3.nOption = zMHPR;
        o3.rOption = REALIGN_DEFENDER_MODE;
        tsm.putCharacterStatValue(IndieMHPR, o3);
        if (dmgR > 0) {
            o4.nOption = dmgR;
            o4.rOption = REALIGN_DEFENDER_MODE;
            tsm.putCharacterStatValue(IndieDamReduceR, o4);
        }
        tsm.sendSetStatPacket();
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
        if (hasHitMobs) {
            si = SkillData.getSkillInfoById(attackInfo.skillId);
            if (si != null) {
                incMorphGauge(si.getNormalGauge() * attackInfo.mobCount);
            }

            if (canProcDragonBlazeFireEnergyExplosion(attackInfo)) {
                doDragonBlazeFireEnergyExplosion();
            }

            if (canProcDragonBlazeFireOrb()) {
                doDragonBlazeFireOrb();
            }
        }

        var proc = 0;
        if (si != null) {
            proc = si.getValue(prop, slv);
        }

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (attackInfo.skillId) {
            case PIERCING_BLAZE_FINAL_FORM:
                skillID = PIERCING_BLAZE;
                si = SkillData.getSkillInfoById(skillID);
                slv = attackInfo.slv;
                proc = 100;
                // Fallthrough intended
            case PIERCING_BLAZE:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds(), new DebuffInfo(true, proc));
                break;


            case WING_BEAT_FINAL_FORM:
                skillID = WING_BEAT;
                si = SkillData.getSkillInfoById(skillID);
                slv = attackInfo.slv;
                proc = 100;
                // Fallthrough intended
            case WING_BEAT:
                o1.nOption = -10;
                o1.rOption = skillID;
                o1.tOption = 5;

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Speed, o1, attackInfo.getMobIds(), new DebuffInfo(proc));
                break;


            case PRESSURE_CHAIN_FINAL_FORM:
                skillID = PRESSURE_CHAIN;
                si = SkillData.getSkillInfoById(skillID);
                slv = attackInfo.slv;
                proc = 100;
                // Fallthrough intended
            case PRESSURE_CHAIN:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = 3;

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds(), new DebuffInfo(true, proc));
                break;


            case BLADEFALL_TILE:
            case BLADEFALL_TILE_FF:
                si = SkillData.getSkillInfoById(BLADEFALL_ATTACK);
                slv = chr.getSkillLevel(BLADEFALL_ATTACK);
                var dracoSurgeCount = si.getValue(q2, slv);
                o1.nOption = dracoSurgeCount;
                o1.xOption = dracoSurgeCount;
                o1.yOption = dracoSurgeCount;
                o1.rOption = si.getSkillId();
                o1.tOption = (int) chr.getRemainingCoolTime(BLADEFALL_ATTACK);
                o1.setInMillis(true);
                tsm.putCharacterStatValue(DracoSurgeBypassCounter, o1, true);
                tsm.sendSetStatPacket();
                if (attackInfo.mobCount > 0) {
                    chr.resetSkillCoolTime(DRACO_SURGE_ATTACK);
                    chr.resetSkillCoolTime(DRACO_SURGE_ATTACK_FF);
                }
                break;


            case DRACO_SURGE_ATTACK_FF:
            case GIGA_WAVE:
            case GIGA_WAVE_FINAL_FORM:
            case DRACO_SURGE_ATTACK:
                o1.nOption = -30;
                o1.rOption = GIGA_WAVE;
                o1.tOption = 4 + (chr.hasSkill(GIGA_WAVE_BURDEN) ? 5 : 0);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Speed, o1, attackInfo.getMobIds());
                break;


            case STONE_DRAGON_FINAL_FORM:
                skillID = PRESSURE_CHAIN;
                si = SkillData.getSkillInfoById(skillID);
                slv = attackInfo.slv;
                proc = 100;
            case STONE_DRAGON:
                o1.nOption = -10;
                o1.rOption = skillID;
                o1.tOption = si.getValue(subTime, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Speed, o1, attackInfo.getMobIds(), new DebuffInfo(true, proc));
                break;


            case INFERNO_BREATH_FINAL_FORM:
                skillID = INFERNO_BREATH;
                si = SkillData.getSkillInfoById(skillID);
                slv = attackInfo.slv;
            case INFERNO_BREATH:
                for (Position position : attackInfo.positions) {
                    AffectedArea aa = AffectedArea.getAffectedArea(chr, attackInfo);
                    aa.setDuration((si.getValue(cooltime, slv) + (chr.hasSkill(INFERNO_BREATH_BURN) ? 10 : 0)) * 1000);
                    aa.setSkillID(skillID);
                    aa.setPosition(position);
                    Rect rect = aa.getPosition().getRectAround(si.getLastRect());
                    aa.setRect(rect);
                    aa.setDelay((short) 7); //spawn delay
                    chr.getField().spawnAffectedArea(aa);
                }
                break;


            case BLADE_BURST:
            case BLADE_BURST_AIR:
                chr.write(UserLocal.userBonusAttackRequest(BLADE_BURST_EXPLOSION));
                break;
            case BLADE_BURST_FINAL_FORM:
            case BLADE_BURST_FF_AIR:
                chr.write(UserLocal.userBonusAttackRequest(BLADE_BURST_FF_EXPLOSION));
                break;

            case ANCESTRAL_PROMINENCE:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = 4;
                tsm.putCharacterStatValue(IndieNotDamaged, o1, true);
                tsm.sendSetStatPacket();
                break;
        }
        super.handleAttack(c, attackInfo);
    }

    public void activateDragonLink() {
        // TODO Server-sided tracking, if this is active  next skill (not just attack) will have 15%fd added to it.

        incMorphGauge(SkillChangeConstants.DRAGON_LINK_BONUS_GAUGE); // More Gauge Generation
    }

    public int getCurGauge() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(SmashStack)) {
            return 0;
        }
        return tsm.getOption(SmashStack).nOption;
    }

    private void incMorphGauge(int inc) {
        setMorphGauge(getCurGauge() + inc);
    }

    private void decMorphGauge(int dec) {
        incMorphGauge(-dec);
    }

    private void setMorphGauge(int gauge) {
        gauge = Math.max(0, Math.min(gauge, getMaxGauge()));
        var stage = getCurStageByGauge(gauge);
        var job = chr.getJob();

        SkillInfo si = SkillData.getSkillInfoById(TRANSFIGURATION);
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option(job);
        Option o1 = new Option(job);
        Option o2 = new Option(job);
        Option o3 = new Option(job);
        Option o4 = new Option(job);

        o.nOption = gauge;
        tsm.putCharacterStatValue(SmashStack, o);

        o1.nOption = stage * si.getValue(actionSpeed, 1);
        tsm.putCharacterStatValue(IndieBooster, o1);

        o2.nOption = stage * si.getValue(psdSpeed, 1);
        tsm.putCharacterStatValue(IndieSpeed, o2);

        o3.nOption = stage * si.getValue(psdJump, 1);
        tsm.putCharacterStatValue(IndieJump, o3);

        o4.nOption = stage * si.getValue(prop, 1);
        tsm.putCharacterStatValue(IndieStance, o4);

        tsm.sendSetStatPacket();
    }

    private void resetGauge() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        tsm.removeStat(SmashStack);
    }

    public int getMaxGauge() {
        var job = chr.getJob();
        var si = SkillData.getSkillInfoById(TRANSFIGURATION);
        if (job == JobConstants.JobEnum.KAISER_1.getJobId()) {
            return si.getValue(s, 1);
        } else if (job == JobConstants.JobEnum.KAISER_2.getJobId()) {
            return si.getValue(u, 1);
        } else if (job == JobConstants.JobEnum.KAISER_3.getJobId() || job == JobConstants.JobEnum.KAISER_4.getJobId()) {
            return si.getValue(v, 1);
        }
        return 0;
    }

    public int getCurStageByGauge(int gauge) {
        var stage1 = SkillData.getSkillInfoById(TRANSFIGURATION).getValue(s, 1);
        var stage2 = SkillData.getSkillInfoById(TRANSFIGURATION).getValue(u, 1);
        var stage3 = SkillData.getSkillInfoById(TRANSFIGURATION).getValue(v, 1);

        return gauge < stage1 ? 0
                : gauge < stage2 ? 1
                : gauge < stage3 ? 2
                : 3;
    }

    @Override
    public int alterCooldownSkill(int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        if (skillId == DRACO_SURGE_ATTACK || skillId == DRACO_SURGE_ATTACK_FF) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            if (tsm.hasStat(DracoSurgeBypassCounter)) { // Whilst this CTS is active, Draco Surges have no cooldown.
                var nOpt = tsm.getOption(DracoSurgeBypassCounter).nOption;
                var newNOpt = nOpt - 1;
                if (newNOpt > 0) {
                    int remainingTime = (int) tsm.getRemainingTime(DracoSurgeBypassCounter, BLADEFALL_ATTACK);
                    Option o = new Option(newNOpt, BLADEFALL_ATTACK, remainingTime);
                    o.setInMillis(true);
                    tsm.putCharacterStatValue(DracoSurgeBypassCounter, o, true);
                    tsm.sendSetStatPacket();
                } else {
                    tsm.removeStatsBySkill(BLADEFALL_ATTACK);
                }
                return 0;
            }
        }
        return super.alterCooldownSkill(skillId, slv, attackInfo, sui, source);
    }


    // Skill related methods -------------------------------------------------------------------------------------------

    @Override
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillID, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {
        super.handleSkill(chr, tsm, skillID, slv, inPacket, skillUseInfo);
        Skill skill = chr.getSkill(skillID);
        SkillInfo si = null;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skillID);
        }
        Summon summon;
        Field field = chr.getField();
        Item item = chr.getEquippedItemByBodyPart(BodyPart.Weapon);
        int weaponID = 0;
        if (item != null) {
            weaponID = item.getItemId();
        }
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        Option o5 = new Option();
        Option o6 = new Option();
        Option o7 = new Option();
        switch (skillID) {
            case REALIGN_ATTACKER_MODE:
                if (tsm.hasStatBySkillId(skillID)) {
                    tsm.removeStatsBySkill(skillID);
                } else {
                    tsm.removeStatsBySkill(REALIGN_DEFENDER_MODE);
                    giveRealignAttackBuffs(false);
                }
                break;
            case REALIGN_DEFENDER_MODE:
                if (tsm.hasStatBySkillId(skillID)) {
                    tsm.removeStatsBySkill(skillID);
                } else {
                    tsm.removeStatsBySkill(REALIGN_ATTACKER_MODE);
                    giveRealignDefendBuffs(false);
                }
                break;
            case BLAZE_ON:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                o2.nOption = si.getValue(indiePad, slv);
                o2.rOption = skillID;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePAD, o2);
                break;
            case CURSEBITE:
                o1.nOption = si.getValue(asrR, slv);
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(AsrR, o1);
                o2.nOption = si.getValue(terR, slv);
                o2.rOption = skillID;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(TerR, o2);
                break;
            case GRAND_ARMOR:
                o1.nOption = -si.getValue(x, slv);
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieHitDamageInclHPR, o1);
                break;
            case TEMPEST_BLADES_THREE:
                if (tsm.getOption(StopForceAtomInfo).nOption != 1 && tsm.hasStat(StopForceAtomInfo)) {
                    tsm.removeStat(StopForceAtomInfo);
                    tsm.sendResetStatPacket();
                }
                spawnTempestBlades(skillID, slv, weaponID, 1, Arrays.asList(0, 0, 0));
                break;
            case TEMPEST_BLADES_THREE_FF: //Final Form
                if (tsm.getOption(StopForceAtomInfo).nOption != 3 && tsm.hasStat(StopForceAtomInfo)) {
                    tsm.removeStat(StopForceAtomInfo);
                    tsm.sendResetStatPacket();
                }
                spawnTempestBlades(skillID, chr.getSkillLevel(TEMPEST_BLADES_THREE), weaponID, 3, Arrays.asList(0, 0, 0));
                break;
            case TEMPEST_BLADES_FIVE:
                if (tsm.getOption(StopForceAtomInfo).nOption != 2 && tsm.hasStat(StopForceAtomInfo)) {
                    tsm.removeStat(StopForceAtomInfo);
                    tsm.sendResetStatPacket();
                }
                spawnTempestBlades(skillID, slv, weaponID, 2, Arrays.asList(0, 0, 0, 0, 0));
                break;
            case TEMPEST_BLADES_FIVE_FF: //Final Form
                if (tsm.getOption(StopForceAtomInfo).nOption != 4 && tsm.hasStat(StopForceAtomInfo)) {
                    tsm.removeStat(StopForceAtomInfo);
                    tsm.sendResetStatPacket();
                }
                spawnTempestBlades(skillID, chr.getSkillLevel(TEMPEST_BLADES_FIVE), weaponID, 4, Arrays.asList(0, 0, 0, 0, 0));
                break;
            case FINAL_FORM_THIRD:
            case FINAL_TRANCE:
            case FINAL_FORM_FOURTH:
                si = SkillData.getSkillInfoById(FINAL_FORM_THIRD);
                slv = (byte) chr.getSkillLevel(FINAL_FORM_THIRD);
                if (tsm.hasStat(StopForceAtomInfo)) {
                    tsm.removeStat(StopForceAtomInfo);
                    tsm.sendResetStatPacket();
                }
                o6.nOption = skillID == FINAL_FORM_THIRD ? 1200 : 1201;
                o6.rOption = skillID;
                o6.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(Morph, o6);
                o1.nOption = skillID == FINAL_FORM_THIRD ? si.getValue(cr, slv) : si.getValue(v, slv);
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieCr, o1);
                o2.rOption = skillID;
                o2.nOption = skillID == FINAL_FORM_THIRD ? si.getValue(indiePMdR, slv) : si.getValue(w, slv);
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePMdR, o2);
                o3.nOption = si.getValue(jump, slv);
                o3.rOption = skillID;
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(Jump, o3);
                o4.nOption = 100;
                o4.rOption = skillID;
                o4.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieStance, o4);
                o5.nOption = si.getValue(speed, slv);
                o5.rOption = skillID;
                o5.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(Speed, o5);
                o7.nOption = 100;
                o7.rOption = skillID;
                o7.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IgnoreAllCounter, o7);
                tsm.putCharacterStatValue(IgnoreAllImmune, o7);
                resetGauge();

                if (chr.hasSkill(FINAL_TRANCE) && chr.getClient().getResolution() != null) {
                    chr.activateCustomEffect(chr.getClient().getResolution().toString(), 150);
                }

                if (tsm.hasStatBySkillId(REALIGN_ATTACKER_MODE)) {
                    tsm.removeStatsBySkill(REALIGN_ATTACKER_MODE);
                    giveRealignAttackBuffs(true);
                }
                else if (tsm.hasStatBySkillId(REALIGN_DEFENDER_MODE)) {
                    tsm.removeStatsBySkill(REALIGN_DEFENDER_MODE);
                    giveRealignDefendBuffs(true);
                }
                break;
            case KAISERS_MAJESTY:
                o1.rOption = skillID;
                o1.nOption = -1;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                o2.rOption = skillID;
                o2.nOption = si.getValue(indiePad, slv);
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePAD, o2);
                o3.nOption = 100;
                o3.rOption = skillID;
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IgnoreAllCounter, o3);
                tsm.putCharacterStatValue(IgnoreAllImmune, o3);
                for (var skillId : chr.getSkillCoolTimes().keySet()) {
                    if (!SkillConstants.isNoCooltimeResetSkill(skillId)) {
                        chr.resetSkillCoolTime(skillId);
                    }
                }
                break;
            case STONE_DRAGON:
            case STONE_DRAGON_FINAL_FORM:
                Position position = inPacket.decodePosition();
                summon = Summon.getSummonBy(chr, skillID, slv);
                summon.setFlyMob(false);
                summon.setMoveAction((byte) 0);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setPosition(position);
                summon.setCurFoothold((short) chr.getField().findFootHoldBelow(position).getId());
                field.spawnSummonAndRemoveOld(summon);
                break;
            case NOVA_GUARDIANS:
                List<Integer> skillList = Arrays.asList(NOVA_GUARDIANS, NOVA_GUARDIANS_2, NOVA_GUARDIANS_3);

                var tOption = 0;
                for (int skillId : skillList) {
                    summon = Summon.getSummonByNoCTS(chr, skillId, slv);
                    tOption = summon.getSummonTerm() / 1000;
                    summon.setFlyMob(false);
                    summon.setMoveAbility(MoveAbility.FixVMove);
                    summon.setAssistType(AssistType.TeleportToMobs);
                    int random = new Random().nextInt(500) - 250;
                    Position position2 = new Position(chr.getPosition().getX() + random, chr.getPosition().getY());
                    summon.setCurFoothold((short) chr.getField().findFootHoldBelow(position2).getId());
                    summon.setPosition(position2);
                    field.spawnSummonAndRemoveOld(summon);

                    o1.summons.add(summon); // add summon to summon list in o1
                }

                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = tOption;
                tsm.putCharacterStatValue(IndieSummon, o1);
                break;
            case DRAGON_BLAZE:
                var tOpt = si.getValue(time, slv);
                o1.nOption = slv;
                o1.rOption = skillID;
                o1.tOption = tOpt;
                tsm.putCharacterStatValue(DevilishPower, o1);
                EventManager.stopTimer(dragonBlazeFireEnergyTimer);
                var interval = 250;
                var executes = (tOpt * 1000) / interval;
                dragonBlazeFireEnergyTimer = EventManager.addFixedRateEvent(this::doDragonBlazeFireEnergy, interval, interval, executes);
                break;
        }
        tsm.sendSetStatPacket();
    }

    @Override
    public void handleRemoveCTS(CharacterTemporaryStat cts, Option option) {

        // [Kaiser] Custom Skill Change
        if (cts == Morph && (option.nOption == 1200 || option.nOption == 1201)) {
            deactivateCustomEffect();

            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            if (tsm.hasStatBySkillId(REALIGN_ATTACKER_MODE)) {
                tsm.removeStatsBySkill(REALIGN_ATTACKER_MODE);
                giveRealignAttackBuffs(false);
            }
            else if (tsm.hasStatBySkillId(REALIGN_DEFENDER_MODE)) {
                tsm.removeStatsBySkill(REALIGN_DEFENDER_MODE);
                giveRealignDefendBuffs(false);
            }
        }

        super.handleRemoveCTS(cts, option);
    }

    // [Kaiser] Custom Skill Change
    public void activateCustomEffect(String res, int fadeDuration) {
        FieldEffect colourEff = FieldEffect.setFieldColor(GreyFieldType.Field, (short) 255, (short) 190, (short) 190, fadeDuration);
        chr.write(FieldPacket.fieldEffect(colourEff));

        FieldEffect fireEffect = FieldEffect.onOffLayer(0, fadeDuration, res,
                0, 0, 12, String.format("Effect/EventEffect.img/HasteBooster/screenEff/%s", res), 0, true,
                -1, true);
        fireEffect.setArg10(8000);
        chr.write(FieldPacket.fieldEffect(fireEffect));
        resolution = res;
    }

    // [Kaiser] Custom Skill Change
    public void deactivateCustomEffect() {
        FieldEffect colourEff = FieldEffect.setFieldColor(GreyFieldType.Field, (short) 255, (short) 255, (short) 255, 750);
        chr.write(FieldPacket.fieldEffect(colourEff));

        FieldEffect fireEffect = FieldEffect.onOffLayer(2, 600, resolution,
                0, 0, 12, String.format("Effect/EventEffect.img/HasteBooster/screenEff/%s", resolution), 0, true,
                -1, true);
        chr.write(FieldPacket.fieldEffect(fireEffect));
        resolution = "";
    }

    private boolean canProcDragonBlazeFireOrb() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        return chr.hasSkill(DRAGON_BLAZE) // Must have skill
                && chr.hasSkillOnCooldown(DRAGON_BLAZE) // Dragon Blaze must be on cooldown
                && tsm.getOptByCTSAndSkill(DevilishPower, DRAGON_BLAZE) == null // Does not currently have the Dragon Blaze Buff
                && !chr.hasSkillOnCooldown(DRAGON_BLAZE_FIRE_ORB); // Fire Orb is not on cooldown
    }

    private boolean canProcDragonBlazeFireEnergyExplosion(AttackInfo attackInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        return attackInfo.skillId != DRAGON_BLAZE && attackInfo.skillId != DRAGON_BLAZE_FIRE_ENERGY_EXPLOSION
                && tsm.getOptByCTSAndSkill(DevilishPower, DRAGON_BLAZE) != null
                && !chr.hasSkillOnCooldown(DRAGON_BLAZE_FIRE_ENERGY_EXPLOSION);
    }

    private void doDragonBlazeFireEnergyExplosion() {
        chr.write(UserLocal.userBonusAttackRequest(DRAGON_BLAZE_FIRE_ENERGY_EXPLOSION));
        chr.addSkillCoolTime(DRAGON_BLAZE_FIRE_ENERGY_EXPLOSION, chr.getSkillStatValue(t, DRAGON_BLAZE) * 1000);
    }

    private void doDragonBlazeFireEnergy() {
        var skillId = DRAGON_BLAZE;
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!chr.hasSkill(skillId) || tsm.getOptByCTSAndSkill(DevilishPower, DRAGON_BLAZE) == null) {
            EventManager.stopTimer(dragonBlazeFireEnergyTimer);
            return;
        }

        var sa = new SecondAtom(chr.getNewSecondAtomKey(), 11, 1, chr.getId(), 0,
                DRAGON_BLAZE_FIRE_ENERY, 0, 0, 0, 5000, 0, -1, chr.getPosition(), new ArrayList<>());
        sa.setCollisionCheck(0);

        chr.spawnSecondAtoms(Collections.singletonList(sa));
    }

    private void doDragonBlazeFireOrb() {
        SkillInfo si = SkillData.getSkillInfoById(DRAGON_BLAZE_FIRE_ORB);
        var slv = chr.getSkillLevel(DRAGON_BLAZE);

        if (si == null || slv <= 0) {
            return;
        }

        SecondAtomInfo sai = si.getSecondAtomInfos().get(0);

        var dataIndex = sai.getDataIndex();
        var enableDelay = sai.getEnableDelay();
        var createDelay = sai.getCreateDelay();
        var rotate = sai.getRotate();
        var expire = sai.getExpire();
        var attackableCount = sai.getAttackableCount();

        var customsList = sai.getCustomList();

        var secondAtomsCreated = si.getValue(mobCount, slv);
        var rect = chr.getRectAround(new Rect(-800, -800, 800, 800));
        List<SecondAtom> saList = new ArrayList<>();
        for (int i = 0; i < secondAtomsCreated; i++) {
            var angle = ((360 / secondAtomsCreated) * i) + 30; // calculate angle with 30* offset
            var angleInRadian = (angle * Math.PI / 180);
            var radius = 200;
            var hTranslation = (int) (Math.sin(angleInRadian) * radius);
            var vTranslation = (int) (Math.cos(angleInRadian) * radius);
            Position pos = chr.getPosition().add(new Position(hTranslation, vTranslation));
            Mob mob = Util.getRandomFromCollection(chr.getField().getMobsInRect(rect));
            SecondAtom sa = new SecondAtom(chr.getNewSecondAtomKey(), dataIndex, 1, chr.getId(), mob.getObjectId(),
                    DRAGON_BLAZE_FIRE_ORB, createDelay, enableDelay, rotate, expire, 0, attackableCount, pos, customsList);
            saList.add(sa);
        }
        chr.spawnSecondAtoms(saList);
        chr.addSkillCoolTime(DRAGON_BLAZE_FIRE_ORB, si.getValue(w, slv) * 1000);
    }

    private void spawnTempestBlades(int skillID, int slv, int weaponID, int idx, List<Integer> angles) {

        SkillInfo si = SkillData.getSkillInfoById(skillID);
        Rect rect = si.getFirstRect();

        List<Char> chrs;
        if (chr.getParty() != null && SkillChangeConstants.TEMPEST_BLADE_ON_PARTY_MEMBERS) { // [Kaiser] Custom Skill Change
            chrs = chr.getParty().getPartyMembersInField(chr).stream().filter(pChr -> chr.getRectAround(rect).hasPositionInside(pChr.getPosition())).collect(Collectors.toList());
        } else {
            chrs = Collections.singletonList(chr);
        }
        for (Char pChr : chrs) {
            if ((JobConstants.isKaiser(pChr.getJob()) && !(pChr.equals(chr))) || (!(pChr.equals(chr)) && pChr.hasSkillOnCooldown(TEMPEST_BLADES_THREE))) {
                continue;
            }

            TemporaryStatManager pTsm = pChr.getTemporaryStatManager();
            if (pTsm.hasStat(StopForceAtomInfo)) {
                continue;
            }

            Option o1 = new Option();
            Option o2 = new Option();
            o1.nOption = idx;
            o1.rOption = skillID;
            o1.chr = chr; // Owner
            if (!pChr.equals(chr)) {
                o1.tOption = SkillChangeConstants.TEMPEST_BLADE_ON_PARTY_MEMBER_DURATION;
                o2.tOption = SkillChangeConstants.TEMPEST_BLADE_ON_PARTY_MEMBER_DURATION;
            }
            StopForceAtom stopForceAtom = new StopForceAtom();
            stopForceAtom.setCount(angles.size());
            stopForceAtom.setIdx(idx);
            stopForceAtom.setWeaponId(weaponID);
            stopForceAtom.setAngleInfo(angles);
            pTsm.setStopForceAtom(stopForceAtom);
            pTsm.putCharacterStatValue(StopForceAtomInfo, o1, true);

            o2.nOption = SkillChangeConstants.TEMPEST_BLADE_DAMR + (chrs.size() * SkillChangeConstants.TEMPEST_BLADE_DAMR_PER_PARTY_MEMBER);
            o2.rOption = skillID;
            o2.chr = chr; // Owner
            pTsm.putCharacterStatValue(IndieDamR, o2, true);
            pTsm.sendSetStatPacket();

            pChr.addSkillCoolTime(TEMPEST_BLADES_FIVE, si.getValue(cooltime, slv) * 1000);
            pChr.addSkillCoolTime(TEMPEST_BLADES_THREE, si.getValue(cooltime, slv) * 1000);
        }
    }

    public void createFlyingSwordForceAtom(int skillId, List<Integer> targetList) {

        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        int stopForceAtomNOption = tsm.getOption(StopForceAtomInfo).nOption;

        ForceAtomEnum fae = skillId < BLADEFALL_ATTACK ? ForceAtomEnum.KAISER_WEAPON_THROW_1 : ForceAtomEnum.KAISER_V_WEAPON_THROW_1;
        int atomSkillId = TEMPEST_BLADES_THREE;

        switch (stopForceAtomNOption) {
            case 3:
                fae = skillId < BLADEFALL_ATTACK ? ForceAtomEnum.KAISER_WEAPON_THROW_MORPH_1 : ForceAtomEnum.KAISER_V_WEAPON_THROW_MORPH_1;
                atomSkillId = TEMPEST_BLADES_THREE_FF;
                break;
            case 2:
                fae = skillId < BLADEFALL_ATTACK ? ForceAtomEnum.KAISER_WEAPON_THROW_2 : ForceAtomEnum.KAISER_V_WEAPON_THROW_2;
                atomSkillId = TEMPEST_BLADES_FIVE;
                break;
            case 4:
                fae = skillId < BLADEFALL_ATTACK ? ForceAtomEnum.KAISER_WEAPON_THROW_MORPH_2 : ForceAtomEnum.KAISER_V_WEAPON_THROW_MORPH_2;
                atomSkillId = TEMPEST_BLADES_FIVE_FF;
                break;
        }

        Random random = new Random();

        Field field = chr.getField();
        List<Char> chrs;
        SkillInfo si = SkillData.getSkillInfoById(TEMPEST_BLADES_FIVE);
        Rect rect = si.getFirstRect();
        if (chr.getParty() != null && SkillChangeConstants.TEMPEST_BLADE_ON_PARTY_MEMBERS && (skillId != BLADEFALL_ATTACK && skillId != BLADEFALL_ATTACK_FF)) { // [Kaiser] Custom Skill Change
            chrs = chr.getParty().getPartyMembersInField(chr).stream().filter(pChr -> chr.getRectAround(rect).hasPositionInside(pChr.getPosition())).collect(Collectors.toList());
        } else {
            chrs = Collections.singletonList(chr);
        }
        for (Char pChr : chrs) {
            TemporaryStatManager pTsm = pChr.getTemporaryStatManager();
            if (!pTsm.hasStat(StopForceAtomInfo) || !pTsm.getOption(StopForceAtomInfo).chr.equals(chr)) {
                continue;
            }
            Position position = new Position();
            if (!pChr.equals(chr)) {
                var chrPosX = chr.getPosition().getX();
                var chrPosY = chr.getPosition().getY();

                var otherPosX = pChr.getPosition().getX();
                var otherPosY = pChr.getPosition().getY();


                var xPos = otherPosX - chrPosX;
                var yPos = otherPosY - chrPosY;

                if (!chr.isLeft()) {
                    xPos = -xPos;
                }

                position = new Position(xPos, yPos);
            }
            List<Integer> targets = new ArrayList<>();
            List<ForceAtomInfo> faiList = new ArrayList<>();
            for (int mobId : targetList) {

                if (!pChr.equals(chr)) {
                    var targetId = 0;
                    Mob mob = Util.getRandomFromCollection(field.getMobsInRect(pChr.getRectAround(rect)));
                    if (mob != null) {
                        targetId = mob.getObjectId();
                    }
                    targets.add(targetId);
                }
                int firstImpact = random.nextInt(5) + 20;
                int secondImpact = random.nextInt(5) + 25;
                ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), firstImpact, secondImpact,
                        0, 600, Util.getCurrentTime(), 0, 0,
                        position);

                if (skillId >= BLADEFALL_ATTACK) {
                    fai.setDisappearDelay(2000);
                }
                faiList.add(fai);
            }
            chr.createForceAtom(new ForceAtom(false, 0, chr.getId(), fae,
                    true, pChr.equals(chr) ? targetList : targets, skillId < BLADEFALL_ATTACK ? atomSkillId : skillId, faiList, new Rect(), 0, 300,
                    new Position(), skillId < BLADEFALL_ATTACK ? atomSkillId : skillId, new Position(), 0));

            pTsm.removeStatsBySkill(pTsm.getOption(StopForceAtomInfo).rOption);

            if (skillId == BLADEFALL_ATTACK || skillId == BLADEFALL_ATTACK_FF) {
                chr.setSkillCooldown(BLADEFALL_ATTACK, chr.getSkillLevel(BLADEFALL_ATTACK));
            }
        }
    }

    private void createBladeFallTiles(ForceAtomCollisionInfo faci) {
        int skillId = faci.bladeFallSkillId;
        Position position = faci.position;
        int option = faci.bladeFallOption;

        SkillInfo si = SkillData.getSkillInfoById(BLADEFALL_ATTACK);
        int slv = (byte) chr.getSkillLevel(BLADEFALL_ATTACK);

        AffectedArea aa = AffectedArea.getPassiveAA(chr, skillId + 2, slv);
        aa.setPosition(position);
        aa.setRect(aa.getPosition().getRectAround(si.getFirstRect()));
        aa.setDuration(1000);
        aa.setOption(option);
        chr.getField().spawnAffectedArea(aa);
    }

    public void handleForceAtomCollision(ForceAtom fa, ForceAtomCollisionInfo faci) {
        if (fa.getSkillId() == BLADEFALL_ATTACK || fa.getSkillId()== BLADEFALL_ATTACK_FF) {
            createBladeFallTiles(faci);
        }

        super.handleForceAtomCollision(fa, faci);
    }

    private void startSelfRecovery() {
        if (!chr.hasSkill(SELF_RECOVERY)) {
            return;
        }
        Skill skill = chr.getSkill(SELF_RECOVERY);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        int interval = si.getValue(w, slv);
        EventManager.stopTimer(selfRecoveryTimer);
        if (interval > 0) {
            selfRecoveryTimer = EventManager.addFixedRateEvent(this::selfRecovery, interval, interval, TimeUnit.SECONDS);
        }
    }

    private void selfRecovery() {
        if (chr != null && chr.getField() != null && chr.hasSkill(SELF_RECOVERY)) {
            Skill skill = chr.getSkill(SELF_RECOVERY);
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int slv = skill.getCurrentLevel();
            int healHP = (int) ((double) (chr.getMaxHP() * si.getValue(x, slv)) / 100F);
            int healMP = (int) ((double) (chr.getMaxMP() * si.getValue(x, slv)) / 100F);

            chr.heal(healHP, true, false);
            chr.healMP(healMP);
        } else if (selfRecoveryTimer != null && !selfRecoveryTimer.isDone()) {
            selfRecoveryTimer.cancel(true);
        }
    }

    public void recallNovaGuardians() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        List<Integer> skillList = Arrays.asList(NOVA_GUARDIANS, NOVA_GUARDIANS_2, NOVA_GUARDIANS_3);
        Field field = chr.getField();

        var remainingTime = (int) ((tsm.getRemainingTime(IndieSummon, NOVA_GUARDIANS)) / 1000);
        if (remainingTime <= 2) {
            return;
        }

        for (int skillId : skillList) {
            Summon summon = Summon.getSummonByNoCTS(chr, skillId, (byte) chr.getSkillLevel(NOVA_GUARDIANS));
            summon.setFlyMob(false);
            summon.setMoveAbility(MoveAbility.FixVMove);
            summon.setAssistType(AssistType.TeleportToMobs);
            int random = new Random().nextInt(500) - 250;
            Position position2 = new Position(chr.getPosition().getX() + random, chr.getPosition().getY());
            summon.setCurFoothold((short) chr.getField().findFootHoldBelow(position2).getId());
            summon.setPosition(position2);
            summon.setSummonTerm(Math.max(1, remainingTime));
            field.spawnSummonAndRemoveOld(summon);
        }
    }


    // Hit related methods ---------------------------------------------------------------------------------------------

    @Override
    public void stopTimers() {
        if (selfRecoveryTimer != null) {
            selfRecoveryTimer.cancel(true);
        }
        super.stopTimers();
    }

    @Override
    public void updateTimerSkill() {
        EventManager.stopTimer(selfRecoveryTimer);
        startSelfRecovery();
        super.updateTimerSkill();
    }
}