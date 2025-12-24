package net.swordie.ms.client.character;

import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.util.Rect;

/**
 * Created on 05/07/2021.
 *
 * @author Asura
 */
public class Gun implements Encodable {
    private String name;
    private int ammo;
    private Rect retical;
    private int unk1, unk2;

    public Gun() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAmmo() {
        return ammo;
    }

    public void setAmmo(int ammo) {
        this.ammo = ammo;
    }

    public Rect getRetical() {
        return retical;
    }

    public void setRetical(Rect retical) {
        this.retical = retical;
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

    public void shoot() {
        setAmmo(getAmmo() - 1);
    }

    public void updateAmmoToChar(Char chr) {
        chr.write(UserLocal.setAmmo(getAmmo()));
    }

    public void updateGunToChar(Char chr) {
        chr.write(UserLocal.createGun());
        chr.write(UserLocal.setGun(this));
    }

    public void destroyGunToChar(Char chr) {
        chr.write(UserLocal.clearGun());
        chr.setGun(null);
    }

    public static Gun getByName(String name) {
        var gun = new Gun();

        switch (name) {
            case "shotgun":
                gun.setName(name);
                gun.setAmmo(99);
                gun.setRetical(new Rect(-8, -8, 8, 8));
                gun.setUnk1(1);
                gun.setUnk2(200);
                break;
        }

        return gun;
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeString(getName());
        outPacket.encodeString(getName());
        outPacket.encodeInt(getUnk1());
        outPacket.encodeInt(getUnk2());
        outPacket.encodeRectInt(getRetical());
    }
}
