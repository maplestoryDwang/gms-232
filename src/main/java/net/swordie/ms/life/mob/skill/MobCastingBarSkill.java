package net.swordie.ms.life.mob.skill;

import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;

public class MobCastingBarSkill implements Encodable {

    private MobCastingBarSkillType type;
    private int gaugeType;
    private int castingTime;
    private boolean reverseGauge;
    private boolean showUi;
    private boolean success;
    private int action;
    private int skillId;
    private int forcedAttackIdx;
    private int skillCommand;
    private int slv;
    private int reduceAmount;

    public MobCastingBarSkill(MobCastingBarSkillType type) {
        this.type = type;
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeByte(type.ordinal());
        switch (type) {
            case Start:
                outPacket.encodeInt(gaugeType);
                outPacket.encodeInt(castingTime);
                outPacket.encodeByte(reverseGauge);
                outPacket.encodeByte(showUi);
                outPacket.encodeByte(0); // ignored
                break;
            case End:
                outPacket.encodeByte(success);
                outPacket.encodeInt(action); // can overflow into attackIdx (action - 30 > 16)
                if (action - 30 <= 16) {
                    outPacket.encodeInt(skillCommand);
                    outPacket.encodeInt(slv);
                } else {
                    outPacket.encodeInt(forcedAttackIdx);
                }
                break;
            case During:
                outPacket.encodeByte(success);
                outPacket.encodeInt(action);
                if (action - 30 <= 16) {
                    outPacket.encodeInt(skillId);
                    outPacket.encodeInt(slv);
                }
                break;
            case Reduce:
                outPacket.encodeInt(reduceAmount);
                break;
        }
    }

    public static MobCastingBarSkill start(int gaugeType, int castingTime, boolean reverseGauge, boolean showUi) {
        var mcbs = new MobCastingBarSkill(MobCastingBarSkillType.Start);

        mcbs.gaugeType = gaugeType;
        mcbs.castingTime = castingTime;
        mcbs.reverseGauge = reverseGauge;
        mcbs.showUi = showUi;

        return mcbs;
    }

    public static MobCastingBarSkill during(boolean success, int skillId, int action, int forcedAttackIdx, int skillCommand, int slv) {
        var mcbs = new MobCastingBarSkill(MobCastingBarSkillType.During);

        mcbs.success = success;
        mcbs.skillId = skillId;
        mcbs.action = action;
        mcbs.forcedAttackIdx = forcedAttackIdx;
        mcbs.skillCommand = skillCommand;
        mcbs.slv = slv;

        return mcbs;
    }

    public static MobCastingBarSkill end(boolean success, int action, int skillId, int slv, int forcedAttackIdx) {
        var mcbs = new MobCastingBarSkill(MobCastingBarSkillType.End);

        mcbs.success = success;
        mcbs.action = action;
        mcbs.skillId = skillId;
        mcbs.slv = slv;
        mcbs.forcedAttackIdx = forcedAttackIdx;

        return mcbs;
    }

    public static MobCastingBarSkill reduce(int reduceAmount) {
        var mcbs = new MobCastingBarSkill(MobCastingBarSkillType.End);

        mcbs.reduceAmount = reduceAmount;

        return mcbs;
    }

    public enum MobCastingBarSkillType {
        Start,
        End,
        During,
        Reduce,
    }
}
