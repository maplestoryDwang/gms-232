package net.swordie.ms.enums;

/**
 * Created on 05/06/2021.
 *
 * @author Asura
 */
public enum RolePlayingType {
    Hayato(0),
    Kanna(1),
    Ayame(2),
    Mercedes(3),
    Aran(4),
    Phantom(5),
    Luminous(6),
    Evan(7),
    Shade(8),
    Evan2(9),
    Evan3(10),
    FancyMercedes(11),
    FancyPhantom(12),
    FancyMercedesWithWeapon(13),
    FancyPhantomWithWeapon(14),
    FancyLuminousWithWeapon(15),
    ;

    private int val;

    public int getVal() {
        return val;
    }

    RolePlayingType(int val) {
        this.val = val;
    }

}
