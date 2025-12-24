package net.swordie.ms.client.jobs.nova;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.items.BodyPart;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.debuff.DebuffInfo;
import net.swordie.ms.client.character.skills.debuff.DebuffUtil;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.MobAttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.shootobject.ShootObjectSkillInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.Effect;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.connection.packet.UserRemote;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillChangeConstants;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.enums.Stat;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;

import java.util.Arrays;
import java.util.Map;
import java.util.concurrent.ScheduledFuture;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * @author Sjonnie
 * Created on 6/25/2018.
 */
public class Cadena extends Job {

    public static final int HAGGLE = 60020216;
    public static final int BACK_TO_HQ = 60021217;
    public static final int CHAIN_ARTS_TRASH = 60021278;
    public static final int CHAIN_ARTS_TRASH_2 = 60021279;

    public static final int SUMMON_SCIMITAR = 64001002;
    public static final int SUMMON_SCIMITAR_AIR = 64001013;
    public static final int CHAIN_ARTS_PURSUIT_HORIZONTAL = 64001009;
    public static final int CHAIN_ARTS_PURSUIT_HORIZONTAL_START = 64001000;
    public static final int CHAIN_ARTS_PURSUIT_UP = 64001010;
    public static final int CHAIN_ARTS_PURSUIT_UP_START = 64001007;
    public static final int CHAIN_ARTS_PURSUIT_DOWN = 64001011;
    public static final int CHAIN_ARTS_PURSUIT_DOWN_START = 64001008;
    public static final int CHAIN_ARTS_PURSUIT_PULL = 64001012;

    public static final int WEAPON_BOOSTER_CADENA = 64101003;
    public static final int SUMMON_SHURIKEN = 64101002;
    public static final int SUMMON_SHURIKEN_EXPLOSION = 64101008;
    public static final int SUMMON_CLAW = 64101001;

    public static final int SUMMON_DAGGERS = 64111003;
    public static final int SUMMON_SHOTGUN = 64111002;
    public static final int SUMMON_DECOY_BOMB = 64111004;
    public static final int SUMMON_DECOY_BOMB_ATTACK = 64111012;

    public static final int CHEAP_SHOT_II = 64120007;
    public static final int NOVA_WARRIOR_CADENA = 64121004;
    public static final int NOVA_TEMPERANCE = 64121005;
    public static final int CHAIN_ART_BEATDOWN = 64121001;
    public static final int CHAIN_ART_BEATDOWN_1 = 64121012;
    public static final int CHAIN_ART_BEATDOWN_2 = 64121013;
    public static final int CHAIN_ART_BEATDOWN_3 = 64121014;
    public static final int CHAIN_ART_BEATDOWN_4 = 64121015;
    public static final int SUMMON_BRICK = 64121021;
    public static final int SUMMON_BRICK_ATTACK = 64121023;
    public static final int SUMMON_BRICK_UP = 64121024;
    public static final int SUMMON_SPIKED_BAT_1 = 64121003;
    public static final int SUMMON_SPIKED_BAT_2 = 64121016;
    public static final int SUMMON_SPIKED_BAT_3 = 64121011;

    public static final int CHAIN_ARTS_TRASH_LINKED_ATTACK_REINFORCE = 64120046;
    public static final int SHADOW_DEALER_ELIXIR = 64121054;
    public static final int VETERAN_SHADOWDEALER = 64121053;
    public static final int VETERAN_SHADOW_DEALER_FA = 64121055;
    public static final int CHAIN_ARTS_CRUSH = 64121052;

    public static final int APOCALYPSE_CANNON_SUMMON = 400041033;
    public static final int APOCALYPSE_CANNON_SHOOTOBJ = 400041034;
    public static final int CHAIN_ARTS_VOID_STRIKE_BUFF = 400041035;
    public static final int CHAIN_ARTS_VOID_STRIKE_ATTACK = 400041036;
    public static final int CHAIN_ARTS_MAELSTROM = 400041041;
    public static final int MUSCLE_MEMORY_FINALE = 400041074;

