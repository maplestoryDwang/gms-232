package net.swordie.ms.connection.packet.field;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.mob.boss.lucid.*;
import net.swordie.ms.life.mob.skill.MobSkillID;
import net.swordie.ms.util.Position;
import net.swordie.ms.world.field.bosses.gollux.FallingCatcher;

import java.util.ArrayList;
import java.util.List;

/**
 * Created on 22-9-2019.
 *
 * @author Asura
 */
public class LucidFieldPacket {

    public static OutPacket createFallingCatcher(FallingCatcher fallingCatcher) {
        OutPacket outPacket = new OutPacket(OutHeader.CREATE_FALLING_CATCHER);

        outPacket.encodeString(fallingCatcher.getTemplateStr());
        outPacket.encodeInt(fallingCatcher.getHpR());
        outPacket.encodeInt(fallingCatcher.getPositions().size());
        fallingCatcher.getPositions().forEach(outPacket::encodePositionInt);

        return outPacket;
    }

    public static OutPacket lucidButterflyCreated(List<Butterfly> butterflyList) {
        OutPacket outPacket = new OutPacket(OutHeader.LUCID_BUTTERFLY_CREATED);

        outPacket.encodeInt(0); // unk

        outPacket.encodeInt(butterflyList.size());
        for (Butterfly butterfly : butterflyList) {
            outPacket.encodeInt(butterfly.getType().getVal()); // type
            outPacket.encodePositionInt(butterfly.getPosition()); // position
        }

        return outPacket;
    }

    public static OutPacket lucidButterflyActionAdd(ButterflyType butterflyType, Position position) {
        return lucidButterflyAction(ButterflyActionType.Add, butterflyType, position, 0, 0);
    }

    public static OutPacket lucidButterflyActionMove(Position position) {
        return lucidButterflyAction(ButterflyActionType.Move, ButterflyType.PinkSmall, position, 0, 0);
    }

    public static OutPacket lucidButterflyActionAttack(int count, int delay) {
        return lucidButterflyAction(ButterflyActionType.Attack, ButterflyType.PinkSmall, new Position(), count, delay);
    }

    public static OutPacket lucidButterflyActionRemove() {
        return lucidButterflyAction(ButterflyActionType.Remove, ButterflyType.PinkSmall, new Position(), 0, 0);
    }

    public static OutPacket lucidButterflyAction(ButterflyActionType actionType, ButterflyType butterflyType, Position position, int count, int delay) {
        OutPacket outPacket = new OutPacket(OutHeader.LUCID_BUTTERFLY_ACTION);

        outPacket.encodeInt(actionType.getVal());
        switch (actionType) {
            case Add:
                outPacket.encodeInt(0); // unk
                outPacket.encodeInt(butterflyType.getVal());
                outPacket.encodePositionInt(position);
                break;
            case Move:
                outPacket.encodePositionInt(position);
                break;
            case Attack:
                outPacket.encodeInt(count);
                outPacket.encodeInt(delay);
                break;
            case Remove:
                // Empty
                break;
        }

        return outPacket;
    }

    public static OutPacket lucidDragonCreated(int phase, Position position, Position createPosition, boolean left) {
        OutPacket outPacket = new OutPacket(OutHeader.LUCID_DRAGON_CREATED);

        outPacket.encodeInt(phase);
        outPacket.encodePositionInt(position);
        outPacket.encodePositionInt(createPosition);
        outPacket.encodeByte(left);

        return outPacket;
    }

    public static OutPacket doLucidSkillFlowerTrap(Position position, int pattern, boolean flip) {
        return doLucidSkill(LucidSkillType.FlowerTrap1, position, new ArrayList<>(), pattern, flip);
    }

    public static OutPacket doLucidSkillFairyDust(List<Object> fairyDustList) {
        return doLucidSkill(LucidSkillType.FairyDust, new Position(), fairyDustList, 0, false);
    }

    public static OutPacket doLucidSkillLaserRain(List<Object> laserIntervalList, int delay) {
        return doLucidSkill(LucidSkillType.LaserRain, new Position(), laserIntervalList, delay, false);
    }

    public static OutPacket doLucidSkillTeleport(int portalId) {
        return doLucidSkill(LucidSkillType.Teleport, new Position(), new ArrayList<>(), portalId, false);
    }

    public static OutPacket doLucidSkillRush() {
        return doLucidSkill(LucidSkillType.Rush, new Position(), new ArrayList<>(), 0, false);
    }

