package net.swordie.ms.life;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.jobs.flora.Illium;
import net.swordie.ms.client.jobs.resistance.BattleMage;
import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.enums.EnterType;
import net.swordie.ms.util.Position;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 * Created on 26/01/2021.
 *
 * @author Asura
 */
public class ImmovableObj extends Life implements Encodable {

    private static final Logger log = LogManager.getLogger();

    private Char owner;
    private ImmovableObjType ioType;
    private int skillId;
    private int duration;

    public ImmovableObj(int templateId) {
        super(templateId);
    }

    public Char getOwner() {
        return owner;
    }

    public void setOwner(Char owner) {
        this.owner = owner;
    }

    public ImmovableObjType getIoType() {
        return ioType;
    }

    public void setIoType(ImmovableObjType ioType) {
        this.ioType = ioType;
    }

    public int getSkillId() {
        return skillId;
    }

    public void setSkillId(int skillId) {
        this.skillId = skillId;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public int getOwnerId() {
        return getOwner().getId();
    }

    public int getFieldId() {
        return getField().getId();
    }

    public static ImmovableObj getByInfo(Char chr, int skillId, Position position, int duration) {
        var immovableObj = new ImmovableObj(-1);

        immovableObj.setOwner(chr);
        immovableObj.setSkillId(skillId);
        immovableObj.setPosition(position);
        immovableObj.setDuration(duration);

        switch (skillId) {
            case BattleMage.ABYSSAL_LIGHTNING_PORTAL:
                immovableObj.setIoType(ImmovableObjType.BMageAbyssalLightning);
                break;
            case Illium.CRYSTAL_GATE_PORTAL:
                immovableObj.setIoType(ImmovableObjType.LefMageCrystalGate);
                break;
            default:
                log.warn(String.format("Unhanded ImmovableObj skillID %d", skillId));
                break;
        }

        return immovableObj;
    }

    @Override
    public void broadcastSpawnPacket(Char onlyChar, EnterType enterType) {
        getField().broadcastPacket(UserPacket.immovableObjCreated(getOwnerId(), this));
    }

    @Override
    public void broadcastLeavePacket() {
        getField().broadcastPacket(UserPacket.immovableObjRemoved(getOwnerId(), this));
    }


    // Encodable
    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(getOwnerId());
        outPacket.encodeInt(getObjectId());
        outPacket.encodeInt(getIoType().getVal());
        outPacket.encodeInt(getSkillId());
        outPacket.encodeInt(getFieldId());
        outPacket.encodePositionInt(getPosition());
        outPacket.encodeInt(getDuration());
        outPacket.encodeInt(0); // new 228
    }

    public enum ImmovableObjType {
        LefMageCrystalGate(1),
        BMageAbyssalLightning(2),
        ;

        private int val;

        ImmovableObjType(int val) {
            this.val = val;
        }

        public int getVal() {
            return val;
        }
    }
}
