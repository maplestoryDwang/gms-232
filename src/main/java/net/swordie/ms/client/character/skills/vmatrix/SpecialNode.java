package net.swordie.ms.client.character.skills.vmatrix;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.MobAttackInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.connection.packet.Effect;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.connection.packet.UserRemote;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.loaders.containerclasses.VCoreInfo;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

/**
 * Created on 30-9-2019.
 *
 * @author Asura
 */
public class SpecialNode {

    private long checkTime; // when condition should be met
    private int killCount; // amount of mobs killed
    private int attackCount; // attack count
    private int hitCount; // landed attacks
    private int attackCountMob; // attack same mob count
    private int attackCountMobObjectID; // same mob Object ID
    private int attackCountMobTemplateId; // same mob Template ID
    private boolean comboKillTimerActive;

    public SpecialNode() {
    }

    public long getCheckTime() {
        return checkTime;
    }

    public void setCheckTime(long checkTime) {
        this.checkTime = checkTime;
    }

    public int getKillCount() {
        return killCount;
    }

    public void setKillCount(int killCount) {
        this.killCount = killCount;
    }

    public int getAttackCount() {
        return attackCount;
    }

    public void setAttackCount(int attackCount) {
        this.attackCount = attackCount;
    }

    public int getHitCount() {
        return hitCount;
    }

    public void setHitCount(int hitCount) {
        this.hitCount = hitCount;
    }

    public int getAttackCountMob() {
        return attackCountMob;
    }

    public void setAttackCountMob(int attackCountMob) {
        this.attackCountMob = attackCountMob;
    }

    public int getAttackCountMobObjectID() {
        return attackCountMobObjectID;
    }

    public void setAttackCountMobObjectID(int attackCountMobObjectID) {
        this.attackCountMobObjectID = attackCountMobObjectID;
    }

    public int getAttackCountMobTemplateId() {
        return attackCountMobTemplateId;
    }

    public void setAttackCountMobTemplateId(int attackCountMobTemplateId) {
        this.attackCountMobTemplateId = attackCountMobTemplateId;
    }

    public boolean isComboKillTimerActive() {
        return comboKillTimerActive;
    }

    public void setComboKillTimerActive(boolean comboKillTimerActive) {
        this.comboKillTimerActive = comboKillTimerActive;
    }


    public void activateSpecialNode(String activationType, Char chr, AttackInfo attackInfo) {
        VCoreInfo specialNode = chr.getActiveSpecialNode();
        if (specialNode == null || (!specialNode.getType().contains(activationType) && !(activationType.contains("Count") && specialNode.getType().contains("prob"))) || chr.hasSkillOnCooldown(specialNode.getSkillID())) {
            return;
        }
        if (checkIfConditionMet(activationType, chr, attackInfo)) {
            giveEffect(chr);
        }
    }

    /**
     * Checks if the SpecialNode's condition type has been met.
     * True if met, False otherwise.
     *
     * @param activationType type of condition.
     * @param chr character to check and reward if condition is met.
     * @param attackInfo info about the attack used.
     * @return If condition has been met return true, False otherwise.
     */
    private boolean checkIfConditionMet(String activationType, Char chr, AttackInfo attackInfo) {
        Field field = chr.getField();
        VCoreInfo specialNode = chr.getActiveSpecialNode();
        if (specialNode == null || (attackInfo == null && activationType.equalsIgnoreCase("count"))) {
            return false;
        }

        int validTime = specialNode.getValidTime();

        // Condition Types
        switch (specialNode.getType()) {
            case "killCount": // [count] kills within [validTime]

                // Initiate CheckTime
                if (getKillCount() <= 0) {
                    long curTime = Util.getCurrentTimeLong();
                    setCheckTime(curTime + validTime);
                }
                int count = getKillCount();

                // Count Kills
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    if (mai.mobDies) {
                        setKillCount(getKillCount() + 1);
                    }
                }

                // When CheckTime has been met, check if KillCount has been met
                if (Util.getCurrentTimeLong() >= getCheckTime()) {
                    setKillCount(0);
                    if (count >= specialNode.getCount()) {
                        return true;
                    }
                }
                break;

            case "attackCount": // every [count]th attack, within [validTime]

                // Initiate CheckTime
                if (getAttackCount() <= 0) {
                    long curTime = Util.getCurrentTimeLong();
                    setCheckTime(curTime + validTime);
                }
                count = getAttackCount();

                // Count Attacks
                setAttackCount(getAttackCount() + attackInfo.mobAttackInfo.size());

                // When CheckTime has been met, check if AttackCount has been met
                if (Util.getCurrentTimeLong() >= getCheckTime()) {
                    setAttackCount(0);
                    if (count >= specialNode.getCount()) {
                        return true;
                    }
                }
                break;

            case "attackCountMob": // same mob is hit [count] times in [validTime]
                // Initiate CheckTime
                if (getAttackCountMob() <= 0) {
                    long curTime = Util.getCurrentTimeLong();
                    setCheckTime(curTime + validTime);
                }
                count = getAttackCountMob();

                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    if (mai.mob == null) {
                        continue;
                    }
                    if (getAttackCountMob() <= 0) {
                        setAttackCountMobTemplateId(mai.mob.getTemplateId());
                        setAttackCountMobObjectID(mai.mob.getObjectId());
                    }
                    if (getAttackCountMobObjectID() == mai.mob.getObjectId() && getAttackCountMobTemplateId() == mai.mob.getTemplateId()) {
                        setAttackCountMob(getAttackCountMob() + mai.damages.length);
                    }
                }

