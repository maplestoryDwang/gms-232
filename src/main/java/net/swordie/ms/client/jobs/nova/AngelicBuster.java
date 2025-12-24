package net.swordie.ms.client.jobs.nova;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.debuff.DebuffInfo;
import net.swordie.ms.client.character.skills.debuff.DebuffUtil;
import net.swordie.ms.client.character.skills.info.*;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.Effect;
import net.swordie.ms.connection.packet.Summoned;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillChangeConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.AssistType;
import net.swordie.ms.enums.ForceAtomEnum;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.enums.Stat;
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

import java.util.Arrays;
import java.util.List;
import java.util.Random;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 12/14/2017.
 */
public class AngelicBuster extends Job {
    //AB Beginner Skills
    public static final int DRESS_UP = 60011222;
    public static final int SOUL_BUSTER = 60011216;
    public static final int HYPER_COORDINATE = 60011221; // removed from wz?
    public static final int GRAPPLING_HEART = 60011218;
    public static final int DAY_DREAMER = 60011220;
    public static final int TRUE_HEART_INHERITANCE = 60010217;

    //1st Job
    public static final int STAR_BUBBLE = 65001100;
    public static final int MELODY_CROSS = 65001002; //Buff

    //2nd job
    public static final int LOVELY_STING = 65101100;
    public static final int LOVELY_STING_EXPLOSION = 65101006;
    public static final int PINK_PUMMEL = 65101001;
    public static final int POWER_TRANSFER = 65101002; //Buff

    //3rd Job
    public static final int SOUL_SEEKER = 65111100;
    public static final int SOUL_SEEKER_ATOM = 65111007;
    public static final int SHINING_STAR_BURST = 65111101;
    public static final int HEAVENLY_CRASH = 65111002;
    public static final int IRON_BLOSSOM = 65111004; //Buff

    //4th Job
    public static final int CELESTIAL_ROAR = 65121100;
    public static final int TRINITY = 65121101;
    public static final int TRINITY_2 = 65121007;
    public static final int TRINITY_3 = 65121008;
    public static final int SOUL_RESONANCE = 65121003;
    public static final int FINALE_RIBBON = 65121002;
    public static final int STAR_GAZER = 65121004; //Buff
    public static final int NOVA_WARRIOR_AB = 65121009; //Buff
    public static final int SOUL_SEEKER_EXPERT = 65121011; //ON/OFF Buff
    public static final int SOUL_SEEKER_EXPERT_ATOM = 65120011; //ON/OFF Buff
    public static final int NOVA_TEMPERANCE_AB = 65121010;

    public static final int SOUL_SEEKER_MAKE_UP = 65120044;
    public static final int FINALE_RIBBON_ENHANCE = 65120047;

    //Hypers
    public static final int SUPREME_SUPERNOVA = 65121052;
    public static final int PRETTY_EXALTATION = 65121054;
    public static final int FINAL_CONTRACT = 65121053;


    //Affinity Heart Passives
    public static final int AFFINITY_HEART_I = 65000003;
    public static final int AFFINITY_HEART_II = 65100005;
    public static final int AFFINITY_HEART_III = 65110006;
    public static final int AFFINITY_HEART_IV = 65120006;

    // V skills
    public static final int SPARKLE_BURST = 400051011;
    public static final int SUPER_STAR_SPOTLIGHT = 400051018;
    public static final int SUPER_STAR_SPOTLIGHT_2 = 400051027; // number value
    public static final int MIGHTY_MASCOT = 400051046;
    public static final int TRINITY_FUSION = 400051072;


    private static final short INSTANT_RECHARGE_LEVEL = 140;


    private static final int[] addedSkills = new int[]{
            DRESS_UP,
            SOUL_BUSTER,
            GRAPPLING_HEART,
            DAY_DREAMER,
            TRUE_HEART_INHERITANCE,
    };

