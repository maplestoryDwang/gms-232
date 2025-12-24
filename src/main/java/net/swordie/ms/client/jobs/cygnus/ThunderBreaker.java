package net.swordie.ms.client.jobs.cygnus;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.*;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.shootobject.ShootObjectSkillInfo;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.TSIndex;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Util;

import java.util.ArrayList;

import static net.swordie.ms.client.character.skills.BypassCooldownCheckType.BypassCheckAndCooldown;
import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 12/14/2017.
 */
public class ThunderBreaker extends Noblesse {

    public static final int ELEMENTAL_HARMONY_STR = 10000246;

    public static final int LIGHTNING_ELEMENTAL = 15001022; //Buff (Charge) //Stackable Charge
    public static final int ELECTRIFIED = 15000023;

    public static final int KNUCKLE_BOOSTER = 15101022; //Buff
    public static final int LIGHTNING_BOOST = 15100025;

    public static final int GALE = 15111022; //Special Attack (Charge)
    public static final int LINK_MASTERY = 15110025; //Special Passive
    public static final int LIGHTNING_LORD = 15110026;

    public static final int ARC_CHARGER = 15121004; //Buff
    public static final int SPEED_INFUSION = 15121005; //Buff
    public static final int CALL_OF_CYGNUS_TB = 15121000; //Buff
    public static final int TYPHOON = 15120003;
    public static final int THUNDER_GOD = 15120008;

    public static final int DEEP_RISING = 15121052;
    public static final int GLORY_OF_THE_GUARDIANS_TB = 15121053;
    public static final int PRIMAL_BOLT = 15121054;

    // V Skill
    public static final int LIGHTNING_CASCADE = 400051007;
    public static final int LIGHTNING_CASCADE_ATTACK = 400051013;
    public static final int SHARK_TORPEDO = 400051016;
    public static final int TRIDENT_STRIKE = 400051044;
    public static final int TRIDENT_STRIKE_AFTER_HITS = 400051045;

    public static final int LIGHTNING_SPEAR_MULTISTRIKE_SKILL = 400051058;
    public static final int LIGHTNING_SPEAR_MULTISTRIKE_THUNDERBOLT_1 = 400051065; // UserBonusAttackRequest
    public static final int LIGHTNING_SPEAR_MULTISTRIKE_FINISHER = 400051066;
    public static final int LIGHTNING_SPEAR_MULTISTRIKE_THUNDERBOLT_2 = 400051067; // UserBonusAttackRequest
    public static final int LIGHTNING_SPEAR_MULTISTRIKE_ATTACK_1 = 400051059;
    public static final int LIGHTNING_SPEAR_MULTISTRIKE_ATTACK_2 = 400051060;
    public static final int LIGHTNING_SPEAR_MULTISTRIKE_ATTACK_3 = 400051061;
    public static final int LIGHTNING_SPEAR_MULTISTRIKE_ATTACK_4 = 400051062;
    public static final int LIGHTNING_SPEAR_MULTISTRIKE_ATTACK_5 = 400051063;
    public static final int LIGHTNING_SPEAR_MULTISTRIKE_ATTACK_6 = 400051064;



    private static final int[] addedSkills = new int[]{
            ELEMENTAL_HARMONY_STR,
            CALL_OF_CYGNUS_TB
    };

    private static final int[] lightningBuffs = new int[]{
            LIGHTNING_ELEMENTAL,
            ELECTRIFIED,
            LIGHTNING_BOOST,
            LIGHTNING_LORD,
            THUNDER_GOD,
    };

    private int lastAttackSkill = 0;
    private byte arcChargeCDCount;

