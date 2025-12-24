package net.swordie.ms.client.character.items;

import net.swordie.ms.constants.ItemConstants;

import java.util.Arrays;

/**
 * Created on 1/7/2018.
 */
public enum BodyPart {
    BPBase(0, false),
    Hair(0),
    Hat(1),
    FaceAccessory(2),
    EyeAccessory(3),
    Earrings(4),
    Top(5),
    Overall(5), // Top and overall share the same body part
    Bottom(6),
    Shoes(7),
    Gloves(8),
    Cape(9),
    Shield(10), // Includes things such as katara, 2ndary
    Weapon(11),
    Ring1(12),
    Ring2(13),
    PetWear1(14),
    Ring3(15),
    Ring4(16),
    Pendant(17),
    TamingMob(18),
    Saddle(19),
    MobEquip(20),
    Medal_OLD(21),
    Belt_OLD(22),
    Shoulder_OLD(23),
    PetWear2(24),
    PetWear3(25),
    PocketItem_OLD(26),
    Android_OLD(27),
    MechanicalHeart_OLD(28),
    Badge_OLD(29),
    Emblem_OLD(30),
    Extended0(31),
    Extended1(32),
    Extended2(33),
    Extended3(34),
    Extended4(35),
    Extended5(36),
    Extended6(37),
    Medal(49),
    Belt(50),
    Shoulder(51),
    PocketItem(52),
    Android(53),
    MechanicalHeart(54),
    MonsterBook(55),
    Badge(56),
    Emblem(61),
    ExtendedPendant(65),
    Sticker(100),
    BPEnd(100, false),

    CBPBase(101, false), // CASH
    CPBHat(101),
    CPBFaceAccessory(102),
    CPBEyeAccessory(103),
    CPBEarrings(104),
    CPBTop(105),
    CPBOverall(105),
    CPBBottom(106),
    CPBShoes(107),
    CPBGloves(108),
    CPBCape(109),
    CPBShield(110),
    CPBWeapon(111),
    CPBRing1(112),
    CPBRing2(113),
    CPBRing3(115),
    CPetWear1(114),
    CPBRing4(116),
    CPBPendant(117),
    CPBPendant2(118),
    CPetWear2(130),
    CPetWear3(138),
    CPBBelt(150),
    CPBShoulder(151),

    PetConsumeHPItem(200),
    PetConsumeMPItem(201),

    CBPEnd(1000, false),

    EvanBase(1000, false),
    EvanHat(1000),
    EvanPendant(1001),
    EvanWing(1002),
    EvanShoes(1003),
    EvanEnd(1004, false),

    MechBase(1100, false),
    MachineEngine(1100),
    MachineArm(1101),
    MachineLeg(1102),
    MachineFrame(1103),
    MachineTransistor(1104),
    MechEnd(1105, false),

    APBase(1200, false),
    APHat(1200),
    APCape(1201),
    APFaceAccessory(1202),
    APTop(1203),
    APOverall(1203),
    APBottom(1204),
    APShoes(1205),
    APGloves(1206),
    APEnd(1207, false),

    DUBase(1300, false),
    DUHat(1300),
    DUCape(1301),
    DUFaceAccessory(1302),
    DUTop_Old(1303),
    DUOverall_Old(1303),
    DUGloves(1304),
    DUEyeAccessory(1305),
    DUEarrings(1306),
    DUTop(1307),
    DUOverall(1307),
    DUBottom(1308),
    DUShoes(1309),
    DUEnd(1310, false),

    BitsBase(1400, false), // 1400~1424
    BitsEnd(1425, false),

    ZeroBase(1500, false),
    ZeroEyeAccessory(1500),
    ZeroHat(1501),
    ZeroFaceAccessory(1502),
    ZeroEarrings(1503),
    ZeroCape(1504),
    ZeroTop(1505),
    ZeroOverall(1505),
    ZeroGloves(1506),
    ZeroWeapon(1507),
    ZeroBottom(1508),
    ZeroShoes(1509),
    ZeroRing1(1510),
    ZeroRing2(1511),
    ZeroPendant(1512),
    ZeroEnd(1513, false),

    AFBase(1600, false),
    AFVanishinJourney(1600),
    AFChuChu(1601),
    AFLachelein(1602),
    AFArcana(1603),
    AFMorass(1604),
    AFEsfera(1605),
    AFEnd(1606, false),

    AUSBase(1700, false),
    AUSCernium(1700),
    AUSArcs(1701),
    AUSThird(1702),
    AUSFourth(1703),
    AUSFifth(1704),
    AUSSixth(1705),
    AUSEnd(1706, false),

    TotemBase(5000, false),
    Totem1(5000),
    Totem2(5001),
    Totem3(5002),
    Totem4(5003),
    TotemEnd(5004, false),

