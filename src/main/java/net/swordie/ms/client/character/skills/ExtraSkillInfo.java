package net.swordie.ms.client.character.skills;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.util.Position;

/**
 * Created on 22/01/2021.
 *
 * @author Asura
 */
public class ExtraSkillInfo {
    /**
     *  Used for RegisterExtraSkill Packet.
     *
     */
    public int extraSkillId;
    public Position position;
    public boolean left;
    public int delay;
    public int unk;

    public ExtraSkillInfo() {
    }

    public ExtraSkillInfo(Char chr, int extraSkillId) {
        this.extraSkillId = extraSkillId;
        this.position = chr.getPosition();
    }

    public ExtraSkillInfo(int extraSkillId, Position position, boolean left, int delay, int unk) {
        this.extraSkillId = extraSkillId;
        this.position = position;
        this.left = left;
        this.delay = delay;
        this.unk = unk;
    }
}
