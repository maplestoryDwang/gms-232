package net.swordie.ms.client.jobs;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.ExtendSP;
import net.swordie.ms.client.character.avatar.AvatarLook;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.skills.*;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.MobAttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.constants.*;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.enums.Stat;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.*;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 12/14/2017.
 */
public class Zero extends Job {

    public static final int DUAL_COMBAT = 100001270;
    public static final int DUAL_COMBAT_2 = 100000282;
    public static final int TEMPLE_RECALL = 100001262;
    public static final int RESOLUTION_TIME = 100000279;
    public static final int BURST_JUMP = 100001265;
    public static final int BURST_STEP = 100001266;
    public static final int BURST_LEAP = 100001269;


    public static final int DIVINE_FORCE = 100001263; //Aura (Unlimited Duration)
    public static final int DIVINE_SPEED = 100001264; //Aura (Unlimited Duration)
    public static final int RHINNES_PROTECTION = 100001268; //Buff

    public static final int TIME_HOLDING = 100001274;
    public static final int TIME_HOLDING_2 = 100001281;
    public static final int TIME_DISTORTION = 100001261;
    public static final int REWIND = 100001272;
    public static final int FOCUSED_TIME = 100001005;
    public static final int DOUBLE_TIME = 100000267;
    public static final int DOUBLE_TIME_ALPHA = 100000276;
    public static final int DOUBLE_TIME_BETA = 100000277;
    public static final int SHADOW_RAIN = 100001283;


    public static final int AIR_RIOT = 101000101; //Special Attack (Stun Debuff)
    public static final int THROWING_WEAPON = 101100100; //Special Attack (Throw Sword)
    public static final int ADV_THROWING_WEAPON = 101100101; //Special Attack (Throw Sword)
    public static final int STORM_BREAK = 101120202;
    public static final int STORM_BREAK_INIT = 101120203;
    public static final int ADV_EARTH_BREAK = 101120104;
    public static final int ADV_STORM_BREAK = 101120204;
    public static final int ADV_EARTH_BREAK_SHOCK_INIT = 101120105; //Attack to initialise the Shockwave
    public static final int ADV_STORM_BREAK_SHOCK_INIT = 101120205; //Attack to initialise the Shockwave
    public static final int ADV_EARTH_BREAK_SHOCKWAVE = 101120106; //Tile Skill
    public static final int ADV_STORM_BREAK_SHOCKWAVE = 101120206; //Tile Skill
    public static final int ADV_SPIN_CUTTER = 101100201;
    public static final int ADV_ROLLING_ASSAULT = 101110203;
    public static final int SPIN_DRIVER = 101110100;
    public static final int WHEEL_WIND = 101110101;
    public static final int ADV_WHEEL_WIND = 101110102;
    public static final int DIVINE_LEER = 101120207;
    public static final int CRITICAL_BIND = 101120110;
    public static final int IMMUNE_BARRIER = 101120109;
    public static final int ARMOR_SPLIT = 101110103;
    public static final int GRAND_ROLLING_CROSS = 101110200;

    // V
    public static final int CHRONO_BREAK = 400011015; // Slow Debuff
    public static final int CHRONO_BREAK_FREEZE_MTS = 400011024; // Freeze Debuff
    public static final int CHRONO_BREAK_AFTER_HIT = 400011025;

    public static final int TWIN_BLADES_OF_TIME_START = 400011039;
    public static final int TWIN_BLADES_OF_TIME_START_2 = 400011043;
    public static final int TWIN_BLADES_OF_TIME_START_3 = 400011040;
    public static final int TWIN_BLADES_OF_TIME_START_4 = 400011044;
    public static final int TWIN_BLADES_OF_TIME_START_5 = 400011041;
    public static final int TWIN_BLADES_OF_TIME_START_6 = 400011045;
    public static final int TWIN_BLADES_OF_TIME_START_7 = 400011042;
    public static final int TWIN_BLADES_OF_TIME_START_8 = 400011046;

    public static final int SHADOW_FLASH_ALPHA_TILE = 400011098;
    public static final int SHADOW_FLASH_ALPHA_ATTACK = 400011099;
    public static final int SHADOW_FLASH_BETA_TILE = 400011100;
    public static final int SHADOW_FLASH_BETA_ATTACK = 400011101;

    public static final int EGO_WEAPON_ALPHA = 400011134; // CTS 648 (sniffed in v220.3)
    public static final int EGO_WEAPON_BETA = 400011135;

    private static final int[] addedSkills = new int[]{
            DUAL_COMBAT,
            DUAL_COMBAT_2,
            TEMPLE_RECALL,
            RESOLUTION_TIME,
            BURST_STEP,
            BURST_JUMP,
            BURST_LEAP,
    };

    private static final int[] addedSkillsWithoutCurrentLevel = new int[] {
            AIR_RIOT,
            ADV_SPIN_CUTTER,
            GRAND_ROLLING_CROSS,
            ADV_ROLLING_ASSAULT,
            ADV_STORM_BREAK,
            ADV_THROWING_WEAPON,
            ADV_WHEEL_WIND,
            ADV_EARTH_BREAK,
    };

