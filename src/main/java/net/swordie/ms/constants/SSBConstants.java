package net.swordie.ms.constants;

import net.swordie.ms.life.drop.DropInfo;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Util;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Created on 14/04/2021.
 *
 * @author Asura
 */
public class SSBConstants {
    public static int CURRENT_SSB = 1;
    public static final LocalDate SSBStartDate = LocalDate.of(2022, 4, 22);

    public static List<Set<DropInfo>> SSBs = new ArrayList<>();

    public static Set<DropInfo> getCurrentSSBInfo() {
        if(CustomConstants.SSB_AUTOMATIC_ROTATION){
            int daysSinceStart = (int)ChronoUnit.DAYS.between(SSBStartDate, LocalDate.now());
            int odd = ((daysSinceStart / 7) % 2);
            int index = (((daysSinceStart / 7) - odd) / 2) % (SSBConstants.SSBs.size());
            return SSBs.get(index);
        } else {
            switch (CURRENT_SSB) {
                case 1:
                    return SSB_INFOS_1;
                case 2:
                    return SSB_INFOS_2;
                case 3:
                    return SSB_INFOS_3;
                case 4:
                    return SSB_INFOS_4;
                case 5:
                    return SSB_INFOS_5;
                case 6:
                    return SSB_INFOS_6;
                case 7:
                    return SSB_INFOS_7;
                case 8:
                    return SSB_INFOS_8;
                case 9:
                    return SSB_INFOS_9;
                case 10:
                    return SSB_INFOS_10;
                case 11:
                    return SSB_INFOS_11;
                case 12:
                    return SSB_INFOS_12;
                case 13:
                    return SSB_INFOS_13;
                case 14:
                    return SSB_INFOS_14;
                case 15:
                    return SSB_INFOS_15;
                case 16:
                    return SSB_INFOS_16;
                case 17:
                    return SSB_INFOS_17;
                case 18:
                    return SSB_INFOS_18;
                case 19:
                    return SSB_INFOS_19;
            }
        }
        // Default
        return null;
    }

    public static final Set<Integer> getCurrentSsbItemIds() {
        return getCurrentSSBInfo().stream()
                .map(DropInfo::getItemID)
                .collect(Collectors.toSet());
    }
    // Pyonta - Adventure
    public static final Set<DropInfo> SSB_INFOS_1 = Util.makeSet(
            // Green Leaf Set
            new DropInfo(1003079, 1), // Green Leaf Hat
            new DropInfo(1052245, 1), // Green Leaf Overall
            new DropInfo(1072438, 1), // Green Leaf Shoes

            // Crystal Alchemist Set
            new DropInfo(1005131, 1), // Alchemist Gem
            new DropInfo(1053295, 1), // Alchemist Cloth
            new DropInfo(1073269, 1), // Alchemist Shoes
            new DropInfo(1103086, 1), // Alchemist Backpack

            // Erda Set
            new DropInfo(1005174, 1), // Erda Hat
            new DropInfo(1053318, 1), // Erda Outfit
            new DropInfo(1073283, 1), // Erda Shoes
            new DropInfo(1103108, 1), // Erda Cape
            new DropInfo(1702841, 1), // Erda Weapon

            // Cursed Hunter Set
            new DropInfo(1005325, 1), // Cursed Hunter Hood
            new DropInfo(1053404, 1), // Cursed Hunter Suit
            new DropInfo(1073341, 1), // Cursed Hunter Shoes
            new DropInfo(1103176, 1), // Cursed Hunter Cape
            new DropInfo(1702906, 1), // Cursed Bow

            // Dark/Light Executor Sets
            new DropInfo(1005378, 1), // Dark Executor Hat
            new DropInfo(1005379, 1), // Light Executor Hat
            new DropInfo(1053449, 1), // Dark Executor Garb
            new DropInfo(1053450, 1), // Light Executor Garb
            new DropInfo(1702932, 1), // Dark Executor Weapoon Skin
            new DropInfo(1702933, 1), // Light Executor Weapon Skin

            // Kao Set
            new DropInfo(1005402, 1), // Kao Hood
            new DropInfo(1053473, 1), // Kao Robes
            new DropInfo(1073380, 1), // Kao Shoes
            new DropInfo(1103214, 1), // Kao Cape
            new DropInfo(1702947, 1), // Kao Scroll

            // Pink Bean's Set
            new DropInfo(1053517, 1), // Pink Bean Hoodie
            new DropInfo(1103234, 1), // Pink Bean Tail
            new DropInfo(1702996, 1), // Pink Bean's Yummy Meat

            // Fog Admiral Set
            new DropInfo(1005499, 1), // Fog Admiral Hat
            new DropInfo(1053543, 1), // Fog Admiral
            new DropInfo(1073428, 1), // Fog Admiral Boots
            new DropInfo(1103243, 1), // Blue Waves
            new DropInfo(1702981, 1), // Black Wave

            // Tranquil Sage Set
            new DropInfo(1000112, 1), // Tranquil Sage Hat [M]
            new DropInfo(1001134, 1), // Tranquil Sage Hat [F]
            new DropInfo(1050557, 1), // Tranquil Sage Outfit [M]
            new DropInfo(1051627, 1), // Tranquil Sage Outfit [F]
            new DropInfo(1073432, 1), // Tranquil Sage Shoes
            new DropInfo(1103246, 1), // Tranquil Sage Cape
            new DropInfo(1115209, 1), // Sage Chat Ring
            new DropInfo(1115310, 1), // Sage Label Ring
            new DropInfo(1703017, 1), // Sage Firefly

            // Forest Glimmerfox Set
            new DropInfo(1005576, 1), // Forest Glimmerfox Hat
            new DropInfo(1053610, 1), // Forest Glimmerfox Outfit
            new DropInfo(1073460, 1), // Forest Glimmerfox Shoes
            new DropInfo(1103275, 1), // Forest Glimmerfox Cape
            new DropInfo(1703019, 1), // Forest Glimmerfox Weapon

            // Night Glimmerfox Set
            new DropInfo(1005577, 1), // Night Glimmerfox Hat
            new DropInfo(1053611, 1), // Night Glimmerfox Outfit
            new DropInfo(1073461, 1), // Night Glimmerfox Shoes
            new DropInfo(1103276, 1), // Night Glimmerfox Cape
            new DropInfo(1703020, 1), // Night Glimmerfox Weapon

            // Combat Military Academy Set
            new DropInfo(1005578, 1), // Combat Military Academy Hat (M)
            new DropInfo(1005581, 1), // Combat Military Academy Hat (F)
            new DropInfo(1053612, 1), // Combat Military Academy Outfit (M)
            new DropInfo(1053613, 1), // Combat Military Academy Outfit (F)
            new DropInfo(1073462, 1), // Combat Military Academy Shoes
            new DropInfo(1103277, 1), // Combat Military Academy Cape
            new DropInfo(1703021, 1), // Combat Military Academy Weapon

            // Divine Crow Set
            new DropInfo(1005616, 1), // Divine Crow Hat
            new DropInfo(1022297, 1), // Divine Crow Eyepatch
            new DropInfo(1053631, 1), // Divine Crow Outfit (M)
            new DropInfo(1053632, 1), // Divine Crow Outfit (F)
            new DropInfo(1073480, 1), // Divine Crow Shoes (M)
            new DropInfo(1073481, 1), // Divine Crow Shoes (F)
            new DropInfo(1103297, 1), // Divine Crow Cape
            new DropInfo(1703040, 1), // Divine Crow Weapon

            // Yeti's Set
            new DropInfo(1005657, 1), // Yeti Horn
            new DropInfo(1053641, 1), // Me Yeti Too
            new DropInfo(1703050, 1), // Yeti Mic

            // Squirrelbear Explorer Set
            new DropInfo(1005702, 1), // Squirrelbear Explorer Cap
            new DropInfo(1005703, 1), // Squirrelbear Explorer Goggles
            new DropInfo(1050574, 1), // Squirrelbear Boy Member
            new DropInfo(1051646, 1), // Squirrelbear Girl Member
            new DropInfo(1073509, 1), // Squirrelbear Explorer Shoes
            new DropInfo(1103315, 1), // Squirrelbear Explorer Backpack
            new DropInfo(1703061, 1), // Squirrelbear Camera

            new DropInfo(1003083, 1), // Sprout Hat
            new DropInfo(1005461, 1), // Pink Bean Horns
            new DropInfo(1103011, 1), // The Erda Flow
            new DropInfo(1103151, 1), // Black Mage's Aura
            new DropInfo(1103179, 1), // Adventurer Cape
            new DropInfo(1702891, 1)  // Erda Scribbles
    );

    // Pyonta - Autumn and Spring
    public static final Set<DropInfo> SSB_INFOS_2 = Util.makeSet(
            // Cutie Rice Cake Set
            new DropInfo(1004470, 1), // Fluffy Trapper Hat
            new DropInfo(1052912, 1), // Quilting Fashion King
            new DropInfo(1702576, 1), // Ground Pounder

            // Master Flora Set
            new DropInfo(1004777, 1), // Flower Garden Morning
            new DropInfo(1050427, 1), // Pure Dew
            new DropInfo(1051495, 1), // Crystal Dew
            new DropInfo(1102932, 1), // Alicia's Flower Wings
            new DropInfo(1070080, 1), // Navillera Loafers
            new DropInfo(1071097, 1), // Navillera Flats
            new DropInfo(1702689, 1), // Fairy Flora

            // Sweetheart Set
            new DropInfo(1004852, 1), // Sweetheart Hat
            new DropInfo(1050438, 1), // Sweetheart Shirt
            new DropInfo(1051506, 1), // Sweetheart Dress
            new DropInfo(1073175, 1), // Sweetheart Shoes
            new DropInfo(1073176, 1), // Sweetheart Slippers
            new DropInfo(1102964, 1), // Sweetheart's Affection
            new DropInfo(1702717, 1), // Glow Stick of Love

            // Pumpkin Star Set
            new DropInfo(1004873, 1), // Pumpkin Planet
            new DropInfo(1012601, 1), // Toothy Smirk
            new DropInfo(1012602, 1), // Squinting Toothy Smirk
            new DropInfo(1050441, 1), // Pumpkin Galaxy
            new DropInfo(1051509, 1), // Pumpkin Milky Way
            new DropInfo(1073183, 1), // Pumpkin Cookie
            new DropInfo(1073184, 1), // Pumpkin Soup
            new DropInfo(1102974, 1), // Stellar Specters
            new DropInfo(1702726, 1), // Pumpkin Star

            // Cherry Pop Set
            new DropInfo(1004954, 1), // Cherry on Top
            new DropInfo(1004955, 1), // Cherry Bomb
            new DropInfo(1050456, 1), // Cherry Trimmings
            new DropInfo(1051523, 1), // Cherry Glaze
            new DropInfo(1070088, 1), // Cherry Strut
            new DropInfo(1071105, 1), // Cherry Sashay
            new DropInfo(1103013, 1), // Blossom Breeze
            new DropInfo(1702759, 1), // Charming Cherry Pop

            // Preppy Sprout Set
            new DropInfo(1004975, 1), // Preppy Sprout Hat
            new DropInfo(1050463, 1), // Preppy Sprout Suit
            new DropInfo(1051530, 1), // Preppy Sprout Garb
            new DropInfo(1073226, 1), // Preppy Sprout Boaters
            new DropInfo(1103023, 1), // Dream Breeze
            new DropInfo(1702770, 1), // Fancy Feather Quill

            // Raindrop Set
            new DropInfo(1005152, 1), // Squirrel Hairband
            new DropInfo(1053305, 1), // Raindrop Raincoat
            new DropInfo(1073273, 1), // Raindrop Boots
            new DropInfo(1103096, 1), // Squirrel Tail
            new DropInfo(1702830, 1), // Spring Rain Parasol

            // Maple Gumshoe Set
            new DropInfo(1005168, 1), // Maple Gumshoe's Fedora
            new DropInfo(1053314, 1), // Maple Gumshoe's Coat
            new DropInfo(1073281, 1), // Maple Gumshoe's Gumshoes
            new DropInfo(1103103, 1), // Maple Gumshoe's File Fairy
            new DropInfo(1702836, 1), // Maple Gumshoe's Tablet

            // Camelia Set
            new DropInfo(1005280, 1), // Camelia Newsboy Cap
            new DropInfo(1005281, 1), // Camelia Tea Bonnet
            new DropInfo(1050509, 1), // Camelia Tea Livery
            new DropInfo(1051579, 1), // Camelia Tea Dress
            new DropInfo(1070107, 1), // Camelia Loafers
            new DropInfo(1071123, 1), // Camelia Pumps
            new DropInfo(1103157, 1), // Glittering Elegance Cape
            new DropInfo(1702887, 1), // Camelia Tea Time

            // Victoria Island Floral Crowns:
            new DropInfo(1005424, 1), // Henesys Floral Crown
            new DropInfo(1005425, 1), // Lith Harbor Floral Crown
            new DropInfo(1005426, 1), // Perion Floral Crown
            new DropInfo(1005427, 1), // Ellinia Floral Crown
            new DropInfo(1005428, 1), // Kerning City Floral Crown
            new DropInfo(1005429, 1), // Nautilus Floral Crown

            // Yellow Anorak Set
            new DropInfo(1005436, 1), // Yellow Anorak Hat
            new DropInfo(1053505, 1), // Yellow Oversized Anorak

            // Sunshine Fox Set
            new DropInfo(1005533, 1), // Sunshine Fox Hat
            new DropInfo(1053574, 1), // Sunshine Fox Outfit
            new DropInfo(1073438, 1), // Sunshine Fox Vines
            new DropInfo(1103250, 1), // Sunshine Fox Tail
            new DropInfo(1702997, 1), // Sunshine Fox Friends

            // Ruffled Ghost Set
            new DropInfo(1005634, 1), // Spooky Hood
            new DropInfo(1053637, 1), // Fluttering Ruffles
            new DropInfo(1073487, 1), // Ruffled Ghost Shoes
            new DropInfo(1703047, 1), // Spooky Wrath

            // Henesys Picnic Set
            new DropInfo(1005839, 1), // Prick-eared Henesys
            new DropInfo(1053750, 1), // Henesys Strolling Fashion
            new DropInfo(1073565, 1), // Dreamy Forest Trail
            new DropInfo(1103360, 1), // Mushroom's Song
            new DropInfo(1703118, 1), // Henesys Collector

            new DropInfo(1004870, 1), // Hallowkitty's Witch Hat
            new DropInfo(1005169, 1), // Picnic Maki Hairpin
            new DropInfo(1005170, 1), // Picnic Fruit Hairpin
            new DropInfo(1005171, 1), // Picnic Musubi Hairpin
            new DropInfo(1005172, 1), // Picnic Snapback Hat
            new DropInfo(1005267, 1), // Hallowkitty's Neon Hat
            new DropInfo(1050533, 1), // Marron Glacé [M]
            new DropInfo(1051604, 1), // Marron Glacé [F]
            new DropInfo(1053247, 1), // Fall Oversized Jacket
            new DropInfo(1103104, 1), // Picnic Balloons
            new DropInfo(1103106, 1)  // Picnic Time
    );