    MBPBase(5100, false),
    MBPHat(5101),
    MBPCape(5102),
    MBPTop(5103),
    MBPOverall(5103),
    MBPGloves(5104),
    MBPShoes(5105),
    MBPWeapon(5106),
    MBPEnd(5107, false),

    HakuStart(5200, false),
    HakuFan(5200),
    HakuEnd(5201, false),

    SlotIndexNotDefined(15440);

    private int val;
    private boolean isEquipValue;

    BodyPart(int val) {
        this(val, true);
    }

    BodyPart(int val, boolean isEquipValue) {
        this.val = val;
        this.isEquipValue = isEquipValue;
    }

    public static BodyPart getByVal(int bodyPartVal) {
        return Arrays.stream(values())
                .filter(bp -> bp.isEquipValue && bp.getVal() == bodyPartVal)
                .findAny()
                .orElse(null);
    }

    public int getVal() {
        return val;
    }

    public BodyPart getBetaCashBodyPart() {
        switch (this) {
            case EyeAccessory:
                return ZeroEyeAccessory;
            case Hat:
                return ZeroHat;
            case FaceAccessory:
                return ZeroFaceAccessory;
            case Earrings:
                return ZeroEarrings;
            case Cape:
                return ZeroCape;
            case Top:
                return ZeroTop;
            case Overall:
                return ZeroOverall;
            case Gloves:
                return ZeroGloves;
            case Weapon:
            case Shield:
                return ZeroWeapon;
            case Bottom:
                return ZeroBottom;
            case Shoes:
                return ZeroShoes;
            case Ring2:
                return ZeroRing2;
            case Ring1:
                return ZeroRing1;
            case Pendant:
                return ZeroPendant;

            default:
                return null;
        }
    }

    public BodyPart getBetaBodyPart() {
        switch (this) {
            case ZeroEyeAccessory:
                return EyeAccessory;
            case ZeroHat:
                return Hat;
            case ZeroFaceAccessory:
                return FaceAccessory;
            case ZeroEarrings:
                return Earrings;
            case ZeroCape:
                return Cape;
            case ZeroTop:
                return Top;
            case ZeroOverall:
                return Overall;
            case ZeroGloves:
                return Gloves;
            case ZeroWeapon:
                return Weapon;
            case ZeroBottom:
                return Bottom;
            case ZeroShoes:
                return Shoes;
            case ZeroRing2:
                return Ring2;
            case ZeroRing1:
                return Ring1;
            case ZeroPendant:
                return Pendant;

            default:
                return null;
        }
    }

