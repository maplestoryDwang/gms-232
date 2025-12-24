package net.swordie.ms.client.jobs.flora;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.avatar.EarStyle;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.skills.GraveProclomation;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillUseSource;
import net.swordie.ms.client.character.skills.atom.secondatom.SecondAtom;
import net.swordie.ms.client.character.skills.debuff.DebuffUtil;
import net.swordie.ms.client.character.skills.info.*;
import net.swordie.ms.client.character.skills.shootobject.ShootObjectSkillInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.client.party.Party;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillChangeConstants;
import net.swordie.ms.enums.*;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;
import static net.swordie.ms.life.mob.MobStat.FinalDmgReceived;

/**
 * Created on 14/05/2020.
 *
 * @author Asura
 */
public class Adele extends Job {

    // Constants
    public static final int ETHER_CRYSTAL_COUNT = 7; // Max Ether Crystals on Field
    public static final int ETHER_SWORD_COST = 100; // 100 Ether -> 1 Sword
    public static final int ETHER_GAIN_PASSIVE_INTERVAL = 10000; // 10 seconds


    // Link Skill
    public static final int NOBLE_FIRE_ORIGIN = 150020241; // Link Skill
    public static final int NOBLE_FIRE_LINKED = 80002857; // Link Skill

    // Adele
    public static final int RECALLING_GREATNESS = 150020006;
    public static final int ARTISTIC_RECALL = 150021000;
    public static final int EXCLUSIVE_SPELL = 150021005;
    public static final int MAGIC_CONVERSION = 150020079;

    // 1st Job
    public static final int RUDIMENT = 151000005; // passive
    public static final int PLAIN = 151001000; // Attack
    public static final int SHARD = 151001001; // SecondAtom Creator Skill ( create 5 )
    public static final int LEVITATION = 151001004; // Buff (newFlying)  |  canBeLocked

    // 2nd Job
    public static final int ETHER_CRYSTAL = 151100002; // Summon (MoveAbility: Stop, AssistType: None)
    public static final int MASTERY = 151100014; // passive
    public static final int ATTRIBUTE = 151100015; // passive  |  Heal HP/MP over Time
    public static final int TRAIN = 151100016; // passive
    public static final int ETHER = 151100017; // passive gauge
    public static final int PUNTO = 151101000; // Attack  |  [Trigger Skill]
    public static final int IMPALE = 151101001; // Attack
    public static final int RESONANCE = 151101003; // Attack  |  Rushes to Ether Crystal on Map
    public static final int RESONANCE_COMBO = 151101004; // Attack  |  Rushes to Ether Crystal on Map
    public static final int BOOSTER = 151101005; // Buff (IndieBooster)
    public static final int CREATION = 151101006; // Buff  |  ON/OFF  Creates Sword Body Protection. Attacks if using [Trigger Skill] | SecondAtom
    public static final int CREATION_ATTACK_2_SWORDS = 151101007; // Bonus Skill
    public static final int CREATION_ATTACK_4_SWORDS = 151101008; // Bonus Skill
    public static final int CREATION_ATTACK_6_SWORDS = 151101009; // Bonus Skill
    public static final int RESONANCE_BUFF = 151101010; // Buff  |  5%FD, 5%IED  per stack (3 max)
    public static final int WONDER = 151101013; // Buff  |  ON/OFF  Auto-creates Shards (only for [Trigger Skills])

    // 3rd Job
    public static final int ASCENT = 151110006; // passive
    public static final int TOLERANCE = 151110007; // passive
    public static final int CROSS = 151111000; // Attack  |  [Trigger Skill]
    public static final int TERRITORY = 151111001; // Summon (MoveAbility: Stop, AssistType: Attack)
    public static final int GATHERING = 151111002; // Skill  |  Ether Swords from 'ORDER' will return hittings mob in path
    public static final int ORDER = 151111003; // Skill  |  Command Ether Swords from 'CREATION' to target enemies  |  has 'SecondAtom' node in Skill
    public static final int FEATHER = 151111004; // Skill  |  Moves chr back
    public static final int NOBILITY = 151111005; // CTS  |  Redirects some of the damage done to party members in AA to you.

    // 4th Job
    public static final int EXPERT = 151120007; // passive
    public static final int PERFECTION = 151120008; // passive
    public static final int DEMOLITION = 151120009; // passive
    public static final int ATTAIN = 151120010; // passive
    public static final int HIGH_ETHER = 151120012; // passive gauge  |  Enhancement on 'ETHER'
    public static final int DIVIDE = 151121000; // Attack  |  [Trigger Skill]
    public static final int GRAVE = 151121001; // Attack  |  Inflicts Debuff
    public static final int TREAD = 151121002; // Attack  |  InAir
    public static final int BLOSSOM = 151121003; // Skill  |  Ether Swords by 'ORDER' will spin and do damage
    public static final int AETHER_GUARD = 151121004; // Buff  |  100%AsrR
    public static final int LEF_WARRIOR = 151121005; // Buff  | MW
    public static final int LEF_HERO_WILL = 151121006; // Buff  |  100%AsrR & Clear Status
    public static final int DIKE_INVINCIBILITY = 151121011; // Buff  |  IndieNotDamage

