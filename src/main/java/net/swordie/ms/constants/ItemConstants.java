package net.swordie.ms.constants;

import net.swordie.ms.client.character.items.*;
import net.swordie.ms.client.soulcollection.BossSoulCollectionFlag;
import net.swordie.ms.client.soulcollection.BossSoulType;
import net.swordie.ms.enums.*;
import net.swordie.ms.life.drop.Drop;
import net.swordie.ms.life.drop.DropInfo;
import net.swordie.ms.life.pet.PetSkill;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.containerclasses.EquipDrop;
import net.swordie.ms.loaders.containerclasses.ItemInfo;
import net.swordie.ms.util.Util;
import net.swordie.orm.dao.EquipDropDao;
import net.swordie.orm.dao.SworDaoFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.*;
import java.util.stream.Collectors;

import static net.swordie.ms.enums.InvType.EQUIP;

/**
 * Created on 12/12/2017.
 */
public class ItemConstants {

    private static final EquipDropDao equipDropDao = (EquipDropDao) SworDaoFactory.getByClass(EquipDrop.class);

    private static final Map<WeightedItemOptionKey, List<Integer>> weightedItemOptionsCache = new HashMap<>();

    // Important Item IDs
    public static final int BROKEN_BOX_PIECE = 2432468;
    public static final int HIDDEN_RING_BOX = 2028273;
    public static final int OZ_POINT_POUCH = 2432464;
    public static final int NODESTONE = 2435719;
    public static final int SPELL_TRACE_ID = 4001832;
    public static final int HYPER_TELEPORT_ROCK = 5040004;

    public static final int INTENSE_POWER_CRYSTAL = 4001886;

    public static final int RED_CUBE = 5062009;
    public static final int BLACK_CUBE = 5062010;
    public static final int OCCULT_CUBE = 2711000;
    public static final int MEISTER_CUBE = 2711004;
    public static final int CRAFTSMAN_CUBE = 2711003;

    public static final int BONUS_POT_CUBE = 5062500;
    public static final int SPECIAL_BONUS_POT_CUBE = 5062501;
    public static final int WHITE_BONUS_POT_CUBE = 5062503;
    public static final int NEBULITE_SOCKET_CREATOR = 2930000;
    public static final int NEBULITE_DIFFUSER = 5750001;
    public static final int NEBULITE_BOX = 2430692;

    public static final int MIRACULOUS_CHAOS_SCROLL_50 = 2049133; // Tradeable
    public static final int MIRACULOUS_CHAOS_SCROLL_60 = 2049116; // Account-bound
    public static final int CHAOS_SCROLL_OF_GOODNESS_50 = 2049129; // Tradeable
    public static final int INCREDIBLE_CHAOS_SCROLL_OF_GOODNESS_20 = 2049136; // Tradeable
    public static final int INCREDIBLE_CHAOS_SCROLL_OF_GOODNESS_40 = 2049137; // Untradeable
    public static final int INCREDIBLE_CHAOS_SCROLL_OF_GOODNESS_50 = 2049165; // Untradeable
    public static final int INCREDIBLE_CHAOS_SCROLL_OF_GOODNESS_60 = 2049153; // Untradeable

    public static final int INNOCENCE_SCROLL_20 = 2049607; // Untradeable
    public static final int INNOCENCE_SCROLL_40 = 2049605; // Tradeable
    public static final int INNOCENCE_SCROLL_50 = 2049606; // Tradeable
    public static final int INNOCENCE_SCROLL_60 = 2049611; // Untradeable
    public static final int INNOCENCE_SCROLL_100 = 2049610; // Untradeable

    // Rebirth Flames
    public static final int REBIRTH_FLAME_110 = 2048700; // Tradeable
    public static final int REBIRTH_FLAME_120 = 2048701; // Tradeable
    public static final int REBIRTH_FLAME_130 = 2048702; // Tradeable
    public static final int REBIRTH_FLAME_140 = 2048703; // Tradeable
    public static final int REBIRTH_FLAME_150 = 2048704; // Tradeable
    public static final int POWERFUL_REBIRTH_FLAME = 2048716; // Tradeable
    public static final int ETERNAL_REBIRTH_FLAME = 2048717; // Tradeable

    public static final int PET_EQUIP_ATT_20 = 2048043;
    public static final int PET_EQUIP_MATT_20 = 2048044;


    // Swordie Items
    public static final int SWORDIE_COIN = 4310096;
    public static final int GOLDEN_MAPLE_LEAF = 4000313;
    public static final int MAPLE_LEAF_GOLD = 4430000;

    // Boss-dropped Items
    public static final int CRUSADER_COIN = 4310018;
    public static final int BOSS_MEDAL_OF_HONOR = 2433103; // gives Honor EXP for Inner Ability
    public static final int BLACK_MAGE_TOKEN = 2432009;
    public static final int COMMERCI_DENARO = 4310100;
    public static final int POWER_ELIXIR = 2022176; // Tradeable
    public static final int REINDEER_MILK = 2020013; // Tradeable
    public static final int ELIXIR = 2000004; // Tradeable
    public static final int SUNSET_DEW = 2020015; // Tradeable
    public static final int SUNRISE_DEW = 2020014; // Tradeable

    // Ari FM NPC Sold items
    public static final int RANDOM_DAMAGE_SKIN_BOX = 2632129;
    public static final int RANDOM_CHAIR_BOX = 2022936; // [PMD] Chair Box


    // Kaiser Color Change Item
    public static final int FINAL_FORM_MAIN_COLOR_CHANGE_COUPON = 2350004;
    public static final int FINAL_FORM_SUB_COLOR_CHANGE_COUPON = 2350005;
    public static final int FINAL_FORM_PREMIUM_BLACK_COUPON = 2350006;
    public static final int FINAL_FORM_RESET_COUPON = 2350007;


    public static final int CUSTOM_TITLE_ITEM_ID = 3700623;
    public static final int EMPTY_SOCKET_ID = 3;
    public static final short INACTIVE_SOCKET = 0;
    public static final short MIN_LEVEL_FOR_SOUL_SOCKET = 75;
    public static final int SOUL_ENCHANTER_BASE_ID = 2590000;
    public static final int SOUL_ITEM_BASE_ID = 2591000;
    public static final int MAX_SOUL_CAPACITY = 1000;
    public static final int SOUL_MP_ITEM_ID = 4001536;
    public static final int MOB_DEATH_SOUL_MP_COUNT = 7; // SoulMP per Orb
    public static final int SOUL_ORBS_PER_DEATH = 1; // # Orbs created per Mob death
    public static final int MOB_CARD_BASE_ID = 2380000;
    public static final int FAMILIAR_PREFIX = 996;

    public static final int RAND_CHAOS_MAX = 5;
    public static final int INC_RAND_CHAOS_MAX = 10;
    public static final int MAX_ARCANE_SYMBOL_LEVEL = 20;
    public static final int MAX_AUTH_SYMBOL_LEVEL = 11;

    public static final byte MAX_SKIN = 13;
    public static final int MIN_HAIR = 30000;
    public static final int MAX_HAIR = 49999;
    public static final int MIN_HAIR_2 = 60000;
    public static final int MAX_HAIR_2 = 69999;
    public static final int MIN_FACE = 20000;
    public static final int MAX_FACE = 29999;
    public static final int MIN_FACE_2 = 50000;
    public static final int MAX_FACE_2 = 52000;


    static final Logger log = LogManager.getRootLogger();

    public static final int THIRD_LINE_CHANCE = 50;
    public static final int PRIME_LINE_CHANCE = 15;

    public static final int NEBILITE_BASE_ID = 3060000;

    public static final int NEB_D_PROP = 40;
    public static final int NEB_C_PROP = 20;
    public static final int NEB_B_PROP = 15;
    public static final int NEB_A_PROP = 15;
    public static final int NEB_S_PROP = 10;

    // Cash shop
    public static final int SURPRISE_STYLE_BOX = 5222060;



    public static final int[] DECENT_SKILL_ITEM_OPTION = {
            31001, // Haste
            31002, // Mystic Door
            31003, // Sharp Eyes
            31004, // Hyper Body
            41005, // Combat Orders
            41006, // Advanced Blessing
            41007, // Speed Infusion
    };

    public static final int[] DECENT_SKILL_SOCKET_OPTION = {
            3370, // Haste
            3380, // Mystic Door
            3390, // Sharp Eyes
            3400, // Hyper Body
            4470, // Combat Orders
            4480, // Advanced Blessing
            4490, // Speed Infusion
    };

    public static final int HORNTAIL_NECKLACE[] = {
            1122000, // Horntail Necklace
            1122076, // Chaos Horntail Necklace
            1122151, // Chaos Horntail Necklace (+2)
            1122249, // Dream Horntail Necklace
            1122278, // Mystic Horntail Necklace
    };

    public static final short MAX_HAMMER_SLOTS = 2;

    private static final Integer[] soulPotList = new Integer[]{
            // flat
            32001, // STR
            32002, // DEX
            32003, // INT
            32004, // LUK
            32005, // MHP
            32006, // MMP
            32009, // Speed
            32010, // Jump
            32011, // ATT
            32012, // MATT

            // rate
            32041, // STR
            32042, // DEX
            32043, // INT
            32044, // LUK
            32045, // MHP
            32046, // MMP
            32051, // ATT
            32053, // MATT
            32057, // CR
            32070, // DAM
            32086, // AS
            32087, // AS
            32291, // IED
            32601, // BD
    };

    private static final int TUC_IGNORE_ITEMS[] = {
            1113231, // Master Ring SS
            1114301, // Reboot Vengeful Ring
            1114302, // Synergy Ring
            1114303, // Cosmos Ring
            1114304, // Reboot Cosmos Ring
            1114305, // Chaos Ring
    };

    public static final int NON_KMS_BOSS_SETS[] = {
            127, // Amaterasu
            128, // Oyamatsumi
            129, // Ame-no-Uzume
            130, // Tsukuyomi
            131, // Susano-o
            315, // Cracked Gollux
            316, // Solid Gollux
            317, // Reinforced Gollux
            318, // Superior Gollux
            328, // Sweetwater
    };

    public static final int NON_KMS_BOSS_ITEMS[] = {
            1032224, // Sweetwater Earrings
            1022211, // Sweetwater Monocle
            1012438, // Sweetwater Tattoo
            1152160, // Sweetwater Shoulder
            1132247, // Sweetwater Belt
            1122269, // Sweetwater Pendant
    };

    // Spell tracing
    private static final int BASE_ST_COST = 30;
    private static final int INNOCENCE_ST_COST = 1337;
    private static final int CLEAN_SLATE_ST_COST = 200;

    // Flames
    public static final double WEAPON_FLAME_MULTIPLIER[] = {1.0, 2.2, 3.65, 5.35, 7.3, 8.8, 10.25};
    public static final double WEAPON_FLAME_MULTIPLIER_BOSS_WEAPON[] = {1.0, 1.0, 3.0, 4.4, 6.05, 8.0, 10.25}; // Boss weapons do not ever roll stat level 1/2.
    public static final short EQUIP_FLAME_LEVEL_DIVIDER = 40;
    public static final short EQUIP_FLAME_LEVEL_DIVIDER_EXTENDED = 20;

    public static final int EXCEPTIONAL_EX_ALLOWED[] = {
            1152155, // Scarlet Shoulder
            1113015, // Secret Ring
    };

    // Self-made drops per mob
    public static final Map<Integer, Set<DropInfo>> consumableDropsPerLevel = new HashMap<>();
    public static final Map<ItemJob, Map<Integer, Set<DropInfo>>> equipDropsPerLevel = new HashMap<>();
    private static final int MAX_LEVEL_EQUIP_DROPS = 190;

    static {
        initConsumableDrops();
        initEquipDrops();
    }

    private static void initConsumableDrops() {
        consumableDropsPerLevel.put(0, Util.makeSet(
                new DropInfo(2000000, 500), // Red Potion
                new DropInfo(2000003, 500)  // Blue Potion
        ));
        consumableDropsPerLevel.put(20, Util.makeSet(
                new DropInfo(2000002, 500), // White Potion
                new DropInfo(2000006, 500)  // Mana Elixir
        ));
        consumableDropsPerLevel.put(40, Util.makeSet(
                new DropInfo(2001527, 500), // Unagi
                new DropInfo(2022000, 500)  // Pure Water
        ));
        consumableDropsPerLevel.put(60, Util.makeSet(
                new DropInfo(2001527, 500), // Unagi
                new DropInfo(2022000, 500)  // Pure Water
        ));
        consumableDropsPerLevel.put(80, Util.makeSet(
                new DropInfo(2001001, 500), // Ice Cream Pop
                new DropInfo(2001002, 500)  // Pure Water
        ));
        consumableDropsPerLevel.put(100, Util.makeSet(
                new DropInfo(2020012, 500), // Melting Cheese
                new DropInfo(2020013, 500), // Reindeer Milk
                new DropInfo(2020014, 500), // Sunrise Dew
                new DropInfo(2020015, 500), // Sunset Dew
                new DropInfo(2050004, 100)   // All Cure
        ));
    }

    private static void initEquipDrops() {
        List<EquipDrop> drops = equipDropDao.list();
        for (EquipDrop drop : drops) {
            ItemJob job = drop.getJob();
            int level = drop.getLevel();
            if (!equipDropsPerLevel.containsKey(job)) {
                equipDropsPerLevel.put(job, new HashMap<>());
            }
            Map<Integer, Set<DropInfo>> jobMap = equipDropsPerLevel.get(job);
            if (!jobMap.containsKey(level)) {
                jobMap.put(level, new HashSet<>());
            }
            Set<DropInfo> set = jobMap.get(level);
            int itemId = drop.getId();
            int chance = 100;
            if (ItemConstants.isWeapon(itemId)) {
                chance = 60;
            }
            set.add(new DropInfo(drop.getId(), chance));
        }
    }