    private int doubleTimePrevSkill = 0;

    public static List<Integer> getBetaSkills = Arrays.asList(
            101001100,  // Rising Slash
            101000100,  // Air Raid
            101000101,  // Air Riot
            101000102,  // Air Riot
            101101100,  // Flash Cut
            101100100,  // Throwing Weapon
            101100101,  // Adv. Throwing Weapo
            101111100,  // Spin Driver
            101110101,  // Wheel Wind
            101110102,  // Adv Wheel Wind
            101110104,  // Adv Blade Tempest
            101121100,  // Giga Crash
            101120100,  // Falling Star
            101120101,  // Falling Star
            101120102,  // Earth Break
            101120103,  // Groundbreaker
            101120104   // Adv Earth Break
    );

    public static List<Integer> getAlphaSkills = Arrays.asList(
            101001200,  // Moon Strike
            101000200,  // Piercing Thrust
            101000201,  // Shadow Strike
            101000202,  // Shadow Strike
            101101200,  // Flash Assault
            101100200,  // Spin Cutter
            101100201,  // Adv Spin Cutter
            101100202,  // Adv Blade Ring
            101110200,  // Grand Rolling Cross
            101110201,  // Grand Rolling Cross
            101111200,  // Rolling Cross
            101110202,  // Rolling Assault
            101110203,  // Advanced Rolling Assault
            101110204,  // Advanced Rolling Assault
            101120200,  // Wind Cutter
            101120201,  // Wind Striker
            101120202,  // Storm Break
            101120203,  // Storm Break
            101120204,  // Advanced Storm Break
            101120206,  // Severe Storm Break
            101121101,  // Hurricane Wind
            101121200   // Wind Cutter
    );

    public static boolean isAlphaSkill(int skillID) {
        return getAlphaSkills.contains(skillID);
    }

    public static boolean isBetaSkill(int skillID) {
        return getBetaSkills.contains(skillID);
    }

    public static int getAlphaOrBetaSkill(int skillID) {
        switch (skillID) {
            case 101001200: //Moon Strike
            case 101000200: //Piercing Thrust
            case 101000201: //Shadow Strike
            case 101000202: //Shadow Strike

            case 101101200: //Flash Assault
            case 101100200: //Spin Cutter
            case 101100201: //Adv Spin Cutter
            case 101100202: //Adv Blade Ring

            case 101110200: //Grand Rolling Cross
            case 101110201: //Grand Rolling Cross
            case 101111200: //Rolling Cross
            case 101110202: //Rolling Assault
            case 101110203: //Advanced Rolling Assault
            case 101110204: //Advanced Rolling Assault

            case 101120200: //Wind Cutter
            case 101120201: //Wind Striker
            case 101120202: //Storm Break
            case 101120203: //Storm Break
            case 101120204: //Advanced Storm Break
            case 101120205: //Severe Storm Break (Tile)
            case 101120206: //Severe Storm Break
            case 101121101: //Hurricane Wind
            case 101121200: //Wind Cutter
                return 1; //Alpha skills

            case 101001100: //Rising Slash
            case 101000100: //Air Raid
            case 101000101: //Air Riot
            case 101000102: //Air Riot

            case 101101100: //Flash Cut
            case 101100100: //Throwing Weapon
            case 101100101: //Adv. Throwing Weapon

            case 101111100: //Spin Driver
            case 101110101: //Wheel Wind
            case 101110102: //Adv Wheel Wind
            case 101110104: //Adv Blade Tempest

            case 101121100: //Giga Crash
            case 101120100: //Falling Star
            case 101120101: //Falling Star
            case 101120102: //Earth Break
            case 101120103: //Groundbreaker
            case 101120104: //Adv Earth Break
            case 101120105: //Mega Groundbreaker (Tile)
                return 2; //Beta skills

        }
        return skillID; // no original skill linked with this one
    }

    private int getOriginalByStageSkill(int skillID) {
        switch (skillID) {
            case 101121100:
            case 101120100:
            case 101120101:
            case 101120102:
            case 101120103:
            case 101120104:
                return 101121100;
            case 101001100:
            case 101000100:
            case 101000101:
            case 101000102:
                return 101001100;
            case 101101100:
            case 101100100:
            case 101100101:
                return 101101100;
            case 101111100:
            case 101110101:
            case 101110102:
            case 101110104:
                return 101111100;

            case 101001200:
            case 101000200:
            case 101000201:
            case 101000202:
                return 101001200;
            case 101101200:
            case 101100200:
            case 101100201:
            case 101100202:
                return 101101200;
            case 101110200:
            case 101110201:
            case 101111200:
            case 101110202:
            case 101110203:
            case 101110204:
                return 101111200;
            case 101120200:
            case 101120201:
            case 101120202:
            case 101120203:
            case 101120204:
            case 101120205:
            case 101120206:
            case 101121101:
            case 101121200:
                return 101121200;
        }
        return 0;
    }

