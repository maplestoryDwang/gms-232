package net.swordie.ms.client.character;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.db.TrackedObject;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

/**
 * Created on 4/2/2018.
 */
public class Macro extends TrackedObject {
    private long id;

    private int macroPos;
    private String name;
    private boolean muted;
    private List<Integer> skills;

    public Macro(boolean init) {
        if (init) {
            skills = new ArrayList<>();
            skills.add(0);
            skills.add(0);
            skills.add(0);
        }
    }

    public int getMacroPos() {
        return macroPos;
    }

    public void setMacroPos(int macroPos) {
        this.macroPos = macroPos;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Integer> getSkills() {
        if (skills == null || skills.size() == 0) {
            skills = Arrays.asList(0, 0, 0);
        }
        return skills;
    }

    public void setSkills(List<Integer> skills) {
        this.skills = skills;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public boolean isMuted() {
        return muted;
    }

    public void setMuted(boolean muted) {
        this.muted = muted;
    }

    public void setSkillAtPos(int pos, int skillID) {
        if (pos >= 0 && pos < 3) {
            getSkills().set(pos, skillID);
        }
    }

    public void encode(OutPacket outPacket) {
        outPacket.encodeString(getName());
        outPacket.encodeByte(isMuted());
        for(int i : getSkills()) {
            outPacket.encodeInt(i);
        }
    }

    public int getTransactionalHash() {
        int result = Objects.hash(macroPos, name, muted);
        result = 31 * result + Arrays.hashCode(skills.toArray());
        return result;
    }

}