    public static int getGenderFromId(int nItemID) {
        int result;

        if (nItemID / 1000000 != 1 && getItemPrefix(nItemID) != 254 || getItemPrefix(nItemID) == 119 || getItemPrefix(nItemID) == 168)
            return 2;
        switch (nItemID / 1000 % 10) {
            case 0:
                result = 0;
                break;
            case 1:
                result = 1;
                break;
            default:
                return 2;
        }
        return result;
    }

    public static int getBodyPartFromItem(int nItemID, int gender) {
        List<Integer> arr = getBodyPartArrayFromItem(nItemID, gender);
        return arr.size() > 0 ? arr.get(0) : 0;
    }

    public static List<Integer> getBodyPartArrayFromItem(int itemID, int genderArg) {
        int gender = getGenderFromId(itemID);
        EquipPrefix prefix = EquipPrefix.getByVal(getItemPrefix(itemID));
        List<Integer> bodyPartList = new ArrayList<>();
        if (prefix == null || (prefix != EquipPrefix.Emblem && prefix != EquipPrefix.Bit &&
                gender != 2 && genderArg != 2 && gender != genderArg)) {
            return bodyPartList;
        }
        switch (prefix) {
            case Hat:
                bodyPartList.add(BodyPart.Hat.getVal());
                bodyPartList.add(BodyPart.CPBHat.getVal());
                bodyPartList.add(BodyPart.EvanHat.getVal());
                bodyPartList.add(BodyPart.APHat.getVal());
                bodyPartList.add(BodyPart.DUHat.getVal());
                bodyPartList.add(BodyPart.ZeroHat.getVal());
                break;
            case FaceAccessory:
                bodyPartList.add(BodyPart.FaceAccessory.getVal());
                bodyPartList.add(BodyPart.CPBFaceAccessory.getVal());
                bodyPartList.add(BodyPart.APFaceAccessory.getVal());
                bodyPartList.add(BodyPart.DUFaceAccessory.getVal());
                bodyPartList.add(BodyPart.ZeroFaceAccessory.getVal());
                break;
            case EyeAccessory:
                bodyPartList.add(BodyPart.EyeAccessory.getVal());
                bodyPartList.add(BodyPart.CPBEyeAccessory.getVal());
                bodyPartList.add(BodyPart.ZeroEyeAccessory.getVal());
                bodyPartList.add(1305);
                break;
            case Earrings:
                bodyPartList.add(BodyPart.Earrings.getVal());
                bodyPartList.add(BodyPart.CPBEarrings.getVal());
                bodyPartList.add(BodyPart.ZeroEarrings.getVal());
                bodyPartList.add(1306);
                break;
            case Top:
            case Overall:
                bodyPartList.add(BodyPart.Top.getVal());
                bodyPartList.add(BodyPart.CPBTop.getVal());
                bodyPartList.add(BodyPart.APTop.getVal());
                bodyPartList.add(BodyPart.DUTop.getVal());
                bodyPartList.add(BodyPart.ZeroTop.getVal());
                bodyPartList.add(1307);
                break;
            case Bottom:
                bodyPartList.add(BodyPart.Bottom.getVal());
                bodyPartList.add(BodyPart.CPBBottom.getVal());
                bodyPartList.add(BodyPart.APBottom.getVal());
                bodyPartList.add(BodyPart.ZeroBottom.getVal());
                bodyPartList.add(1308);
                break;
            case Shoes:
                bodyPartList.add(BodyPart.Shoes.getVal());
                bodyPartList.add(BodyPart.CPBShoes.getVal());
                bodyPartList.add(BodyPart.APShoes.getVal());
                bodyPartList.add(BodyPart.ZeroShoes.getVal());
                bodyPartList.add(1309);
                break;
            case Gloves:
                bodyPartList.add(BodyPart.Gloves.getVal());
                bodyPartList.add(BodyPart.CPBGloves.getVal());
                bodyPartList.add(BodyPart.APGloves.getVal());
                bodyPartList.add(BodyPart.DUGloves.getVal());
                bodyPartList.add(BodyPart.ZeroGloves.getVal());
                break;
            case Shield:
            case Katara:
            case SecondaryWeapon:
            case Lapis:
                bodyPartList.add(BodyPart.Shield.getVal());
                bodyPartList.add(BodyPart.CPBShield.getVal());
                break;
            case Lazuli:
                bodyPartList.add(BodyPart.Weapon.getVal());
                bodyPartList.add(BodyPart.CPBWeapon.getVal());
                break;
            case Cape:
                bodyPartList.add(BodyPart.Cape.getVal());
                bodyPartList.add(BodyPart.CPBCape.getVal());
                bodyPartList.add(BodyPart.APCape.getVal());
                bodyPartList.add(BodyPart.DUCape.getVal());
                bodyPartList.add(BodyPart.ZeroCape.getVal());
                break;
            case Ring:
                bodyPartList.add(BodyPart.Ring1.getVal());
                bodyPartList.add(BodyPart.CPBRing1.getVal());
                bodyPartList.add(BodyPart.Ring2.getVal());
                bodyPartList.add(BodyPart.CPBRing2.getVal());
                bodyPartList.add(BodyPart.Ring3.getVal());
                bodyPartList.add(BodyPart.CPBRing3.getVal());
                bodyPartList.add(BodyPart.Ring4.getVal());
                bodyPartList.add(BodyPart.CPBRing4.getVal());
                bodyPartList.add(BodyPart.ZeroRing1.getVal());
                bodyPartList.add(BodyPart.ZeroRing2.getVal());
                break;
            case Pendant:
                bodyPartList.add(BodyPart.Pendant.getVal());
                bodyPartList.add(BodyPart.CPBPendant.getVal());
                bodyPartList.add(BodyPart.ExtendedPendant.getVal());
                bodyPartList.add(BodyPart.ZeroPendant.getVal());
                break;
            case Belt:
                bodyPartList.add(BodyPart.Belt.getVal());
                bodyPartList.add(BodyPart.CPBBelt.getVal());
                break;
            case Medal:
                bodyPartList.add(BodyPart.Medal.getVal());
                break;
            case Shoulder:
                bodyPartList.add(BodyPart.Shoulder.getVal());
                bodyPartList.add(BodyPart.CPBShoulder.getVal());
                break;
            case PocketItem:
                bodyPartList.add(BodyPart.PocketItem.getVal());
                break;
            case MonsterBook:
                bodyPartList.add(BodyPart.MonsterBook.getVal());
                break;
            case Badge:
                bodyPartList.add(BodyPart.Badge.getVal());
                break;
            case Emblem:
                bodyPartList.add(BodyPart.Emblem.getVal());
                break;
            case Totem:
                bodyPartList.add(BodyPart.Totem1.getVal());
                bodyPartList.add(BodyPart.Totem2.getVal());
                bodyPartList.add(BodyPart.Totem3.getVal());
                break;
            case MachineEngine:
                bodyPartList.add(BodyPart.MachineEngine.getVal());
                break;
            case MachineArm:
                bodyPartList.add(BodyPart.MachineArm.getVal());
                break;
            case MachineLeg:
                bodyPartList.add(BodyPart.MachineLeg.getVal());
                break;
            case MachineFrame:
                bodyPartList.add(BodyPart.MachineFrame.getVal());
                break;
            case MachineTransistor:
                bodyPartList.add(BodyPart.MachineTransistor.getVal());
                break;
            case Android:
                bodyPartList.add(BodyPart.Android.getVal());
                break;
            case MechanicalHeart:
                bodyPartList.add(BodyPart.MechanicalHeart.getVal());
                break;
            case Bit:
                for (int id = BodyPart.BitsBase.getVal(); id <= BodyPart.BitsEnd.getVal(); id++) {
                    bodyPartList.add(id);
                }
                break;
            case ArcaneSymbol:
                for (int id = 1600; id <= 1605; id++) {
                    bodyPartList.add(id);
                }
                for (int id = 1700; id <= 1705; id++) {
                    bodyPartList.add(id);
                }
                break;
            case PetWear:
                bodyPartList.add(BodyPart.PetWear1.getVal());
                bodyPartList.add(BodyPart.PetWear2.getVal());
                bodyPartList.add(BodyPart.PetWear3.getVal());
                bodyPartList.add(BodyPart.CPetWear1.getVal());
                bodyPartList.add(BodyPart.CPetWear2.getVal());
                bodyPartList.add(BodyPart.CPetWear3.getVal());
                break;
            // case 184: // unknown, equip names are untranslated and google search results in hekaton screenshots
            // case 185:
            // case 186:
            // case 187:
            // case 188:
            // case 189:
            case TamingMob:
                bodyPartList.add(BodyPart.TamingMob.getVal());
                break;
            case Saddle:
                bodyPartList.add(BodyPart.Saddle.getVal());
                break;
            case EvanHat:
                bodyPartList.add(BodyPart.EvanHat.getVal());
                break;
            case EvanPendant:
                bodyPartList.add(BodyPart.EvanPendant.getVal());
                break;
            case EvanWing:
                bodyPartList.add(BodyPart.EvanWing.getVal());
                break;
            case EvanShoes:
                bodyPartList.add(BodyPart.EvanShoes.getVal());
                break;
            default:
                if (ItemConstants.isLongOrBigSword(itemID) || ItemConstants.isWeapon(itemID)) {
                    bodyPartList.add(BodyPart.Weapon.getVal());
                    bodyPartList.add(BodyPart.CPBWeapon.getVal());
                    if (ItemConstants.isFan(itemID)) {
                        bodyPartList.add(BodyPart.HakuFan.getVal());
                    } else {
                        bodyPartList.add(BodyPart.ZeroWeapon.getVal());
                    }
                } else {
                    log.debug("Unknown type? id = " + itemID);
                }
                break;
        }
        return bodyPartList;

    }

    public static boolean isNotSetItemApplyBodyPart(int bodyPartVal) {
        return bodyPartVal == BodyPart.HakuFan.getVal();
    }

    private static int getItemPrefix(int nItemID) {
        return nItemID / 10000;
    }

    public static int getItemIdFromAnvilIdAndOriginId(int itemId, int anvilId) {
        return (getItemPrefix(itemId) * 10000) + anvilId;
    }

    public static boolean isLongOrBigSword(int nItemID) {
        return isLapis(nItemID) || isLazuli(nItemID);
    }

    public static boolean isLapis(int nItemID) {
        return getItemPrefix(nItemID) == EquipPrefix.Lapis.getVal();
    }

    public static boolean isLazuli(int nItemID) {
        return getItemPrefix(nItemID) == EquipPrefix.Lazuli.getVal();
    }

    public static boolean isFan(int nItemID) {
        return getItemPrefix(nItemID) == EquipPrefix.Fan.getVal();
    }

    public static WeaponType getWeaponType(int itemID) {
        if (itemID / 1000000 != 1) {
            return null;
        }
        return WeaponType.getByVal(getItemPrefix(itemID) % 100);
    }

    public static boolean isThrowingItem(int itemID) {
        return isThrowingStar(itemID) || isBullet(itemID) || isBowArrow(itemID);
    }

    public static boolean isThrowingStar(int itemID) {
        return getItemPrefix(itemID) == 207;
    }

    public static boolean isBullet(int itemID) {
        return getItemPrefix(itemID) == 233;
    }

    public static boolean isBowArrow(int itemID) {
        return itemID / 1000 == 2060;
    }

    public static boolean isFamiliar(int itemID) {
        return getItemPrefix(itemID) == 287 || getItemPrefix(itemID) == 288;
    }

    public static boolean isEnhancementScroll(int scrollID) {
        return scrollID / 100 == 20493;
    }

    public static boolean isPotentialScroll(int itemId) {
        return itemId / 100 == 20494 || itemId / 100 == 20497;
    }

    public static boolean isBonusPotentialScroll(int itemId) {
        return itemId >= 2048305 && itemId <= 2048338;
    }

    public static boolean isFusionAnvil(int itemId) {
        return itemId / 100 == 20499;
    }

    public static boolean isPotentialStamp(int itemId) {
        return itemId / 100 == 20495;
    }

    public static boolean isBonusPotentialStamp(int itemId) {
        return itemId >= 2048200 && itemId <= 2048304;
    }

    public static boolean isHat(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.Hat.getVal();
    }

    public static boolean isWeapon(int itemID) {
        return itemID >= 1210000 && itemID < 1600000 || itemID / 10000 == 170;
    }

    public static boolean isSecondary(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.SecondaryWeapon.getVal();
    }

    public static boolean isKatara(int itemId) {
        return getItemPrefix(itemId) == EquipPrefix.Katara.getVal();
    }

    public static boolean isShield(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.Shield.getVal();
    }

    public static boolean isAccessory(int itemID) {
        return (itemID >= 1010000 && itemID < 1040000) || (itemID >= 1122000 && itemID < 1153000) ||
                (itemID >= 1112000 && itemID < 1113000) || (itemID >= 1670000 && itemID < 1680000);
    }

    public static boolean isFaceAccessory(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.FaceAccessory.getVal();
    }

    public static boolean isEyeAccessory(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.EyeAccessory.getVal();
    }

    public static boolean isEarrings(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.Earrings.getVal();
    }

    public static boolean isTop(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.Top.getVal();
    }

    public static boolean isOverall(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.Overall.getVal();
    }

    public static boolean isBottom(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.Bottom.getVal();
    }

    public static boolean isShoe(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.Shoes.getVal();
    }

    public static boolean isGlove(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.Gloves.getVal();
    }

    public static boolean isCape(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.Cape.getVal();
    }

    public static boolean isArmor(int itemID) {
        return !isAccessory(itemID) && !isWeapon(itemID) && !isBadge(itemID) && !isMechanicalHeart(itemID);
    }

