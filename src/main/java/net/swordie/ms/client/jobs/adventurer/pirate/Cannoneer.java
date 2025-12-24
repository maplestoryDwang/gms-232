package net.swordie.ms.client.jobs.adventurer.pirate;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.BypassCooldownCheckType;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillUseSource;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.MobAttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.shootobject.ShootObjectSkillInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.Effect;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.enums.AssistType;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.Foothold;

import java.util.*;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.BypassCooldownCheckType.BypassCheckAndCooldown;
import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

public class Cannoneer extends Pirate {
    public static final int BLAST_BACK = 5011002; //Special Attack


    public static final int CANNON_BOOSTER = 5301002; //Buff
    public static final int MONKEY_MAGIC = 5301003; //Buff


    public static final int MONKEY_WAVE = 5311002; //Special Attack
    public static final int BARREL_ROULETTE_FA = 5310004;
    public static final int LUCK_OF_THE_DIE = 5311005; //Buff
    public static final int MONKEY_FURY = 5311010; // set DoT
    public static final int MONKEY_FURY_BOMB_EXPLOSION = 5310011;
    public static final int BARREL_ROULETTE = 5311004; //Buff


    public static final int LUCK_OF_THE_DIE_DD = 5320007;
    public static final int MONKEY_MALITIA_PERSIST = 5320044; //Summon
    public static final int MONKEY_MALITIA_ENHANCE = 5320045; //Summon
    public static final int NAUTILUS_STRIKE_CANNON = 5321001; //Special Attack / Buff
    public static final int MAPLE_WARRIOR_CANNON = 5321005; //Buff
    public static final int HEROS_WILL_CANNON = 5321006;
    public static final int EPIC_ADVENTURER_CANNON = 5321053;
    public static final int ROLLING_RAINBOW = 5321052;
    public static final int BUCKSHOT = 5321054;
    public static final int MEGA_MONKEY_MAGIC = 5320008;
    public static final int PIRATE_SPIRIT = 5321010; //Buff
    public static final int MONKEY_MALITIA = 5321004; //Summon
    public static final int ANCHOR_AWEIGH = 5321003; //Summon


    // V skills
    public static final int SPECIAL_MONKEY_SIDEKICK_3 = 400051053;
    public static final int SPECIAL_MONKEY_SIDEKICK_2 = 400051052;
    public static final int SPECIAL_MONKEY_SIDEKICK = 400051038;
    public static final int BIG_HUGE_GIGANTIC_ROCKET = 400051008;
    public static final int NUCLEAR_OPTION_TILE = 400051026;
    public static final int NUCLEAR_OPTION_EXPLOSION = 400051025;
    public static final int NUCLEAR_OPTION = 400051024;

    public static final int POOLMAKER_BUFF = 400051074;
    public static final int POOLMAKER_ATTACK = 400051075;
    public static final int POOLMAKER_AA = 400051076;
    public static final int POOLMAKER_CHEST_BUFF = 400051077;


    public int poolmakerCount = 0;

    private static final List<Integer> specialMonkeySideKickIds = new ArrayList<>() {{
        add(SPECIAL_MONKEY_SIDEKICK);
        add(SPECIAL_MONKEY_SIDEKICK_2);
        add(SPECIAL_MONKEY_SIDEKICK_3);
    }};