    // Pyonta - Collab (Anime)
    public static final Set<DropInfo> SSB_INFOS_3 = Util.makeSet(
            // Naruto & FMA
            new DropInfo(1002998, 1), // Edwin Wig
            new DropInfo(1002999, 1), // Fire Shadow Hair
            new DropInfo(1003000, 1), // Cherry Blossom Hair
            new DropInfo(1003001, 1), // Chaos Metallic Helmet
            new DropInfo(1052210, 1), // Alchemist Overall
            new DropInfo(1052211, 1), // Fire Shadow Suit
            new DropInfo(1052212, 1), // Cherry Blossom Suit
            new DropInfo(1052213, 1), // Chaos Armor
            new DropInfo(1072404, 1), // Alchemist Shoes
            new DropInfo(1072405, 1), // Ninja Shoes
            new DropInfo(1072406, 1), // Chaos Metallic Shoes
            new DropInfo(1702235, 1), // Metallic Arm

            // SAO
            new DropInfo(1052676, 1), // Kirito's Outfit
            new DropInfo(1052677, 1), // Asuna's Dress
            new DropInfo(1052678, 1), // Leafa's Dress
            new DropInfo(1052684, 1), // Heathcliff's Armor
            new DropInfo(1052685, 1), // Yui's Dress
            new DropInfo(1072873, 1), // Asuna's Shoes
            new DropInfo(1072875, 1), // Leafa's Shoes
            new DropInfo(1072883, 1), // Heathcliff's Boots
            new DropInfo(1072884, 1), // Yui's Anklet
            new DropInfo(1082558, 1), // Kirito's Gloves
            new DropInfo(1082563, 1), // Heathcliff's Gloves
            new DropInfo(1082564, 1), // Yui's Gloves
            new DropInfo(1102641, 1), // Yui's Spirit
            new DropInfo(1102642, 1), // Yui's Wings

            // AoT
            new DropInfo(1004397, 1), // Cleaning Bandanna
            new DropInfo(1004398, 1), // Sitting Eren
            new DropInfo(1004399, 1), // Sitting Mikasa
            new DropInfo(1004400, 1), // Sitting Armin
            new DropInfo(1004401, 1), // Sitting Levi
            new DropInfo(1004402, 1), // Sitting Colossal Titan
            new DropInfo(1012509, 1), // Hange's Glasses
            new DropInfo(1012510, 1), // Sasha's Delicious Bread
            new DropInfo(1012511, 1), // Cleaning Mask
            new DropInfo(1052870, 1), // Cadet Corps Uniform
            new DropInfo(1073027, 1), // ODM Gear
            new DropInfo(1102786, 1), // Titan Escape
            new DropInfo(1102787, 1), // Scout Regiment Cape
            new DropInfo(1112177, 1), // Attack on Titan Label Ring
            new DropInfo(1112289, 1), // Attack on Titan Word Bubble Ring
            new DropInfo(1702556, 1), // Blade
            new DropInfo(1702557, 1), // Duster

            // Re:ZERO
            new DropInfo(1004858, 1), // Puck's Hat
            new DropInfo(1004859, 1), // Felt's Ribbon
            new DropInfo(1004860, 1), // Elsa's Flower Accessory
            new DropInfo(1053104, 1), // Emilia Overall Outfit
            new DropInfo(1053105, 1), // Subaru's Track Suit
            new DropInfo(1053106, 1), // Felt Overall Outfit
            new DropInfo(1053107, 1), // Priscilla's Dress
            new DropInfo(1073177, 1), // Emilia's Heels
            new DropInfo(1073178, 1), // Subaru's Sneakers
            new DropInfo(1073179, 1), // Felt's Gloves
            new DropInfo(1073180, 1), // Priscilla's Heels
            new DropInfo(1082712, 1), // Felt's Shoes
            new DropInfo(1102966, 1), // Puck's Cape

            // Eva
            new DropInfo(1005081, 1), // Asuka Hat
            new DropInfo(1005082, 1), // 4th Angel Hat
            new DropInfo(1053278, 1), // Asuka Plugsuit
            new DropInfo(1053279, 1), // Rei Plugsuit
            new DropInfo(1103071, 1), // AT Field

            // CCS CC
            new DropInfo(1005138, 1), // Sakura's Hair Ornament
            new DropInfo(1005176, 1), // Kero-chan Hood
            new DropInfo(1005177, 1), // Sakura Battle Costume Hat
            new DropInfo(1005178, 1), // Perched Kero-chan
            new DropInfo(1005179, 1), // Perched Sakura-chan
            new DropInfo(1005180, 1), // Perched Syaoran-kun
            new DropInfo(1005181, 1), // Perched Tomoyo-chan
            new DropInfo(1005182, 1), // Syaoran Battle Costume Hat
            new DropInfo(1053321, 1), // Kero-chan Bodysuit
            new DropInfo(1053322, 1), // Sakura Battle Costume Outfit
            new DropInfo(1053323, 1), // Syaoran Battle Costume Outfit
            new DropInfo(1053324, 1), // Tomoeda Middle School Female Winter Uniform
            new DropInfo(1053325, 1), // Tomoeda Middle School Male Winter Uniform
            new DropInfo(1073284, 1), // Sakura Battle Costume Shoes
            new DropInfo(1073285, 1), // Tomoeda Middle School Male Shoes
            new DropInfo(1073286, 1), // Tomoeda Middle School Female Shoes
            new DropInfo(1073287, 1), // Syaoran Battle Costume Shoes
            new DropInfo(1103112, 1), // Superfan Tomoyo

            // Isekai Quartet
            new DropInfo(1005406, 1), // Albedo Hairdo Hat
            new DropInfo(1005407, 1), // Megumin Hairdo Hat
            new DropInfo(1005408, 1), // Shalltear Hairdo Hat
            new DropInfo(1012701, 1), // Megumin Eye Patch
            new DropInfo(1053480, 1), // Rem Outfit
            new DropInfo(1053481, 1), // Albedo Outfit
            new DropInfo(1053482, 1), // Shalltear Outfit
            new DropInfo(1053483, 1), // Aqua Outfit
            new DropInfo(1053484, 1), // Megumin Outfit
            new DropInfo(1053485, 1), // Tanya Outfit
            new DropInfo(1073383, 1), // Rem Shoes
            new DropInfo(1073384, 1), // Aqua Shoes
            new DropInfo(1073385, 1), // Megumin Shoes
            new DropInfo(1073386, 1), // Tanya Shoes
            new DropInfo(1702949, 1)  // Ains Weapon
    );

    // Pyonta - Collab (other)
    public static final Set<DropInfo> SSB_INFOS_4 = Util.makeSet(
            // Maple x Mabi x DFO
            new DropInfo(1003842, 1), // Succubus Hat
            new DropInfo(1003844, 1), // Nao Hat
            new DropInfo(1003845, 1), // Lorna and Pan Hat
            new DropInfo(1003846, 1), // Danjin Hat
            new DropInfo(1003847, 1), // Slayer Wig
            new DropInfo(1003860, 1), // Seria Wig
            new DropInfo(1051349, 1), // Succubus Dress
            new DropInfo(1072816, 1), // Succubus Shoes
            new DropInfo(1082525, 1), // Succubus Gloves
            new DropInfo(1102554, 1), // Succubus Wings

            // PSY
            new DropInfo(1003963, 1), // PSY Hat
            new DropInfo(1022207, 1), // PSY Sunglasses
            new DropInfo(1052664, 1), // Gentleman Bow Tie Suit
            new DropInfo(1052665, 1), // Gentleman Suit
            new DropInfo(1072864, 1), // PSY Shoes

            // LINE FRIENDS
            new DropInfo(1005314, 1), // CONY Hood
            new DropInfo(1005316, 1), // LEONARD Hood
            new DropInfo(1005317, 1), // SALLY Hood
            new DropInfo(1005318, 1), // Snoozing SALLY Topper
            new DropInfo(1053403, 1), // CONY Onesie
            new DropInfo(1053405, 1), // LEONARD Onesie
            new DropInfo(1053406, 1), // SALLY Onesie
            new DropInfo(1082735, 1), // CONY Gloves
            new DropInfo(1082737, 1), // LEONARD Gloves
            new DropInfo(1082738, 1), // SALLY Gloves
            new DropInfo(1103170, 1), // Peek-a-Boo CONY
            new DropInfo(1115074, 1), // BROWN Chat Ring
            new DropInfo(1115075, 1), // CONY Chat Ring
            new DropInfo(1115076, 1), // LEONARD Chat Ring
            new DropInfo(1115077, 1), // CHOCO Chat Ring
            new DropInfo(1115078, 1), // SALLY Chat Ring
            new DropInfo(1115163, 1), // BROWN Label Ring
            new DropInfo(1115164, 1), // CONY Label Ring
            new DropInfo(1115165, 1), // LEONARD Label Ring
            new DropInfo(1115166, 1), // CHOCO Label Ring
            new DropInfo(1115167, 1), // SALLY Label Ring
            new DropInfo(1702894, 1), // Ice Cream CONY
            new DropInfo(1702896, 1), // LEONARD’s Leafy Greens
            new DropInfo(1702897, 1), // SALLY’s Skateboard
            new DropInfo(1702898, 1), // Gamboling CONY
            new DropInfo(1702899, 1), // Valiant EDWARD

            // Crazy Arcade
            new DropInfo(1005366, 1), // Bazzi Hat
            new DropInfo(1005367, 1), // Dao Hat
            new DropInfo(1053442, 1), // Bazzi Outfit
            new DropInfo(1053443, 1), // Dao Outfit
            new DropInfo(1073358, 1), // Bazzi Shoes
            new DropInfo(1073359, 1), // Dao Shoes
            new DropInfo(1082742, 1), // Bazzi Gloves
            new DropInfo(1082743, 1), // Dao Gloves

            // BTS
            new DropInfo(1005649, 1), // Mikrokosmos
            new DropInfo(1005651, 1), // HOPE
            new DropInfo(1005652, 1), // V Mask
            new DropInfo(1005653, 1), // Light of the World Tree
            new DropInfo(1005654, 1), // Piggybacking Wonky
            new DropInfo(1005655, 1), // Heart's Desire
            new DropInfo(1005656, 1), // Eclipse Feather
            new DropInfo(1005658, 1), // Mellow Purple
            new DropInfo(1032322, 1), // Black Chandelier
            new DropInfo(1042422, 1), // Purple Poem
            new DropInfo(1053640, 1), // Love Swan
            new DropInfo(1062282, 1), // Deep Purple
            new DropInfo(1073489, 1), // Silent Night
            new DropInfo(1073490, 1), // Purple Breeze
            new DropInfo(1082751, 1), // Holy Mystic
            new DropInfo(1103304, 1), // Bombie
            new DropInfo(1103305, 1), // Swan Serenade
            new DropInfo(1115210, 1), // Black Swan Chat Ring
            new DropInfo(1115311, 1), // Black Swan Label Ring
            new DropInfo(1703049, 1), // Last Feather
            new DropInfo(1703051, 1), // Army Bomb
            new DropInfo(5010188, 1),  // Onyx Swan

            // BUGCAT CAPOO
            new DropInfo(1005729, 1), // BUGCAT CAPOO on the Head Hat
            new DropInfo(1005730, 1), // BUGCAT CAPOO Hat
            new DropInfo(1053681, 1), // BUGCAT CAPOO Outfit
            new DropInfo(1115218, 1), // BUGCAT CAPOO Chat Ring
            new DropInfo(1115319, 1), // BUGCAT CAPOO Label Ring
            new DropInfo(1703062, 1), // Long Long BUGCAT CAPOO
            new DropInfo(1703063, 1), // Muscle BUGCAT CAPOO
            new DropInfo(5010191, 1), // With CAPOO!

            // Archery Club Set
			new DropInfo(1005884, 1), // Glorious Face
			new DropInfo(1005893, 1), // Fighting Hat
			new DropInfo(1053781, 1), // Fighting Uniform
			new DropInfo(1073588, 1), // Fighting Shoes
			new DropInfo(1703135, 1)  // Impressive Arrow


    );

    // Pyonta - Customizer
    public static final Set<DropInfo> SSB_INFOS_11 = Util.makeSet(
            // Garden Sage Outfit Set
        		    new DropInfo(1005897, 1), // Faded Light
            		new DropInfo(1005898, 1), // Covered Light
       		        new DropInfo(1050603, 1), // Sage Ascension
            		new DropInfo(1051676, 1), // Fairy Flower
           		    new DropInfo(1070123, 1), // Sage Ego
            		new DropInfo(1071139, 1), // Fairy Ego
            		new DropInfo(1103385, 1), // Garden Scent
            		new DropInfo(1703141, 1), // Thousand-Year Promise


            // Revenant Hunter Set
                    new DropInfo(1005899, 1), // Sign of Encroachment
            		new DropInfo(1050604, 1), // Slayer Black Clothes
            		new DropInfo(1051677, 1), // Hunter Black Clothes
            		new DropInfo(1073593, 1), // Immortal Walk
            		new DropInfo(1103386, 1), // Shouldering Nightmare
            		new DropInfo(1703142, 1), // Eastern Black Blade


            // Cyber Planet Set
        	        new DropInfo(1005900, 1), // Cyber Rabbit Mask
            		new DropInfo(1050605, 1), // Last Survivor
            		new DropInfo(1051678, 1), // Ultimate Survivor
           		    new DropInfo(1073594, 1), // Survivor Military Boots
            		new DropInfo(1103387, 1), // Battle Rifle
            		new DropInfo(1703143, 1), // Survivor Bangle


            // Happy Birthday Set
                    new DropInfo(1005901, 1), // Star Cone Hat
            		new DropInfo(1050606, 1), // Exciting Birthday
            		new DropInfo(1051679, 1), // Joyful Birthday
            		new DropInfo(1073595, 1), // Birthday Socks
            		new DropInfo(1103388, 1), // I Life Presents
            		new DropInfo(1703144, 1), // Birthday Popper


            // Retro Magic Girl and Boy Set
            	    new DropInfo(1005902, 1), // Lyrical Pink Ribbon
            		new DropInfo(1005903, 1), // Lyrical Blue Ribbon
            		new DropInfo(1050607, 1), // Retro Magic Boy Suit
            		new DropInfo(1051680, 1), // Retro Magic Girl Dress
            		new DropInfo(1070124, 1), // Magical Blue Shoes
            		new DropInfo(1071140, 1), // Magical Pink Shoes
            		new DropInfo(1103389, 1), // Logging Into Magic World
            		new DropInfo(1703145, 1), // Heart-Dangling Broomstick


            // Starry Night Punisher Set
          	     	new DropInfo(1005904, 1), // Starlight Shadow
            		new DropInfo(1050608, 1), // Starry Night Ruling
           		    new DropInfo(1051681, 1), // Starry Night Judgment
            		new DropInfo(1070125, 1), // Punisher Will
            		new DropInfo(1071141, 1), // Judgment Will
            		new DropInfo(1103390, 1), // Banquet of Light
            		new DropInfo(1703146, 1), // Starry Night Punisher


            // Rock Spirit Support Set
            		new DropInfo(1005905, 1), // Rock Spirit Beret
            		new DropInfo(1053800, 1), // Rock Spirit Raincoat
            		new DropInfo(1073601, 1), // Rock Spirit Boots
            		new DropInfo(1103395, 1), // Rock Spirit Glitter
            		new DropInfo(1703150, 1), // Rock Spirit Glowstick


            // Go! Puppy Car Set
            	  	new DropInfo(1005911, 1), // Puppy Toy Cap
            		new DropInfo(1005912, 1), // Puppy Neon Cap
            		new DropInfo(1050609, 1), // Kid Mechanic
            		new DropInfo(1051682, 1), // Kid Technician
            		new DropInfo(1073602, 1), // Toy Roller Skates
            		new DropInfo(1103396, 1), // Stop? Go!
            		new DropInfo(1703151, 1), // Go! Puppy Car


            // Ink Drawing Set
            		new DropInfo(1005913, 1), // Ink-colored Wide-brimmed Hat
            		new DropInfo(1005914, 1), // Ink-colored Veil
            		new DropInfo(1050610, 1), // Pure Dignity
            		new DropInfo(1051683, 1), // Noble Dignity
            		new DropInfo(1073603, 1), // Welcome Guest
            		new DropInfo(1103397, 1), // Plum Flower Painting
            		new DropInfo(1703152, 1), // Upright Heart


            // I'm a Rock Star Today! Set
            		new DropInfo(1005915, 1), // Skull Hairband
            		new DropInfo(1005916, 1), // Skull Bunny Ears
            		new DropInfo(1050611, 1), // Sweet Punk
            		new DropInfo(1051684, 1), // Cutie Punk
            		new DropInfo(1070126, 1), // Sweet Punk Boots
            		new DropInfo(1071142, 1), // Cutie Punk Shoes
            		new DropInfo(1103398, 1), // Rock Star Soul
            		new DropInfo(1703153, 1), // I'm a Rock Star Today!


            // Gray City Shiny Star Set
            		new DropInfo(1005917, 1), // Glory of Star
            		new DropInfo(1050612, 1), // Grey City Star
            		new DropInfo(1051685, 1), // Grey City Light
            		new DropInfo(1070127, 1), // Star Circuit
            		new DropInfo(1071143, 1), // Light Circuit
            		new DropInfo(1103399, 1), // City Stars
            		new DropInfo(1703154, 1), // Star Pride


            // Night Sky Ink Set
            		new DropInfo(1005918, 1), // White Wide-brimmed Hat
            		new DropInfo(1005919, 1), // Snow-white Tiger
            		new DropInfo(1050613, 1), // Moonlight Sentiment
            		new DropInfo(1051686, 1), // Starlight Sentiment
            		new DropInfo(1073604, 1), // Night Sky Lake
            		new DropInfo(1103400, 1), // Night Silk Overcoat
            		new DropInfo(1703155, 1)  // Midnight Ink
    );