    // Hypers
    public static final int RESONANCE_EXTRA_HEALING = 151120034; // When the Ether Crystal targeted by Resonance disappears, acquire 20 Ether. When using Impale, Ether will no longer be consumed.
    public static final int TERRITORY_PERSIST = 151120035; // #time
    public static final int ATTRIBUTE_HEALING_REINFORCE = 151120037; // #x  |  Additive to 'ATTRIBUTE'
    public static final int NOBILITY_SHIELD_REINFORCE = 151120038; // #x  |  Replacing the Shield% from 'NOBILITY'
    public static final int DIKE_PERSIST = 151120039; // #time

    public static final int SQUALL = 151121040; // Attack  |  Binds Mob  | Lv160
    public static final int MARKER = 151121041; // Skill  |  Creates/Explodes Ether Crystals (Creates up to 10 on Mob Locations)
    public static final int RACE_OF_GOD = 151121042; // Buff  |  IndieDamR

    // V skills
    public static final int RUIN = 400011105; // Attack
    public static final int INFINITE = 400011108; // Buff  |  has 'SecondAtom' node in Skill
    public static final int LEGACY_RESTORATION = 400011109; // Buff  |  30%Damage, +30%Ether Acquisition, Periodically Flap wings dealing dmg <- Wing dmg heals you and party members
    public static final int STORM = 400011136;


    public static final int[] triggerSkill = new int[] {
            PUNTO,
            CROSS,
            DIVIDE,
            TREAD,
    };

    public static final int[] etherCrystalSpawningSkill = new int[] {
            CREATION_ATTACK_2_SWORDS,
            CREATION_ATTACK_4_SWORDS,
            CREATION_ATTACK_6_SWORDS,
            ORDER,
            GATHERING,
            BLOSSOM,
            INFINITE,
    };

    private ScheduledFuture attributeTimer;
    private ScheduledFuture nobilityAuraTimer;

    public static final int[] addedSkills = new int[] {
            ARTISTIC_RECALL,
            EXCLUSIVE_SPELL,
            MAGIC_CONVERSION,
    };