    public static boolean isRing(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.Ring.getVal();
    }

    public static boolean isPendant(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.Pendant.getVal();
    }

    public static boolean isBelt(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.Belt.getVal();
    }

    public static boolean isMedal(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.Medal.getVal();
    }

    public static boolean isShoulder(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.Shoulder.getVal();
    }

    public static boolean isPocketItem(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.PocketItem.getVal();
    }

    public static boolean isMonsterBook(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.MonsterBook.getVal();
    }

    public static boolean isBadge(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.Badge.getVal();
    }

    public static boolean isEmblem(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.Emblem.getVal();
    }

    public static boolean isTotem(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.Totem.getVal();
    }

    public static boolean isAndroid(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.Android.getVal();
    }

    public static boolean isMechanicalHeart(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.MechanicalHeart.getVal();
    }

    public static boolean isRebirthFlame(int itemId) {
        return itemId >= 2048700 && itemId < 2048800;
    }

    public static boolean isNebulite(int itemId) {
        return getItemPrefix(itemId) == 306;
    }

    public static boolean isWeaponSlot(int itemId) {
        return isWeapon(itemId) || isSecondary(itemId);
    }

    public static boolean isDecentSkillItemOption(int itemOption) {
        return Arrays.stream(DECENT_SKILL_ITEM_OPTION).anyMatch(io -> io == itemOption);
    }

    public static boolean isDecentSkillSocketOption(int socketOption) {
        return Arrays.stream(DECENT_SKILL_SOCKET_OPTION).anyMatch(so -> so == socketOption);
    }

    public static boolean canEquipTypeHavePotential(int itemid) {
        return isRing(itemid) ||
                isPendant(itemid) ||
                isWeapon(itemid) ||
                isBelt(itemid) ||
                isHat(itemid) ||
                isFaceAccessory(itemid) ||
                isEyeAccessory(itemid) ||
                isOverall(itemid) ||
                isTop(itemid) ||
                isBottom(itemid) ||
                isShoe(itemid) ||
                isEarrings(itemid) ||
                isShoulder(itemid) ||
                isGlove(itemid) ||
                isEmblem(itemid) ||
                isBadge(itemid) ||
                isShield(itemid) ||
                isSecondary(itemid) ||
                isCape(itemid) ||
                isMechanicalHeart(itemid);
    }

    public static boolean canEquipHavePotential(Equip equip) {
        return !equip.isCash() &&
                canEquipTypeHavePotential(equip.getItemId()) &&
                !equip.getInfo().isNoPotential() &&
                (ItemData.getEquipInfoById(equip.getItemId()).getTuc() >= 1 || isTucIgnoreItem(equip.getItemId()));
    }

    public static boolean canEquipHaveFlame(Equip equip) {
        return !equip.isCash() && (isPendant(equip.getItemId()) ||
                (isWeapon(equip.getItemId()) && !isKatara(equip.getItemId()) && !isSecondary(equip.getItemId()) && !isShield(equip.getItemId())) ||
                isBelt(equip.getItemId()) ||
                isHat(equip.getItemId()) ||
                isFaceAccessory(equip.getItemId()) ||
                isEyeAccessory(equip.getItemId()) ||
                isOverall(equip.getItemId()) ||
                isTop(equip.getItemId()) ||
                isBottom(equip.getItemId()) ||
                isShoe(equip.getItemId()) ||
                isEarrings(equip.getItemId()) ||
                Util.makeSet(EXCEPTIONAL_EX_ALLOWED).contains(equip.getItemId()) ||
                isGlove(equip.getItemId()) ||
                isCape(equip.getItemId()) ||
                isPocketItem(equip.getItemId()));
    }

    public static boolean canEquipGoldHammer(Equip equip) {
        var defaultEquip = ItemData.getEquipInfoById(equip.getItemId());
        return !(Util.makeSet(HORNTAIL_NECKLACE).contains(equip.getItemId()) ||
                equip.getIuc() >= defaultEquip.getIucMax() ||
                defaultEquip.getTuc() <= 0); // No upgrade slots by default
    }

    public static boolean isGoldHammer(Item item) {
        return getItemPrefix(item.getItemId()) == 247;
    }

    public static boolean isAssistScroll(int itemId) {
        return isLuckyDayScroll(itemId) || isProtectionScroll(itemId) || isSafetyScroll(itemId);
    }

    public static boolean isLuckyDayScroll(int itemId) {
        return itemId / 1000 == 2530;
    }

    public static boolean isProtectionScroll(int itemId) {
        return itemId / 1000 == 2531;
    }

    public static boolean isSafetyScroll(int itemId) {
        return itemId / 1000 == 2532;
    }

    public static boolean isRecoveryScroll(int itemId) {
        return itemId / 1000 == 2533;
    }

    /**
     * Gets potential tier for a line.
     * Accounts prime lines too.
     *
     * @param line  Potential line.
     * @param grade Our current potential grade.
     */
    public static ItemGrade getLineTier(int line, ItemGrade grade) {
        if (line == 0 || Util.succeedProp(PRIME_LINE_CHANCE)) {
            return grade;
        }
        return ItemGrade.getOneTierLower(grade.getVal());
    }

    /**
     * Determines whether a nebulite can be mounted on an equip.
     *
     * @param equip    Equip item.
     * @param nebulite The nebulite to mount on the equip.
     */
    public static boolean nebuliteFitsEquip(Equip equip, Item nebulite) {
        int nebuliteId = nebulite.getItemId();
        Map<ScrollStat, Integer> vals = ItemData.getItemInfoByID(nebuliteId).getScrollStats();
        if (vals.size() == 0) {
            return true; // no OptionType node -> Fits Everything
        }
        ItemOptionType type = ItemOptionType.getByVal(vals.getOrDefault(ScrollStat.optionType, 0));
        int equipId = equip.getItemId();
        switch (type) {
            case AnyEquip:
                return true;
            case Weapon: // no emblems for nebs here
                return isWeapon(equipId) || isShield(equipId);
            case AnyExceptWeapon:
                return !isWeapon(equipId) && !isShield(equipId);
            case ArmorExceptGlove:
                return isBelt(equipId) || isHat(equipId) || isOverall(equipId) || isTop(equipId) || isBottom(equipId) || isShoe(equipId) || isCape(equipId);
            case Accessory:
                return isRing(equipId) || isPendant(equipId) || isFaceAccessory(equipId) || isEyeAccessory(equipId) || isEarrings(equipId) || isShoulder(equipId);
            case Hat:
                return isHat(equipId);
            case Top:
                return isTop(equipId) || isOverall(equipId);
            case Bottom:
                return isBottom(equipId) || isOverall(equipId);
            case Glove:
                return isGlove(equipId);
            case Shoes:
                return isShoe(equipId);
            default:
                return false;
        }
    }

    public static List<ItemOption> getOptionsByEquip(Equip equip, boolean bonus, ItemGrade grade) {
        int id = equip.getItemId();
        Collection<ItemOption> data = ItemData.getEquipCubeItemOptions();
        var isUniqueOrHigher =
                grade == ItemGrade.HiddenUnique || grade == ItemGrade.Unique ||
                        grade == ItemGrade.HiddenLegendary || grade == ItemGrade.Legendary ||
                        grade == ItemGrade.UniqueBonusHidden || grade == ItemGrade.LegendaryBonusHidden;

        // need a list, as we take a random item from it later on
        List<ItemOption> res = data.stream().filter(
                io -> io.getOptionType() == ItemOptionType.AnyEquip.getVal() &&
                        io.hasMatchingGrade(grade.getVal()) && io.isBonus() == bonus)
                .collect(Collectors.toList());

        if (isShield(id) || isSecondary(id)) {
            res.addAll(data.stream().filter(
                    io -> (io.getOptionType() == ItemOptionType.ArmorExceptGlove.getVal() || io.getOptionType() == ItemOptionType.Weapon.getVal())
                            && io.hasMatchingGrade(grade.getVal())
                            && io.isBonus() == bonus
                            && io.getId() != 42060 //Armor's Crit Damage (Secondary Specific Filter)
            ).collect(Collectors.toSet()));
        } else if (isWeapon(id)) {
            res.addAll(data.stream().filter(
                    io -> io.getOptionType() == ItemOptionType.Weapon.getVal()
                            && io.hasMatchingGrade(grade.getVal())
                            && io.isBonus() == bonus
            ).collect(Collectors.toSet()));
        } else if (isEmblem(id)) {
            res.addAll(data.stream().filter(
                    io -> io.getOptionType() == ItemOptionType.Weapon.getVal()
                            && io.hasMatchingGrade(grade.getVal())
                            && io.isBonus() == bonus
                            && !io.getString().contains("Boss") //(Emblem Specific Filter)
            ).collect(Collectors.toSet()));
        } else {
            res.addAll(data.stream().filter(
                    io -> io.getOptionType() == ItemOptionType.AnyExceptWeapon.getVal()
                            && io.hasMatchingGrade(grade.getVal()) && io.isBonus() == bonus)
                    .collect(Collectors.toSet()));
            if (isRing(id) || isPendant(id) || isFaceAccessory(id) || isEyeAccessory(id) || isEarrings(id)) {
                res.addAll(data.stream().filter(
                        io -> io.getOptionType() == ItemOptionType.Accessory.getVal()
                                && io.hasMatchingGrade(grade.getVal()) && io.isBonus() == bonus)
                        .collect(Collectors.toSet()));
            } else {
                if (isHat(id)) {
                    res.addAll(data.stream().filter(
                            io -> io.getOptionType() == ItemOptionType.Hat.getVal()
                                    && io.hasMatchingGrade(grade.getVal()) && io.isBonus() == bonus)
                            .collect(Collectors.toSet()));
                }
                if (isTop(id) || isOverall(id)) {
                    res.addAll(data.stream().filter(
                            io -> io.getOptionType() == ItemOptionType.Top.getVal()
                                    && io.hasMatchingGrade(grade.getVal())
                                    && io.isBonus() == bonus
                    ).collect(Collectors.toSet()));
                }
                if (isBottom(id)) {
                    res.addAll(data.stream().filter(
                            io -> io.getOptionType() == ItemOptionType.Bottom.getVal()
                                    && io.hasMatchingGrade(grade.getVal())
                                    && io.isBonus() == bonus
                    ).collect(Collectors.toSet()));
                }
                if (isShoe(id)) {
                    res.addAll(data.stream().filter(
                            io -> io.getOptionType() == ItemOptionType.Shoes.getVal()
                                    && io.hasMatchingGrade(grade.getVal())
                                    && io.isBonus() == bonus
                    ).collect(Collectors.toSet()));
                }
                if (isGlove(id)) {
                    res.addAll(data.stream().filter(
                            io -> io.getOptionType() == ItemOptionType.Glove.getVal()
                                    && io.hasMatchingGrade(grade.getVal())
                                    && io.isBonus() == bonus
                                    && !io.getString().contains("Auto Steal")
                    ).collect(Collectors.toSet()));

                    if (isUniqueOrHigher) {
                        res.addAll(data.stream().filter(io ->
                                (io.getOptionType() == ItemOptionType.ArmorExceptGlove.getVal())
                                        && io.hasMatchingGrade(grade.getVal())
                                        && io.isBonus() == bonus
                                        && io.getId() != 42060 //Bonus - Armor's 1% Crit Damage (Glove Specific Filter)
                        ).collect(Collectors.toList()));
                    }
                } else if (isArmor(id) || isShoulder(id) || isBelt(id))
                    // gloves are not counted for this one
                    res.addAll(data.stream().filter(
                            io -> io.getOptionType() == ItemOptionType.ArmorExceptGlove.getVal()
                                    && io.hasMatchingGrade(grade.getVal())
                                    && io.isBonus() == bonus
                    ).collect(Collectors.toSet()));
            }
        }
        return res.stream()
                .filter(io -> io.getReqLevel() <= equip.getReqLevel() + equip.getiIncReq())
                .collect(Collectors.toList());
    }

    public static List<Integer> getWeightedOptionsByEquip(Equip equip, boolean bonus, int line) {
        ItemGrade grade = getLineTier(line, ItemGrade.getGradeByVal(bonus ? equip.getBonusGrade() : equip.getBaseGrade()));
        var cacheKey = new WeightedItemOptionKey(equip.getItemId(), bonus, grade);
        if (weightedItemOptionsCache.containsKey(cacheKey)) {
            return weightedItemOptionsCache.get(cacheKey);
        }

        List<Integer> res = new ArrayList<>();
        List<ItemOption> data = getOptionsByEquip(equip, bonus, grade);
        for (ItemOption io : data) {
            for (int i = 0; i < io.getWeight(); i++) {
                res.add(io.getId());
            }
        }
        weightedItemOptionsCache.put(cacheKey, res);
        return res;
    }

    public static int getRandomOption(Equip equip, boolean bonus, int line) {
        List<Integer> data = getWeightedOptionsByEquip(equip, bonus, line);
        return data.get(Util.getRandom(data.size()));
    }

    public static int getTierUpChance(int id) {
        int res = 0;
        switch (id) {
            case ItemConstants.RED_CUBE: // Red cube
            case ItemConstants.BONUS_POT_CUBE: // Bonus potential cube
                res = 30;
                break;
            case ItemConstants.BLACK_CUBE:
            case ItemConstants.WHITE_BONUS_POT_CUBE:
                res = 40;
                break;
        }
        return res;
    }

    public static boolean isEquip(int id) {
        return id / 1000000 == 1;
    }

    public static boolean isClaw(int id) {
        return getItemPrefix(id) == 147;
    }

    public static boolean isBow(int id) {
        return getItemPrefix(id) == 145;
    }