    // Pyonta - Dreamy
    public static final Set<DropInfo> SSB_INFOS_6 = Util.makeSet(
            // Evening Orchid Set
            new DropInfo(1004540, 1), // Evening Orchid Hoodie
            new DropInfo(1052948, 1), // Evening Orchid
            new DropInfo(1102837, 1), // Dreams Within Dreams
            new DropInfo(1702594, 1), // Sweepy Orchid

            // Lachelein Fantasia Set
            new DropInfo(1004845, 1), // Midnight Legacy
            new DropInfo(1004846, 1), // Midnight Bloom
            new DropInfo(1050435, 1), // Midnight Suit
            new DropInfo(1051503, 1), // Pitch Dark Poem
            new DropInfo(1073170, 1), // Midnight Steps
            new DropInfo(1073171, 1), // Midnight Tiptoes
            new DropInfo(1102959, 1), // Sultry Dream Wings
            new DropInfo(1102960, 1), // Pure Dream Wings
            new DropInfo(1702715, 1), // Lachelein Fantasia

            // Doll's Nightmare Set
            new DropInfo(1005065, 1), // Drifting Heart Hair
            new DropInfo(1005066, 1), // Serene Heart Hair
            new DropInfo(1053257, 1), // Doll's Nightwear
            new DropInfo(1073254, 1), // Half Bandage
            new DropInfo(1103067, 1), // Bound by Dreams
            new DropInfo(1702804, 1), // Take Me Too!

            // Flame Detective Set
            new DropInfo(1005231, 1), // Detective Chappeau
            new DropInfo(1005232, 1), // Detective Millinery
            new DropInfo(1053352, 1), // Veritas Attire
            new DropInfo(1053351, 1), // Cutie Pie Coat
            new DropInfo(1073308, 1), // Cutie Pie Trainers
            new DropInfo(1103138, 1), // Detective's Key
            new DropInfo(1702865, 1), // Reflection of Truth

            // Frilly/Silly Pajama Sets
            new DropInfo(1005275, 1), // Frilly Pink Pajama Hat (F)
            new DropInfo(1005276, 1), // Silly Blue Pajama Hat (M)
            new DropInfo(1012679, 1), // Pajama Eye Mask
            new DropInfo(1053377, 1), // Frilly Pink Pajamas (F)
            new DropInfo(1053378, 1), // Silly Blue Pajamas (M)
            new DropInfo(1073324, 1), // Frilly Pink Pajama Slippers (F)
            new DropInfo(1073325, 1), // Silly Blue Pajama Slippers (M)
            new DropInfo(1702883, 1), // Pajama Party

            // Wish Fulfiller Set
            new DropInfo(1005324, 1), // Wish Fulfiller Hat
            new DropInfo(1050516, 1), // Wish Fulfiller Uniform [M]
            new DropInfo(1051586, 1), // Wish Fulfiller Uniform [F]
            new DropInfo(1070110, 1), // Snappy Delivery Shoes [M]
            new DropInfo(1071126, 1), // Snappy Delivery Shoes [F]
            new DropInfo(1103175, 1), // Speedy Petite Wings
            new DropInfo(1702905, 1), // Wish Fulfiller Crossbody Tote

            // Sleepy Kitty/Bunny Sets
            new DropInfo(1005506, 1), // Sleepy Kitty
            new DropInfo(1005507, 1), // Sleepy Bunny
            new DropInfo(1032315, 1), // Dreamy Glow
            new DropInfo(1053546, 1), // Sweet Dreams
            new DropInfo(1053547, 1), // Sleep Tight
            new DropInfo(1103244, 1), // Dreamland

            // Outsized Sailor Coats/Drowsy Rabbit Series
            // Neckerchief Fascinators:
            new DropInfo(1005283, 1), // Black
            new DropInfo(1005284, 1), // Navy
            new DropInfo(1005285, 1), // Purple
            new DropInfo(1005286, 1), // Red
            new DropInfo(1005287, 1), // Ivory
            // Outsized Sailor Coats:
            new DropInfo(1053385, 1), // Brown & Black
            new DropInfo(1053386, 1), // Black & Ivory
            new DropInfo(1053387, 1), // Navy & White
            new DropInfo(1053388, 1), // White & Purple
            new DropInfo(1053389, 1), // White & Red
            // Plaid Pashminas:
            new DropInfo(1103158, 1), // Brown
            new DropInfo(1103159, 1), // Green
            new DropInfo(1103160, 1), // Pink
            new DropInfo(1103161, 1), // Purple
            new DropInfo(1103162, 1), // Red
            new DropInfo(1103163, 1), // Fuschia
            new DropInfo(1103164, 1), // Ivory

            new DropInfo(1073321, 1), // Throwback Loafers
            new DropInfo(1115081, 1), // Drowsy Rabbit Chat Ring
            new DropInfo(1115170, 1), // Drowsy Rabbit Label Ring
            new DropInfo(1702888, 1), // Drowsy Bunny

            // Coral Memory Set
            new DropInfo(1005564, 1), // Wave Dance
            new DropInfo(1050556, 1), // Aquamarine Heaving Sea
            new DropInfo(1051626, 1), // Aquamarine Torrent
            new DropInfo(1073455, 1), // Memory Strand
            new DropInfo(1103266, 1), // Swimming Light
            new DropInfo(1703014, 1), // Coral Song

            // Blue Nightmare Set
            new DropInfo(1005647, 1), // Blue Nightmare Fedora
            new DropInfo(1005648, 1), // Blue Nightmare Hairpin
            new DropInfo(1050569, 1), // Blue Nightmare Suit
            new DropInfo(1051641, 1), // Blue Nightmare Dress
            new DropInfo(1073488, 1), // Blue Nightmare Shoes
            new DropInfo(1703048, 1), // Nightmare's Bloom

            // Master Maze Set
            new DropInfo(1000115, 1), // Dusky Puzzle King Wig
            new DropInfo(1001137, 1), // Dusky Clue Queen Wig
            new DropInfo(1005619, 1), // Weight of the Trial
            new DropInfo(1012729, 1), // Labyrinth Memory
            new DropInfo(1050566, 1), // Lord of the Labyrinth
            new DropInfo(1051638, 1), // Lady of the Labyrinth
            new DropInfo(1073484, 1), // Solution Socks
            new DropInfo(1103301, 1), // Escape Key
            new DropInfo(1703043, 1), // Labyrinth's Delirium

            new DropInfo(1012620, 1), // Squishy Face
            new DropInfo(1012719, 1), // Eileen Blusher
            new DropInfo(1053614, 1)  // Prong Loose Fit
    );

    // Pyonta - Edgy
    public static final Set<DropInfo> SSB_INFOS_7 = Util.makeSet(
            // Shadow Set
            new DropInfo(1003934, 1), // Shadow Hood
            new DropInfo(1012412, 1), // Bloody Tears
            new DropInfo(1050305, 1), // Bloody Leo
            new DropInfo(1051373, 1), // Bloody Jeanne
            new DropInfo(1070057, 1), // Shadow Sandals
            new DropInfo(1071074, 1), // Shadow Garter
            new DropInfo(1102605, 1), // Shadow Peacemaker
            new DropInfo(1702473, 1), // Shadow Executor

            // Schwarzer Set
            new DropInfo(1004535, 1), // Schwarzer Beret
            new DropInfo(1052946, 1), // Schwarzer Cross
            new DropInfo(1073074, 1), // Schwarzer Boots
            new DropInfo(1102835, 1), // Schwarzer Coat

            // Bloody Rose Set
            new DropInfo(1000091, 1), // Bloody Guardian Hood
            new DropInfo(1001113, 1), // Bloody Veil
            new DropInfo(1012556, 1), // Vampire Eyes (Ruby)
            new DropInfo(1050392, 1), // Bloody Guardian
            new DropInfo(1051463, 1), // Bloody Bride
            new DropInfo(1070073, 1), // Bloody Sneakers
            new DropInfo(1071090, 1), // Bloody Heels
            new DropInfo(1102869, 1), // Bloody Rose
            new DropInfo(1702631, 1), // Bloody Fairytale

            // Umbral Set
            new DropInfo(1004720, 1), // Umbral Cap
            new DropInfo(1032262, 1), // Umbral Earrings
            new DropInfo(1053022, 1), // Umbral Attire
            new DropInfo(1053023, 1), // Umbral Coat
            new DropInfo(1073132, 1), // Umbral Shoes
            new DropInfo(1073133, 1), // Umbral Boots
            new DropInfo(1102912, 1), // Umbral Cloak

            // Dark Musician Set
            new DropInfo(1004834, 1), // Dark Musician Headphones
            new DropInfo(1053091, 1), // Dark Musician Coat
            new DropInfo(1073167, 1), // Dark Musician Shoes
            new DropInfo(1102956, 1), // Dark Musician Scarf

            // Falling Darkness Set
            new DropInfo(1005004, 1), // Falling Darkness Hat
            new DropInfo(1053221, 1), // Falling Darkness Dress
            new DropInfo(1053222, 1), // Falling Darkness Suit
            new DropInfo(1103038, 1), // Falling Darkness Cape Type A [F]
            new DropInfo(1103042, 1), // Falling Darkness Cape Type B [M]
            new DropInfo(1115048, 1), // Falling Darkness Chat Ring
            new DropInfo(1115137, 1), // Falling Darkness Label Ring

            // Master Blood Set
            new DropInfo(1000096, 1), // Moonlit Night Hair
            new DropInfo(1001119, 1), // Snowy Night Hair
            new DropInfo(1005037, 1), // Crimson Fate Mark
            new DropInfo(1005038, 1), // Crimson Fate Rosette
            new DropInfo(1012633, 1), // Lost in Thought
            new DropInfo(1050472, 1), // Crimson Fate Topcoat [M]
            new DropInfo(1051539, 1), // Crimson Fate Topcoat [F]
            new DropInfo(1070091, 1), // Crimson Fate Shoes [M]
            new DropInfo(1071108, 1), // Crimson Fate Shoes [F]
            new DropInfo(1103053, 1), // Crimson Fate Seal
            new DropInfo(1702786, 1), // Blood Oath Weapon

            // One-Eyed Grim Reaper Set
            new DropInfo(1005222, 1), // One-Eyed Grim Reaper Hat
            new DropInfo(1012661, 1), // Reaper's Face
            new DropInfo(1053346, 1), // Reaper's Robe
            new DropInfo(1103131, 1), // Reaper's Cape
            new DropInfo(1115079, 1), // Grim Reaper Chat Ring
            new DropInfo(1115168, 1), // Grim Reaper Label Ring
            new DropInfo(1702861, 1), // One-Eyed Grim Reaper Weapon

            // Ferocious Bunny Set
            new DropInfo(1005327, 1), // Cool Bunny Ears
            new DropInfo(1012684, 1), // Goth Bunny
            new DropInfo(1053416, 1), // Ferocious Bunny Outfit
            new DropInfo(1073342, 1), // Ferocious Rabbit Shoes
            new DropInfo(1103177, 1), // Ferocious Devil Wings
            new DropInfo(1702907, 1), // Fiery Trident

            // Jester Spirit Set
            new DropInfo(1005585, 1), // Jester Spirit Hat (M)
            new DropInfo(1005586, 1), // Jester Spirit Hat (F)
            new DropInfo(1053617, 1), // Jester Spirit Outfit (M)
            new DropInfo(1053618, 1), // Jester Spirit Outfit (F)
            new DropInfo(1073464, 1), // Jester Spirit Shoes
            new DropInfo(1103285, 1), // aa [Jester Spirit Cape]
            new DropInfo(1703024, 1), // Jester Spirit Weapon

            // Mystery Club Set
            new DropInfo(1005609, 1), // Enigmatic Clue Cap
            new DropInfo(1005610, 1), // Enigmatic Spell Cap
            new DropInfo(1050562, 1), // Clue King Garb
            new DropInfo(1051634, 1), // Clue Queen Garb
            new DropInfo(1073475, 1), // Shoes of Mystery
            new DropInfo(1103293, 1), // Mysterious Fog
            new DropInfo(1703037, 1), // Mace of Mystery

            // Darkness Chaser Set
            new DropInfo(1005798, 1), // Darkness Chaser Hat
            new DropInfo(1022303, 1), // Darkness Chaser Eye Accessory
            new DropInfo(1053720, 1), // Darkness Chaser Suit
            new DropInfo(1053721, 1), // Darkness Chaser Dress
            new DropInfo(1073543, 1), // Darkness Chaser Shoes
            new DropInfo(1073544, 1), // Darkness Chaser Boots
            new DropInfo(1103340, 1), // Darkness Chaser Cape
            new DropInfo(1703092, 1), // Darkness Chaser Weapon

            new DropInfo(1012636, 1), // Dark Silence
            new DropInfo(1103039, 1)  // Black Shadow Cape
    );

