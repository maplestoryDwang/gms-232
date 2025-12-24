package net.swordie.ms.client.jobs.legend;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.skills.*;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.MobAttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.Effect;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.connection.packet.UserRemote;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillChangeConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.AssistType;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.enums.Stat;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;
import net.swordie.ms.world.field.fieldeffect.GreyFieldType;

import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 12/14/2017.
 */
public class Luminous extends Job {
    public static final int SUNFIRE = 20040216; //
    public static final int ECLIPSE = 20040217; //
    public static final int EQUILIBRIUM = 20040219; //
    public static final int EQUILIBRIUM2 = 20040220;
    public static final int INNER_LIGHT = 20040221;
    public static final int FLASH_BLINK = 20041222;
    public static final int CHANGE_LIGHT_DARK = 20041239;

    public static final int MAGIC_BOOSTER = 27101004; //Buff
    public static final int BLACK_BLESSING = 27101003;
    public static final int PRESSURE_VOID = 27101202;

    public static final int SHADOW_SHELL = 27111004; //Buff
    public static final int RAY_OF_REDEMPTION = 27111101; // Attack + heals party members
    public static final int DUSK_GUARD = 27111005; //Buff
    public static final int PHOTIC_MEDITATION = 27111006; //Buff
    public static final int LUNAR_TIDE = 27110007;
    public static final int DEATH_SCYTHE = 27111303;
    public static final int MOONLIGHT_SPEAR = 27111202;
    public static final int SPECTRAL_LIGHT = 27111100;

    public static final int DARK_CRESCENDO = 27120005;
    public static final int ARCANE_PITCH = 27121006; //Buff
    public static final int MAPLE_WARRIOR_LUMI = 27121009; //Buff
    public static final int ENDER = 27121303;
    public static final int DARKNESS_MASTERY = 27120008;
    public static final int HEROS_WILL_LUMI = 27121010;
    public static final int APOCALYPSE = 27121202;
    public static final int APOCALYPSE_RECHARGE = 27120047;

    public static final int EQUALIZE = 27121054;
    public static final int HEROIC_MEMORIES_LUMI = 27121053;
    public static final int ARMAGEDDON = 27121052; //Stun debuff

    // V
    public static final int DOOR_OF_LIGHT = 400021005;
    public static final int AETHER_CONDUIT_L = 400021041;
    public static final int AETHER_CONDUIT_D = 400021049;
    public static final int AETHER_CONDUIT_EQ = 400021050;
    public static final int BAPTISM_OF_LIGHT_AND_DARKNESS = 400021071;
    public static final int LIBERATION_ORB = 400021105;
    public static final int LIBERATION_ORB_IMBALANCE_ATOM = 400021106; // Active Imbalance ForceAtom
    public static final int LIBERATION_ORB_LIGHT_ZONE = 400021107; // Passive Light
    public static final int LIBERATION_ORB_DARK_BULLET = 400021108; // Passive Dark
    public static final int LIBERATION_ORB_IMBALANCE_ATTACK = 400021109;
    public static final int LIBERATION_ORB_BALANCE_ATTACK = 400021110;

    private static final int[] addedSkills = new int[]{
            EQUILIBRIUM,
    };

    private long lastBonusChain = 0;
    private String curChainEffectResolution = "";
    private ScheduledFuture changeModeTimer;

