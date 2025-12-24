package net.swordie.ms.client.character.info;

import net.swordie.ms.connection.OutPacket;

public class ZeroInfo {
    private int id;
    private boolean isZeroBetaState;
    private int subHP;
    private int subMHP;
    private int subMP;
    private int subMMP;
    private int subSkin;
    private int subHair;
    private int subFace;
    private int dbcharZeroLinkCashPart;
    private int mixBaseHairColor;
    private int mixAddHairColor;
    private int mixHairBaseProb;

    private int wpCoin; // not actually part of ZeroInfo, but stored here for DB purposes

    public ZeroInfo deepCopy() {
        ZeroInfo zi = new ZeroInfo();
        zi.setZeroBetaState(isZeroBetaState());
        zi.setSubHP(getSubHP());
        zi.setSubMHP(getSubMHP());
        zi.setSubMP(getSubMP());
        zi.setSubMMP(getSubMMP());
        zi.setSubSkin(getSubSkin());
        zi.setSubHair(getSubHair());
        zi.setSubFace(getSubFace());
        zi.setDbcharZeroLinkCashPart(getDbcharZeroLinkCashPart());
        zi.setMixBaseHairColor(getMixBaseHairColor());
        zi.setMixAddHairColor(getMixAddHairColor());
        zi.setMixHairBaseProb(getMixHairBaseProb());
        return zi;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isZeroBetaState() {
        return isZeroBetaState;
    }

    public void setZeroBetaState(boolean zeroBetaState) {
        isZeroBetaState = zeroBetaState;
    }

    public int getSubHP() {
        return subHP;
    }

    public void setSubHP(int subHP) {
        this.subHP = subHP;
    }

    public int getSubMHP() {
        return subMHP;
    }

    public void setSubMHP(int subMHP) {
        this.subMHP = subMHP;
    }

    public int getSubMP() {
        return subMP;
    }

    public void setSubMP(int subMP) {
        this.subMP = subMP;
    }

    public int getSubMMP() {
        return subMMP;
    }

    public void setSubMMP(int subMMP) {
        this.subMMP = subMMP;
    }

    public int getSubSkin() {
        return subSkin;
    }

    public void setSubSkin(int subSkin) {
        this.subSkin = subSkin;
    }

    public int getSubHair() {
        return subHair;
    }

    public void setSubHair(int subHair) {
        this.subHair = subHair;
    }

    public int getSubFace() {
        return subFace;
    }

    public void setSubFace(int subFace) {
        this.subFace = subFace;
    }

    public int getDbcharZeroLinkCashPart() {
        return dbcharZeroLinkCashPart;
    }

    public void setDbcharZeroLinkCashPart(int dbcharZeroLinkCashPart) {
        this.dbcharZeroLinkCashPart = dbcharZeroLinkCashPart;
    }

    public int getMixBaseHairColor() {
        return mixBaseHairColor;
    }

    public void setMixBaseHairColor(int mixBaseHairColor) {
        this.mixBaseHairColor = mixBaseHairColor;
    }

    public int getMixAddHairColor() {
        return mixAddHairColor;
    }

    public void setMixAddHairColor(int mixAddHairColor) {
        this.mixAddHairColor = mixAddHairColor;
    }

    public int getMixHairBaseProb() {
        return mixHairBaseProb;
    }

    public void setMixHairBaseProb(int mixHairBaseProb) {
        this.mixHairBaseProb = mixHairBaseProb;
    }

    public int getWpCoin() {
        return wpCoin;
    }

    public void setWpCoin(int wpCoin) {
        this.wpCoin = wpCoin;
    }

    public void encode(OutPacket outPacket) {
        short mask = (short) (ZeroInfoFlag.BetaState.getVal()
                        | ZeroInfoFlag.SubHP.getVal()
                        | ZeroInfoFlag.SubMP.getVal()
                        | ZeroInfoFlag.SubMHP.getVal()
                        | ZeroInfoFlag.SubMMP.getVal());
        encode(mask, outPacket);
    }

    public void encode(short mask, OutPacket outPacket) {
        outPacket.encodeShort(mask);
        if((mask & ZeroInfoFlag.BetaState.getVal()) != 0){
            outPacket.encodeByte(isZeroBetaState());
        }
        if ((mask & ZeroInfoFlag.SubHP.getVal()) != 0) {
            outPacket.encodeInt(getSubHP());
        }
        if ((mask & ZeroInfoFlag.SubMP.getVal()) != 0) {
            outPacket.encodeInt(getSubMP());
        }
        if ((mask & ZeroInfoFlag.SubSkin.getVal()) != 0) {
            outPacket.encodeByte(getSubSkin());
        }
        if ((mask & ZeroInfoFlag.SubHair.getVal()) != 0) {
            outPacket.encodeInt(getSubHair());
        }
        if ((mask & ZeroInfoFlag.SubFace.getVal()) != 0) {
            outPacket.encodeInt(getSubFace());
        }
        if ((mask & ZeroInfoFlag.SubMHP.getVal()) != 0) {
            outPacket.encodeInt(getSubMHP());
        }
        if ((mask & ZeroInfoFlag.SubMMP.getVal()) != 0) {
            outPacket.encodeInt(getSubMMP());
        }
        if ((mask & ZeroInfoFlag.ZeroLinkCashPart.getVal()) != 0) {
            outPacket.encodeInt(getDbcharZeroLinkCashPart());
        }
        if ((mask & ZeroInfoFlag.ZeroMixHair.getVal()) != 0) {
            outPacket.encodeInt(getMixBaseHairColor());
            outPacket.encodeInt(getMixAddHairColor());
            outPacket.encodeInt(getMixHairBaseProb()); 
        }
    }
}
