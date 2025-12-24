package net.swordie.ms.client.character.skills.jupiterthunder;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.SkillStat;
import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;

/**
 * Created on 25/01/2021.
 *
 * @author Asura
 */
public class JupiterThunder implements Encodable {
    private int objectId;
    private int skillId, slv;
    private Char owner;
    private Rect rect;
    private Position position;
    private int shockRemaining;
    private int subTime, time;
    private int unk1, unk2, unk3;

    public int getObjectId() {
        return objectId;
    }

    public void setObjectId(int objectId) {
        this.objectId = objectId;
    }

    public int getSkillId() {
        return skillId;
    }

    public void setSkillId(int skillId) {
        this.skillId = skillId;
    }

    public int getSlv() {
        return slv;
    }

    public void setSlv(int slv) {
        this.slv = slv;
    }

    public Char getOwner() {
        return owner;
    }

    public void setOwner(Char owner) {
        this.owner = owner;
    }

    public Rect getRect() {
        return rect;
    }

    public void setRect(Rect rect) {
        this.rect = rect;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public int getShockRemaining() {
        return shockRemaining;
    }

    public void setShockRemaining(int shockRemaining) {
        this.shockRemaining = shockRemaining;
    }

    public int getSubTime() {
        return subTime;
    }

    public void setSubTime(int subTime) {
        this.subTime = subTime;
    }

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
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

    public int getOwnerId() {
        return getOwner().getId();
    }

    public static JupiterThunder getByInfo(Char chr, int skillId, int slv, Rect rect, int unk1, int unk2, int unk3) {
        var jt = new JupiterThunder();
        jt.setOwner(chr);
        jt.setObjectId(chr.getNewJupiterThunderId());
        jt.setPosition(chr.getPosition());
        jt.setRect(rect);

        jt.setSkillId(skillId);
        jt.setSlv(slv);

        jt.setUnk1(unk1);
        jt.setUnk2(unk2);
        jt.setUnk3(unk3);

        // SkillInfo
        var si = SkillData.getSkillInfoById(skillId);

        jt.setShockRemaining(si.getValue(SkillStat.x, slv));
        jt.setTime(si.getValue(SkillStat.time, slv));
        jt.setSubTime(si.getValue(SkillStat.subTime, slv));

        return jt;
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeByte(true); // bCreate
        outPacket.encodeInt(1); // must be 1

        outPacket.encodeInt(getObjectId()); // Object Id
        outPacket.encodeInt(getOwnerId()); // Owner

        outPacket.encodeRectInt(getRect()); // Rect
        outPacket.encodeInt(getSkillId()); // Skill ID
        outPacket.encodeInt(getShockRemaining()); // Shocks Remaining
        outPacket.encodeInt(getSubTime()); // #subtime (subTime)
        outPacket.encodeInt(getTime()); // #time (duration)
        outPacket.encodeInt(getUnk1());
        outPacket.encodeInt(getUnk2()); // causes change in delays
        outPacket.encodeInt(getUnk3());
    }
}
