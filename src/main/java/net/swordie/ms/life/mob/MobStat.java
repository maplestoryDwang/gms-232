package net.swordie.ms.life.mob;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.util.Util;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public enum MobStat implements Comparator<MobStat> {
    IndiePdr(0),
    IndieMdr(1),
    IndieStatCount(2),
    Indie218(3),
    Indie232(4),
    PAD(5), // *
    PDR(6),
    MAD(7),
    MDR(8),
    ACC(9),
    EVA(10),
    Speed(11),
    Stun(12),

    Freeze(13),
    Poison(14),
    Seal(15),
    Darkness(16),
    PowerUp(17),
    MagicUp(18),
    PGuardUp(19),
    MGuardUp(20),

    PImmune(21),
    MImmune(22),
    Web(23),
    HardSkin(24),
    Ambush(25),
    Venom(26),
    Blind(27),
    SealSkill(28),

    Dazzle(29),
    PCounter(30),
    MCounter(31),
    RiseByToss(32),
    BodyPressure(33),
    Weakness(34),
    Showdown(35),
    MagicCrash(36),

    DamagedElemAttr(37),
    Dark(38),
    Mystery(39),
    Unk205_33(38),
    AddDamParty(39),
    HitCriDamR(40),
    Fatality(41),
    Lifting(42),
    DeadlyCharge(43),

    Smite(44),
    AddDamSkill(45),
    Incizing(46),
    DodgeBodyAttack(47),
    DebuffHealing(48),
    FinalDmgReceived(49),
    BodyAttack(50),
    TempMoveAbility(51),

    FixDamRBuff(52),
    SpiritGate(53),
    ElementDarkness(54),
    AreaInstallByHit(55),
    BMageDebuff(56),
    JaguarProvoke(57),
    JaguarBleeding(58),
    Unk227_58(59),
    DarkLightning(60),
    PinkBeanFlowerPot(61),
    PsychicLock(62),
    PsychicGroundMark(63),
    PowerImmune(64),
    Unk227_64(65),
    MultiPMDR(66),
    ElementResetBySummon(67),
    BahamutLightElemAddDam(68),
    UmbralBrand(69),
    BossPropPlus(70),
    MultiDamSkill(71),
    RWLiftPress(72),
    RWChoppingHammer(73),
    TimeBomb(74),
    Treasure(75),
    AddEffect(76),

    Unknown1(77),
    Unknown2(78),
    Invincible(79),
    Unknown75(80),
    FinalDmgReceived_Shade(81),
    Curseweaver(82),
    Unk209_83(83),
    Transform(84),
    Suction(85),
    Unk214_86(86),
    LawOfGravity(87),
    Unknown78(88),
    CradleBlitzkrieg(89),
    Unknown80(90),
    Unknown81(91),
    Unk205_85(92),
    Unk205_86(93),
    Unk218_94(94),
    Unk218_95(95),
    Unk218_96(96),
    Unk218_97(97),
    Unk218_98(98),
    Unk227_98(99),
    Unk227_99(100),
    Unk227_100(101),
    Explosion(102),
    HangOver(103),
    Unknown84(104),
    Unk208_94(105),
    BurnedInfo(106),
    InvincibleBalog(107),
    ExchangeAttack(108),

    ExtraBuffStat(109),
    LinkTeam(110),
    SoulExplosion(111),
    SeperateSoulP(112),
    SeperateSoulC(113),
    Ember(114),
    TrueSight(115),
    Laser(116),
    Unk199_97(117),
    Unk188_97(118),
    Unk199_99(119),
    Unk199_100(120),
    Unk199_101(121),
    Unk199_102(122),
    Unk199_103(123),
    Unk199_104(124),
    Unk205_110(125),
    Unk218_124(126),

    No(-1),
    ;

    public static final int LENGTH = 5;
    private int val, pos, bitPos;

    MobStat(int val, int pos) {
        this.val = val;
        this.pos = pos;
    }

    MobStat(int bitPos) {
        this.bitPos = bitPos;
        this.val = 1 << (31 - bitPos % 32);
        this.pos = bitPos / 32;
    }

    public int getPos() {
        return pos;
    }

    public int getVal() {
        return val;
    }

    public boolean isMovementAffectingStat() {
        switch (this) {
            case Speed:
            case Stun:
            case Freeze:
            case RiseByToss:
            case Lifting:
            case Smite:
            case TempMoveAbility:
            case RWLiftPress:
            case Unk199_97:
                return true;
            default:
                return false;
        }
    }

    public int getBitPos() {
        return bitPos;
    }

    public boolean isIndie() {
        return this.bitPos < Indie218.bitPos;
    }

    public boolean isMobStun() { // MobStat that prevents mob from attacking & moving
        return this.equals(Stun) || this.equals(Freeze);
    }

    public boolean isCrash() { // MobStat that prevents mob from using buffs
        return this.equals(MagicCrash);
    }

    public static void main(String[] args) {
        updateMobStat();
    }

    public static void showMobStats() {
        var packet = "09 B1 D0 09 00 00 00 00 00 00 00 00 00 00 08 00 00 00 00 00 00 00 00 00 01 00 00 00 F1 00 02 00 3C 00 30 75 00 00 00 00 01";
        var inPacket = new InPacket(Util.getByteArrayByString(packet));
        var mobId = inPacket.decodeInt();
        var vals = new int[LENGTH];
        for (int i = 0; i < LENGTH; i++) {
            vals[i] = inPacket.decodeInt();
        }
        for (int i = 0; i < 32 * LENGTH; i++) {
            var arrPos = i / 32;
            var posInArray = i % 32;
            final var i2 = i;
            if ((vals[arrPos] & (1 << posInArray)) != 0) {
                var mobStat = Arrays.stream(values()).filter(ms -> ms.getBitPos() == i2).findFirst().get();
                System.out.println(String.format("Contained mobstat: %s (%s)", mobStat, mobStat.getBitPos()));
            }
        }
    }

    @Override
    public int compare(MobStat o1, MobStat o2) {
        return Integer.compare(o1.bitPos, o2.bitPos);
    }

    private static void updateMobStat() {
        File file = new File(ServerConstants.DIR + "\\src\\main\\java\\net\\swordie\\ms\\life\\mob\\MobStat.java");
        int change = 1;
        MobStat checkOp = null;
        try (Scanner s = new Scanner(file)) {
            while (s.hasNextLine()) {
                String line = s.nextLine();
                if (line.contains(",") && line.contains("(")) {
                    String[] split = line.split("[()]");
                    String name = split[0];
                    if (!Util.isNumber(split[1])) {
                        System.out.println(line);
                        continue;
                    }
                    int val = Integer.parseInt(split[1]);
                    MobStat ih = Arrays.stream(MobStat.values()).filter(o -> o.toString().equals(name.trim())).findFirst().orElse(null);
                    if (ih != null) {
                        MobStat start = PAD;
                        if (ih.ordinal() >= start.ordinal() && ih.ordinal() < No.ordinal()) {
                            if (line.contains("*")) {
                                checkOp = ih;
                            }
                            val += change;
                            System.out.println(String.format("%s(%d), %s", name, val, start == ih ? "// *" : ""));
                        } else {
                            System.out.println(line);
                        }
                    } else {
                        System.out.println(line);
                    }
                } else {
                    System.out.println(line);
                }
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        if (checkOp != null) {
            System.err.println(String.format("Current op (%s) contains a * (= updated). Be sure to check for overlap.", checkOp));
        }
    }
}
