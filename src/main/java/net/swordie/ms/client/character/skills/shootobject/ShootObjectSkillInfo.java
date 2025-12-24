package net.swordie.ms.client.character.skills.shootobject;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.life.Summon;
import net.swordie.ms.util.Position;

import java.util.ArrayList;
import java.util.List;

/**
 * Created on 14-9-2019.
 *
 * @author Asura
 */
public class ShootObjectSkillInfo {
    private Summon summonOwner;
    private Char chr;
    private int skillId;
    private int slv;
    private Position position;
    private int action;
    private int actionSpeed;
    private List<ShootObject> shootObjects = new ArrayList<>();
    private int projectileItemId;
    private int projectileItemPosition;
    private boolean encodeExtra;

    public int extraEncodeInt1;
    public int extraEncodeInt2;
    public int extraEncodeInt3;
    public int extraEncodeInt4;
    public int extraEncodeInt5;
    public int extraEncodeInt6;
    public byte extraEncodeByte;

    public ShootObjectSkillInfo(Char chr) {
        this.chr = chr;
    }

    public Summon getSummonOwner() {
        return summonOwner;
    }

    public void setSummonOwner(Summon summonOwner) {
        this.summonOwner = summonOwner;
    }

    public Char getChr() {
        return chr;
    }

    public void setChr(Char chr) {
        this.chr = chr;
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

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public int getAction() {
        return action;
    }

    public void setAction(int action) {
        this.action = action;
    }

    public int getActionSpeed() {
        return actionSpeed;
    }

    public void setActionSpeed(int actionSpeed) {
        this.actionSpeed = actionSpeed;
    }

    public List<ShootObject> getShootObjects() {
        return shootObjects;
    }

    public void setShootObjects(List<ShootObject> shootObjects) {
        this.shootObjects = shootObjects;
    }

    public int getProjectileItemId() {
        return projectileItemId;
    }

    public void setProjectileItemId(int projectileItemId) {
        this.projectileItemId = projectileItemId;
    }

    public int getProjectileItemPosition() {
        return projectileItemPosition;
    }

    public void setProjectileItemPosition(int projectileItemPosition) {
        this.projectileItemPosition = projectileItemPosition;
    }

    public boolean isEncodeExtra() {
        return encodeExtra;
    }

    public void setEncodeExtra(boolean encodeExtra) {
        this.encodeExtra = encodeExtra;
    }
}