    public boolean matches(Item item) {
        if (item == null) {
            return false;
        }

        int itemId = item.getItemId();
        var isCash = item.isCash();
        var prefix = itemId / 10000;

        switch (this) {
            case Hat:
                return !isCash && ItemConstants.isHat(itemId);
            case FaceAccessory:
                return !isCash && ItemConstants.isFaceAccessory(itemId);
            case EyeAccessory:
                return !isCash && ItemConstants.isEyeAccessory(itemId);
            case Earrings:
                return !isCash && ItemConstants.isEarrings(itemId);
            case Top:
                return !isCash && ItemConstants.isTop(itemId) || ItemConstants.isOverall(itemId);
            case Overall:
                return !isCash && ItemConstants.isTop(itemId) || ItemConstants.isOverall(itemId);
            case Bottom:
                return !isCash && ItemConstants.isBottom(itemId);
            case Shoes:
                return !isCash && ItemConstants.isShoe(itemId);
            case Gloves:
                return !isCash && ItemConstants.isGlove(itemId);
            case Cape:
                return !isCash && ItemConstants.isCape(itemId);
            case Shield:
                return !isCash && (ItemConstants.isShield(itemId) || ItemConstants.isSecondary(itemId)) || ItemConstants.isKatara(itemId) || ItemConstants.isFan(itemId);
            case Weapon:
                return !isCash && ItemConstants.isWeapon(itemId);
            case Ring1:
            case Ring2:
                return !isCash && ItemConstants.isRing(itemId);
            case Ring3:
            case Ring4:
                return !isCash && ItemConstants.isRing(itemId);
            case Pendant:
                return !isCash && ItemConstants.isPendant(itemId);
            case TamingMob:
                return !isCash && prefix == EquipPrefix.TamingMob.getVal();
            case Saddle:
                return !isCash && prefix == EquipPrefix.Saddle.getVal();
            case PetWear1:
            case PetWear2:
            case PetWear3:
            case CPetWear1:
            case CPetWear2:
            case CPetWear3:
                return isCash && ItemConstants.isPetWear(itemId);
            case Medal:
                return !isCash && ItemConstants.isMedal(itemId);
            case Belt:
                return !isCash && ItemConstants.isBelt(itemId);
            case Shoulder:
                return !isCash && ItemConstants.isShoulder(itemId);
            case PocketItem:
                return !isCash && ItemConstants.isPocketItem(itemId);
            case Android:
                return !isCash && ItemConstants.isAndroid(itemId);
            case MechanicalHeart:
                return !isCash && ItemConstants.isMechanicalHeart(itemId);
            case MonsterBook:
                return !isCash && ItemConstants.isMonsterBook(itemId);
            case Badge:
                return !isCash && ItemConstants.isBadge(itemId);
            case Emblem:
                return !isCash && ItemConstants.isEmblem(itemId);
            case ExtendedPendant:
                return !isCash && ItemConstants.isPendant(itemId);
            case Sticker:
                return isCash && ItemConstants.isWeapon(itemId);
            case CPBHat:
            case APHat:
            case DUHat:
            case ZeroHat:
            case MBPHat:
                return isCash && ItemConstants.isHat(itemId);
            case CPBFaceAccessory:
            case APFaceAccessory:
            case DUFaceAccessory:
            case ZeroFaceAccessory:
                return isCash && ItemConstants.isFaceAccessory(itemId);
            case CPBEyeAccessory:
            case DUEyeAccessory:
            case ZeroEyeAccessory:
                return isCash && ItemConstants.isEyeAccessory(itemId);
            case CPBEarrings:
            case DUEarrings:
            case ZeroEarrings:
                return isCash && ItemConstants.isEarrings(itemId);
            case CPBTop:
            case APTop:
            case DUTop:
            case ZeroTop:
            case MBPTop:
            case CPBOverall:
            case APOverall:
            case DUOverall:
            case ZeroOverall:
            case MBPOverall:
                return isCash && (ItemConstants.isTop(itemId) || ItemConstants.isOverall(itemId));
            case CPBBottom:
            case APBottom:
            case DUBottom:
            case ZeroBottom:
                return isCash && ItemConstants.isBottom(itemId);
            case CPBShoes:
            case APShoes:
            case DUShoes:
            case ZeroShoes:
            case MBPShoes:
                return isCash && ItemConstants.isShoe(itemId);
            case CPBGloves:
            case APGloves:
            case DUGloves:
            case ZeroGloves:
            case MBPGloves:
                return isCash && ItemConstants.isGlove(itemId);
            case CPBCape:
            case APCape:
            case DUCape:
            case ZeroCape:
            case MBPCape:
                return isCash && ItemConstants.isCape(itemId);
            case CPBShield:
                return isCash && ItemConstants.isShield(itemId) || ItemConstants.isKatara(itemId);
            case CPBWeapon:
            case ZeroWeapon:
            case MBPWeapon:
                return isCash && ItemConstants.isWeapon(itemId);
            case CPBRing1:
            case CPBRing2:
            case CPBRing3:
            case CPBRing4:
            case ZeroRing1:
            case ZeroRing2:
                return isCash && ItemConstants.isRing(itemId);
            case CPBPendant:
            case CPBPendant2:
            case ZeroPendant:
                return isCash && ItemConstants.isPendant(itemId);
            case CPBBelt:
                return isCash && ItemConstants.isBelt(itemId);
            case CPBShoulder:
                return isCash && ItemConstants.isShoulder(itemId);
            case PetConsumeHPItem:
                return ItemConstants.isConsume(itemId); // TODO
            case PetConsumeMPItem:
                return ItemConstants.isConsume(itemId); // TODO
            case EvanHat:
                return !isCash && prefix == EquipPrefix.EvanHat.getVal();
            case EvanPendant:
                return !isCash && prefix == EquipPrefix.EvanPendant.getVal();
            case EvanWing:
                return !isCash && prefix == EquipPrefix.EvanWing.getVal();
            case EvanShoes:
                return !isCash && prefix == EquipPrefix.EvanShoes.getVal();
            case MachineEngine:
                return !isCash && prefix == EquipPrefix.MachineEngine.getVal();
            case MachineArm:
                return !isCash && prefix == EquipPrefix.MachineArm.getVal();
            case MachineLeg:
                return !isCash && prefix == EquipPrefix.MachineLeg.getVal();
            case MachineFrame:
                return !isCash && prefix == EquipPrefix.MachineFrame.getVal();
            case MachineTransistor:
                return !isCash && prefix == EquipPrefix.MachineTransistor.getVal();
            case AFVanishinJourney:
                return itemId == 1712000 || itemId == 1712001;
            case AFChuChu:
                return itemId == 1712002;
            case AFLachelein:
                return itemId == 1712003;
            case AFArcana:
                return itemId == 1712004;
            case AFMorass:
                return itemId == 1712005;
            case AFEsfera:
                return itemId == 1712006;
            case AUSCernium:
                return itemId == 1713000;
            case AUSArcs:
                return itemId == 1713001;
            case Totem1:
            case Totem2:
            case Totem3:
            case Totem4:
                return !isCash && ItemConstants.isTotem(itemId);
            case HakuFan:
                return !isCash && ItemConstants.isFan(itemId);
        }
        return false;
    }
}
