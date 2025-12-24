package net.swordie.ms.client.jobs.adventurer;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.items.BodyPart;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillUseSource;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.debuff.DebuffInfo;
import net.swordie.ms.client.character.skills.debuff.DebuffUtil;
import net.swordie.ms.client.character.skills.info.*;
import net.swordie.ms.client.character.skills.shootobject.ShootObjectSkillInfo;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.UserRemote;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillChangeConstants;
import net.swordie.ms.enums.ForceAtomEnum;
import net.swordie.ms.life.AffectedArea;
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

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 12/14/2017.
 */
public class Kinesis extends Job {
    public static final int RETURN_KINESIS = 140001290;

    public static final int PSYCHIC_FORCE = 142001000;
    public static final int MENTAL_SHIELD = 142001007;
    public static final int ESP_BOOSTER = 142001003;
    public static final int ULTIMATE_METAL_PRESS = 142001002;

    public static final int PSYCHIC_BLAST_FWD = 142100000;
    public static final int PSYCHIC_BLAST_DOWN = 142100001;
    public static final int PSYCHIC_DRAIN = 142101009;
    public static final int PSYCHIC_ARMOR = 142101004;
    public static final int PURE_POWER = 142101005;
    public static final int ULTIMATE_DEEP_IMPACT = 142101003;

    public static final int PSYCHIC_ASSAULT_FWD = 142110000;
    public static final int PSYCHIC_ASSAULT_DOWN = 142110001;
    public static final int PSYCHIC_BULWARK = 142110009;
    public static final int PSYCHIC_REINFORCEMENT = 142111008;
    public static final int KINETIC_JAUNT = 142111010;
    public static final int ULTIMATE_TRAINWRECK = 142111007;
    public static final int KINETIC_COMBO = 142110011;
    public static final int MIND_TREMOR = 142111006;
    public static final int PSYCHIC_GRAB = 142110003;

    public static final int PSYCHIC_CLUTCH = 142120001;
    public static final int MIND_BREAK = 142121004;
    public static final int MIND_BREAK_ENHANCE = 142120041;
    public static final int ULTIMATE_PSYCHIC_SHOT = 142120002;
    public static final int ULTIMATE_BPM = 142121005;
    public static final int PRESIDENTS_ORDERS = 142121016;
    public static final int PSYCHIC_CHARGER = 142121008;
    public static final int TELEPATH_TACTICS = 142121006;
    public static final int MIND_QUAKE = 142120003;
    public static final int CLEAR_MIND = 142121007;

    public static final int MENTAL_TEMPEST = 142121030;
    public static final int MENTAL_TEMPEST_END = 142120030;
    public static final int MENTAL_SHOCK = 142121031;
    public static final int MENTAL_OVERDRIVE = 142121032;

    // V skills
    public static final int PSYCHIC_TORNADO = 400021008;
    public static final int PSYCHIC_TORNADO_1 = 400021009;
    public static final int PSYCHIC_TORNADO_2 = 400021010;
    public static final int PSYCHIC_TORNADO_3 = 400021011;
    public static final int MIND_OVER_MATTER = 400021048;
    public static final int PSYCHIC_SHOCKWAVE = 400021074;
    public static final int PSYCHIC_SHOCKWAVE_BLACKHOLE = 400021075;
    public static final int PSYCHIC_SHOCKWAVE_2 = 400021076;
    public static final int LAW_OF_GRAVITY = 400021096; // Used as rOpt for MobStat | Used as rOpt for Buff
    public static final int LAW_OF_GRAVITY_2 = 400021097;
    public static final int LAW_OF_GRAVITY_3 = 400021098;
    public static final int LAW_OF_GRAVITY_4 = 400021104; // AA


    public static final int MAX_PP = 30;
    public int lastBPMHit;

    private static final int[] nonOrbSkills = new int[]{
            ULTIMATE_METAL_PRESS,
            ULTIMATE_DEEP_IMPACT,
            ULTIMATE_TRAINWRECK,
            ULTIMATE_BPM,
            ULTIMATE_PSYCHIC_SHOT,

            PSYCHIC_FORCE,
            PSYCHIC_BLAST_DOWN,
            PSYCHIC_BLAST_FWD,
            PSYCHIC_ASSAULT_DOWN,
            PSYCHIC_ASSAULT_FWD,
            PSYCHIC_DRAIN,
            MENTAL_TEMPEST,
            KINETIC_COMBO,
    };

