package net.swordie.ms.client.jobs.adventurer.pirate;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.PartyBooster;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillUseSource;
import net.swordie.ms.client.character.skills.debuff.DebuffInfo;
import net.swordie.ms.client.character.skills.debuff.DebuffUtil;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.MobAttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.shootobject.ShootObjectSkillInfo;
import net.swordie.ms.client.character.skills.temp.TemporaryStatBase;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.client.party.Party;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.Effect;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.connection.packet.UserRemote;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillChangeConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.TSIndex;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Util;

import java.util.*;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

public class Buccaneer extends Pirate {
    public static final int ENERGY_VORTEX = 5101014;
    public static final int TORNADO_UPPERCUT = 5101012; //Special Attack
    public static final int KNUCKLE_BOOSTER = 5101006; //Buff
    public static final int ENERGY_CHARGE = 5100015; //Energy Gauge
    public static final int PERSEVERANCE = 5100013;

    public static final int ROLL_OF_THE_DICE_BUCC = 5111007; //Buff
    public static final int ENERGY_BURST = 5111002; //Special Attack
    public static final int ENERGY_BURST_CHARGED = 5111013;
    public static final int STATIC_THUMPER = 5111012; //Special Attack
    public static final int STUN_MASTERY = 5110000;
    public static final int SUPERCHARGE = 5110014;
    public static final int SPIRAL_ASSAULT = 5111009;


    public static final int OCTOPUNCH = 5121007; //Special Attack
    public static final int NAUTILUS_STRIKE_BUCC = 5121013; //Special Attack
    public static final int NAUTILUS_STRIKE_BUCC_FA = 5120021; // Final Attack
    public static final int DRAGON_STRIKE = 5121001; //Special Attack
    public static final int BUCCANEER_BLAST = 5121016; //Special Attack
    public static final int MAPLE_WARRIOR_BUCC = 5121000; //Buff
    public static final int PIRATE_REVENGE_BUCC = 5120011;
    public static final int ULTRA_CHARGE = 5120018;
    public static final int ROLL_OF_THE_DICE_BUCC_ADDITION = 5120044;
    public static final int ROLL_OF_THE_DICE_BUCC_SAVING_GRACE = 5120043;
    public static final int ROLL_OF_THE_DICE_BUCC_ENHANCE = 5120045;
    public static final int HEROS_WILL_BUCC = 5121008;
    public static final int EPIC_ADVENTURER_BUCC = 5121053;
    public static final int POWER_UNITY = 5121052;
    public static final int POWER_UNITY_SKILL_REQUEST = 5121055;
    public static final int STIMULATING_CONVERSATION = 5121054;
    public static final int ROLL_OF_THE_DICE_BUCC_DD = 5120012;
    public static final int TIME_LEAP = 5121010; //Special Move / Buff
    public static final int SPEED_INFUSION = 5121009; //Buff
    public static final int CROSSBONES = 5121015; //Buff


    // V skills
    public static final int MELTDOWN = 400051002;
    public static final int MELTDOWN_ENERGY_ORB = 400051003;
    public static final int LORD_OF_THE_DEEP = 400051015;
    public static final int SERPENT_VORTEX = 400051042;
    public static final int HOWLING_FIST = 400051070;
    public static final int HOWLING_FIST_LEVIATHAN_ATTACK = 400051071;


    private ScheduledFuture stimulatingConversationTimer;
    private ScheduledFuture lordOfTheDeepTimer;
    private ScheduledFuture perseveranceTimer;