    public Luminous(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id)) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setCurrentLevel(skill.getMasterLevel());
                    chr.addSkill(skill);
                }
            }

            if (chr.getTemporaryStatManager().getLarknessManager() == null) {
                chr.getTemporaryStatManager().setLarknessManager(new LarknessManager(chr));
            }

            // TODO -> Remove on Server Wipe
            if (chr.hasSkill(27100003) && !chr.hasSkill(BLACK_BLESSING)) { // old black blessing
                var s = SkillData.getSkillDeepCopyById(BLACK_BLESSING);
                s.setCurrentLevel(20);
                s.setMasterLevel(20);
                chr.addSkill(s);
            }
        }
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isLuminous(id);
    }


    private void giveLunarTideBuff() {
        if (chr.hasSkill(LUNAR_TIDE)) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            tsm.removeStatsBySkill(LUNAR_TIDE);
            Option o1 = new Option();
            Option o2 = new Option();
            SkillInfo lti = SkillData.getSkillInfoById(LUNAR_TIDE);
            Skill skill = chr.getSkill(LUNAR_TIDE);
            int slv = skill.getCurrentLevel();
            int maxMP = chr.getStat(Stat.mmp);
            int curMP = chr.getStat(Stat.mp);
            int maxHP = chr.getStat(Stat.mhp);
            int curHP = chr.getStat(Stat.hp);
            double ratioHP = ((double) curHP / maxHP);
            double ratioMP = ((double) curMP) / maxMP;

            //if (ratioHP > ratioMP) {
            if (ratioHP > ratioMP) {
                //Crit Rate      HP is Greater than MP
                o1.nOption = 2;
                o1.rOption = LUNAR_TIDE;
                tsm.putCharacterStatValue(LifeTidal, o1);
                o2.nOption = lti.getValue(prop, slv);     //only gives 10% for w/e reason but the SkillStat is correct
                o2.rOption = LUNAR_TIDE;
                tsm.putCharacterStatValue(CriticalBuff, o2);
            } else {
                //Damage         MP is Greater than HP
                o1.nOption = 1;
                o1.rOption = LUNAR_TIDE;
                tsm.putCharacterStatValue(LifeTidal, o1);
                o2.nOption = lti.getValue(x, slv);
                o2.rOption = LUNAR_TIDE;
                tsm.putCharacterStatValue(DamR, o2);
            }
            tsm.sendSetStatPacket();
        }
    }

    public void changeBlackBlessingCount(boolean increment) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        var skill = chr.getSkill(BLACK_BLESSING);
        if (skill == null || !tsm.hasStat(BlessOfDarkness)) {
            return;
        }
        var si = SkillData.getSkillInfoById(skill.getSkillId());
        var slv = skill.getCurrentLevel();
        var eff = Effect.skillSpecial(skill.getSkillId());
        var amount = tsm.getOption(BlessOfDarkness).xOption;
        int prevAmount = amount;

        amount = Math.max(0, Math.min(increment ? amount + 1 : amount - 1, 3));

        var matt = 0;
        var orb1Matt = si.getValue(u, slv);
        var orb2Matt = si.getValue(v, slv);
        var orb3Matt = si.getValue(y, slv);

        switch (amount) {
            case 1:
                matt = orb1Matt;
                break;
            case 2:
                matt = orb2Matt;
                break;
            case 3:
                matt = orb3Matt;
                break;
        }

        var o = new Option(matt, skill.getSkillId(), 0);
        o.xOption = amount;
        tsm.putCharacterStatValue(BlessOfDarkness, o);
        tsm.sendSetStatPacket();

        // Effect
        if (increment && prevAmount != 3) {
            chr.write(UserPacket.effect(eff));
            chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), eff));
        }
    }

    public int getMoreEquilibriumTime() {
        int eqTime = 0;
        SkillInfo eqi = SkillData.getSkillInfoById(DARKNESS_MASTERY);
        if (chr.hasSkill(DARKNESS_MASTERY)) {
            eqTime += eqi.getValue(time, chr.getSkillLevel(DARKNESS_MASTERY));
        }
        return eqTime;
    }


    // Attack related methods ------------------------------------------------------------------------------------------

    @Override
    public void handleAttack(Client c, AttackInfo attackInfo) {
        Char chr = c.getChr();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        LarknessManager lm = tsm.getLarknessManager();
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
        if (
                chr.getJob() != 2004
                        && tsm.hasStat(Larkness)
                        && ((lm.isDark() && SkillConstants.isLarknessDarkSkill(attackInfo.skillId))
                        || (!lm.isDark() && SkillConstants.isLarknessLightSkill(attackInfo.skillId)))
                        && (tsm.getOption(Larkness).rOption != EQUILIBRIUM2)
        ) {

            changeLarknessGauge(attackInfo, si, slv);
        }

        if (hasHitMobs) {
            if (!tsm.hasStat(Larkness)) {
                lm.changeMode();
            }

            // Dark Crescendo
            int crescendoProp = getCrescendoProp();
            if (skill != null && Util.succeedProp(crescendoProp)) {
                incrementDarkCrescendo(tsm);
            }

            // Liberation Orb Passive Attributes
            if (chr.hasSkill(LIBERATION_ORB)) {
                if (!hasLiberationOrb()) {
                    if (SkillConstants.isLarknessDarkSkill(attackInfo.skillId)) {
                        procDarkBullet();
                    } else if (SkillConstants.isLarknessLightSkill(attackInfo.skillId)) {
                        procLightZone();
                    }
                } else if (hasLiberationOrb() &&
                        (SkillConstants.isLarknessLightSkill(attackInfo.skillId)
                                || SkillConstants.isLarknessDarkSkill(attackInfo.skillId)
                                || SkillConstants.isEquilibriumSkill(attackInfo.skillId)
                        )) {
                    procLiberationOrb();
                }
            }
        }

        if (tsm.getLarknessManager().isEquilibrium() && chr.hasSkill(MOONLIGHT_SPEAR) && Util.getCurrentTimeLong() > lastBonusChain + swGetMoonlightSpearCooldown(tsm)) {
            chr.write(UserLocal.userBonusAttackRequest(MOONLIGHT_SPEAR));
            lastBonusChain = Util.getCurrentTimeLong();
        }

        giveLunarTideBuff();
        giveEquilibriumHPDrain(attackInfo.skillId);
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (attackInfo.skillId) {
            case ARMAGEDDON:
                o1.nOption = 1;
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(time, slv);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Stun, o1);
                }
                o2.nOption = 1;
                o2.rOption = skill.getSkillId();
                o2.tOption = 2;
                tsm.putCharacterStatValue(IndieNotDamaged, o2, true);
                tsm.sendSetStatPacket();
                break;
            case RAY_OF_REDEMPTION:
                chr.heal(chr.getMaxHP()); // 800% Recovery
                break;
            case ENDER:
                if (chr.hasSkill(BAPTISM_OF_LIGHT_AND_DARKNESS)) {
                    incrementSwordsOfConsciousness();
                }
                break;
        }

        super.handleAttack(c, attackInfo);
    }

    // [Luminous] Custom Skill Change
    private int swGetMoonlightSpearCooldown(TemporaryStatManager tsm) {
        return tsm.getOptByCTSAndSkill(IndieBooster, OVERCOMING_TERROR) != null ? SkillChangeConstants.TERROR_MOONLIGHT_SPEAR_CD : SkillChangeConstants.NORMAL_MOONLIGHT_SPEAR_CD;
    }

    // [Luminous] Custom Skill Change
    private void swGiveTerrorBuff(TemporaryStatManager tsm) {
        Effect effect = Effect.effectFromWZ("Effect/Direction15.img/effect/BM_Weapon/powerUp/0", false, 0, 0, 0);
        chr.write(UserPacket.effect(effect));
        chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), effect), chr);
        Option o1 = new Option(SkillChangeConstants.TERROR_BOOSTER, OVERCOMING_TERROR, SkillChangeConstants.TERROR_DURATION);
        tsm.putCharacterStatValue(IndieBooster, o1, true);
        tsm.sendSetStatPacket();
    }

    private void changeLarknessGauge(AttackInfo attackInfo, SkillInfo si, int slv) {
        LarknessManager lm = chr.getTemporaryStatManager().getLarknessManager();
        if (si != null && si.getValue(gauge, slv) > 0) {
            int gaugeInc = si.getValue(gauge, slv);
            if (attackInfo.skillId == APOCALYPSE && chr.hasSkill(APOCALYPSE_RECHARGE)) { // Recharge HyperSkill
                gaugeInc += chr.getSkillStatValue(gauge, APOCALYPSE_RECHARGE);
            }
            lm.changeGauge(gaugeInc);
        }
    }

    private void incrementSwordsOfConsciousness() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        int curStack = tsm.hasStat(SwordsOfConsciousness) ? tsm.getOption(SwordsOfConsciousness).nOption : 0;
        changeSwordsOfConsciousness(curStack + 1);
    }

    private void changeSwordsOfConsciousness(int swords) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        int skillId = BAPTISM_OF_LIGHT_AND_DARKNESS;
        var cap = 12;
        Option o = new Option();
        if (swords < cap) {
            o.nOption = swords;
            o.rOption = skillId;
            tsm.putCharacterStatValue(SwordsOfConsciousness, o);
            tsm.sendSetStatPacket();
        } else {
            tsm.removeStatsBySkill(skillId);
            chr.resetSkillCoolTime(skillId);

            // [Luminous] Custom Skill Change
            swGiveTerrorBuff(tsm);
        }
    }

    private void giveEquilibriumHPDrain(int skillId) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();

        if (tsm.getLarknessManager().isEquilibrium() && SkillConstants.isLarknessLightSkill(skillId) && chr.hasSkill(EQUILIBRIUM)) {
            Skill skill = chr.getSkill(EQUILIBRIUM);
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            chr.heal(chr.getHPPerc(si.getValue(x, 1)));
        }
    }

    private void incrementDarkCrescendo(TemporaryStatManager tsm) {
        Option o = new Option();
        Option o1 = new Option();
        SkillInfo crescendoInfo = SkillData.getSkillInfoById(DARK_CRESCENDO);
        Skill skill = chr.getSkill(DARK_CRESCENDO);
        int slv = skill.getCurrentLevel();
        int amount = 1;
        if (tsm.hasStat(StackBuff)) {
            amount = tsm.getOption(StackBuff).mOption;
            if (amount < getMaxDarkCrescendoStack()) {
                amount++;
            }
        }
        o.setInMillis(true);
        o.nOption = (amount * crescendoInfo.getValue(damR, slv));
        o.rOption = DARK_CRESCENDO;
        o.tOption = (int) tsm.getRemainingTime(StackBuff, DARK_CRESCENDO);
        o.mOption = amount;
        o.setInMillis(true);
        tsm.putCharacterStatValue(StackBuff, o, true);
        tsm.sendSetStatPacket();
    }

    private int getCrescendoProp() {
        Skill skill = null;
        if (chr.hasSkill(DARK_CRESCENDO)) {
            skill = chr.getSkill(DARK_CRESCENDO);
        }
        return skill == null ? 0 : SkillData.getSkillInfoById(DARK_CRESCENDO).getValue(prop, skill.getCurrentLevel());
    }

    private int getMaxDarkCrescendoStack() {
        Skill skill = null;
        if (chr.hasSkill(DARK_CRESCENDO)) {
            skill = chr.getSkill(DARK_CRESCENDO);
        }
        return skill == null ? 0 : SkillData.getSkillInfoById(skill.getSkillId()).getValue(x, skill.getCurrentLevel());
    }


    // Skill related methods -------------------------------------------------------------------------------------------

    @Override
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillId, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {
        super.handleSkill(chr, tsm, skillId, slv, inPacket, skillUseInfo);
        Skill skill = chr.getSkill(skillId);
        SkillInfo si = null;
        LarknessManager lm = tsm.getLarknessManager();
        if (skill != null) {
            si = SkillData.getSkillInfoById(skillId);
        }
        Field field = chr.getField();
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (skillId) {
            case MAGIC_BOOSTER:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;
            case SHADOW_SHELL:
                o1.nOption = 3;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                // no bOption for Luminous' AntiMagicShell
                tsm.putCharacterStatValue(AntiMagicShell, o1);
                break;
            case BLACK_BLESSING:
                if (tsm.hasStat(BlessOfDarkness)) {
                    tsm.removeStatsBySkill(skillId);
                } else {
                    o1.nOption = 0; // Matt
                    o1.xOption = 0; // Orb Count
                    o1.yOption = si.getValue(x, slv);
                    o1.rOption = skillId;
                    tsm.putCharacterStatValue(BlessOfDarkness, o1);
                }
                break;
            case DUSK_GUARD:
                o2.nOption = si.getValue(indiePdd, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDEF, o2);
                break;
            case PHOTIC_MEDITATION:
                o1.nOption = si.getValue(emad, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(EMAD, o1);
                break;
            case DARK_CRESCENDO:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                o1.mOption = 1;
                tsm.putCharacterStatValue(StackBuff, o1);
                break;
            case ARCANE_PITCH:
                o1.nOption = si.getValue(y, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(ElementalReset, o1);
                break;
            case EQUALIZE:
                lm.setGauge(5000);
                lm.goEquilibriumMode(true);
                break;
            case HEROIC_MEMORIES_LUMI:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                break;
            case DOOR_OF_LIGHT:
                Summon summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Stop);
                field.spawnSummonAndRemoveOld(summon);
                break;
            case AETHER_CONDUIT_L:
            case AETHER_CONDUIT_D:
            case AETHER_CONDUIT_EQ:
                slv = chr.getSkillLevel(AETHER_CONDUIT_L);
                AffectedArea aa = AffectedArea.getPassiveAA(chr, skillId, slv);
                field.spawnAffectedAreaAndRemoveOld(aa);
                break;
            case BAPTISM_OF_LIGHT_AND_DARKNESS:
                summon = Summon.getSummonByNoCTS(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setAssistType(AssistType.SequenceAttack);
                field.spawnSummonAndRemoveOld(summon);
                break;
            case LIBERATION_ORB:
                if (canFreeLiberationOrb()) {
                    var nOpt = liberationOrbIsBalanced() ? 2 : 1;
                    tsm.removeStatsBySkill(LIBERATION_ORB);

                    o1.nOption = nOpt; // 1 = Unbalanced  ||  2 = Balanced
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(LiberationOrb, o1);
                }
                break;
        }
        tsm.sendSetStatPacket();
    }

    private void procLiberationOrb() {
        if (!hasLiberationOrb() || chr.hasSkillOnCooldown(LIBERATION_ORB_BALANCE_ATTACK) || chr.hasSkillOnCooldown(LIBERATION_ORB_IMBALANCE_ATTACK)) {
            return;
        }
        var skillId = liberationOrbIsBalanced() ? LIBERATION_ORB_BALANCE_ATTACK : LIBERATION_ORB_IMBALANCE_ATTACK;

        chr.write(FieldPacket.registerExtraSkill(LIBERATION_ORB, new ExtraSkillInfo(chr, skillId)));
        chr.addSkillCoolTime(skillId, chr.getSkillStatValue(w, LIBERATION_ORB));
    }

    private boolean hasLiberationOrbPassiveOnCD() {
        return chr.hasSkillOnCooldown(LIBERATION_ORB_LIGHT_ZONE) || chr.hasSkillOnCooldown(LIBERATION_ORB_DARK_BULLET);
    }

    private void procLightZone() {
        if (hasLiberationOrbPassiveOnCD()) {
            return;
        }

        var skillId = LIBERATION_ORB_LIGHT_ZONE;
        chr.write(FieldPacket.registerExtraSkill(LIBERATION_ORB, new ExtraSkillInfo(skillId, chr.getPosition(), chr.isLeft(), Util.getRandom(150, 750), 0)));
        incLightAttribute();
        chr.addSkillCoolTime(skillId, chr.getSkillStatValue(x, LIBERATION_ORB) * 1000);
    }

    private void procDarkBullet() {
        if (hasLiberationOrbPassiveOnCD()) {
            return;
        }

        var skillId = LIBERATION_ORB_DARK_BULLET;
        chr.write(FieldPacket.registerExtraSkill(LIBERATION_ORB, new ExtraSkillInfo(chr, skillId)));
        incDarkAttribute();
        chr.addSkillCoolTime(skillId, chr.getSkillStatValue(x, LIBERATION_ORB) * 1000);
    }

    private void incDarkAttribute() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        var lightAttr = 0;
        var darkAttr = 0;
        if (tsm.hasStat(LiberationOrbPassive)) {
            Option o = tsm.getOption(LiberationOrbPassive);
            lightAttr = o.xOption;
            darkAttr = o.yOption;
        }
        if (darkAttr < 4) {
            darkAttr++;
        }

        updateLiberationOrbPassive(lightAttr, darkAttr);
    }

    private void incLightAttribute() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        var lightAttr = 0;
        var darkAttr = 0;
        if (tsm.hasStat(LiberationOrbPassive)) {
            Option o = tsm.getOption(LiberationOrbPassive);
            lightAttr = o.xOption;
            darkAttr = o.yOption;
        }
        if (lightAttr < 4) {
            lightAttr++;
        }

        updateLiberationOrbPassive(lightAttr, darkAttr);
    }

    private void updateLiberationOrbPassive(int lightAttr, int darkAttr) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        o.nOption = 2;
        o.rOption = LIBERATION_ORB;
        o.xOption = lightAttr;
        o.yOption = darkAttr;
        tsm.putCharacterStatValue(LiberationOrbPassive, o);
        tsm.sendSetStatPacket();
    }

    private boolean liberationOrbIsBalanced() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(LiberationOrbPassive)) {
            return false;
        }
        Option o = tsm.getOption(LiberationOrbPassive);
        return o.yOption == o.xOption;
    }

    private boolean hasLiberationOrb() {
        return chr.getTemporaryStatManager().hasStat(LiberationOrb);
    }

    private boolean canFreeLiberationOrb() {
        return chr.getTemporaryStatManager().hasStat(LiberationOrbPassive);
    }

    public int alterCooldownSkill(int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        switch (skillId) {
            case ENDER:
            case DEATH_SCYTHE:
                if (tsm.getLarknessManager().isEquilibrium()) {
                    return 0;
                }
        }
        return super.alterCooldownSkill(skillId, slv, attackInfo, sui, source);
    }

    public void handleRemoveCTS(CharacterTemporaryStat cts, Option o) {
        if (cts == Larkness && o.rOption == EQUILIBRIUM2) {
            EventManager.stopTimer(changeModeTimer);
            changeModeTimer = EventManager.addEvent(this::getOutOfEquilibrium, 30, TimeUnit.MILLISECONDS);
        }

        super.handleRemoveCTS(cts, o);
    }

    public void getOutOfEquilibrium() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        LarknessManager lm = tsm.getLarknessManager();
        lm.changeMode();
        lm.changeGauge(50);
        chr.deactivateCustomEffect();
    }


    // Hit related methods ---------------------------------------------------------------------------------------------

    @Override
    public void handleHit(Client c, InPacket inPacket, HitInfo hitInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        if (tsm.hasStat(BlessOfDarkness) && chr.hasSkill(BLACK_BLESSING)) {
            Skill skill = chr.getSkill(BLACK_BLESSING);
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int slv = skill.getCurrentLevel();
            if (hitInfo.hpDamage > 0) {
                changeBlackBlessingCount(false); // deduct orbs as player gets hit
                int dmgAbsorbed = si.getValue(x, slv);
                hitInfo.hpDamage = (int) (hitInfo.hpDamage * ((double) dmgAbsorbed / 100));
            } else {
                changeBlackBlessingCount(true);
            }
        }
        super.handleHit(c, inPacket, hitInfo);
    }

    @Override
    public void handleMobDebuffSkill(Char chr) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(AntiMagicShell)) {
            tsm.removeAllDebuffs();
            deductShadowShell();
        }

    }

    private void deductShadowShell() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!chr.hasSkill(SHADOW_SHELL)) {
            return;
        }
        Skill skill = chr.getSkill(SHADOW_SHELL);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        Option o = new Option();
        if (tsm.hasStat(AntiMagicShell)) {
            int shadowShellCount = tsm.getOption(AntiMagicShell).nOption;

            if (shadowShellCount > 0) {
                shadowShellCount--;
            }

            if (shadowShellCount <= 0) {
                tsm.removeStatsBySkill(skill.getSkillId());
                tsm.sendResetStatPacket();
            } else {
                o.nOption = shadowShellCount;
                o.rOption = skill.getSkillId();
                o.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(AntiMagicShell, o);
                tsm.sendSetStatPacket();
            }
            chr.write(UserPacket.effect(Effect.skillSpecial(skill.getSkillId())));
            chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.skillSpecial(skill.getSkillId())));
        }
    }

    @Override
    public int alterMpCon(int mpCon, int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (SkillConstants.isLarknessDarkSkill(skillId)
                && tsm.hasStat(Larkness)
                && tsm.getOption(Larkness).rOption == EQUILIBRIUM2) {
            // Luminous Dark Skills do not consumpe MP if in Equilibrium Mode.
            return 0;
        }

        return super.alterMpCon(mpCon, skillId, slv, attackInfo, sui, source);
    }

    @Override
    public void setCharCreationStats(Char chr) {
        super.setCharCreationStats(chr);
        chr.getAvatarData().getCharacterStat().setPosMap(927020000);
    }

    // [Luminous] Custom Skill Changes
    public void activateCustomEffect(String res, int fadeDuration) {
        FieldEffect colourEff = FieldEffect.setFieldColor(GreyFieldType.Field, (short) 100, (short) 50, (short) 60, fadeDuration);
        chr.write(FieldPacket.fieldEffect(colourEff));

        FieldEffect chainsEff = FieldEffect.onOffLayer(0, fadeDuration, res,
                0, 0, 12, String.format("Effect/FieldGimmickEff.img/FearEventFrame/%s", res), 0, true,
                -1, true);
        chainsEff.setArg10(120);
        chr.write(FieldPacket.fieldEffect(chainsEff));
        resolution = res;
    }

    // [Luminous] Custom Skill Changes
    public void deactivateCustomEffect() {
        FieldEffect colourEff = FieldEffect.setFieldColor(GreyFieldType.Field, (short) 255, (short) 255, (short) 255, 700);
        FieldEffect chainsEff = FieldEffect.onOffLayer(2, 400, resolution,
                0, 0, 12, String.format("Effect/FieldGimmickEff.img/FearEventFrame/%s", resolution), 0, true,
                -1, true);
        chainsEff.setArg8(1);
        chr.write(FieldPacket.fieldEffect(colourEff));
        chr.write(FieldPacket.fieldEffect(chainsEff));
        resolution = "";
    }
}