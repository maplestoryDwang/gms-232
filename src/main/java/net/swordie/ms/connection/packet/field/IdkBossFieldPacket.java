package net.swordie.ms.connection.packet.field;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;

import java.util.List;

public class IdkBossFieldPacket {

    public static OutPacket idkBossPacket_1(List<Integer> types) {
        var outPacket = new OutPacket(OutHeader.IDK_BOSS_FIELD_212_1856);

        int size1 = 3;
        int size2 = 5;

        // list of commands
        for (var type : types) {
            outPacket.encodeByte(type);
            switch (type) {
                case 0:
                    break;
                case 1:
                    outPacket.encodeInt(100);
                    outPacket.encodeInt(200);
                    outPacket.encodeInt(300);
                    outPacket.encodeInt(400);
                    outPacket.encodeInt(500);

                    outPacket.encodeInt(size1);
                    for (int i = 0; i < size1; i++) {
                        outPacket.encodeInt(600);
                        outPacket.encodeInt(size2);
                        for (int j = 0; j < size2; j++) {
                            outPacket.encodeInt(700);
                            outPacket.encodeInt(800);
                            outPacket.encodeInt(900);
                        }
                    }
                    break;
                case 2:
                    outPacket.encodeInt(100);
                    outPacket.encodeByte(true);
                    outPacket.encodeByte(true);
                    outPacket.encodeInt(200);
                    outPacket.encodeInt(300);
                    outPacket.encodeInt(400);
                    outPacket.encodeInt(500);
                    outPacket.encodeInt(600);
                    outPacket.encodeByte(true);
                    break;
                case 3:
                    outPacket.encodeInt(100);
                    outPacket.encodeInt(200);
                    outPacket.encodeInt(300);
                    break;
                case 4:
                    outPacket.encodeInt(100);
                    outPacket.encodeInt(200);
                    outPacket.encodeInt(size1);

                    for (int i = 0; i < size1; i++) {
                        outPacket.encodeInt(i * 100);
                    }
                    break;
            }
        }
        outPacket.encodeByte(0);

        return outPacket;
    }
    public static OutPacket idkBossPacket_2() {
        var outPacket = new OutPacket(OutHeader.VERUS_HILLA_FIELD_212_1857);

        outPacket.encodeInt(1);
        outPacket.encodeInt(2);
        outPacket.encodeInt(3);

        return outPacket;
    }
    public static OutPacket idkBossPacket_3() {
        var outPacket = new OutPacket(OutHeader.VERUS_HILLA_FIELD_212_1858);

        outPacket.encodeInt(1);
        outPacket.encodeInt(2);

        return outPacket;
    }
}
