package net.swordie.ms.client.character.hyperstats;

import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.db.TrackedObject;

import java.util.Objects;

/**
 * Created on 01/02/2022.
 *
 * @author Asura
 */
public class HyperStatInfo extends TrackedObject implements Encodable {
    private int id;
    private int presetIndex;
    private int skillId;
    private int level;

    public HyperStatInfo() {
    }

    public HyperStatInfo(int presetIndex, int skillId, int level) {
        this.presetIndex = presetIndex;
        this.skillId = skillId;
        this.level = level;
    }

    public int getPresetIndex() {
        return presetIndex;
    }

    public void setPresetIndex(int presetIndex) {
        this.presetIndex = presetIndex;
    }

    public int getSkillId() {
        return skillId;
    }

    public void setSkillId(int skillId) {
        this.skillId = skillId;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    @Override
    public long getId() {
        return id;
    }

    @Override
    public void setId(long id) {
        this.id = (int) id;
    }

    @Override
    public int getTransactionalHash() {
        return Objects.hash(getPresetIndex(), getSkillId(), getLevel());
    }

    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof HyperStatInfo)) {
            return false;
        }

        var other = (HyperStatInfo) obj;
        return other.getSkillId() == getSkillId() && other.getPresetIndex() == getPresetIndex();
    }


    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(getPresetIndex());
        outPacket.encodeInt(getSkillId());
        outPacket.encodeInt(getLevel());
    }

    public static HyperStatInfo fromSkill(Skill skill, int presetIndex) {
        return new HyperStatInfo(presetIndex, skill.getSkillId(), skill.getCurrentLevel());
    }
}
