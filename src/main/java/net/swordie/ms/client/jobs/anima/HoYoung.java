package net.swordie.ms.client.jobs.anima;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.skills.ExtraSkillInfo;
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
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.*;
import net.swordie.ms.enums.AssistType;
import net.swordie.ms.enums.ForceAtomEnum;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.enums.Stat;
import net.swordie.ms.handlers.executors.EventManager;
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

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 15-10-2019.
 *
 * @author Asura
 */
public class HoYoung extends Job {

    // TODO
    //      ShapeShift
    //      Lock Skill (Nimbus Cloud)
    //      Secret Action

    public static final int MAX_CHARM_POWER = 100; // SkillStat x
    public static final int MAX_SCROLL_GAUGE = 900; // SkillStat y


    // Beginner Skills
    public static final int EXCLUSIVE_SPELL = 160001005;
    public static final int BLUE_CLOUD_VALLEY_RETURN = 160001074;
    public static final int SPIRIT_FRIENDLINESS = 160000000;
    public static final int SELF_CONFIDENCE = 160000001; // link Skill
    public static final int MONSTER_SEAL = 160000076; // some invisible skill gives some PAD and shit  (levelled through quests)
    public static final int SHAPESHIFT = 160001075;


    // 1st Job Skills
    public static final int CHARM_POWER = 164000010; // Passive (Gauge)
    public static final int FAN = 164001000; // Human Attr
    public static final int BOTTLE_SUCTION = 164001001; // Charm Attr
    public static final int BOTTLE_SUCTION_1 = 164001002; // Charm Attr
    public static final int NIMBUS_CLOUD = 164001004; // Charm Attr


    // 2nd Job Skills
    public static final int GROUND_WAVE_REAL_1 = 164101000; // Earth Attr
    public static final int GROUND_WAVE_REAL_2 = 164101001; // Earth Attr
    public static final int GROUND_WAVE_FAKE_1 = 164101002; // Earth Attr
    public static final int CLONE_SEAL_BUFF = 164101003; // Charm Attr
    public static final int CLONE_SEAL_ATTACK = 164101004; // Charm Attr
    public static final int FAN_ACCELERATION = 164101005; // Buff (Booster)
    public static final int SECRET_ACTION = 164100006; // DarkSight after Clone(Fake) attack
    public static final int SECRET_ACTION_BUFF = 164101006; // DarkSight after Clone(Fake) attack

    // 3rd Job Skills
    public static final int SCROLL_POWER = 164110014; // Passive (Gauge)
    public static final int WIND_WAVE_REAL_1 = 164111000; // Heaven Attr
    public static final int WIND_WAVE_REAL_2 = 164111001; // Heaven Attr
    public static final int WIND_WAVE_FAKE = 164111002; // Heaven Attr
    public static final int WIND_WAVE_FAKE_2 = 164111010; // Heaven Attr
    public static final int EARTH_BREAK_REAL = 164111003; // Earth Attr   |   Applies Debuff on Mob   Stun
    public static final int EARTH_BREAK_FAKE = 164111004; // Earth Attr   |   Applies Debuff on Mob   Stun
    public static final int EARTH_BREAK_FAKE_2 = 164111006; // Earth Attr   |   Applies Debuff on Mob   Stun
    public static final int FIRE_PURSUIT = 164111007; // Charm Attr
    public static final int ANIMAL_TRANSFORMATION = 164111008; // Scroll Attr | SkillStat u, u2, v, w  are MobTemplateIDs 2400500 ~ 2400503   |   Applies  AnimalMorph & DEF% down  Debuff
    public static final int BREATH_CONTROL = 164110013; // Heal HP&MP if reaching 3rd link Stage


    // 4th Job Skills
    public static final int DESTRUCTION_FLAME_REAL_1 = 164121000; // Heaven Attr
    public static final int DESTRUCTION_FLAME_REAL_2 = 164121001; // Heaven Attr
    public static final int DESTRUCTION_FLAME_FAKE = 164121002; // Heaven Attr
    public static final int STAFF_SMASH_1 = 164121003; // Human Attr
    public static final int STAFF_SMASH_2 = 164121004; // Human Attr
    public static final int TRANSFORM_STONE = 164121005; // Applies Debuff on Mob  BurnedInfo
    public static final int TELEPORT_GATE_DOOR = 164121006; // Charm Attr  |  Summon
    public static final int TELEPORT_GATE_CLONE = 164121011; // Charm Attr  |  Summon
    public static final int TELEPORT_GATE_DOOR_TO_CLONE = 164121012; // Charm Attr  |  Summon

    public static final int BUTTERFLY_DREAM = 164121007; // Scroll Attr
    public static final int BUTTERFLY_DREAM_ATT = 164120007; // Scroll Attr
    public static final int BUTTERFLY_RUSH = 164120038;
    public static final int ABSORBING_VORTEX = 164121008; // Scroll Attr
    public static final int ABSORBING_VORTEX_END = 164121015; // Scroll Attr
    /*Absorbing Vortex, will have a counter  every 4hits dealt to an enemy. (3if boss)  BroadcastLeave -> heal pmembers 5% per essence*/