    public ThunderBreaker(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id) || chr.getSkill(id).getCurrentLevel() == 0) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setCurrentLevel(skill.getMasterLevel());
                    chr.addSkill(skill);
                }
            }
        }
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isThunderBreaker(id);
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
        int chargeProp = getChargeProp();
        if (tsm.hasStat(CygnusElementSkill)
                && hasHitMobs
                && Util.succeedProp(chargeProp)
                && attackInfo.skillId != SHARK_TORPEDO
                && attackInfo.skillId != TYPHOON
                && attackInfo.skillId != GALE) {
            incrementLightningElemental(tsm);
        }
        if (skill != null) {
            linkedSkillLogic(skillID);
        }
        if (!chr.hasSkillOnCooldown(LIGHTNING_CASCADE_ATTACK) && chr.hasSkill(LIGHTNING_CASCADE) && hasHitMobs) {
            chr.write(UserLocal.lightningUnionSubAttack(skillID, chr.getSkillLevel(LIGHTNING_CASCADE)));
        }
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (attackInfo.skillId) {
            case GALE:
            case TYPHOON:
                int chargeStack = tsm.getOption(IgnoreTargetDEF).mOption;
                if ((tsm.getOptByCTSAndSkill(IndieDamR, GALE) == null) || (tsm.getOptByCTSAndSkill(IndieDamR, TYPHOON) == null)) {
                    o1.rOption = skillID;
                    o1.nOption = chargeStack * si.getValue(y, slv);
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieDamR, o1); //Indie
                    tsm.sendSetStatPacket();
                }
                break;
            case LIGHTNING_CASCADE:
            case LIGHTNING_CASCADE_ATTACK:
                si = SkillData.getSkillInfoById(LIGHTNING_CASCADE);
                slv = chr.getSkillLevel(LIGHTNING_CASCADE);
                int cooldown = si.getValue(y, slv);
                chr.addSkillCoolTime(LIGHTNING_CASCADE_ATTACK, cooldown * 1000);
                break;
            case LIGHTNING_SPEAR_MULTISTRIKE_ATTACK_1:
            case LIGHTNING_SPEAR_MULTISTRIKE_ATTACK_2:
            case LIGHTNING_SPEAR_MULTISTRIKE_ATTACK_3:
            case LIGHTNING_SPEAR_MULTISTRIKE_ATTACK_4:
            case LIGHTNING_SPEAR_MULTISTRIKE_ATTACK_5:
            case LIGHTNING_SPEAR_MULTISTRIKE_ATTACK_6:

            case LIGHTNING_SPEAR_MULTISTRIKE_FINISHER:
                si = SkillData.getSkillInfoById(LIGHTNING_SPEAR_MULTISTRIKE_SKILL);
                slv = chr.getSkillLevel(si.getSkillId());

                if (!tsm.hasStat(LightningSpearMultistrike)) {
                    o1.nOption = 1;
                    o1.rOption = si.getSkillId();
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(LightningSpearMultistrike, o1);
                    tsm.sendSetStatPacket();

                    chr.setSkillCooldown(si.getSkillId(), slv);
                } else {
                    var opt = tsm.getOption(LightningSpearMultistrike);
                    opt.nOption++;

                    if (opt.nOption < 12) {
                        tsm.updateBuff(LightningSpearMultistrike, opt);
                    } else {
                        tsm.removeStat(LightningSpearMultistrike);
                    }
                }

                if (hasHitMobs) {
                    var thunderBoltSkillId = attackInfo.skillId == LIGHTNING_SPEAR_MULTISTRIKE_FINISHER ? LIGHTNING_SPEAR_MULTISTRIKE_THUNDERBOLT_2 : LIGHTNING_SPEAR_MULTISTRIKE_THUNDERBOLT_1;
                    var thunderBoltSI = SkillData.getSkillInfoById(thunderBoltSkillId);
                    var rect = thunderBoltSI.getFirstRect();
                    chr.write(UserLocal.userBonusAttackRequest(thunderBoltSkillId, attackInfo.getMobIds(), 0, thunderBoltSI.getValue(mobCount, slv), chr.getRectAround(rect), true));
                }
                break;

            case DEEP_RISING:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = 3;
                tsm.putCharacterStatValue(IndieNotDamaged, o1, true);
                tsm.sendSetStatPacket();
                break;
        }
        super.handleAttack(c, attackInfo);
    }

    @Override
    public int alterMpCon(int mpCon, int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {

        // Thunder Breaker
        // Lightning Spear Multistrike only consumes MP on the very first attack
        if (source.isAttackRequest() && skillId >= LIGHTNING_SPEAR_MULTISTRIKE_ATTACK_1 && skillId <= LIGHTNING_SPEAR_MULTISTRIKE_THUNDERBOLT_2) {
            return 0;
        }

        // Lightning Cascade should only consume MP on the skill use request
        if (source.isAttackRequest() && (skillId == LIGHTNING_CASCADE || skillId == LIGHTNING_CASCADE_ATTACK)) {
            return 0;
        }


        return super.alterMpCon(mpCon, skillId, slv, attackInfo, sui, source);
    }

    @Override
    public BypassCooldownCheckType canBypassCooldownCheck(int skillId, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        switch (skillId) {
            case LIGHTNING_CASCADE:
                if (source.equals(SkillUseSource.AttackUseRequest)) {
                    return BypassCheckAndCooldown;
                }
                break;
        }
        return super.canBypassCooldownCheck(skillId, attackInfo, sui, source);
    }

    private void linkedSkillLogic(int skillId) {
        if (lastAttackSkill == skillId) {
            return;
        }

        SkillInfo si = SkillData.getSkillInfoById(lastAttackSkill);
        lastAttackSkill = skillId;
        if (si == null || si.getAddAttackSkills().stream().noneMatch(aas -> aas == skillId)) {
            return;
        }

        if (chr.hasSkill(TRIDENT_STRIKE)) {
            incrementTridentStrikeCounter();
        }
    }

    private void incrementTridentStrikeCounter() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = chr.getSkill(TRIDENT_STRIKE);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        int counter = 1;
        if (tsm.hasStat(TridentStrike)) {
            counter = tsm.getOption(TridentStrike).nOption;
            if (counter < si.getValue(x, slv)) {
                counter++;
            } else {
                counter = 0;
            }
        }
        giveTridentStrikeCTS(counter);
    }

    private void giveTridentStrikeCTS(int counter) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        SkillInfo si = SkillData.getSkillInfoById(TRIDENT_STRIKE);
        Option o = new Option();
        if (counter > 0) {
            o.nOption = counter;
            o.rOption = TRIDENT_STRIKE;
            tsm.putCharacterStatValue(TridentStrike, o);
        } else {
            si.getExtraSkillInfo();
            var extraSkillInfoList = new ArrayList<ExtraSkillInfo>();
            for (var extraSkillInfo : si.getExtraSkillInfo()) {
                for (var extraSkillInfo2 : extraSkillInfo.keySet()) {
                    extraSkillInfoList.add(new ExtraSkillInfo(extraSkillInfo2, chr.getPosition(), chr.isLeft(), 0, 1));
                }
            }

            chr.write(FieldPacket.registerExtraSkill(TRIDENT_STRIKE, extraSkillInfoList));
            tsm.removeStat(TridentStrike);
        }
        tsm.sendSetStatPacket();
    }

    private void incrementLightningElemental(TemporaryStatManager tsm) {
        int amount = 1;
        if (tsm.hasStat(IgnoreTargetDEF)) {
            amount = tsm.getOption(IgnoreTargetDEF).mOption;
            if (amount < getMaxCharge()) {
                amount++;
            }
        }
        updateLightningElemental(tsm, amount);
    }

    private void updateLightningElemental(TemporaryStatManager tsm, int amount) {
        Option o = new Option();
        Skill skill = chr.getSkill(LIGHTNING_ELEMENTAL);
        SkillInfo leInfo = SkillData.getSkillInfoById(skill.getSkillId());
        SkillInfo pbInfo = SkillData.getSkillInfoById(PRIMAL_BOLT);
        int slv = skill.getCurrentLevel();

        o.nOption = (tsm.hasStat(StrikerHyperElectric) ? (pbInfo.getValue(x, slv)) : (leInfo.getValue(x, slv))) * amount;
        o.mOption = amount;
        o.rOption = LIGHTNING_ELEMENTAL;
        o.tOption = 30;
        tsm.putCharacterStatValue(IgnoreTargetDEF, o);
        tsm.sendSetStatPacket();
        reduceArcChargerCoolTime();
    }

    private void reduceArcChargerCoolTime() {
        Skill skill = chr.getSkill(ARC_CHARGER);
        if (skill == null || arcChargeCDCount >= 5) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();

        arcChargeCDCount++;
        chr.reduceSkillCoolTime(ARC_CHARGER, (si.getValue(y, slv) * 1000));
    }

    private Skill getLightningChargeSkill() {
        Skill skill = null;
        for (int lightningSkill : lightningBuffs) {
            if (chr.hasSkill(lightningSkill)) {
                skill = chr.getSkill(lightningSkill);
            }
        }
        return skill;
    }

    private int getChargeProp() {
        int proc = 0;
        for (int lightningSkill : lightningBuffs) {
            if (chr.hasSkill(lightningSkill)) {
                SkillInfo si = SkillData.getSkillInfoById(lightningSkill);
                if (si == null) {
                    continue;
                }
                int slv = chr.getSkillLevel(lightningSkill);
                proc += si.getValue(prop, slv);
            }
        }
        return proc;
    }

    private int getMaxCharge() {
        int num = 0;
        for (int skill : lightningBuffs) {
            if (chr.hasSkill(skill)) {
                num++;
            }
        }
        return num;
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
        switch (skillId) {
            case LIGHTNING_ELEMENTAL:
                if (!tsm.hasStatBySkillId(LIGHTNING_ELEMENTAL)) {
                    o1.nOption = 1;
                    o1.rOption = skillId;
                    tsm.putCharacterStatValue(CygnusElementSkill, o1);
                    o2.rOption = skillId;
                    o2.nOption = si.getValue(x, slv);
                    tsm.putCharacterStatValue(IndieIgnoreMobpdpR, o2);
                } else {
                    tsm.removeStatsBySkill(LIGHTNING_ELEMENTAL);
                }
                break;
            case KNUCKLE_BOOSTER:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;
            case ARC_CHARGER:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(ShadowPartner, o1);
                arcChargeCDCount = 0;
                break;
            case SPEED_INFUSION:
                net.swordie.ms.client.character.skills.PartyBooster pb = (net.swordie.ms.client.character.skills.PartyBooster) tsm.getTSBByTSIndex(TSIndex.PartyBooster);
                pb.setNOption(-2);
                pb.setROption(skillId);
                pb.setDynamicTermSet(true);
                pb.setHasPartyBooster(tsm.hasStat(PartyBooster));
                pb.setExpireTerm((int) (si.getValue(time, slv) * (chr.getTotalStat(BaseStat.buffTimeR) / 100D)));
                tsm.putCharacterStatValue(PartyBooster, pb.getOption());
                break;
            case LINK_MASTERY:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(DamR, o1);
                break;
            case GLORY_OF_THE_GUARDIANS_TB:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                break;
            case PRIMAL_BOLT:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(StrikerHyperElectric, o1);
                o2.rOption = skillId;
                o2.nOption = si.getValue(indieDamR, slv);
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o2);
                chr.resetSkillCoolTime(TYPHOON);
                chr.resetSkillCoolTime(GALE);
                break;
            case LIGHTNING_CASCADE:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(LightningCascade, o1);
                o2.nOption = si.getValue(indiePMdR, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePMdR, o2);
                break;
        }
        tsm.sendSetStatPacket();
    }

    public void handleShootObj(Char chr, ShootObjectSkillInfo sosi) {
        var skillId = sosi.getSkillId();
        var slv = sosi.getSlv();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        SkillInfo si = SkillData.getSkillInfoById(skillId);
        switch (skillId) {
            case SHARK_TORPEDO:
                int amount = tsm.getOption(IgnoreTargetDEF).mOption;
                if (amount < 2) {
                    chr.chatMessage("You need more Lightning Charges to use this skill.");
                    return;
                }
                updateLightningElemental(tsm, amount - si.getValue(x, slv));
                break;
        }
        super.handleShootObj(chr, sosi);
    }

    @Override
    public int alterCooldownSkill(int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        switch (skillId) {
            case GALE:
            case TYPHOON:
                if (tsm.hasStat(StrikerHyperElectric)) {
                    return 0;
                }
        }
        return super.alterCooldownSkill(skillId, slv, attackInfo, sui, source);
    }


    // Hit related methods ---------------------------------------------------------------------------------------------

}
