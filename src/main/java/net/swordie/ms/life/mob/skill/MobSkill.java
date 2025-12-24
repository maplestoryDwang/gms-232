package net.swordie.ms.life.mob.skill;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.constants.MobConstants;
import net.swordie.ms.events.Events;
import net.swordie.ms.life.AppearingFoothold;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.loaders.containerclasses.FieldInfo;
import net.swordie.ms.loaders.containerclasses.MobSkillInfo;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.*;

import static net.swordie.ms.life.mob.skill.MobSkillStat.*;

/**
 * Created on 2/28/2018.
 */
public class MobSkill {
    private static final Logger log = LogManager.getRootLogger();
    private int skillIdx;
    private byte action;
    private int level;
    private int effectAfter;
    private int skillAfter;
    private byte priority;
    private boolean firstAttack;
    private boolean onlyFsm; // only force skill
    private boolean onlyOtherSkill;
    private int skillForbid;
    private int afterDelay;
    private int fixDamR;
    private boolean doFirst;
    private int preSkillIndex;
    private int preSkillCount;
    private String info;
    private String text;
    private boolean afterDead;
    private int afterAttack = -1;
    private int afterAttackCount;
    private int castTime;
    private int coolTime;
    private int delay;
    private int useLimit;
    private String speak;
    private int skillID;
    private int disease;
    private Rect range;
    private CallSkillWithData callSkillWithData;
    private List<CallSkillWithData> callSkills;

    public int getSkillIdx() {
        return skillIdx;
    }

    public void setSkillIdx(int skillIdx) {
        this.skillIdx = skillIdx;
    }

    public byte getAction() {
        return action;
    }

