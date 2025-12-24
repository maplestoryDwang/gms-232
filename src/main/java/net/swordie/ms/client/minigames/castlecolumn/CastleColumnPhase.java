package net.swordie.ms.client.minigames.castlecolumn;

import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;

import java.util.ArrayList;
import java.util.List;

/**
 * Created on 01/07/2021.
 *
 * @author Asura
 */
public class CastleColumnPhase implements Encodable {

    public static final List<CastleColumnPhase> neoCastleColumnPhases = new ArrayList<>() {{
        add(new CastleColumnPhase(0, 0, 0, 0, 0, 0, 0,0));
        add(new CastleColumnPhase(1, 180, 5, 3, 5, 0, 200,200));
        add(new CastleColumnPhase(11, 200, 5, 3, 5, 10, 275,200));
        add(new CastleColumnPhase(21, 225, 5, 3, 5, 10, 300,200));
        add(new CastleColumnPhase(31, 250, 3, 4, 5, 15, 320,200));
        add(new CastleColumnPhase(41, 275, 3, 4, 5, 15, 340,225));
        add(new CastleColumnPhase(51, 300, 3, 5, 6, 20, 360,250));
        add(new CastleColumnPhase(61, 320, 3, 5, 6, 20, 380,270));
        add(new CastleColumnPhase(71, 340, 2, 5, 6, 20, 400,300));
        add(new CastleColumnPhase(81, 360, 2, 6, 8, 20, 400,320));
        add(new CastleColumnPhase(91, 380, 2, 6, 8, 20, 400,340));
        add(new CastleColumnPhase(101, 400, 2, 8, 10, 20, 400,340));
    }};

    private int blockReq;
    private int speed;
    private int perfectThreshold;
    private int unk1, unk2, unk3, unk4, unk5;

    public CastleColumnPhase(int blockReq, int speed, int perfectThreshold, int unk1, int unk2, int unk3, int unk4, int unk5) {
        this.blockReq = blockReq;
        this.speed = speed;
        this.perfectThreshold = perfectThreshold;
        this.unk1 = unk1;
        this.unk2 = unk2;
        this.unk3 = unk3;
        this.unk4 = unk4;
        this.unk5 = unk5;
    }

    public int getBlockReq() {
        return blockReq;
    }

    public void setBlockReq(int blockReq) {
        this.blockReq = blockReq;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public int getPerfectThreshold() {
        return perfectThreshold;
    }

    public void setPerfectThreshold(int perfectThreshold) {
        this.perfectThreshold = perfectThreshold;
    }

    public int getUnk1() {
        return unk1;
    }

    public void setUnk1(int unk1) {
        this.unk1 = unk1;
    }

    public int getUnk2() {
        return unk2;
    }

    public void setUnk2(int unk2) {
        this.unk2 = unk2;
    }

    public int getUnk3() {
        return unk3;
    }

    public void setUnk3(int unk3) {
        this.unk3 = unk3;
    }

    public int getUnk4() {
        return unk4;
    }

    public void setUnk4(int unk4) {
        this.unk4 = unk4;
    }

    public int getUnk5() {
        return unk5;
    }

    public void setUnk5(int unk5) {
        this.unk5 = unk5;
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(getBlockReq());
        outPacket.encodeInt(getSpeed());
        outPacket.encodeInt(getPerfectThreshold());
        outPacket.encodeInt(getUnk1());
        outPacket.encodeInt(getUnk2());
        outPacket.encodeInt(getUnk3());
        outPacket.encodeInt(getUnk4());
        outPacket.encodeInt(getUnk5());
    }
}
