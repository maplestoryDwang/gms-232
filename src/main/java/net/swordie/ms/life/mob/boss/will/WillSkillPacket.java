package net.swordie.ms.life.mob.boss.will;

import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.life.mob.skill.MobSkillID;
import net.swordie.ms.util.Rect;

import java.util.Collection;

public class WillSkillPacket implements Encodable {

    private final int SKILL_ID = MobSkillID.BossWillAttack.getVal();

    private int templateId;
    private WillSkillType willSkillType;
    private boolean boolArg;
    private int intArg1, intArg2, intArg3;
    private Rect rect;
    private Collection<DestroyDimensionInfo> destroyDimensionInfos;
    private Collection<StrikeInfo> strikeInfos;

    public WillSkillPacket(int templateId, WillSkillType willSkillType) {
        this.templateId = templateId;
        this.willSkillType = willSkillType;
    }

    @Override
    public void encode(OutPacket outPacket) {
        // haven't explored the vars yet
        outPacket.encodeInt(templateId);
        outPacket.encodeInt(SKILL_ID);
        outPacket.encodeInt(willSkillType.getVal());
        switch (willSkillType) {
            case P1AdvancedDownwardStrike:
            case P2AdvancedDownwardStrike:
            case P3AdvancedDownwardStrike:
                // strikeinfo
                encodeStrikeInfo(outPacket);
                break;
            case P1Trigger: // Teleports player
                outPacket.encodeInt(intArg1); // nPortalId
                outPacket.encodeByte(boolArg);
                break;
            case DestroyDimension:
                outPacket.encodeInt(destroyDimensionInfos.size());
                for (var ddi : destroyDimensionInfos) {
                    outPacket.encodeByte(ddi.blueDimension);
                    outPacket.encodeRectInt(ddi.rect);
                }
                break;
            case LegSproutPlayerLoc:
            case LegSproutNonPlayerLoc:
                // unused?
                break;
            case ReflectedDownwardStrike:
                outPacket.encodeInt(boolArg ? 1 : 0);
                encodeStrikeInfo(outPacket);
                break;
            case RipIntoTarget:
                // Decodes nothing
                break;
        }
    }

    private void encodeStrikeInfo(OutPacket outPacket) {
        outPacket.encodeInt(intArg1); // hitType (1 = 20%, KB | 2 = 90% | 3 = 20% | 4 = 20%)
        outPacket.encodeInt(intArg2); // hitDelayMs
        outPacket.encodeInt(intArg3); // nextDelayMs
        outPacket.encodeRectInt(rect);

        outPacket.encodeInt(strikeInfos.size());
        for (var strikeInfo : strikeInfos) {
            outPacket.encodeInt(strikeInfo.id);
            outPacket.encodeInt(strikeInfo.isReflected ? 1 : 0);
            outPacket.encodePositionInt(strikeInfo.pos);
        }
    }

    public static WillSkillPacket useSkill(int templateId, WillSkillType skillType) {
        return new WillSkillPacket(templateId, skillType);
    }

    public static WillSkillPacket downwardStrikes(int templateId, WillSkillType skillType, int hitType, int hitDelayMs, int delayAfterMs,
                                                  Rect strikeCollisionRect, Collection<StrikeInfo> strikeInfos) {
        var wsp = new WillSkillPacket(templateId, skillType);
        wsp.intArg1 = hitType;
        wsp.intArg2 = hitDelayMs;
        wsp.intArg3 = delayAfterMs;
        wsp.rect = strikeCollisionRect;
        wsp.strikeInfos = strikeInfos;
        return wsp;
    }

    public static WillSkillPacket reflectedDownwardStrikes(int templateId, boolean reflected, int type, int hitDelayMs,
                                                           int delayAfterMs, Rect strikeCollisionRect, Collection<StrikeInfo> strikeInfos) {
        var wsp = new WillSkillPacket(templateId, WillSkillType.ReflectedDownwardStrike);
        wsp.intArg1 = type;
        wsp.intArg2 = hitDelayMs;
        wsp.intArg3 = delayAfterMs;
        wsp.boolArg = reflected;
        wsp.rect = strikeCollisionRect;
        wsp.strikeInfos = strikeInfos;
        return wsp;
    }

    public static WillSkillPacket teleport(int templateId, int portalId, boolean boolArg) {
        var wsp = new WillSkillPacket(templateId, WillSkillType.P1Trigger);
        wsp.intArg1 = portalId;
        wsp.boolArg = boolArg;
        return wsp;
    }

    public static WillSkillPacket destroyDimension(int templateId, Collection<DestroyDimensionInfo> destroyDimensionInfos) {
        var wsp = new WillSkillPacket(templateId, WillSkillType.DestroyDimension);
        wsp.destroyDimensionInfos = destroyDimensionInfos;
        return wsp;
    }

}
