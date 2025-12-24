package net.swordie.ms.connection.packet;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.loaders.containerclasses.MobSkillInfo;
import net.swordie.ms.util.Position;

import java.util.List;

/**
 * Created on 22-9-2019.
 *
 * @author Asura
 */
public class HekatonFieldPacket {

    public static OutPacket doHekatonSkill(Mob mob, MobSkillInfo msi, List<Position> positions) {
        OutPacket outPacket = new OutPacket(OutHeader.DO_HEKATON_SKILL);

        outPacket.encodeInt(mob.getObjectId());
        outPacket.encodeInt(msi.getSkillId());
        outPacket.encodeInt(msi.getLevel());
        outPacket.encodeInt(0); // unk
        outPacket.encodeInt(positions.size());
        for (Position position : positions) {
            outPacket.encodePositionInt(position);
            if (msi.getSkillId() == 1011 || msi.getSkillId() == 1012) {
                outPacket.encodeInt(0);
            }
        }

        return outPacket;
    }

    public static OutPacket doHekatonSkill2(Mob mob, MobSkillInfo msi) {
        OutPacket outPacket = new OutPacket(OutHeader.DO_HEKATON_SKILL_2);

        outPacket.encodeInt(mob.getObjectId());
        outPacket.encodeInt(msi.getSkillId());

        return outPacket;
    }

    public static OutPacket hekatonUnk1430() {
        OutPacket outPacket = new OutPacket(OutHeader.HEKATON_UNK_205_1430);

        int loopSize = 0;
        outPacket.encodeInt(0);
        outPacket.encodeInt(loopSize);
        outPacket.encodeInt(0);
        outPacket.encodeByte(0);
        for (int i = 0; i < loopSize; i++) {
            outPacket.encodeString("");
            outPacket.encodeByte(1);
        }

        return outPacket;
    }

    public static OutPacket hekatonUnk1431() {
        OutPacket outPacket = new OutPacket(OutHeader.HEKATON_UNK_205_1431);

        outPacket.encodeInt(0);

        return outPacket;
    }

    public static OutPacket hekatonUnk1434() {
        OutPacket outPacket = new OutPacket(OutHeader.HEKATON_UNK_205_1434);

        outPacket.encodeInt(0);
        outPacket.encodeLong(0);
        outPacket.encodeLong(0);
        outPacket.encodeInt(0);

        return outPacket;
    }
}
