package net.swordie.ms.client;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.util.FileTime;

import javax.persistence.*;
import java.util.Objects;

/**
 * Created on 6/7/2018.
 */
@Entity
@Table(name = "linkskills")
public class LinkSkill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private int originID;
    private int usingID;
    private int linkSkillID;
    private int level;

    public LinkSkill() {
    }

    public LinkSkill(Account account, int originID, int usingID, int linkSkillID, int level) {
        this.originID = originID;
        this.usingID = usingID;
        this.linkSkillID = linkSkillID;
        boolean isStackingLink = SkillConstants.isStackingLinkSkill(linkSkillID);
        if (isStackingLink) {
            int maxIndividualLinkLv = SkillConstants.getMasterLevelForStackingLinkSkill(linkSkillID);
            this.level = Math.min(level, maxIndividualLinkLv);
        } else {
            this.level = level;
        }
    }

    public void encode(Char chr, OutPacket outPacket) {
        outPacket.encodeInt(getOriginID());
        outPacket.encodeInt(getUsingID() == 0 ? chr.getId() : -1); // Sets chrId to using. As LinkSkills are Account-wide
        outPacket.encodeInt(getLinkSkillID());
        outPacket.encodeShort(getLevel());
        outPacket.encodeFT(FileTime.fromType(FileTime.Type.ZERO_TIME)); // ftLastAssigned
        outPacket.encodeInt(2); // Max daily transfers
    }

    public int getUsingID() {
        return usingID;
    }

    public void setUsingID(int usingID) {
        this.usingID = usingID;
    }

    public int getLinkSkillID() {
        return linkSkillID;
    }

    public void setLinkSkillID(int linkSkillID) {
        this.linkSkillID = linkSkillID;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getOriginID() {
        return originID;
    }

    public void setOriginID(int originID) {
        this.originID = originID;
    }

    public boolean isStackingSkill() {
        return SkillConstants.isStackingLinkSkill(getLinkSkillID());
    }

    public int getStackSkill() {
        return SkillConstants.getStackLinkSkill(getLinkSkillID());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LinkSkill linkSkill = (LinkSkill) o;
        return originID == linkSkill.originID;
    }

    @Override
    public int hashCode() {
        return Objects.hash(usingID);
    }

    @Override
    public String toString() {
        return String.format("skillID = %s, level = %s, usingId = %s, originId = %s", getLinkSkillID(), getLevel(), getUsingID(), getOriginID());
    }
}