    public static final int MUSCLE_MEMORY_I_BUFF = 64100004;
    public static final int MUSCLE_MEMORY_I_ATTACK = 64101009;
    public static final int MUSCLE_MEMORY_II_BUFF = 64110005;
    public static final int MUSCLE_MEMORY_II_ATTACK = 64111013;
    public static final int MUSCLE_MEMORY_III_BUFF = 64120006;
    public static final int MUSCLE_MEMORY_III_ATTACK = 64121020;

    public static final int CHAIN_ART_TRASH_I = 64001001;
    public static final int CHAIN_ART_TRASH_I_2 = 64001006;
    public static final int CHAIN_ART_TRASH_II = 64100000;
    public static final int CHAIN_ART_TRASH_III = 64110000;
    public static final int CHAIN_ART_TRASH_IV = 64120000;
    public static final int CHAIN_ART_REIGN_OF_CHAINS = 64121002;

    private static final int[] addedSkills = new int[]{
            HAGGLE,
            BACK_TO_HQ,
    };

    private static final int[] muscleMemoryBuff = new int[]{
            MUSCLE_MEMORY_I_BUFF,
            MUSCLE_MEMORY_II_BUFF,
            MUSCLE_MEMORY_III_BUFF,
    };

    private static final int[] muscleMemoryAttack = new int[]{
            MUSCLE_MEMORY_I_ATTACK,
            MUSCLE_MEMORY_II_ATTACK,
            MUSCLE_MEMORY_III_ATTACK,
    };

    private static final int[] chainArtSkills = new int[]{
            CHAIN_ARTS_TRASH,
            CHAIN_ARTS_TRASH_2,
            CHAIN_ART_TRASH_I,
            CHAIN_ART_TRASH_I_2,
            CHAIN_ART_TRASH_II,
            CHAIN_ART_TRASH_III,
            CHAIN_ART_TRASH_IV,
            CHAIN_ART_REIGN_OF_CHAINS,
            CHAIN_ARTS_VOID_STRIKE_ATTACK,
    };

    private static final int[] summonedSkills = new int[]{
            SUMMON_SCIMITAR,
            SUMMON_CLAW,
            SUMMON_SHURIKEN,
            SUMMON_DAGGERS,
            SUMMON_SHOTGUN,
            SUMMON_DECOY_BOMB,
            SUMMON_BRICK,
            SUMMON_SPIKED_BAT_1,
    };

    private int lastAttack = 0;
    private ScheduledFuture mmFinaleTimer;

