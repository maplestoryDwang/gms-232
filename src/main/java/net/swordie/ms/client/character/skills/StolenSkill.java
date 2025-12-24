package net.swordie.ms.client.character.skills;

import net.swordie.ms.client.character.Char;

import javax.persistence.*;

/**
 * Created by Asura on 13-6-2018.
 */
@Entity
@Table(name = "stolenskills")
public class StolenSkill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int skillId;
    private int position;
    private int currentlv;

    public StolenSkill() {

    }

    public StolenSkill(Char chr, int id, int skillId, int position, int currentlv) {
        this.id = id;
        this.skillId = skillId;
        this.position = position;
        this.currentlv = currentlv;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSkillId() {
        return skillId;
    }

    public void setSkillId(int skillId) {
        this.skillId = skillId;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }

    public int getCurrentlv() {
        return currentlv;
    }

    public void setCurrentlv(int currentlv) {
        this.currentlv = currentlv;
    }
}