    // Pyonta - Elements
    public static final Set<DropInfo> SSB_INFOS_8 = Util.makeSet(
            // Black Scout Set
            new DropInfo(1004797, 1), // Decorated Scout Beret
            new DropInfo(1004798, 1), // Scout Ribbon Beret
            new DropInfo(1050430, 1), // Black Boy Scout
            new DropInfo(1051498, 1), // Black Girl Scout
            new DropInfo(1073152, 1), // Black Scout Shoes
            new DropInfo(1102936, 1), // Forest Whisper
            new DropInfo(1702696, 1), // Silver Wolf

            // Soft Snow Set
            new DropInfo(1005092, 1), // Soft Snow Hat
            new DropInfo(1050481, 1), // Snow Blossom Coat [M]
            new DropInfo(1051548, 1), // Snow Blossom Coat [F]
            new DropInfo(1073258, 1), // Soft Snow Slippers
            new DropInfo(1103074, 1), // First Snow
            new DropInfo(1702810, 1), // Soft Snow

            // Heavenly Prayer Set
            new DropInfo(1005236, 1), // Heavenly Prayer Hat
            new DropInfo(1053353, 1), // Heavenly Prayer Outfit (F)
            new DropInfo(1053354, 1), // Heavenly Prayer Outfit (M)
            new DropInfo(1073310, 1), // Heavenly Prayer Shoes
            new DropInfo(1103141, 1), // Heavenly Prayer Cape
            new DropInfo(1702868, 1), // Heavenly Prayer Weapon

            // Necrotic Set
            new DropInfo(1005260, 1), // Gilded Cap
            new DropInfo(1005261, 1), // Glided Veil
            new DropInfo(1050505, 1), // Necrotic [M]
            new DropInfo(1051575, 1), // Necrotic [F]
            new DropInfo(1070105, 1), // Necrotic Boots [M]
            new DropInfo(1071121, 1), // Necrotic Shoes [F]
            new DropInfo(1103148, 1), // Necrotic Flow
            new DropInfo(1702876, 1), // Necrotic Whip

            // Cobalt Filigree Set
            new DropInfo(1005277, 1), // Cobalt Filigree Comb
            new DropInfo(1005278, 1), // Cobalt Filigree Pin
            new DropInfo(1012680, 1), // Cobalt Filigree Face Accessory (F)
            new DropInfo(1012681, 1), // Cobalt Filigree Face Accessory (M)
            new DropInfo(1053379, 1), // Cobalt Filigree Outfit [F]
            new DropInfo(1053380, 1), // Cobalt Filigree Outfit [M]
            new DropInfo(1073326, 1), // Cobalt Filigree Mary Janes
            new DropInfo(1073327, 1), // Cobalt Filigree Oxfords
            new DropInfo(1103155, 1), // Cobalt Filigree Cape
            new DropInfo(1702884, 1), // Cobalt Filigree

            // Blue Flame Hellion Set
            new DropInfo(1005335, 1), // Blue Flame Hellion Hat
            new DropInfo(1012686, 1), // Blue Flame Hellion Face Accessory
            new DropInfo(1053422, 1), // Blue Flame Hellion Outfit
            new DropInfo(1073347, 1), // Blue Flame Hellion Shoes
            new DropInfo(1103181, 1), // Blue Flame Hellion Cape
            new DropInfo(1702917, 1), // Blue Flame Whip

            // Cherry Blossom Set
            new DropInfo(1005354, 1), // Cherry Blossom Candy Cap
            new DropInfo(1053435, 1), // Cherry Blossom Rain Coat
            new DropInfo(1073355, 1), // Cherry Blossom Boots
            new DropInfo(1103185, 1), // Rain of Blossoms
            new DropInfo(1702918, 1), // Cherry Blossom Umbrella

            // Master Shadow Set
            new DropInfo(1000102, 1), // Flawlessness of the Night
            new DropInfo(1001125, 1), // Gracefulness of the Night
            new DropInfo(1005356, 1), // Infatuation Fragment
            new DropInfo(1012689, 1), // Hollow Memories
            new DropInfo(1050520, 1), // Lord of Shadows
            new DropInfo(1051589, 1), // Castellan of Shadows
            new DropInfo(1070111, 1), // Daybreak Advance
            new DropInfo(1071127, 1), // Daybreak March
            new DropInfo(1103187, 1), // Bond of Destiny
            new DropInfo(1702919, 1), // Light of the Dawn

            // Exorcist Set
            new DropInfo(1005418, 1), // Exorcist Hat
            new DropInfo(1053493, 1), // Exorcist Outfit
            new DropInfo(1073363, 1), // Exorcist Shoes
            new DropInfo(1103220, 1), // Exorcist Cape
            new DropInfo(1702955, 1), // Exorcist

            // Fire Elementalist Set
            new DropInfo(1005458, 1), // Flame Crown
            new DropInfo(1053516, 1), // Ignis
            new DropInfo(1073402, 1), // Flame Walkers
            new DropInfo(1103232, 1), // Flame Circle
            new DropInfo(1702970, 1), // Ignite

            // Havoc Set
            new DropInfo(1005393, 1), // Havoc Horns
            new DropInfo(1053464, 1), // Havoc's Uniform
            new DropInfo(1103210, 1), // Havoc Wings
            new DropInfo(1702943, 1), // Havoc's Heavy Sword

            // Sailor's Song Set
            new DropInfo(1005538, 1), // Sailor's Song Hat
            new DropInfo(1053580, 1), // Sailor's Song Outfit [M]
            new DropInfo(1053581, 1), // Sailor's Song Outfit [F]
            new DropInfo(1073442, 1), // Sailor's Song Shoes
            new DropInfo(1103254, 1), // Sailor's Song Cape
            new DropInfo(1703001, 1), // Sailor's Song Weapon

            // Night Sky set
            new DropInfo(1005831, 1), // Boon from a Twinkle Star
            new DropInfo(1005832, 1), // Blessing from a Twinkle Star
            new DropInfo(1012746, 1), // Twinkle Star Face Accessory
            new DropInfo(1053746, 1), // Warm Starlight Outfit
            new DropInfo(1053747, 1), // Graceful Starlight Dress
            new DropInfo(1073559, 1), // Shining Star Shoes
            new DropInfo(1073560, 1), // Glowing Star Shoes
            new DropInfo(1703112, 1), // Guide of the Night Sky Weapon

            new DropInfo(1053375, 1), // Blue Flame Magician Robe
            new DropInfo(1103233, 1), // Mana Frenzy
            new DropInfo(1115068, 1), // Frosty Cherry Blossom Chat Ring
            new DropInfo(1115157, 1), // Snowy Cherry Blossom Label Ring
            new DropInfo(1702875, 1), // Frostblade Weapon
            new DropInfo(1702912, 1), // Demonic Sword
            new DropInfo(1702980, 1)  // Icy Seal
    );

    // Pyonta - Fairytale
    public static final Set<DropInfo> SSB_INFOS_9 = Util.makeSet(
            // Toy Prince Set
            new DropInfo(1003084, 1), // Royal Crown
            new DropInfo(1052412, 1), // Toy Prince

            // Odette/Odile Sets
            new DropInfo(1003951, 1), // Odette Tiara
            new DropInfo(1003952, 1), // Odile Tiara
            new DropInfo(1051374, 1), // Odette Tutu
            new DropInfo(1051375, 1), // Odile Tutu
            new DropInfo(1072857, 1), // Odette Ballet Slippers
            new DropInfo(1072858, 1), // Odile Ballet Slippers

            // Wonder Kitty Set
            new DropInfo(1004541, 1), // Tea Party Ribbon
            new DropInfo(1050370, 1), // Mint Kitty Tea Party [M]
            new DropInfo(1051439, 1), // Mint Kitty Tea Party [F]
            new DropInfo(1073075, 1), // Mint Kitty Slippers
            new DropInfo(1102836, 1), // Wonder Kitty
            new DropInfo(1702595, 1), // Mint Kitty Tea Time

            // Mousy Bunny Set
            new DropInfo(1004568, 1), // Mousy Bunny Hat
            new DropInfo(1050372, 1), // Mousy Bunny Trousers
            new DropInfo(1051441, 1), // Mousy Bunny Romper
            new DropInfo(1073079, 1), // Mousy Bunny Jelly Flops
            new DropInfo(1102844, 1), // Mousy Bunny Bouncy Buddies
            new DropInfo(1702607, 1), // Cheese 'n' Carrots Stick

            // Just Kitten Set
            new DropInfo(1004757, 1), // Cat in a Hat
            new DropInfo(1012572, 1), // Little Kitten Face Accessory
            new DropInfo(1053045, 1), // Kitty Overall (Male)
            new DropInfo(1053046, 1), // Winged Kitty Dress (Female)
            new DropInfo(1073145, 1), // Kitty Follower
            new DropInfo(1082689, 1), // Paw Gloves
            new DropInfo(1102927, 1), // Windy Paw Scarf

            // Strawberry Bon Bon Set
            new DropInfo(1004774, 1), // Bunny Bon Bon
            new DropInfo(1004775, 1), // Lace Berry
            new DropInfo(1050424, 1), // Dot Bon Bon
            new DropInfo(1051492, 1), // Dot Berry
            new DropInfo(1073148, 1), // Berry Shoes
            new DropInfo(1102928, 1), // Sweet Berry
            new DropInfo(1702687, 1), // Strawberry Bon Bon

            // Alicorn Set
            new DropInfo(1004872, 1), // Alicorn Hat
            new DropInfo(1053114, 1), // Alicorn Costume
            new DropInfo(1102973, 1), // Trace of the Alicorn

            // Feather Messenger Set
            new DropInfo(1005003, 1), // Feather Messenger Hat
            new DropInfo(1053219, 1), // Feather Messenger Outfit (F)
            new DropInfo(1053220, 1), // Feather Messenger Outfit (M)
            new DropInfo(1103037, 1), // Feather Messenger Cape
            new DropInfo(1702784, 1), // Feather Messenger Weapon

            // Enchanting Aria Set
            new DropInfo(1005043, 1), // Cat Diamond
            new DropInfo(1050474, 1), // Tamino's Aria
            new DropInfo(1051541, 1), // Pamina's Aria
            new DropInfo(1070093, 1), // Music Stairs
            new DropInfo(1071110, 1), // Music Stairs
            new DropInfo(1103055, 1), // Magic Bandmaster
            new DropInfo(1702795, 1), // Enchanting Flute

            // Homeless Cat Set
            new DropInfo(1005139, 1), // Homeless Cat Hat
            new DropInfo(1053301, 1), // Homeless Cat Outfit
            new DropInfo(1073270, 1), // Homeless Cat Shoes
            new DropInfo(1082728, 1), // Homeless Cat Gloves
            new DropInfo(1103092, 1), // Homeless Cat Cape
            new DropInfo(1702825, 1), // Homeless Cat Weapon

            // Delinquent Bear Set
            new DropInfo(1005237, 1), // Delinquent Bear Hat
            new DropInfo(1053355, 1), // Delinquent Bear Outfit
            new DropInfo(1073312, 1), // Delinquent Bear Shoes
            new DropInfo(1082731, 1), // Delinquent Bear Gloves

            // Little Star Cocoon Set
            new DropInfo(1005254, 1), // Little Star Cocoon Hat
            new DropInfo(1053367, 1), // Little Star Cocoon Outfit
            new DropInfo(1073317, 1), // Little Star Cocoon Anklet
            new DropInfo(1702874, 1), // Little Star Cocoon Weapon

            // Fox Fire Set
            new DropInfo(1005352, 1), // Fox Fire Ears
            new DropInfo(1012687, 1), // Fox Fire Grin
            new DropInfo(1053434, 1), // Fox Fire Shirt
            new DropInfo(1073354, 1), // Fox Fire Anklet
            new DropInfo(1082741, 1), // Fox Fire Sweeping Sleeves
            new DropInfo(1103183, 1), // Fox Fire Spectral Tail
            new DropInfo(1702915, 1), // Fox Fire Familiar

            // Baby Bear Night Stroll Set
            new DropInfo(1005412, 1), // Baby Bear Fedora
            new DropInfo(1050531, 1), // Night Stroll Outfit [M]
            new DropInfo(1051602, 1), // Night Stroll Outfit [F]
            new DropInfo(1073362, 1), // Stompers
            new DropInfo(1103219, 1), // Guardian Wings
            new DropInfo(1702951, 1), // Baby Bear Night Stroll

            // Snowbunny Set
            new DropInfo(1005416, 1), // Snowbunny Hat (M)
            new DropInfo(1005417, 1), // Snowbunny Hat (F)
            new DropInfo(1053491, 1), // Snowbunny Outfit (M)
            new DropInfo(1053492, 1), // Snowbunny Outfit (F)
            new DropInfo(1702954, 1), // Snowbunny

            // Circus Fantasy Set
            new DropInfo(1005594, 1), // Blue Circus Hat
            new DropInfo(1005595, 1), // Red Circus Hat
            new DropInfo(1053625, 1), // Blue Circus Fantasy
            new DropInfo(1053626, 1), // Red Circus Fantasy
            new DropInfo(1073468, 1), // Circus Bell Shoes
            new DropInfo(1103287, 1), // Glaring Lights
            new DropInfo(1703030, 1), // Higher Ring

            // Mysterious Hat Shop Set
		      new DropInfo(1005922, 1), // Mysterious Hat
            		new DropInfo(1053801, 1), // Mysterious Owner
            		new DropInfo(1073605, 1), // Mysterious Walk
            		new DropInfo(1103401, 1), // Mysterious Town
            		new DropInfo(1703157, 1), // Mysterious Familiar


            new DropInfo(1005502, 1), // Mouse Ear Headband

		      new DropInfo(1005924, 1), // Star Butterfly Witch Hat
            		new DropInfo(1005925, 1)  // Star Jewel Witch Hat

    );