    public Cadena(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id)) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setCurrentLevel(skill.getMasterLevel());
                    chr.addSkill(skill);
                }

                if (!chr.getQuestManager().hasQuestCompleted(34624)) {
                    chr.getQuestManager().completeQuest(34624, false); // required to get quests
                }
            }

            if (chr.hasSkill(MUSCLE_MEMORY_FINALE)) {
                EventManager.stopTimer(mmFinaleTimer);
                mmFinaleTimer = EventManager.addFixedRateEvent(this::incMuscleMemoryFinale, 1000, 1000);
            }
        }
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isCadena(id);
    }


    @Override
    public void handleAttack(Client c, AttackInfo attackInfo) {
        Char chr = c.getChr();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = chr.getSkill(getOriginalSkill(attackInfo.skillId));
        int skillID = 0;
        SkillInfo si = null;
        boolean hasHitMobs = attackInfo.mobAttackInfo.size() > 0;
        int slv = 0;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skill.getSkillId());
            slv = skill.getCurrentLevel();
            skillID = skill.getSkillId();
        }

        // Muscle Memory
        doMuscleMemory(skillID, hasHitMobs);

        // Void Strike
        doVoidStrike(attackInfo);

        // Veteran Shadow Dealer
        doVeteranShadowDealerAttack(attackInfo);

        // Cheap Shot
        applyCheapShotDoT(attackInfo);

        // Decrease Muscle Memory Finale Preparation Time
        if (hasHitMobs) {
            decreaseMMFinalePreparationTimeBySkillId(skillID);
        }
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (attackInfo.skillId) {
            case CHAIN_ART_TRASH_I:
                o1.nOption = -30;
                o1.rOption = skillID;
                o1.tOption = 5;

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Speed, o1, attackInfo.getMobIds());

                o2.nOption = si.getValue(x, slv) + (chr.hasSkill(CHAIN_ARTS_TRASH_LINKED_ATTACK_REINFORCE) ? 5 : 0);
                o2.rOption = attackInfo.skillId;
                o2.tOption = 1;
                tsm.putCharacterStatValue(NextAttackEnhance, o2);
                tsm.sendSetStatPacket();
                break;
            case CHAIN_ARTS_TRASH:
            case CHAIN_ARTS_TRASH_2:
            case CHAIN_ART_TRASH_I_2:
            case CHAIN_ART_TRASH_II:
            case CHAIN_ART_TRASH_III:
            case CHAIN_ART_TRASH_IV:
            case CHAIN_ARTS_MAELSTROM:
                o1.nOption = -30;
                o1.rOption = skillID;
                o1.tOption = 5;

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Speed, o1, attackInfo.getMobIds());

                tsm.removeStatsBySkill(CHAIN_ART_TRASH_I);
                break;
            case CHAIN_ART_BEATDOWN:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = 10;

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds());

                o2.nOption = 1;
                o2.rOption = skillID;
                o2.tOption = 10;
                tsm.putCharacterStatValue(IndieNotDamaged, o2, true);
                tsm.sendSetStatPacket();
                break;
            case SUMMON_DAGGERS:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, Map.of(MobStat.PDR, o1, MobStat.MDR, o1), attackInfo.getMobIds(), new DebuffInfo(si.getValue(prop, slv)));
                break;
            case SUMMON_SPIKED_BAT_3:
                si = SkillData.getSkillInfoById(SUMMON_SPIKED_BAT_1);
                slv = chr.getSkill(SUMMON_SPIKED_BAT_1).getCurrentLevel();
                o1.nOption = si.getValue(u, slv);
                o1.rOption = SUMMON_SPIKED_BAT_3;
                o1.tOption = si.getValue(s, slv);

                DebuffUtil.applyDebuffOnMobs(chr, Map.of(MobStat.PDR, o1, MobStat.MDR, o1), attackInfo.getMobIds(), new DebuffInfo(si.getValue(s2, slv)));
                break;
            case CHAIN_ARTS_PURSUIT_UP:
            case CHAIN_ARTS_PURSUIT_DOWN:
                chr.write(UserPacket.effect(Effect.showChainArtPursuitEffect(attackInfo.skillId, chr.getLevel(), slv, attackInfo.left, attackInfo.ptTarget)));
                chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.showChainArtPursuitEffect(attackInfo.skillId, chr.getLevel(), slv, attackInfo.left, attackInfo.ptTarget)));
                tsm.removeStat(DarkSight);
                tsm.sendResetStatPacket();
                break;
            case CHAIN_ARTS_PURSUIT_HORIZONTAL:
                o1.nOption = -30;
                o1.rOption = skillID;
                o1.tOption = 5;
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Speed, o1);

                    chr.write(UserPacket.effect(Effect.showChainArtPursuitEffect(attackInfo.skillId, chr.getLevel(), slv, attackInfo.left, new Position(mob.getPosition().getX(), chr.getPosition().getY()))));
                    chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.showChainArtPursuitEffect(attackInfo.skillId, chr.getLevel(), slv, attackInfo.left, new Position(mob.getPosition().getX(), chr.getPosition().getY()))));
                }
                tsm.removeStat(DarkSight);
                tsm.sendResetStatPacket();
                break;
            case SUMMON_BRICK_UP:
                chr.setSkillCooldown(SUMMON_BRICK, chr.getSkillLevel(SUMMON_BRICK));
                break;
        }
        super.handleAttack(c, attackInfo);
    }

    private void decreaseMMFinalePreparationTimeBySkillId(int skillId) {
        switch (skillId) {
            case CHAIN_ART_REIGN_OF_CHAINS:

            case CHAIN_ART_BEATDOWN:
            case CHAIN_ART_BEATDOWN_1:
            case CHAIN_ART_BEATDOWN_2:
            case CHAIN_ART_BEATDOWN_3:
            case CHAIN_ART_BEATDOWN_4:

            case CHAIN_ARTS_CRUSH:
                decreaseMMFinalePreparationTime(2000);
                break;

            case CHAIN_ARTS_VOID_STRIKE_ATTACK:
                decreaseMMFinalePreparationTime(1000);
                break;
        }
    }

    private void doVoidStrike(AttackInfo attackInfo) {
        var hasHitMobs = attackInfo.mobCount > 0;
        var tsm = chr.getTemporaryStatManager();
        var hasOnCd = chr.hasSkillOnCooldown(CHAIN_ARTS_VOID_STRIKE_ATTACK);
        var attackIsVoidStrike = attackInfo.skillId == CHAIN_ARTS_VOID_STRIKE_ATTACK;

        if (tsm.hasStat(VoidStrike) && !attackIsVoidStrike && !hasOnCd && hasHitMobs) {
            chr.write(UserLocal.cadenaVoidStrikeRequest(Util.getRandomFromCollection(chr.getField().getMobs()).getPosition()));
            chr.addSkillCoolTime(CHAIN_ARTS_VOID_STRIKE_ATTACK, 600);
        }
    }

    @Override
    public void handleUserSkillInfo(SkillUseInfo sui) {
        if (sui.skillID == CHAIN_ART_BEATDOWN
                || sui.skillID == CHAIN_ART_BEATDOWN_1
                || sui.skillID == CHAIN_ART_BEATDOWN_2
                || sui.skillID == CHAIN_ART_BEATDOWN_3
                || sui.skillID == CHAIN_ART_BEATDOWN_4) {
            var tsm = chr.getTemporaryStatManager();
            tsm.removeStatsBySkill(CHAIN_ART_BEATDOWN);
        }
        super.handleUserSkillInfo(sui);
    }

    private int getOriginalSkill(int skillId) {
        if (skillId == SUMMON_BRICK_ATTACK || skillId == SUMMON_BRICK_UP) {
            return SUMMON_BRICK;
        }
        if (skillId == SUMMON_SCIMITAR_AIR) {
            return SUMMON_SCIMITAR;
        }
        if (skillId == SUMMON_DECOY_BOMB_ATTACK) {
            return SUMMON_DECOY_BOMB;
        }
        if (skillId == SUMMON_SHURIKEN_EXPLOSION) {
            return SUMMON_SHURIKEN;
        }
        if (skillId == SUMMON_SPIKED_BAT_2 || skillId == SUMMON_SPIKED_BAT_3) {
            return SUMMON_SPIKED_BAT_1;
        }

        return skillId;
    }

    private void doMuscleMemory(int skillId, boolean hasHitMobs) {
        var skill = getMuscleMemorySkill();
        // Doesn't have muscle memory skill
        // Is not a Summoned Skill and is not Reign of Chains
        if (skill == null || (skillId != CHAIN_ART_REIGN_OF_CHAINS && Arrays.stream(summonedSkills).noneMatch(s -> s == skillId))) {
            return;
        }

        // Info
        var si = SkillData.getSkillInfoById(skill.getSkillId());
        var slv = skill.getCurrentLevel();
        var tsm = chr.getTemporaryStatManager();
        var attackSkill = getMMAttackByMMBuff(skill.getSkillId());
        var isDiffAttack = skillId != lastAttack;
        var isReignOfChains = skillId == CHAIN_ART_REIGN_OF_CHAINS;

        var count = 1;

        // Reign of Chains can only refresh, not actually give
        if (!tsm.hasStat(MuscleMemory) && isReignOfChains) {
            return;
        }

        // Increase Muscle memory
        if (tsm.hasStat(MuscleMemory)) {
            count = tsm.getOption(MuscleMemory).nOption;
            var maxStack = Arrays.stream(summonedSkills).filter(s -> chr.hasSkill(s)).count();
            if (isDiffAttack && !isReignOfChains && count < maxStack) {
                count++;
            }
        }

        // Give buff
        var opt = new Option(count, skill.getSkillId(), si.getValue(time, slv));
        tsm.putCharacterStatValue(MuscleMemory, opt, true);
        tsm.sendSetStatPacket();

        if (isReignOfChains) {
            return;
        }

        // Do Muscle Memory Attack
        if (!chr.hasSkillOnCooldown(attackSkill) && attackSkill > 0) {
            chr.write(UserLocal.userBonusAttackRequest(attackSkill));
            chr.addSkillCoolTime(attackSkill, 250);
        }

        // [Cadena] Custom Skill Change
        if (isDiffAttack && hasHitMobs && SkillChangeConstants.VOID_STRIKE_CD_CHANGE) {
            chr.reduceSkillCoolTime(CHAIN_ARTS_VOID_STRIKE_ATTACK, SkillChangeConstants.VOID_STRIKE_CD_REDUCTION);
        }

        // Muscle Memory Finale
        if (hasHitMobs && chr.hasSkill(MUSCLE_MEMORY_FINALE)) {
            incMuscleMemoryFinaleMMCount();
            if (canDoMuscleMemory()) {
                doMuscleMemoryFinale();
            }
        }

        // Set Last Attack
        lastAttack = skillId;
    }

    private void doVeteranShadowDealerAttack(AttackInfo attackInfo) {
        var tsm = chr.getTemporaryStatManager();
        if (attackInfo.skillId != VETERAN_SHADOW_DEALER_FA && attackInfo.mobCount > 0 && tsm.hasStatBySkillId(VETERAN_SHADOWDEALER)) {
            chr.write(UserLocal.userBonusAttackRequest(VETERAN_SHADOW_DEALER_FA, attackInfo.mobAttackInfo.stream().map(mai -> mai.mobId).collect(Collectors.toList())));
        }
    }

    public void handleSkillRemove(Char chr, int skillId, Map<CharacterTemporaryStat, Option> removedOptions) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (skillId == 4001003) { // sent when Cadena needs to go out of DarkSight Mode from Pursuit
            tsm.removeStat(DarkSight);
            tsm.sendResetStatPacket();
        }
    }

    @Override
    public void handleShootObj(Char chr, ShootObjectSkillInfo sosi) {
        if (sosi.getSkillId() == APOCALYPSE_CANNON_SHOOTOBJ && sosi.getSummonOwner() != null) {
            chr.getField().removeSummon(sosi.getSummonOwner());
        }
        super.handleShootObj(chr, sosi);
    }

    private Skill getMuscleMemorySkill() {
        if (chr.hasSkill(MUSCLE_MEMORY_III_BUFF)) {
            return chr.getSkill(MUSCLE_MEMORY_III_BUFF);

        } else if (chr.hasSkill(MUSCLE_MEMORY_II_BUFF)) {
            return chr.getSkill(MUSCLE_MEMORY_II_BUFF);

        } else if (chr.hasSkill(MUSCLE_MEMORY_I_BUFF)) {
            return chr.getSkill(MUSCLE_MEMORY_I_BUFF);
        }

        return null;
    }

    private int getMMAttackByMMBuff(int skillId) {
        switch (skillId) {
            case MUSCLE_MEMORY_I_BUFF:
                return MUSCLE_MEMORY_I_ATTACK;
            case MUSCLE_MEMORY_II_BUFF:
                return MUSCLE_MEMORY_II_ATTACK;
            case MUSCLE_MEMORY_III_BUFF:
                return MUSCLE_MEMORY_III_ATTACK;
            default:
                return 0;
        }
    }

    private void applyCheapShotDoT(AttackInfo attackInfo) { // Doesn't to damage? wut
        if (!chr.hasSkill(CHEAP_SHOT_II)) {
            return;
        }
        Skill skill = chr.getSkill(CHEAP_SHOT_II);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();

        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
            if (mob == null) {
                continue;
            }
            MobTemporaryStat mts = mob.getTemporaryStat();
            if (mts.hasAMobStat() && Util.succeedProp(si.getValue(prop, slv))) {
                mts.createAndAddBurnedInfo(chr, skill);
            }
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
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (skillId) {
            case CHAIN_ARTS_PURSUIT_PULL:
                if (inPacket.getUnreadAmount() > 13) {
                    inPacket.decodeArr(inPacket.getUnreadAmount() - 13);
                }
                boolean isLeft = inPacket.decodeByte() != 0;
                Position position = inPacket.decodePositionInt();
                int originSkillId = inPacket.decodeInt();
                o1.nOption = chr.getSkillLevel(CHAIN_ARTS_PURSUIT_HORIZONTAL_START);
                o1.rOption = CHAIN_ARTS_PURSUIT_HORIZONTAL_START;
                o1.tOption = 2;
                tsm.putCharacterStatValue(DarkSight, o1);
                chr.write(UserPacket.effect(Effect.showChainArtPursuitPullEffect(skillId, chr.getLevel(), chr.getSkillLevel(CHAIN_ARTS_PURSUIT_HORIZONTAL_START), isLeft, position, originSkillId)));
                break;
            case WEAPON_BOOSTER_CADENA:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;
            case SHADOW_DEALER_ELIXIR:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = si.getValue(time, slv) * 1000;
                tsm.putCharacterStatValue(IndieDamR, o1);
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieCr, slv);
                o1.tOption = si.getValue(time, slv) * 1000;
                tsm.putCharacterStatValue(IndieCr, o1);
                break;
            case VETERAN_SHADOWDEALER:
                o1.nOption = 2;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(ExtraSkillCTS, o1);
                break;
            case CHAIN_ARTS_VOID_STRIKE_BUFF:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(VoidStrike, o1);
                break;
            case APOCALYPSE_CANNON_SUMMON:
                var pos = inPacket.decodePosition();
                var left = inPacket.decodeByte() != 0;
                Summon summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setPosition(pos);
                summon.setFlip(!left);
                chr.getField().spawnSummonAndRemoveOld(summon);
                break;
            case CHAIN_ARTS_MAELSTROM:
                pos = skillUseInfo.targetPosition;
                isLeft = skillUseInfo.isLeft;
                AffectedArea aa = AffectedArea.getPassiveAA(chr, skillId, slv);
                aa.setPosition(pos);
                var rect = si.getFirstRect();
                if (!isLeft) {
                    rect = rect.horizontalFlipAround(0);
                }
                aa.setRect(aa.getRectAround(rect));
                aa.setDelay((short) 4);
                aa.setFlip(!isLeft);
                chr.getField().spawnAffectedAreaAndRemoveOld(aa);
                break;
        }
        tsm.sendSetStatPacket();
    }

    private boolean canIncMuscleMemoryFinale() {
        return !chr.hasSkillOnCooldown(-MUSCLE_MEMORY_FINALE);
    }

    private void decreaseMMFinalePreparationTime(int ms) {
        chr.reduceSkillCoolTime(-MUSCLE_MEMORY_FINALE, ms);
    }

    private void incMuscleMemoryFinale() {
        if (!canIncMuscleMemoryFinale()) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        var opt = tsm.getOption(MuscleMemoryFinale);

        if (!tsm.hasStat(MuscleMemoryFinale)) {
            opt.rOption = MUSCLE_MEMORY_FINALE;
            tsm.putCharacterStatValue(MuscleMemoryFinale, opt);
        }

        opt.nOption++;

        opt.nOption = Math.max(0, Math.min(opt.nOption, 3));
        tsm.updateBuffExtendTime(MuscleMemoryFinale, opt);
        chr.addSkillCoolTime(-MUSCLE_MEMORY_FINALE, 11000);
    }

    private void decMuscleMemoryFinale() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        var opt = tsm.getOption(MuscleMemoryFinale);

        if (!tsm.hasStat(MuscleMemoryFinale)) {
            opt.rOption = MUSCLE_MEMORY_FINALE;
            tsm.putCharacterStatValue(MuscleMemoryFinale, opt);
        }

        opt.nOption--;

        opt.nOption = Math.max(0, Math.min(opt.nOption, 3));
        tsm.updateBuffExtendTime(MuscleMemoryFinale, opt);
    }

    private void incMuscleMemoryFinaleMMCount() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        var opt = tsm.getOption(MuscleMemoryFinale);

        if (!tsm.hasStat(MuscleMemoryFinale)) {
            opt.rOption = MUSCLE_MEMORY_FINALE;
            tsm.putCharacterStatValue(MuscleMemoryFinale, opt);
        }

        opt.xOption++;

        opt.xOption = Math.max(0, Math.min(opt.xOption, 4));
        tsm.updateBuffExtendTime(MuscleMemoryFinale, opt);
    }

    private void resetMuscleMemoryFinaleMMCount() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        var opt = tsm.getOption(MuscleMemoryFinale);

        if (!tsm.hasStat(MuscleMemoryFinale)) {
            opt.rOption = MUSCLE_MEMORY_FINALE;
            tsm.putCharacterStatValue(MuscleMemoryFinale, opt);
        }

        opt.xOption = 0;

        tsm.updateBuffExtendTime(MuscleMemoryFinale, opt);
    }

    private boolean canDoMuscleMemory() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(MuscleMemoryFinale) || !chr.hasSkill(MUSCLE_MEMORY_FINALE)) {
            return false;
        }

        return tsm.getOption(MuscleMemoryFinale).nOption > 0 && tsm.getOption(MuscleMemoryFinale).xOption >= 4;
    }

    private void doMuscleMemoryFinale() {
        chr.write(UserLocal.userBonusAttackRequest(MUSCLE_MEMORY_FINALE));
        decMuscleMemoryFinale();
        resetMuscleMemoryFinaleMMCount();
    }

    @Override
    public void handleLevelUp() {
        super.handleLevelUp();
        int job = -1;
        switch (chr.getLevel()) {
            case 60:
                job = JobConstants.JobEnum.CADENA_3.getJobId();
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
        EventManager.stopTimer(mmFinaleTimer);
        super.stopTimers();
    }

    @Override
    public void updateTimerSkill() {
        if (chr.hasSkill(MUSCLE_MEMORY_FINALE)) {
            EventManager.stopTimer(mmFinaleTimer);
            mmFinaleTimer = EventManager.addFixedRateEvent(this::incMuscleMemoryFinale, 1000, 1000);
        }
        super.updateTimerSkill();
    }

    @Override
    public void setCharCreationStats(Char chr) {
        super.setCharCreationStats(chr);
        CharacterStat cs = chr.getAvatarData().getCharacterStat();
        Item item = ItemData.getItemDeepCopy(1353300); // Secondary
        item.setBagIndex(BodyPart.Shield.getVal());
        chr.getEquippedInventory().addItem(item);
        cs.setPosMap(940200500);
        cs.setLevel(10);
        cs.setMaxHp(466);
        cs.setHp(466);
        cs.setMaxMp(249);
        cs.setMp(249);
    }
}