    public static final int ANIMA_WARRIOR = 164121009; // MapleWarrior Buff
    public static final int ANIMA_HERO_WILL = 164121010;


    // Hyper Skills
    public static final int MASTER_ELIXIR = 164121041;
    public static final int DREAM_GARDEN = 164121042; // iFrame
    public static final int MASTER_CLONE_TRANSFORMATION = 164121043; // Scroll Attr
    public static final int MASTER_CLONE_TRANSFORMATION_MOB_DEBUFF = 164121044; // Applies Debuff on Mob  Bind


    // V Skills
    public static final int HYPER_CLONE_RAMPAGE_BUFF = 400041048;
    public static final int HYPER_CLONE_RAMPAGE_ATTACK = 400041049;
    public static final int MOUNTAIN_SPIRIT = 400041050; // Scroll Attr  |  Summon
    public static final int MOUNTAIN_SPIRIT_2 = 400041051;
    public static final int GODS_COMING = 400041052; // Summon
    public static final int GODS_COMING_ENDING = 400041053;
    public static final int THREE_PATHS_APPARITION_BUFF = 400041063; // Buff
    public static final int THREE_PATHS_APPARITION_ATTACK_1 = 400041064; // Attack | Heaven
    public static final int THREE_PATHS_APPARITION_ATTACK_2 = 400041065; // Attack | Earth
    public static final int THREE_PATHS_APPARITION_ATTACK_3 = 400041066; // Attack | Human
    public static final int THREE_PATHS_APPARITION_COOLTIMES = 400041067; // Cooltimes | x passive | y active
    public static final int THREE_PATHS_APPARITION_PROC = 400041068; // Skill Effect when proccing


    public static final int[] addedSkills = new int[] {
            BLUE_CLOUD_VALLEY_RETURN,
            SPIRIT_FRIENDLINESS,
            NIMBUS_CLOUD,
            MONSTER_SEAL,
            SHAPESHIFT,
            EXCLUSIVE_SPELL,
    };

    public static final int[] attributeSkillsWithCooldown = new int[] {
            EARTH_BREAK_REAL,
            DESTRUCTION_FLAME_REAL_1,
            STAFF_SMASH_1,
    };

    public static final int[] fakeSkills = new int[] {
            GROUND_WAVE_FAKE_1,
            EARTH_BREAK_FAKE_2,
            WIND_WAVE_FAKE,
            DESTRUCTION_FLAME_FAKE,
    };

    private int godsComingCounter = 0;
    private ScheduledFuture bottleSuctionTimer;
    private long dreamOfShangriLa;


    public HoYoung(Char chr) {
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
        return JobConstants.isHoYoung(id);
    }

