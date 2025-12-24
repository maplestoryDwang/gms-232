package net.swordie.ms.client.jobs.adventurer.pirate;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.BodyPart;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.MobAttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatBase;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillChangeConstants;
import net.swordie.ms.enums.AssistType;
import net.swordie.ms.enums.DBChar;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.enums.TSIndex;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.ArrayList;
import java.util.List;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

public class Jett extends Pirate {

    public static final int RETRO_ROCKETS = 228;
    public static final int SPACESHIP = 1227;

    // 1st job
    public static final int GALACTIC_MIGHT = 5081023; //Buff
    public static final int BLASTER_BARRAGE = 5081002;


    // 2nd Job
    public static final int STARLINE_TWO = 5701010; //Special Attack (Stun Debuff)
    public static final int BOUNTY_CHASER = 5701013; //Buff


    // 3rd Job
    public static final int SLIPSTREAM_SUIT = 5711024; //Buff
    public static final int TURRET_DEPLOYMENT = 5711001; //Summon
    public static final int FALLING_STARS = 5711021;


    // 4th Job
    public static final int HIGH_GRAVITY = 5721066; //Buff
    public static final int MAPLE_WARRIOR_JETT = 5721000; //Buff
    public static final int HEROS_WILL_JETT = 5721002;
    public static final int STRIKEFORCE_SHOWDOWN = 5721065;
    public static final int STARFORCE_SALVO = 5721001;
    public static final int STARFALL = 5721004;

    public static final int BACKUP_BEATDOWN = 5721061;
    public static final int SINGULARITY_SHOCK = 5721052;
    public static final int BIONIC_RESILIENCE = 5721054;
    public static final int EPIC_ADVENTURER_JETT = 5721053;


    // V skills
    public static final int ALLIED_FURY = 400051054;
    public static final int SUBORBITAL_SUMMON_SMALL_4 = 400051032;
    public static final int SUBORBITAL_SUMMON_SMALL_3 = 400051031;
    public static final int SUBORBITAL_SUMMON_SMALL_2 = 400051030;
    public static final int SUBORBITAL_SUMMON_SMALL_1 = 400051029;
    public static final int SUBORBITAL_SUMMON_BIG = 400051028;
    public static final int GRAVITY_CRUSH = 400051014;
    public static final int ANTI_GRAVITY_CYCLE_SUMMON = 400051082;
    public static final int ANTI_GRAVITY_CYCLE_ATTACK = 400051083;


    private static final List<Integer> suborbitalSummons = new ArrayList<Integer>() {{
        add(SUBORBITAL_SUMMON_BIG);
        add(SUBORBITAL_SUMMON_SMALL_1);
        add(SUBORBITAL_SUMMON_SMALL_2);
        add(SUBORBITAL_SUMMON_SMALL_3);
        add(SUBORBITAL_SUMMON_SMALL_4);
    }};

    private static final int[] addedSkillsWithoutCurrentLevel = new int[]{
            MAPLE_WARRIOR_JETT
    };

    private static final int[] addedSkills = new int[] {
            RETRO_ROCKETS,
            SPACESHIP,
    };


