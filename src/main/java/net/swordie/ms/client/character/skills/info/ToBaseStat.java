package net.swordie.ms.client.character.skills.info;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillStat;
import net.swordie.ms.client.character.skills.temp.DiceStat;
import net.swordie.ms.client.jobs.adventurer.archer.BowMaster;
import net.swordie.ms.client.jobs.adventurer.archer.Marksman;
import net.swordie.ms.client.jobs.adventurer.warrior.Hero;
import net.swordie.ms.client.jobs.legend.Mercedes;
import net.swordie.ms.client.jobs.nova.AngelicBuster;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.loaders.SkillData;

import java.util.Map;

/**
 * Created on 4-7-2019.
 *
 * @author Asura
 */
public class ToBaseStat {
    // | 8  Flag on sEffect for MHP% attacks only ?

    // TODO In Order of how Dmg is Calculated (Client side)
    // Dmg Reduce Summon Skill => Mirrored Target & Emerald Dust
    // AchillesReduce => (31120009, 51120003, 21120004, 13110025, 11110025, 1210015) | decimal = 13110025 || 11110025
    // ComboBarrier nOption / 1000
    // PartyBarrier nOption / 100
    // SilhouetteMirage xOption
    // MagicShield nOption / 100
    // IceAura SkillStat Y gets grabbed as Dmg Reduce
    // DamAbsorbShield Gets grabbed from user data
    // Aegis Blessing and Its CTS  400001053 (SkillStat X)
    // Unknown CTS from option / 100
    // Unknown CTS from option / 100
    // ElementalCharge zOption / 100
    // Mechanic - has GiantRobot: SG-88 Active
    // AranBeyonderDamAbsorb nOption
    // MichaelSoulLink yOption / 100
    // Nobility SkillStat X gets grabbed as Dmg Reduce
    // ParashockGuard SkillStat Y gets grabbed as Dmg Reduce
    // BMAura SkillStat Y gets grabbed as Dmg Reduce
    // PowerTransferGauge SkillStat X gets grabbed as Dmg Reduce
    // BlessOfDarkness SkillStat X gets grabbed as Dmg Reduce
    // DamageReduce nOption
    // If Mech on Vehicle 1932016, & has Mech Alloy Research, SkillStat X
    // KinesisPsychicEnergeShield SkillStat X gets grabbed as Dmg Reduce
    // Charge Mastery & Advanced Charge Mastery Skill Stat Y
    // RWBarrier nOption
    // Unknown CTS from option
    // Unknown CTS from option
    // Luck of the Draw rOption with Unknown CTS
    // Unknown CTS from option
    // Unknown CTS SkillStat Unknown grabbed as Dmg Reduce
    // Pirate Revenge
    // Gale Barrier
    // Darkness Aura w/ Iron Will



    // BlessOfDarkness SkillStat X gets grabbed as Dmg Reduce

    public static Map<BaseStat, Integer> comboCounter(Char chr, Option o, Map<BaseStat, Integer> stats) {
        int orbAmount = o.nOption - 1;
        int totalFdBonus = 0;
        Skill skill = chr.getSkill(o.rOption);
        if (skill != null) {
            switch (skill.getSkillId()) {
                case Hero.ADVANCED_COMBO:
                    totalFdBonus = chr.getSkillStatValue(SkillStat.v, Hero.ADVANCED_COMBO);
                    break;
                case Hero.COMBO_SYNERGY:
                    totalFdBonus = chr.getSkillStatValue(SkillStat.indieDamR, Hero.COMBO_SYNERGY);
                    break;
                case Hero.COMBO_ATTACK:
                    stats.put(BaseStat.pad, orbAmount * chr.getSkillStatValue(SkillStat.y, Hero.COMBO_ATTACK));
                    break;
            }
        }
        if (chr.hasSkill(Hero.ADVANCED_COMBO_REINFORCE)) {
            totalFdBonus += chr.getSkillStatValue(SkillStat.damR, Hero.ADVANCED_COMBO_REINFORCE);
        }

        stats.put(BaseStat.fd, Math.max(0, orbAmount * totalFdBonus));
        return stats;
    }

    public static Map<BaseStat, Integer> focusedFury(Char chr, Option o, Map<BaseStat, Integer> stats) {
        Skill skill = chr.getSkill(BowMaster.FOCUSED_FURY);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();

        stats.put(BaseStat.asr, (si.getValue(SkillStat.x, slv) * o.nOption));
        return stats;
    }

    public static Map<BaseStat, Integer> transferPowerGauge(Char chr, Option o, Map<BaseStat, Integer> stats) {
        SkillInfo si = SkillData.getSkillInfoById(AngelicBuster.POWER_TRANSFER);
        int slv = chr.getSkillLevel(AngelicBuster.POWER_TRANSFER);
        if (o.rOption == AngelicBuster.POWER_TRANSFER || o.rOption == Marksman.AGGRESSIVE_RESISTANCE) {
            stats.put(BaseStat.dmgReduce, si.getValue(SkillStat.x, slv));
        }
        return stats;
    }

    public static Map<BaseStat, Integer> rollDice(Char chr, Option o, Map<BaseStat, Integer> stats) {
        int i = 0;
        for (int val : o.dOption) {
            DiceStat diceStat = DiceStat.getByOrdinal(i);
            if (diceStat != null && val > 0) {
                stats.put(DiceStat.getBaseStatByDiceStat(diceStat), val);
            }
            i++;
        }

        return stats;
    }

    public static Map<BaseStat, Integer> ignisRoar(Char chr, Option o, Map<BaseStat, Integer> stats) {
        Skill skill = chr.getSkill(Mercedes.IGNIS_ROAR);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        int multi = si.getValue(SkillStat.x, slv);
        int stack = o.nOption;

        stats.put(BaseStat.fd, multi * stack);

        return stats;
    }

    public static Map<BaseStat, Integer> elementalDrain(Char chr, Option o, Map<BaseStat, Integer> stats) {
        int skillId = o.rOption;
        SkillInfo si = SkillData.getSkillInfoById(skillId);
        int multi = si.getValue(SkillStat.x, 1);
        int stack = o.nOption;
        stats.put(BaseStat.damR, multi * stack);

        return stats;
    }

    public static Map<BaseStat, Integer> blessEnsemble(Char chr, Option o, Map<BaseStat, Integer> stats) {
        int skillId = o.rOption;
        SkillInfo si = SkillData.getSkillInfoById(skillId);
        int multi = si.getValue(SkillStat.x, 1);
        int stack = o.nOption;
        stats.put(BaseStat.damR, multi * stack);

        return stats;
    }
}