    @Override
    public void handleAttack(Client c, AttackInfo attackInfo) {
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



        if (hasHitMobs && !SkillConstants.isSummon(attackInfo.skillId) && !SkillConstants.isAffectedArea(attackInfo.skillId)) {
            if (!isThreePathsAttack(attackInfo.skillId)) {
                animaThiefGauge(attackInfo.skillId);
            }

            // Clone Seal
            if ((tsm.hasStat(AT_Clone) || tsm.hasStat(AT_HyperClone))
                    && attackInfo.skillId != CLONE_SEAL_ATTACK && attackInfo.skillId != HYPER_CLONE_RAMPAGE_ATTACK && attackInfo.skillId != BUTTERFLY_DREAM_ATT) {
                activateCloneAttack(attackInfo);
            }

            // Butterfly Dream
            if (attackInfo.skillId != BUTTERFLY_DREAM_ATT
                    && attackInfo.skillId != HYPER_CLONE_RAMPAGE_ATTACK
                    && attackInfo.skillId != CLONE_SEAL_ATTACK
                    && tsm.getOptByCTSAndSkill(IndiePMdR, BUTTERFLY_DREAM) != null) {
                createButterflyDreamForceAtom();
            }

            // GodsComing
            if (attackInfo.skillId != GODS_COMING && chr.getField().getSummonByChrAndSkillId(chr, GODS_COMING) != null) {
                godsComingCounter++;
                if (godsComingCounter >= 12) {
                    doGodsComingAttack();
                }
            }

            // Three Paths Appirition
            if (chr.hasSkill(THREE_PATHS_APPARITION_BUFF)) {
                if (!SkillConstants.isForceAtomSkill(attackInfo.skillId) && !isThreePathsAttack(attackInfo.skillId) && !chr.hasSkillOnCooldown(THREE_PATHS_APPARITION_COOLTIMES)) {
                    if (tsm.hasStat(SageThreePathsApparition)) {
                        // Active
                        procThreePathsApparitionActive();
                    } else {
                        // Passive
                        procThreePathsApparitionPassive();
                    }

                    // Effect
                    var effect = Effect.skillSpecial(THREE_PATHS_APPARITION_PROC);
                    effect.setArg2(attackInfo.skillId);
                    chr.write(UserPacket.effect(effect));
                }
            }
        }
        if (JobConstants.isHoYoung(SkillConstants.getSkillRootFromSkill(attackInfo.skillId)) // HoYoung Skill
                && !SkillConstants.isForceAtomSkill(attackInfo.skillId)                      // Not Force Atom
                && !SkillConstants.isSummon(attackInfo.skillId)                              // Not Summon
                && !SkillConstants.isAffectedArea(attackInfo.skillId)                        // Not Affected Area
                && tsm.hasStatBySkillId(SECRET_ACTION_BUFF)) {                               // Has SecretAction buff
            tsm.removeStatsBySkill(SECRET_ACTION_BUFF);
        }
        if (isFakeSkill(attackInfo.skillId)) {
            activateSecretAction();
        }
        if (!SkillConstants.isSummon(attackInfo.skillId) && !SkillConstants.isForceAtomSkill(attackInfo.skillId)) {
            deductCharmGauge(skillID);
            deductScrollGauge(skillID);
            incScrollGauge(skillID);
        }


        Field field = chr.getField();
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (attackInfo.skillId) {
            case EARTH_BREAK_REAL:
            case EARTH_BREAK_FAKE:
                si = SkillData.getSkillInfoById(EARTH_BREAK_REAL);
                slv = chr.getSkillLevel(EARTH_BREAK_REAL);
                o1.nOption = 1;
                o1.rOption = attackInfo.skillId;
                o1.tOption = si.getValue(time, slv); // 5sec

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds(), new DebuffInfo(true));
                break;
            case MASTER_CLONE_TRANSFORMATION_MOB_DEBUFF:
                si = SkillData.getSkillInfoById(attackInfo.skillId);
                slv = chr.getSkillLevel(MASTER_CLONE_TRANSFORMATION);
                int mobsHit = attackInfo.mobAttackInfo.size();
                o1.nOption = 1;
                o1.rOption = attackInfo.skillId;
                o1.tOption = mobsHit <= 3 ? si.getValue(time, slv) : si.getValue(y, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds());
                break;
            case ANIMAL_TRANSFORMATION:
                o2.rOption = attackInfo.skillId;
                o2.tOption = si.getValue(time, slv);
                o1.nOption = si.getValue(x, slv); // -20
                o1.rOption = attackInfo.skillId;
                o1.tOption = si.getValue(time, slv);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = mai.mob;
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.addStatOptionsAndBroadcast(chr, MobStat.IndiePdr, o1);
                    if (!mob.isBoss()) {
                        o2.nOption = 2400500 + new Random().nextInt(3);
                        mts.addStatOptionsAndBroadcast(chr, MobStat.Transform, o2);
                    }
                }
                break;
            case TRANSFORM_STONE:
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = mai.mob;
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.createAndAddBurnedInfo(chr, skill);
                }
                break;
            case BOTTLE_SUCTION:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                o1.xOption = chr.getId();
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = mai.mob;
                    if (mob == null || mob.isBoss()) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    if (!mts.hasCurrentMobStat(MobStat.Suction)) {
                        mts.addStatOptionsAndBroadcast(chr, MobStat.Suction, o1);
                        createMobSuctionForceAtom(mob);
                    }
                }
                break;
            case BOTTLE_SUCTION_1:
                bottleSuctionTimer = EventManager.addEvent(() -> removeSuctionMobStat(field, attackInfo), 750, TimeUnit.MILLISECONDS);
                break;
            case ABSORBING_VORTEX:
                Summon vortex = attackInfo.summon;
                if (vortex != null) {
                    vortex.incCount(attackInfo.mobCount);
                }
                break;


            // [HoYoung] Custom Skill Change
            case STAFF_SMASH_2:
                o1.nOption = SkillChangeConstants.CUDGEL_FINAL_DAMAGE_VALUE;
                o1.rOption = STAFF_SMASH_1;
                o1.tOption = SkillChangeConstants.CUDGEL_FINAL_DAMAGE_DURATION;
                tsm.putCharacterStatValue(IndiePMdR, o1, true);
                tsm.sendSetStatPacket();
                break;
        }
        super.handleAttack(c, attackInfo);
    }

    private void removeSuctionMobStat(Field field, AttackInfo attackInfo) {
        for (Mob mob : field.getMobs()) {
            MobTemporaryStat mts = mob.getTemporaryStat();
            if (mts.hasCurrentMobStat(MobStat.Suction) && mts.getCurrentOptionsByMobStat(MobStat.Suction).xOption == chr.getId()) {
                mts.removeMobStat(MobStat.Suction);
            }
        }
    }

    private void createMobSuctionForceAtom(Mob mob) {
        ForceAtomEnum fae = ForceAtomEnum.MOB_SUCTION;
        ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 5, 30,
                0, 0, Util.getCurrentTime(), 0, 0,
                new Position());
        ForceAtom fa = new ForceAtom(true, chr.getId(), mob.getObjectId(), fae,
                true, chr.getId(), BOTTLE_SUCTION, fai, new Rect(), 0, 0,
                new Position(), 0, new Position(), 0);
        chr.createForceAtom(fa);
    }

    private void doGodsComingAttack() {
        int action = new Random().nextInt(3) + 10;
        chr.getField().broadcastPacket(Summoned.summonedAssistAttackRequest(chr.getField().getSummonByChrAndSkillId(chr, GODS_COMING), action));
        godsComingCounter = 0;
    }

    public void endGodsComing() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        tsm.removeStatsBySkill(GODS_COMING);

        o.nOption = 1;
        o.rOption = GODS_COMING_ENDING;
        o.tOption = 5;
        tsm.putCharacterStatValue(IndieNotDamaged, o, true);
        tsm.sendSetStatPacket();
    }

    public boolean isFakeSkill(int skillID) {
        return Arrays.stream(fakeSkills).anyMatch(s -> s == skillID);
    }

    public void activateSecretAction() {
        if (!chr.hasSkill(SECRET_ACTION)) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(SECRET_ACTION);
        int slv = chr.getSkillLevel(SECRET_ACTION);
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        o.nOption = si.getValue(er, slv);
        o.rOption = SECRET_ACTION_BUFF;
        o.tOption = si.getValue(time, slv);
        tsm.putCharacterStatValue(DarkSight, o);
        tsm.sendSetStatPacket();

        Effect effect = Effect.skillUse(SECRET_ACTION_BUFF, chr.getLevel(), slv, 0);
        chr.write(UserPacket.effect(effect));
        chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), effect), chr);
    }

    public void activateBreathControl() {
        if (!chr.hasSkill(BREATH_CONTROL)) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(BREATH_CONTROL);
        int slv = chr.getSkillLevel(BREATH_CONTROL);

        int hpHealed = si.getValue(x, slv);
        int mpHealed = si.getValue(y, slv);
        chr.heal(chr.getHPPerc(hpHealed));
        chr.healMP(chr.getMPPerc(mpHealed));
    }

    private void doTigerOfSongyuSpecialAttack() {
        Summon tiger = chr.getField().getSummonByChrAndSkillId(chr, MOUNTAIN_SPIRIT);
        if (tiger != null) {
            chr.write(Summoned.assistSpecialAttackRequest(tiger, 11));
        }
    }

    public void activateCloneAttack(AttackInfo attackInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!chr.hasSkill(CLONE_SEAL_BUFF) || (!tsm.hasStat(AT_Clone) && !tsm.hasStat(AT_HyperClone)) || chr.hasSkillOnCooldown(CLONE_SEAL_ATTACK) || attackInfo.mobCount == 0) {
            return;
        }
        List<Integer> targetList = new ArrayList<>();
        List<ForceAtomInfo> faiList = new ArrayList<>();

        ForceAtomEnum fae = ForceAtomEnum.CLONE_SEAL;
        CharacterTemporaryStat cts = tsm.hasStat(AT_HyperClone) ? AT_HyperClone : AT_Clone;
        int cloneAmount = tsm.getOption(cts).nOption;

        // [HoYoung] Custom Skill Change
        if (tsm.getOptByCTSAndSkill(IndiePMdR, MASTER_ELIXIR) != null) {
            cloneAmount += SkillChangeConstants.MASTER_ELIXIR_ADDED_CLONE_COUNT;
        }

        for (int i = 0; i < cloneAmount; i++) {
            ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 40, 4,
                    0, Util.getRandom(50, 950), Util.getCurrentTime(), 0, 0,
                    new Position());
            faiList.add(fai);
            targetList.add(Util.getRandomFromCollection(attackInfo.mobAttackInfo).mobId);
        }

        ForceAtom fa = new ForceAtom(false, chr.getId(), chr.getId(), fae, true,
                targetList, CLONE_SEAL_ATTACK, faiList, new Rect(), 0, 0,
                new Position(), 0, new Position(), 0);
        chr.createForceAtom(fa);
        chr.addSkillCoolTime(CLONE_SEAL_ATTACK, chr.getSkillStatValue(subTime, CLONE_SEAL_BUFF)); // 1500 ms cooltime
    }

    @Override
    public void handleKeyDownSkill(Char chr, int skillID, InPacket inPacket) {
        if (skillID == DREAM_GARDEN) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            Option o = new Option();
            o.nOption = 1;
            o.rOption = skillID;
            o.tOption = 20;
            tsm.putCharacterStatValue(IndieNotDamaged, o, true);
            tsm.sendSetStatPacket();
        }
        super.handleKeyDownSkill(chr, skillID, inPacket);
    }

    @Override
    public void handleCancelKeyDownSkill(Char chr, int skillID) {
        // Purposely call super before specific skillID, to ensure the cooltime reduction applies
        super.handleCancelKeyDownSkill(chr, skillID);

        if (skillID == DREAM_GARDEN) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            if (tsm.getOptByCTSAndSkill(IndieNotDamaged, skillID) == null) {
                return;
            }

            int remainingDuration = Math.max(0, Math.min(200, (int) tsm.getRemainingTime(IndieNotDamaged, skillID) / 1000));
            if (remainingDuration > 0) {
                chr.reduceSkillCoolTime(skillID, remainingDuration * 9_700); // 9.7 seconds reduction to CD per second remaining
            }
            tsm.removeStatsBySkill(DREAM_GARDEN);
            chr.write(UserLocal.stopKeyDownSkillRequest(skillID));
        }
    }


    @Override
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillId, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {
        super.handleSkill(chr, tsm, skillId, slv, inPacket, skillUseInfo);
        Skill skill = chr.getSkill(skillId);
        SkillInfo si = null;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skillId);
        }

        deductCharmGauge(skillId);
        deductScrollGauge(skillId);
        incScrollGauge(skillId);

        if (isFakeSkill(skillId)) {
            activateSecretAction();
        }

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Field field = chr.getField();
        switch (skillId) {
            case SHAPESHIFT:
                Quest q = chr.getQuestManager().getOrCreateQuestById(QuestConstants.HO_YOUNG_SHAPESHIFT_QUEST_ID);
                if (q.hasProperty("sw")) {
                    boolean hasEars = q.getIntProperty("sw") == 1;
                    q.setProperty("sw", hasEars ? 0 : 1);
                } else {
                    q.setProperty("sw", 0);
                }
                chr.write(WvsContext.message(MessagePacket.questRecordExMessage(q)));
                chr.showHoYoungAppearance();
                break;
            case NIMBUS_CLOUD:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                o1.setInMillis(true);
                tsm.putCharacterStatValue(NewFlying, o1);
                break;
            case FAN_ACCELERATION:
                o1.nOption = si.getValue(x, slv); // -2
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;
            case CLONE_SEAL_BUFF:
            case HYPER_CLONE_RAMPAGE_BUFF:
                o1.nOption = si.getValue(v2, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                if (skillId == HYPER_CLONE_RAMPAGE_BUFF) {
                    tsm.putCharacterStatValue(AT_HyperClone, o1);
                } else {
                    tsm.putCharacterStatValue(AT_Clone, o1);
                }
                break;
            case FIRE_PURSUIT:
                // Placing bets on a server sided Attack Requests.
                Summon summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Fly);
                summon.setAssistType(AssistType.Seeking);
                field.spawnSummonAndRemoveOld(summon);
                break;
            case TELEPORT_GATE_CLONE:
                chr.addSkillCoolTime(TELEPORT_GATE_DOOR, 5000);
            case TELEPORT_GATE_DOOR:
                var pos = inPacket.decodePosition();

                if (skillId == TELEPORT_GATE_DOOR) {
                    var sum = chr.getField().getSummonByChrAndSkillId(chr, HoYoung.TELEPORT_GATE_CLONE);
                    if (sum != null) {
                        chr.getField().removeSummon(sum);
                    }
                }

                summon = skillId == TELEPORT_GATE_DOOR ? Summon.getSummonBy(chr, skillId, slv) : Summon.getSummonByNoCTS(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setAssistType(AssistType.None);
                summon.setPosition(pos);
                field.spawnSummonAndRemoveOld(summon);
                break;
            case TELEPORT_GATE_DOOR_TO_CLONE:
                chr.addSkillCoolTime(TELEPORT_GATE_DOOR, 5000);
                break;
            case BUTTERFLY_DREAM:
                o1.nOption = si.getValue(indiePMdR, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePMdR, o1);
                o2.nOption = 1;
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(AT_ButterflyDream, o2);
                break;
            case MASTER_ELIXIR:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(AT_MasterElixir, o1);
                break;
            case MOUNTAIN_SPIRIT: /* When achieving 3 link stage,  Mountain spirit will do Roar attack */
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Stop);
                field.spawnSummonAndRemoveOld(summon);
                break;
            case GODS_COMING:
                godsComingCounter = 0;
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Walk);
                summon.setAssistType(AssistType.AttackCounter);
                field.spawnSummonAndRemoveOld(summon);

                o1.nOption = si.getValue(indieDamR, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                o2.nOption = 1;
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(AT_GodsComing, o2);
                break;
            case ABSORBING_VORTEX:
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setAssistType(AssistType.Attack);
                field.spawnSummonAndRemoveOld(summon);
                break;
            case ABSORBING_VORTEX_END:
                Summon vortex = field.getSummonByChrAndSkillId(chr, ABSORBING_VORTEX);
                if (vortex != null) {
                    tsm.removeStatsBySkill(ABSORBING_VORTEX);
                }
                break;
            case THREE_PATHS_APPARITION_BUFF:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(SageThreePathsApparition, o1);
                chr.resetSkillCoolTime(THREE_PATHS_APPARITION_COOLTIMES);
                break;
        }
        tsm.sendSetStatPacket();
    }

    private boolean isThreePathsAttack(int skillId) {
        return skillId == THREE_PATHS_APPARITION_ATTACK_1 || skillId == THREE_PATHS_APPARITION_ATTACK_2 || skillId == THREE_PATHS_APPARITION_ATTACK_3;
    }

    private void procThreePathsApparitionActive() {
        var skill = chr.getSkill(THREE_PATHS_APPARITION_BUFF);
        if (skill == null || chr.hasSkillOnCooldown(THREE_PATHS_APPARITION_COOLTIMES)) {
            return;
        }

        var slv = skill.getCurrentLevel();
        var si = SkillData.getSkillInfoById(THREE_PATHS_APPARITION_BUFF);
        var coolTimeSI = SkillData.getSkillInfoById(THREE_PATHS_APPARITION_COOLTIMES);

        var activeBulletCount = si.getValue(y, slv);

        for (int i = 0; i < activeBulletCount; i++) { // 2x
            procThreePathsApparition();
        }

        chr.addSkillCoolTime(THREE_PATHS_APPARITION_COOLTIMES, coolTimeSI.getValue(y, slv)); //  y -> active cooltime
    }

    private void procThreePathsApparitionPassive() {
        var skill = chr.getSkill(THREE_PATHS_APPARITION_BUFF);
        if (skill == null || chr.hasSkillOnCooldown(THREE_PATHS_APPARITION_COOLTIMES)) {
            return;
        }

        var slv = skill.getCurrentLevel();
        var si = SkillData.getSkillInfoById(THREE_PATHS_APPARITION_COOLTIMES);

        procThreePathsApparition(); // once

        chr.addSkillCoolTime(THREE_PATHS_APPARITION_COOLTIMES, si.getValue(x, slv)); //  x -> passive cooltime
    }

    private void procThreePathsApparition() {
        Mob mob = Util.getRandomFromCollection(chr.getField().getMobsInRect(chr.getRectAround(new Rect(-300, -300, 300, 300))));
        if (mob == null) {
            return;
        }

        var skillId = getThreePathsApparitionSkillId();
        animaThiefGauge(skillId);
        var esi = new ExtraSkillInfo(skillId, mob.getPosition(), false, Util.getRandom(50, 750), 0);
        chr.write(FieldPacket.registerExtraSkill(skillId, esi));
    }

    private int getThreePathsApparitionSkillId() {
        if (!hasUsedHumanSkill()) {
            return THREE_PATHS_APPARITION_ATTACK_3;
        }
        if (!hasUsedEarthSkill()) {
            return THREE_PATHS_APPARITION_ATTACK_2;
        }
        if (!hasUsedHeavenSkill()) {
            return THREE_PATHS_APPARITION_ATTACK_1;
        }
        return THREE_PATHS_APPARITION_ATTACK_3;
    }

    private void activateThreePathsMaxStagePassive() {
        var onCdSkills = Arrays.stream(attributeSkillsWithCooldown).filter(s -> chr.hasSkillOnCooldown(s)).boxed().collect(Collectors.toList());
        if (onCdSkills.size() > 0) {
            // random skill to reset cd of
            chr.resetSkillCoolTime(Util.getRandomFromCollection(onCdSkills));
        }
    }

    @Override
    public void handleSkillPrepareStart(Char chr, int skillId, SkillUseInfo sui) {
        if (skillId == HoYoung.GODS_COMING_ENDING) {
            endGodsComing();
        }
        super.handleSkillPrepareStart(chr, skillId, sui);
    }

    public void giveMasterElixirBenefit() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(AT_MasterElixir) || !chr.hasSkill(MASTER_ELIXIR)) {
            return;
        }

        Skill skill = chr.getSkill(MASTER_ELIXIR);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();

        int charm = si.getValue(x, slv);
        int scroll = si.getValue(y, slv);
        alterGauge(charm, scroll);
    }

    public void createButterflyDreamForceAtom() {
        if (chr.hasSkillOnCooldown(BUTTERFLY_DREAM_ATT)) {
            return;
        }
        Field field = chr.getField();
        Random random = new Random();
        ForceAtomEnum fae = ForceAtomEnum.BUTTERFLY_DREAM_1;

        List<Integer> targetList = field.getMobs().stream().filter(m -> !MobConstants.isFriendlyMob(m.getTemplateId())).map(Life::getObjectId).collect(Collectors.toList());
        List<ForceAtomInfo> faiList = new ArrayList<>();
        for (int i = 1; i < 6; i++) {
            fae.setInc(i);
            ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 42, 4,
                    random.nextInt(360), random.nextInt(100), Util.getCurrentTime(), 0, 0,
                    new Position());
            faiList.add(fai);
        }
        ForceAtom fa = new ForceAtom(false, chr.getId(), chr.getId(), fae,
                true, targetList, BUTTERFLY_DREAM_ATT, faiList, new Rect(), 0, 0,
                new Position(), 0, new Position(), 0);
        chr.createForceAtom(fa);
        chr.addSkillCoolTime(BUTTERFLY_DREAM_ATT, 1000);
    }


    // HoYoung Gauge
    public void animaThiefGauge(int skillID) {
        if (SkillConstants.isSummon(skillID) || SkillConstants.isAffectedArea(skillID) || SkillData.getSkillInfoById(skillID) == null) {
            return;
        }

        SkillElementType type = getElementBySkillId(skillID);
        if (type == SkillElementType.None) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(AT_Attributes)) {
            resetElements();
        }
        int addedCharm = 10; // default
        int curStage = getLinkStage();
        boolean consumeElement = false;
        if ((type == SkillElementType.Heaven && !hasUsedHeavenSkill())
                || (type == SkillElementType.Earth && !hasUsedEarthSkill())
                || (type == SkillElementType.Human && !hasUsedHumanSkill())) {
            consumeElement = true;
        }

        int newStage = curStage;
        if (consumeElement) {
            addedCharm = getCharmByLinkStage(newStage);
            newStage++;
        }

        if (chr.getJob() == JobConstants.JobEnum.HO_YOUNG_1.getJobId() && type == SkillElementType.Human) {
            consumeElement(type);
        }

        if (newStage >= getMaxLinkStage()) {
            resetElements();
            activateBreathControl();
            doTigerOfSongyuSpecialAttack();
            activateThreePathsMaxStagePassive();
        } else if (consumeElement) {
            consumeElement(type);
        }

        Option o = tsm.getOptByCTSAndSkill(BlessingVSkill, GRANDIS_BLESSING_ANIMA);
        if (o != null) {
            var multiplier = o.xOption;
            addedCharm += multiplier * (addedCharm / 100D);
        }

        alterGauge(addedCharm, 0);
    }

    private void consumeElement(SkillElementType type) {
        Option o = new Option();
        o.rOption = chr.getJob();
        o.nOption = hasUsedHeavenSkill() ? 1 : 0;
        o.xOption = hasUsedEarthSkill() ? 1 : 0;
        o.yOption = hasUsedHumanSkill() ? 1 : 0;
        switch (type) {
            case Heaven:
                o.nOption = 1;
                break;
            case Earth:
                o.xOption = 1;
                break;
            case Human:
                o.yOption = 1;
                break;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        tsm.putCharacterStatValue(AT_Attributes, o);
        tsm.sendSetStatPacket();
    }

    public boolean hasUsedHumanSkill() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(AT_Attributes)) {
            return false;
        }
        return tsm.getOption(AT_Attributes).yOption > 0;
    }

    public boolean hasUsedEarthSkill() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(AT_Attributes)) {
            return false;
        }
        return tsm.getOption(AT_Attributes).xOption > 0;
    }

    public boolean hasUsedHeavenSkill() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(AT_Attributes)) {
            return false;
        }
        return tsm.getOption(AT_Attributes).nOption > 0;
    }

    public void resetElements() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        o.rOption = chr.getJob();
        tsm.putCharacterStatValue(AT_Attributes, o);
        tsm.sendSetStatPacket();
    }

    public int getLinkStage() {
        int stage = 0;
        if (hasUsedHeavenSkill()) {
            stage++;
        }
        if (hasUsedEarthSkill()) {
            stage++;
        }
        if (hasUsedHumanSkill()) {
            stage++;
        }
        return stage;
    }

    public int getMaxLinkStage() {
        if (chr.getJob() == JobConstants.JobEnum.HO_YOUNG_1.getJobId()) {
            return 1;
        } else if (chr.getJob() == JobConstants.JobEnum.HO_YOUNG_2.getJobId()) {
            return 2;
        } else if (chr.getJob() == JobConstants.JobEnum.HO_YOUNG_3.getJobId()
                || chr.getJob() == JobConstants.JobEnum.HO_YOUNG_4.getJobId()) {
            return 3;
        }
        return 0;
    }

    public int getCharmByLinkStage(int linkStage) {
        SkillInfo si = SkillData.getSkillInfoById(CHARM_POWER);
        int slv = 1; // locked at lv 1.
        switch (linkStage) {
            case 0:
                return si.getValue(u, slv); // 10
            case 1:
                return si.getValue(v, slv); // 15
            case 2:
                return si.getValue(w, slv); // 20
        }
        return 0;
    }



    private void deductCharmGauge(int skillID) {
        alterGauge(-getCharmGaugeCost(skillID), 0);
    }

    private void deductScrollGauge(int skillID) {
        alterGauge(0, -getScrollGaugeCost(skillID));
    }

    private void incScrollGauge(int skillID) {
        alterGauge(0, getScrollGaugeInc(skillID));
    }

    private void alterGauge(int charmEnergy, int scrollEnergy) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(AT_Energy)) {
            resetGauge();
        }

        int curCharm = tsm.getOption(AT_Energy).nOption;
        int curScroll = tsm.getOption(AT_Energy).xOption;


        int newCharm = curCharm + charmEnergy;
        int newScroll = curScroll + scrollEnergy;
        Option o = new Option();
        o.nOption = newCharm > MAX_CHARM_POWER ? MAX_CHARM_POWER : newCharm < 0 ? 0 : newCharm;
        o.rOption = chr.getJob();
        o.xOption = newScroll > MAX_SCROLL_GAUGE ? MAX_SCROLL_GAUGE : newScroll < 0 ? 0 : newScroll;
        tsm.putCharacterStatValue(AT_Energy, o);
        tsm.sendSetStatPacket();
    }

    private void resetGauge() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        o.rOption = chr.getJob();
        tsm.putCharacterStatValue(AT_Energy, o);
        tsm.sendSetStatPacket();
    }

    public int getScrollGaugeInc(int skillID) {
        SkillInfo si = SkillData.getSkillInfoById(skillID);
        if (si == null) {
            return 0;
        }
        var inc = si.getValue(atGauge2Inc, 1);

        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = tsm.getOptByCTSAndSkill(BlessingVSkill, GRANDIS_BLESSING_ANIMA);
        if (o != null) {
            var multiplier = o.xOption;

            inc += multiplier * (inc / 100D);
        }

        if (inc == 0) {
            var element = getElementBySkillId(skillID);
            if (element != null && !element.equals(SkillElementType.None) && chr.hasSkill(SCROLL_POWER)) {
                return 15;
            }
        }

        return inc;
    }

    public int getScrollGaugeCost(int skillID) {
        SkillInfo si = SkillData.getSkillInfoById(skillID);
        if (si == null) {
            return 0;
        }
        return si.getValue(atGauge2Con, 1);
    }

    public int getCharmGaugeCost(int skillID) {
        SkillInfo si = SkillData.getSkillInfoById(skillID);
        if (si == null) {
            return 0;
        }
        return si.getValue(atGauge1Con, 1);
    }

    public SkillElementType getElementBySkillId(int skillID) {
        SkillInfo si = SkillData.getSkillInfoById(skillID);
        if (si == null) {
            return SkillElementType.None;
        }
        return SkillElementType.getByVal(si.getValue(atSkillType, 1));
    }

    public enum SkillElementType {
        None(0),
        Heaven(1),// blue orb
        Earth(2), // yellow orb
        Human(3), // purple orb
        ;

        private int val;

        SkillElementType(int val) {
            this.val = val;
        }

        public int getVal() {
            return val;
        }

        public static SkillElementType getByVal(int val) {
            return Arrays.stream(values()).filter(set -> set.getVal() == val).findFirst().orElse(null);
        }
    }

    @Override
    public void handleLevelUp() {
        super.handleLevelUp();
        int job = -1;
        switch (chr.getLevel()) {
            case 10:
                job = JobConstants.JobEnum.HO_YOUNG_1.getJobId();
                break;
            case 30:
                job = JobConstants.JobEnum.HO_YOUNG_2.getJobId();
                break;
            case 60:
                job = JobConstants.JobEnum.HO_YOUNG_3.getJobId();
                break;
            case 100:
                job = JobConstants.JobEnum.HO_YOUNG_4.getJobId();
                break;
        }
        if (job != -1) {
            chr.setJob(job);
            chr.setStatAndSendPacket(Stat.job, job);
            chr.addSpToJobByCurrentJob(5);
        }
    }

    @Override
    public void stopTimers() {
        EventManager.stopTimer(bottleSuctionTimer);
        super.stopTimers();
    }

    @Override
    public void setCharCreationStats(Char chr) {
        super.setCharCreationStats(chr);
        var secondary = ItemData.getEquipDeepCopy(1353800, false);
        chr.addItemToInventory(secondary);

        var cs = chr.getAvatarData().getCharacterStat();
        cs.setJob(JobConstants.JobEnum.HO_YOUNG_1.getJobId());
        cs.setLevel(10);
        cs.setMaxHp(466);
        cs.setHp(466);
        cs.setMaxMp(249);
        cs.setStr(4);
        cs.setDex(4);
        cs.setMp(249);
        cs.setAp(45);
        cs.setSp(5);
        byte jobLevel = (byte) JobConstants.getJobLevel(chr.getJob());
        cs.getExtendSP().setSpToJobLevel(jobLevel, 5);
    }
}