    // Innocence
    public static final Set<DropInfo> SSB_INFOS_10 = Util.makeSet(
            // Penguin Set
            new DropInfo(1000090, 1), // Penguin Hood [M]
            new DropInfo(1001112, 1), // Penguin Hood [F]
            new DropInfo(1050384, 1), // Penguin Doll Outfit [M]
            new DropInfo(1051454, 1), // Penguin Doll Outfit [F]
            new DropInfo(1080009, 1), // Penguin Gloves [M]
            new DropInfo(1081015, 1), // Penguin Gloves [F]

            // Kiddy Crayon Set
            new DropInfo(1005143, 1), // Kiddy Crayon Cap
            new DropInfo(1050486, 1), // Lemon Wafer Coat [M]
            new DropInfo(1051553, 1), // Lemon Wafer Coat [F]
            new DropInfo(1073271, 1), // Kiddy Crayon Shoes
            new DropInfo(1103094, 1), // Field of Flowers
            new DropInfo(1702826, 1), // Kiddy Crayon

            // Little Darling Set
            new DropInfo(1005151, 1), // Little Darling Beret
            new DropInfo(1050488, 1), // Little Darling Outfit [M]
            new DropInfo(1051555, 1), // Little Darling Outfit [F]
            new DropInfo(1070099, 1), // Little Darling Shoes [M]
            new DropInfo(1071116, 1), // Little Darling Shoes [F]

            // Lavender Melody Set
            new DropInfo(1005319, 1), // Lavender Shearling Band
            new DropInfo(1050514, 1), // Lavender Shearling Longcoat [M]
            new DropInfo(1051584, 1), // Lavender Shearling Longcoat [F]
            new DropInfo(1073335, 1), // Lavender Shearling Boots
            new DropInfo(1103171, 1), // Lavender Melody
            new DropInfo(1702901, 1), // Crystalline Wand

            // Maple Chic Sets
            new DropInfo(1005430, 1), // Pink Bean Stylish Cap
            new DropInfo(1005431, 1), // Yeti Stylish Cap
            new DropInfo(1005432, 1), // Orange Mushroom Stylish Cap
            new DropInfo(1005433, 1), // Slime Stylish Cap
            new DropInfo(1005434, 1), // Pepe Stylish Cap
            new DropInfo(1053499, 1), // Pink Bean Dungarees
            new DropInfo(1053500, 1), // Yeti Dungarees
            new DropInfo(1053501, 1), // Orange Mushroom Dungarees
            new DropInfo(1053502, 1), // Slime Dungarees
            new DropInfo(1053503, 1), // Pepe Dungarees
            new DropInfo(1702958, 1), // Maple Bubbler

            // Backpack Outfits
            new DropInfo(1053586, 1), // Pepe Backpack Outfit
            new DropInfo(1053587, 1), // Pink Bean Backpack Outfit
            new DropInfo(1053588, 1), // Slime Backpack Outfit
            new DropInfo(1053589, 1), // Yeti Backpack Outfit
            new DropInfo(1053590, 1), // Orange Mushroom Backpack Outfit

            // Nero/Lily Sets
            new DropInfo(1005562, 1), // Nero Bucket Hat
            new DropInfo(1005563, 1), // Lily Bucket Hat
            new DropInfo(1053593, 1), // Nero Print Overfit Outfit
            new DropInfo(1053594, 1), // Lily Print Overfit Outfit

            // Sweet Letter Set
            new DropInfo(1005787, 1), // Sweet Letter Hat
            new DropInfo(1050585, 1), // Sweet Letter Boy
            new DropInfo(1051658, 1), // Sweet Letter Girl
            new DropInfo(1005788, 1), // Sweet Letter Ribbon
            new DropInfo(1073537, 1), // Sweet Letter Loafers
            new DropInfo(1103337, 1), // Sweet Letter Ink
            new DropInfo(1115222, 1), // Sweet Letter Chat Ring
            new DropInfo(1115324, 1), // Sweet Letter Label Ring
            new DropInfo(1703087, 1), // Sweet Letter Fountain Pen

            // Arbiter of Justice Set
            new DropInfo(1005795, 1), // Arbiter of Justice Hat
            new DropInfo(1053716, 1), // Arbiter of Justice Suit
            new DropInfo(1053717, 1), // Arbiter of Justice Dress
            new DropInfo(1073541, 1), // Arbiter of Justice Shoes
            new DropInfo(1073542, 1), // Arbiter of Justice Flats
            new DropInfo(1103339, 1), // Arbiter of Justice Cape
            new DropInfo(1703091, 1), // Arbiter of Justice Weapon

            // Spring Breeze Set
            new DropInfo(1005803, 1), // Heartbeat Ribbon
            new DropInfo(1005804, 1), // Heart-pounding Hat
            new DropInfo(1050587, 1), // Spring Breeze Picnic
            new DropInfo(1051660, 1), // Spring Breeze Walk
            new DropInfo(1073545, 1), // Spring Breeze Sneakers
            new DropInfo(1703095, 1), // Spring Pinwheel

            // Master Destiny Set
            new DropInfo(1000118, 1), // Ramun of the Night
            new DropInfo(1001143, 1), // Rariel of the Night
            new DropInfo(1005835, 1), // Eternal Oath
            new DropInfo(1012747, 1), // Encountered Fate
            new DropInfo(1050594, 1), // Fated Judge
            new DropInfo(1051668, 1), // Fated Executioner
            new DropInfo(1070120, 1), // Residing Eternity
            new DropInfo(1071136, 1), // Wandering Eternity
            new DropInfo(1103357, 1), // Eternal Orbit
            new DropInfo(1703115, 1), // Fated Destiny

            // Toy Box Set
            new DropInfo(1005876, 1), // Toy Propeller
            new DropInfo(1050601, 1), // Toy Time
            new DropInfo(1051674, 1), // Toy Memory
            new DropInfo(1070122, 1), // Toy Loafers
            new DropInfo(1071138, 1), // Toy Shoes
            new DropInfo(1103379, 1), // Toy Keyring
            new DropInfo(1703133, 1), // Toy Wand
            new DropInfo(1005877, 1), // Hand Knitted Hairpin
            new DropInfo(1005878, 1), // Hand Knitted Hair Clip


            new DropInfo(1103347, 1), // Sweet Penguins
            new DropInfo(1103382, 1), // Four Kids Balloon
            new DropInfo(1115226, 1), // Lara Chat Ring
            new DropInfo(1115233, 1), // Destiny Chat Ring
            new DropInfo(1115328, 1), // Lara Label Ring
            new DropInfo(1115334, 1), // Destiny Label Ring

            new DropInfo(1702859, 1), // Lotus's Lovey Doll
            new DropInfo(1703099, 1), // Sweet Penguin Ice
            new DropInfo(1703100, 1), // Refreshing Penguin Ice
            new DropInfo(1703113, 1)  // Little Bell
    );

    // Light
    public static final Set<DropInfo> SSB_INFOS_15 = Util.makeSet(
            // Child of God Set
            new DropInfo(1003953, 1), // Rhinne Luster
            new DropInfo(1050298, 1), // Alpha Seraphim
            new DropInfo(1051365, 1), // Beta Seraphim
            new DropInfo(1072859, 1), // Cobalt Zero Shoes
            new DropInfo(1102616, 1), // Lapis's Spirit
            new DropInfo(1102617, 1), // Lazuli's Spirit
            new DropInfo(1702453, 1), // Astral Bolt

            // Gatekeeper Set
            new DropInfo(1004930, 1), // Gatekeeper Top Hat
            new DropInfo(1053143, 1), // Gatekeeper Tailcoat
            new DropInfo(1073202, 1), // Gatekeeper Boots
            new DropInfo(1103002, 1), // Gatekeeper Gate

            // Candy Angel Set
            new DropInfo(1005166, 1), // Candy Tiara
            new DropInfo(1050491, 1), // Candy Darling [M]
            new DropInfo(1051559, 1), // Candy Darling [F]
            new DropInfo(1073280, 1), // Candy Shoes
            new DropInfo(1103101, 1), // Cotton Candy Wings
            new DropInfo(1702837, 1), // Candy Angel

            // Starry Light Set
            new DropInfo(1005336, 1), // Starry Light Fascinator
            new DropInfo(1005337, 1), // Starry Light Topper
            new DropInfo(1053423, 1), // Starry Light Gown
            new DropInfo(1053424, 1), // Starry Light Suit
            new DropInfo(1073348, 1), // Starry Light Wedges
            new DropInfo(1073349, 1), // Starry Light Boots
            new DropInfo(1103182, 1), // Starry Light Cape
            new DropInfo(1702913, 1), // Starry Light Weapon

            // Master Star Messenger Set
            new DropInfo(1000108, 1), // Night Gentle Breeze
            new DropInfo(1001131, 1), // Night Glimmering Ripple
            new DropInfo(1005495, 1), // Message from the Stars
            new DropInfo(1050542, 1), // Dream Guide
            new DropInfo(1051613, 1), // Dream Courier
            new DropInfo(1073425, 1), // Starlit Walk
            new DropInfo(1103241, 1), // Light's Blessing
            new DropInfo(1702976, 1), // Star Messenger

            // Bladeweaver Set
            new DropInfo(1005565, 1), // Bladeweaver's Brooch
            new DropInfo(1053600, 1), // Bladeweaver's Robe
            new DropInfo(1073456, 1), // Bladeweaver's Shoes
            new DropInfo(1103267, 1), // Bladeweaver's Aura
            new DropInfo(1703015, 1), // Bladeweaver's Sword

            // Jump to the Galaxy! Set
            new DropInfo(1005583, 1), // Jump to the Galaxy! Hat
            new DropInfo(1005584, 1), // Jump to the Galaxy! Beanie
            new DropInfo(1032320, 1), // Glittering Star Piercing
            new DropInfo(1032321, 1), // Glistening Star Drop Earring
            new DropInfo(1053615, 1), // Jump to the Galaxy! Pants
            new DropInfo(1053616, 1), // Jump to the Galaxy! Skirt

            // Restricted Library Set
            new DropInfo(1005712, 1), // Profound Intelligence
            new DropInfo(1005713, 1), // Lofty Intelligence
            new DropInfo(1050576, 1), // Descendant of the Library
            new DropInfo(1051648, 1), // Successor of the Library
            new DropInfo(1073515, 1), // Secret Guidance
            new DropInfo(1103319, 1), // Library's Calling
            new DropInfo(1703067, 1), // Old Secret

            // Enchanting Music Box Set
            new DropInfo(1005764, 1), // Enchanting Melody
            new DropInfo(1050582, 1), // Enchanting Estelle
            new DropInfo(1051655, 1), // Enchanting Etoile
            new DropInfo(1073531, 1), // Enchanting Scale
            new DropInfo(1103330, 1), // Clockwork Magic
            new DropInfo(1703080, 1), // Music Box Key

            // Dreamcatcher Set
            new DropInfo(1005765, 1), // Fleeting Dream
            new DropInfo(1053695, 1), // Loure Dream
            new DropInfo(1073532, 1), // Lunar Reverie
            new DropInfo(1103331, 1), // Dreamcatcher
            new DropInfo(1703081, 1), // Dreamy Star Wand

            // Light of Salvation Set
            new DropInfo(1005854, 1), // Kensei's Will
            new DropInfo(1005855, 1), // Kensei's Mission
            new DropInfo(1053759, 1), // Noble Savior
            new DropInfo(1053760, 1), // Royal Savior
            new DropInfo(1073573, 1), // Holy Steps
            new DropInfo(1073574, 1), // Noble Steps
            new DropInfo(1103368, 1), // Light of Salvation

            // Magician of the Sacred Forest Set
            new DropInfo(1005862, 1), // Expansive Knowledge
            new DropInfo(1053762, 1), // Magical Robe
            new DropInfo(1053763, 1), // Magical Dress
            new DropInfo(1103371, 1), // Blessing of the Sacred Forest
            new DropInfo(1115229, 1), // Magician of the Sacred Forest Chat Ring
            new DropInfo(1115331, 1), // Magician of the Sacred Forest Label Ring
            new DropInfo(1703124, 1), // Product of Knowledge

            // Ghost Wizard Set
            new DropInfo(1005896, 1), // Ghost Wizard Hat
            new DropInfo(1053790, 1), // Simple Little Ghost Wizard Robe
            new DropInfo(1053791, 1), // Ribbon Little Ghost Wizard Robe


            new DropInfo(1053728, 1), // Transparent Pants
            new DropInfo(1053729, 1)  // Transparent Skirt
    );

    // Mechanical
    public static final Set<DropInfo> SSB_INFOS_12 = Util.makeSet(
            // Battle Mage Set
            new DropInfo(1003136, 1), // Battle Mage Goggles
            new DropInfo(1052290, 1), // Battle Mage Suit
            new DropInfo(1072461, 1), // Battle Mage Boots
            new DropInfo(1082282, 1), // Battle Mage Gloves
            new DropInfo(1102255, 1), // Battle Mage Cape
            new DropInfo(1702287, 1), // Battle Mage Staff

            // Wild Hunter Set
            new DropInfo(1003135, 1), // Wild Hunter's Hat
            new DropInfo(1052289, 1), // Wild Hunter Suit
            new DropInfo(1072462, 1), // Wild Hunter Boots
            new DropInfo(1102254, 1), // Wild Hunter Cape
            new DropInfo(1702288, 1), // Wild Hunter Crossbow

            // Black Heaven Package
            new DropInfo(1004528, 1), // Silver Lotus Wig
            new DropInfo(1012528, 1), // Boss Lotus Eyes
            new DropInfo(1052941, 1), // Dark Lotus Uniform
            new DropInfo(1102832, 1), // Machine Cape

            // Kinesis Set
            new DropInfo(1000088, 1), // Kinesis Wig [M]
            new DropInfo(1001110, 1), // Kinesis Wig [F]
            new DropInfo(1012544, 1), // Culnesis
            new DropInfo(1050380, 1), // Kinesis Uniform [M]
            new DropInfo(1051450, 1), // Kinesis Uniform [F]
            new DropInfo(1073084, 1), // Kinesis Shoes
            new DropInfo(1102848, 1), // Gravity
            new DropInfo(1702620, 1), // Mystery Dice

            // Master Time Set
            new DropInfo(1004591, 1), // White Time
            new DropInfo(1004592, 1), // Black Time
            new DropInfo(1050385, 1), // Time Getup
            new DropInfo(1051455, 1), // Time Cantabile
            new DropInfo(1070071, 1), // Mr. Time Shoes
            new DropInfo(1071088, 1), // Ms. Time Shoes
            new DropInfo(1102858, 1), // Eternal Clockwork
            new DropInfo(1702624, 1), // Master Time

            // Blaster Set
            new DropInfo(1004803, 1), // Blaster Hat [M]
            new DropInfo(1004804, 1), // Blaster Hat [F]
            new DropInfo(1053056, 1), // Blaster Outfit [M]
            new DropInfo(1053057, 1), // Blaster Outfit [F]
            new DropInfo(1073153, 1), // Blaster Shoes [M]
            new DropInfo(1073154, 1), // Blaster Shoes [F]
            new DropInfo(1702698, 1), // Blaster Weapon

            // Maple Galaxy Set
            new DropInfo(1004974, 1), // Maple Galaxy Helmet
            new DropInfo(1053187, 1), // Maple Galaxy Space Suit
            new DropInfo(1103022, 1), // Maple Galaxy Cape
            new DropInfo(1702769, 1), // Maple Galaxy Laser Gun

            // Maple Blitzer Strategist Set
            new DropInfo(1005122, 1), // Maple Blitzer Strategist Cap
            new DropInfo(1050485, 1), // Maple Blitzer Strategist Uniform [M]
            new DropInfo(1051552, 1), // Maple Blitzer Strategist Uniform [F]
            new DropInfo(1702823, 1), // Maple Blitzer Strategist Deck

            // Clockwork Knight Set
            new DropInfo(1005184, 1), // Elite Knight Hat
            new DropInfo(1005185, 1), // Guardian Knight Hat
            new DropInfo(1050492, 1), // Clockwork Knight Ensemble [M]
            new DropInfo(1051560, 1), // Clockwork Knight Ensemble [F]
            new DropInfo(1073290, 1), // Clockwork Knight Shoes
            new DropInfo(1103114, 1), // Clockwork Wings
            new DropInfo(1115065, 1), // Clockwork Knight Chat Ring
            new DropInfo(1115154, 1), // Clockwork Knight Label Ring
            new DropInfo(1702844, 1), // Antoine Pocket Watch

            // Survival Battle Set
            new DropInfo(1005523, 1), // Battle Suit Type A Hoodie
            new DropInfo(1005524, 1), // Battle Suit Type B Beanie
            new DropInfo(1053568, 1), // Battle Suit Type A (M)
            new DropInfo(1053569, 1), // Battle Suit Type B (F)
            new DropInfo(1082747, 1), // Survival Battle Gloves
            new DropInfo(1103248, 1), // Spare Battle Gun
            new DropInfo(1702991, 1), // Survival Battle Gun

            // Destroyer H-018 Set
            new DropInfo(1005736, 1), // Destroyer H-018 Hat
            new DropInfo(1053688, 1), // Destroyer H-018 Outfit
            new DropInfo(1073524, 1), // Destroyer H-018 Shoes
            new DropInfo(1103327, 1), // Destroyer H-018 Cape
            new DropInfo(1115220, 1), // Destroyer H-018 Chat Ring
            new DropInfo(1115321, 1), // Destroyer H-018 Label Ring
            new DropInfo(1703076, 1), // Destroyer H-018 Weapon

            // Pop Idol Set
            new DropInfo(1005829, 1), // Neon Purple Cat Ear Headset
            new DropInfo(1005830, 1), // Neon Pink Cat Ear Headset
            new DropInfo(1022307, 1), // Purple Tinted Shade
            new DropInfo(1022308, 1), // Pink Tinted Shade
            new DropInfo(1053744, 1), // Star Point Purple Outfit
            new DropInfo(1053745, 1), // Heart Point Pink Outfit
            new DropInfo(1073557, 1), // Purple Star Sneakers
            new DropInfo(1073558, 1), // Pink Star Sneakers
            new DropInfo(1103354, 1), // Reliable Helper
            new DropInfo(1703111, 1), // Pop Idol Microphone

            new DropInfo(1004973, 1), // Steely Meow Helmet
            new DropInfo(1005513, 1), // Wave's Headphone
            new DropInfo(1702859, 1), // Lotus's Lovey Doll
            new DropInfo(1702963, 1), // Wave's Glowstick
            new DropInfo(1702964, 1)  // Holo-Matrix Sword
    );