    public Kinesis(Char chr) {
        super(chr);
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isKinesis(id);
    }

    public int getPP() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(KinesisPsychicPoint)) {
            return tsm.getOption(KinesisPsychicPoint).nOption;
        }
        return 0;
    }

    public void addPP(int amount) {
        int pp = getPP() + amount > MAX_PP ? MAX_PP : getPP() + amount;
        sendPPPacket(pp);
    }

    public void substractPP(int amount) {
        int pp = getPP() - amount < 0 ? 0 : getPP() - amount;
        sendPPPacket(pp);
    }

    private void sendPPPacket(int pp) {
        Option o = new Option();
        o.nOption = pp;
        o.rOption = JobConstants.JobEnum.KINESIS_4.getJobId();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        tsm.putCharacterStatValue(KinesisPsychicPoint, o);
        tsm.sendSetStatPacket();
    }


    public void applyMindAreaDebuff(int skillId, Position position, List<Mob> mobList) {
        Skill skill = chr.getSkill(skillId);
        if (skill == null || mobList.size() > 5) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        Rect rect = position.getRectAround(si.getFirstRect());

        int multiplier = skillId == MIND_QUAKE ? 3 : 2;
        int mobCount = mobList.size();

        Option o1 = new Option();
        Option o2 = new Option();
        o1.nOption = -(Math.min(si.getValue(s, slv), (multiplier * mobCount)));
        o1.rOption = skillId;
        o1.tOption = si.getValue(time, slv);
        o2.nOption = Math.min(si.getValue(s, slv), (multiplier * mobCount));
        o2.rOption = skillId;
        o2.tOption = si.getValue(time, slv);

        for (Mob mob : mobList) {
            if (rect.hasPositionInside(mob.getPosition())) {
                MobTemporaryStat mts = mob.getTemporaryStat();

                mts.addStatOptionsAndBroadcast(chr, MobStat.PDR, o1);
                mts.addStatOptionsAndBroadcast(chr, MobStat.MDR, o1);
                mts.addStatOptionsAndBroadcast(chr, MobStat.Speed, o1);
                mts.addStatOptionsAndBroadcast(chr, MobStat.PsychicGroundMark, o2);
            }
        }
    }


    // Attack related methods ------------------------------------------------------------------------------------------

    @Override
    public void handleAttack(Client c, AttackInfo attackInfo) {
        Char chr = c.getChr();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = chr.getSkill(attackInfo.skillId);
        if (skill == null) {
            switch (attackInfo.skillId) {
                case PSYCHIC_ASSAULT_DOWN:
                    skill = chr.getSkill(PSYCHIC_ASSAULT_FWD);
                    break;
                case PSYCHIC_BLAST_DOWN:
                    skill = chr.getSkill(PSYCHIC_BLAST_FWD);
                    break;
            }
        }
        int skillID = 0;
        SkillInfo si = null;
        boolean hasHitMobs = attackInfo.mobAttackInfo.size() > 0;
        int slv = 0;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skill.getSkillId());
            slv = (byte) skill.getCurrentLevel();
            skillID = skill.getSkillId();
        }
        if (hasHitMobs && chr.hasSkill(KINETIC_COMBO) && attackInfo.skillId != KINETIC_COMBO) {
            createKineticOrbForceAtom(skillID, slv, attackInfo);
        }
        if (attackInfo.skillId != ULTIMATE_BPM &&
                attackInfo.skillId != ULTIMATE_METAL_PRESS &&
                attackInfo.skillId != ULTIMATE_TRAINWRECK &&
                attackInfo.skillId != MIND_OVER_MATTER &&
                attackInfo.skillId != ULTIMATE_PSYCHIC_SHOT &&
                attackInfo.skillId != PSYCHIC_SHOCKWAVE_2 &&
                attackInfo.skillId != PSYCHIC_SHOCKWAVE_BLACKHOLE
        ) {
            kinesisPPAttack(skillID, slv, si);
        }

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (attackInfo.skillId) {
            case PSYCHIC_FORCE:
            case PSYCHIC_BLAST_FWD:
            case PSYCHIC_BLAST_DOWN:
            case PSYCHIC_ASSAULT_FWD:
            case PSYCHIC_ASSAULT_DOWN:
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.createAndAddBurnedInfo(chr, skill);
                }
                break;
            case MIND_BREAK:
                int count = 0;
                var enhanceBonus = chr.getSkillStatValue(x, MIND_BREAK_ENHANCE); // 2 if chr has Skill ; 0 if not.
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = chr.getField().getLifeByObjectID(Mob.class, mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    count += mob.isBoss() ? si.getValue(x, slv) : 1;

                    count += enhanceBonus;
                }

                // [Kinesis] Custom Skill Change
                if (SkillChangeConstants.MIND_BREAK_FD_BUFF) {
                    count *= SkillChangeConstants.MIND_BREAK_FD_MULTIPLIER;
                }

                count = Math.max(0, Math.min(count, si.getValue(w, slv)));
                if (count > 0) {
                    // [Kinesis] Custom Skill Change
                    if (SkillChangeConstants.MIND_BREAK_MOST_BENEFICIAL_BUFF) {
                        var opt = tsm.getOptByCTSAndSkill(IndiePMdR, MIND_BREAK);
                        if (opt != null) {
                            count = Math.min(Math.max(opt.nOption, count), si.getValue(w, slv)); // Select max count from current mind break and last mind break
                        }
                    }
                    o1.nOption = count * si.getValue(indiePMdR, slv);
                    o1.rOption = skillID;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndiePMdR, o1);
                    tsm.sendSetStatPacket();
                }
                break;
            case MENTAL_SHOCK:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds(), new DebuffInfo(true));
                break;
            case MENTAL_TEMPEST_END:
                tsm.removeStatsBySkill(MENTAL_TEMPEST);
                break;
            case ULTIMATE_DEEP_IMPACT:
                attackInfo.mobAttackInfo.forEach(s -> {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(s.mobId);
                    if (mob != null && !mob.isBoss()) {
                        mob.getTemporaryStat().removeBuffs();
                    }
                });
                break;
            case ULTIMATE_BPM:
                if (SkillChangeConstants.BPM_NO_COST_NOT_HITTING_MOBS && hasHitMobs) { // [Kinesis] Custom Skill Change
                    lastBPMHit = Util.getCurrentTime();
                }
                break;
            case ULTIMATE_PSYCHIC_SHOT:
                o1.nOption = -si.getValue(x, slv);
                o1.rOption = ULTIMATE_PSYCHIC_SHOT;
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, Map.of(MobStat.PDR, o1, MobStat.MDR, o1), attackInfo.getMobIds());
                break;
            case LAW_OF_GRAVITY:
                if (hasHitMobs) {
                    si = SkillData.getSkillInfoById(LAW_OF_GRAVITY_4);
                    var mai = attackInfo.mobAttackInfo.get(0);
                    var pos = new Position(mai.hitX, mai.hitY);

                    AffectedArea aa = AffectedArea.getPassiveAA(chr, LAW_OF_GRAVITY_4, slv);
                    aa.setPosition(pos);
                    aa.setRect(aa.getPosition().getRectAround(si.getFirstRect()));

                    chr.getField().spawnAffectedArea(aa);
                }
                break;
        }

        super.handleAttack(c, attackInfo);
    }

    private int getTimeElapsedAfterLastBPMHit() {
        var now = Util.getCurrentTime();
        var diff = now - lastBPMHit;
        return diff; // milliseconds elapsed since last BPM hit.
    }

    // [Kinesis] Custom Skill Change
    private boolean swConsumePPForBPM() {
        var elapsedTimeMS = getTimeElapsedAfterLastBPMHit();
        return elapsedTimeMS > SkillChangeConstants.BPM_NO_COST_AFTER_MS;
    }

    private void createKineticOrbForceAtom(int skillID, int slv, AttackInfo attackInfo) {
        if (Arrays.asList(nonOrbSkills).contains(skillID) || Arrays.asList(nonOrbSkills).contains(attackInfo.skillId)) {
            return;
        }
        Field field = chr.getField();
        SkillInfo si = SkillData.getSkillInfoById(KINETIC_COMBO);
        int proc = si.getValue(prop, chr.getSkillLevel(KINETIC_COMBO));
        ForceAtomEnum fae = ForceAtomEnum.KINESIS_ORB_REAL;
        Rect rect = chr.getRectAround(new Rect(-500, -300, 200, 100));
        if (!chr.isLeft()) {
            rect = rect.horizontalFlipAround(chr.getPosition().getX());
        }
        List<Integer> targetList = new ArrayList<>();
        List<ForceAtomInfo> faiList = new ArrayList<>();

        if (Util.succeedProp(proc) && field.getMobsInRect(rect).size() > 0) {
            Mob mob = Util.getRandomFromCollection(field.getMobsInRect(rect));
            targetList.add(mob.getObjectId());

            int ranStuff = new Random().nextInt(3);
            int fImpact = new Random().nextInt(31) + 20;
            int sImpact = new Random().nextInt(25) + 10;
            ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc() + ranStuff, fImpact, sImpact,
                    new Random().nextInt(360), new Random().nextInt(400) + 400, Util.getCurrentTime(), 0, 0,
                    new Position());
            faiList.add(fai);
        }

        if (faiList.size() > 0 && targetList.size() > 0) {
            ForceAtom fa = new ForceAtom(chr.getId(), fae, targetList, KINETIC_COMBO, faiList);
            chr.createForceAtom(fa);
        }
    }

    @Override
    public void handleShootObj(Char chr, ShootObjectSkillInfo sosi) {
        var skillId = sosi.getSkillId();
        var slv = sosi.getSlv();
        switch (skillId) {
            case MIND_OVER_MATTER:
                kinesisPPAttack(skillId, slv, SkillData.getSkillInfoById(skillId));
                break;
            case PSYCHIC_TORNADO_1:
            case PSYCHIC_TORNADO_2:
            case PSYCHIC_TORNADO_3:
                chr.setSkillCooldown(skillId, slv);
                break;
        }
        super.handleShootObj(chr, sosi);
    }

    public void psychicOverRequest() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(KinesisPsychicOver)) {
            addPP(1);
        }
    }

    public void kinesisPPAttack(int skillID, int slv, SkillInfo si) {
        if (si == null) {
            if (skillID == 0) {
                addPP(1);
            }
            return;
        }
        int ppRec = si.getValue(ppRecovery, slv);
        addPP(ppRec);
        int ppCons = si.getValue(ppCon, slv);
        if (chr.getTemporaryStatManager().hasStat(KinesisPsychicOver)) {
            ppCons = ppCons / 2;
        }
        if (skillID == ULTIMATE_BPM) {
            ppCons = si.getValue(w, slv); // why nexon..
        }
        if (skillID == KINETIC_JAUNT) {
            ppCons = si.getValue(x, slv); // why nexon..
        }
        substractPP(ppCons);
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

        if (skillId == ULTIMATE_BPM && swConsumePPForBPM()) {
        } else {
            kinesisPPAttack(skillId, slv, si);
        }


        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (skillId) {
            case PSYCHIC_CHARGER:
                int add = (MAX_PP - getPP()) / 2;
                addPP(add);
                break;
            case ESP_BOOSTER:
                o1.nOption = si.getValue(indieBooster, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;
            case PSYCHIC_DRAIN:
                chr.setSkillCooldown(skillId, slv);
                break;
            case MENTAL_SHIELD:
                si = SkillData.getSkillInfoById(skillId);
                slv = 1;
                if (tsm.hasStatBySkillId(skillId)) {
                    tsm.removeStatsBySkill(skillId);
                    chr.getField().broadcastPacket(UserRemote.kinesisPsychicEnergyShieldEffect(chr, false));
                } else {
                    o1.nOption = si.getValue(x, slv);
                    o1.rOption = skillId;
                    tsm.putCharacterStatValue(KinesisPsychicEnergeShield, o1);
                }
                break;
            case PSYCHIC_ARMOR:
            case PSYCHIC_BULWARK:
                int psyArmorSLV = chr.getSkillLevel(PSYCHIC_ARMOR);
                int t = SkillData.getSkillInfoById(PSYCHIC_ARMOR).getValue(time, psyArmorSLV);
                int e = SkillData.getSkillInfoById(PSYCHIC_ARMOR).getValue(er, psyArmorSLV);
                o1.nOption = si.getValue(indiePdd, slv);
                o1.rOption = skillId;
                o1.tOption = t;
                tsm.putCharacterStatValue(IndieDEF, o1);
                o2.nOption = e;
                o2.rOption = skillId;
                o2.tOption = t;
                tsm.putCharacterStatValue(IndieEVAR, o2);
                o3.nOption = si.getValue(stanceProp, slv);
                o3.rOption = skillId;
                o3.tOption = t;
                tsm.putCharacterStatValue(IndieStance, o3);
                break;
            case PURE_POWER:
                o1.nOption = si.getValue(indieDamR, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                break;
            case PSYCHIC_REINFORCEMENT:
                o1.nOption = si.getValue(indieMadR, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMADR, o1);
                break;
            case TELEPATH_TACTICS:
                o1.nOption = si.getValue(indieMad, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMADR, o1);
                o2.nOption = si.getValue(indieDamR, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o2);
                break;
            case KINETIC_JAUNT:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(NewFlying, o1);
                break;
            case MENTAL_OVERDRIVE:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(KinesisPsychicOver, o1);
                break;
            case PSYCHIC_TORNADO: // TODO  Increment as the Tornado is growing.
                o1.nOption = 3;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(PsychicTornado, o1);
                break;
            case MENTAL_TEMPEST:
                if (!tsm.hasStatBySkillId(skillId)) {
                    o1.nOption = 1;
                    o1.rOption = skillId;
                    o1.tOption = 6;
                    tsm.putCharacterStatValue(NotDamaged, o1);
                    tsm.sendSetStatPacket();
                }
                addPP(MAX_PP);
                break;

        }
        tsm.sendSetStatPacket();
    }

    @Override
    public int alterCooldownSkill(int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        switch (skillId) {
            case PSYCHIC_DRAIN:
                if (SkillChangeConstants.PSYCHIC_DRAIN_REDUCE_CD) {
                    return SkillChangeConstants.PSYCHIC_DRAIN_COOLDOWN * 1000; // [Kinesis] Custom Skill Change
                }
                return -1; // Do not alter.

            case KINETIC_JAUNT:
                if (SkillChangeConstants.KINETIC_JAUNT_REDUCE_CD) {
                    return SkillChangeConstants.KINETIC_JAUNT_COOLDOWN * 1000; // [Kinesis] Custom Skill Change
                }
                return -1; // Do not alter.

            case MIND_BREAK:
                if (SkillChangeConstants.MIND_BREAK_REDUCE_CD) {
                    return SkillChangeConstants.MIND_BREAK_COOLDOWN * 1000; // [Kinesis] Custom Skill Change
                }
                return -1; // Do not alter.
        }
        return super.alterCooldownSkill(skillId, slv, attackInfo, sui, source);
    }

    @Override
    public void handleCancelKeyDownSkill(Char chr, int skillID) {
        switch (skillID) {
            case KINETIC_JAUNT:
                var tsm = chr.getTemporaryStatManager();
                tsm.removeStat(IndieKeyDownTime);
                tsm.removeStat(KeyDownAreaMoving);
                return; // Return is essential not to set the cooldown of kinetic jaunt. The cooldown is set at the start.
        }
        super.handleCancelKeyDownSkill(chr, skillID);
    }

    // Hit related methods ---------------------------------------------------------------------------------------------

    @Override
    public void handleHit(Client c, InPacket inPacket, HitInfo hitInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStatBySkillId(MENTAL_SHIELD) && hitInfo.fixDamR == 0) {
            hitInfo.hpDamage = (int) (hitInfo.hpDamage * (tsm.getOption(KinesisPsychicEnergeShield).nOption / 100D));
            substractPP(1);
        }
        if (getPP() <= 0) {
            tsm.removeStatsBySkill(MENTAL_SHIELD);
        }
        super.handleHit(c, inPacket, hitInfo);
    }

    @Override
    public void setCharCreationStats(Char chr) {
        super.setCharCreationStats(chr);
        CharacterStat cs = chr.getAvatarData().getCharacterStat();
        Item item = ItemData.getItemDeepCopy(1353200); // Pawn Chess Piece
        item.setBagIndex(BodyPart.Shield.getVal());
        chr.getEquippedInventory().addItem(item);
        chr.setSpToCurrentJob(5);
        cs.setLevel(10);
        cs.setJob(14200);
        cs.setMaxHp(574);
        cs.setHp(574);
        cs.setInt(45);
    }
}