    private static final int[] soulRechargeSkills = new int[] {
            STAR_BUBBLE,
            LOVELY_STING_EXPLOSION,
            SOUL_SEEKER,
            SHINING_STAR_BURST,
            CELESTIAL_ROAR,
            TRINITY,
            TRINITY_2,
            TRINITY_3,
    };

    private int affinityHeartIIcounter = 0; // every 10 KOs 100% recharge
    private int affinityHeartIIIcounter = 0;

    public enum MightMascotSkillTypes {
        TwinkleStar(10),
        MagicalBalloon(11),
        ShinyBubbleBreath(12),
        ;

        int val;

        MightMascotSkillTypes(int val) {
            this.val = val;
        }

        public int getVal() {
            return val;
        }
    }

    public AngelicBuster(Char chr) {
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

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isAngelicBuster(id);
    }

    @Override
    public void setCharCreationStats(Char chr) {
        super.setCharCreationStats(chr);
        chr.setStat(Stat.level, 10);
        CharacterStat cs = chr.getAvatarData().getCharacterStat();
        cs.setStr(5);
        cs.setDex(5);
        cs.setInt(5);
        cs.setLuk(5);
        cs.setAp(4 + cs.getLevel() * 5);
        chr.getAvatarData().getCharacterStat().setJob(JobConstants.JobEnum.ANGELIC_BUSTER_1.getJobId());
        Item secondary = ItemData.getItemDeepCopy(1352601);
        secondary.setBagIndex(10);
        chr.getAvatarData().getAvatarLook().getHairEquips().add(secondary.getItemId());
        chr.getEquippedInventory().addItem(secondary);
        chr.setSpToCurrentJob(5);
        chr.getAvatarData().getCharacterStat().setPosMap(940011000);
    }


