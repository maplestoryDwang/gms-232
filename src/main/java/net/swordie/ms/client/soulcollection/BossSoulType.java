package net.swordie.ms.client.soulcollection;

import java.util.Arrays;

/**
 * Created on 02/07/2021.
 *
 * @author Asura
 */
public enum BossSoulType {
    Cygnus(0),
    VonLeon(1),
    SpiritOfRock(2, false),
    Ephenia(3, false),
    Balrog(4),
    PrisonGuardAni(5, false),
    MuGong(6, false),
    Ursus(7),
    Magnus(8),
    Arkarium(9),
    PinkBean(10),
    Lotus(11),
    Damien(12),
    BlackKnight(13),
    MadMage(14),
    ViciousHunter(15),
    RampantCyborg(16),
    BadBrawler(17),
    Zakum(18),
    Hilla(19),
    VonBon(20),
    Pierre(21),
    CrimsonQueen(22),
    Vellum(23),
    CaptainDarkgoo(24, false),
    Xerxes(25, false),
    Rex(26, false),
    Pianus(27, false),
    DragonRider(28, false),
    Lucid(29),
    Papulatus(30),
    Will(31),
    VerusHilla(32),
    Darknell(33),

    ;
    private int val;
    private boolean hasMagnificent = true;

    BossSoulType(int val) {
        this.val = val;
    }

    BossSoulType(int val, boolean hasMagnificent) {
        this.val = val;
        this.hasMagnificent = hasMagnificent;
    }

    public int getVal() {
        return val;
    }

    public boolean hasMagnificent() {
        return hasMagnificent;
    }

    public static BossSoulType getByVal(int val) {
        return Arrays.stream(values()).filter(bst -> bst.getVal() == val).findFirst().orElse(null);
    }
}