    // Pyonta - Memes
    public static final Set<DropInfo> SSB_INFOS_13 = Util.makeSet(
            // Snowman Set
            new DropInfo(1002479, 1), // Snowman Mask
            new DropInfo(1052046, 1), // Snowman Costume
            new DropInfo(1082155, 1), // Snowman Gloves

            // Noob Set
            new DropInfo(1002824, 1), // Noob Hat
            new DropInfo(1052170, 1), // Noob Overall

            // Dino Sets
            // Dinofrog Set:
            new DropInfo(1004384, 1), // Dinofrog Hat
            new DropInfo(1052865, 1), // Dinofrog Outfit
            new DropInfo(1073019, 1), // Dinofrog Shoes
            new DropInfo(1082634, 1), // Dinofrog Gloves
            new DropInfo(1702746, 1), // Dinofrog

            // Purple Dinosaur Set:
            new DropInfo(1003803, 1), // Purple Dinosaur Hat
            new DropInfo(1052595, 1), // Purple Dinosaur Onesie
            new DropInfo(1072803, 1), // Purple Dinosaur Shoes
            new DropInfo(1082519, 1), // Purple Dinosaur Gloves

            // Mellow/Sunny Dino:
            new DropInfo(1005001, 1), // Mellow Dino Head Wrap
            new DropInfo(1005002, 1), // Sunny Dino Head Wrap
            new DropInfo(1053215, 1), // Mellow Dino Suit
            new DropInfo(1053216, 1), // Sunny Dino Suit

            // Harp Seal Doll Set
            new DropInfo(1003776, 1), // Harp Seal Mask
            new DropInfo(1052587, 1), // Harp Seal Doll Outfit
            new DropInfo(1082493, 1), // Harp Seal Doll Gloves

            // Chicken Set
            new DropInfo(1003965, 1), // Chicken Hataroo
            new DropInfo(1052661, 1), // Chicken Coataroo
            new DropInfo(1082549, 1), // Chicken Glovaroo
            new DropInfo(1702461, 1), // Chicky-Chicky Boom

            // Shark Bite Set
            new DropInfo(1004756, 1), // Shark Hoodie
            new DropInfo(1053040, 1), // Shark Bodysuit
            new DropInfo(1073144, 1), // Shark Bite Shoes
            new DropInfo(1102926, 1), // Shark Cape

            // Dango Set
            new DropInfo(1004961, 1), // Dango Set Hat
            new DropInfo(1053180, 1), // Dango Set Outfit

            // Mustachio Set
            new DropInfo(1004966, 1), // Mustachioed Bowler
            new DropInfo(1004967, 1), // Mustachioed Ballcap
            new DropInfo(1050462, 1), // Spaceyman
            new DropInfo(1051529, 1), // Spaceywoman
            new DropInfo(1115042, 1), // Mustache Chat Ring
            new DropInfo(1115131, 1), // Mustahce Label Ring
            new DropInfo(1702767, 1), // Mustachio on a Stick

            // Crispy Fried Set
            new DropInfo(1005061, 1), // Crispy Fried Hat
            new DropInfo(1053511, 1), // Crispy Fried Outfit

            // Eggplant Set
            new DropInfo(1005041, 1), // Eggplant Top
            new DropInfo(1053239, 1), // Aspiring Aubergine
            new DropInfo(1702793, 1), // Eggplant of Doom

            // Dark Furrytail Set
            new DropInfo(1005381, 1), // Dark Furrytail Cat's Ears
            new DropInfo(1012695, 1), // Dark Furrytail Cat's Eye Makeup (M)
            new DropInfo(1012696, 1), // Dark Furrytail Cat's Eye Makeup (F)
            new DropInfo(1053457, 1), // Dark Furrytail Fur-Trimmed Outfit (M)
            new DropInfo(1053458, 1), // Dark Furrytail Fur-Trimmed Outfit (F)
            new DropInfo(1073370, 1), // Dark Furrytail Cuff (M)
            new DropInfo(1073371, 1), // Dark Furrytail Cuff (F)
            new DropInfo(1103206, 1), // Dark Furrytail Guardian Cat
            new DropInfo(1702940, 1), // Dark Furrytail Cat's Paw

            // Fish Pastry Set
            new DropInfo(1005660, 1), // Giant Fish Pastry
            new DropInfo(1012730, 1), // Nom Nom Fish Pastry
            new DropInfo(1053644, 1), // Fish Pastry Bag
            new DropInfo(1703053, 1), // Red Bean Fish Pastry

            // Donut Set
            new DropInfo(1005815, 1), // Round Donut Headband
            new DropInfo(1005816, 1), // Hole Donut Headband
            new DropInfo(1053725, 1), // Donut Shopping Bag
            new DropInfo(1103346, 1), // Donut Party
            new DropInfo(1703098, 1), // Pink Hole Donut

            new DropInfo(1004169, 1), // Fried Egg Head
            new DropInfo(1004589, 1), // Jay's Sterilized Kitty Eye Patch
            new DropInfo(1005140, 1), // Flower Ribbon Headband
            new DropInfo(1005158, 1), // Catty Will
            new DropInfo(1005159, 1), // Catty Magnus
            new DropInfo(1005160, 1), // Catty Arkarium
            new DropInfo(1005161, 1), // Catty Von Leon
            new DropInfo(1005162, 1), // Catty Hilla
            new DropInfo(1012579, 1), // Pouty Face
            new DropInfo(1012607, 1), // >:3
            new DropInfo(1012624, 1), // Round Pucker Face
            new DropInfo(1012649, 1), // So Angry
            new DropInfo(1012651, 1), // Teared Up
            new DropInfo(1012653, 1), // Topsy-turvy Face
            new DropInfo(1012662, 1), // Ushishishi Face Accessory
            new DropInfo(1012685, 1), // Stubborn Face
            new DropInfo(1012716, 1), // Pouty >:3
            new DropInfo(1012739, 1), // Round-Eyed Face Accessory
            new DropInfo(1022267, 1), // Personal Info Protection Stick
            new DropInfo(1022283, 1), // Street Smart Sunglasses
            new DropInfo(1022288, 1), // Heartthrob Eyepatch
            new DropInfo(1053085, 1), // Black Cube Outfit
            new DropInfo(1053103, 1), // Red Cube Outfit
            new DropInfo(1102961, 1), // Alert! Alert!
            new DropInfo(1702627, 1), // Sakura Sword
            new DropInfo(1702729, 1), // Deep-fried Drumstick
            new DropInfo(1702835, 1)  // Uglee
    );

    // Pyonta - Modern
    public static final Set<DropInfo> SSB_INFOS_14 = Util.makeSet(
            // Concert Muse Set
            new DropInfo(1004716, 1), // Concert Muse Tiara
            new DropInfo(1012567, 1), // Touched Tears
            new DropInfo(1050422, 1), // Concert Muse (Tenor)
            new DropInfo(1051490, 1), // Concert Muse (Soprano)
            new DropInfo(1070078, 1), // Concert Muse Shoes
            new DropInfo(1071095, 1), // Concert Muse Heels
            new DropInfo(1102915, 1), // Concert Muse
            new DropInfo(1702676, 1), // Muse Crystal

            // Skater Love Set
            new DropInfo(1004947, 1), // Smiley Skater Lid
            new DropInfo(1004948, 1), // Silky Skater Band
            new DropInfo(1050454, 1), // Skater Fanboy
            new DropInfo(1051521, 1), // Skater Fangirl
            new DropInfo(1073212, 1), // Retro Roller Skates
            new DropInfo(1103010, 1), // Skater Love Cape
            new DropInfo(1702755, 1), // Sweet Baguette

            // Master of Hearts Set
            new DropInfo(1005035, 1), // Suit Heart Hair Clip
            new DropInfo(1050471, 1), // Suit Heart Outfit [M]
            new DropInfo(1051538, 1), // Suit Heart Outfit [F]
            new DropInfo(1702791, 1), // Master of Hearts

            // Jailbird Set
            new DropInfo(1005167, 1), // Jailbird Cap
            new DropInfo(1053315, 1), // Jailbird Uniform
            new DropInfo(1073282, 1), // Ball and Chain
            new DropInfo(1702838, 1), // Jailbreak Spoon

            // Ballpark Buddy Set
            new DropInfo(1005186, 1), // Ballpark Buddies Hat
            new DropInfo(1050493, 1), // Ballpark Buddy Uniform [M]
            new DropInfo(1051561, 1), // Ballpark Buddy Uniform [F]
            new DropInfo(1073291, 1), // Buddy Sneakers
            new DropInfo(1702845, 1), // Your Good Side

            // Rabble Rouser Set
            new DropInfo(1053217, 1), // Rabble Rouser Outfit (F)
            new DropInfo(1053218, 1), // Rabble Rouser Outfit (M)
            new DropInfo(1073238, 1), // Rabble Rouser Shoes (F)
            new DropInfo(1073239, 1), // Rabble Rouser Shoes (M)
            new DropInfo(1702849, 1), // Rabble Rouser Weapon

            // Secret Passport Set
            new DropInfo(1005409, 1), // Black Bucket Hat
            new DropInfo(1005410, 1), // White Bucket Hat
            new DropInfo(1012702, 1), // Black Idol Mask
            new DropInfo(1012703, 1), // White Idol Mask
            new DropInfo(1053447, 1), // Sporty Outfit
            new DropInfo(1702950, 1), // Secret Passport

            // Checkmate Set
            new DropInfo(1005477, 1), // Checkmate Cap
            new DropInfo(1005478, 1), // Checkmate Jewel
            new DropInfo(1050538, 1), // Checkmate King
            new DropInfo(1051609, 1), // Checkmate Queen
            new DropInfo(1073415, 1), // Checkmate Shoes
            new DropInfo(1103235, 1), // Outta Time
            new DropInfo(1702973, 1), // Chess Master's Heart

            // Pure/Noble Dignity Sets
            new DropInfo(1005597, 1), // Black Clover
            new DropInfo(1005598, 1), // Black Lace
            new DropInfo(1050560, 1), // Pure Dignity
            new DropInfo(1051632, 1), // Noble Dignity
            new DropInfo(1073466, 1), // Dignity Shoes
            new DropInfo(1073467, 1), // Dignity Dress Shoes
            new DropInfo(1703031, 1), // Mansion Dignity

            // Master Tailor Set
            new DropInfo(1005633, 1), // Magical Star Button
            new DropInfo(1050568, 1), // Master Tailor
            new DropInfo(1051640, 1), // Master Seamstress
            new DropInfo(1073486, 1), // Tailor's Shoes
            new DropInfo(1103300, 1), // Tailor's Treasures
            new DropInfo(1703046, 1), // Tailor's Tools

            // Agent Black Cat Set
            new DropInfo(1005786, 1), // Black Cat Goggles
            new DropInfo(1053709, 1), // Black Cat Uniform
            new DropInfo(1073536, 1), // Black Cat Shoes
            new DropInfo(1103336, 1), // Black Cat Cross Bag
            new DropInfo(1703086, 1), // Mascot Blanc

            // Influencer Set
            new DropInfo(1005824, 1), // Shining Influencer
            new DropInfo(1005825, 1), // Fresh Influencer
            new DropInfo(1050592, 1), // Influencer Training Outfit
            new DropInfo(1051665, 1), // Influencer Loose-top Training Outfit
            new DropInfo(1073555, 1), // Influencer Running Shoes

            new DropInfo(1005388, 1), // Plain White Cap
            new DropInfo(1005421, 1), // Sporty Black Band
            new DropInfo(1005422, 1), // Sporty Striped Band
            new DropInfo(1005423, 1), // Sporty White Band
            new DropInfo(1005636, 1), // Afternoon Strolling Hat
            new DropInfo(1005661, 1), // Knitted Ribbon
            new DropInfo(1012557, 1), // Nom Nom Oz
            new DropInfo(1012635, 1), // Teeth Brushing Time
            new DropInfo(1012673, 1), // Strawberry Glow
            new DropInfo(1022285, 1), // Round Glasses
            new DropInfo(1022292, 1), // Lovely Round Glasses
            new DropInfo(1032255, 1), // White Earphones
            new DropInfo(1053642, 1), // Brown Star-Sweater
            new DropInfo(1053643, 1), // Navy Star Sweater
            new DropInfo(1073492, 1), // Knit Star Boots
            new DropInfo(1102820, 1), // Hazy Night Tassel
            new DropInfo(1702585, 1)  // Universal Transparent Weapon
    );

