package net.swordie.ms.constants;

import net.swordie.ms.client.character.commerce.voyage.VoyageConstants;
import net.swordie.ms.life.mob.ForcedMobStat;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.util.container.Tuple;
import net.swordie.ms.world.field.fieldevents.timedfieldevents.elitechampions.BlackCrescendoSlimeEvent;

import java.util.HashMap;
import java.util.Map;

public class MobConstants {
    public static final int QUEST_MOB_START = 9000000;
    public static final int MOB_SKILL_DEFAULT_DELAY = 7500;

    private final static Map<Tuple<Integer, Boolean>, Integer> mobNxBaseAmounts = new HashMap<>();

    public static boolean isZakumBody(int templateId) {
        return templateId == BossConstants.EASY_ZAKUM_BODY
                || templateId == BossConstants.NORMAL_ZAKUM_BODY
                || templateId == BossConstants.HARD_ZAKUM_BODY;
    }

    public static boolean isZakumArm(int templateId) {
        final int ZAKUM_ARMS = 8;
        return (templateId > BossConstants.EASY_ZAKUM_BODY && templateId <= BossConstants.EASY_ZAKUM_BODY + ZAKUM_ARMS) ||
                (templateId > BossConstants.NORMAL_ZAKUM_BODY && templateId <= BossConstants.NORMAL_ZAKUM_BODY + ZAKUM_ARMS) ||
                (templateId > BossConstants.HARD_ZAKUM_BODY && templateId <= BossConstants.HARD_ZAKUM_BODY + ZAKUM_ARMS);

    }

    public static boolean isChaosZakumArm(int templateId) {
        final int ZAKUM_ARMS = 8;
        return (templateId > BossConstants.HARD_ZAKUM_BODY && templateId <= BossConstants.HARD_ZAKUM_BODY + ZAKUM_ARMS);

    }

    public static int getSkillDelay(int mobTemplateID){
        switch (mobTemplateID) {
            case BossConstants.VON_BON_CHAOS:
            case BossConstants.VON_BON_NORMAL:
            case BossConstants.CHAOS_CRIMSON_QUEEN_JOYOUS:
            case BossConstants.CHAOS_CRIMSON_QUEEN_SIMMERING:
            case BossConstants.CHAOS_CRIMSON_QUEEN_SORROWFUL:
            case BossConstants.CHAOS_CRIMSON_QUEEN_WRATHFUL:
                return 2000;
            default:
                return MOB_SKILL_DEFAULT_DELAY;
        }
    }

    public static boolean isZakumFlame(int templateId) {
        return templateId == 8800117;
    }

    public static boolean isZakumArmRegen(int templateId) {
        return templateId >= 8800130 && templateId <= 8800137;
    }

    public static boolean isMagnus(int templateId) {
        return templateId == 8880000 || templateId == 8880002 || templateId == 8880010;
    }

    public static boolean isDamien(int templateId) {
        return templateId >= 8880100 && templateId <= 8880131;
    }

    public static double getBuffMultiplierFromRegion(int prefix) {
        double multi = prefix / 100D;
        if (prefix == 410) {
            // end game grandis
            multi *= 2;
        } else if (prefix >= 900) {
            // quest maps
            return 1;
        }
        return 3 * multi;
    }

    public static boolean isUnionRaidBoss(int template) {
        return isUnionRaidNormalBoss(template) || isUnionRaidShieldBoss(template);
    }

    public static boolean isUnionRaidShieldBoss(int template) {
        return template == 9833101 ||
                template == 9833102 ||
                template == 9833103 ||
                template == 9833104 ||
                template == 9833105;
    }

    public static boolean isUnionRaidNormalBoss(int template) {
        return template == 9833201 ||
                template == 9833202 ||
                template == 9833203 ||
                template == 9833204 ||
                template == 9833205;
    }

    public static boolean isInfernoWolf(int templateId) {
        return templateId == 9101078;
    }

    public static boolean isPublicDropsMob(int templateId) {
        return isInfernoWolf(templateId);
    }

