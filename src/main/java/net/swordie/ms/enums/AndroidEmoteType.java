package net.swordie.ms.enums;

public enum AndroidEmoteType {
    HIT(1),
    SMILE(2),
    TROUBLED(3),
    CRY(4),
    ANGRY(5),
    BEWILDERED(6),
    STUNNED(7),
    VOMIT(8),
    OOPS(9),
    CHEERS(10),
    CHU(11),
    WINK(12),
    PAIN(13),
    GLITTER(14),
    BLAZE(15),
    SHINE(16),
    LOVE(17),
    DESPAIR(18),
    HUM(19),
    BOWING(20),
    HOT(21),
    DAM(22),
    PANICKY(24),
    QBLUE(38), //Not To Sure The Actual Name. This Is What It's Named In The WZ Files It Also Skips To ID 38.
    NOSEBLEED(39),
    DIZZY(40),
    AWKWARD(41),
    VILLAINOUS(42),
    AWESOME(43),
    TROLL(44),
    CHOCOLATE_OVERLAND(45),
    CHOCOLATE_EMISSIONS(46),
    HOOEEEH(47), //The Name Is Hooeeh!? But The Code Gets Mad With A "?"
    UTTER_EMBARRASSMENT(48);

    private final int id;

        AndroidEmoteType(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public static AndroidEmoteType fromId(int id) {
        for (AndroidEmoteType type : values()) {
            if (type.id == id) {
                    return type;
            }
        }
        return null;
    }
}