    public Cannoneer(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
        }
    }


    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isCannonShooter(id);
    }

    private void giveBarrelRouletteBuff(int roulette) {   //TODO
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        Skill skill = chr.getSkill(BARREL_ROULETTE);
        int slv = skill.getCurrentLevel();
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        chr.write(UserPacket.effect(Effect.skillAffectedSelect(BARREL_ROULETTE, slv, roulette, false)));
        switch (roulette) {
            case 1: // Extra Attack (Final Attack)
                //Handled, See Final Attack Handler
                break;
            case 2: // Max CritDmg
                o.nOption = si.getValue(s, slv);
                o.rOption = skill.getSkillId();
                o.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(EnrageCrDamMin, o);
                break;
            case 3: // Slow Debuff
                //Handled, See Attack Handler
                break;
            case 4: // DoT
                //Handled, See Attack Handler
                break;
        }
    }

    public void increaseCannonOfMassDestruction() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        int count = 1;
        if (tsm.hasStat(StackOverTimeSkill)) {
            count = tsm.getOption(StackOverTimeSkill).nOption;
            if (count < 3) {
                count++;
            }
        }
        updateCannonOfMassDestruction(count);
    }

    private void updateCannonOfMassDestruction(int count) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        o.nOption = count;
        o.rOption = 0;
        tsm.putCharacterStatValue(StackOverTimeSkill, o);
        tsm.sendSetStatPacket();
    }


    private void applyBarrelRouletteDebuffOnMob(AttackInfo attackInfo) {
        if (chr.hasSkill(BARREL_ROULETTE)) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            Skill skill = chr.getSkill(BARREL_ROULETTE);
            int slv = skill.getCurrentLevel();
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            Option o = new Option();
            o.nOption = -20;
            o.rOption = skill.getSkillId();
            o.tOption = si.getValue(v, slv);
            if (tsm.hasStat(Roulette)) {
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    if (tsm.hasStat(Roulette) && tsm.getOption(Roulette).nOption == 4) {  //DoT Debuff
                        mts.createAndAddBurnedInfo(chr, skill);
                    } else if (tsm.hasStat(Roulette) && tsm.getOption(Roulette).nOption == 3) {  //Slow Debuff
                        int slowProc = si.getValue(w, slv);
                        if (Util.succeedProp(slowProc)) {
                            mts.addStatOptionsAndBroadcast(chr, MobStat.Speed, o);
                        }
                    }
                }
            }
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
            slv = skill.getCurrentLevel();
            skillID = skill.getSkillId();
        }

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();

        // Barrel Roulette
        applyBarrelRouletteDebuffOnMob(attackInfo);
        // Monkey Wave Ignore KeyDown Time
        if (chr.hasSkill(MONKEY_WAVE)) {
            Skill mwskill = chr.getSkill(MONKEY_WAVE);
            SkillInfo mwsi = SkillData.getSkillInfoById(MONKEY_WAVE);
            byte mwslv = (byte) mwskill.getCurrentLevel();
            if (Util.succeedProp(mwsi.getValue(w, mwslv)) && !(tsm.getOption(KeyDownTimeIgnore).nOption > 0) && attackInfo.skillId != 5310008) {
                o1.nOption = 1;
                o1.rOption = 5310008;
                o1.tOption = 15; // doesn't have an assigned skillStat
                tsm.putCharacterStatValue(KeyDownTimeIgnore, o1);
                tsm.sendSetStatPacket();
            }
        }

        if (attackInfo.skillId == POOLMAKER_ATTACK) {
            if (poolmakerCount > 0) {
                if (!chr.hasSkillOnCooldown(POOLMAKER_AA)) {
                    Rect rect = chr.getRectAround(new Rect(-700, -250, 700, 0)); // Rect for spawning Chests
                    Rect rectCheck = chr.getRectAround(new Rect(-300, -150, 300, 25)); // Rect for checking Mobs in area
                    var mobsInArea = chr.getField().getMobsInRect(rectCheck);
                    var anyMobs = mobsInArea.size() > 0;
                    var twoChestsInMap = chr.getField().getAffectedAreas().stream().filter(aa -> aa.getSkillID() == POOLMAKER_AA && aa.getOwner().equals(chr)).count() >= 2;
                    if (!anyMobs && !twoChestsInMap) {
                        Foothold fh = chr.getField().findFootHoldBelow(rect.getRandomPositionInside());
                        if (fh != null) {
                            Position finalPos = fh.getRandomPosition();
                            dropPoolmakerChest(finalPos);
                            chr.addSkillCoolTime(POOLMAKER_AA, 4000); // 4 sec cooldown on dropping a chest
                        }
                    }
                }
                setPoolmakerCount(attackInfo, poolmakerCount);
            } else {
                removePoolmaker(attackInfo);
            }
        }

        switch (attackInfo.skillId) {
            case BLAST_BACK:
                o1.nOption = si.getValue(z, slv);
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(time, slv);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    if (Util.succeedProp(si.getValue(prop, slv))) {
                        Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                        if (mob == null) {
                            continue;
                        }
                        MobTemporaryStat mts = mob.getTemporaryStat();
                        mts.addStatOptionsAndBroadcast(chr, MobStat.Speed, o1);
                    }
                }
                break;
            case MONKEY_WAVE:
                o1.nOption = 1;
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(time, slv);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    if (Util.succeedProp(si.getValue(prop, slv))) {
                        Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                        if (mob == null || mob.isBoss()) {
                            continue;
                        }
                        MobTemporaryStat mts = mob.getTemporaryStat();
                        mts.addStatOptionsAndBroadcast(chr, MobStat.Stun, o1);
                    }
                }
                if (tsm.hasStat(KeyDownTimeIgnore) && tsm.getOption(KeyDownTimeIgnore).nOption > 0) {
                    tsm.removeStatsBySkill(5310008);
                    tsm.removeStat(KeyDownTimeIgnore);
                    tsm.sendResetStatPacket();
                }
                o2.nOption = si.getValue(x, slv);
                o2.rOption = skillID;
                o2.tOption = si.getValue(subTime, slv);
                tsm.putCharacterStatValue(IncCriticalDam, o2);
                tsm.sendSetStatPacket();
                break;
            case MONKEY_FURY:
                o1.nOption = si.getValue(z, slv);
                o1.rOption = skillID;
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    if (Util.succeedProp(si.getValue(prop, slv))) {
                        Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                        if (mob == null) {
                            return;
                        }
                        MobTemporaryStat mts = mob.getTemporaryStat();
                        mts.addStatOptionsAndBroadcast(chr, MobStat.AddDamSkill, o1);
                        mts.createAndAddBurnedInfo(chr, skill);
                    }
                }

                if (attackInfo.mobAttackInfo.isEmpty()) {
                    // Hack to give cd on use
                    chr.setSkillCooldown(skillID, slv);
                }
                break;
            case NAUTILUS_STRIKE_CANNON:
                chr.reduceSkillCoolTime(LUCK_OF_THE_DIE, (int) (chr.getRemainingCoolTime(LUCK_OF_THE_DIE) * 0.5F));
                chr.reduceSkillCoolTime(LUCK_OF_THE_DIE_DD, (int) (chr.getRemainingCoolTime(LUCK_OF_THE_DIE_DD) * 0.5F));
                chr.reduceSkillCoolTime(BARREL_ROULETTE, (int) (chr.getRemainingCoolTime(BARREL_ROULETTE) * 0.5F));
                break;
        }
        super.handleAttack(c, attackInfo);
    }

    @Override
    public BypassCooldownCheckType canBypassCooldownCheck(int skillId, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        switch (skillId) {
            case MONKEY_FURY_BOMB_EXPLOSION:
            case BIG_HUGE_GIGANTIC_ROCKET:
                return BypassCheckAndCooldown;
        }

        return super.canBypassCooldownCheck(skillId, attackInfo, sui, source);
    }

    @Override
    public int getFinalAttackSkill() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        SkillInfo si = SkillData.getSkillInfoById(BARREL_ROULETTE);
        if (tsm.hasStat(Roulette) && tsm.getOption(Roulette).nOption == 1 && Util.succeedProp(si.getValue(z, chr.getSkill(BARREL_ROULETTE).getCurrentLevel()))) {
            return BARREL_ROULETTE_FA;
        }
        return super.getFinalAttackSkill();
    }

    public void handleShootObj(Char chr, ShootObjectSkillInfo sosi) {
        var skillId = sosi.getSkillId();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        switch (skillId) {
            case BIG_HUGE_GIGANTIC_ROCKET:
                updateCannonOfMassDestruction(tsm.hasStat(StackOverTimeSkill) ? (tsm.getOption(StackOverTimeSkill).nOption - 1) : 0);
                break;
        }
        super.handleShootObj(chr, sosi);
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
        switch (skillId) {
            case MONKEY_MAGIC:
            case MEGA_MONKEY_MAGIC:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieAcc, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieACC, o1);
                o2.rOption = skillId;
                o2.nOption = si.getValue(indieAllStat, slv);
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieAllStat, o2);
                o3.rOption = skillId;
                o3.nOption = si.getValue(indieEva, slv);
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieEVA, o3);
                o4.rOption = skillId;
                o4.nOption = si.getValue(indieJump, slv);
                o4.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieJump, o4);
                o5.rOption = skillId;
                o5.nOption = si.getValue(indieMhp, slv);
                o5.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMHP, o5);
                o6.rOption = skillId;
                o6.nOption = si.getValue(indieMmp, slv);
                o6.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMMP, o6);
                o7.rOption = skillId;
                o7.nOption = si.getValue(indieSpeed, slv);
                o7.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieSpeed, o7);
                break;
            case BARREL_ROULETTE:
                int roulette = new Random().nextInt(4) + 1;
                o1.nOption = roulette;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(Roulette, o1);
                giveBarrelRouletteBuff(roulette);
                break;
            case PIRATE_SPIRIT:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieStance, o1);
                break;
            case BUCKSHOT:
                o1.nOption = slv;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(BuckShot, o1);
                tsm.putCharacterStatValue(IndieBooster, new Option(-1, BUCKSHOT, o1.tOption));
                break;
            case ROLLING_RAINBOW: //Stationary, Attacks
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setFlyMob(false);
                summon.setMoveAction((byte) 0);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setFlip(!chr.isLeft());
                field.spawnSummonAndRemoveOld(summon);
                break;
            case MONKEY_MALITIA: //Stationary, Attacks
                var position = inPacket.decodePosition();
                var isLeft = inPacket.decodeByte() != 0;

                if (getMonkeyMalitiasInField() >= getMaxMonkeyMilitia()) {
                    removeFirstMonkeyMalitia();
                }

                int[] summons = new int[]{
                        MONKEY_MALITIA,
                        5320011
                };
                for (int summonZ : summons) {
                    summon = Summon.getSummonByNoCTS(chr, summonZ, slv);
                    summon.setFlyMob(false);
                    summon.setMoveAbility(MoveAbility.Stop);
                    summon.setFlip(!isLeft);
                    summon.setPosition(position);
                    summon.setSummonTerm(si.getValue(time, slv) + chr.getSkillStatValue(time, MONKEY_MALITIA_PERSIST));
                    if (chr.hasSkill(MONKEY_MALITIA_ENHANCE)) {
                        field.spawnSummon(summon);
                    } else {
                        field.spawnSummonAndRemoveOld(summon);
                    }
                }
                break;
            case ANCHOR_AWEIGH: //Stationary, Pulls mobs
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setFlyMob(false);
                summon.setMoveAbility(MoveAbility.Stop);
                position = new Position(chr.isLeft() ? chr.getPosition().getX() - 250 : chr.getPosition().getX() + 250, chr.getPosition().getY());
                summon.setCurFoothold((short) chr.getField().findFootHoldBelow(position).getId());
                summon.setPosition(position);
                field.spawnSummonAndRemoveOld(summon);
                break;
            case SPECIAL_MONKEY_SIDEKICK:
                for (int summonSkillId : specialMonkeySideKickIds) {
                    summon = Summon.getSummonBy(chr, summonSkillId, slv);
                    summon.setFlyMob(false);
                    summon.setMoveAction((byte) 0);
                    summon.setMoveAbility(MoveAbility.SmartFollow);
                    summon.setAssistType(AssistType.SequenceAttack);
                    summon.setLinkedSummonSkillIds(specialMonkeySideKickIds);
                    field.spawnSummonAndRemoveOld(summon);
                }
                break;
            case NUCLEAR_OPTION:
                o1.rOption = 1;
                o1.nOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieFloating, o1); // IndieFloating is moved/removed
                break;
            case NUCLEAR_OPTION_EXPLOSION:
                tsm.removeStatsBySkill(NUCLEAR_OPTION);
                position = inPacket.decodePositionInt();

                AffectedArea aa = AffectedArea.getPassiveAA(chr, skillId, slv);
                aa.setPosition(position);
                aa.setRect(aa.getPosition().getRectAround(SkillData.getSkillInfoById(NUCLEAR_OPTION_EXPLOSION).getFirstRect()));
                field.spawnAffectedArea(aa);

                aa = AffectedArea.getPassiveAA(chr, NUCLEAR_OPTION_TILE, slv);
                aa.setPosition(position);
                aa.setRect(aa.getPosition().getRectAround(SkillData.getSkillInfoById(NUCLEAR_OPTION_EXPLOSION).getFirstRect()));
                field.spawnAffectedArea(aa);
                break;
            case POOLMAKER_BUFF:
                var strikesRemaining = si.getValue(y, slv);
                setPoolmakerCount(new AttackInfo(), strikesRemaining);
                break;
        }
        tsm.sendSetStatPacket();
    }

    private void setPoolmakerCount(AttackInfo ai, int count) {
        // AttackInfo being set for Remote Broadcasting
        ai.poolmakerEnabled = true;
        ai.poolmakerCount = count;
        chr.write(UserLocal.poolmaker(true, count, 60_000)); // does attack
        poolmakerCount = count - 1;
    }

    private void removePoolmaker(AttackInfo ai) {
        // AttackInfo being set for Remote Broadcasting
        ai.poolmakerEnabled = false;
        ai.poolmakerCount = 0;
        poolmakerCount = 0;
        chr.write(UserLocal.poolmaker(false, 0, 0));
    }

    private void dropPoolmakerChest(Position position) {
        SkillInfo si = SkillData.getSkillInfoById(POOLMAKER_AA);
        AffectedArea aa = AffectedArea.getPassiveAA(chr, POOLMAKER_AA, chr.getSkillLevel(POOLMAKER_BUFF));
        aa.setPosition(position);
        aa.setRect(position.getRectAround(si.getFirstRect()));

        chr.getField().spawnAffectedArea(aa);
    }

    public static void openPoolmakerChest(Char chr, AffectedArea aa) {
        Char owner = aa.getOwner();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();

        SkillInfo si = SkillData.getSkillInfoById(POOLMAKER_CHEST_BUFF);
        var slv = owner.getSkillLevel(POOLMAKER_BUFF);

        o.nOption = si.getValue(indieDamR, slv);
        o.rOption = si.getSkillId();
        o.tOption = si.getValue(time, slv);
        tsm.putCharacterStatValue(IndieDamR, o);
        tsm.sendSetStatPacket();

        aa.getField().removeLife(aa);
    }

    private int getMaxMonkeyMilitia() {
        if (chr.hasSkill(MONKEY_MALITIA_ENHANCE)) {
            return 2;
        }
        return 1;
    }

    private int getMonkeyMalitiasInField() {
        return (int) chr.getField().getSummons().stream().filter(s -> s.getChr() == chr && s.getSkillID() == MONKEY_MALITIA).count();
    }

    private void removeFirstMonkeyMalitia() {
        Field field = chr.getField();

        Summon monkey1 = field.getSummons()
                .stream()
                .filter(s -> s.getChr() == chr && s.getSkillID() == MONKEY_MALITIA)
                .sorted(Comparator.comparingInt(Life::getObjectId))
                .collect(Collectors.toList()).stream()
                .findFirst()
                .orElse(null);
        Summon monkey2 = field.getSummons()
                .stream()
                .filter(s -> s.getChr() == chr && s.getSkillID() == 5320011)
                .sorted(Comparator.comparingInt(Life::getObjectId))
                .collect(Collectors.toList()).stream()
                .findFirst()
                .orElse(null);

        field.removeSummon(monkey1);
        field.removeSummon(monkey2);
    }

    @Override
    public void handleSkillRemove(Char chr, int skillID, Map<CharacterTemporaryStat, Option> removedOptions) {
        if (skillID == POOLMAKER_BUFF) {
            removePoolmaker(new AttackInfo());
        }
        super.handleSkillRemove(chr, skillID, removedOptions);
    }

    @Override
    public void onWarp(Field oldField, Field newField) {
        removePoolmaker(new AttackInfo());
        super.onWarp(oldField, newField);
    }

    // Hit related methods ---------------------------------------------------------------------------------------------

}