    public static boolean isXBow(int id) {
        return getItemPrefix(id) == 146;
    }

    public static boolean isGun(int id) {
        return getItemPrefix(id) == 149;
    }

    public static boolean isXBowArrow(int id) {
        return id / 1000 == 2061;
    }

    public static InvType getInvTypeByItemID(int itemID) {
        if (isEquip(itemID)) {
            return EQUIP;
        } else {
            ItemInfo ii = ItemData.getItemInfoByID(itemID);
            if (ii == null) {
                return null;
            }
            return ii.getInvType();
        }
    }

    public static Set<Integer> getRechargeablesList() {
        Set<Integer> itemList = new HashSet<>();
        // all throwing stars
        for (int i = 2070000; i <= 2070016; i++) {
            itemList.add(i);
        }
        itemList.add(2070018);
        itemList.add(2070019);
        itemList.add(2070023);
        itemList.add(2070024);
        itemList.add(2070026);
        // all bullets
        for (int i = 2330000; i <= 2330007; i++) {
            itemList.add(i);
        }
        itemList.add(2330008);
        itemList.add(2330016);
        itemList.add(2331000);
        itemList.add(2332000);
        return itemList;
    }

    public static boolean isRechargable(int itemId) {
        return isThrowingStar(itemId) || isBullet(itemId) /*|| isBowArrow(itemId) || isXBowArrow(itemId)*/;
    }

    public static boolean isMasteryBook(int itemId) {
        return getItemPrefix(itemId) == 229;
    }

    public static boolean isPet(int itemId) {
        return getItemPrefix(itemId) == 500;
    }

    public static boolean isSoulEnchanter(int itemID) {
        return itemID / 1000 == 2590;
    }

    public static boolean isSoul(int itemID) {
        return itemID / 1000 == 2591;
    }

    public static boolean isPotentSoul(int itemId) {
        switch (itemId) {
            case 2591060: // Potent Pink Bean Soul
            case 2591070: // Potent Von Leon Soul
            case 2591080: // Potent Cygnus Soul
            case 2591137: // Potent Von Leon Soul
            case 2591145: // Potent Pink Bean Soul
            case 2591160: // Potent Zakum Soul
            case 2591176: // Potent Zakum Soul
            case 2591184: // Potent Cygnus Soul
            case 2591199: // Potent Arkarium Soul
            case 2591215: // Potent Arkarium Soul
            case 2591230: // Potent Hilla Soul
            case 2591246: // Potent Hilla Soul
            case 2591261: // Potent Magnus Soul
            case 2591277: // Potent Magnus Soul
            case 2591293: // Potent Murgoth Soul
            case 2591302: // Potent Black Knight Soul
            case 2591311: // Potent Mad Mage Soul
            case 2591320: // Potent Rampant Cyborg Soul
            case 2591329: // Potent Vicious Hunter Soul
            case 2591338: // Potent Bad Brawler Soul
            case 2591347: // Potent Black Knight Soul
            case 2591355: // Potent Mad Mage Soul
            case 2591363: // Potent Rampant Cyborg Soul
            case 2591371: // Potent Vicious Hunter Soul
            case 2591379: // Potent Bad Brawler Soul
            case 2591388: // Potent Pierre Soul
            case 2591397: // Potent Von Bon Soul
            case 2591406: // Potent Crimson Queen Soul
            case 2591415: // Potent Vellum Soul
            case 2591424: // Potent Lotus Soul
            case 2591433: // Potent Pierre Soul
            case 2591441: // Potent Von Bon Soul
            case 2591449: // Potent Crimson Queen Soul
            case 2591457: // Potent Vellum Soul
            case 2591465: // Potent Lotus Soul
            case 2591473: // Potent Gold Dragon Soul
            case 2591481: // Potent Red Tiger Soul
            case 2591514: // Potent Ursus Soul
            case 2591523: // Potent Ursus Soul
            case 2591549: // Potent Tutu Soul
            case 2591558: // Potent Nene Soul
            case 2591569: // Potent Damien Soul
            case 2591578: // Potent Damien Soul
            case 2591587: // Potent Lucid Soul
            case 2591596: // Potent Lucid Soul
            case 2591607: // Potent Elunite Elemental Soul
            case 2591637: // Potent Will Soul
            case 2591646: // Potent Will Soul
            case 2591656: // Potent Verus Hilla Soul
            case 2591665: // Potent Verus Hilla Soul
            case 2591673: // Potent Darknell Soul
            case 2591682: // Potent Darknell Soul
                return true;
        }
        return false;
    }

    public static boolean isCleverSoul(int itemId) {
        switch (itemId) {
            case 2591012: // Clever Spirit of Rock Soul
            case 2591019: // Clever Prison Guard Ani Soul
            case 2591026: // Clever Dragon Rider Soul
            case 2591033: // Clever Rex Soul
            case 2591040: // Clever Mu Gong Soul
            case 2591047: // Clever Balrog Soul
            case 2591057: // Clever Pink Bean Soul
            case 2591067: // Clever Von Leon Soul
            case 2591077: // Clever Cygnus Soul
            case 2591091: // Clever Spirit of Rock Soul
            case 2591098: // Clever Prison Guard Ani Soul
            case 2591105: // Clever Dragon Rider Soul
            case 2591112: // Clever Rex Soul
            case 2591119: // Clever Mu Gong Soul
            case 2591126: // Clever Balrog Soul
            case 2591134: // Clever Von Leon Soul
            case 2591142: // Clever Pink Bean Soul
            case 2591150: // Clever Xerxes Soul
            case 2591157: // Clever Zakum Soul
            case 2591166: // Clever Xerxes Soul
            case 2591173: // Clever Zakum Soul
            case 2591181: // Clever Cygnus Soul
            case 2591189: // Clever Ephenia Soul
            case 2591196: // Clever Arkarium Soul
            case 2591205: // Clever Ephenia Soul
            case 2591212: // Clever Arkarium Soul
            case 2591220: // Clever Pianus Soul
            case 2591227: // Clever Hilla Soul
            case 2591236: // Clever Pianus Soul
            case 2591243: // Clever Hilla Soul
            case 2591251: // Clever Black Slime Soul
            case 2591258: // Clever Magnus Soul
            case 2591267: // Clever Black Slime Soul
            case 2591274: // Clever Magnus Soul
            case 2591290: // Clever Murgoth Soul
            case 2591299: // Clever Black Knight Soul
            case 2591308: // Clever Mad Mage Soul
            case 2591317: // Clever Rampant Cyborg Soul
            case 2591326: // Clever Vicious Hunter Soul
            case 2591335: // Clever Bad Brawler Soul
            case 2591344: // Clever Black Knight Soul
            case 2591352: // Clever Mad Mage Soul
            case 2591360: // Clever Rampant Cyborg Soul
            case 2591368: // Clever Vicious Hunter Soul
            case 2591376: // Clever Bad Brawler Soul
            case 2591385: // Clever Pierre Soul
            case 2591394: // Clever Von Bon Soul
            case 2591403: // Clever Crimson Queen Soul
            case 2591412: // Clever Vellum Soul
            case 2591421: // Clever Lotus Soul
            case 2591430: // Clever Pierre Soul
            case 2591438: // Clever Von Bon Soul
            case 2591454: // Clever Vellum Soul
            case 2591462: // Clever Lotus Soul
            case 2591470: // Clever Gold Dragon Soul
            case 2591478: // Clever Red Tiger Soul
            case 2591511: // Clever Ursus Soul
            case 2591520: // Clever Ursus Soul
            case 2591530: // Clever Pink Mong Soul
            case 2591546: // Clever Tutu Soul
            case 2591555: // Clever Nene Soul
            case 2591566: // Clever Damien Soul
            case 2591575: // Clever Damien Soul
            case 2591584: // Clever Lucid Soul
            case 2591593: // Clever Lucid Soul
            case 2591604: // Clever Elunite Elemental Soul
            case 2591613: // Clever Papulatus Soul
            case 2591622: // Clever Papulatus Soul
            case 2591634: // Clever Will Soul
            case 2591643: // Clever Will Soul
            case 2591653: // Clever Verus Hilla Soul
            case 2591662: // Clever Verus Hilla Soul
            case 2591670: // Clever Darknell Soul
            case 2591679: // Clever Darknell Soul
                return true;
        }
        return false;
    }

    public static boolean isBeefySoul(int itemId) {
        switch (itemId) {
            case 2591010: // Beefy Spirit of Rock Soul
            case 2591017: // Beefy Prison Guard Ani Soul
            case 2591024: // Beefy Dragon Rider Soul
            case 2591031: // Beefy Rex Soul
            case 2591038: // Beefy Mu Gong Soul
            case 2591045: // Beefy Balrog Soul
            case 2591055: // Beefy Pink Bean Soul
            case 2591065: // Beefy Von Leon Soul
            case 2591075: // Beefy Cygnus Soul
            case 2591089: // Beefy Spirit of Rock Soul
            case 2591096: // Beefy Prison Guard Ani Soul
            case 2591103: // Beefy Dragon Rider Soul
            case 2591110: // Beefy Rex Soul
            case 2591117: // Beefy Mu Gong Soul
            case 2591124: // Beefy Balrog Soul
            case 2591132: // Beefy Von Leon Soul
            case 2591140: // Beefy Pink Bean Soul
            case 2591148: // Beefy Xerxes Soul
            case 2591155: // Beefy Zakum Soul
            case 2591164: // Beefy Xerxes Soul
            case 2591171: // Beefy Zakum Soul
            case 2591179: // Beefy Cygnus Soul
            case 2591187: // Beefy Ephenia Soul
            case 2591194: // Beefy Arkarium Soul
            case 2591203: // Beefy Ephenia Soul
            case 2591210: // Beefy Arkarium Soul
            case 2591218: // Beefy Pianus Soul
            case 2591225: // Beefy Hilla Soul
            case 2591234: // Beefy Pianus Soul
            case 2591241: // Beefy Hilla Soul
            case 2591249: // Beefy Black Slime Soul
            case 2591256: // Beefy Magnus Soul
            case 2591265: // Beefy Black Slime Soul
            case 2591272: // Beefy Magnus Soul
            case 2591288: // Beefy Murgoth Soul
            case 2591297: // Beefy Black Knight Soul
            case 2591306: // Beefy Mad Mage Soul
            case 2591315: // Beefy Rampant Cyborg Soul
            case 2591324: // Beefy Vicious Hunter Soul
            case 2591333: // Beefy Bad Brawler Soul
            case 2591342: // Beefy Black Knight Soul
            case 2591350: // Beefy Mad Mage Soul
            case 2591358: // Beefy Rampant Cyborg Soul
            case 2591366: // Beefy Vicious Hunter Soul
            case 2591374: // Beefy Bad Brawler Soul
            case 2591383: // Beefy Pierre Soul
            case 2591392: // Beefy Von Bon Soul
            case 2591401: // Beefy Crimson Queen Soul
            case 2591410: // Beefy Vellum Soul
            case 2591419: // Beefy Lotus Soul
            case 2591428: // Beefy Pierre Soul
            case 2591436: // Beefy Von Bon Soul
            case 2591444: // Beefy Crimson Queen Soul
            case 2591452: // Beefy Vellum Soul
            case 2591460: // Beefy Lotus Soul
            case 2591468: // Beefy Gold Dragon Soul
            case 2591476: // Beefy Red Tiger Soul
            case 2591509: // Beefy Ursus Soul
            case 2591518: // Beefy Ursus Soul
            case 2591528: // Beefy Pink Mong Soul
            case 2591544: // Beefy Tutu Soul
            case 2591553: // Beefy Nene Soul
            case 2591564: // Beefy Damien Soul
            case 2591573: // Beefy Damien Soul
            case 2591582: // Beefy Lucid Soul
            case 2591591: // Beefy Lucid Soul
            case 2591602: // Beefy Elunite Elemental Soul
            case 2591611: // Beefy Papulatus Soul
            case 2591620: // Beefy Papulatus Soul
            case 2591632: // Beefy Will Soul
            case 2591641: // Beefy Will Soul
            case 2591651: // Beefy Verus Hilla Soul
            case 2591660: // Beefy Verus Hilla Soul
            case 2591668: // Beefy Darknell Soul
            case 2591677: // Beefy Darknell Soul
                return true;
        }
        return false;
    }