    public Buccaneer(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            EventManager.stopTimer(perseveranceTimer);
            perseveranceTimer = EventManager.addFixedRateEvent(this::applyPerseveranceTimer, 5, 5, TimeUnit.SECONDS);
        }
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isBuccaneer(id);
    }

    private void lordOfTheDeepPassiveEnergyConsumption() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStatBySkillId(LORD_OF_THE_DEEP) || !chr.hasSkill(LORD_OF_THE_DEEP)) {
            lordOfTheDeepTimer.cancel(true);
            return;
        }

        Skill skill = chr.getSkill(LORD_OF_THE_DEEP);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        int passiveEnergyConsumption = si.getValue(y, slv);
        int energy = tsm.getOption(EnergyCharged).nOption;
        if (energy < passiveEnergyConsumption) {
            tsm.removeStatsBySkill(LORD_OF_THE_DEEP);
            lordOfTheDeepTimer.cancel(true);
        } else {
            int newEnergy = energy - passiveEnergyConsumption;
            updateViperEnergy(newEnergy);
        }
    }

    private void incrementStimulatingConversation() {
        if (!chr.hasSkill(STIMULATING_CONVERSATION)) {
            stimulatingConversationTimer.cancel(true);
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(Stimulate)) {
            updateViperEnergy(tsm.getOption(EnergyCharged).nOption + chr.getSkillStatValue(x, STIMULATING_CONVERSATION));
        } else {
            stimulatingConversationTimer.cancel(true);
        }
    }

    private void applyPerseveranceTimer() {
        Skill skill = chr.getSkill(PERSEVERANCE);
        if (skill == null) {
            return;
        }
        chr.heal(chr.getHPPerc(chr.getSkillStatValue(x, PERSEVERANCE)), true, false);
        chr.healMP(chr.getMPPerc(chr.getSkillStatValue(x, PERSEVERANCE)));
    }

    public void increaseSerpentVortex() { // Serpent Vortex  Counter uses same CTS as StackOverTimeSkill.
        if (!chr.hasSkill(SERPENT_VORTEX)) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        int count = 1;
        if (tsm.hasStat(StackOverTimeSkill)) {
            count = tsm.getOption(StackOverTimeSkill).nOption;
            if (count < 6) {
                count++;
            }
        }
        updateSerpentVortex(count);
    }

    private void updateSerpentVortex(int count) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        o.nOption = count;
        o.rOption = 0;
        tsm.putCharacterStatValue(StackOverTimeSkill, o);
        tsm.sendSetStatPacket();
    }


    private void lordOfTheDeepActiveEnergyConsumption(AttackInfo attackInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStatBySkillId(LORD_OF_THE_DEEP) || !chr.hasSkill(LORD_OF_THE_DEEP)) {
            return;
        }

        Skill skill = chr.getSkill(LORD_OF_THE_DEEP);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        boolean isBossMob = false;
        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
            if (mob != null && mob.isBoss()) {
                isBossMob = true;
                break;
            }
        }
        int slv = skill.getCurrentLevel();
        int activeEnergyConsumption = si.getValue(x, slv);
        if (isBossMob) {
            activeEnergyConsumption = (int) (activeEnergyConsumption * (100 - si.getValue(z, slv)) / 100D);
        }
        int energy = tsm.getOption(EnergyCharged).nOption;
        if (energy < activeEnergyConsumption) {
            tsm.removeStatsBySkill(LORD_OF_THE_DEEP);
        } else {
            int newEnergy = energy - activeEnergyConsumption;
            updateViperEnergy(newEnergy);
        }
    }

    private void applyStunMasteryOnMob(AttackInfo attackInfo) {
        if (!chr.hasSkill(STUN_MASTERY)) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(STUN_MASTERY);
        int slv = chr.getSkillLevel(STUN_MASTERY);
        Option o1 = new Option();
        o1.nOption = 1;
        o1.rOption = STUN_MASTERY;
        o1.tOption = 3;

        DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds(), new DebuffInfo(true, si.getValue(subProp, slv)));
    }

    private void changeViperEnergy(int skillId, AttackInfo ai) {
        boolean hasHitBoss = hasHitBoss(ai);
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        int energy = getEnergyIncrement();
        if (tsm.getViperEnergyCharge() == 0 || (SkillChangeConstants.MELTTDOWN_ENERGY_ORB_CHARGES && skillId == MELTDOWN_ENERGY_ORB)) { // [Buccaneer] Custom Skill Change
            if (tsm.hasStat(EnergyCharged)) {
                energy = tsm.getOption(EnergyCharged).nOption;
                if (energy < getMaximumEnergy()) {
                    energy += (getEnergyIncrement() * (hasHitBoss ? 2 : 1));
                }
                if (energy > getMaximumEnergy()) {
                    energy = getMaximumEnergy();
                }
            }
            chr.write(UserPacket.effect(Effect.skillAffected(getViperEnergySkill().getSkillId(), (byte) 1, 0)));
            chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.skillAffected(getViperEnergySkill().getSkillId(), (byte) 1, 0)));
        } else {
            energy = deductViperEnergyCost(skillId);
        }
        updateViperEnergy(energy);
    }

    private boolean hasHitBoss(AttackInfo attackInfo) {
        for (var mai : attackInfo.mobAttackInfo) {
            Mob mob = mai.mob;
            if (mob != null && mob.isBoss()) {
                return true;
            }
        }

        return false;
    }

    private int deductViperEnergyCost(int skillId) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        int energy = tsm.getOption(EnergyCharged).nOption;
        SkillInfo si = SkillData.getSkillInfoById(skillId);
        if (si == null) {
            return energy;
        }
        energy = energy - si.getValue(forceCon, 1);

        return energy;
    }

    private void updateViperEnergy(int energy) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        TemporaryStatBase tsb = tsm.getTSBByTSIndex(TSIndex.EnergyCharged);
        tsb.setNOption(energy < 0 ? 0 : (energy > getMaximumEnergy() ? getMaximumEnergy() : energy));
        tsb.setROption(0);
        tsb.setDynamicTermSet(false);
        tsm.putCharacterStatValue(EnergyCharged, tsb.getOption());
        if (energy >= getMaximumEnergy()) {
            tsm.setViperEnergyCharge(getViperEnergySkill().getSkillId());
        } else if (energy <= 0) {
            tsm.setViperEnergyCharge(0);
        }
        tsm.sendSetStatPacket();
    }

    @Override
    public Long getJobBaseStat(BaseStat baseStat) {
        if (chr.hasSkill(ENERGY_CHARGE)) {
            Map<BaseStat, Long> baseStats = new HashMap<>();
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            var skillId = tsm.getViperEnergyCharge();
            var energySkill = getViperEnergySkill();
            var si = SkillData.getSkillInfoById(energySkill.getSkillId());
            var slv = energySkill.getCurrentLevel();

            if (si == null || slv == 0) {
                return 0L;
            }

            if (skillId > 0) {
                baseStats.put(BaseStat.pad, (long) si.getValue(pad, slv));
                baseStats.put(BaseStat.speed, (long) si.getValue(speed, slv));
                baseStats.put(BaseStat.pdd, (long) si.getValue(pdd, slv));
            } else {
                baseStats.put(BaseStat.pad, (long) (si.getValue(pad, slv) / 2));
                baseStats.put(BaseStat.speed, (long) (si.getValue(speed, slv) / 2));
                baseStats.put(BaseStat.pdd, (long) (si.getValue(pdd, slv) / 2));
            }


            return baseStats.getOrDefault(baseStat, 0L);
        }

        return super.getJobBaseStat(baseStat);
    }

    private int getEnergyIncrement() {
        Skill skill = getViperEnergySkill();
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();

        return si.getValue(x, slv);
    }

    private int getMaximumEnergy() {
        Skill skill = getViperEnergySkill();
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();

        return si.getValue(z, slv);
    }

    private Skill getViperEnergySkill() {
        Skill skill = null;
        if (chr.hasSkill(ENERGY_CHARGE)) {
            skill = chr.getSkill(ENERGY_CHARGE);
        }
        if (chr.hasSkill(SUPERCHARGE)) {
            skill = chr.getSkill(SUPERCHARGE);
        }
        if (chr.hasSkill(ULTRA_CHARGE)) {
            skill = chr.getSkill(ULTRA_CHARGE);
        }
        return skill;
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

        // Stun Mastery
        applyStunMasteryOnMob(attackInfo);
        // Viper Energy
        if (chr.hasSkill(ENERGY_CHARGE)) {
            if (attackInfo.skillId != LORD_OF_THE_DEEP && attackInfo.skillId != TORNADO_UPPERCUT) {
                changeViperEnergy(attackInfo.skillId, attackInfo);
            } else {
                // Lord of the Deep
                lordOfTheDeepActiveEnergyConsumption(attackInfo);
            }
        }

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        switch (attackInfo.skillId) {
            case ENERGY_BURST:
            case ENERGY_BURST_CHARGED:
                si = SkillData.getSkillInfoById(ENERGY_BURST);
                slv = chr.getSkillLevel(ENERGY_BURST);
                o1.nOption = 1;
                o1.rOption = skillID;
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
                break;
            case DRAGON_STRIKE:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv) * SkillChangeConstants.DRAGON_STRIKE_DEBUFF_DURATION_MULTIPLIER; // [Buccaneer] Custom Skill Change
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.addStatOptionsAndBroadcast(chr, MobStat.FinalDmgReceived, o1);
                }
                break;
            case SERPENT_VORTEX:
                updateSerpentVortex(tsm.hasStat(StackOverTimeSkill) ? (tsm.getOption(StackOverTimeSkill).nOption - 1) : 0);
                break;
        }
        super.handleAttack(c, attackInfo);
    }

    @Override
    public void handleSkillPrepareStop(Char chr, int skillId, SkillUseInfo sui) {
        switch (skillId) {
            case HOWLING_FIST:
                var tsm = chr.getTemporaryStatManager();
                if (!tsm.hasStatBySkillId(HOWLING_FIST_LEVIATHAN_ATTACK)) {
                    var o = new Option(1, HOWLING_FIST_LEVIATHAN_ATTACK, 3);
                    tsm.putCharacterStatValue(IndieNotDamaged, o, true);
                    tsm.sendSetStatPacket();
                }
                break;
        }
        super.handleSkillPrepareStop(chr, skillId, sui);
    }

    @Override
    public int getFinalAttackSkill() {
        if (chr.hasSkill(NAUTILUS_STRIKE_BUCC) && chr.hasSkillOnCooldown(NAUTILUS_STRIKE_BUCC)) {
            return NAUTILUS_STRIKE_BUCC_FA;
        }
        return super.getFinalAttackSkill();
    }


    public void handleShootObj(Char chr, ShootObjectSkillInfo sosi) {
        var skillId = sosi.getSkillId();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        switch (skillId) {
            case MELTDOWN_ENERGY_ORB:
                Option prevOpt = tsm.getOption(MeltDown);
                Option o = new Option();
                Option o1 = new Option();

                o.tOption = (int) tsm.getRemainingTime(MeltDown, MELTDOWN);
                o.nOption = prevOpt.nOption - 1;
                o.rOption = MELTDOWN;
                if (o.nOption == 0) {
                    o.nOption = -1;
                }
                o.setInMillis(true);

                tsm.putCharacterStatValue(MeltDown, o, true);
                tsm.sendSetStatPacket();

                o1.nOption = 1;
                o1.rOption = MELTDOWN;
                o1.tOption = 1500;
                o1.setInMillis(true);
                tsm.putCharacterStatValue(IndieNotDamaged, o1, true);
                tsm.sendSetStatPacket();
                break;
        }
        super.handleShootObj(chr, sosi);
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
        switch (skillID) {
            case ENERGY_VORTEX:
                changeViperEnergy(skillID, new AttackInfo());
                break;
            case TORNADO_UPPERCUT:
                changeViperEnergy(skillID, new AttackInfo());
                break;
            case TIME_LEAP:
                List<Char> chrs = new ArrayList<>() {{
                    add(chr);
                }};
                Party party = chr.getParty();
                if (party != null) {
                    chrs = party.getPartyMembersInField(chr);
                }
                for (Char pChr : chrs) {
                    if (!chr.hasSkillOnCooldown(-TIME_LEAP)) {
                        for (var skillId : pChr.getSkillCoolTimes().keySet()) {
                            if (!SkillConstants.isNoCooltimeResetSkill(skillId)) {
                                pChr.resetSkillCoolTime(skillId);
                            }
                        }
                        chr.addSkillCoolTime(-TIME_LEAP, si.getValue(time, slv) * 1000);
                    }
                }
                break;
            case SPEED_INFUSION:
                net.swordie.ms.client.character.skills.PartyBooster pb = (PartyBooster) tsm.getTSBByTSIndex(TSIndex.PartyBooster);
                pb.setNOption(-2);
                pb.setROption(skillID);
                pb.setDynamicTermSet(true);
                pb.setHasPartyBooster(tsm.hasStat(PartyBooster));
                pb.setExpireTerm((int) (si.getValue(time, slv) * (chr.getTotalStat(BaseStat.buffTimeR) / 100D)));
                tsm.putCharacterStatValue(PartyBooster, pb.getOption());
                break;
            case CROSSBONES:
                o2.rOption = skillID;
                o2.nOption = si.getValue(indiePadR, slv);
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePADR, o2);
                break;
            case POWER_UNITY_SKILL_REQUEST:
                si = SkillData.getSkillInfoById(skillID);
                slv = chr.getSkillLevel(POWER_UNITY);
                int amount = 1;
                if (tsm.hasStat(UnityOfPower)) {
                    amount = tsm.getOption(UnityOfPower).nOption;
                    if (amount < 4) {
                        amount++;
                    }
                }
                o1.nOption = amount;
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(UnityOfPower, o1);
                break;
            case STIMULATING_CONVERSATION:
                var t = si.getValue(time, slv);
                if (JobConstants.isBuccaneer(chr.getJob())) {
                    updateViperEnergy(getMaximumEnergy());
                }
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = t;
                tsm.putCharacterStatValue(Stimulate, o1);
                o2.nOption = si.getValue(indieDamR, slv);
                o2.rOption = skillID;
                o2.tOption = t;
                tsm.putCharacterStatValue(IndieDamR, o2);
                EventManager.stopTimer(stimulatingConversationTimer);
                var interval = 4000;
                var executes = t / 4;
                stimulatingConversationTimer = EventManager.addFixedRateEvent(this::incrementStimulatingConversation, interval, interval, executes);
                break;
            case LORD_OF_THE_DEEP:
                o1.nOption = slv;
                o1.rOption = skillID;
                tsm.putCharacterStatValue(DevilishPower, o1);
                EventManager.stopTimer(lordOfTheDeepTimer);
                lordOfTheDeepTimer = EventManager.addFixedRateEvent(this::lordOfTheDeepPassiveEnergyConsumption, 1, 1, TimeUnit.SECONDS);
                break;
            case MELTDOWN:
                updateViperEnergy(getMaximumEnergy());
                o1.nOption = si.getValue(w, slv);
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(MeltDown, o1);
                o2.nOption = si.getValue(indiePMdR, slv);
                o2.rOption = skillID;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePMdR, o2);
                break;
            case ROLL_OF_THE_DICE_BUCC_DD:
                boolean isCharged = tsm.getViperEnergyCharge() > 0;
                int upbound = 6;
                if ((chr.hasSkill(ROLL_OF_THE_DICE_BUCC_DD) && chr.hasSkill(ROLL_OF_THE_DICE_BUCC_ADDITION)) ||
                        (chr.hasSkill(Corsair.ROLL_OF_THE_DICE_SAIR_DD) && chr.hasSkill(Corsair.ROLL_OF_THE_DICE_SAIR_ADDITION))) {
                    upbound = 7;
                }
                int diceThrow1 = new Random().nextInt(upbound) + 1;
                int diceThrow2 = new Random().nextInt(upbound) + 1;

                if ((chr.hasSkill(ROLL_OF_THE_DICE_BUCC_ENHANCE) || chr.hasSkill(Corsair.ROLL_OF_THE_DICE_SAIR_ENHANCE)) && Util.succeedProp(40)) {
                    diceThrow1 = new Random().nextInt(4) + 4;
                    diceThrow2 = new Random().nextInt(4) + 4;
                }

                int diceThrow3 = 1;
                if (chr.hasSkill(Job.LOADED_DICE)) {
                    if (chr.getQuestManager().getQuestById(GameConstants.LOADED_DICE_SELECTION) == null) {
                        chr.getScriptManager().createQuestWithQRValue(GameConstants.LOADED_DICE_SELECTION, "1");
                    }
                    diceThrow3 = Integer.parseInt(chr.getScriptManager().getQRValue(GameConstants.LOADED_DICE_SELECTION));

                    chr.write(UserPacket.effect(Effect.skillAffectedSelect(LOADED_DICE, chr.getSkillLevel(LOADED_DICE), -1, 1, false)));
                    chr.write(UserPacket.effect(Effect.skillAffectedSelect(LOADED_DICE, chr.getSkillLevel(LOADED_DICE), diceThrow3, -1, false)));
                    chr.write(UserPacket.effect(Effect.skillAffectedSelect(LOADED_DICE, chr.getSkillLevel(LOADED_DICE), diceThrow1, 0, true)));
                    chr.write(UserPacket.effect(Effect.skillAffectedSelect(LOADED_DICE, chr.getSkillLevel(LOADED_DICE), diceThrow2, -1, true)));
                    chr.write(UserPacket.effect(Effect.skillAffectedSelect(LOADED_DICE, chr.getSkillLevel(LOADED_DICE), -1, 2, false)));

                    o1.nOption = (diceThrow1 * 100) + (diceThrow2 * 10) + diceThrow3; // if rolled: 3, 5, and 6 the LoadedDice nOption = 356
                    o1.dOption = tsm.throwDice(diceThrow1, diceThrow2, diceThrow3);
                } else {
                    chr.write(UserPacket.effect(Effect.skillAffectedSelect(skillID, slv, diceThrow1, false)));
                    chr.write(UserPacket.effect(Effect.skillAffectedSelect(skillID, slv, diceThrow2, true)));
                    chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.skillAffectedSelect(skillID, slv, diceThrow1, false)));
                    chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.skillAffectedSelect(skillID, slv, diceThrow2, true)));

                    o1.nOption = (diceThrow1 * 10) + diceThrow2; // if rolled: 3 and 5, the DoubleDown nOption = 35
                    o1.dOption = tsm.throwDice(diceThrow1, diceThrow2);
                }
                if (diceThrow1 == 1 || diceThrow2 == 1 || diceThrow3 == 1) {
                    chr.reduceSkillCoolTime(skillID, (1000 * si.getValue(cooltime, slv)) / 2);
                }
                // Saving Grace Hyper Passive Skill
                if ((chr.hasSkill(ROLL_OF_THE_DICE_BUCC_SAVING_GRACE) || (chr.hasSkill(Corsair.ROLL_OF_THE_DICE_SAIR_SAVING_GRACE))) && diceThrow1 != diceThrow2) {
                    if (Util.succeedProp(40)) {
                        chr.resetSkillCoolTime(skillID);
                    }
                }
                if (diceThrow1 == 1 && diceThrow2 == 1 && diceThrow3 == 1) {
                    return;
                }
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(Dice, o1);
                tsm.sendSetStatPacket();
                if (isCharged && JobConstants.isBuccaneer(chr.getJob())) {
                    updateViperEnergy(tsm.getOption(EnergyCharged).nOption);
                }
                break;
        }
        tsm.sendSetStatPacket();
    }

    public int alterCooldownSkill(int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = chr.getSkill(skillId);
        if (skill != null) {
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());

            if (skillId == SPIRAL_ASSAULT && SkillChangeConstants.SPIRAL_ASSAULT_NO_CD) {
                return 0;
            }
        }
        return super.alterCooldownSkill(skillId, slv, attackInfo, sui, source);
    }


    // Hit related methods ---------------------------------------------------------------------------------------------


    @Override
    public void stopTimers() {
        EventManager.stopTimer(stimulatingConversationTimer);
        EventManager.stopTimer(lordOfTheDeepTimer);
        EventManager.stopTimer(perseveranceTimer);
        super.stopTimers();
    }
}