    public static OutPacket doLucidSkill(LucidSkillType skillType, Position position, List<Object> list, int int1, boolean flip) {
        OutPacket outPacket = new OutPacket(OutHeader.DO_LUCID_SKILL);

        outPacket.encodeInt(MobSkillID.LucidAttack.getVal()); // hardcoded value check in IDA
        outPacket.encodeInt(skillType.getVal());

        switch (skillType) {
            case FlowerTrap1:
            case FlowerTrap2:
            case FlowerTrap3:
                outPacket.encodeInt(int1); // Pattern
                outPacket.encodePositionInt(position); // Position
                outPacket.encodeByte(flip); // flip
                break;
            case FairyDust:
            case FairyDust2:
                outPacket.encodeInt(list.size());
                for (Object fairyDust : list) {
                    if (fairyDust instanceof FairyDust) {
                        outPacket.encodeInt(((FairyDust) fairyDust).getScale()); // scale
                        outPacket.encodeInt(((FairyDust) fairyDust).getDelay()); // delay
                        outPacket.encodeInt(((FairyDust) fairyDust).getSpeed()); // moveSpeed
                        outPacket.encodeInt(((FairyDust) fairyDust).getAngle()); // angle
                    }
                }
                break;
            case LaserRain:
                outPacket.encodeInt(int1); // delay
                outPacket.encodeInt(list.size());
                for (Object interval : list) {
                    outPacket.encodeInt((int) interval); // interval
                }
                break;
            case Teleport:
                outPacket.encodeInt(int1); // portalId
                break;
            case Rush:
                outPacket.encodeInt(0);
                break;
        }

        return outPacket;
    }

    public static OutPacket lucidStainedGlassOnOff(boolean enable, List<String> stringList) {
        OutPacket outPacket = new OutPacket(OutHeader.LUCID_PHASE_2_STAINED_GLASS_ON_OFF);

        outPacket.encodeByte(enable);
        outPacket.encodeInt(stringList.size());
        for (String string : stringList) {
            outPacket.encodeString(string);
        }

        return outPacket;
    }

    public static OutPacket lucidStainedGlassBreak(List<String> stringList) {
        OutPacket outPacket = new OutPacket(OutHeader.LUCID_PHASE_2_STAINED_GLASS_BREAK);

        outPacket.encodeInt(stringList.size());
        for (String string : stringList) {
            outPacket.encodeString(string);
        }

        return outPacket;
    }

    public static OutPacket lucidFlyingMode(boolean enable) {
        OutPacket outPacket = new OutPacket(OutHeader.LUCID_PHASE_2_SET_FLYING_MODE);

        outPacket.encodeByte(enable);

        return outPacket;
    }

    public static OutPacket lucidStatueStateChange(boolean placement, int gauge, boolean enable) {
        OutPacket outPacket = new OutPacket(OutHeader.LUCID_STATUE_STATE_CHANGE);

        outPacket.encodeInt(placement ? 1 : 0);
        if (placement) {
            outPacket.encodeByte(enable);
        } else {
            outPacket.encodeInt(gauge);
            outPacket.encodeByte(enable);
        }

        return outPacket;
    }

    public static OutPacket lucidWelcomeBarrage(int type, int... args) {
        OutPacket outPacket = new OutPacket(OutHeader.LUCID_PHASE_2_WELCOME_BARRAGE);

        outPacket.encodeInt(type);

        switch (type) {
            case 0:
                outPacket.encodeInt(args[0]); // angle
                outPacket.encodeInt(args[1]); // speed
                break;
            case 1:
            case 2:
                break;
            case 3:
                outPacket.encodeInt(args[0]); // angleRate
                outPacket.encodeInt(args[1]); // speed
                outPacket.encodeInt(args[2]); // interval
                outPacket.encodeInt(args[3]); // shotCount
                break;
            case 4:
            case 5:
                outPacket.encodeInt(args[0]); // angle
                outPacket.encodeInt(args[1]); // angleRate
                outPacket.encodeInt(args[2]); // angleDiff
                outPacket.encodeInt(args[3]); // speed
                outPacket.encodeInt(args[4]); // interval
                outPacket.encodeInt(args[5]); // shotCount
                outPacket.encodeInt(args[6]); // bulletAngleRate
                outPacket.encodeInt(args[7]); // bulletSpeedRate
                break;
        }

        return outPacket;
    }
}