    public static boolean isRadiantSoul(int itemId) {
        switch (itemId) {
            case 2591051: // Radiant Balrog Soul
            case 2591061: // Radiant Pink Bean Soul
            case 2591071: // Radiant Von Leon Soul
            case 2591081: // Radiant Cygnus Soul
            case 2591130: // Radiant Balrog Soul
            case 2591138: // Radiant Von Leon Soul
            case 2591146: // Radiant Pink Bean Soul
            case 2591161: // Radiant Zakum Soul
            case 2591177: // Radiant Zakum Soul
            case 2591185: // Radiant Cygnus Soul
            case 2591200: // Radiant Arkarium Soul
            case 2591216: // Radiant Arkarium Soul
            case 2591231: // Radiant Hilla Soul
            case 2591247: // Radiant Hilla Soul
            case 2591262: // Radiant Magnus Soul
            case 2591278: // Radiant Magnus Soul
            case 2591294: // Radiant Murgoth Soul
            case 2591303: // Radiant Black Knight Soul
            case 2591312: // Radiant Mad Mage Soul
            case 2591321: // Radiant Rampant Cyborg Soul
            case 2591330: // Radiant Vicious Hunter Soul
            case 2591339: // Radiant Bad Brawler Soul
            case 2591348: // Radiant Black Knight Soul
            case 2591356: // Radiant Mad Mage Soul
            case 2591364: // Radiant Rampant Cyborg Soul
            case 2591372: // Radiant Vicious Hunter Soul
            case 2591380: // Radiant Bad Brawler Soul
            case 2591389: // Radiant Pierre Soul
            case 2591398: // Radiant Von Bon Soul
            case 2591407: // Radiant Crimson Queen Soul
            case 2591416: // Radiant Vellum Soul
            case 2591425: // Radiant Lotus Soul
            case 2591434: // Radiant Pierre Soul
            case 2591442: // Radiant Von Bon Soul
            case 2591450: // Radiant Crimson Queen Soul
            case 2591458: // Radiant Vellum Soul
            case 2591466: // Radiant Lotus Soul
            case 2591474: // Radiant Gold Dragon Soul
            case 2591482: // Radiant Red Tiger Soul
            case 2591515: // Radiant Ursus Soul
            case 2591524: // Radiant Ursus Soul
            case 2591550: // Radiant Tutu Soul
            case 2591559: // Radiant Nene Soul
            case 2591570: // Radiant Damien Soul
            case 2591579: // Radiant Damien Soul
            case 2591588: // Radiant Lucid Soul
            case 2591597: // Radiant Lucid Soul
            case 2591608: // Radiant Elunite Elemental Soul
            case 2591617: // Radiant Papulatus Soul
            case 2591626: // Radiant Papulatus Soul
            case 2591638: // Radiant Will Soul
            case 2591647: // Radiant Will Soul
            case 2591657: // Radiant Verus Hilla Soul
            case 2591666: // Radiant Verus Hilla Soul
            case 2591674: // Radiant Darknell Soul
            case 2591683: // Radiant Darknell Soul
                return true;
        }
        return false;
    }

    public static boolean isFortuitousSoul(int itemId) {
        switch (itemId) {
            case 2591013: // Fortuitous Spirit of Rock Soul
            case 2591020: // Fortuitous Prison Guard Ani's Soul
            case 2591027: // Fortuitous Dragon Rider Soul
            case 2591034: // Fortuitous Rex Soul
            case 2591041: // Fortuitous Mu Gong Soul
            case 2591048: // Fortuitous  Balrog Soul
            case 2591058: // Fortuitous Pink Bean Soul
            case 2591068: // Fortuitous  Von Leon Soul
            case 2591078: // Fortuitous Cygnus Soul
            case 2591092: // Fortuitous Spirit of Rock Soul
            case 2591099: // Fortuitous  Prison Guard Ani Soul
            case 2591106: // Fortuitous Dragon Rider's Soul
            case 2591113: // Fortuitous  Rex Soul
            case 2591120: // Fortuitous Mu Gong Soul
            case 2591127: // Fortuitous Balrog Soul
            case 2591135: // Fortuitous Von Leon Soul
            case 2591143: // Fortuitous Pink Bean Soul
            case 2591151: // Fortuitous Xerxes Soul
            case 2591158: // Fortuitous Zakum Soul
            case 2591167: // Fortuitous Xerxes Soul
            case 2591174: // Fortuitous Zakum Soul
            case 2591182: // Fortuitous Cygnus Soul
            case 2591190: // Fortuitous Ephenia Soul
            case 2591197: // Fortuitous Arkarium Soul
            case 2591206: // Fortuitous Ephenia Soul
            case 2591213: // Fortuitous Arkarium Soul
            case 2591221: // Fortuitous Pianus Soul
            case 2591228: // Fortuitous Hilla Soul
            case 2591237: // Fortuitous Pianus Soul
            case 2591244: // Fortuitous Hilla Soul
            case 2591252: // FortuitousBlack Slime Soul
            case 2591259: // Fortuitous Magnus Soul
            case 2591268: // Fortuitous Black Slime Soul
            case 2591275: // Fortuitous Magnus Soul
            case 2591291: // Fortuitous Murgoth Soul
            case 2591300: // Fortuitous Black Knight Soul
            case 2591309: // Fortuitous Mad Mage Soul
            case 2591318: // Fortuitous Rampant Cyborg Soul
            case 2591327: // Fortuitous Vicious Hunter Soul
            case 2591336: // Fortuitous Bad Brawler Soul
            case 2591345: // Fortuitous Black Knight Soul
            case 2591353: // Fortuitous Mad Mage Soul
            case 2591361: // Fortuitous Rampant Cyborg Soul
            case 2591369: // Fortuitous Vicious Hunter Soul
            case 2591377: // Fortuitous Bad Brawler Soul
            case 2591386: // Fortuitous Pierre Soul
            case 2591395: // Fortuitous Von Bon Soul
            case 2591404: // Fortuitous Crimson Queen Soul
            case 2591413: // Fortuitous Vellum Soul
            case 2591422: // Fortuitous  Lotus Soul
            case 2591431: // Fortuitous Pierre Soul
            case 2591439: // Fortuitous Von Bon Soul
            case 2591447: // Fortuitous Crimson Queen Soul
            case 2591455: // Fortuitous Vellum Soul
            case 2591463: // Fortuitous  Lotus Soul
            case 2591471: // Fortuitous Gold Dragon Soul
            case 2591479: // Fortuitous Red Tiger Soul
            case 2591512: // Fortuitous Ursus Soul
            case 2591521: // Fortuitous Ursus Soul
            case 2591531: // Fortuitous Pink Mong Soul
            case 2591547: // Fortuitous Tutu Soul
            case 2591556: // Fortuitous Nene Soul
            case 2591567: // Fortuitous Damien Soul
            case 2591576: // Fortuitous Damien Soul
            case 2591585: // Fortuitous Lucid Soul
            case 2591594: // Fortuitous Lucid Soul
            case 2591605: // Fortuitous Elunite Elemental Soul
            case 2591614: // Fortuitous Papulatus Soul
            case 2591623: // Fortuitous Papulatus Soul
            case 2591635: // Fortuitous Will Soul
            case 2591644: // Fortuitous Will Soul
            case 2591654: // Fortuitous Verus Hilla Soul
            case 2591663: // Fortuitous Verus Hilla Soul
            case 2591671: // Fortuitous Darknell Soul
            case 2591680: // Fortuitous Darknell Soul
                return true;
        }
        return false;
    }

    public static boolean isHeartySoul(int itemId) {
        switch (itemId) {
            case 2591014: // Hearty Spirit of Rock Soul
            case 2591021: // Hearty Prison Guard Ani Soul
            case 2591028: // Hearty Dragon Rider Soul
            case 2591035: // Hearty Rex Soul
            case 2591042: // Hearty Mu Gong Soul
            case 2591052: // Hearty Balrog Soul
            case 2591062: // Hearty Pink Bean Soul
            case 2591072: // Hearty Von Leon Soul
            case 2591082: // Hearty Cygnus Soul
            case 2591093: // Hearty Spirit of Rock Soul
            case 2591100: // Hearty Prison Guard Ani Soul
            case 2591107: // Hearty Dragon Rider Soul
            case 2591114: // Hearty Rex Soul
            case 2591121: // Hearty Mu Gong Soul
            case 2591131: // Hearty Balrog Soul
            case 2591139: // Hearty Von Leon Soul
            case 2591147: // Hearty Pink Bean Soul
            case 2591152: // Hearty Xerxes Soul
            case 2591162: // Hearty Zakum Soul
            case 2591168: // Hearty Xerxes Soul
            case 2591178: // Hearty Zakum Soul
            case 2591186: // Hearty Cygnus Soul
            case 2591191: // Hearty Ephenia Soul
            case 2591201: // Hearty Arkarium Soul
            case 2591207: // Hearty Ephenia Soul
            case 2591217: // Hearty Arkarium Soul
            case 2591222: // Hearty Pianus Soul
            case 2591232: // Hearty Hilla Soul
            case 2591238: // Hearty Pianus Soul
            case 2591248: // Hearty Hilla Soul
            case 2591253: // Hearty Black Slime Soul
            case 2591263: // Hearty Magnus Soul
            case 2591269: // Hearty Black Slime Soul
            case 2591279: // Hearty Magnus Soul
            case 2591295: // Hearty Murgoth Soul
            case 2591304: // Hearty Black Knight Soul
            case 2591313: // Hearty Mad Mage Soul
            case 2591322: // Hearty Rampant Cyborg Soul
            case 2591331: // Hearty Vicious Hunter Soul
            case 2591340: // Hearty Bad Brawler Soul
            case 2591349: // Hearty Black Knight Soul
            case 2591357: // Hearty Mad Mage Soul
            case 2591365: // Hearty Rampant Cyborg Soul
            case 2591373: // Hearty Vicious Hunter Soul
            case 2591381: // Hearty Bad Brawler Soul
            case 2591390: // Hearty Pierre Soul
            case 2591399: // Hearty Von Bon Soul
            case 2591408: // Hearty Crimson Queen Soul
            case 2591417: // Hearty Vellum Soul
            case 2591426: // Hearty Lotus Soul
            case 2591435: // Hearty Pierre Soul
            case 2591443: // Hearty Von Bon Soul
            case 2591451: // Hearty Crimson Queen Soul
            case 2591459: // Hearty Vellum Soul
            case 2591467: // Hearty Lotus Soul
            case 2591475: // Hearty Gold Dragon Soul
            case 2591483: // Hearty Red Tiger Soul
            case 2591516: // Hearty Ursus Soul
            case 2591525: // Hearty Ursus Soul
            case 2591532: // Hearty Pink Mong Soul
            case 2591551: // Hearty Tutu Soul
            case 2591560: // Hearty Nene Soul
            case 2591571: // Hearty Damien Soul
            case 2591580: // Hearty Damien Soul
            case 2591589: // Hearty Lucid Soul
            case 2591598: // Hearty Lucid Soul
            case 2591609: // Hearty Elunite Elemental Soul
            case 2591618: // Hearty Papulatus Soul
            case 2591627: // Hearty Papulatus Soul
            case 2591639: // Hearty Will Soul
            case 2591648: // Hearty Will Soul
            case 2591658: // Hearty Verus Hilla Soul
            case 2591667: // Hearty Verus Hilla Soul
            case 2591675: // Hearty Darknell Soul
            case 2591684: // Hearty Darknell Soul
                return true;
        }
        return false;
    }

    public static boolean isSwiftSoul(int itemId) {
        switch (itemId) {
            case 2591011: // Swift Spirit of Rock Soul
            case 2591018: // Swift Prison Guard Ani Soul
            case 2591025: // Swift Dragon Rider Soul
            case 2591032: // Swift Rex Soul
            case 2591039: // Swift Mu Gong Soul
            case 2591046: // Swift Balrog Soul
            case 2591056: // Swift Pink Bean Soul
            case 2591066: // Swift Von Leon Soul
            case 2591076: // Swift Cygnus Soul
            case 2591090: // Swift Spirit of Rock Soul
            case 2591097: // Swift Prison Guard Ani Soul
            case 2591104: // Swift Dragon Rider Soul
            case 2591111: // Swift Rex Soul
            case 2591118: // Swift Mu Gong Soul
            case 2591125: // Swift Balrog Soul
            case 2591133: // Swift Von Leon Soul
            case 2591141: // Swift Pink Bean Soul
            case 2591149: // Swift Xerxes Soul
            case 2591156: // Swift Zakum Soul
            case 2591165: // Swift Xerxes Soul
            case 2591172: // Swift Zakum Soul
            case 2591180: // Swift Cygnus Soul
            case 2591188: // Swift Ephenia Soul
            case 2591195: // Swift Arkarium Soul
            case 2591204: // Swift Ephenia Soul
            case 2591211: // Swift Arkarium Soul
            case 2591219: // Swift Pianus Soul
            case 2591226: // Swift Hilla Soul
            case 2591235: // Swift Pianus Soul
            case 2591242: // Swift Hilla Soul
            case 2591250: // Swift Black Slime Soul
            case 2591257: // Swift Magnus Soul
            case 2591266: // Swift Black Slime Soul
            case 2591273: // Swift Magnus Soul
            case 2591289: // Swift Murgoth Soul
            case 2591298: // Swift Black Knight Soul
            case 2591307: // Swift Mad Mage Soul
            case 2591316: // Swift Rampant Cyborg Soul
            case 2591325: // Swift Vicious Hunter Soul
            case 2591334: // Swift Bad Brawler Soul
            case 2591343: // Swift Black Knight Soul
            case 2591351: // Swift Mad Mage Soul
            case 2591359: // Swift Rampant Cyborg Soul
            case 2591367: // Swift Vicious Hunter Soul
            case 2591375: // Swift Bad Brawler Soul
            case 2591384: // Swift Pierre Soul
            case 2591393: // Swift Von Bon Soul
            case 2591402: // Swift Crimson Queen Soul
            case 2591411: // Swift Vellum Soul
            case 2591420: // Swift Lotus Soul
            case 2591429: // Swift Pierre Soul
            case 2591437: // Swift Von Bon Soul
            case 2591445: // Swift Crimson Queen Soul
            case 2591446: // Swift Crimson Queen Soul
            case 2591453: // Swift Vellum Soul
            case 2591461: // Swift Lotus Soul
            case 2591469: // Swift Gold Dragon Soul
            case 2591477: // Swift Red Tiger Soul
            case 2591510: // Swift Ursus Soul
            case 2591519: // Swift Ursus Soul
            case 2591529: // Swift Pink Mong Soul
            case 2591545: // Swift Tutu Soul
            case 2591554: // Swift Nene Soul
            case 2591565: // Swift Damien Soul
            case 2591574: // Swift Damien Soul
            case 2591583: // Swift Lucid Soul
            case 2591592: // Swift Lucid Soul
            case 2591603: // Swift Elunite Elemental Soul
            case 2591612: // Swift Papulatus Soul
            case 2591621: // Swift Papulatus Soul
            case 2591633: // Swift Will Soul
            case 2591642: // Swift Will Soul
            case 2591652: // Swift Verus Hilla Soul
            case 2591661: // Swift Verus Hilla Soul
            case 2591669: // Swift Darknell Soul
            case 2591678: // Swift Darknell Soul
                return true;
        }
        return false;
    }