    public void giveSpotlightBuff(boolean giveBuff, int stack) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!chr.hasSkill(SUPER_STAR_SPOTLIGHT)
                || !tsm.hasStat(SpotLight)
                || stack > 3
                || stack < 0) {
            return;
        }
        Skill skill = chr.getSkill(SUPER_STAR_SPOTLIGHT);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();

        if (giveBuff) {
            Option o1 = new Option();
            Option o2 = new Option();
            Option o3 = new Option();
            Option o4 = new Option();
            Option o5 = new Option();

            o1.nOption = stack * si.getValue(w, slv);
            o1.rOption = SUPER_STAR_SPOTLIGHT_2;
            tsm.putCharacterStatValue(IndieAsrR, o1);
            o2.nOption = stack * si.getValue(v, slv);
            o2.rOption = SUPER_STAR_SPOTLIGHT_2;
            tsm.putCharacterStatValue(IndieCr, o2);
            o3.nOption = stack * si.getValue(q, slv);
            o3.rOption = SUPER_STAR_SPOTLIGHT_2;
            tsm.putCharacterStatValue(IndieStance, o3);
            o4.nOption = stack * si.getValue(s, slv);
            o4.rOption = SUPER_STAR_SPOTLIGHT_2;
            tsm.putCharacterStatValue(IndiePMdR, o4);
            o5.nOption = stack;
            o5.rOption = SUPER_STAR_SPOTLIGHT_2;
            o5.xOption = stack;
            tsm.putCharacterStatValue(ExtraSkillCTS, o5);
        }
        tsm.sendSetStatPacket();
    }

    public void handleRemoveCTS(CharacterTemporaryStat cts, Option o) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (cts == SpotLight) {
            tsm.removeStatsBySkill(SUPER_STAR_SPOTLIGHT_2);
        }

        super.handleRemoveCTS(cts, o);
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
            // Sparkle Burst
            if (attackInfo.skillId != 0 && attackInfo.skillId != SPARKLE_BURST) {
                createSparkleBurstForceAtom(attackInfo);
            }

            //Soul Seeker Expert
            if (swProcSoulSeekerExpert(attackInfo.skillId)) {
                soulSeekerExpert(attackInfo);
            }

            // Soul Recharge
            if (attackInfo.skillId != TRINITY && attackInfo.skillId != TRINITY_2 && // ignore trinity, as it should only go on off state if 1 enemy has been killed
                    Arrays.stream(soulRechargeSkills).anyMatch(s -> s == attackInfo.skillId)) {
                setOffState(attackInfo.skillId == TRINITY_3 ? TRINITY : attackInfo.skillId);
            }
        }
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (attackInfo.skillId) {
            case TRINITY:
            case TRINITY_2:
                if (hasHitMobs) {
                    MobAttackInfo mai = attackInfo.mobAttackInfo.get(0);
                    if (mai.mobDies) {
                        // Off State
                        setOffState(TRINITY);

                        // Recharge
                        rechargeLogic(attackInfo);
                    }
                }
                // Fall through intended
            case TRINITY_3:
                trinityBuff();
                break;
            case LOVELY_STING:
                o1.nOption = 1;
                o1.rOption = skill.getSkillId();
                o1.wOption = chr.getId();

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Explosion, o1, attackInfo.getMobIds());
                break;
            case HEAVENLY_CRASH:
                o1.nOption = 150;
                o1.rOption = skillID;
                o1.tOption = 6;

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Lifting, o1, attackInfo.getMobIds(), new DebuffInfo(true));
                break;
            case FINALE_RIBBON:
                o1.nOption = si.getValue(x, slv) + chr.getSkillStatValue(x, FINALE_RIBBON_ENHANCE); // Final Dmg%
                o1.pOption = si.getValue(y, slv); // Final Dmg% for PartyMembers
                o1.wOption = chr.getId();
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Fatality, o1, attackInfo.getMobIds());
                break;
            case CELESTIAL_ROAR:    //Stun Debuff
                o1.nOption = 1;
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds(), new DebuffInfo(true, si.getValue(prop, slv)));
                break;
            case LOVELY_STING_EXPLOSION:
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.removeMobStat(MobStat.Explosion);
                }
                break;
            case SPARKLE_BURST:
                var opt = tsm.getOption(SparkleBurstStage);
                var inviTime = si.getValue(z, slv) + ((opt.nOption - 1) * si.getValue(s, slv));
                tsm.removeStatsBySkill(SPARKLE_BURST);
                chr.getField().removeSummon(getSparkleBurstSummon());

                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = inviTime;
                tsm.putCharacterStatValue(IndieNotDamaged, o1, true);
                tsm.sendSetStatPacket();
                break;
            case SUPREME_SUPERNOVA:
                if (!chr.hasSkillOnCooldown(skillID)) {
                    chr.addSkillCoolTime(skillID, si.getValue(cooltime, slv) * 1000);
                }
                break;
            case MIGHTY_MASCOT:
                if (attackInfo.attackActionType == MightMascotSkillTypes.ShinyBubbleBreath.getVal()) {

                } else if (hasHitMobs && attackInfo.summon != null
                        && (attackInfo.attackActionType == MightMascotSkillTypes.TwinkleStar.getVal() || attackInfo.attackActionType == MightMascotSkillTypes.MagicalBalloon.getVal())) {
                    attackInfo.summon.incCount();
                    chr.write(Summoned.summonUpgradeStage(attackInfo.summon, 2, 0, 0));
                    chr.write(Summoned.effect(attackInfo.summon, 2, 0));

                    int maxStack = si.getValue(s, slv);
                    if (attackInfo.summon.getCount() < maxStack) {
                        increaseMightyMascotSummonTerm();
                    }
                }
                break;
        }

        if (attackInfo.skillId != TRINITY && attackInfo.skillId != TRINITY_2 &&
                attackInfo.skillId != SOUL_SEEKER_ATOM && attackInfo.skillId != SOUL_SEEKER_EXPERT_ATOM) {
            rechargeLogic(attackInfo);
        }
        super.handleAttack(c, attackInfo);
    }

    private boolean swProcSoulSeekerExpert(int skillId) {
        return (skillId == SOUL_BUSTER && SkillChangeConstants.SOUL_BUSTER_PROC_SOUL_SEEKER_EXPERT) // [Angelic Buster] Custom Skill Change
                || !(skillId == SOUL_SEEKER_ATOM
                        || skillId == SOUL_SEEKER_EXPERT_ATOM
                        || skillId == SOUL_BUSTER
                        || skillId == SUPER_STAR_SPOTLIGHT
                        || skillId == SUPER_STAR_SPOTLIGHT_2);
    }

    public void setTrinityOff() {
        AttackInfo ai = new AttackInfo();
        ai.skillId = TRINITY;
        setOffState(TRINITY);
        rechargeLogic(ai);
    }

    private void rechargeLogic(AttackInfo attackInfo) {
        boolean willAlwaysRecharge = attackInfo.skillId == SOUL_BUSTER || attackInfo.skillId == PINK_PUMMEL || attackInfo.skillId == HEAVENLY_CRASH;
        if (willAlwaysRecharge || Util.succeedProp(getRechargeProc(attackInfo))) {
            rechargeABSkills(attackInfo.skillId);
        } else {
            if (chr.hasSkill(AFFINITY_HEART_III)) {
                affinityHeartIIIcounter++;
            }
            affinityHeartIVRechargeAttempt(attackInfo);
        }
        affinityHeartII(attackInfo);
        affinityHeartIII();
    }

    private void affinityHeartII(AttackInfo ai) {
        if (!chr.hasSkill(AFFINITY_HEART_II)) {
            return;
        }
        for (MobAttackInfo mai : ai.mobAttackInfo) {
            if (mai.mobDies) {
                if (affinityHeartIIcounter >= chr.getSkillStatValue(x, AFFINITY_HEART_II)) {
                    affinityHeartIIcounter = 0;
                    rechargeABSkills(ai.skillId);
                } else {
                    affinityHeartIIcounter++;
                }
            }
        }
    }

    private void affinityHeartIII() {
        if (!chr.hasSkill(AFFINITY_HEART_III)) {
            return;
        }
        if (affinityHeartIIIcounter >= 2) {
            rechargeABSkills();
        }
    }

    private void affinityHeartIVRechargeAttempt(AttackInfo attackInfo) {
        if (!chr.hasSkill(AFFINITY_HEART_IV)) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(AFFINITY_HEART_IV);
        int slv = chr.getSkillLevel(AFFINITY_HEART_IV);
        if (Util.succeedProp(si.getValue(x, slv)) && Util.succeedProp(getRechargeProc(attackInfo))) {
            rechargeABSkills(attackInfo.skillId);
        }
    }

    private void affinityHeartIVBuff() {
        if (!chr.hasSkill(AFFINITY_HEART_IV)) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(AFFINITY_HEART_IV);
        int slv = chr.getSkillLevel(AFFINITY_HEART_IV);
        if (Util.succeedProp(50)) { // thanks for the hardcode nexon
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            Option o = new Option();
            o.nOption = si.getValue(y, slv);
            o.rOption = si.getSkillId();
            o.tOption = 5; // thanks for the hardcode nexon
            tsm.putCharacterStatValue(IndieDamR, o);
            tsm.sendSetStatPacket();
        }
    }

    private void soulSeekerExpert(AttackInfo attackInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(AngelicBursterSoulSeeker)) {
            SkillInfo si = SkillData.getSkillInfoById(SOUL_SEEKER_EXPERT);
            int slv = chr.getSkillLevel(SOUL_SEEKER_EXPERT);
            Mob mob = Util.getRandomFromCollection(attackInfo.mobAttackInfo).mob;
            if (mob == null) {
                return;
            }
            int proc = si.getValue(prop, slv);
            if (attackInfo.skillId == CELESTIAL_ROAR) {
                proc += si.getValue(z, slv);
            }
            if (tsm.getOptByCTSAndSkill(IndieIgnoreMobpdpR, PRETTY_EXALTATION) != null) {
                proc += chr.getSkillStatValue(x, PRETTY_EXALTATION);
            }
            int recreationProc = chr.getSkillStatValue(s, SOUL_SEEKER) + chr.getSkillStatValue(prop, SOUL_SEEKER_MAKE_UP);
            if (Util.succeedProp(proc)) {
                for (int i = 0; i < 2; i++) {
                    int angle = i == 0 ? 50 : 130;
                    int delay = i == 0 ? 100 : 250;
                    int mobID = mob.getObjectId();
                    ForceAtomEnum fae = ForceAtomEnum.TRANSPARENT_AB_ORB;
                    ForceAtomInfo forceAtomInfo = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 20, 40,
                            angle, delay, Util.getCurrentTime(), 1, 0,
                            new Position(5, 0)); //Slightly behind the player
                    ForceAtom fa = new ForceAtom(false, 0, chr.getId(), fae,
                            true, mobID, SOUL_SEEKER_EXPERT_ATOM, forceAtomInfo, new Rect(), 0, 300,
                            mob.getPosition(), SOUL_SEEKER_EXPERT_ATOM, mob.getPosition(), 0);
                    fa.setMaxRecreationCount(chr.getSkillStatValue(z, SOUL_SEEKER));
                    fa.setRecreationChance(recreationProc);
                    chr.createForceAtom(fa);
                }
            }
        }
    }

    private void createSoulSeekerForceAtom() {
        Field field = chr.getField();
        SkillInfo si = SkillData.getSkillInfoById(SOUL_SEEKER);
        int slv = chr.getSkillLevel(SOUL_SEEKER);
        Rect rect = chr.getPosition().getRectAround(si.getFirstRect());
        if (!chr.isLeft()) {
            rect = rect.horizontalFlipAround(chr.getPosition().getX());
        }
        List<Mob> lifes = field.getMobsInRect(rect);
        if (lifes.size() <= 0) {
            return;
        }

        List<Mob> bossLifes = field.getBossMobsInRect(rect);
        Life life = Util.getRandomFromCollection(lifes);
        if (bossLifes.size() > 0) {
            life = Util.getRandomFromCollection(bossLifes);
        }
        int fImpact = new Random().nextInt(4) + 29;
        int angle = new Random().nextInt(10);
        int mobID = life.getObjectId();
        ForceAtomEnum fae = ForceAtomEnum.AB_ORB;
        ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), fImpact, 40,
                angle, 250, Util.getCurrentTime(), 0, 0,
                new Position());
        ForceAtom fa = new ForceAtom(false, chr.getId(), chr.getId(), fae,
                true, mobID, SOUL_SEEKER_ATOM, fai, new Rect(), 0, 0,
                new Position(), SOUL_SEEKER_ATOM, new Position(), 0);
        fa.setMaxRecreationCount(si.getValue(z, slv));
        fa.setRecreationChance(si.getValue(s, slv) + chr.getSkillStatValue(prop, SOUL_SEEKER_MAKE_UP));
        chr.createForceAtom(fa);
    }

    private void createSparkleBurstForceAtom(AttackInfo attackInfo) {
        Field field = chr.getField();
        if (!chr.hasSkill(SPARKLE_BURST) || getSparkleBurstSummon() == null) {
            return;
        }
        Rect rect = new Rect(
                new Position(
                        -1500,
                        -1500),
                new Position(
                        1500,
                        1500)
        );
        ForceAtomEnum fae = ForceAtomEnum.SPARKLE_BURST_1;
        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            Mob mob = mai.mob;
            if (mob == null) {
                continue;
            }
            for (int i = 0; i < 3; i++) {
                int fImpact = new Random().nextInt(35) + 15;
                int sImpact = new Random().nextInt(2) + 5;
                int inc = new Random().nextInt(3) + 1;
                int delay = new Random().nextInt(200) + 100;
                ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), inc, fImpact, sImpact, chr.isLeft() ? 270 : 90, delay, Util.getCurrentTime(), 0, 0, new Position());
                chr.createForceAtom(new ForceAtom(true, chr.getId(), chr.getId(), fae,
                        false, mob.getObjectId(), SPARKLE_BURST, fai, mob.getRectAround(rect), 0, 0,
                        mob.getPosition(), 0, mob.getPosition(), 0));
                incrementSparkleBurstEnergy();
            }
        }
    }

    private void incrementSparkleBurstEnergy() {
        incrementSparkleBurstEnergy(1);
    }

    private void incrementSparkleBurstEnergy(int amount) {
        Summon summon = getSparkleBurstSummon();
        if (!chr.hasSkill(SPARKLE_BURST) || summon == null) {
            return;
        }

        summon.incCount(amount);

        if (summon.getCount() == SkillChangeConstants.SPARKLE_BURST_STAGE_II_REQ || summon.getCount() == SkillChangeConstants.SPARKLE_BURST_STAGE_III_REQ) {
            incrementSparkleBurstState();
        }
    }

    private void incrementSparkleBurstState() {
        Summon summon = getSparkleBurstSummon();
        if (!chr.hasSkill(SPARKLE_BURST) || summon == null || summon.getState() > 2) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        Option o1 = new Option();

        if (summon.getState() == 0) {
            chr.getField().broadcastPacket(Summoned.summonedSkill(summon, (byte) 16, SPARKLE_BURST, null));
            summon.incState();
        } else if (summon.getState() == 1) {
            chr.getField().broadcastPacket(Summoned.summonedSkill(summon, (byte) 17, SPARKLE_BURST, null));
            summon.incState();
        }
        var tOpt = (int) tsm.getRemainingTime(SparkleBurstStage, SPARKLE_BURST);
        o.nOption = summon.getState() + 1;
        o.rOption = SPARKLE_BURST;
        o.tOption = tOpt;
        o.setInMillis(true);
        tsm.putCharacterStatValue(SparkleBurstStage, o, true);
        tsm.sendSetStatPacket();
    }

    private Summon getSparkleBurstSummon() {
        return chr.getField().getSummons().stream().filter(s -> s.getChr() == chr && s.getSkillID() == SPARKLE_BURST).findAny().orElse(null);
    }

    private int getRechargeProc(AttackInfo attackInfo) {
        if (chr.getLevel() >= INSTANT_RECHARGE_LEVEL) {
            return 100;
        }
        Skill skill = chr.getSkill(SkillConstants.getActualSkillIDfromSkillID(attackInfo.skillId));
        if (skill == null) {
            return 0;
        }
        int slv = skill.getCurrentLevel();
        SkillInfo rechargeInfo = SkillData.getSkillInfoById(skill.getSkillId());
        int rechargeproc = rechargeInfo.getValue(onActive, slv);
        if (rechargeproc <= 0) {
            return rechargeproc;
        }
        rechargeproc += chr.getSkillStatValue(x, AFFINITY_HEART_I);

        return rechargeproc;
    }

    private void trinityBuff() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o1 = new Option();
        SkillInfo si = SkillData.getSkillInfoById(TRINITY);
        int slv = chr.getSkillLevel(TRINITY);
        int amount = 1;
        if (tsm.hasStat(Trinity)) {
            amount = tsm.getOption(Trinity).mOption;
            if (amount < si.getValue(y, slv)) {
                amount++;
            }
        }
        o1.nOption = si.getValue(x, slv) * amount;
        o1.rOption = TRINITY;
        o1.tOption = si.getValue(time, slv);
        o1.mOption = amount;
        tsm.putCharacterStatValue(Trinity, o1);
        tsm.sendSetStatPacket();
    }

    private void setOffState(int skillId) {
        chr.write(UserLocal.setOffStateForOffSkill(skillId));
    }

    private void rechargeABSkills() {
        rechargeABSkills(0);
    }

    private void rechargeABSkills(int skillId) {
        chr.write(UserPacket.effect(Effect.createABRechargeEffect()));
        chr.write(UserLocal.resetStateForOffSkill());

        if (chr.hasSkill(AFFINITY_HEART_III)) {
            affinityHeartIIIcounter = 0;
        }

        if (chr.hasSkill(AFFINITY_HEART_IV)) {
            affinityHeartIVBuff();
        }

        if (chr.getField().getSummonByChrAndSkillId(chr, MIGHTY_MASCOT) != null && skillId != MIGHTY_MASCOT) {
            doMightyMascotAttack();
        }
    }

    private Summon getMightyMascot() {
        return chr.getField().getSummonByChrAndSkillId(chr, MIGHTY_MASCOT);
    }

    private void doMightyMascotAttack() {
        Summon mightyMascot = getMightyMascot();
        if (mightyMascot == null) {
            return;
        }
        if (Util.getRandomBool()) {
            chr.getField().broadcastPacket(Summoned.summonedAssistAttackRequest(mightyMascot, MightMascotSkillTypes.MagicalBalloon.getVal()));
        } else {
            chr.getField().broadcastPacket(Summoned.summonedAssistAttackRequest(mightyMascot, MightMascotSkillTypes.TwinkleStar.getVal()));
        }
    }

    private void increaseMightyMascotSummonTerm() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        Option prevOpt = tsm.getOptByCTSAndSkill(IndieSummon, MIGHTY_MASCOT);
        SkillInfo si = SkillData.getSkillInfoById(MIGHTY_MASCOT);
        int slv = chr.getSkillLevel(MIGHTY_MASCOT);
        int termInc = si.getValue(q, slv);
        o.nOption = prevOpt.nOption;
        o.rOption = prevOpt.rOption;
        o.tOption = (int) tsm.getRemainingTime(IndieSummon, MIGHTY_MASCOT) + termInc;
        o.summon = prevOpt.summon;
        o.setInMillis(true);
        tsm.putCharacterStatValue(IndieSummon, o, true);
        tsm.sendSetStatPacket();
    }

    public void doBubbleBreath() {
        Summon mightyMascot = getMightyMascot();
        if (mightyMascot == null || mightyMascot.isJaguarActive()) {
            return;
        }
        chr.getField().broadcastPacket(Summoned.assistSpecialAttackRequest(mightyMascot, MightMascotSkillTypes.ShinyBubbleBreath.getVal()));
        mightyMascot.setJaguarActive(true); // placeholder for  Usage Check.
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
        switch (skillId) {
            case SOUL_SEEKER:
                for (int i = 0; i < si.getValue(bulletCount, slv); i++) {
                    createSoulSeekerForceAtom();
                }
                break;
            case MELODY_CROSS:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieBooster, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;
            case POWER_TRANSFER:
                o1.nOption = chr.getMaxHP() < 1000 ? 1000 : chr.getMaxHP() > 99999 ? 99999 : chr.getMaxHP();
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(PowerTransferGauge, o1);
                break;
            case IRON_BLOSSOM:
                o1.nOption = si.getValue(prop, slv) * (tsm.hasStatBySkillId(POWER_TRANSFER) ? 2 : 1);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieStance, o1);
                break;
            case STAR_GAZER:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(SoulGazeCriDamR, o1);
                break;
            case SOUL_SEEKER_EXPERT:
                o1.nOption = 1;
                o1.rOption = skillId;
                tsm.putCharacterStatValue(AngelicBursterSoulSeeker, o1);
                break;
            case PRETTY_EXALTATION:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieIgnoreMobpdpR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieIgnoreMobpdpR, o1);
                o2.rOption = skillId;
                o2.nOption = si.getValue(indieBDR, slv);
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBDR, o2);
                break;
            case FINAL_CONTRACT:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieCr, o1);
                o2.nOption = si.getValue(asrR, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieAsrR, o2);
                tsm.putCharacterStatValue(IndieTerR, o2);
                o3.nOption = si.getValue(indieStance, slv);
                o3.rOption = skillId;
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieStance, o3);
                o4.nOption = si.getValue(indiePad, slv);
                o4.rOption = skillId;
                o4.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePAD, o4);
                break;
            case SUPER_STAR_SPOTLIGHT:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(SpotLight, o1);
                break;
            case SPARKLE_BURST:
                Summon summon = Summon.getSummonByNoCTS(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setAssistType(AssistType.None);
                summon.setFlip(true);
                chr.getField().spawnSummonAndRemoveOld(summon);

                o2.nOption = 1;
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(SparkleBurstStage, o2);
                break;
            case MIGHTY_MASCOT:
                summon = Summon.getSummonByNoCTS(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Walk);
                summon.setAssistType(AssistType.SequenceAttack);
                summon.setSummonTerm(60000);
                summon.setCount(1); // calculates how long Breath will last
                o1.rOption = skillId;
                o1.nOption = 1;
                o1.summon = summon;
                o1.tOption = si.getValue(time, slv) * 1000;
                o1.setInMillis(true);
                tsm.putCharacterStatValue(IndieSummon, o1, true);
                tsm.sendSetStatPacket();

                chr.getField().spawnSummonAndRemoveOld(summon);
                break;
            case TRINITY_FUSION:
                o1.nOption = -si.getValue(w, slv);
                o1.rOption = skillId;
                o1.tOption = 1;
                tsm.putCharacterStatValue(IndieHitDamageInclHPR, o1);
                break;
        }
        tsm.sendSetStatPacket();
    }

    @Override
    public void handleKeyDownSkill(Char chr, int skillID, InPacket inPacket) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        switch (skillID) {
            case SOUL_RESONANCE:
                SkillInfo si = SkillData.getSkillInfoById(skillID);
                int slv = chr.getSkillLevel(skillID);
                o.nOption = si.getValue(y, slv);
                o.rOption = skillID;
                o.tOption = 15;
                tsm.putCharacterStatValue(AngelicBursterSoulResonance, o);
                tsm.sendSetStatPacket();
                break;
        }
        super.handleKeyDownSkill(chr, skillID, inPacket);
    }

    // Hit related methods ---------------------------------------------------------------------------------------------

    @Override
    public void handleHit(Client c, InPacket inPacket, HitInfo hitInfo) {

        powerTransferShield(hitInfo);

        super.handleHit(c, inPacket, hitInfo);
    }

    private void powerTransferShield(HitInfo hitInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        if (tsm.getOptByCTSAndSkill(PowerTransferGauge, POWER_TRANSFER) != null && chr.hasSkill(POWER_TRANSFER)) {
            int dmg = hitInfo.hpDamage;
            Option oldOption = tsm.getOption(PowerTransferGauge);
            if (oldOption.nOption - dmg <= 0) {
                tsm.removeStatsBySkill(POWER_TRANSFER);
                return;
            }
            o.nOption = (oldOption.nOption - dmg);
            o.rOption = oldOption.rOption;
            o.tOption = (int) tsm.getRemainingTime(PowerTransferGauge, POWER_TRANSFER);
            o.setInMillis(true);
            tsm.putCharacterStatValue(PowerTransferGauge, o, true);
            tsm.sendSetStatPacket();
        }
    }

    @Override
    public void onWarp(Field oldField, Field newField) {
        super.onWarp(oldField, newField);
        chr.write(UserLocal.setDressChanged(false, true));
    }
}