    public Zero(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id)) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setCurrentLevel(skill.getMasterLevel());
                    chr.addSkill(skill);
                }
            }
            for (int id : addedSkillsWithoutCurrentLevel) {
                if (!chr.hasSkill(id)) {
                    chr.addSkill(SkillData.getSkillDeepCopyById(id));
                }
            }
            if (chr.getZeroInfo() == null) {
                chr.initZeroInfo();
            }
        }
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isZero(id);
    }

    private boolean isBeta() {
        return chr.getZeroInfo().isZeroBetaState();
    }

    @Override
    public void handleLevelUp() {

        // Link Skill
        chr.giveLinkSkillToAccount();

        short level = chr.getLevel();
        chr.addStat(Stat.mhp, 500);
        chr.addStat(Stat.ap, 5);
        int sp = 3;
        if (level > 100 && (level % 10) % 3 == 0) {
            sp = 6; // double sp on levels ending in 3/6/9
        }
        ExtendSP esp = chr.getAvatarData().getCharacterStat().getExtendSP();
        esp.setSpToJobLevel(1, esp.getSpByJobLevel((byte) 1) + sp); // Alpha
        esp.setSpToJobLevel(2, esp.getSpByJobLevel((byte) 2) + sp); // Beta
        Map<Stat, Object> stats = new HashMap<>();
        stats.put(Stat.mhp, chr.getStat(Stat.mhp));
        stats.put(Stat.mmp, chr.getStat(Stat.mmp));
        stats.put(Stat.ap, (short) chr.getStat(Stat.ap));
        stats.put(Stat.sp, chr.getAvatarData().getCharacterStat().getExtendSP());
        chr.write(WvsContext.statChanged(stats));

        switch (level) {
            case 100:
                chr.addSkill(DOUBLE_TIME, 1, 1);
                break;
            case 110:
                chr.addSkill(TIME_DISTORTION, 1, 1);
                chr.addSkill(ADV_STORM_BREAK, 0, 30);
                chr.addSkill(ADV_EARTH_BREAK, 0, 30);
                break;
            case 120:
                chr.addSkill(TIME_HOLDING, 1, 1);
                break;
            case 140:
                chr.addSkill(REWIND, 1, 1);
                break;
            case 170:
                chr.addSkill(SHADOW_RAIN, 1, 1);
                break;
            case 200:
                chr.addSkill(FOCUSED_TIME, 1, 1);
                break;
        }
    }

    @Override
    public void setCharCreationStats(Char chr) {
        AvatarLook mainLook = chr.getAvatarData().getAvatarLook();
        chr.getAvatarData().setZeroAvatarLook(mainLook.deepCopy());
        AvatarLook zeroLook = chr.getAvatarData().getZeroAvatarLook();
        mainLook.getHairEquips().remove(Integer.valueOf(1562000));
        zeroLook.getHairEquips().remove(Integer.valueOf(1572000));
        zeroLook.setWeaponId(1562000);
        zeroLook.setGender(1);
        zeroLook.setSkin(chr.getAvatarData().getAvatarLook().getSkin());
        zeroLook.setFace(21290);
        zeroLook.setHair(37623);
        zeroLook.setZeroBetaLook(true);
        CharacterStat cs = chr.getAvatarData().getCharacterStat();
        cs.setLevel(100);
        cs.setStr(518);
        cs.setDex(4);
        cs.setInt(4);
        cs.setLuk(4);
        cs.setHp(5000);
        cs.setMaxHp(5000);
        cs.setMp(100);
        cs.setMaxMp(100);
        //cs.setJob(10112);

        chr.setJob(JobConstants.JobEnum.ZERO_1.getJobId());
        chr.setJob(JobConstants.JobEnum.ZERO_2.getJobId());
        chr.setJob(JobConstants.JobEnum.ZERO_3.getJobId());
        chr.setJob(JobConstants.JobEnum.ZERO_4.getJobId());

        cs.setGender(2);
        cs.setPosMap(GameConstants.VIDEO_FIELD);

        Item whitePot = ItemData.getItemDeepCopy(2000002);
        whitePot.setQuantity(100);
        chr.addItemToInventory(whitePot);
        Item hyperTp = ItemData.getItemDeepCopy(5040004);
        chr.addItemToInventory(hyperTp);

        ExtendSP esp = chr.getAvatarData().getCharacterStat().getExtendSP();
        esp.setSpToJobLevel(1, 6); // Alpha
        esp.setSpToJobLevel(2, 6); // Beta
        Map<Stat, Object> stats = new HashMap<>();
        stats.put(Stat.mhp, chr.getStat(Stat.mhp));
        stats.put(Stat.mmp, chr.getStat(Stat.mmp));
        stats.put(Stat.ap, (short) chr.getStat(Stat.ap));
        stats.put(Stat.sp, chr.getAvatarData().getCharacterStat().getExtendSP());
        chr.write(WvsContext.statChanged(stats));

        chr.getQuestManager().completeQuest(QuestConstants.LAPIS_LAZULI, false);
        chr.getQuestManager().completeQuest(QuestConstants.ZERO_LAST_QUEST, false);
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
            slv = (byte) skill.getCurrentLevel();
            skillID = skill.getSkillId();
        }

        if (getAlphaOrBetaSkill(skillID) == 1) {
            if (!SkillChangeConstants.DOUBLE_TIME_COUNTER_REQUIRES_MOB_HITS || hasHitMobs) { // [Zero] Custom Skill Change
                incrementDoubleTimeAlpha(skillID);
            }

            if (hasHitMobs) {
                applyDivineLeerOnMob(attackInfo, skillID);

                // Ego Weapon
                if (chr.hasSkill(EGO_WEAPON_ALPHA) && !chr.hasSkillOnCooldown(EGO_WEAPON_ALPHA)) {
                    egoWeaponAlpha(tsm);
                }
            }
        }

        if (getAlphaOrBetaSkill(skillID) == 2) {
            if (!SkillChangeConstants.DOUBLE_TIME_COUNTER_REQUIRES_MOB_HITS || hasHitMobs) { // [Zero] Custom Skill Change
                incrementDoubleTimeBeta(skillID);
            }

            if (hasHitMobs) {
                applyCriticalBindOnMob(attackInfo);
                applyArmorSplitOnMob(attackInfo);

                // Ego Weapon
                if (chr.hasSkill(EGO_WEAPON_ALPHA) && !chr.hasSkillOnCooldown(EGO_WEAPON_BETA)) {
                    egoWeaponBeta();
                }
            }
        }

        Field field = chr.getField();
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        Option o5 = new Option();
        switch (attackInfo.skillId) {
            case AIR_RIOT:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    if (Util.succeedProp(si.getValue(prop, slv))) {
                        Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                        if (mob == null) {
                            continue;
                        }
                        MobTemporaryStat mts = mob.getTemporaryStat();
                        mts.addStatOptionsAndBroadcast(chr, MobStat.Stun, o1);
                    }
                }
                break;
            case ADV_EARTH_BREAK_SHOCK_INIT:
                slv = (byte) chr.getSkill(ADV_EARTH_BREAK).getCurrentLevel();
                SkillInfo fci = SkillData.getSkillInfoById(ADV_EARTH_BREAK);
                AffectedArea aa = AffectedArea.getPassiveAA(chr, ADV_EARTH_BREAK, slv);
                aa.setPosition(chr.getPosition());
                aa.setSkillID(ADV_EARTH_BREAK);
                aa.setRect(aa.getPosition().getRectAround(fci.getRects().get(0)));
                aa.setDuration((fci.getValue(v, slv) * 1000) * SkillChangeConstants.ADVANCED_TILES_DURATION_MULTIPLIER); // [Zero] Custom Skill Change
                chr.getField().spawnAffectedArea(aa);
                break;
            case CHRONO_BREAK:
                o4.nOption = si.getValue(y, slv); // Speed
                o4.rOption = skillID;
                o4.tOption = 6;

                o5.nOption = 1; // Speed
                o5.rOption = CHRONO_BREAK_FREEZE_MTS;
                o5.tOption = si.getValue(w, slv);

                Map<Integer, Long> mobsHit = new HashMap<>();
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = mai.mob;
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.addMobSkillOptionsAndBroadCast(MobStat.Speed, o4);
                    mts.addMobSkillOptionsAndBroadCast(MobStat.Freeze, o5);
                    mobsHit.put(mai.mobId, ((long) ((si.getValue(q2, slv) * mai.totalDamage) / 100D)));
                }

                o1.nOption = si.getValue(indieBooster, slv);
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                o2.nOption = si.getValue(indiePMdR, slv);
                o2.rOption = skillID;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePMdR, o2);
                o3.nOption = 0; // TODO si.getValue(indieCooltimeReduce, slv);
                o3.rOption = skillID;
                o3.tOption = si.getValue(time, slv);
                o3.oOption = mobsHit;
                tsm.putCharacterStatValue(IndieCooltimeReduce, o3);
                tsm.sendSetStatPacket();
                break;
            case SHADOW_FLASH_ALPHA_TILE:
            case SHADOW_FLASH_BETA_TILE:
                si = SkillData.getSkillInfoById(SHADOW_FLASH_ALPHA_TILE);
                slv = (byte) chr.getSkillLevel(SHADOW_FLASH_ALPHA_TILE);
                aa = AffectedArea.getPassiveAA(chr, attackInfo.skillId, slv);
                aa.setPosition(chr.getPosition());
                aa.setRect(aa.getPosition().getRectAround(si.getFirstRect()));
                aa.setDuration(si.getValue(cooltime, slv) * 1000);
                chr.getField().spawnAffectedArea(aa);
                chr.addSkillCoolTime(attackInfo.skillId, si.getValue(cooltime, slv) * 1000);
                break;
            case SHADOW_FLASH_ALPHA_ATTACK:
            case SHADOW_FLASH_BETA_ATTACK:
                int tileSkill = attackInfo.skillId == SHADOW_FLASH_ALPHA_ATTACK ? SHADOW_FLASH_ALPHA_TILE : SHADOW_FLASH_BETA_TILE;
                AffectedArea shadowFlashAA = chr.getField().getAffectedAreas().stream()
                        .filter(sfaa -> sfaa.getSkillID() == tileSkill && sfaa.getOwner() == chr)
                        .findFirst()
                        .orElse(null);
                if (shadowFlashAA == null) {
                    return;
                }
                chr.getField().removeLife(shadowFlashAA);
                break;
            case TWIN_BLADES_OF_TIME_START_2:
            case TWIN_BLADES_OF_TIME_START_3:
            case TWIN_BLADES_OF_TIME_START_4:
            case TWIN_BLADES_OF_TIME_START_5:
            case TWIN_BLADES_OF_TIME_START_6:
            case TWIN_BLADES_OF_TIME_START_7:
                chr.addSkillCoolTime(skillID, 100000);
                chr.write(UserLocal.skillCooltimeSetM(DOUBLE_TIME, 0));
                break;
            case SHADOW_RAIN:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Stun, o1);
                }
                break;
            case EGO_WEAPON_BETA:
                if (attackInfo.affectedAreaObjId > 0) {
                    field.removeLife(attackInfo.affectedAreaObjId);
                }
                break;
        }

        if (chr.hasSkill(DOUBLE_TIME) && attackInfo.zeroTag == 0 && attackInfo.grenadeId == 0 && attackInfo.summonID == 0) {
            doubleTime(attackInfo.skillId);
        }

        super.handleAttack(c, attackInfo);
    }

    private void egoWeaponAlpha(TemporaryStatManager tsm) {
        Option o = new Option(1, EGO_WEAPON_ALPHA, 1300);
        o.xOption = 1;
        o.yOption = 1;
        tsm.putCharacterStatValue(EgoWeaponAlpha, o);
        tsm.sendSetStatPacket();
    }

    private void egoWeaponBeta() {
        chr.write(UserLocal.egoWeapon(EGO_WEAPON_BETA, chr.getPosition()));
    }

    public void zeroTag() {
        chr.addSkillCoolTime(DUAL_COMBAT, 3000);
        chr.swapZeroState();
        chr.getField().broadcastPacket(UserRemote.zeroTag(chr, chr.isZeroBeta()), chr);
    }

    private void doubleTime(int skillID) {
        List<Integer> cooltimeSkills = new ArrayList<>();
        if (isBetaSkill(skillID)) {
            cooltimeSkills = getBetaSkills.stream().filter(s -> chr.hasSkillOnCooldown(s) && getOriginalByStageSkill(s) != 0 && getOriginalByStageSkill(s) != getOriginalByStageSkill(skillID)).collect(Collectors.toList());
        } else if (isAlphaSkill(skillID)) {
            cooltimeSkills = getAlphaSkills.stream().filter(s -> chr.hasSkillOnCooldown(s) && getOriginalByStageSkill(s) != 0 && getOriginalByStageSkill(s) != getOriginalByStageSkill(skillID)).collect(Collectors.toList());
        }

        SkillInfo si = SkillData.getSkillInfoById(DOUBLE_TIME);
        int cooltimeR = si.getValue(SkillStat.x, 1); // 4000

        SkillInfo ssi = SkillData.getSkillInfoById(skillID);
        if (ssi != null) {
            int linkSkill = getOriginalByStageSkill(ssi.getAssistSkillLink());
            if (linkSkill != 0 && chr.hasSkillOnCooldown(linkSkill)) {
                cooltimeSkills.add(linkSkill);
            }
        }

        if (cooltimeSkills.size() > 0) {
            chr.reduceSkillCoolTime(cooltimeSkills, cooltimeR);
        }
    }

    private void applyDivineLeerOnMob(AttackInfo ai, int skillID) {
        Skill skill = chr.getSkill(DIVINE_LEER);
        if (skill == null) {
            return;
        }
        int slv = skill.getCurrentLevel();
        SkillInfo si = SkillData.getSkillInfoById(DIVINE_LEER);
        for (MobAttackInfo mai : ai.mobAttackInfo) {
            if (Util.succeedProp(si.getValue(prop, slv))) {
                Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                if (mob == null) {
                    continue;
                }
                mob.getTemporaryStat().createAndAddBurnedInfo(chr, skill);
            }
        }
    }

    private void applyCriticalBindOnMob(AttackInfo ai) {
        Skill skill = chr.getSkill(CRITICAL_BIND);
        if (skill == null) {
            return;
        }

        int slv = skill.getCurrentLevel();
        SkillInfo si = SkillData.getSkillInfoById(CRITICAL_BIND);
        var tOpt = si.getValue(time, slv);
        Option o = new Option(1, CRITICAL_BIND, tOpt);
        o.mobStunSkillCooldown = si.getValue(v, slv);
        for (MobAttackInfo mai : ai.mobAttackInfo) {
            if (Util.succeedProp(si.getValue(prop, slv))) {
                Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                if (mob == null) {
                    continue;
                }
                MobTemporaryStat mts = mob.getTemporaryStat();
                mts.addStatOptionsAndBroadcast(chr, MobStat.Freeze, o);
            }
        }
    }

    private void applyArmorSplitOnMob(AttackInfo ai) {
        Skill skill = chr.getSkill(ARMOR_SPLIT);
        if (skill == null) {
            return;
        }
        Option o = new Option();
        int slv = skill.getCurrentLevel();
        SkillInfo si = SkillData.getSkillInfoById(ARMOR_SPLIT);
        int amount = 1;
        o.tOption = si.getValue(time, slv);
        o.rOption = skill.getSkillId();
        for (MobAttackInfo mai : ai.mobAttackInfo) {
            if (Util.succeedProp(si.getValue(prop, slv))) {
                Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                if (mob == null) {
                    continue;
                }
                MobTemporaryStat mts = mob.getTemporaryStat();

                if (mts.hasCurrentMobStat(MobStat.MultiPMDR)) {
                    amount = mts.getCurrentOptionsByMobStat(MobStat.MultiPMDR).cOption;
                    if (amount < si.getValue(x, slv)) {
                        amount++;
                    }
                }
                o.nOption = si.getValue(y, slv) * amount;
                o.cOption = amount;
                mts.addStatOptionsAndBroadcast(chr, MobStat.MultiPMDR, o);
            }
        }
    }

    private void incrementDoubleTimeAlpha(int skillID) {
        if (chr.hasSkill(DOUBLE_TIME)) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            Option o = new Option();
            Option o1 = new Option();
            SkillInfo si = SkillData.getSkillInfoById(DOUBLE_TIME_ALPHA);
            int amount = 1;
            if (tsm.hasStat(TimeFastABuff)) {
                if (doubleTimePrevSkill == skillID) {
                    return;
                }
                amount = tsm.getOption(TimeFastABuff).nOption;
                if (amount < 10) {
                    amount++;
                }
            }
            doubleTimePrevSkill = skillID;
            o.nOption = amount;
            o.rOption = DOUBLE_TIME_ALPHA;
            o.tOption = 20;
            tsm.putCharacterStatValue(TimeFastABuff, o);
            if (tsm.hasStat(BlessingVSkill) && chr.hasSkill(Job.TRANSCENDENCE_BLESSING)) {
                SkillInfo blessingSI = SkillData.getSkillInfoById(Job.TRANSCENDENCE_BLESSING);
                int slv = chr.getSkillLevel(Job.TRANSCENDENCE_BLESSING);
                o1.nOption = blessingSI.getValue(x, slv);
                o1.rOption = TRANSCENDENCE_BLESSING_3; // Used for NextAttackEnhance
                o1.tOption = 2;
                tsm.putCharacterStatValue(NextAttackEnhance, o1);
            }
            tsm.sendSetStatPacket();
            chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.skillUse(DOUBLE_TIME_ALPHA, chr.getLevel(), chr.getSkillLevel(DOUBLE_TIME), 0)), chr);
        }
    }

    private void incrementDoubleTimeBeta(int skillID) {
        if (chr.hasSkill(DOUBLE_TIME)) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            Option o = new Option();
            Option o1 = new Option();
            Option o2 = new Option();
            SkillInfo si = SkillData.getSkillInfoById(DOUBLE_TIME_BETA);
            int amount = 1;
            if (tsm.hasStat(TimeFastBBuff)) {
                if (doubleTimePrevSkill == skillID) {
                    return;
                }
                amount = tsm.getOption(TimeFastBBuff).nOption;
                if (amount < 10) {
                    amount++;
                }
            }
            doubleTimePrevSkill = skillID;
            o.nOption = amount;
            o.rOption = DOUBLE_TIME_BETA;
            o.tOption = 20;
            tsm.putCharacterStatValue(TimeFastBBuff, o);
            if (o.nOption == 10) {
                o1.nOption = -1;
                o1.rOption = DOUBLE_TIME_BETA;
                o1.tOption = 20;
                tsm.putCharacterStatValue(IndieBooster, o1);
            }
            if (tsm.hasStat(BlessingVSkill) && chr.hasSkill(Job.TRANSCENDENCE_BLESSING)) {
                SkillInfo blessingSI = SkillData.getSkillInfoById(Job.TRANSCENDENCE_BLESSING);
                int slv = chr.getSkillLevel(Job.TRANSCENDENCE_BLESSING);
                o2.nOption = blessingSI.getValue(x, slv);
                o2.rOption = TRANSCENDENCE_BLESSING_3; // Used for NextAttackEnhance
                o2.tOption = 2;
                tsm.putCharacterStatValue(NextAttackEnhance, o2);
            }
            tsm.sendSetStatPacket();
            chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.skillUse(DOUBLE_TIME_BETA, chr.getLevel(), chr.getSkillLevel(DOUBLE_TIME), 0)), chr);
        }
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
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        Option o5 = new Option();
        Option o6 = new Option();
        Option o7 = new Option();
        Field field = chr.getField();
        switch (skillID) {
            case THROWING_WEAPON:
            case ADV_THROWING_WEAPON:
                Summon summon = Summon.getSummonBy(chr, skillID, slv);
                summon.setFlyMob(true);
                summon.setMoveAbility(MoveAbility.FixVMove);
                chr.getField().spawnSummonAndRemoveOld(summon);
                break;
            case TIME_DISTORTION:
                AffectedArea aa = AffectedArea.getPassiveAA(chr, skillID, slv);
                aa.setPosition(chr.getPosition());
                aa.setRect(aa.getPosition().getRectAround(si.getRects().get(0)));
                aa.setDelay((short) 5);
                chr.getField().spawnAffectedArea(aa);
                break;
            case DIVINE_FORCE:
                o1.nOption = slv;
                o1.rOption = skillID;
                o1.xOption = chr.getId();
                o1.bOption = 0; // Owner
                tsm.putCharacterStatValue(DivineForce, o1);

                o2.rOption = skillID;
                o2.nOption = si.getValue(indieAsrR, slv);
                tsm.putCharacterStatValue(IndieAsrR, o2); //Indie
                o3.rOption = skillID;
                o3.nOption = si.getValue(indieMad, slv);
                tsm.putCharacterStatValue(IndieMAD, o3); //Indie
                o4.rOption = skillID;
                o4.nOption = si.getValue(indiePad, slv);
                tsm.putCharacterStatValue(IndiePAD, o4); //Indie
                o5.rOption = skillID;
                o5.nOption = si.getValue(indiePdd, slv);
                tsm.putCharacterStatValue(IndieDEF, o5); //Indie
                o6.rOption = skillID;
                o6.nOption = si.getValue(indieTerR, slv);
                tsm.putCharacterStatValue(IndieTerR, o6); //Indie
                break;
            case DIVINE_SPEED:
                o1.nOption = slv;
                o1.rOption = skillID;
                o1.xOption = chr.getId();
                o1.bOption = 0; // Owner
                tsm.putCharacterStatValue(DivineSpeed, o1);

                o2.rOption = skillID;
                o2.nOption = SkillChangeConstants.DIVINE_SPEED_BOOSTER_VALUE; // [Zero] Custom Skill Change
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o2); //Indie
                o3.rOption = skillID;
                o3.nOption = si.getValue(indieJump, slv);
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieJump, o3); //Indie
                o4.rOption = skillID;
                o4.nOption = si.getValue(indieSpeed, slv);
                o4.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieSpeed, o4); //Indie
                break;

            case TIME_HOLDING:
                Effect effect = Effect.skillUse(skillID, chr.getLevel(), slv, 0);
                chr.write(UserPacket.effect(effect));
                field.broadcastPacket(UserRemote.effect(chr.getId(), effect), chr);

                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieNotDamaged, o1, true);
                o2.nOption = 1;
                o2.rOption = skillID;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieInfiniteMDF, o2);
                tsm.sendSetStatPacket();

                if (chr.getLevel() >= 200) {
                    o3.nOption = si.getValue(y, slv);
                    o3.rOption = TIME_HOLDING_2;
                    o3.tOption = si.getValue(x, slv);
                    tsm.putCharacterStatValue(IndieDamR, o3);
                }

                for (var skillId : chr.getSkillCoolTimes().keySet()) {
                    if (!SkillConstants.isNoCooltimeResetSkill(skillID)) {
                        chr.resetSkillCoolTime(skillId);
                    }
                }
                break;
            case REWIND:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(ReviveOnce, o1, true);
                break;
            case FOCUSED_TIME:
                o1.rOption = skillID;
                o1.nOption = 4;
                o1.tOption = 2400;
                tsm.putCharacterStatValue(IndiePADR, o1); //Indie
                o2.rOption = skillID;
                o2.nOption = 4;
                o2.tOption = 2400;
                tsm.putCharacterStatValue(IndieMADR, o2); //Indie
                break;
            case TWIN_BLADES_OF_TIME_START:
                o1.rOption = skillID;
                o1.nOption = 1;
                o1.tOption = 15;
                tsm.putCharacterStatValue(IndieKeyDownTime, o1, true);
                tsm.putCharacterStatValue(IndieNotDamaged, o1, true);
                break;
            case CHRONO_BREAK:
                o1.nOption = si.getValue(y, slv);
                o1.rOption = skillID;
                o1.tOption = 6;

                chr.write(UserLocal.skillCooltimeSetM(-skillID, 0));
                chr.write(UserLocal.skillCooltimeSetM(-skillID, 500));

                int size = inPacket.decodeByte();
                for (int i = 0; i < size; i++) {
                    int mobId = inPacket.decodeInt();

                    Life life = field.getLifeByObjectID(mobId);
                    if (!(life instanceof Mob)) {
                        continue;
                    }
                    Mob mob = (Mob) life;
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.addMobSkillOptionsAndBroadCast(MobStat.Speed, o1);
                }
                break;
            case EGO_WEAPON_BETA:
                si = SkillData.getSkillInfoById(EGO_WEAPON_ALPHA);
                var aaSize = inPacket.decodeInt(); // size
                var delay = Util.getRandom(3, 9);
                for (int i = 0; i < aaSize; i++) {
                    aa = AffectedArea.getPassiveAA(chr, skillID, slv);
                    aa.setPosition(inPacket.decodePositionInt());
                    aa.setRect(aa.getPosition().getRectAround(si.getFirstRect()));
                    aa.setDuration(60000);
                    aa.setDelay((short) delay);
                    delay += Util.getRandom(9, 15);
                    field.spawnAffectedArea(aa);
                }
                Effect eff = Effect.skillUse(skillID, chr.getLevel(), slv, 0);
                chr.write(UserPacket.effect(eff));
                chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), eff), chr);
                break;
        }
        tsm.sendSetStatPacket();
    }

    @Override
    public BypassCooldownCheckType canBypassCooldownCheck(int skillId, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        if (skillId == EGO_WEAPON_BETA) {
            chr.setSkillCooldown(skillId, (byte) sui.slv, attackInfo, sui, source);
            return BypassCooldownCheckType.BypassCheckAndCooldown;
        }
        return super.canBypassCooldownCheck(skillId, attackInfo, sui, source);
    }

    @Override
    public void handleSkillRemove(Char chr, int skillID, Map<CharacterTemporaryStat, Option> removedOptions) {
        if (skillID == TWIN_BLADES_OF_TIME_START) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            tsm.removeStatsBySkill(skillID);
        }
        super.handleSkillRemove(chr, skillID, removedOptions);
    }

    @Override
    public void handleRemoveCTS(CharacterTemporaryStat cts, Option o) {
        Field field = chr.getField();
        if (o.rOption == CHRONO_BREAK && o.oOption instanceof Map) {
            int hits = 15;
            for (Map.Entry<Integer, Long> entry : ((Map<Integer, Long>) o.oOption).entrySet()) {
                int mobId = entry.getKey();
                long damage = entry.getValue();
                Life life = field.getLifeByObjectID(mobId);
                if ((!(life instanceof Mob))) {
                    continue;
                }

                ((Mob) life).damageBySkill(chr, CHRONO_BREAK_AFTER_HIT, chr.getSkillLevel(CHRONO_BREAK), hits, damage * hits);
            }

        }

        super.handleRemoveCTS(cts, o);
    }


    // Hit related methods ---------------------------------------------------------------------------------------------

    @Override
    public void handleHit(Client c, InPacket inPacket, HitInfo hitInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill immuneBarrier = chr.getSkill(IMMUNE_BARRIER);
        if (immuneBarrier == null) {
            return;
        }
        int slv = immuneBarrier.getCurrentLevel();
        SkillInfo si = SkillData.getSkillInfoById(IMMUNE_BARRIER);
        if (Util.succeedProp(si.getValue(prop, slv))) {
            Option o = new Option(IMMUNE_BARRIER, slv);
            int max = (int) (chr.getStat(Stat.mhp) * (si.getValue(x, slv) / 100D));
            o.nOption = max;
            o.xOption = max;
            chr.getTemporaryStatManager().putCharacterStatValue(ImmuneBarrier, o);
        }
        if (tsm.hasStat(ImmuneBarrier)) {
            Option o = tsm.getOption(ImmuneBarrier);
            int maxSoakDamage = o.nOption;
            int newDamage = Math.max(hitInfo.hpDamage - maxSoakDamage, 0);
            o.nOption = maxSoakDamage - (hitInfo.hpDamage - newDamage); // update soak value
            hitInfo.hpDamage = newDamage;
            o.tOption = si.getValue(time, slv); //added duration
            tsm.putCharacterStatValue(ImmuneBarrier, o);
            tsm.sendSetStatPacket();
        }
        super.handleHit(c, inPacket, hitInfo);
    }

    public void reviveByRewind() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        chr.heal(chr.getMaxHP(), false, true);
        tsm.removeStatsBySkill(REWIND);
        tsm.sendResetStatPacket();
        chr.write(UserPacket.effect(Effect.skillSpecial(REWIND)));
        chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.skillSpecial(REWIND)));
    }

    @Override
    public void onWarp(Field oldField, Field newField) {
        super.onWarp(oldField, newField);
        chr.updateWpCoin();
    }
}