    public static boolean isFlashySoul(int itemId) {
        switch (itemId) {
            case 2591016: // Flashy Spirit of Rock Soul
            case 2591023: // Flashy Prison Guard Ani Soul
            case 2591030: // Flashy Dragon Rider Soul
            case 2591037: // Flashy Rex Soul
            case 2591044: // Flashy Mu Gong Soul
            case 2591049: // Flashy Balrog Soul
            case 2591059: // Flashy Pink Bean Soul
            case 2591069: // Flashy Von Leon Soul
            case 2591079: // Flashy Cygnus Soul
            case 2591095: // Flashy Spirit of Rock Soul
            case 2591102: // Flashy Prison Guard Ani Soul
            case 2591109: // Flashy Dragon Rider Soul
            case 2591116: // Flashy Rex Soul
            case 2591123: // Flashy Mu Gong Soul
            case 2591128: // Flashy Balrog Soul
            case 2591136: // Flashy Von Leon Soul
            case 2591144: // Flashy Pink Bean Soul
            case 2591154: // Flashy Xerxes Soul
            case 2591159: // Flashy Zakum Soul
            case 2591170: // Flashy Xerxes Soul
            case 2591175: // Flashy Zakum Soul
            case 2591183: // Flashy Cygnus Soul
            case 2591193: // Flashy Ephenia Soul
            case 2591198: // Flashy Arkarium Soul
            case 2591209: // Flashy Ephenia Soul
            case 2591214: // Flashy Arkarium Soul
            case 2591224: // Flashy Pianus Soul
            case 2591229: // Flashy Hilla Soul
            case 2591240: // Flashy Pianus Soul
            case 2591245: // Flashy Hilla Soul
            case 2591255: // Flashy Black Slime Soul
            case 2591260: // Flashy Magnus Soul
            case 2591271: // Flashy Black Slime Soul
            case 2591276: // Flashy Magnus Soul
            case 2591292: // Flashy Murgoth Soul
            case 2591301: // Flashy Black Knight Soul
            case 2591310: // Flashy Mad Mage Soul
            case 2591319: // Flashy Rampant Cyborg Soul
            case 2591328: // Flashy Vicious Hunter Soul
            case 2591337: // Flashy Bad Brawler Soul
            case 2591346: // Flashy Black Knight Soul
            case 2591354: // Flashy Mad Mage Soul
            case 2591362: // Flashy Rampant Cyborg Soul
            case 2591370: // Flashy Vicious Hunter Soul
            case 2591378: // Flashy Bad Brawler Soul
            case 2591387: // Flashy Pierre Soul
            case 2591396: // Flashy Von Bon Soul
            case 2591405: // Flashy Crimson Queen Soul
            case 2591414: // Flashy Vellum Soul
            case 2591423: // Flashy Lotus Soul
            case 2591432: // Flashy Pierre Soul
            case 2591440: // Flashy Von Bon Soul
            case 2591448: // Flashy Crimson Queen Soul
            case 2591456: // Flashy Vellum Soul
            case 2591464: // Flashy Lotus Soul
            case 2591472: // Flashy Gold Dragon Soul
            case 2591480: // Flashy Red Tiger Soul
            case 2591513: // Flashy Ursus Soul
            case 2591522: // Flashy Ursus Soul
            case 2591534: // Flashy Pink Mong Soul
            case 2591548: // Flashy Tutu Soul
            case 2591557: // Flashy Nenne Soul
            case 2591568: // Flashy Damien Soul
            case 2591577: // Flashy Damien Soul
            case 2591586: // Flashy Lucid Soul
            case 2591595: // Flashy Lucid Soul
            case 2591606: // Flashy Elunite Elemental Soul
            case 2591615: // Flashy Papulatus Soul
            case 2591624: // Flashy Papulatus Soul
            case 2591636: // Flashy Will Soul
            case 2591645: // Flashy Will Soul
            case 2591655: // Flashy Verus Hilla Soul
            case 2591664: // Flashy Verus Hilla Soul
            case 2591672: // Flashy Darknell Soul
            case 2591681: // Flashy Darknell Soul
            case 2591692: // Flashy Gigatoad Soul
                return true;
        }
        return false;
    }

    public static boolean isMagnificent(int itemId) {
        switch (itemId) {
            case 2591085: // Magnificent Balrog Soul
            case 2591086: // Magnificent Von Leon Soul
            case 2591087: // Magnificent Pink Bean Soul
            case 2591088: // Magnificent Cygnus Soul
            case 2591163: // Magnificent Zakum Soul
            case 2591202: // Magnificent Arkarium Soul
            case 2591233: // Magnificent Hilla Soul
            case 2591264: // Magnificent Magnus Soul
            case 2591296: // Magnificent Murgoth Soul
            case 2591305: // Magnificent Black Knight Soul
            case 2591314: // Magnificent Mad Mage Soul
            case 2591323: // Magnificent Rampant Cyborg Soul
            case 2591332: // Magnificent Vicious Hunter Soul
            case 2591341: // Magnificent Bad Brawler Soul
            case 2591391: // Magnificent Pierre Soul
            case 2591400: // Magnificent Von Bon Soul
            case 2591409: // Magnificent Crimson Queen Soul
            case 2591418: // Magnificent Vellum Soul
            case 2591427: // Magnificent Lotus Soul
            case 2591484: // Magnificent Gold Dragon Soul
            case 2591485: // Magnificent Red Tiger Soul
            case 2591486: // Magnificent Pink Bean Soul
            case 2591517: // Magnificent Ursus Soul
            case 2591552: // Magnificent Tutu Soul
            case 2591561: // Magnificent Nenne Soul
            case 2591572: // Magnificent Damien Soul
            case 2591581: // Magnificent Damien Soul
            case 2591590: // Magnificent Lucid Soul
            case 2591610: // Magnificent Elunite Elemental Soul
            case 2591619: // Magnificent Papulatus Soul
            case 2591640: // Magnificent Will Soul
            case 2591659: // Magnificent Verus Hilla Soul
            case 2591676: // Magnificent Darknell Soul
            case 2591696: // Magnificent Gigatoad Soul
            case 2591697: // Magnificent Darknell Soul
            case 2591698: // Magnificent Verus Hilla Soul
                return true;
        }
        return false;
    }

    public static boolean isAmpleSoul(int itemId) {
        switch (itemId) {
            case 2591015: // Ample Spirit of Rock Soul
            case 2591022: // Ample Prison Guard Ani Soul
            case 2591029: // Ample Dragon Rider Soul
            case 2591036: // Ample Rex Soul
            case 2591043: // Ample Mu Gong Soul
            case 2591094: // Ample Spirit of Rock Soul
            case 2591101: // Ample Prison Guard Ani Soul
            case 2591108: // Ample Dragon Rider Soul
            case 2591115: // Ample Rex Soul
            case 2591122: // Ample Mu Gong Soul
            case 2591153: // Ample Xerxes Soul
            case 2591169: // Ample Xerxes Soul
            case 2591192: // Ample Ephenia Soul
            case 2591208: // Ample Ephenia Soul
            case 2591223: // Ample Pianus Soul
            case 2591239: // Ample Pianus Soul
            case 2591254: // Ample Black Slime Soul
            case 2591270: // Ample Black Slime Soul
            case 2591533: // Ample Pink Mong Soul
                return true;
        }
        return false;
    }

    public static BossSoulCollectionFlag getBossSoulCollectionFlagByItemId(BossSoulType type, int itemId) {
        if (isBeefySoul(itemId)) {
            return type.hasMagnificent() ? BossSoulCollectionFlag.Magnificent_Beefy : BossSoulCollectionFlag.Beefy;
        }
        if (isSwiftSoul(itemId)) {
            return type.hasMagnificent() ? BossSoulCollectionFlag.Magnificent_Swift : BossSoulCollectionFlag.Swift;
        }
        if (isCleverSoul(itemId)) {
            return type.hasMagnificent() ? BossSoulCollectionFlag.Magnificent_Clever : BossSoulCollectionFlag.Clever;
        }
        if (isFortuitousSoul(itemId)) {
            return type.hasMagnificent() ? BossSoulCollectionFlag.Magnificent_Fortuitous : BossSoulCollectionFlag.Fortuitous;
        }
        if (isFlashySoul(itemId)) {
            return type.hasMagnificent() ? BossSoulCollectionFlag.Magnificent_Flashy : BossSoulCollectionFlag.Flashy;
        }
        if (isPotentSoul(itemId)) {
            return type.hasMagnificent() ? BossSoulCollectionFlag.Magnificent_Potent : null;
        }
        if (isRadiantSoul(itemId)) {
            return type.hasMagnificent() ? BossSoulCollectionFlag.Magnificent_Radiant : null;
        }
        if (isHeartySoul(itemId)) {
            return type.hasMagnificent() ? BossSoulCollectionFlag.Magnificent_Hearty : BossSoulCollectionFlag.Hearty;
        }
        if (isAmpleSoul(itemId)) {
            return type.hasMagnificent() ? null : BossSoulCollectionFlag.Ample;
        }
        if (isMagnificent(itemId)) {
            return type.hasMagnificent() ? BossSoulCollectionFlag.Magnificent_Magnificent : null;
        }

        return null;
    }

    public static short getSoulOptionFromSoul(int itemId) {
        if (isPotentSoul(itemId)) {
            return 32011;
        }
        if (isCleverSoul(itemId)) {
            return 32003;
        }
        if (isBeefySoul(itemId)) {
            return 32001;
        }
        if (isRadiantSoul(itemId)) {
            return 32012;
        }
        if (isFortuitousSoul(itemId)) {
            return 32004;
        }
        if (isFlashySoul(itemId)) {
            return 0;
        }
        if (isHeartySoul(itemId)) {
            return 32005;
        }
        if (isSwiftSoul(itemId)) {
            return 32002;
        }

        return 0;
    }

    public static int getRandomSoulOption() {
        return Util.getRandomFromCollection(soulPotList);
    }

    public static boolean isMobCard(int itemID) {
        return getItemPrefix(itemID) == 238;
    }

    public static boolean isCollisionLootItem(int itemID) {
        switch (itemID) {
            case GameConstants.BLUE_EXP_ORB_ID: // Blue
            case GameConstants.PURPLE_EXP_ORB_ID: // Purple
            case GameConstants.RED_EXP_ORB_ID: // Red
            case GameConstants.GOLD_EXP_ORB_ID: // Gold
                return true;

            default:
                return false;
        }
    }

    public static boolean isExpOrb(int itemId) {
        return itemId == GameConstants.BLUE_EXP_ORB_ID // Blue
                || itemId == GameConstants.PURPLE_EXP_ORB_ID // Purple
                || itemId == GameConstants.RED_EXP_ORB_ID // Red
                || itemId == GameConstants.GOLD_EXP_ORB_ID // Gold

                || itemId == GameConstants.ELITE_CHAMPION_ORB;
    }

    public static boolean isUpgradable(int itemID) {
        BodyPart bodyPart = BodyPart.getByVal(getBodyPartFromItem(itemID, 2));
        if (bodyPart == null || getItemPrefix(itemID) == EquipPrefix.SecondaryWeapon.getVal()) {
            return false;
        }
        switch (bodyPart) {
            case Ring1:
            case Ring2:
            case Ring3:
            case Ring4:
            case Pendant:
            case ExtendedPendant:
            case Weapon:
            case Belt:
            case Hat:
            case FaceAccessory:
            case EyeAccessory:
            case Top:
            case Bottom:
            case Shoes:
            case Earrings:
            case Shoulder:
            case Gloves:
            case Badge:
            case Shield:
            case Cape:
            case MechanicalHeart:
                return true;
            default:
                return false;
        }
    }

