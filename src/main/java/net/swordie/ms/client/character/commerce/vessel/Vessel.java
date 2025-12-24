package net.swordie.ms.client.character.commerce.vessel;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.commerce.voyage.VoyageInfoType;
import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.enums.UIType;
import net.swordie.ms.loaders.EtcData;
import net.swordie.ms.util.FileTime;

/**
 * Created on 19/05/2021.
 *
 * @author Asura
 */
public class Vessel implements Encodable {
    private static final int MAX_VESSEL_LEVEL = 10;
    private static final int MIN_VESSEL_LEVEL = 1;

    private int id;
    private VesselType vesselType;
    private int level, exp;
    private int energy;

    public Vessel() {
        this.vesselType = VesselType.CargoSkiff;
        this.level = MIN_VESSEL_LEVEL;
        this.energy = getMaxEnergy();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public VesselType getVesselType() {
        return vesselType;
    }

    public void setVesselType(VesselType vesselType) {
        this.vesselType = vesselType;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    private void incLevel() {
        setLevel(Math.min(getLevel() + 1, MAX_VESSEL_LEVEL));
        resetExp();
    }

    public int getExp() {
        return exp;
    }

    public void setExp(int exp) {
        this.exp = exp;
    }

    public void resetExp() {
        setExp(0);
    }

    public void gainExp(int exp) {
        int gainedExp = exp;
        while (gainedExp > 0) {
            if (getLevel() >= MAX_VESSEL_LEVEL) {
                return;
            }

            var curExp = getExp();
            var neededExp = getLevelUpExpReq();
            var diff = neededExp - curExp;

            if (gainedExp >= diff) {
                incLevel();
                gainedExp -= diff;
            } else {
                setExp(gainedExp);
                gainedExp = 0;
            }
        }
    }

    public int getEnergy() {
        return energy;
    }

    public void setEnergy(int energy) {
        this.energy = Math.max(0, energy);
    }

    public void reduceEnergy(int energyCost) {
        setEnergy(getEnergy() - energyCost);
    }

    public boolean hasEnoughEnergy(int energy) {
        return getEnergy() >= energy;
    }

    public int getMaxEnergy() {
        return EtcData.getVesselInfoById(getVesselType().getVal()).getEnergy();
    }

    public int getLevelUpExpReq() {
        return EtcData.getVesselExpRequirement(getLevel() + 1, getVesselType().getVal());
    }

    public void upgrade() {
        if (getLevel() >= MAX_VESSEL_LEVEL && !getVesselType().equals(VesselType.Dreadnought)) {
            var curVessel = getVesselType();
            setVesselType(curVessel == VesselType.CargoSkiff ? VesselType.SailBoat :
                    curVessel == VesselType.SailBoat ? VesselType.Dreadnought : VesselType.Dreadnought);

            setLevel(MIN_VESSEL_LEVEL);
            setExp(0);
        }
    }

    public void openVesselUI(Char chr) {
        updateToChar(chr);
        chr.write(FieldPacket.openUI(UIType.VESSEL));
    }

    public void updateToChar(Char chr) {
        chr.write(WvsContext.updateVoyageInfo(VoyageInfoType.UpdateVesselInfo_2, this));
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeByte(getVesselType().getVal());
        outPacket.encodeInt(getLevel());
        outPacket.encodeInt(getExp());
        outPacket.encodeInt(getEnergy());
        outPacket.encodeFT(FileTime.currentTime());
    }
}