    // Pyonta - Nostalgic
    public static final Set<DropInfo> SSB_INFOS_5 = Util.makeSet(
            // Magic Star Set
            new DropInfo(1003548, 1), // Aerial Mystic Black Silk Hat
            new DropInfo(1003549, 1), // Aerial Mystic Black Silk Ribbon
            new DropInfo(1012437, 1), // Palm Print Mask
            new DropInfo(1050234, 1), // Magic Star Suit
            new DropInfo(1051284, 1), // Magic Star Dress
            new DropInfo(1102420, 1), // Magic Star Cape
            new DropInfo(1702357, 1), // Starfall Magic Square

            // Kerning Technical High Set
            new DropInfo(1052601, 1), // Kerning Technical High Uniform
            new DropInfo(1072809, 1), // Kerning Technical High Shoes

            // Salamander Set
            new DropInfo(1003892, 1), // Leaf Diamond
            new DropInfo(1050285, 1), // Thermidor [M]
            new DropInfo(1051352, 1), // Thermidor [F]
            new DropInfo(1072831, 1), // Flame Boots
            new DropInfo(1102583, 1), // Baby Dragon Pobi
            new DropInfo(1702433, 1), // Salamander

            // Powder Set
            new DropInfo(1003971, 1), // Powder Fedora
            new DropInfo(1003972, 1), // Powder Lace Band
            new DropInfo(1050302, 1), // Powder Butler's Digs (M)
            new DropInfo(1051369, 1), // Powder Maid's Getup (F)
            new DropInfo(1072868, 1), // Powder Flats
            new DropInfo(1102621, 1), // Nagging Megaphone
            new DropInfo(1702464, 1), // Sparkling Buddy

            // Dark Devil Set
            new DropInfo(1004000, 1), // Dark Devil Hat
            new DropInfo(1052674, 1), // Dark Devil Outfit
            new DropInfo(1072877, 1), // Dark Devil Shoes
            new DropInfo(1082560, 1), // Dark Devil Gloves
            new DropInfo(1702471, 1), // Dark Devil Weapon

            // Hoi Poi Rainbow Set
            new DropInfo(1004479, 1), // Hoi Poi Hat
            new DropInfo(1012534, 1), // Rainbow Face Paint
            new DropInfo(1042319, 1), // Hoi Poi T-shirt
            new DropInfo(1062207, 1), // Hoi Poi Shorts
            new DropInfo(1072934, 1), // Rainbow Sneakers
            new DropInfo(1082588, 1), // Rainbow Marbles
            new DropInfo(1702523, 1), // Sunny Day Rainbow

            // Melody Set
            new DropInfo(1004192, 1), // Do-re-mi Headphone
            new DropInfo(1050335, 1), // Melody Boy
            new DropInfo(1051405, 1), // Melody Girl
            new DropInfo(1072943, 1), // Humming Shoes
            new DropInfo(1102706, 1), // Melodic Aurora
            new DropInfo(1702528, 1), // Xylophone Melody

            // Invincible Cheerleader Set
            new DropInfo(1004327, 1), // Starry Headband
            new DropInfo(1050346, 1), // Cheer Uniform [M]
            new DropInfo(1051415, 1), // Cheer Uniform [F]
            new DropInfo(1073011, 1), // Cheerleader Shoes
            new DropInfo(1102758, 1), // Victory Wings
            new DropInfo(1702549, 1), // Pom-pom Power

            // Medical Halloween Sets
            new DropInfo(1000079, 1), // Mad Doctor Bolt
            new DropInfo(1001100, 1), // Ribbon Angel Cap
            new DropInfo(1050351, 1), // Mad Doctor Gown
            new DropInfo(1051420, 1), // Ribbon Angel Uniform
            new DropInfo(1070064, 1), // Mad Doctor Boots
            new DropInfo(1071080, 1), // Ribbon Angel Shoes
            new DropInfo(1100004, 1), // Mad Doctor Stethoscope
            new DropInfo(1101000, 1), // Ribbon Angel Syringe
            new DropInfo(1702553, 1), // Dangerous Medicine Bottle

            // Master Death Set
            new DropInfo(1004450, 1), // Cross Wing Hair Pin
            new DropInfo(1050356, 1), // Gothic Boys Uniform
            new DropInfo(1051426, 1), // Gothic Girls Uniform
            new DropInfo(1073041, 1), // Black Forte Boots
            new DropInfo(1102809, 1), // Death Waltz Cloak
            new DropInfo(1702565, 1), // Death's Scythe

            // Pixel Set
            new DropInfo(1005361, 1), // Pixel Helm
            new DropInfo(1053436, 1), // Pixel Armor
            new DropInfo(1103191, 1), // Pixel Cape
            new DropInfo(1702923, 1), // Pixel Sword

            // Monochrome Movie Set
            new DropInfo(1005534, 1), // Monochrome Movie Hat
            new DropInfo(1012718, 1), // Monochrome Movie Mustache
            new DropInfo(1053575, 1), // Monochrome Movie Protagonist
            new DropInfo(1073439, 1), // Monochrome Movie Shoes
            new DropInfo(1103251, 1), // Monochrome Movie
            new DropInfo(1702998, 1), // Monochrome Movie Cane

            // Memories of Lith Harbor Set
            new DropInfo(1005838, 1), // Blooming Ocean
            new DropInfo(1050596, 1), // Blue Beachwave
            new DropInfo(1051670, 1), // Blue Oceanwave
            new DropInfo(1073564, 1), // Excited Beginning
            new DropInfo(1103359, 1), // Blooming Bubble
            new DropInfo(1703117, 1), // Pearl-colored Memory

            new DropInfo(1002975, 1), // Aviator Pilot Goggles
            new DropInfo(1042349, 1), // All About Black
            new DropInfo(1050232, 1), // Chamomile Tea Time
            new DropInfo(1051282, 1), // Rosemary Tea Dress
            new DropInfo(1052047, 1), // Black Snowboard Overall
            new DropInfo(1052048, 1), // Brown Snowboard Overall
            new DropInfo(1052199, 1), // Blade Overall
            new DropInfo(1052601, 1), // Kerning Technical High Uniform
            new DropInfo(1052671, 1), // Oversized Oxford
            new DropInfo(1062032, 1), // Cargo Pants
            new DropInfo(1072809, 1), // Kerning Technical High Shoes
            new DropInfo(1102221, 1), // Pluto Flame Cape
            new DropInfo(1102232, 1), // Celestial Star
            new DropInfo(1102301, 1), // Traveler's Cape
            new DropInfo(1112135, 1), // Ink-and-Wash Painting Name Tag Ring
            new DropInfo(1112238, 1), // Ink-and-Wash Thought Bubble Ring
            new DropInfo(1702266, 1)  // Sunshine Pan
    );

    // Pyonta - Oriental
    public static final Set<DropInfo> SSB_INFOS_16 = Util.makeSet(
            // White Night Set
            new DropInfo(1004890, 1), // White Night Horns
            new DropInfo(1012609, 1), // White Night Tattoo
            new DropInfo(1053125, 1), // White Night Outfit
            new DropInfo(1073188, 1), // White Night Sandals
            new DropInfo(1102984, 1), // White Night Cape

            // Diamond Brilliance Set
            new DropInfo(1004965, 1), // Apricot Bloom
            new DropInfo(1050461, 1), // Aqua Phoenix Robe
            new DropInfo(1051528, 1), // Aqua Phoenix Dress
            new DropInfo(1070089, 1), // Light as a Feather
            new DropInfo(1071106, 1), // Swift as a Bird
            new DropInfo(1103018, 1), // Water Dance
            new DropInfo(1702766, 1), // Diamond Brilliance

            // Shadow Tactician Set
            new DropInfo(1005020, 1), // Shadow Tactician Hat
            new DropInfo(1053227, 1), // Shadow Tactician Outfit
            new DropInfo(1073242, 1), // Shadow Tactician Shoes
            new DropInfo(1103046, 1), // Shadow Tactician Cape
            new DropInfo(1702787, 1), // Shadow Tactician Weapon

            // Plum Blossom Set
            new DropInfo(1005110, 1), // Plum Blossom Petals
            new DropInfo(1005111, 1), // Plum Blossom Bonnet
            new DropInfo(1050484, 1), // Plum Blossom Robe
            new DropInfo(1051551, 1), // Plum Blossom Dress
            new DropInfo(1070097, 1), // Flowery Path [M]
            new DropInfo(1071114, 1), // Flowery Path [F]
            new DropInfo(1103079, 1), // Plum Blossom Perfume Pouch
            new DropInfo(1702815, 1), // Plum Blossom

            // Audience with the Empress Set
            new DropInfo(1005243, 1), // Shinsoo's Light
            new DropInfo(1005244, 1), // Empress's Light
            new DropInfo(1050503, 1), // Shinsoo's Descent
            new DropInfo(1051573, 1), // Audience with the Empress
            new DropInfo(1070103, 1), // Shinsoo's Steps
            new DropInfo(1071120, 1), // Empress's Steps
            new DropInfo(1103144, 1), // Fairy Tale Ballad
            new DropInfo(1702870, 1), // Imperial Honor

            // Romantic Vagabond Set
            new DropInfo(1005262, 1), // Romantic Vagabond
            new DropInfo(1012675, 1), // White Moon
            new DropInfo(1012676, 1), // Black Moon
            new DropInfo(1050506, 1), // Romantic Warrior [M]
            new DropInfo(1051576, 1), // Romantic Warrior [F]
            new DropInfo(1070106, 1), // Warrior's Steps [M]
            new DropInfo(1071122, 1), // Warrior's Steps [F]
            new DropInfo(1103149, 1), // Defender's Stone
            new DropInfo(1702877, 1), // Mu Young's Sword

            // Red Lotus Spirit Walker Set
            new DropInfo(1005363, 1), // Red Lotus Spirit Walker's Flower
            new DropInfo(1053441, 1), // Red Lotus Spirit Walker's Attire
            new DropInfo(1073357, 1), // Red Lotus Spirit Walker's Geta
            new DropInfo(1103195, 1), // Red Lotus Spirit Walker's Dark Tent
            new DropInfo(1702927, 1), // Red Lotus Spirit Walker's Fan

            // Sky Flower Butterfly Set
            new DropInfo(1005399, 1), // Flowery Butterfly
            new DropInfo(1050530, 1), // Sky Whisper
            new DropInfo(1051601, 1), // Gentle Bud
            new DropInfo(1073378, 1), // Butterfly Shoes
            new DropInfo(1103212, 1), // Flowery Cloud Melody
            new DropInfo(1702945, 1), // Sky Flower Butterfly

            // Red Warrior Set
            new DropInfo(1005457, 1), // Red Warrior Hat
            new DropInfo(1053515, 1), // Red Warrior Outfit
            new DropInfo(1103231, 1), // Red Warrior Cape
            new DropInfo(1115091, 1), // Red Warrior Chat Ring
            new DropInfo(1115180, 1), // Red Warrior Label Ring
            new DropInfo(1702969, 1), // Red Warrior Katana

            // Emerald Poem Set
            new DropInfo(1005540, 1), // Emerald Drop
            new DropInfo(1050550, 1), // Royal Palace Artist
            new DropInfo(1051620, 1), // Royal Court Artist
            new DropInfo(1073444, 1), // Emerald Shoes
            new DropInfo(1103256, 1), // Glorious Shroud
            new DropInfo(1703002, 1), // Emerald Poem

            // Ebony Set
            new DropInfo(1000116, 1), // Ebony Cloud
            new DropInfo(1001138, 1), // Ebony Scent
            new DropInfo(1050577, 1), // Ebony Biho
            new DropInfo(1051649, 1), // Ebony Suho
            new DropInfo(1070118, 1), // Ebony Leather Shoes
            new DropInfo(1071134, 1), // Ebony Silk Shoes
            new DropInfo(1703068, 1), // Ebony Fan

            // Yin and Yang Energy Set
            new DropInfo(1005909, 1), // Tiger Flower Hairpin
            new DropInfo(1053794, 1), // Heroic Hogul Suit
            new DropInfo(1053795, 1), // Heroic Hogul Dress
            new DropInfo(1073597, 1), // Brave Warrior's Steps
            new DropInfo(1073598, 1), // Loyal Warrior's Steps
            new DropInfo(1103393, 1), // Faithful Tiger's Blessing
            new DropInfo(1703147, 1), // Brave Tiger's Spirit

            // Hard-earned Power Set
            new DropInfo(1005707, 1), // Hat of Hard-earned Power (M)
            new DropInfo(1005708, 1), // Hat of Hard-earned Power (F)
            new DropInfo(1053670, 1), // Outfit of Hard-earned Power (M)
            new DropInfo(1053671, 1), // Outfit of Hard-earned Power (F)
            new DropInfo(1073511, 1), // Shoes of Hard-earned Power (M)
            new DropInfo(1073512, 1), // Shoes of Hard-earned Power (F)
            new DropInfo(1103316, 1), // Cape of Hard-earned Power
            new DropInfo(1703064, 1), // Weapon of Hard-earned Power

            new DropInfo(1115059, 1), // Plum Blossom Chat Ring
            new DropInfo(1115148, 1), // Plum Blossom Label Ring
            new DropInfo(1702862, 1), // Night Procession Spirit Lamp Weapon
            new DropInfo(1702990, 1)  // Descendant of Dragons
    );

    // Pyonta - Overseas
    public static final Set<DropInfo> SSB_INFOS_17 = Util.makeSet(
            // Princess of Time Set
            new DropInfo(1003975, 1), // Princess of Time Veil
            new DropInfo(1052668, 1), // Princess of Time Dress
            new DropInfo(1072869, 1), // Princess of Time Heels
            new DropInfo(1082554, 1), // Princess of Time Gloves
            new DropInfo(1102622, 1), // Princess of Time Pocket Watch

            // Superstar Pink Bean Set
            new DropInfo(1005375, 1), // Superstar Pink Bean Horned Headphones
            new DropInfo(1053446, 1), // Superstar Pink Bean Onesie

            // Fluffy Bunny Set
            new DropInfo(1005455, 1), // Fluffy Bunny Hoodie
            new DropInfo(1053513, 1), // Fluffy Bunny Outfit

            // Night Magician Set
            new DropInfo(1000105, 1), // Night Hat
            new DropInfo(1001128, 1), // Magician Hat
            new DropInfo(1050532, 1), // Night Magician [M]
            new DropInfo(1051603, 1), // Night Magician [F]
            new DropInfo(1115088, 1), // Night Magician Chat Ring
            new DropInfo(1115177, 1), // Night Magician Label Ring
            new DropInfo(1702953, 1), // Magic Crest
            new DropInfo(5010179, 1), // The Magic of Space

            // Fluffy Cloud Set
            new DropInfo(1005525, 1), // Fluffy Star Cloud Hairpin
            new DropInfo(1005526, 1), // Fluffy Heart Cloud Hairpin
            new DropInfo(1012715, 1), // Bursting Rainbow
            new DropInfo(1053570, 1), // Puffy Cloud Overalls
            new DropInfo(1053571, 1), // Puffy Cloud Dress
            new DropInfo(1073435, 1), // Sparkly Rainbow Shoes
            new DropInfo(1702992, 1), // Fluffy Cloud Balloon

            // Blue Robin Set
            new DropInfo(1005539, 1), // Blue Robin Hat
            new DropInfo(1050548, 1), // Blue Robin Outfit [M]
            new DropInfo(1051618, 1), // Blue Robin Outfit [F]
            new DropInfo(1073443, 1), // Blue Robin Shoes
            new DropInfo(1082748, 1), // Blue Robin Gloves
            new DropInfo(1103255, 1), // Blue Robin Cape
            new DropInfo(1702999, 1), // Blue Robin's Letter

            // Bling Coral Set
            new DropInfo(1005550, 1), // Bling Coral Hair Pin
            new DropInfo(1053584, 1), // Bling Coral Tailcoat
            new DropInfo(1053585, 1), // Bling Coral Dress
            new DropInfo(1103259, 1), // Bling Coral Cape
            new DropInfo(1703007, 1), // Bling Coral Staff

            // Shadow Argyle Set
            new DropInfo(1005664, 1), // Shadow Bunny Headband
            new DropInfo(1005665, 1), // Shadow Bear Headband
            new DropInfo(1053646, 1), // Red Shadow Argyle Knit
            new DropInfo(1053647, 1), // Black Shadow Argyle Knit

            // Hand-Knit Bunny Doll Set
            new DropInfo(1005668, 1), // Black Hand-Knit Bunny Doll Hat
            new DropInfo(1005669, 1), // White Hand-Knit Bunny Doll Hat
            new DropInfo(1053650, 1), // Black Hand-Knit Bunny Doll T-Shirt
            new DropInfo(1053651, 1), // White Hand-Knit Bunny Doll T-Shirt
            new DropInfo(1073496, 1), // Hand-Knit Bunny Doll Shoes
            new DropInfo(1103309, 1), // Black Hand-Knit Bunny Doll Cape
            new DropInfo(1103310, 1), // White Hand-Knit Bunny Doll Cape
            new DropInfo(1703056, 1), // Hand-Knit Bunny Doll Weapon

            // Sweetest Dream Set
            new DropInfo(1005793, 1), // Sweetest Dream Hat
            new DropInfo(1005794, 1), // Sweetest Dream Ribbon Hairband
            new DropInfo(1012740, 1), // Sweetest Dream Face Accessory
            new DropInfo(1053714, 1), // Sweetest Dream Overcoat
            new DropInfo(1053715, 1), // Sweetest Dream Hoodie
            new DropInfo(1073539, 1), // Sweetest Dream Anklet (Blue)
            new DropInfo(1073540, 1), // Sweetest Dream Anklet (Pink)
            new DropInfo(1103338, 1), // Sweetest Dream Cape
            new DropInfo(1703090, 1), // Sweetest Dream Weapon

            // Ocean Heir Set
            new DropInfo(1005799, 1), // Blue Ocean Prince Hat
            new DropInfo(1005800, 1), // Violet Ocean Princess Hat
            new DropInfo(1053722, 1), // Blue Ocean Prince Outfit
            new DropInfo(1053723, 1), // Violet Ocean Princess Outfit
            new DropInfo(1703093, 1), // Ocean Heir Weapon

            // Ocean Heir Set
            new DropInfo(1005865, 1), // Spirit Collector Crown
            new DropInfo(1012753, 1), // Spirit Jewel
            new DropInfo(1022311, 1), // Spirit Overflow
            new DropInfo(1032327, 1), // Spirit Bond
            new DropInfo(1050598, 1), // Spirit Collector Robe [M]
            new DropInfo(1051672, 1), // Spirit Collector Robe [F]
            new DropInfo(1073577, 1), // Spirit Steps
            new DropInfo(1103374, 1), // Spirit Collector Umbrella
            new DropInfo(1115230, 1), // Spirit Chat Ring
            new DropInfo(1115332, 1), // Spirit Label Ring
            new DropInfo(1703126, 1), // Spirit Collector Lantern

            new DropInfo(1005401, 1), // Poker Face Bunny Ears
            new DropInfo(1005440, 1), // Cherry Blossom Bunny Hairpin (Day)
            new DropInfo(1005441, 1), // Cherry Blossom Fox Hairpin (Night)
            new DropInfo(1005674, 1), // Orchid Hairpin
            new DropInfo(1005675, 1), // Lucid Hairpin
            new DropInfo(1005676, 1), // Will Hairpin
            new DropInfo(1005677, 1), // Damien Hairpin
            new DropInfo(1012697, 1), // Poker Face Accessory
            new DropInfo(1073379, 1), // Ghost Transformation Shoes
            new DropInfo(1702902, 1)  // Celestial Staff
    );