    public static List<ScrollUpgradeInfo> getScrollUpgradeInfosByEquip(Equip equip) {
        // not the most beautiful way to do this, but I'd like to think that it's pretty easy to understand
        var tuc = equip.getBaseStat(EquipBaseStat.tuc);
        BodyPart bp = BodyPart.getByVal(ItemConstants.getBodyPartFromItem(equip.getItemId(), 0));
        List<ScrollUpgradeInfo> scrolls = new ArrayList<>();

        if (tuc > 0) {
            int rLevel = equip.getReqLevel() + equip.getiIncReq();
            int rJob = equip.getInfo().getrJob();
            Set<EnchantStat> possibleStat = new HashSet<>();
            int plusFromLevel;
            int[] chances;
            int[] attStats = new int[0];
            int[] stat;
            int[] armorHp = new int[]{5, 20, 30, 70, 120};
            int[] armorDef = new int[]{1, 2, 4, 7, 10};
            boolean armor = false;
            if (bp == BodyPart.Weapon || bp == BodyPart.Shield || bp == BodyPart.MechanicalHeart) {
                plusFromLevel = rLevel >= 120 ? 2 : rLevel >= 60 ? 1 : 0;
                if ((rJob & RequiredJob.Warrior.getVal()) > 0) { // warrior
                    possibleStat.add(EnchantStat.PAD);
                    possibleStat.add(EnchantStat.STR);
                    possibleStat.add(EnchantStat.MHP);
                } else if ((rJob & RequiredJob.Magician.getVal()) > 0) { // mage
                    possibleStat.add(EnchantStat.MAD);
                    possibleStat.add(EnchantStat.INT);
                } else if ((rJob & RequiredJob.Bowman.getVal()) > 0) { // bowman
                    possibleStat.add(EnchantStat.PAD);
                    possibleStat.add(EnchantStat.DEX);
                } else if ((rJob & RequiredJob.Thief.getVal()) > 0 || (rJob & RequiredJob.Pirate.getVal()) > 0) { // thief/pirate
                    possibleStat.add(EnchantStat.PAD);
                    possibleStat.add(EnchantStat.STR);
                    possibleStat.add(EnchantStat.DEX);
                    possibleStat.add(EnchantStat.LUK);
                } else {
                    possibleStat.add(EnchantStat.PAD);
                    possibleStat.add(EnchantStat.MAD);
                    possibleStat.add(EnchantStat.STR);
                    possibleStat.add(EnchantStat.DEX);
                    possibleStat.add(EnchantStat.INT);
                    possibleStat.add(EnchantStat.LUK);
                    possibleStat.add(EnchantStat.MHP);
                }
                chances = new int[]{100, 70, 30, 15};
                attStats = new int[]{1, 2, 3, 5, 7, 9};
                stat = new int[]{0, 0, 1, 2, 3, 4};
            } else if (bp == BodyPart.Gloves) {
                plusFromLevel = rLevel <= 70 ? 0 : 1;
                if ((rJob & RequiredJob.Magician.getVal()) > 0) {
                    possibleStat.add(EnchantStat.MAD);
                } else {
                    possibleStat.add(EnchantStat.PAD);
                }
                possibleStat.add(EnchantStat.DEF);
                chances = new int[]{100, 70, 30};
                attStats = new int[]{0, 1, 2, 3};
                stat = new int[]{3, 0, 0, 0};
            } else if (ItemConstants.isAccessory(equip.getItemId())) {
                plusFromLevel = rLevel >= 120 ? 2 : rLevel >= 60 ? 1 : 0;
                if ((rJob & RequiredJob.Warrior.getVal()) > 0) { // warrior
                    possibleStat.add(EnchantStat.STR);
                    possibleStat.add(EnchantStat.MHP);
                } else if ((rJob & RequiredJob.Magician.getVal()) > 0) { // mage
                    possibleStat.add(EnchantStat.INT);
                } else if ((rJob & RequiredJob.Bowman.getVal()) > 0) { // bowman
                    possibleStat.add(EnchantStat.DEX);
                } else if ((rJob & RequiredJob.Thief.getVal()) > 0 || (rJob & RequiredJob.Pirate.getVal()) > 0) { // thief/pirate
                    possibleStat.add(EnchantStat.STR);
                    possibleStat.add(EnchantStat.DEX);
                    possibleStat.add(EnchantStat.LUK);
                } else {
                    possibleStat.add(EnchantStat.STR);
                    possibleStat.add(EnchantStat.DEX);
                    possibleStat.add(EnchantStat.INT);
                    possibleStat.add(EnchantStat.LUK);
                    possibleStat.add(EnchantStat.MHP);
                }
                chances = new int[]{100, 70, 30};
                stat = new int[]{1, 1, 2, 3, 5};
            } else {
                armor = true;
                plusFromLevel = rLevel >= 120 ? 2 : rLevel >= 60 ? 1 : 0;
                if ((rJob & RequiredJob.Warrior.getVal()) > 0) { // warrior
                    possibleStat.add(EnchantStat.STR);
                    possibleStat.add(EnchantStat.MHP);
                } else if ((rJob & RequiredJob.Magician.getVal()) > 0) { // mage
                    possibleStat.add(EnchantStat.INT);
                } else if ((rJob & RequiredJob.Bowman.getVal()) > 0) { // bowman
                    possibleStat.add(EnchantStat.DEX);
                } else if ((rJob & RequiredJob.Thief.getVal()) > 0 || (rJob & RequiredJob.Pirate.getVal()) > 0) { // thief/pirate
                    possibleStat.add(EnchantStat.STR);
                    possibleStat.add(EnchantStat.DEX);
                    possibleStat.add(EnchantStat.LUK);
                } else {
                    possibleStat.add(EnchantStat.STR);
                    possibleStat.add(EnchantStat.DEX);
                    possibleStat.add(EnchantStat.INT);
                    possibleStat.add(EnchantStat.LUK);
                    possibleStat.add(EnchantStat.MHP);
                }
                chances = new int[]{100, 70, 30};
                stat = new int[]{1, 2, 3, 5, 7};
            }
            for (int i = 0; i < chances.length; i++) { // 4 scroll tiers for weapons
                int tier = i + plusFromLevel;
                TreeMap<EnchantStat, Integer> stats = new TreeMap<>();
                for (EnchantStat es : possibleStat) {
                    int val;
                    if (es.isAttackType()) {
                        val = attStats[tier];
                    } else if (es.isHpOrMp()) {
                        val = stat[tier] * 50;
                    } else {
                        val = stat[tier];
                    }
                    if (val != 0) {
                        stats.put(es, val);
                    }
                }
                if (armor) {
                    stats.put(EnchantStat.DEF, armorDef[tier] + stats.getOrDefault(EnchantStat.DEF, 0));
                    stats.put(EnchantStat.MHP, armorHp[tier] + stats.getOrDefault(EnchantStat.MHP, 0));
                }
                String title = chances[i] + "% ";
                title += bp == BodyPart.Weapon ? "Attack" : "Stat";
                ScrollUpgradeInfo sui = new ScrollUpgradeInfo(i, title, SpellTraceScrollType.Normal, 0, stats,
                        BASE_ST_COST + rLevel * (tier + 1), chances[i]);
                scrolls.add(sui);
            }
        }
        if (equip.hasUsedSlots()) {
            scrolls.add(new ScrollUpgradeInfo(4, "Innocence Scroll 30%",
                    SpellTraceScrollType.Innocence, 0, new TreeMap<>(), INNOCENCE_ST_COST, 30));
            scrolls.add(new ScrollUpgradeInfo(5, "Clean Slate Scroll 15%",
                    SpellTraceScrollType.CleanSlate, 0, new TreeMap<>(), CLEAN_SLATE_ST_COST, 15));
        }
        return scrolls;
    }

    public static boolean isSymbol(int itemId) {
        return isArcaneSymbol(itemId) || isAuthenticForceSymbol(itemId);
    }

    public static boolean isArcaneSymbol(int itemId) {
        return itemId / 1000 == 1712;
    }

    public static boolean isAuthenticForceSymbol(int itemId) {
        return itemId / 1000 == 1713;
    }

    // is_tuc_ignore_item(int nItemID)
    static boolean isTucIgnoreItem(int itemID) {
        return (isSecondary(itemID) || isEmblem(itemID) || Arrays.asList(TUC_IGNORE_ITEMS).contains(itemID))
                || isShield(itemID);
    }

    public static PetSkill getPetSkillFromID(int itemID) {
        switch (itemID) {
            case 5190000:
                return PetSkill.ITEM_PICKUP;
            case 5190001:
                return PetSkill.AUTO_HP;
            case 5190002:
                return PetSkill.EXPANDED_AUTO_MOVE;
            case 5190003:
                return PetSkill.AUTO_MOVE;
            case 5190004:
                return PetSkill.EXPIRED_PICKUP;
            case 5190005:
                return PetSkill.IGNORE_ITEM;
            case 5190006:
                return PetSkill.AUTO_MP;
            case 5190007:
                return PetSkill.RECALL;
            case 5190008:
                return PetSkill.AUTO_SPEAKING;
            case 5190009:
                return PetSkill.AUTO_ALL_CURE;
            case 5190010:
                return PetSkill.AUTO_BUFF;
            case 5190011:
                return PetSkill.AUTO_FEED;
            case 5190012:
                return PetSkill.FATTEN_UP;
            case 5190013:
                return PetSkill.PET_SHOP;
            case 5190014:
                return PetSkill.FATTEN_UP;
            case 5191000:
                return PetSkill.ITEM_PICKUP;
            case 5191001:
                return PetSkill.AUTO_HP;
            case 5191002:
                return PetSkill.EXPANDED_AUTO_MOVE;
            case 5191003:
                return PetSkill.ITEM_PICKUP;
        }
        return null;
    }

    // Gets the hardcoded starforce capacities Nexon introduced for equips above level 137.
    // The cap for stars is in GetHyperUpgradeCapacity (E8 ? ? ? ? 0F B6 CB 83 C4 0C, follow `call`),
    // therefore it needs to be manually implemented on the server side.
    // Nexon's decision was very poor, but will require client edits to revert.
    static int getItemStarLimit(int itemID) {
        switch (itemID) {
            case 1072870: // Sweetwater Shoes
            case 1082556: // Sweetwater Gloves
            case 1102623: // Sweetwater Cape
            case 1132247: // Sweetwater Belt
                return 15;
            case 1182060: // Ghost Ship Exorcist
            case 1182273: // Sengoku Hakase Badge
                return 22;
        }
        return -1;
    }

    public static int getEquippedSummonSkillItem(int itemID, short job) {
        switch (itemID) {
            case 1112585:// Angelic Blessing
                return (SkillConstants.getNoviceSkillRoot(job) * 10000) + 1085;
            case 1112586:// Dark Angelic Blessing
                return (SkillConstants.getNoviceSkillRoot(job) * 10000) + 1087;
            case 1112594:// Snowdrop Angelic Blessing
                return (SkillConstants.getNoviceSkillRoot(job) * 10000) + 1090;
            case 1112663:// White Angelic Blessing
                return (SkillConstants.getNoviceSkillRoot(job) * 10000) + 1179;
            case 1112735:// White Angelic Blessing 2
                return 80001154;
            case 1113020:// Lightning God Ring
                return 80001262;
            case 1113173:// Lightning God Ring 2
                return 80011178;
            // Heaven Rings
            case 1112932:// Guard Ring
                return 80011149;
            case 1114232:// Sun Ring
                return 80010067;
            case 1114233:// Rain Ring
                return 80010068;
            case 1114234:// Rainbow Ring
                return 80010069;
            case 1114235:// Snow Ring
                return 80010070;
            case 1114236:// Lightning Ring
                return 80010071;
            case 1114237:// Wind Ring
                return 80010072;
        }
        return 0;
    }

    public static boolean isRecipeOpenItem(int itemID) {
        return itemID / 10000 == 251;
    }

    public static boolean isEtc(int itemID) {
        return itemID / 1000000 == 4;
    }

    public static boolean isConsume(int itemID) {
        return itemID / 1000000 == 2;
    }

    public static boolean isInstall(int itemID) {
        return itemID / 1000000 == 3;
    }

    public static boolean isChair(int itemID) {
        return itemID / 10000 == 301;
    }

    public static boolean isGroupChair(int itemID) {
        return itemID / 1000 == 3016;
    }

    public static boolean isMachineArm(int itemID) {
        return itemID / 10000 == 162;
    }

    public static boolean isMachineLeg(int itemID) {
        return itemID / 10000 == 163;
    }

    public static boolean isBodyFrame(int itemID) {
        return itemID / 10000 == 164;
    }

    public static boolean isTransistor(int itemID) {
        return itemID / 10000 == 165;
    }

    public static boolean isHeart(int itemID) {
        return itemID / 10000 == 167;
    }

    public static boolean isDragonMask(int itemID) {
        return itemID / 10000 == 194;
    }

    public static boolean isDragonPendant(int itemID) {
        return itemID / 10000 == 195;
    }

    public static boolean isDragonWings(int itemID) {
        return itemID / 10000 == 196;
    }

    public static boolean isDragonTail(int itemID) {
        return itemID / 10000 == 197;
    }

    public static boolean isCard(int itemID) {
        return itemID / 10000 == 135 && itemID - 1350000 >= 2100 && itemID - 1350000 < 2200;
    }

    public static boolean isOrb(int itemID) {
        return itemID / 10000 == 135 && itemID - 1350000 >= 2400 && itemID - 1350000 < 2500;
    }

    public static boolean isDragonSoul(int itemID) {
        return itemID / 10000 == 135 && itemID - 1350000 >= 2500 && itemID - 1350000 < 2600;
    }

    public static boolean isSoulRing(int itemID) {
        return itemID / 10000 == 135 && itemID - 1350000 >= 2600 && itemID - 1350000 < 2700;
    }

    public static boolean isMagnum(int itemID) {
        return itemID / 10000 == 135 && itemID - 1350000 >= 2700 && itemID - 1350000 < 2800;
    }

    public static boolean isHeroMedal(int itemID) {
        return itemID / 10 == 135220;
    }

    public static boolean isPaladinRosario(int itemID) {
        return itemID / 10 == 135221;
    }

    public static boolean isDarkKnightChain(int itemID) {
        return itemID / 10 == 135222;
    }

    public static boolean isFpBook(int itemID) {
        return itemID / 10 == 135223;
    }

    public static boolean isIlBook(int itemID) {
        return itemID / 10 == 135224;
    }

    public static boolean isClericBook(int itemID) {
        return itemID / 10 == 135225;
    }

    public static boolean isBowmasterFeather(int itemID) {
        return itemID / 10 == 135226;
    }

    public static boolean isCrossbowMasterThimble(int itemID) {
        return itemID / 10 == 135227;
    }

    public static boolean isShadowerSheath(int itemID) {
        return itemID / 10 == 135228;
    }

    public static boolean isNightlordPouch(int itemID) {
        return itemID / 10 == 135229;
    }

    public static boolean isViperWristband(int itemID) {
        return itemID / 10 == 135290;
    }

    public static boolean isCaptainSight(int itemID) {
        return itemID / 10 == 135291;
    }

    public static boolean isCannonGunpowder(int itemID) {
        return itemID / 10 == 135292 || itemID / 10 == 135298;
    }

    public static boolean isFanTassel(int itemId) {
        return itemId / 100 == 13538;
    }

    public static boolean isBattleMageOrb(int itemID) {
        return itemID / 10 == 135295;
    }

    public static boolean isWildHunterArrowHead(int itemID) {
        return itemID / 10 == 135296;
    }