                if (Util.getCurrentTimeLong() >= getCheckTime()) {
                    setAttackCountMob(0);
                    setAttackCountMobObjectID(-1);
                    setAttackCountMobTemplateId(-1);
                    if (count >= specialNode.getCount()) {
                        return true;
                    }
                }
                break;

            case "combokill": // activates every multiple of [count] is reached in combo kills within [validTime]
                if (isComboKillTimerActive() && (Util.getCurrentTimeLong() <= getCheckTime())) {
                    setComboKillTimerActive(false);
                    return true;
                } else if (isComboKillTimerActive() && Util.getCurrentTimeLong() > getCheckTime()) {
                    setComboKillTimerActive(false);
                }

                if (!isComboKillTimerActive()) {
                    long curTime = Util.getCurrentTimeLong();
                    setCheckTime(curTime + validTime);
                    setComboKillTimerActive(true);
                }
                break;

            case "hitCount": // [count] hits within [validTime]
                // Initiate CheckTime
                if (getHitCount() <= 0) {
                    long curTime = Util.getCurrentTimeLong();
                    setCheckTime(curTime + validTime);
                }
                count = getHitCount();

                setHitCount(getHitCount() + 1);

                if (Util.getCurrentTimeLong() >= getCheckTime()) {
                    setHitCount(0);
                    if (count >= specialNode.getCount()) {
                        return true;
                    }
                }
                break;

            case "prob": // [prob] chance of activation upon using attacks
                int proc = (int) (specialNode.getProp() * 1000);
                if (Util.succeedProp(proc)) {
                    return true;
                }
                break;

            case "cooltime": // activate everytime a skill is used
            case "rune": // activates upon rune usages
            case "die": // activates upon death
                return true;
        }
        return false;
    }


    /**
     * Gives the effect based on the effectType of the Special Node.
     *
     * @param chr character to apply the effect to.
     */
    private void giveEffect(Char chr) {
        VCoreInfo specialNode = chr.getActiveSpecialNode();
        if (specialNode == null || chr.hasSkillOnCooldown(specialNode.getSkillID())) {
            return;
        }

        var sui = new SkillUseInfo();
        sui.skillID = specialNode.getSkillID();
        sui.slv = specialNode.getSlv();

        switch (specialNode.getEffectType()) {
            case "selfbuff":
                // Requires special cooltime given. as handleSkill can call giveEffect. but now the conditions have to be not met.
                chr.addSkillCoolTime(specialNode.getSkillID(), specialNode.getCooltime());
                chr.getJobHandler().handleSkill(chr, chr.getTemporaryStatManager(), specialNode.getSkillID(), specialNode.getSlv(), null, sui);
                break;
            case "reduceCooltime":
                int reduceR = specialNode.getReduceR();
                for (var skillId : chr.getSkillCoolTimes().keySet()) {
                    if (!SkillConstants.isNoCooltimeReductionAppliedSkill(skillId)) {
                        int decrease = (int) ((reduceR * chr.getRemainingCoolTime(skillId)) / 100D);
                        chr.reduceSkillCoolTime(skillId, decrease);
                    }
                }
                break;
            case "heal":
                int healR = specialNode.getHealR();
                chr.heal(chr.getHPPerc(healR));
                break;
        }
        chr.write(UserPacket.effect(Effect.avatarOriented("Effect/CharacterEff.img/VMatrixSP")));
        chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.avatarOriented("Effect/CharacterEff.img/VMatrixSP")));
        chr.addSkillCoolTime(specialNode.getSkillID(), specialNode.getCooltime());
    }
}