    public Adele(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id)) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setCurrentLevel(skill.getMasterLevel());
                    chr.addSkill(skill);
                }
            }
            startAttribute();
        }
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isAdele(id);
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
        Field field = chr.getField();
        if (hasHitMobs) {
            if (isTriggerSkill(attackInfo.skillId)) {
                // Ether:
                // Acquire 10 Ether when a Trigger skill hits an enemy.
                if (chr.hasSkill(ETHER)) {
                    increaseEther(chr.getSkillStatValue(s, ETHER));
                }

                // Wonder:
                // When a Trigger Skill hits an enemy, consumes 25 MP to create a Shard.
                if (!chr.hasSkillOnCooldown(JobConstants.JobEnum.ADELE_1.getJobId()) &&
                        chr.hasSkill(WONDER) && tsm.hasStat(LW_Wonder) && chr.hasSkill(SHARD)) {
                    createShardSecondAtoms(chr.getPosition());
                    chr.addSkillCoolTime(JobConstants.JobEnum.ADELE_1.getJobId(), chr.getSkillStatValue(x, WONDER) * 1000);
                }

                // When a Trigger skill hits an enemy, the Ether Swords deal 150% damage on up to 10 enemies every 6 seconds.
                doCreationAttack();
                bonusConversionOverdriveAttack();
            }
            // Ether:
            // At regular intervals (checked when attacking) obtain 15 Aether
            passiveEtherGain();

            if (hasHitMobs && isSpawnEtherCrystalSkill(attackInfo.skillId) && Util.succeedProp(getEtherCrystalSpawnProp(attackInfo.skillId))) {
                MobAttackInfo mai = attackInfo.mobAttackInfo.get(0);
                spawnEtherCrystal(new Position(mai.hitX, mai.hitY));
            }
        }

        switch (attackInfo.skillId) {
            case RESONANCE:
            case RESONANCE_COMBO:
                if (hasHitMobs) {
                    giveResonanceBuff();
                }
                break;
            case GRAVE:
                if (hasHitMobs) {
                    Mob mob = attackInfo.mobAttackInfo.get(0).mob;
                    if (mob != null) {
                        if (tsm.hasStat(Grave)) {
                            tsm.removeStat(Grave);
                        }
                        GraveProclomation gp = (GraveProclomation) tsm.getTSBByTSIndex(TSIndex.Grave);

                        gp.setNOption(1);
                        gp.setROption(skillID);
                        gp.setTargetObjId(mob.getObjectId());
                        gp.setDynamicTermSet(false);

                        tsm.putCharacterStatValue(Grave, gp.getOption());
                        tsm.sendSetStatPacket();
                    }
                }
                break;
            case SQUALL:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds());
                break;
            case GATHERING:
                increaseEther(si.getValue(y, slv));

                o1.nOption = -si.getValue(x, slv);
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                DebuffUtil.applyDebuffOnMobs(chr, MobStat.PDR, o1, attackInfo.getMobIds());
                DebuffUtil.applyDebuffOnMobs(chr, MobStat.MDR, o1, attackInfo.getMobIds());
                break;
            case LEGACY_RESTORATION:
                Effect effect = Effect.skillSpecialAffected(skillID, slv);
                chr.write(UserPacket.effect(effect));
                field.broadcastPacket(UserRemote.effect(chr.getId(), effect));

                var healed = si.getValue(t, slv);
                Party party = chr.getParty();
                if (party == null) {
                    chr.heal(chr.getHPPerc(healed));
                } else {
                    for (Char pChr : party.getPartyMembersInField(chr)) {
                        pChr.heal(pChr.getHPPerc(healed));
                    }
                }
                break;
        }
        super.handleAttack(c, attackInfo);
    }

    @Override
    public void handleShootObj(Char chr, ShootObjectSkillInfo sosi) {
        var skillId = sosi.getSkillId();
        switch (skillId) {
            case IMPALE:
                applyEtherCon(skillId);
                break;
        }
        super.handleShootObj(chr, sosi);
    }

    public boolean isTriggerSkill(int skillId) {
        return Arrays.stream(triggerSkill).anyMatch(s -> s == skillId);
    }

    public boolean isSpawnEtherCrystalSkill(int skillId) {
        return Arrays.stream(etherCrystalSpawningSkill).anyMatch(s -> s == skillId);
    }

    // Grave Proclamation
    public int getGraveTarget() {
        Mob mob = chr.getField().getMobs().stream()
                .filter(m -> m.getTemporaryStat().hasCurrentMobStat(FinalDmgReceived) && m.getTemporaryStat().getCurrentOptionsByMobStat(FinalDmgReceived).chr == chr)
                .findFirst()
                .orElse(null);
        return mob != null ? mob.getObjectId() : 0;
    }


    // Creation Attack
    public void doCreationAttack() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!chr.hasSkill(CREATION) || !tsm.hasStat(LW_Creation) || chr.hasSkillOnCooldown(JobConstants.JobEnum.ADELE_2.getJobId())) {
            return;
        }

        Field field = chr.getField();
        var swords = Math.min(3, getEtherSwords());
        if (swords > 0) {
            for (int i = 1; i <= 6; i++) {
                field.broadcastPacket(SecondAtomPool.secondAtomAttack(chr, i, i == 1 ? swords : 0));
            }
        }
        chr.addSkillCoolTime(JobConstants.JobEnum.ADELE_2.getJobId(), getCreationAttackCooldown());
    }

    public int getCreationAttackCooldown() {
        if (JobConstants.JobEnum.ADELE_3.getJobId() == chr.getJob()) {
            return 9000;
        } else if (JobConstants.JobEnum.ADELE_4.getJobId() == chr.getJob()) {
            return 6000;
        }
        return 12000;
    }

    // Resonance Buff
    public void giveResonanceBuff() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        Option o1 = new Option();
        SkillInfo si = SkillData.getSkillInfoById(RESONANCE_BUFF);
        var slv = chr.getSkillLevel(RESONANCE);

        var max = si.getValue(x, slv);
        var iedPerStack = si.getValue(y, slv);

        CharacterTemporaryStat resonanceCTS = LW_Resonance;
        var stack = 1;
        if (tsm.hasStat(resonanceCTS)) {
            stack = tsm.getOption(resonanceCTS).nOption; // check
            if (stack < max) {
                stack++;
            }
        }

        o.nOption = stack;
        o.rOption = RESONANCE_BUFF;
        o.tOption = si.getValue(time, slv);
        tsm.putCharacterStatValue(resonanceCTS, o); // Gives FD  |  5 per nOpt

        o1.nOption = iedPerStack * stack;
        o1.rOption = RESONANCE_BUFF;
        o1.tOption = si.getValue(time, slv);
        tsm.putCharacterStatValue(IndieIgnoreMobpdpR, o1);

        tsm.sendSetStatPacket();
    }



    // Ether Crystal
    public int getEtherCrystalsOnFieldCount() {
        return (int) chr.getField().getSummons().stream().filter(s -> s.getChr() == chr && s.getSkillID() == ETHER_CRYSTAL).count();
    }

    public void removeEarliestEtherCrystal() {
        Summon crystal = new ArrayList<>(chr.getField().getSummons()).stream().filter(s -> s.getChr() == chr && s.getSkillID() == ETHER_CRYSTAL).min(Comparator.comparingInt(Life::getObjectId)).orElse(null);
        if (crystal == null) {
            return;
        }
        chr.getField().removeSummon(crystal);
    }

    public void removeNearbyEtherCrystal(Position position) {
        Rect rect = position.getRectAround(SkillData.getSkillInfoById(ETHER_CRYSTAL).getFirstRect());
        Summon crystal = chr.getField().getSummonByChrAndSkillIdInRect(chr, ETHER_CRYSTAL, rect);
        if (crystal != null) {
            chr.getField().removeSummon(crystal);
        }
    }

    public boolean canSpawnEtherCrystal() {
        return getEtherCrystalsOnFieldCount() < ETHER_CRYSTAL_COUNT;
    }

    public void spawnEtherCrystal(Position position) {
        spawnEtherCrystal(position, false);
    }

    public void spawnEtherCrystal(Position position, boolean byShardBreaker) {
        if (chr.hasSkillOnCooldown(ETHER_CRYSTAL) || (!chr.hasSkill(ETHER_CRYSTAL) && !byShardBreaker)) {
            return;
        }

        removeNearbyEtherCrystal(position);

        // If
        if (!canSpawnEtherCrystal()) {
            removeEarliestEtherCrystal();
        }

        Field field = chr.getField();
        Summon crystal = Summon.getSummonByNoCTS(chr, ETHER_CRYSTAL, 1);
        crystal.setMoveAbility(MoveAbility.Stop);
        crystal.setAssistType(AssistType.None);
        crystal.setCurFoothold((short) 0);
        crystal.setPosition(position);

        field.spawnSummonAndRemoveOld(crystal);
        if (!byShardBreaker) {
            chr.addSkillCoolTime(ETHER_CRYSTAL, 4000);
        }
    }

    public int getEtherCrystalSpawnProp(int skillId) {
        SkillInfo si = SkillData.getSkillInfoById(skillId);
        var slv = 1;
        switch (skillId) {
            case CREATION_ATTACK_2_SWORDS:
            case CREATION_ATTACK_4_SWORDS:
            case CREATION_ATTACK_6_SWORDS:
                si = SkillData.getSkillInfoById(CREATION);
                return si.getValue(q, slv);

            case GATHERING:
                return si.getValue(s, slv);

            case ORDER:
            case BLOSSOM:
            case INFINITE:
                return si.getValue(prop, slv);
        }
        return 0;
    }



    // Ether
    public void updateEther(int ether) {
        var etherSkill = getEtherSkill();
        if (etherSkill == 0) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();

        var oldEther = getEther();
        ether = Math.max(0, Math.min(ether, getMaxEther()));

        // TODO
        o.nOption = ether;
        o.rOption = etherSkill;
        tsm.putCharacterStatValue(LW_Ether, o);
        tsm.sendSetStatPacket();

        if (tsm.hasStat(LW_Creation)) {
            updateCreation(oldEther, ether);
        }
    }

    public int getEther() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(LW_Ether)) {
            return 0;
        }
        return tsm.getOption(LW_Ether).nOption;
    }

    public int getEtherSwords() {
        return getEther() / ETHER_SWORD_COST;
    }

    public void increaseEther(int incEther) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(LW_Restore)) {
            incEther += (incEther / 100D) * tsm.getOption(LW_Restore).xOption;
        }
        updateEther(getEther() + incEther);
    }

    public void decreaseEther(int decEther) {
        updateEther(getEther() - decEther);
    }

    public void applyEtherCon(int skillId) {
        var con = getEtherCon(skillId);
        if (con > 0) {
            decreaseEther(getEtherCon(skillId));
        }
    }

    public void passiveEtherGain() {
        // At regular intervals (checked when attacking) obtain 15 Aether
        if (chr.hasSkillOnCooldown(ETHER)) {
            return;
        }
        increaseEther(15);
        chr.addSkillCoolTime(ETHER, ETHER_GAIN_PASSIVE_INTERVAL);
    }

    public int getEtherSkill() {
        if (chr.hasSkill(HIGH_ETHER)) {
            return HIGH_ETHER;
        } else if (chr.hasSkill(ETHER)) {
            return ETHER;
        } else {
            return 0;
        }
    }

    public int getMaxEther() {
        if (chr.hasSkill(HIGH_ETHER)) {
            return 400;
        }
        if (chr.hasSkill(ETHER)) {
            return 300;
        }
        return 0;
    }

    public int getEtherCon(int skillId) {
        SkillInfo si = SkillData.getSkillInfoById(skillId);
        if (si == null) {
            return 0;
        }
        var slv = chr.getSkillLevel(skillId);
        if (slv <= 0) {
            return 0;
        }
        switch (skillId) {
            case IMPALE:
                if (chr.hasSkill(RESONANCE_EXTRA_HEALING)) { // Does not consume aether when using Impale
                    return 0;
                }
                return si.getValue(y, slv);
            case FEATHER:
                return si.getValue(y, slv);
        }
        return 0;
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
        Field field = chr.getField();
        applyEtherCon(skillId);
        switch (skillId) {
            case ETHER_CRYSTAL:
                Position pos = inPacket.decodePosition();
                spawnEtherCrystal(pos);
                break;
            case RESONANCE:
                var crystalObjId = inPacket.decodeInt();
                Life life = field.getLifeByObjectID(crystalObjId);
                if (life instanceof Summon) {
                    field.removeSummon((Summon) life);
                }
                if (chr.hasSkill(RESONANCE_EXTRA_HEALING)) {
                    increaseEther(chr.getSkillStatValue(x, RESONANCE_EXTRA_HEALING));
                }
                break;
            case SHARD: // Utilises new 'SecondAtom'
                createShardSecondAtoms(chr.getPosition());
                break;
            case LEVITATION:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                o1.setInMillis(true);
                tsm.putCharacterStatValue(NewFlying, o1);
                break;
            case BOOSTER:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;
            case WONDER: // OF/OFF
                if (tsm.hasStatBySkillId(skillId)) {
                    tsm.removeStatsBySkill(skillId);
                } else {
                    o1.nOption = 1;
                    o1.rOption = skillId;
                    tsm.putCharacterStatValue(LW_Wonder, o1);
                }
                break;
            case CREATION:
                if (tsm.hasStatBySkillId(skillId)) {
                    tsm.removeStatsBySkill(skillId);
                } else {
                    var swords = Math.min(3, getEtherSwords());
                    o1.nOption = 1;
                    o1.rOption = skillId;
                    tsm.putCharacterStatValue(LW_Creation, o1);
                    createCreation(swords * 2);
                }
                break;
            case LEF_HERO_WILL:
                chr.getTemporaryStatManager().removeAllDebuffs();
                break;
            case TERRITORY:
                Position position = inPacket.decodePosition();

                Summon territory = Summon.getSummonByNoCTS(chr, skillId, slv);
                territory.setSummonTerm((si.getValue(time, slv) + chr.getSkillStatValue(time, TERRITORY_PERSIST)));
                territory.setPosition(position);
                territory.setMoveAbility(MoveAbility.Stop);
                territory.setCurFoothold((short) field.findFootHoldBelow(position).getId());

                field.spawnSummonAndRemoveOld(territory);
                break;
            case RACE_OF_GOD:
                o1.nOption = si.getValue(indieDamR, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                break;
            case INFINITE:
                o1.nOption = 0;
                o1.rOption = skillId + 100; // oof
                o1.tOption = si.getValue(y, slv);
                tsm.putCharacterStatValue(EVA, o1);
                o2.nOption = 1;
                o2.rOption = skillId;
                o2.tOption = 2;
                tsm.putCharacterStatValue(IndieNotDamaged, o2, true);

                createInfiniteEtherSwordSecondAtoms(slv);
                break;
            case LEGACY_RESTORATION:
                o1.nOption = 1;
                o1.xOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(LW_Restore, o1);
                o2.nOption = si.getValue(y, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o2);
                break;
            case NOBILITY:
                o1.nOption = slv;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                o1.xOption = chr.getId();
                o1.yOption = si.getValue(y, slv) + chr.getSkillStatValue(x, NOBILITY_SHIELD_REINFORCE);
                o1.chr = chr;
                tsm.putCharacterStatValue(LW_Nobility, o1);
                EventManager.stopTimer(nobilityAuraTimer);
                var interval = 500;
                var executes = o1.tOption / interval;
                nobilityAuraTimer = EventManager.addFixedRateEvent(this::doNobility, 0, interval, executes);
                break;
            case ORDER:
                var size = inPacket.decodeByte();
                var targetObjId = 0;
                for (int i = 0; i < size; i++) {
                    targetObjId = inPacket.decodeInt();
                }
                inPacket.decodeArr(3);
                position = inPacket.decodePositionInt();
                var oldEther = getEther();
                createEtherSwordSecondAtoms(targetObjId, position);
                updateCreation(oldEther, getEther());
                break;
            case MARKER:
                chr.write(UserLocal.userBonusAttackRequest(skillId));
                var i = 0;
                var capCrystal = si.getValue(q, slv);
                for (Position shardPos : skillUseInfo.positions) {
                    var mobId = skillUseInfo.mobIds.get(i);
                    Mob mob = (Mob) field.getLifeByObjectID(mobId);
                    if (mob == null) {
                        continue;
                    }
                    field.broadcastPacket(MobPool.specialEffectBySkill(mob, skillId, slv, (short) 0));
                    if (i < capCrystal) {
                        spawnEtherCrystal(shardPos, true);
                    }
                    i++;
                }
                break;
            case FEATHER:
                applyEtherCon(skillId);
                break;
            case STORM:
                o1.nOption = getActiveEtherSwordsCount();
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(DevilishPower, o1);
                break;
        }
        tsm.sendSetStatPacket();
    }

    private void doNobility() {
        var tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(LW_Nobility)) {
            EventManager.stopTimer(nobilityAuraTimer);
            return;
        }

        var party = chr.getParty();
        if (party == null) {
            return;
        }

        var slv = chr.getSkillLevel(NOBILITY);
        var rect = chr.getRectAround(SkillData.getSkillInfoById(NOBILITY).getFirstRect());
        var chrList = party.getPartyMembersInField(chr).stream()
                .filter(pChr -> pChr != chr
                        && (!pChr.getTemporaryStatManager().hasStat(LW_Nobility) || pChr.getTemporaryStatManager().getOption(LW_Nobility).chr == chr))
                .collect(Collectors.toList());

        for (var pChr : chrList) {
            var pTsm = pChr.getTemporaryStatManager();
            if (rect.hasPositionInside(pChr.getPosition())) {
                var opt = new Option(slv, NOBILITY, 0);
                opt.chr = chr;
                opt.xOption = chr.getId();
                opt.yOption = tsm.getOption(LW_Nobility).yOption;
                pTsm.putCharacterStatValue(LW_Nobility, opt);
                pTsm.sendSetStatPacket();
            } else {
                pTsm.removeStatsBySkill(NOBILITY);
            }
        }
    }

    @Override
    public int alterCooldownSkill(int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        if (skillId == ETHER_CRYSTAL) {
            return 0;
        }
        return super.alterCooldownSkill(skillId, slv, attackInfo, sui, source);
    }

    public void createCreation(int swords) {
        int chrId = chr.getId();
        Position position = chr.getPosition();
        List<SecondAtom> secondAtomList = new ArrayList<>();
        for (int i = 1; i <= swords; i++) {
            SecondAtom sa = new SecondAtom(i, i, 0, chrId, 0,
                    CREATION, 100, 100, 0, 0, 0, 1,
                    position, new ArrayList<>());
            secondAtomList.add(sa);
        }
        if (secondAtomList.size() > 0) {
            chr.spawnSecondAtoms(secondAtomList);
        }
    }

    public void updateCreation(int oldEther, int newEther) {
        if ((oldEther / 100) == (newEther / 100) || oldEther == newEther) {
            return;
        }

        var chrId = chr.getId();

        boolean create = oldEther < newEther;
        List<Integer> changedList = new ArrayList<>();

        // Create
        if (oldEther < 100 && newEther >= 100) { // Create 1, 2
            changedList.add(1);
            changedList.add(2);
        } else if (oldEther < 200 && newEther >= 200) { // Create 3, 4
            changedList.add(3);
            changedList.add(4);
        } else if (oldEther < 300 && newEther >= 300) { // Create 5, 6
            changedList.add(5);
            changedList.add(6);
        }

        // Remove
        if (oldEther >= 100 && newEther < 100) { // Remove 1, 2
            changedList.add(1);
            changedList.add(2);
        } else if (oldEther >= 200 && newEther < 200) { // Remove 3, 4
            changedList.add(3);
            changedList.add(4);
        } else if (oldEther >= 300 && newEther < 300) { // Remove 5, 6
            changedList.add(5);
            changedList.add(6);
        }


        if (changedList.size() > 0) {
            if (!create) {
                chr.removeSecondAtom(changedList);
            } else {
                List<SecondAtom> secondAtomList = new ArrayList<>();
                Position position = chr.getPosition();
                for (int i : changedList) {
                    secondAtomList.add(new SecondAtom(i, i, 0, chrId,
                            CREATION, 0, 0, 0, 0, 0, 0, 1,
                            position, new ArrayList<>()));
                }
                chr.spawnSecondAtoms(secondAtomList);
            }
        }
    }

    public void removeCreationSwords() {
        chr.removeSecondAtom(Arrays.asList(1, 2, 3, 4, 5, 6));
    }

    public void createInfiniteEtherSwordSecondAtoms(int slv) {
        var chrId = chr.getId();
        List<SecondAtom> secondAtomList = new ArrayList<>();
        SkillInfo si = SkillData.getSkillInfoById(INFINITE);
        var swordsCreated = si.getValue(bulletCount, slv);
        SecondAtomInfo sai = si.getSecondAtomInfos().get(0);
        var dataIndex = sai.getDataIndex();
        var createDelay = sai.getCreateDelay();
        var enableDelay = sai.getEnableDelay();
        var rotate = sai.getRotate();
        var expire = sai.getExpire();
        var attackableCount = sai.getAttackableCount();
        for (int i = 0; i< swordsCreated; i++) {
            SecondAtom sa = new SecondAtom(chr.getNewSecondAtomKey(), dataIndex, 1, chrId, getGraveTarget(),
                    INFINITE, createDelay, enableDelay, rotate, expire, 0, attackableCount, new Position(), new ArrayList<>());
            secondAtomList.add(sa);
        }
        chr.spawnSecondAtoms(secondAtomList, true);
    }

    public void createEtherSwordSecondAtoms(int target, Position position) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!chr.hasSkill(CREATION) || !chr.hasSkill(ORDER) || !tsm.hasStat(LW_Creation)) {
            return;
        }
        var chrId = chr.getId();
        List<SecondAtom> secondAtomList = new ArrayList<>();
        SkillInfo si = SkillData.getSkillInfoById(ORDER);
        var index = Math.min(3, getEtherSwords()) - 1;
        if (index == -1) {
            return;
        }
        for (SecondAtomInfo sai : si.getSecondAtomInfos()) {
            var dataIndex = sai.getDataIndex();
            var createDelay = sai.getCreateDelay();
            var enableDelay = sai.getEnableDelay();
            var rotate = sai.getRotate();
            var expire = sai.getExpire();
            if (SkillChangeConstants.HUNTING_DECREE_AFFECTED_BY_BUFF_DURATION) {
                long buffTimeR = chr.getTotalStat(BaseStat.buffTimeR); // includes the 100% base;
                expire = Math.min(SkillChangeConstants.HUNTING_DECREE_DURATION_CAP, (int) ((sai.getExpire() * buffTimeR) / 100D));
            }
            var attackableCount = sai.getAttackableCount();
            List<Integer> customList = sai.getCustomList();
            var customRotation = customList.get(index);
            var posOffset = sai.getExtraPosList().get(index);
            SecondAtom sa = new SecondAtom(chr.getNewSecondAtomKey(), dataIndex, 1, chrId, getGraveTarget() == 0 ? target : getGraveTarget(),
                    ORDER, createDelay, enableDelay, rotate, expire, customRotation, attackableCount, position.add(posOffset), customList);
            secondAtomList.add(sa);

        }
        chr.spawnSecondAtoms(secondAtomList);
        decreaseEther(ETHER_SWORD_COST);
    }

    // Shard
    public void createShardSecondAtoms(Position position) {
        if (!chr.hasSkill(SHARD)) {
            return;
        }

        SkillInfo si = SkillData.getSkillInfoById(SHARD);

        var chrId = chr.getId();
        List<SecondAtom> secondAtomList = new ArrayList<>();
        for (SecondAtomInfo sai : si.getSecondAtomInfos()) {
            var dataIndex = sai.getDataIndex();
            var createDelay = sai.getCreateDelay();
            var enableDelay = sai.getEnableDelay();
            var rotate = sai.getRotate();
            var expire = sai.getExpire();
            var attackableCount = sai.getAttackableCount();
            var customList = sai.getCustomList();
            Position pos = position.add(sai.getPosition());
            SecondAtom sa = new SecondAtom(chr.getNewSecondAtomKey(), dataIndex, 0, chrId, 0,
                    SHARD, createDelay, enableDelay, rotate, expire, 0, attackableCount, pos, customList);
            secondAtomList.add(sa);
        }

        chr.spawnSecondAtoms(secondAtomList);
    }

    public int getActiveEtherSwordsCount() {
        return (int) chr.getSecondAtoms().values().stream().filter(sa -> sa.getSource() == ORDER).count();
    }

    private void startAttribute() {
        if (!chr.hasSkill(ATTRIBUTE)) {
            return;
        }
        Skill skill = chr.getSkill(ATTRIBUTE);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        var slv = chr.getSkillLevel(skill.getSkillId());
        int interval = si.getValue(y, slv);
        EventManager.stopTimer(attributeTimer);
        if (interval > 0) {
            attributeTimer = EventManager.addFixedRateEvent(this::doAttributeHeal, interval, interval, TimeUnit.MILLISECONDS);
        }
    }

    private void doAttributeHeal() {
        var skillId = ATTRIBUTE;
        if (!chr.hasSkill(skillId)) {
            EventManager.stopTimer(attributeTimer);
        } else {
            SkillInfo si = SkillData.getSkillInfoById(skillId);
            var slv = chr.getSkillLevel(skillId);
            var hpR = si.getValue(x, slv) + chr.getSkillStatValue(x, ATTRIBUTE_HEALING_REINFORCE);
            chr.heal(chr.getHPPerc(hpR));
            chr.healMP(chr.getMPPerc(hpR));
        }
    }

    @Override
    public void handleSkillPrepareStart(Char chr, int skillId, SkillUseInfo sui) {
        if (skillId == RUIN) {
            chr.setSkillCooldown(skillId, sui.slv);
        }
        super.handleSkillPrepareStart(chr, skillId, sui);
    }

    @Override
    public void stopTimers() {
        EventManager.stopTimer(attributeTimer);
        EventManager.stopTimer(nobilityAuraTimer);

        super.stopTimers();
    }

    @Override
    public void handleKeyDownSkill(Char chr, int skillID, InPacket inPacket) {
        if (skillID == AETHER_GUARD) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            SkillInfo si = SkillData.getSkillInfoById(skillID);
            int slv = chr.getSkillLevel(skillID);
            Option o1 = new Option();
            Option o2 = new Option();
            Option o3 = new Option();
            Option o4 = new Option();
            Option o5 = new Option();
            Option o6 = new Option();

            var tOpt = si.getValue(q, slv);

            o1.nOption = 1;
            o1.rOption = skillID;
            o1.tOption = tOpt;
            tsm.putCharacterStatValue(IndieNoKnockBack, o1, true);

            o2.nOption = -40;
            o2.rOption = skillID;
            o2.tOption = tOpt;
            tsm.putCharacterStatValue(IndieHitDamageInclHPR, o2, true);

            o3.nOption = 1;
            o3.rOption = skillID;
            o3.tOption = tOpt;
            tsm.putCharacterStatValue(IndieFloating, o3, true);

            o4.nOption = 1;
            o4.rOption = skillID;
            o4.tOption = tOpt;
            o4.bOption = 0;
            o4.xOption = tOpt;
            tsm.putCharacterStatValue(AntiMagicShell, o4, true);

            o5.nOption = 1;
            o5.rOption = skillID;
            o5.tOption = tOpt;
            tsm.putCharacterStatValue(AT_DreamShangriLa, o5, true);

            o6.nOption = 1;
            o6.rOption = skillID;
            o6.tOption = tOpt;
            tsm.putCharacterStatValue(LW_Dike, o6, true);

            tsm.sendSetStatPacket();
        }
        super.handleKeyDownSkill(chr, skillID, inPacket);
    }

    @Override
    public void handleCancelKeyDownSkill(Char chr, int skillID) {
        if (skillID == AETHER_GUARD) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            if (tsm.hasStatBySkillId(skillID)) {
                var si = SkillData.getSkillInfoById(skillID);
                var slv = chr.getSkillLevel(skillID);
                var secondsRemaining = tsm.getRemainingTime(IndieDamReduceR, skillID) / 1000;
                var multi = si.getValueD(t, slv);
                var reduction = (int) (multi * secondsRemaining);

                tsm.removeStatsBySkill(skillID);
                tsm.removeStatsBySkill(DIKE_INVINCIBILITY);

                chr.addSkillCoolTime(skillID, (si.getValue(cooltime, slv) - reduction) * 1000);
            }
            return; // no call to super as we have to set Skill Cooldown ourselves
        }
        super.handleCancelKeyDownSkill(chr, skillID);
    }


    @Override
    public void handleRemoveCTS(CharacterTemporaryStat cts, Option option) {
        if (cts.equals(LW_Nobility)) {
            EventManager.stopTimer(nobilityAuraTimer);
            if (chr.getParty() != null) {
                var chrList = chr.getParty().getPartyMembersInField(chr);
                for (var fChr : chrList) {
                    if (fChr == chr) {
                        continue;
                    }

                    fChr.getTemporaryStatManager().removeStatsBySkill(NOBILITY);
                }
            }
        }
        if (cts.equals(LW_Creation)) {
            removeCreationSwords();
        }
        if (cts.equals(EVA) && option.rOption == INFINITE + 100) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            Option o = new Option();
            o.nOption = 1;
            o.rOption = INFINITE;
            o.tOption = 3;
            tsm.putCharacterStatValue(IndieNotDamaged, o, true);
            tsm.sendSetStatPacket();
        }
        super.handleRemoveCTS(cts, option);
    }

    @Override
    public void handleHit(Client c, InPacket inPacket, HitInfo hitInfo) {
        var tsm = chr.getTemporaryStatManager();
        if (tsm.hasStatBySkillId(AETHER_GUARD)) {
            var remainingTime = tsm.getRemainingTime(IndieHitDamageInclHPR, AETHER_GUARD);
            if (remainingTime >= 7000) {
                var si = SkillData.getSkillInfoById(AETHER_GUARD);
                var slv = chr.getSkillLevel(AETHER_GUARD);
                var o = new Option();

                o.nOption = 1;
                o.rOption = DIKE_INVINCIBILITY;
                o.tOption = si.getValue(z, slv) + chr.getSkillStatValue(time, DIKE_PERSIST);
                tsm.putCharacterStatValue(IndieNotDamaged, o, true);
                tsm.sendSetStatPacket();

                var eff = Effect.skillSpecial(si.getSkillId());
                chr.write(UserPacket.effect(eff));
                chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), eff), chr);
            }
        }


        super.handleHit(c, inPacket, hitInfo);
    }

    @Override
    public void updateTimerSkill() {
        EventManager.stopTimer(attributeTimer);
        startAttribute();
        super.updateTimerSkill();
    }

    @Override
    public void onLeaveParty() {
        if (chr.getParty() != null) {
            var chrList = chr.getParty().getPartyMembersInField(chr);
            for (var fChr : chrList) {
                if (fChr == chr) {
                    continue;
                }

                fChr.getTemporaryStatManager().removeStatsBySkill(NOBILITY);
            }
        }

        super.onLeaveParty();
    }

    @Override
    public void onWarp(Field oldField, Field newField) {
        List<SecondAtom> saList = new ArrayList<>(chr.getSecondAtoms().values());
        if (saList.size() > 0) {
            saList.forEach(SecondAtom::updateRemainingTime);
            chr.getField().broadcastPacket(SecondAtomPool.createMultipleSecondAtoms(chr, saList));
        }

        if (chr.getParty() != null) {
            var chrList = chr.getParty().getPartyMembersInField(chr);
            for (var fChr : chrList) {
                if (fChr == chr) {
                    continue;
                }

                fChr.getTemporaryStatManager().removeStatsBySkill(NOBILITY);
            }
        }

        super.onWarp(oldField, newField);
    }

    @Override
    public void setCharCreationStats(Char chr) {
        super.setCharCreationStats(chr);
        CharacterStat cs = chr.getAvatarData().getCharacterStat();
        cs.setPosMap(410000300);
        cs.setLevel(10);
        chr.setJob(JobConstants.JobEnum.ADELE_1.getJobId());
        chr.addSpToJobByCurrentJob(5);
        cs.setStr(5);
        cs.setDex(5);
        cs.setInt(5);
        cs.setLuk(5);
        cs.setAp(4 + cs.getLevel() * 5);
        cs.setHp(450);
        cs.setMaxHp(450);
        cs.setMp(300);
        cs.setMaxMp(300);
        Item item = ItemData.getItemDeepCopy(1354000);
        chr.addItemToInventory(item);
        chr.addSkill(LEVITATION, 0, 1);

        chr.getAvatarData().getAvatarLook().setEarStyle(EarStyle.Flora);
    }

    @Override
    public void handleLevelUp() {
        super.handleLevelUp();
        var level = chr.getLevel();
        if (level == 10) {
            chr.setJob(JobConstants.JobEnum.ADELE_1.getJobId());
            chr.addSpToJobByCurrentJob(5);
            chr.addStatAndSendPacket(Stat.ap, 5);
        } else if (level == 30) {
            chr.setJob(JobConstants.JobEnum.ADELE_2.getJobId());
            chr.addSpToJobByCurrentJob(5);
            chr.addStatAndSendPacket(Stat.ap, 4);
        } else if (level == 60) {
            chr.setJob(JobConstants.JobEnum.ADELE_3.getJobId());
            chr.addSpToJobByCurrentJob(5);
            chr.addStatAndSendPacket(Stat.ap, 5);
        } else if (level == 100) {
            chr.setJob(JobConstants.JobEnum.ADELE_4.getJobId());
            chr.addSpToJobByCurrentJob(5);
            chr.addStatAndSendPacket(Stat.ap, 5);
        } else if (level == 200) {
            chr.addSkill(RECALLING_GREATNESS, 10, 10);
        }

    }

}