    public void setAction(byte action) {
        this.action = action;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public int getEffectAfter() {
        return effectAfter;
    }

    public void setEffectAfter(int effectAfter) {
        this.effectAfter = effectAfter;
    }

    public int getSkillAfter() {
        return skillAfter;
    }

    public void setSkillAfter(int skillAfter) {
        this.skillAfter = skillAfter;
    }

    public byte getPriority() {
        return priority;
    }

    public void setPriority(byte priority) {
        this.priority = priority;
    }

    public boolean getFirstAttack() {
        return firstAttack;
    }

    public void setFirstAttack(boolean firstAttack) {
        this.firstAttack = firstAttack;
    }

    public void setOnlyFsm(boolean onlyFsm) {
        this.onlyFsm = onlyFsm;
    }

    public boolean isOnlyFsm() {
        return onlyFsm;
    }

    public void setOnlyOtherSkill(boolean onlyOtherSkill) {
        this.onlyOtherSkill = onlyOtherSkill;
    }

    public boolean isOnlyOtherSkill() {
        return onlyOtherSkill;
    }

    public void setSkillForbid(int skillForbid) {
        this.skillForbid = skillForbid;
    }

    public int getSkillForbid() {
        return skillForbid;
    }

    public void setAfterDelay(int afterDelay) {
        this.afterDelay = afterDelay;
    }

    public int getAfterDelay() {
        return afterDelay;
    }

    public void setFixDamR(int fixDamR) {
        this.fixDamR = fixDamR;
    }

    public int getFixDamR() {
        return fixDamR;
    }

    public void setDoFirst(boolean doFirst) {
        this.doFirst = doFirst;
    }

    public boolean isDoFirst() {
        return doFirst;
    }

    public void setPreSkillIndex(int preSkillIndex) {
        this.preSkillIndex = preSkillIndex;
    }

    public int getPreSkillIndex() {
        return preSkillIndex;
    }

    public void setPreSkillCount(int preSkillCount) {
        this.preSkillCount = preSkillCount;
    }

    public int getPreSkillCount() {
        return preSkillCount;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public String getInfo() {
        return info == null ? "" : info;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getText() {
        return text == null ? "" : text;
    }

    public void setAfterDead(boolean afterDead) {
        this.afterDead = afterDead;
    }

    public boolean isAfterDead() {
        return afterDead;
    }

    public void setAfterAttack(int afterAttack) {
        this.afterAttack = afterAttack;
    }

    public int getAfterAttack() {
        return afterAttack;
    }

    public void setAfterAttackCount(int afterAttackCount) {
        this.afterAttackCount = afterAttackCount;
    }

    public int getAfterAttackCount() {
        return afterAttackCount;
    }

    public void setCastTime(int castTime) {
        this.castTime = castTime;
    }

    public int getCastTime() {
        return castTime;
    }

    public void setCoolTime(int coolTime) {
        this.coolTime = coolTime;
    }

    public int getCoolTime() {
        return coolTime;
    }

    public void setDelay(int delay) {
        this.delay = delay;
    }

    public int getDelay() {
        return delay;
    }

    public void setUseLimit(int useLimit) {
        this.useLimit = useLimit;
    }

    public int getUseLimit() {
        return useLimit;
    }

    public void setSpeak(String speak) {
        this.speak = speak;
    }

    public String getSpeak() {
        return speak == null ? "" : speak;
    }

    public int getSkillID() {
        return skillID;
    }

    public void setSkillID(int skillID) {
        this.skillID = skillID;
    }

    public void applyEffect(Mob mob, boolean fromOtherSkill) {
        MobTemporaryStat mts = mob.getTemporaryStat();
        short skillId = (short) getSkillID();
        short slv = (short) getLevel();
        MobSkillInfo msi = SkillData.getMobSkillInfoByIdAndLevel(skillId, slv);
        MobSkillID msID = MobSkillID.getMobSkillIDByVal(skillId);
        Field field = mob.getField();
        Option o = new Option(skillId);
        o.slv = slv;
        o.tOption = msi.getSkillStatIntValue(time);
        Option o2 = new Option(skillId);
        o2.slv = slv;
        o2.tOption = msi.getSkillStatIntValue(time);
        Rect rect = null;
        Set<Mob> mobs = new HashSet<>();
        Set<Char> chars = new HashSet<>();
        if (msi.hasRect()) {
            rect = mob.getRectAround(msi.getRect());
            if (mob.isFlip()) {
                rect.horizontalFlipAround(mob.getPosition().getX());
            }

            // manual rect for zakum arms (for Damage)
            if (msID == MobSkillID.Damage && MobConstants.isZakumArm(mob.getTemplateId())) {
                rect = MobSkillModule.getRectByZakumArmAndDamageLevel(mob.getTemplateId(), msi.getLevel(), rect);
            }

            mobs.addAll(mob.getField().getMobsInRect(rect));
            chars.addAll(mob.getField().getCharsInRect(rect));
        }
        if (msi.getSkillStatIntValue(fieldScript) != 0) {
            // mabye?
//            field.startScript(String.format("mobskill_%s_%d", msID.toString(), slv));
//            return;
        }
        switch (msID) {
            case PowerUp:
            case PowerUpM:
            case Pad:
                MobSkillModule.giveTempStat(mts, msi, o, mobs, MobStat.PowerUp);
                break;
            case MagicUp:
            case MagicUpM:
            case Mad:
                MobSkillModule.giveTempStat(mts, msi, o, mobs, MobStat.MagicUp);
                break;
            case PGuardUp:
            case PGuardUpM:
                MobSkillModule.giveTempStat(mts, msi, o, mobs, MobStat.PGuardUp);
                break;
            case MGuardUp:
            case MGuardUpM:
                MobSkillModule.giveTempStat(mts, msi, o, mobs, MobStat.MGuardUp);
                break;
            case Haste:
            case HasteM:
                MobSkillModule.giveTempStat(mts, msi, o, mobs, MobStat.Speed);
                break;
            case MobConsume:
                MobSkillModule.mobConsume(msi, mob, field);
                break;
            case HealM:
                MobSkillModule.healMobs(msi, mobs);
                break;
            case Seal:
            case Darkness:
            case Weakness:
            case Stun:
            case Curse:
            case Poison:
            case Slow:
            case Undead:
            case Fear:
            case PainMark:
            case UserMorph:
            case FireBomb:
            case DeathMark:
            case DispelItemOption:
            case Attract:
            case VenomSnake:
            case Lapidification:
            case ReverseInput:
            case StopMotion:
            case StopPortion:
                MobSkillModule.applyDiseaseToPlayers(slv, msID, chars, this);
                break;
            case ReturnTeleport:
                Char chr = chars.size() == 0 ? null : Util.getRandomFromCollection(chars);
                if(chr != null) {
                    o.nOption = (chr.getPosition().getX() << 16) | chr.getPosition().getY();
                    o.rOption = (1 << 16) | MobSkillID.ReturnTeleport.getVal();
                    o.tOption = 5;
                    chr.getTemporaryStatManager().putCharacterStatValue(CharacterTemporaryStat.ReturnTeleport, o);
                    chr.getTemporaryStatManager().sendSetStatPacket();
                }
                break;
            case Dispel:
                break;
            case AreaFire:
            case AreaForce:
            case AreaTimezone:
            case AreaTosp:
            case AreaAbnormal:
            case AreaMobBuff:
            case AreaWarning:
            case AreaForceFromUser:
            case GloomLaserBeam:
                MobSkillModule.createAffectedArea(mob, skillId, slv, msi, msID, field);
                break;
            case AreaPoison:
                MobSkillModule.createAreaPoison(mob, fromOtherSkill, skillId, slv, msi, field);
                break;
            case PhysicalImmune:
                MobSkillModule.giveImmunity(mts, msi, o, MobStat.PImmune);
                break;
            case MagicImmune:
                MobSkillModule.giveImmunity(mts, msi, o, MobStat.MImmune);
                break;
            case Teleport:
                MobSkillModule.teleportMob(mob, msi, field);
                break;
            case PMCounter:
                MobSkillModule.giveTotalImmunity(mob, mts, msi, o, o2);
                break;
            case PCounter:
                MobSkillModule.givePadImmunityAndCounter(mob, mts, msi, o, o2);
                break;
            case MCounter:
                MobSkillModule.giveMadImmunityAndCounter(mob, mts, msi, o, o2);
                break;
            case Invincible:
                MobSkillModule.giveInvincibility(mob, mts, msi, o, o2, this);
                break;
            case Damage:
                MobSkillModule.onDamage(mob, msi, chars);
                break;
            case Magnet:
                MobSkillModule.createMagnet(mob, msi, o, chars, field);
                break;
            case Summon:
            case Summon2:
                MobSkillModule.summonMobs(mob, msi, field, isAfterDead());
                break;
            case CastingBar:
                MobSkillModule.broadcastCastingBar(mob, msi, field);
                break;
            case ObstacleAttack:
                MobSkillModule.createObstacleAttack(mob, msi, field);
                break;
            case BounceAttack:
                MobSkillModule.createBounceAttack(mob, slv, msi, field);
                break;
            case Toss:
                MobSkillModule.tossChars(mob, msi, field);
                break;
            case FireAtRandomAttack:
                MobSkillModule.fireAtRandomAttacks(mob, slv, msi, field);
                break;
            case LaserAttack:
                MobSkillModule.createLaserAttack(mts, msi, o);
                break;
            case LaserControl:
                // Not needed? Automatically handled well by the controller
                break;
            case LucidAttack:
                MobSkillModule.handleLucidSkill(mob, slv, msi, field);
                break;
            case PapulatusSkill:
                MobSkillModule.handlePapulatusSkill(mts, slv, msi, field, o, o2);
                break;
            case BossWillAttack:
                MobSkillModule.handleBossWillAttack(mob, msi);
            case BanMap:
                MobSkillModule.banMap(mob, field);
                break;
            case Dazzle:
                MobSkillModule.dazzle(mob, msi, field, o);
            case HillaVamp:
                MobSkillModule.hillaVamp(field);
                break;
            case Unk:
                log.debug(String.format("[MobSkill::applyEffect] Unknown mob skillID %d, slv = %d", skillId, slv));
                break;
            default:
                log.debug(String.format("[MobSkill::applyEffect] Unhandled mob skillID %s, slv = %d", msID, getLevel()));
                break;
        }

        Events.onMobSkill(mob, msi, msID);

        if (msi.getOtherSkillID() > 0 && msi.getOtherSkillLev() > 0) {
            int otherSkillID = msi.getOtherSkillID();
            int otherSkillLev = msi.getOtherSkillLev();
            MobSkill mobSkill;
            mobSkill = mob.getSkills().stream()
                    .filter(ms -> ms.getSkillID() == otherSkillID
                            && ms.getLevel() == otherSkillLev
                            && mob.hasSkillOffCooldown(ms.getSkillID(), ms.getLevel()))
                    .findFirst()
                    .orElse(null);
            if (mobSkill != null) {
                mobSkill.applyEffect(mob, true);
            }
        }
    }


    public static void extraSkillDelayInfo(Mob mob, MobSkillInfo msi, List<Rect> rects) {
        Field field = mob.getField();
        FieldInfo fieldInfo = field.getInfo();
        MobSkillID msID = MobSkillID.getMobSkillIDByVal(msi.getSkillId());
        int slv = msi.getLevel();
        switch (msID) {
            case AreaFire:
            case AreaForce:
            case AreaTosp:
            case AreaAbnormal:
            case AreaMobBuff:
            case AreaWarning:
            case AreaForceFromUser:
            case GloomLaserBeam:
                if (msi.getLt2() == null) {
                    // no outer rect available
                    return;
                }

                var areaCount = msi.getSkillStatIntValue(count);
                var affectedAreaRect = new Rect(msi.getLt(), msi.getRb());
                var outerRec = mob.getRectAround(new Rect(msi.getLt2(), msi.getRb2()));

                List<Rect> randRects = outerRec.getRandomRectsInside(field, areaCount, affectedAreaRect);
                rects.addAll(randRects);
                mob.addSkillDelayRects(msID.getVal(), msi.getLevel(), rects);
                break;
            case BounceAttack:
                // Lotus Falling Footholds
                if (slv == 6 || slv == 13 || slv == 14 || slv == 16) {
                    int afhCount = msi.getSkillStatIntValue(count);
                    int proc = BossConstants.LOTUS_FALLING_FOOTHOLD_CHANCE;
                    for (int i = 1; i <= afhCount; i++) {
                        if (Util.succeedProp(proc)) {
                            Position position = new Position(-630 + (i * 210), -16);
                            AppearingFoothold afh = AppearingFoothold.getAppearingFootholdBy(String.format("swoo%d", i), position);
                            mob.addAppearingFoothold(afh);
                            int width = BossConstants.LOTUS_FALLING_FOOTHOLD_WIDTH;
                            rects.add(new Rect(position.getX() - width, -81, position.getX() + width, -16));
                        } else {
                            proc += (100 - proc) / afhCount; // ensure there's atleast 1 FallingFoothold
                        }
                    }
                }
                break;
            case Toss:
                // Lotus Tossing Skill
                if (slv > 0 && slv <= 4) {
                    Random random = new Random();
                    int sections = BossConstants.LOTUS_AMOUNT_OF_BEAMS;
                    for (int i = 1; i <= sections; i++) {
                        int lRange = ((i - 1) * (fieldInfo.getWidth() / sections)) + fieldInfo.getVrLeft();
                        int rRange = (i * (fieldInfo.getWidth() / sections)) + fieldInfo.getVrLeft();

                        int xPos = random.nextInt(rRange - lRange) + lRange;
                        if (xPos + 260 > fieldInfo.getVrRight()) {
                            xPos = fieldInfo.getVrRight() - 260;
                        }

                        rects.add(new Rect(xPos, -1016, xPos + 260, -16));
                    }
                }
                break;
            case FireAtRandomAttack:
                // Lotus Purple Orbs Attack
                if (slv > 0 && slv <= 4) {
                    rects.add(new Rect(211, -316, 331, -6));
                    rects.add(new Rect(-227, -316, -107, -6));
                    rects.add(new Rect(10, -316, 130, -6));
                    rects.add(new Rect(258, -316, 378, -6));
                    rects.add(new Rect(-133, -316, -13, -6));
                    rects.add(new Rect(-666, -316, -546, -6));
                    rects.add(new Rect(-152, -316, -32, -6));
                    rects.add(new Rect(577, -316, 697, -6));
                    rects.add(new Rect(300, -316, 420, -6));
                    rects.add(new Rect(-374, -316, -254, -6));
                    mob.setPurpleAttacks(rects);
                }
                break;
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MobSkill mobSkill = (MobSkill) o;
        return skillIdx == mobSkill.skillIdx &&
                skillID == mobSkill.skillID &&
                level == mobSkill.level;
    }

    @Override
    public int hashCode() {
        return Objects.hash(skillIdx, skillID, level);
    }

    public int getDisease() {
        return disease;
    }

    public void setDisease(int disease) {
        this.disease = disease;
    }

    @Override
    public String toString() {
        return "MobSkill{" +
                "skillId=" + skillID +
                ", level=" + level +
                '}';
    }

    public void setCallSkillWithData(CallSkillWithData callSkillWithData) {
        this.callSkillWithData = callSkillWithData;
    }

    public CallSkillWithData getCallSkillWithData() {
        return callSkillWithData;
    }

    public Rect getRange() {
        return range;
    }

    public void setRange(Rect range) {
        this.range = range;
    }

    public List<CallSkillWithData> getCallSkills() {
        return callSkills;
    }

    public void setCallSkills(List<CallSkillWithData> callSkills) {
        this.callSkills = callSkills;
    }
}
