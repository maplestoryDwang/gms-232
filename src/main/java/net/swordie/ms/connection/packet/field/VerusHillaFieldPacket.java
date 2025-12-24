package net.swordie.ms.connection.packet.field;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;

import java.util.List;

public class VerusHillaFieldPacket {

    private enum SubType {
        Unk0(0),
        Unk1(1),
        Unk2(2),
        Unk3(3),
        SoulCrippeTimerStart(4),
        Unk5(5),
        Unk6(6),
        Unk7(7),
        Unk8(8),
        Unk10(10),
        Unk11(11),
        ;

        private final int val;

        SubType(int val) {
            this.val = val;
        }

        public int getVal() {
            return val;
        }
    }

    public OutPacket unk0(int a1, boolean b1) {
        OutPacket outPacket = new OutPacket(OutHeader.VERUS_HILLA_FIELD_OBJECT_CHANGED);

        outPacket.encodeInt(SubType.Unk0.getVal());

        outPacket.encodeInt(a1);
        outPacket.encodeByte(b1);

        return outPacket;
    }

    public OutPacket unk1(int a1) {
        OutPacket outPacket = new OutPacket(OutHeader.VERUS_HILLA_FIELD_OBJECT_CHANGED);

        outPacket.encodeInt(SubType.Unk1.getVal());

        outPacket.encodeInt(a1);

        return outPacket;
    }

    public OutPacket unk2() {
        OutPacket outPacket = new OutPacket(OutHeader.VERUS_HILLA_FIELD_OBJECT_CHANGED);

        outPacket.encodeInt(SubType.Unk2.getVal());

        return outPacket;
    }

    public OutPacket unk3(List<Object> objectList) {
        OutPacket outPacket = new OutPacket(OutHeader.VERUS_HILLA_FIELD_OBJECT_CHANGED);

        outPacket.encodeInt(SubType.Unk3.getVal());

        outPacket.encodeInt(objectList.size());
        for (var obj : objectList) {
            outPacket.encodeInt(0);
            outPacket.encodeByte(false);
        }

        return outPacket;
    }

    public OutPacket SoulCrippleTimerStart(int interval, int skillId, int slv) {
        OutPacket outPacket = new OutPacket(OutHeader.VERUS_HILLA_FIELD_OBJECT_CHANGED);

        outPacket.encodeInt(SubType.SoulCrippeTimerStart.getVal());

        outPacket.encodeInt(interval);
        outPacket.encodeInt(skillId);
        outPacket.encodeInt(slv);

        return outPacket;
    }

    public OutPacket unk5() {
        OutPacket outPacket = new OutPacket(OutHeader.VERUS_HILLA_FIELD_OBJECT_CHANGED);

        outPacket.encodeInt(SubType.Unk5.getVal());

        return outPacket;
    }

    public OutPacket unk6(int a1, int a2, int a3) {
        OutPacket outPacket = new OutPacket(OutHeader.VERUS_HILLA_FIELD_OBJECT_CHANGED);

        outPacket.encodeInt(SubType.Unk6.getVal());

        outPacket.encodeInt(a1);
        outPacket.encodeInt(a2);
        outPacket.encodeInt(a3);

        return outPacket;
    }

    public OutPacket unk7(int a1) {
        OutPacket outPacket = new OutPacket(OutHeader.VERUS_HILLA_FIELD_OBJECT_CHANGED);

        outPacket.encodeInt(SubType.Unk7.getVal());

        outPacket.encodeInt(a1);

        return outPacket;
    }

    public OutPacket unk8(boolean b1) {
        OutPacket outPacket = new OutPacket(OutHeader.VERUS_HILLA_FIELD_OBJECT_CHANGED);

        outPacket.encodeInt(SubType.Unk8.getVal());

        outPacket.encodeByte(b1);

        return outPacket;
    }

    public OutPacket unk10(int a1, int a2) {
        OutPacket outPacket = new OutPacket(OutHeader.VERUS_HILLA_FIELD_OBJECT_CHANGED);

        outPacket.encodeInt(SubType.Unk10.getVal());

        outPacket.encodeInt(a1);
        outPacket.encodeInt(a2);

        return outPacket;
    }

    public OutPacket unk11() {
        OutPacket outPacket = new OutPacket(OutHeader.VERUS_HILLA_FIELD_OBJECT_CHANGED);

        outPacket.encodeInt(SubType.Unk11.getVal());

        return outPacket;
    }

}