    public static boolean isAranPendulum(int itemID) {
        return itemID / 10 == 135293;
    }

    public static boolean isEvanPaper(int itemID) {
        return itemID / 10 == 135294;
    }

    public static boolean isCygnusGem(int itemID) {
        return itemID / 10 == 135297;
    }

    public static Set<DropInfo> getConsumableMobDrops(int level) {
        level = Math.min(100, (level / 20) * 20); // round it to the nearest 20th level + max of level 100
        return consumableDropsPerLevel.getOrDefault(level, new HashSet<>());
    }

    public static Set<DropInfo> getEquipMobDrops(short job, int level) {
        if (level >= MAX_LEVEL_EQUIP_DROPS) {
            return new HashSet<>();
        }

        level = Math.min(140, (level / 10) * 10); // round it to the nearest 10th level + max of level 140
        ItemJob itemJob = GameConstants.getItemJobByJob(job);
        if (itemJob == null) {
            itemJob = ItemJob.BEGINNER;
        }
        return equipDropsPerLevel.getOrDefault(itemJob, new HashMap<>()).getOrDefault(level, new HashSet<>());
    }

    public static boolean isFamiliarSkillItem(int itemID) {
        return getItemPrefix(itemID) == 286;
    }

    public static boolean isRecoveryHPItem(int itemID) {
        return getItemPrefix(itemID) == 200;
    }

    public static boolean isRecoveryCureItem(int itemID) {
        return getItemPrefix(itemID) == 205;
    }

    public static boolean isRecoveryItem(int itemID) {
        return isRecoveryCureItem(itemID) || isRecoveryHPItem(itemID);
    }


    public static boolean isScroll(int itemID) {
        return getItemPrefix(itemID) == 204;
    }

    public static boolean isInnocenceScroll(int itemID) {
        return itemID / 100 == 20496;
    }

    public static boolean isSkillBook(int itemID) {
        return getItemPrefix(itemID) == 229;
    }

    public static int getRequiredArcaneSymbolExp(int curLevel) {
        if (curLevel == 0 || curLevel >= MAX_ARCANE_SYMBOL_LEVEL) {
            return 0;
        }
        return curLevel * curLevel + 11;
    }

    public static long getSymbolMoneyReqByLevel(int level, int itemId) {
        var type = SymbolType.byItemId(itemId);
        return type == SymbolType.Arcane
                ? getArcaneSymbolMoneyReqByLevel(level, itemId)
                : getAuthSymbolMoneyReqByLevel(level, itemId);
    }

    public static long getSymbolAfByLevel(int level, int itemId) {
        var type = SymbolType.byItemId(itemId);
        return type == SymbolType.Arcane
                ? getArcaneSymbolAfByLevel(level)
                : getAuthSymbolAfByLevel(level);
    }

    public static long getSymbolStatByLevel(int level, int itemId) {
        var type = SymbolType.byItemId(itemId);
        return type == SymbolType.Arcane
                ? getArcaneSymbolStatByLevel(level)
                : getAuthSymbolStatByLevel(level);
    }

    public static long getSymbolXenonStatByLevel(int level, int itemId) {
        var type = SymbolType.byItemId(itemId);
        return type == SymbolType.Arcane
                ? getArcaneSymbolXenonStatByLevel(level)
                : getAuthSymbolXenonStatByLevel(level);
    }

    public static long getSymbolDaHpByLevel(int level, int itemId) {
        var type = SymbolType.byItemId(itemId);
        return type == SymbolType.Arcane
                ? getArcaneSymbolDaHpByLevel(level)
                : getAuthSymbolDaHpByLevel(level);
    }

    public static int getRequiredSymbolExp(int level, int itemId) {
        var type = SymbolType.byItemId(itemId);
        return type == SymbolType.Arcane
                ? getRequiredArcaneSymbolExp(level)
                : getRequiredAuthSymbolExp(level);
    }

    public static long getArcaneSymbolMoneyReqByLevel(int level, int itemId) {
        if (itemId == 1712001) { //VJ symbol
            return 2370000 + level * 7130000;
        } else {
            return 12440000 + level * 6600000;
        }

    }

    public static int getArcaneSymbolAfByLevel(int level) {
        return 20 + level * 10;
    }

    public static int getArcaneSymbolStatByLevel(int level) {
        return 200 + level * 100;
    }

    public static int getArcaneSymbolXenonStatByLevel(int level) {
        return 78 + level * 39;
    }

    public static int getArcaneSymbolDaHpByLevel(int level) {
        return (5250) + level * 1750;
    }

    public static int getRequiredAuthSymbolExp(int curLevel) {
        if (curLevel == 0 || curLevel >= MAX_AUTH_SYMBOL_LEVEL) {
            return 0;
        }
        return 9 * curLevel * curLevel + 20 * curLevel;
    }

    public static long getAuthSymbolMoneyReqByLevel(int level, int itemId) {
        if (itemId == 1713000) { // Cernium
            return 96900000 + level * 88500000;
        } else {
            return 106600000 + level * 97300000;
        }

    }

    public static int getAuthSymbolAfByLevel(int level) {
        return level * 10;
    }

    public static int getAuthSymbolStatByLevel(int level) {
        return 300 + level * 200;
    }

    public static int getAuthSymbolXenonStatByLevel(int level) {
        return 117 + level * 78;
    }

    public static int getAuthSymbolDaHpByLevel(int level) {
        return (5250) + level * 3500;
    }

    public static boolean isCashWeapon(int itemID) {
        return getItemPrefix(itemID) == EquipPrefix.CashWeapon.getVal();
    }

    public static boolean isCashEffect(int itemID) {
        return getItemPrefix(itemID) == 501;
    }

    public static boolean isIntensePowerCrystal(int itemId) {
        return itemId == 4001886;
    }

    public static boolean isPetWear(int itemId) {
        return getItemPrefix(itemId) == 180;
    }

    public static boolean isNotRunOnPickup(int itemId) {
        return itemId == BLACK_MAGE_TOKEN;
    }

    public static boolean isSameBodyPart(int itemId1, int itemId2) {
        return getItemPrefix(itemId1) == getItemPrefix(itemId2);
    }

    public static boolean isFauxmiliarCard(int itemId) {
        return itemId == 2871250 || itemId == 2871251;
    }

    public static boolean isDemonAegis(int itemId) {
        return itemId / 1000 == 1099;
    }

    public static boolean isMPPotion(int itemId) {
        ItemInfo ii = ItemData.getItemInfoByID(itemId);
        if (ii == null || ii.getSpecStats() == null || ii.getSpecStats().size() == 0) {
            return false;
        }
        return ii.getSpecStats().containsKey(SpecStat.mp) || ii.getSpecStats().containsKey(SpecStat.mpR);
    }

    public static boolean isHPPotion(int itemId) {
        ItemInfo ii = ItemData.getItemInfoByID(itemId);
        if (ii == null || ii.getSpecStats() == null || ii.getSpecStats().size() == 0) {
            return false;
        }
        return ii.getSpecStats().containsKey(SpecStat.hp) || ii.getSpecStats().containsKey(SpecStat.hpR);
    }

    public static boolean isBagItem(int itemId) {
        return isEtcBagItem(itemId) || isUseBagItem(itemId) || isInstallBagItem(itemId);
    }

    public static boolean isEtcBagItem(int itemId) {
        return getItemPrefix(itemId) == 433;
    }

    public static boolean isUseBagItem(int itemId) {
        return getItemPrefix(itemId) == 265;
    }

    public static boolean isInstallBagItem(int itemId) {
        return getItemPrefix(itemId) == 308;
    }

    public static boolean isCoinItem(int itemId) {
        return getItemPrefix(itemId) == 431 || itemId == 4001254 || itemId == 4001620 || itemId == 4001623;
    }

    public static boolean isStackable(Item item) {
        InvType invType = item.getInvType();
        return invType.isStackable(item.getItemId()) && !item.hasExpireDate();
    }

    public static boolean isJewel(int itemId) {
        return itemId / 10 == 135297;
    }

    public static boolean isBallast(int itemId) {
        return itemId / 10 == 135293;
    }

    public static boolean isFace(int itemId) {
        return itemId / 10000 == 2 || itemId / 10000 == 5;
    }

    public static boolean isHair(int itemId) {
        return itemId / 10000 == 3 || itemId / 10000 == 4;
    }

    public static boolean isSkin(int opt) {
        return opt >= 0 && opt <= 12;
    }

    public static boolean isCash(int id) {
        if (isEquip(id)) {
            var equipInfo = ItemData.getEquipInfoById(id);
            return equipInfo != null && equipInfo.isCash();
        } else {
            var itemInfo = ItemData.getItemInfoByID(id);
            return itemInfo != null && itemInfo.isCash();
        }
    }

    public static boolean canWearShield(WeaponType weaponType) {
        return weaponType == WeaponType.OneHandedAxe
            || weaponType == WeaponType.OneHandedMace
            || weaponType == WeaponType.OneHandedSword
            || weaponType == WeaponType.Dagger
            || weaponType == WeaponType.Wand
            || weaponType == WeaponType.Staff
            || weaponType == WeaponType.None
            || weaponType == WeaponType.Desperado
                ;
    }

    public static int getCharmExpByItemId(int itemId) {
        var prefix = getItemPrefix(itemId);
        var eqpPrefix = EquipPrefix.getByVal(prefix);
        if (eqpPrefix == null) {
            return 0;
        }
        switch (eqpPrefix) {
            case Hat:
                return 50;

            case Overall:
            case CashWeapon:
                return 60;

            case FaceAccessory:
            case EyeAccessory:
            case Earrings:
            case Shoes:
            case Gloves:
                return 40;

            case Shield:
                return 10;

            case Top:
            case Bottom:
            case Cape:
                return 30;
        }

        return 0;
    }

    public static boolean isOzPill(int itemId) {
        return OzConstants.PILLS.containsKey(itemId);
    }

    public static boolean isOzRing(int itemId) {
        switch (itemId) {
            case 1113098:  // Ring of Restraint
            case 1113099:  // Ultimatum Ring
            case 1113100:  // Limit Ring
            case 1113101:  // Health Cut Ring
            case 1113102:  // Mana Cut Ring
            case 1113103:  // Durability Ring
            case 1113104:  // Critical Damage Ring
            case 1113105:  // Critical Defense Ring
            case 1113106:  // Critical Shift Ring
            case 1113107:  // Stance Shift Ring
            case 1113108:  // Totalling Ring
            case 1113109:  // Level Jump S Ring
            case 1113110:  // Level Jump D Ring
            case 1113111:  // Level Jump I Ring
            case 1113112:  // Level Jump L Ring
            case 1113113:  // Weapon Jump S Ring
            case 1113114:  // Weapon Jump D Ring
            case 1113115:  // Weapon Jump I Ring
            case 1113116:  // Weapon Jump L Ring
            case 1113117:  // Swift Ring
            case 1113118:  // Overdrive Ring
            case 1113119:  // Berserker Ring
            case 1113120:  // Reflective Ring
            case 1113121:  // Cleansing Ring
            case 1113122:  // Risk Taker Ring
            case 1113123:  // Crisis H Ring
            case 1113124:  // Crisis M Ring
            case 1113125:  // Crisis HM Ring
            case 1113126:  // Clean Stance Ring
            case 1113127:  // Clean Defense Ring
            case 1113128:  // Tower Boost Ring
                return true;
        }
        return false;
    }

    public static boolean isLotteryItem(int itemId) {
        return LotteryItemConstants.getRewardPoolFromLotteryItem(itemId).size() > 0;
    }

    /**
     * Check if item has a random level upon equip creation (such as Oz Rings)
     *
     * @param itemId
     * @return
     */
    public static boolean isRandomLevelUponEquipCreationItem(int itemId) {
        return isOzRing(itemId);
    }

    /**
     * Used for items that have a set random level upon creation (such as Oz Rings)
     *
     * @param itemId
     * @return
     */
    public static int getRandomLevelByItemId(int itemId) {
        if (!isRandomLevelUponEquipCreationItem(itemId)) {
            return 0;
        }

        switch (itemId) {
            case 1113098:  // Ring of Restraint
                var di = Util.getRandomDropInfoByChance(new HashSet<>() {{
                    add(new DropInfo(1, 500)); // equip level 1
                    add(new DropInfo(2, 350)); // equip level 2
                    add(new DropInfo(3, 150)); // equip level 3
                    add(new DropInfo(4, 10));  // equip level 4
                }});
                return di == null ? 1 : di.getItemID();

            case 1113103:  // Durability Ring
            case 1113104:  // Critical Damage Ring
            case 1113113:  // Weapon Jump S Ring
            case 1113114:  // Weapon Jump D Ring
            case 1113115:  // Weapon Jump I Ring
            case 1113116:  // Weapon Jump L Ring
            case 1113122:  // Risk Taker Ring
            case 1113125:  // Crisis HM Ring
                di = Util.getRandomDropInfoByChance(new HashSet<>() {{
                    add(new DropInfo(1, 490)); // equip level 1
                    add(new DropInfo(2, 300)); // equip level 2
                    add(new DropInfo(3, 170)); // equip level 3
                    add(new DropInfo(4, 40));  // equip level 4
                }});
                return di == null ? 1 : di.getItemID();

            default:
                di = Util.getRandomDropInfoByChance(new HashSet<>() {{
                    add(new DropInfo(1, 450)); // equip level 1
                    add(new DropInfo(2, 250)); // equip level 2
                    add(new DropInfo(3, 200)); // equip level 3
                    add(new DropInfo(4, 100)); // equip level 4
                }});
                return di == null ? 1 : di.getItemID();
        }
    }

    public static boolean isNotLootableByPetVac(Drop drop) {
        if (drop.isMoney()) {
            return false;
        }

        return drop.isByPickPocket();
    }
}