    public static boolean isWillBeholderEye(int templateId) {
        return templateId == BossConstants.BEHOLDERS_EYE_BLUE || templateId == BossConstants.BEHOLDERS_EYE_PURPLE;
    }

    /**
     * Method used to remove invisible or additional mobs of a boss. For example invisible mobs in a boss.
     * @param templateId
     * @return
     */
    public static int[] getAttachedMobs(int templateId) {
        switch (templateId) {
            case VoyageConstants
                    .GROSSO_POLPO:
                return new int[]{VoyageConstants.GROSSO_POLPO_ARMS};
        }
        return new int[0];
    }

    public static int getBaseNxDropAmount(Mob mob) {
        var key = new Tuple<>(mob.getTemplateId(), mob.isBuffed());
        if (mobNxBaseAmounts.containsKey(key)) {
            return mobNxBaseAmounts.get(key);
        }

        // yuno
//        if (getExp() == 0) {
//            return 0;
//        }
//        int base = (int) ((Math.sqrt(getMaxHp() / 100D)) * ((double) getMaxHp() / (getExp() * getLevel())));
//        return Util.getRandom(base, (base + base / 10)); // base + 10% random

        int base = 0;
        if (mob.getTemplateId() == 9305655) {
            // dummy
        } else {
            // sjonnie
            long hp = mob.getMaxHp();
            ForcedMobStat fms = mob.getForcedMobStat();
            base = (int) ((fms.getLevel() / 2D) * (Math.pow(hp, (1 / 5D))));
            if (!mob.isBuffed() && !mob.getMobInfo().isBoss()) {
                base /= 10;
            }
        }

        mobNxBaseAmounts.put(key, base);

        return base; // base + 10% random
    }

    public static int getZakumArmNum(int templateId) {
        if (!isZakumArm(templateId)) {
            return -1;
        }

        final int ZAKUM_ARMS = 8;

        if (templateId > BossConstants.EASY_ZAKUM_BODY && templateId <= BossConstants.EASY_ZAKUM_BODY + ZAKUM_ARMS) {
            return templateId - BossConstants.EASY_ZAKUM_BODY - 1;
        }

        if (templateId > BossConstants.NORMAL_ZAKUM_BODY && templateId <= BossConstants.NORMAL_ZAKUM_BODY + ZAKUM_ARMS) {
            return templateId - BossConstants.NORMAL_ZAKUM_BODY - 1;
        }

        if (templateId > BossConstants.HARD_ZAKUM_BODY && templateId <= BossConstants.HARD_ZAKUM_BODY + ZAKUM_ARMS) {
            return templateId - BossConstants.HARD_ZAKUM_BODY - 1;
        }

        return -1;
    }

    public static Mob alterMobRevive(Mob mob) {
        switch (mob.getTemplateId()) {
            case BossConstants.RANMARU_HARD_BODY_2:
            case BossConstants.RANMARU_HARD_BODY_3:
            case BossConstants.RANMARU_HARD_BODY_4:
            case BossConstants.RANMARU_HARD_BODY_5:
                mob.setMaxHp(BossConstants.RANMARU_HARD_HP);
                mob.setHp(BossConstants.RANMARU_HARD_HP);
                break;
        }

        return mob;
    }

    public static boolean isDoNotReviveMob(int templateId) {
        return templateId == BossConstants.RANMARU_HARD_DEAD_BODY
                || templateId == BossConstants.RANMARU_NORMAL_DEAD_BODY

                // Handled in BlackCrescendoSlimeEvent
                || templateId == BlackCrescendoSlimeEvent.BLACK_CRESCENDO_SLIME_1
                || templateId == BlackCrescendoSlimeEvent.BLACK_CRESCENDO_SLIME_2
                || templateId == BlackCrescendoSlimeEvent.BLACK_CRESCENDO_SLIME_3
                ;
    }

    public static boolean isCantBuffMob(int templateId){
        return templateId == 9601709;
    }

    public static boolean isFriendlyMob(int templateId) {
        return templateId == 9300902; //Spring Bunny for Moon Bunny PQ
    }
}

