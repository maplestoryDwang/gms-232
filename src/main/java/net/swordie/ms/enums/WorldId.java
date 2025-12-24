package net.swordie.ms.enums;

/**
 * @author Sjonnie
 * Created on 3/19/2019.
 */
public enum WorldId {
    Scania(0),
    Bera(1),
    Broa(2),
    LunaKR(3),
    ZenithKR(4),
    CroaKR(5),
    Mardia(6), //?
    Kradia(7), //?
    Yellonde(8), //?
    Demethos(9), //?
    UnionKR(10),
    ElNido(11), //?
    Zenith(12), //?
    Arcania(13), //?
    Chaos(14), //?
    Nova(15), //?
    ElysiumKR(16),
    Aurora(17),
    Elysium(18),
    EnosisKR(29),
    LunaEU(30),
    Elysium2(31), //?
    RedKR(43),
    AuroraKR(44),
    Reboot(45),
    Euboot(46),
    YetiPinkBeanKR(47),
    Burning(48),
    BurningEU(49),
    ArcaneKR(50),
    NovaKR(51),
    BurningKR2(52),
    YetiPinkBeanKR2(53),

    Tespia(100),


    ;

    private int val;

    WorldId(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }

}