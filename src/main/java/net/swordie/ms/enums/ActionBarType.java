package net.swordie.ms.enums;

import net.swordie.ms.util.Util;

//UI.WZ/UIWindow2/ActionBar
public enum ActionBarType {
    FlameHornetCutFlora(0),
    WarpLeave(1),
    Bomb(2),
    Invincibility(3),
    ElementRockBomb(4),
    LambDisabled(5),
    LambDisabled2(6),
    Wolf(7),
    Wolf2(8),
    LambEnabled(9),
    Magnus(10),
    Ani(11),
    Arkarium(12),
    DragonRider(13),
    Cygnus(14),
    VonLeon(15),
    FlashJump10(16),
    ArrowLaunch(17),
    SpaceLaserRed(18),
    SpaceLaserBlue(19),
    SpaceLaserGreen(20),
    SpaceLaserYellow(21),
    FlagRaceSnow(22),
    Roar(23),
    ColorMonsterBombNoSeeQuestion(24),
    Jaguar(25),
    Mercedes(26),
    Aran(27),
    Phantom(28),
    Luminous(29),
    Evan(30),
    Shade(31),
    EvanDragonFlashDisabled(32),
    EvanFireEarth(33),
    Mercedes2(34),
    Phantom2(35),
    Mercedes3(36),
    Phantom3(37),
    Luminous2(38),
    BlackMageBlackWhite(39),
    PixelAllDisabled(40),
    WaterBalloon(41),
    PixelFlightHaste(42),
    RedBlueEnergyBeam(43),
    PurpleEnergyBeam(44),
    AquaStallion(46),
    BooTransformRandom(47),
    FireCannon(100),
    FireCannonHorn(101),
    FireCannonHornMagicArrow(102),
    FireCannon2(103),
    Horn(104),
    MagicArrow(105),

    HydroBlaster(200),
    QuackMaster(201),

    Wondroid(1008),
    Shrelephant(1009),
    Monad(1010),
    AnicentRuins(1011),
    AsuraCrisis(1014),
    GooCombat(1015),
    GooExploration(1016),
    ShortJumpPowerJump(3800)
    ;

    private int val;

    ActionBarType(int val) {
        this.val = val;
    }

    public static ActionBarType getByVal(int val) {
        return Util.findWithPred(values(), at -> at.getVal() == val);
    }

    public int getVal() {
        return val;
    }
}
