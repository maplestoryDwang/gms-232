package net.swordie.ms.life.mob.boss.papulatus;

import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;

import java.util.Collections;
import java.util.List;

public class PapulatusFieldObject implements Encodable {

    private PapulatusFieldObjectType type;

    private List<PapulatusLaserInfo> papulatusLaserInfos;
    private List<PapulatusTweezerInfo> papulatusTweezerInfos;

    private boolean bool1;
    private boolean bool2;

    private int int1;

    public PapulatusFieldObject(PapulatusFieldObjectType type) {
        this.type = type;
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(type.ordinal());
        switch (type) {
            case Laser:
            case LaserExtra:
                outPacket.encodeInt(papulatusLaserInfos.size());
                for (var pli : papulatusLaserInfos) {
                    outPacket.encode(pli);
                }
                break;
            case Tweezer:
                outPacket.encodeInt(papulatusTweezerInfos.size());
                for (var pti : papulatusTweezerInfos) {
                    outPacket.encode(pti);
                }
                break;
            case AlarmClockTimer:
                outPacket.encodeByte(bool1); // bEnabled
                outPacket.encodeByte(bool2); // bAlarmClockPhase
                outPacket.encodeInt(int1); // nRemainingMillis
                break;
            case Unk5:
                outPacket.encodeInt(int1); // nTemplateId
                outPacket.encodeByte(bool1); // bIdk
                break;
        }
    }

    public static PapulatusFieldObject lasers(boolean extra, List<PapulatusLaserInfo> laserInfos) {
        var pfo = new PapulatusFieldObject(extra ? PapulatusFieldObjectType.LaserExtra : PapulatusFieldObjectType.Laser);
        pfo.papulatusLaserInfos = laserInfos;
        return pfo;
    }

    public static PapulatusFieldObject tweezer(PapulatusTweezerInfo papulatusTweezerInfo) {
        return tweezers(Collections.singletonList(papulatusTweezerInfo));
    }

    public static PapulatusFieldObject tweezers(List<PapulatusTweezerInfo> tweezerInfos) {
        var pfo = new PapulatusFieldObject(PapulatusFieldObjectType.Tweezer);
        pfo.papulatusTweezerInfos = tweezerInfos;
        return pfo;
    }

    public static PapulatusFieldObject unk3() {
        return new PapulatusFieldObject(PapulatusFieldObjectType.Unk3);
    }

    public static PapulatusFieldObject alarmClockTimer(boolean enabled, boolean alarmClockPhase, int remainingMillis) {
        var pfo = new PapulatusFieldObject(PapulatusFieldObjectType.AlarmClockTimer);
        pfo.bool1 = enabled;
        pfo.bool2 = alarmClockPhase;
        pfo.int1 = remainingMillis;
        return pfo;
    }

    public static PapulatusFieldObject unk5(int volume, boolean idk) {
        var pfo = new PapulatusFieldObject(PapulatusFieldObjectType.AlarmClockTimer);
        pfo.int1 = volume;
        pfo.bool1 = idk;
        return pfo;
    }

    private enum PapulatusFieldObjectType {
        Laser,
        LaserExtra,
        Tweezer,
        Unk3,
        AlarmClockTimer,
        Unk5
    }

}
