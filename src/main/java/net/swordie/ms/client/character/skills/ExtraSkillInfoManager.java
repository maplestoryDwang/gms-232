package net.swordie.ms.client.character.skills;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.jobs.adventurer.thief.BladeMaster;
import net.swordie.ms.client.jobs.adventurer.warrior.Paladin;
import net.swordie.ms.client.jobs.anima.Lara;
import net.swordie.ms.client.jobs.cygnus.DawnWarrior;
import net.swordie.ms.client.jobs.resistance.Xenon;
import net.swordie.ms.life.mob.Mob;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created on 23/01/2021.
 *
 * @author Asura
 */
public class ExtraSkillInfoManager {

    /**
     * Used for alterations to ExtraSkillInfo.
     *
     * @param chr               Char that has done the attack.
     * @param attackInfo        AttackInfo of Char's Attack
     * @param extraSkillList    Extra Skills
     * @return                  List of ExtraSkillInfo that have been altered to work with GMS.
     */
    public static List<ExtraSkillInfo> alterExtraSkillInfo(Char chr, AttackInfo attackInfo, List<Integer> extraSkillList) {
        var skillId = attackInfo.skillId;
        var hasHitMobs = attackInfo.mobAttackInfo.size() > 0;

        List<ExtraSkillInfo> esiList = new ArrayList<>();

        switch (skillId) {
            case Paladin.MIGHTY_MJOLNIR:
                if (hasHitMobs) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(attackInfo.mobAttackInfo.get(0).mobId);
                    for (int extraSkill : extraSkillList) {
                        if (mob == null) {
                            continue;
                        }

                        var esi = new ExtraSkillInfo(chr, extraSkill);

                        // Must be repositioned to be on Mob hit
                        if (extraSkill == Paladin.MIGHTY_MJOLNIR_EXPLOSION) {
                            esi.position = mob.getPosition();
                        }

                        esiList.add(esi);
                    }

                }
                break;

            case BladeMaster.PHANTOM_BLOW:
            case BladeMaster.BLADE_FURY:
                if (!chr.hasSkillOnCooldown(BladeMaster.HAUNTED_EDGE)) {
                    for (int extraSkill : extraSkillList) {
                        esiList.add(new ExtraSkillInfo(chr, extraSkill));
                    }
                }
                break;

            case DawnWarrior.FLARE_SLASH_SUN:
                if (!chr.hasSkillOnCooldown(DawnWarrior.FLARE_SLASH_SUN)) {
                    for (int extraSkill : extraSkillList) {
                        esiList.add(new ExtraSkillInfo(chr, extraSkill));
                    }
                    chr.addSkillCoolTime(DawnWarrior.FLARE_SLASH_SUN, 12000);
                }
                break;

            case DawnWarrior.FLARE_SLASH_MOON:
                if (!chr.hasSkillOnCooldown(DawnWarrior.FLARE_SLASH_SUN)) {
                    for (int extraSkill : extraSkillList) {
                        esiList.add(new ExtraSkillInfo(chr, extraSkill));
                    }
                    chr.addSkillCoolTime(DawnWarrior.FLARE_SLASH_SUN, 12000);
                }
                break;

            case Xenon.CORE_OVERLOAD_ATTACK:
            case Lara.ABSORPTION_SUNLIT_GRAIN_ACTIVE_2:
            case Lara.ABSORPTION_RIVER_PUDDLE_DOUSE_ACTIVE_2:
            case Lara.ABSORPTION_FIERCE_WIND_ACTIVE_2:
                break;

            default:
                esiList = extraSkillList.stream().map(i -> new ExtraSkillInfo(i, chr.getPosition(), attackInfo.left, 0, 0)).collect(Collectors.toList());
                break;
        }

        return esiList;
    }

}