    public Jett(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkillsWithoutCurrentLevel) {
                if (!chr.hasSkill(id)) {
                    chr.addSkill(SkillData.getSkillDeepCopyById(id));
                }
            }
            for (int id : addedSkills) {
                chr.addSkill(SkillData.getSkillDeepCopyById(id));
            }
        }
    }


    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isJett(id);
    }



    public void flipSuborbitalSummon(InPacket inPacket) {
        if (inPacket.getUnreadAmount() <= 0) {
            return;
        }
        Field field = chr.getField();
        boolean toSplitter = inPacket.decodeByte() == 0; //  0 = ->Splitter   |   1 = ->Amplifier
        for (int summonSkillId : suborbitalSummons) {
            Summon summon = field.getSummonByChrAndSkillId(chr, summonSkillId);
            if (summon == null) {
                return;
            }
            summon.setHide(!summon.isHide());
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

        // [Jett] Custom Skill Change
        swRandomStrikeforce(chr, attackInfo);

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        switch (attackInfo.skillId) {
            case STARLINE_TWO:
                o1.nOption = 1;
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(hcTime, slv);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    if (Util.succeedProp(si.getValue(hcProp, slv))) {
                        Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                        if (mob == null || mob.isBoss()) {
                            continue;
                        }
                        MobTemporaryStat mts = mob.getTemporaryStat();
                        mts.addStatOptionsAndBroadcast(chr, MobStat.Stun, o1);
                    }
                }
                break;

            case GRAVITY_CRUSH:
                Field field = chr.getField();
                if (field.getSummonByChrAndSkillId(chr, GRAVITY_CRUSH) == null) {
                    return;
                }
                o1.nOption = 1;
                o1.rOption = attackInfo.skillId;
                o1.tOption = si.getValue(time, slv);
                o1.summon = field.getSummonByChrAndSkillId(chr, GRAVITY_CRUSH);
                o1.chr = chr;
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = mai.mob;
                    if (mob == null || mob.isBoss()) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Freeze, o1);
                }
                break;

            case ANTI_GRAVITY_CYCLE_ATTACK:
                chr.addSkillCoolTime(attackInfo.skillId, 5000);
                break;
        }
        if (!JobConstants.isPhantom(chr.getJob())) {
            super.handleAttack(c, attackInfo);
        }
    }

    private void swRandomStrikeforce(Char chr, AttackInfo attackInfo) {
        if (SkillChangeConstants.STRIKEFORCE_PROC_ON_OTHER_ATTACKS && chr.hasSkill(STRIKEFORCE_SHOWDOWN) && attackInfo.skillId != STRIKEFORCE_SHOWDOWN) {
            int proc = SkillChangeConstants.STRIKEFORCE_PROP_DEFAULT;
            if (chr.hasSkillOnCooldown(STARFALL)) {
                proc += SkillChangeConstants.STRIKEFORCE_PROP_FROM_STARFALL;
            }
            if (chr.hasSkillOnCooldown(SINGULARITY_SHOCK)) {
                proc += SkillChangeConstants.STRIKEFORCE_PROP_FROM_SINGULARITY;
            }
            if (chr.getTemporaryStatManager().hasStatBySkillId(BIONIC_RESILIENCE)) {
                var si = SkillData.getSkillInfoById(BIONIC_RESILIENCE);

                if (si != null) {
                    proc += si.getValue(x, 1);
                }
            }
            if (Util.succeedProp(proc)) {
                chr.write(UserLocal.userBonusAttackRequest(STRIKEFORCE_SHOWDOWN));
            }
        }
    }

    // Skill related methods -------------------------------------------------------------------------------------------

    @Override
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillId, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {
        if (!JobConstants.isPhantom(chr.getJob())) {
            super.handleSkill(chr, tsm, skillId, slv, inPacket, skillUseInfo);
        }
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
            case BOUNTY_CHASER:
                o3.rOption = skillId;
                o3.nOption = si.getValue(indieCr, slv);
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieCr, o3);
                o4.rOption = skillId;
                o4.nOption = si.getValue(indieDamR, slv);
                o4.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o4);
                break;
            case SLIPSTREAM_SUIT:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(DEXR, o1);
                o2.nOption = si.getValue(indiePMdR, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePMdR, o2);
                break;
            case HIGH_GRAVITY:
                o1.rOption = skillId;
                o1.nOption = si.getValue(prop, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieStance, o1);
                o2.rOption = skillId;
                o2.nOption = si.getValue(indieAllStat, slv);
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieAllStat, o2);
                o3.rOption = skillId;
                o3.nOption = si.getValue(indieCr, slv);
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieCr, o3);
                o4.rOption = skillId;
                o4.nOption = si.getValue(indieBDR, slv);
                o4.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBDR, o4);
                break;
            case BIONIC_RESILIENCE:
                var skillTime = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieAsrR, new Option(si.getValue(asrR, slv), BIONIC_RESILIENCE, skillTime));
                tsm.putCharacterStatValue(IndieTerR, new Option(si.getValue(terR, slv), BIONIC_RESILIENCE, skillTime));
                tsm.putCharacterStatValue(IndiePAD, new Option(si.getValue(indiePad, slv), BIONIC_RESILIENCE, skillTime));
                break;
            case TURRET_DEPLOYMENT: //Stationary, Attacks
                summon = Summon.getSummonByNoCTS(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Stop);
                field.spawnSummonAndRemoveOld(summon);
                break;
            case GRAVITY_CRUSH:
                Position position = inPacket.decodePosition();
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setPosition(position);

                field.spawnSummonAndRemoveOld(summon);
                break;
            case SUBORBITAL_SUMMON_BIG:
                for (int summonSkillId : suborbitalSummons) {
                    summon = Summon.getSummonBy(chr, summonSkillId, slv);
                    summon.setMoveAbility(MoveAbility.Walk);
                    summon.setAssistType(AssistType.GroupAttack);
                    summon.setHide(summonSkillId == skillId);
                    field.spawnSummonAndRemoveOld(summon);
                }
                break;
            case ANTI_GRAVITY_CYCLE_SUMMON:
                // Unk218_708
                // RideVehicleExpire
                // NewFlying
                // Cyclone
                // IndiePMdR
                TemporaryStatBase tsb = tsm.getTSBByTSIndex(TSIndex.RideVehicleExpire);
                var tOption = si.getValue(time, slv);

                o1.nOption = si.getValue(s2, slv);
                o1.rOption = skillId;
                o1.tOption = tOption;
                tsm.putCharacterStatValue(IndiePMdR, o1);

                o2.nOption = si.getVehicleId(); // 1932677
                o2.rOption = skillId;
                o2.tOption = tOption;
                tsm.putCharacterStatValue(Cyclone, o2);

                o3.nOption = 1;
                o3.rOption = skillId;
                o3.tOption = tOption;
                tsm.putCharacterStatValue(NewFlying, o3);

                o4.nOption = si.getValue(s, slv);
                o4.rOption = skillId;
                o4.tOption = tOption;
                o4.xOption = si.getValue(s, slv);
                tsm.putCharacterStatValue(Unk218_708, o4);

                tsb.setNOption(si.getVehicleId()); // 1932677
                tsb.setROption(skillId);
                tsb.setDynamicTermSet(true);
                tsb.setExpireTerm(tOption);
                tsm.putCharacterStatValue(RideVehicleExpire, tsb.getOption());
                break;
        }
        tsm.sendSetStatPacket();
    }

    @Override
    public void handleRemoveCTS(CharacterTemporaryStat cts, Option option) {
        if (option.rOption == ANTI_GRAVITY_CYCLE_SUMMON) {
            chr.getTemporaryStatManager().removeStat(RideVehicleExpire);
        }
        super.handleRemoveCTS(cts, option);
    }

    @Override
    public void handleKeyDownSkill(Char chr, int skillID, InPacket inPacket) {
        switch (skillID) {
            case BACKUP_BEATDOWN:
                var opt = new Option(300, skillID, 0);
                chr.getTemporaryStatManager().putCharacterStatValue(KeyDownMoving, opt);
                chr.getTemporaryStatManager().sendSetStatPacket();
                break;
        }
        super.handleKeyDownSkill(chr, skillID, inPacket);
    }

    @Override
    public void handleCancelKeyDownSkill(Char chr, int skillID) {
        switch (skillID) {
            case BACKUP_BEATDOWN:
                chr.getTemporaryStatManager().removeStatsBySkill(skillID);
                break;
        }
        super.handleCancelKeyDownSkill(chr, skillID);
    }

    // Hit related methods ---------------------------------------------------------------------------------------------

    @Override
    public void setCharCreationStats(Char chr) {
        super.setCharCreationStats(chr);
        Item item = ItemData.getItemDeepCopy(1352820); // Secondary
        item.setBagIndex(BodyPart.Shield.getVal());
        chr.getEquippedInventory().addItem(item);

    }

    @Override
    public void handleLevelUp() {
        super.handleLevelUp();
        if (chr.getLevel() >= SkillChangeConstants.CORE_AURA_MINIMUM_LEVEL && chr.getLevel() % SkillChangeConstants.CORE_AURA_EVERY_X_LEVELS == 0 &&
                chr.getAccount() != null && chr.getAccount().getCoreAura() != null) {
            chr.getAccount().getCoreAura().updateStats(chr);
            chr.write(WvsContext.updateDBChar(chr, DBChar.CoreAura));
        }
    }
}
