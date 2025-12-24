package net.swordie.ms.world.field.fieldskill;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.life.mob.skill.FieldSkillID;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;

import java.util.ArrayList;
import java.util.List;

/**
 * Created on 02/08/2021.
 *
 * @author Asura
 */
public class GloomTentacle extends FieldSkill {

    private List<FieldSkillInfo> fieldSkillInfoList;

    public GloomTentacle(int slv) {
        super(FieldSkillID.GloomTentacle, slv);
    }

    public List<FieldSkillInfo> getFieldSkillInfoList() {
        return fieldSkillInfoList;
    }

    public void setFieldSkillInfoList(List<FieldSkillInfo> fieldSkillInfoList) {
        this.fieldSkillInfoList = fieldSkillInfoList;
    }

    public static GloomTentacle getByInfo(int slv) {
        var gloomTentacle = new GloomTentacle(slv);
        List<FieldSkillInfo> infos = new ArrayList<>();
        for (int i = 0; i < 1; i++) {
            var info = new FieldSkillInfo();
            info.setAngleMin(35);
            info.setAngleMax(75);
            info.setAttackDelay(1020);
            info.setDuration(1500);
            info.setInterval(1);
            info.setRect(new Rect(-120, -2185, 120, 300));
            info.setPosition(new Position(583, -157));
            info.setZ(6);
            info.setFlip(Util.randBoolean());
            infos.add(info);
        }
        gloomTentacle.setFieldSkillInfoList(infos);

        return gloomTentacle;
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(0);
        outPacket.encodeInt(1501); // duration

        for (var fieldSkillInfo : fieldSkillInfoList) {
            outPacket.encodeByte(1); // doEncode check

            outPacket.encodeInt(fieldSkillInfo.getDuration());
            outPacket.encodeInt(fieldSkillInfo.getInterval());
            outPacket.encodeInt(fieldSkillInfo.getAngleMin());
            outPacket.encodeInt(fieldSkillInfo.getAngleMax());
            outPacket.encodeInt(fieldSkillInfo.getAttackDelay());
            outPacket.encodeInt(fieldSkillInfo.getZ());
            outPacket.encodeInt(fieldSkillInfo.getSet());

            outPacket.encodeString(fieldSkillInfo.getObjName()); // foothold name
            outPacket.encodeString(fieldSkillInfo.getObjName2());

            outPacket.encodeInt(fieldSkillInfo.getRect().getTop());
            outPacket.encodeInt(fieldSkillInfo.getRect().getBottom());
            outPacket.encodeInt(fieldSkillInfo.getRect().getLeft());
            outPacket.encodeInt(fieldSkillInfo.getRect().getRight());
            outPacket.encodePositionInt(fieldSkillInfo.getPosition());

            outPacket.encodeByte(fieldSkillInfo.isFlip()); // 0=Left | 1=Right
        }
        outPacket.encodeByte(0); // stop List encode
    }
}