    // Pyonta - Starry Sky
    public static final Set<DropInfo> SSB_INFOS_18 = Util.makeSet(
            // Rose Constellation Set
            new DropInfo(1004894, 1), // Star's Melody
            new DropInfo(1004895, 1), // Star's Song
            new DropInfo(1050444, 1), // Star's Serenade [M]
            new DropInfo(1051512, 1), // Star's Serenade [F]
            new DropInfo(1070085, 1), // Constellation Shoes
            new DropInfo(1071102, 1), // Constellation Heels
            new DropInfo(1102992, 1), // Star Shadow
            new DropInfo(1702735, 1), // Rose Constellation

            // Starlit Set
            new DropInfo(1004949, 1), // Starlit Dreams Cowl
            new DropInfo(1053159, 1), // Starlit Dreams Robe
            new DropInfo(1073213, 1), // Starlit Dreamwalkers
            new DropInfo(1702756, 1), // Starlit Dreamweaver

            // Golden Eventides Set
            new DropInfo(1005032, 1), // Golden Memory
            new DropInfo(1005033, 1), // Ornate Golden-trimmed Memory
            new DropInfo(1050470, 1), // Midnight Moonlight Outfit
            new DropInfo(1051537, 1), // Midnight Moonlight Outfit
            new DropInfo(1073246, 1), // Gold Strap Shoes
            new DropInfo(1103050, 1), // Golden Flash
            new DropInfo(1702790, 1), // Golden Eventides

            // Master Stella Set
            new DropInfo(1000097, 1), // Night Ciel
            new DropInfo(1001120, 1), // Night Elodie
            new DropInfo(1005209, 1), // Misty Moonlight
            new DropInfo(1005210, 1), // Misty Starlight
            new DropInfo(1012659, 1), // Pure Nostalgia
            new DropInfo(1050497, 1), // Majestic Moonlight Attire
            new DropInfo(1051565, 1), // Shimmering Starlight Attire
            new DropInfo(1070100, 1), // Majestic Moonlight Oxfords
            new DropInfo(1071117, 1), // Shimmering Starlight Pumps
            new DropInfo(1103126, 1), // Misty Nocturne
            new DropInfo(1103127, 1), // Misty Fantasia
            new DropInfo(1702856, 1), // Infinite Star Cluster

            // Starkeeper Set
            new DropInfo(1005368, 1), // Twinkling Glass Star
            new DropInfo(1005369, 1), // Twinkling Morning Star
            new DropInfo(1050523, 1), // Starkeeper [M]
            new DropInfo(1051593, 1), // Starkeeper [F]
            new DropInfo(1070113, 1), // White Socks and Star Shoes
            new DropInfo(1071129, 1), // Knee Highs and Star Shoes
            new DropInfo(1082744, 1), // Knot of Memory
            new DropInfo(1702928, 1), // Record of the Stars

            // Stargazer Set
            new DropInfo(1005403, 1), // Stargazer Ballcap
            new DropInfo(1005404, 1), // Stargazer Bonnet
            new DropInfo(1012699, 1), // Stargazer Face Accessory
            new DropInfo(1053474, 1), // Stargazer Outfit (M)
            new DropInfo(1053475, 1), // Stargazer Outfit (F)
            new DropInfo(1073381, 1), // Stargazer Shoes
            new DropInfo(1103215, 1), // Stargazer Cape
            new DropInfo(1702948, 1), // Stargazer Planet

            // Midnight Moonlight Set
            new DropInfo(1005419, 1), // Shining Moonlight
            new DropInfo(1005420, 1), // Gloomy Moonlight
            new DropInfo(1050534, 1), // Le Luna
            new DropInfo(1051605, 1), // La Luna
            new DropInfo(1073390, 1), // Shining Moonwalkers
            new DropInfo(1103221, 1), // Twinkling Starfield
            new DropInfo(1702956, 1), // Moonlight Lamp

            // Milky Way Night Set
            new DropInfo(1005579, 1), // Aurora Crown
            new DropInfo(1050558, 1), // Pure Galaxy
            new DropInfo(1051628, 1), // Silent Galaxy
            new DropInfo(1073463, 1), // Enamel Galaxy
            new DropInfo(1103280, 1), // Milky Way Night
            new DropInfo(1703022, 1), // Aurora Waltz

            // Dark Night Flight Set
            new DropInfo(1005666, 1), // Dark Night Flight Hat (M)
            new DropInfo(1005667, 1), // Dark Night Flight Hat (F)
            new DropInfo(1053648, 1), // Dark Night Flight Outfit (M)
            new DropInfo(1053649, 1), // Dark Night Flight Outfit (F)
            new DropInfo(1073495, 1), // Dark Night Flight Shoes
            new DropInfo(1103308, 1), // Dark Night Flight Cape
            new DropInfo(1703055, 1), // Dark Night Flight Weapon

            // Blue Evening Starlight Set
            new DropInfo(1005820, 1), // Blue Evening Beret
            new DropInfo(1050589, 1), // Starlight Researcher [M]
            new DropInfo(1051662, 1), // Starlight Researcher [F]
            new DropInfo(1073552, 1), // Blue Evening Stroll
            new DropInfo(1103351, 1), // Blue Constellation
            new DropInfo(1703106, 1), // Blue Evening Starlight

            // Lonely Dream Set
            new DropInfo(1005879, 1), // Daydream Ribbon
            new DropInfo(1053778, 1), // Midnight Dream
            new DropInfo(1053779, 1), // Midday Dream
            new DropInfo(1073586, 1), // Daydream Shoes
            new DropInfo(1703134, 1), // Lonely Baby Bear


            new DropInfo(1022287, 1), // Star Contractor
            new DropInfo(1103218, 1), // Moon-and-Star Backpack
            new DropInfo(1702984, 1), // Sea of Stars Paper Boat Weapon
            new DropInfo(1703102, 1)  // Whale Constellation Sword
    );

    // Pyonta - Summer and Winter
    public static final Set<DropInfo> SSB_INFOS_19 = Util.makeSet(
            // Snow Flower Set
            new DropInfo(1004453, 1), // Snow Bunny Beret
            new DropInfo(1050359, 1), // Cool Snow Flower
            new DropInfo(1051429, 1), // Sweet Snow Flower
            new DropInfo(1070067, 1), // Cozy Snow Flower [M]
            new DropInfo(1071083, 1), // Cozy Snow Flower [F]
            new DropInfo(1102811, 1), // Snow Bloom
            new DropInfo(1702570, 1), // Fluffy Snow Bunny

            // Blue Marine Set
            new DropInfo(1004643, 1), // Blue Marine Cap
            new DropInfo(1050395, 1), // Blue Marine Uniform (M)
            new DropInfo(1051466, 1), // Blue Marine Uniform (F)
            new DropInfo(1102877, 1), // Blue Marine Sunshine
            new DropInfo(1702638, 1), // Blue Marine Thirst For Knowledge

            // Cozy Fur Set
            new DropInfo(1004708, 1), // Cozy Fur Hat
            new DropInfo(1050418, 1), // Cozy Fur Outfit [M]
            new DropInfo(1051487, 1), // Cozy Fur Outfit [F]
            new DropInfo(1073129, 1), // Cozy Fur Shoes
            new DropInfo(1702660, 1), // Snowman Weapon

            // Master Snow Set
            new DropInfo(1004897, 1), // Snow King
            new DropInfo(1004898, 1), // Snow Queen
            new DropInfo(1012611, 1), // Snowy Eyeliner (F)
            new DropInfo(1012612, 1), // Snowy Eyeliner (M)
            new DropInfo(1050445, 1), // King's Banquet
            new DropInfo(1051513, 1), // Queen's Evening Party
            new DropInfo(1070086, 1), // Fancy Dance Shoes
            new DropInfo(1071103, 1), // Brilliant Dance Shoes
            new DropInfo(1102988, 1), // Winter's Whisper
            new DropInfo(1702736, 1), // Frost Staff

            // Cozy Winter Set
            new DropInfo(1005083, 1), // Mist Puppy
            new DropInfo(1005084, 1), // Flushed Puppy
            new DropInfo(1050477, 1), // Soft Mist
            new DropInfo(1051544, 1), // Soft Blushed
            new DropInfo(1073255, 1), // Soft Boots
            new DropInfo(1103072, 1), // Soft Cloud
            new DropInfo(1702807, 1), // Steamed Sweet

            // Starry Summer Night Set
            new DropInfo(1005221, 1), // Starry Summer Night Hat
            new DropInfo(1053344, 1), // Starry Summer Night Outfit (F)
            new DropInfo(1053345, 1), // Starry Summer Night Outfit (M)
            new DropInfo(1073303, 1), // Starry Summer Night Shoes
            new DropInfo(1702860, 1), // Starry Summer Night Weapon

            // Glimmering Snowflake Set
            new DropInfo(1005272, 1), // Snowflake Earmuffs
            new DropInfo(1050507, 1), // Snowflake Pea Coat [M]
            new DropInfo(1051577, 1), // Snowflake Pea Coat [F]
            new DropInfo(1073322, 1), // Snowflake Snowboots
            new DropInfo(1103152, 1), // Glimmering Snowflakes
            new DropInfo(1702882, 1), // Snowflake Sugarpop

            // Petite Penguin Set
            new DropInfo(1005444, 1), // Petite Penguin Hat [M]
            new DropInfo(1005445, 1), // Petite Penguin Hat [F]
            new DropInfo(1053508, 1), // Petite Penguin Outfit [M]
            new DropInfo(1053509, 1), // Petite Penguin Outfit [F]
            new DropInfo(1073397, 1), // Petite Penguin Shoes [M]
            new DropInfo(1073398, 1), // Petite Penguin Shoes [F]
            new DropInfo(1103227, 1), // Petite Penguin Cape [M]
            new DropInfo(1103228, 1), // Petite Penguin Cape [F]
            new DropInfo(1702966, 1), // Petite Penguin

            // Maple Vacation Set
            new DropInfo(1000111, 1), // Maple Vacation Hat [M]
            new DropInfo(1001133, 1), // Maple Vacation Hat [F]
            new DropInfo(1050553, 1), // Maple Vacation Outfit [M]
            new DropInfo(1051623, 1), // Maple Vacation Outfit [F]
            new DropInfo(1073446, 1), // Maple Vacation Sandals

            // Dreaming Traveler Set
            new DropInfo(1005554, 1), // Twinkling Heart
            new DropInfo(1050554, 1), // Dreamy Wanderer
            new DropInfo(1051624, 1), // Dreamy Traveler
            new DropInfo(1073450, 1), // Lightstep Sandals
            new DropInfo(1103262, 1), // Pouring Sunlight
            new DropInfo(1703008, 1), // Dreaming Traveler

            // Warm Yearning/Longing Set
            new DropInfo(1005659, 1), // Lovely Muffs
            new DropInfo(1050570, 1), // Warm Yearning
            new DropInfo(1051642, 1), // Warm Longing
            new DropInfo(1073491, 1), // Lovely Shoes
            new DropInfo(1103306, 1), // Lovely Dazzlers
            new DropInfo(1703052, 1), // Heartfelt Sentiments

            // Ocean's Calling Set
            new DropInfo(1005819, 1), // Shiny Coral Hairpin
            new DropInfo(1053734, 1), // Ocean's Calling Suit
            new DropInfo(1053735, 1), // Ocean's Calling Dress
            new DropInfo(1073549, 1), // Ocean's Echo Shoes
            new DropInfo(1073550, 1), // Deep Sea's Echo Shoes
            new DropInfo(1103350, 1), // Mysterious Underwater Cape
            new DropInfo(1703104, 1), // Deep Sea Turban Shell Cane

            new DropInfo(1005268, 1), // Fluffy Gray Hat
            new DropInfo(1005500, 1), // Red Fluffball Hat
            new DropInfo(1012709, 1), // Chilled Blush
            new DropInfo(1050338, 1), // Maple Leaf High Swimsuit (M)
            new DropInfo(1050544, 1), // Fluffy Poncho
            new DropInfo(1051407, 1), // Maple Leaf High Swimsuit (F)
            new DropInfo(1051615, 1), // Soft Poncho
            new DropInfo(1702833, 1)  // Oceanic Requiem Weapon
    );

    static {
        initializeSSBInfos();
    }

    private static void initializeSSBInfos(){
        SSBs.add(SSB_INFOS_1);
        SSBs.add(SSB_INFOS_2);
        SSBs.add(SSB_INFOS_3);
        SSBs.add(SSB_INFOS_4);
        SSBs.add(SSB_INFOS_5);
        SSBs.add(SSB_INFOS_6);
        SSBs.add(SSB_INFOS_7);
        SSBs.add(SSB_INFOS_8);
        SSBs.add(SSB_INFOS_9);
        SSBs.add(SSB_INFOS_10);
        SSBs.add(SSB_INFOS_11);
        SSBs.add(SSB_INFOS_12);
        SSBs.add(SSB_INFOS_13);
        SSBs.add(SSB_INFOS_14);
        SSBs.add(SSB_INFOS_15);
        SSBs.add(SSB_INFOS_16);
        SSBs.add(SSB_INFOS_17);
        SSBs.add(SSB_INFOS_18);
        SSBs.add(SSB_INFOS_19);
    }
}
