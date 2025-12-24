package net.swordie.ms.constants;

import net.swordie.ms.util.Util;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Created on 06/04/2021.
 *
 * @author Asura
 */
public class DamageSkinConstants {
    private static final Map<Integer, Integer> damageSkin = new HashMap<>() {{
        // region Auto-generated Damage Skin Map
        put(2431965, 0);  // Basic Damage Skin
        put(2433271, 0);  // Basic Damage Skin
        put(2438159, 0);  // Basic Damage Skin
        put(2431966, 1);  // Digitized Damage Skin
        put(2432084, 1);  // Digitized Damage Skin
        put(2433260, 1);  // Digitized Damage Skin
        put(2434239, 1);  // Digitized Damage Skin
        put(2435172, 1);  // Digitized Damage Skin
        put(2438160, 1);  // Digitized Damage Skin
        put(2431967, 2);  // Kritias Damaged Skin
        put(2438161, 2);  // Kritias Damage Skin
        put(2432131, 3);  // Party Quest Damage Skin
        put(2437009, 3);  // Party Quest Damage Skin
        put(2438162, 3);  // Party Quest Damage Skin
        put(2432153, 4);  // Hard-Hitting Damage Skin
        put(2432638, 4);  // Hard-hitting Damage Skin
        put(2432659, 4);  // Hard-hitting Damage Skin
        put(2433261, 4);  // Hard-Hitting Damage Skin
        put(2436688, 4);  // Hard-hitting Damage Skin
        put(2438163, 4);  // Hard-hitting Damage Skin
        put(2432154, 5);  // Sweet Tea Cake Damage Skin
        put(2432637, 5);  // Sweet Tea Cake Damage Skin
        put(2432658, 5);  // Sweet Tea Cake Damage Skin
        put(2433264, 5);  // Sweet Tea Cake Damage Skin
        put(2435045, 5);  // Sweet Tea Cake Damage Skin
        put(2436100, 5);  // Sweet Tea Cake Damage Skin
        put(2438164, 5);  // Sweet Tea Cake Damage Skin
        put(2432207, 6);  // Club Henesys
        put(2438165, 6);  // Club Henesys Damage Skin
        put(2432354, 7);  // Merry Christmas Damage Skin
        put(2434975, 7);  // Merry Christmas Damage Skin
        put(2432355, 8);  // Snowflake Damage Skin
        put(2432972, 8);  // Snowflake Damage Skin
        put(2434976, 8);  // Snowflake Damage Skin
        put(2435173, 8);  // Snowflake Damage Skin
        put(2438167, 8);  // Snowflake Damage Skin
        put(2432465, 9);  // Alicia's Damage Skin
        put(2438168, 9);  // Alicia's Damage Skin
        put(2432479, 10);  // Dorothy's Damage Skin
        put(2438169, 10);  // Dorothy's Damage Skin
        put(2432526, 11);  // Keyboard Warrior Damage Skin
        put(2432639, 11);  // Keyboard Warrior Damage Skin
        put(2432660, 11);  // Keyboard Warrior Damage Skin
        put(2433262, 11);  // Keyboard Warrior Damage Skin
        put(2435174, 11);  // Keyboard Warrior Damage Skin
        put(2436038, 11);  // Keyboard Warrior Damage Skin
        put(2438170, 11);  // Keyboard Warrior Damage Skin
        put(2432532, 12);  // Gentle Springtime Breeze Damage Skin
        put(2433107, 12);  // Damage Skin - Springtime Breeze
        put(2435102, 12);  // Gentle Springtime Breeze Damage Skin
        put(2435478, 12);  // Gentle Springtime Breeze Damage Skin
        put(2438171, 12);  // Gentle Springtime Breeze Damage Skin
        put(2432592, 13);  // Singles Army Damage Skin
        put(2433160, 13);  // Lonely Single Damage Skin
        put(2433263, 13);  // Singles Army Damage Skin
        put(2438172, 13);  // Singles Army Damage Skin
        put(2432640, 14);  // Reminiscence Damage Skin
        put(2432661, 14);  // Reminiscence Damage Skin
        put(2433265, 14);  // Reminiscence Damage Skin
        put(2435175, 14);  // Reminiscence Damage Skin
        put(2438173, 14);  // Reminiscence Damage Skin
        put(2438461, 14);  // Reminiscence Damage Skin
        put(2432710, 15);  // Orange Mushroom Damage Skin
        put(2433266, 15);  // Orange Mushroom Damage Skin
        put(2433919, 15);  // Orange Mushroom Damage Skin
        put(2435170, 15);  // Orange Mushroom Damage Skin
        put(2436035, 15);  // Orange Mushroom Damage Skin
        put(2438174, 15);  // Orange Mushroom Damage Skin
        put(2432836, 16);  // Crown Damage Skin
        put(2434980, 16);  // Crown Damage Skin
        put(2435176, 16);  // Crown Damage Skin
        put(2438175, 16);  // Crown Damage Skin
        put(2432973, 17);  // Monotone Damage Skin
        put(2433158, 17);  // Monotone Damage Skin
        put(2433897, 17);  // Monotone Damage Skin
        put(2435177, 17);  // Monotone Damage Skin
        put(2435834, 17);  // Monotone Damage Skin
        put(2438176, 17);  // Monotone Damage Skin
        put(2433063, 18);  // Star Planet Damage Skin
        put(2435510, 18);  // Star Planet Damage Skin
        put(2438177, 18);  // Star Planet Damage Skin
        put(2439572, 18);  // Star Planet Damage Skin
        put(2433456, 19);  // Hangul Day Damage Skin
        put(2438179, 19);  // Hangul Day Damage Skin
        put(2433178, 20);  // Halloween Damage Skin
        put(2435169, 20);  // Halloween Damage Skin
        put(2435726, 20);  // Halloween Damage Skin
        put(2438178, 20);  // Halloween Damage Skin
        put(2631138, 20);  // Halloween Damage Skin
        put(2433631, 22); // [Nene Chicken Damage Skin]
        put(2433655, 22); // [Nene Chicken Damage Skin]
        put(2433456, 21);  // Hangul Day Damage Skin
        put(2438179, 21);  // Hangul Day Damage Skin
        put(2438180, 22);  // Nene Chicken Damage Skin
        put(2433715, 23);  // Striped Damage Skin
        put(2434979, 23);  // Striped Damage Skin
        put(2435024, 23);  // Striped Damage Skin
        put(2435571, 23);  // Striped Damage Skin
        put(2436101, 23);  // Striped Damage Skin
        put(2438181, 23);  // Striped Damage Skin
        put(2433804, 24);  // Couples Army Damage Skin
        put(2435101, 24);  // Couples Army Damage Skin
        put(2435168, 24);  // Couples Army Damage Skin
        put(2438182, 24);  // Couples Army Damage Skin
        put(2438183, 25);  // Full of Stars Damage Skin
        put(2433913, 26);  // Yeti and Pepe Damage Skin
        put(2435025, 26);  // Yeti and Pepe Damage Skin
        put(2436036, 26);  // Yeti and Pepe Damage Skin
        put(2438184, 26);  // Yeti and Pepe Damage Skin
        put(2433980, 27);  // Slime and Mushroom Damage Skin
        put(2434741, 27);  // Slime and Mushroom Damage Skin
        put(2435026, 27);  // Slime and Mushroom Damage Skin
        put(2437527, 27);  // Slime and Mushroom Damage Skin
        put(2438185, 27);  // Slime and Mushroom Damage Skin
        put(2433981, 28);  // Pink Bean Damage Skin
        put(2434742, 28);  // Pink Bean Damage Skin
        put(2438186, 28);  // Pink Bean Damage Skin
        put(2438421, 28);  // Pink Bean Damage Skin
        put(2433990, 29);  // Pig Bar Damage Skin
        put(-1, 30);  // Hard-Hitting Damage Skin
        put(-1, 31);  // Keyboard Warrior
        put(-1, 32);  // Orange Mushroom Damage Skin
        put(-1, 33);  // Snowflake Damage Skin
        put(2434248, 34);  // Rainbow Boom Damage Skin
        put(2435027, 34);  // Rainbow Boom Damage Skin
        put(2435117, 34);  // Rainbow Boom Damage Skin
        put(2435477, 34);  // Rainbow Boom Damage Skin
        put(2438188, 34);  // Rainbow Boom Damage Skin
        put(2433362, 35);  // Night Sky Damage Skin
        put(2433666, 36);  // Mashmellow Damage Skin
        put(2434274, 36);  // Marshmallow Damage Skin
        put(2435029, 36);  // Marshmallow Damage Skin
        put(2435490, 36);  // Marshmallow Damage Skin
        put(2438190, 36);  // Marshmallow Damage Skin
        put(2434289, 37);  // Mu Lung Dojo Damage Skin
        put(2438191, 37);  // Mu Lung Dojo Damage Skin
        put(2434390, 38);  // Teddy Damage Skin
        put(2436099, 38);  // Teddy Damage Skin
        put(2437712, 38);  // Teddy Damage Skin
        put(2438192, 38);  // Teddy Ursus Damage Skin
        put(2434391, 39);  // Mighty Ursus Damage Skin
        put(2436034, 39);  // Mighty Ursus Damage Skin
        put(2438193, 39);  // Mighty Ursus Damage Skin
        put(2438194, 40);  // Scorching Heat Damage Skin
        put(2434528, 41);  // USA Damage Skin
        put(2438195, 41);  // USA Damage Skin
        put(2434529, 42);  // Churro Damage Skin
        put(2438196, 42);  // Churro Damage Skin
        put(2434530, 43);  // Singapore Night Damage Skin
        put(2438197, 43);  // Singapore Night Damage Skin
        put(2433571, 44);  // Scribble Crush Damage Skin
        put(2434546, 44);  // Scribbler Damage Skin
        put(2436531, 44);  // Scribbler Damage Skin
        put(2438198, 44);  // Scribbler Damage Skin
        put(2434374, 45);  // Autumn Festival Full Moon Damage Skin
        put(2434574, 45);  // Full Moon Damage Skin
        put(2438199, 45);  // Full Moon Damage Skin
        put(2434575, 46);  // Sunny Damage Skin
        put(2435171, 46);  // Sunny Damage Skin
        put(2435727, 46);  // Sunny Damage Skin
        put(2438200, 46);  // Sunny Damage Skin
        put(2432804, 47);  // Princess No Damage Skin (Permanent)
        put(2434654, 48);  // Murgoth Damage Skin
        put(2435325, 48);  // Murgoth Damage Skin
        put(2437727, 48);  // Murgoth Damage Skin
        put(2438202, 48);  // Murgoth Damage Skin
        put(2435326, 49);  // Nine-Tailed Fox Damage Skin
        put(2432749, 50);  // Zombie Damage Skin
        put(2434710, 51);  // MVP Special Damage Skin
        put(2438205, 51);  // MVP Special Damage Skin
        put(-1, 52);  // Black Heaven Damage Skin
        put(2434824, 53);  // Monster Park Damage Skin
        put(2438207, 53);  // Monster Park Damage Skin
        put(-1, 54);  // Digitized Damage Skin
        put(-1, 55);  // Kritias Damaged Skin
        put(-1, 56);  // Sweet Tea Cake Damage Skin
        put(2438157, 57);  // Christmas Jubilation Damage Skin
        put(2438166, 57);  // Christmas Jubilation Damage Skin
        put(-1, 58);  // Gentle Springtime Breeze Damage Skin
        put(-1, 59);  // Striped Damage Skin
        put(-1, 60);  // Full of Stars Damage Skin
        put(-1, 61);  // Yeti and Pepe Damage Skin
        put(-1, 62);  // Slime and Mushroom Damage Skin
        put(-1, 63);  // Rainbow Boom Damage Skin
        put(-1, 64);  // Night Sky Damage Skin
        put(-1, 65);  // Marshmallow Damage Skin
        put(-1, 66);  // Teddy Damage Skin
        put(-1, 67);  // Scorching Heat Damage Skin
        put(-1, 68);  // USA Damage Skin
        put(-1, 69);  // Churro Damage Skin
        put(-1, 70);  // Singapore Night Damage Skin
        put(-1, 71);  // Scribbler Damage Skin
        put(-1, 72);  // Full Moon Damage Skin
        put(-1, 73);  // Sunny Damage Skin
        put(-1, 74);  // Jelly Bean Damage Skin
        put(-1, 75);  // Soft Serve Damage Skin
        put(-1, 76);  // Christmas Lights Damage Skin
        put(2438211, 77);  // Heroes Phantom Damage Skin
        put(2435043, 77);  // Heroes Phantom Damage Skin
        put(2435044, 78);  // Heroes Mercedes Damage Skin
        put(2435665, 77);  // Heroes Phantom Damage Skin
        put(2435666, 78);  // Heroes Mercedes Damage Skin
        put(2436041, 77);  // Heroes Phantom Damage Skin
        put(2436042, 78);  // Heroes Mercedes Damage Skin
        put(2438212, 78);  // Heroes Mercedes Damage Skin
        put(2434499, 79);  // Autumn Festival Fireworks Damage Skin
        put(2435046, 79);  // Fireworks Damage Skin
        put(2436097, 79);  // Fireworks Damage Skin
        put(2437710, 79);  // Fireworks Damage Skin
        put(2435047, 80);  // Heart Balloon Damage Skin
        put(2435140, 81);  // Neon Sign Damage Skin
        put(2435836, 81);  // Neon Sign Damage Skin
        put(2438215, 81);  // Neon Sign Damage Skin
        put(2435141, 82);  // Freeze Tag Damage Skin
        put(2437244, 82);  // Freeze Tag Damage Skin
        put(2438216, 82);  // Freeze Tag Damage Skin
        put(2435179, 83);  // Candy Damage Skin
        put(2436096, 83);  // Candy Damage Skin
        put(2438217, 83);  // Candy Damage Skin
        put(2435162, 84);  // Antique Gold Damage Skin
        put(2435157, 85);  // Calligraphy Damage Skin
        put(2436098, 85);  // Calligraphy Damage Skin
        put(2438219, 85);  // Calligraphy Damage Skin
        put(2435158, 86);  // Explosion Damage Skin
        put(2435835, 86);  // Explosion Damage Skin
        put(2438220, 86);  // Explosion Damage Skin
        put(2435159, 87);  // Snow-wing Damage Skin
        put(2436687, 87);  // Snow-wing Damage Skin
        put(2438221, 87);  // Snow-wing Damage Skin
        put(2435160, 88);  // Miho Damage Skin
        put(2436044, 88);  // Miho Damage Skin
        put(2438222, 88);  // Miho Damage Skin
        put(2434663, 89);  // Donut Damage Skin
        put(2435182, 90);  // Musical Score Damage Skin
        put(2435725, 90);  // Musical Score Damage Skin
        put(2438224, 90);  // Musical Score Damage Skin
        put(2435166, 91);  // Moon Bunny Damage Skin
        put(2435850, 91);  // Moon Bunny Damage Skin
        put(2435184, 92);  // Forest of Tenacity Damage Skin
        put(2438226, 92);  // Forest of Tenacity Damage Skin
        put(2435222, 93);  // Festival Tortoise Damage Skin
        put(2436530, 93);  // Festival Tortoise Damage Skin
        put(2438227, 93);  // Festival Tortoise Damage Skin
        put(2435293, 94);  // April Fools' Damage Skin
        put(2438228, 94);  // April Fools' Damage Skin
        put(2435313, 95);  // Blackheart Day Damage Skin
        put(2438229, 95);  // Blackheart Day Damage Skin
        put(2435331, 96);  // Bubble April Fools' Damage Skin
        put(2435473, 96);  // Bubble April Fools' Damage Skin
        put(2438233, 96);  // Sparkling April Fools' Damage Skin
        put(2435332, 97);  // Retro April Fools' Damage Skin
        put(2438231, 97);  // Retro April Fools' Damage Skin
        put(2435333, 98);  // Monochrome April Fools' Damage Skin
        put(2435849, 98);  // Monochrome April Fools' Damage Skin
        put(2438232, 98);  // Monochrome April Fools' Damage Skin
        put(2435334, 99);  // Sparkling April Fools' Damage Skin
        put(2435474, 99);  // Sparkling April Fools' Damage Skin
        put(2435316, 100);  // Haste Damage Skin
        put(2438234, 100);  // Haste Damage Skin
        put(2435408, 101);  // 12th Anniversary Maple Leaf Damage Skin
        put(2438235, 101);  // 12th Anniversary Maple Leaf Damage Skin
        put(2438759, 101);  // 12th Anniversary Damage Skin
        put(2435427, 102);  // Cyber Damage Skin
        put(2438236, 102);  // Cyber Damage Skin
        put(2435428, 103);  // Cosmic Damage Skin
        put(2435839, 103);  // Cosmic Damage Skin
        put(2438237, 103);  // Cosmic Damage Skin
        put(2435429, 104);  // Choco Donut Damage Skin
        put(2438238, 104);  // Choco Donut Damage Skin
        put(2438240, 104);  // Monster Balloon Damage Skin
        put(2435456, 105);  // Lovely Damage Skin
        put(2435461, 106);  // Balloon Damage Skin
        put(2435493, 106);  // Monster Balloon Damage Skin
        put(2438241, 107);  // Bubble April Fools' Damage Skin
        put(2438242, 108);  // Sparkling April Fools' Damage Skin
        put(2435424, 109);  // Henesys Damage Skin
        put(2435959, 109);  // Wandering Soul Damage Skin (30 Day)
        put(2438243, 109);  // Henesys Damage Skin
        put(2435425, 110);  // Leafre Damage Skin
        put(2435958, 110);  // Masque's Puzzle Damage Skin (30 Day)
        put(2438244, 110);  // Leafre Damage Skin
        put(2435431, 111);  // Algebraic Damage Skin
        put(2438245, 111);  // Algebraic Damage Skin
        put(2435430, 112);  // Blue Flame Damage Skin
        put(2438246, 112);  // Blue Flame Damage Skin
        put(2438761, 112);  // Blue Flame Damage Skin
        put(2435432, 113);  // Purple Damage Skin
        put(2438247, 113);  // Purple Damage Skin
        put(2435433, 114);  // Nanopixel Damage Skin
        put(2438248, 114);  // Nanopixel Damage Skin
        put(-1, 115);  // Invisible Damage Skin
        put(2435521, 116);  // Crystal Damage Skin
        put(-1, 117);  // Crow Damage Skin
        put(2435523, 118);  // Chocolate Damage Skin
        put(2435524, 119);  // Spark Damage Skin
        put(2436561, 119);  // Spark Damage Skin
        put(2435538, 120);  // Royal Damage Skin
        put(2438249, 120);  // Royal Damage Skin
        put(2435832, 121);  // Chrome Damage Skin (Ver. 1)
        put(2438250, 121);  // Chrome Damage Skin (Ver. 1)
        put(2435833, 122);  // Neon Lights Damage Skin
        put(2436360, 122);  // Neon Lights Damage Skin
        put(2438251, 122);  // Neon Lights Damage Skin
        put(2438252, 123);  // Spades Damage Skin
        put(2435840, 124);  // Gilded Damage Skin
        put(2438253, 124);  // Gilded Damage Skin
        put(2435841, 125);  // Batty Damage Skin
        put(2438254, 125);  // Batty Damage Skin
        put(2438255, 126);  // Monochrome April Fools' Damage Skin
        put(2435972, 127);  // Vanishing Journey Damage Skin
        put(2438256, 127);  // Vanishing Journey Damage Skin
        put(2436023, 128);  // Chu Chu Damage Skin
        put(2438257, 128);  // Chu Chu Damage Skin
        put(2436024, 129);  // Lachelein Damage Skin
        put(2438258, 129);  // Lachelein Damage Skin
        put(2436026, 130);  // Poison Flame Damage Skin
        put(2438259, 130);  // Poison Flame Damage Skin
        put(2436027, 131);  // Blue Shock Damage Skin
        put(2438260, 131);  // Blue Shock Damage Skin
        put(2436028, 132);  // Music Power Damage Skin
        put(2438261, 132);  // Music Power Damage Skin
        put(2436029, 133);  // Ransom Note Damage Skin
        put(2436045, 134);  // Starlight Aurora Damage Skin
        put(2438263, 134);  // Starlight Aurora Damage Skin
        put(2436085, 135);  // Chestnut Damage Skin
        put(2437709, 135);  // Chestnut Damage Skin
        put(2438264, 135);  // Chestnut Damage Skin
        put(2436083, 136);  // Twilight Damage Skin
        put(2437707, 136);  // Twilight Damage Skin
        put(2438265, 136);  // Twilight Damage Skin
        put(2436084, 137);  // Unyielding Fury Damage Skin
        put(2437708, 137);  // Unyielding Fury Damage Skin
        put(2438266, 137);  // Unyielding Fury Damage Skin
        put(2436103, 138);  // Gilded Moonlight Damage Skin
        put(2438158, 138);  // Gilded Moonlight Damage Skin
        put(2438267, 138);  // Gilded Moonlight Damage Skin
        put(2436131, 139);  // Hangul Day Traditional Damage Skin
        put(2438268, 139);  // Hangul Day Traditional Damage Skin
        put(2436140, 140);  // Gingko Leaf Damage Skin
        put(2438269, 140);  // Gingko Leaf Damage Skin
        put(2436206, 141);  // Detective Damage Skin
        put(2438270, 141);  // Detective Damage Skin
        put(2436182, 142);  // Silly Ghost Damage Skin
        put(2436212, 143);  // Hallowkitty Damage Skin
        put(2437851, 143);  // Hallowkitty Damage Skin
        put(2438272, 144);  // Pew Pew Damage Skin
        put(2436268, 145);  // Steamed Bun Damage Skin
        put(2436258, 146);  // Relic Damage Skin
        put(2438274, 146);  // Relic Damage Skin
        put(2436259, 147);  // Hieroglyph Damage Skin
        put(2438275, 147);  // Hieroglyph Damage Skin
        put(2436400, 148);  // Breakthrough Damage Skin
        put(2438276, 148);  // Breakthrough Damage Skin
        put(2436437, 149);  // Sheriff Damage Skin
        put(2438277, 149);  // Sheriff Damage Skin
        put(2436521, 150);  // Snowstorm Damage Skin
        put(2438278, 150);  // Snowstorm Damage Skin
        put(2436475, 152);  // Full of Hearts Damage Skin
        put(2436478, 152);  // Full of Hearts Damage Skin (30 Day)
        put(2436528, 152);  // Full of Hearts Damage Skin
        put(2438279, 152);  // Full of Hearts Damage Skin
        put(-1, 153);  // Sheep Damage Skin
        put(-1, 154);  // Remnant of the Goddess Damage Skin
        put(2436553, 155);  // Returned Legend Damage Skin
        put(2437697, 155);  // Returned Legend Damage Skin
        put(2438282, 155);  // Returned Legend Damage Skin
        put(2436560, 156);  // Mecha Damage Skin
        put(2438283, 156);  // Mecha Damage Skin
        put(2436578, 157);  // Foamy Friends Damage Skin
        put(2437767, 157);  // Foamy Friends Damage Skin
        put(2438284, 157);  // Foamy Friends Damage Skin
        put(2436611, 158);  // Magpie's Feather Damage Skin
        put(2438285, 158);  // Magpie's Feather Damage Skin
        put(2438286, 159);  // Persimmon Tree Damage Skin
        put(2436596, 160);  // Crystalline Damage Skin
        put(2436679, 161);  // Arcana Damage Skin
        put(2438287, 161);  // Arcana Damage Skin
        put(2436680, 162);  // Imperial Damage Skin
        put(2438288, 162);  // Imperial Damage Skin
        put(2436681, 163);  // Fafnir Damage Skin
        put(2438289, 163);  // Fafnir Damage Skin
        put(2436682, 164);  // AbsoLab Damage Skin
        put(2438290, 164);  // AbsoLab Damage Skin
        put(2436133, 165);  // Chick Damage Skin
        put(2436474, 166);  // XOXO Damage Skin
        put(2436785, 167);  // Honeybee Damage Skin
        put(2438293, 167);  // Honeybee Damage Skin
        put(2436810, 168);  // Evolution Damage Skin
        put(2438294, 168);  // Evolution Damage Skin
        put(2436951, 169);  // Constellation Damage Skin
        put(2437768, 169);  // Constellation Damage Skin
        put(2438295, 169);  // Constellation Damage Skin
        put(2436952, 170);  // Extraterrestrial Damage Skin
        put(2438296, 170);  // Extraterrestrial Damage Skin
        put(2436953, 171);  // Frozen Treat Damage Skin
        put(2438297, 171);  // Frozen Treat Damage Skin
        put(2437022, 172);  // Solar Eclipse Damage Skin
        put(2437769, 172);  // Solar Eclipse Damage Skin
        put(2438298, 172);  // Solar Eclipse Damage Skin
        put(2437023, 173);  // Prism Damage Skin
        put(2438299, 173);  // Prism Damage Skin
        put(2437024, 174);  // Starry Sky Damage Skin
        put(2438300, 174);  // Starry Sky Damage Skin
        put(2438301, 175);  // Party Quest Damage Skin
        put(2437164, 176);  // Cadena Damage Skin
        put(2438032, 176);  // Cadena Damage Skin
        put(2438302, 176);  // Cadena Damage Skin
        put(2438925, 176);  // Cadena Damage Skin
        put(2437238, 177);  // Black Rose Damage Skin
        put(2438303, 177);  // Black Rose Damage Skin
        put(-1, 178);  // Masque's Puzzle Damage Skin
        put(-1, 179);  // Chess Damage Skin
        put(2437495, 180);  // Stormcloud Damage Skin
        put(2438306, 180);  // Stormcloud Damage Skin
        put(2437496, 181);  // Drizzly Damage Skin
        put(2438307, 181);  // Drizzly Damage Skin
        put(2438308, 182);  // Luxe Damage Skin
        put(2437515, 183);  // Palm Frond Damage Skin
        put(2438309, 183);  // Palm Frond Damage Skin
        put(2437482, 184);  // Illium Damage Skin
        put(2438310, 184);  // Illium Damage Skin
        put(2438926, 184);  // Illium Damage Skin
        put(2437691, 185);  // Lightning Damage Skin
        put(2438311, 185);  // Lightning Damage Skin
        put(2438604, 185);  // Lightning Damage Skin
        put(2437716, 186);  // MapleStory Damage Skin (KR)
        put(2438312, 186);  // MapleStory Damage Skin
        put(2437735, 187);  // Rice Cake Damage Skin
        put(2438313, 187);  // Rice Cake Damage Skin
        put(2437736, 188);  // Popcorn Damage Skin
        put(2438314, 188);  // Popcorn Damage Skin
        put(2437854, 189);  // Pew Pew Damage Skin (Ver. 2)
        put(2438315, 189);  // Pew Pew Damage Skin (Ver. 2)
        put(2437877, 190);  // Master Crimson Damage Skin
        put(2438143, 191);  // Transcendent of Time Damage Skin
        put(2438144, 192);  // Superstar Damage Skin
        put(2438352, 193);  // Ark Damage Skin
        put(2438353, 193);  // Ark Damage Skin
        put(2438924, 193);  // Ark Damage Skin
        put(2438378, 194);  // Woof Woof Damage Skin
        put(2438379, 195);  // Heartthrob Damage Skin
        put(2438413, 196);  // Discovery Damage Skin
        put(2438414, 196);  // Discovery Damage Skin
        put(2438415, 197);  // Esfera Damage Skin
        put(2438416, 197);  // Esfera Damage Skin
        put(2438417, 198);  // Heavenly Damage Skin
        put(2438418, 198);  // Heavenly Damage Skin
        put(2438419, 199);  // Hybrid Damage Skin
        put(2438420, 199);  // Hybrid Damage Skin
        put(2438460, 200);  // Red Circuit Damage Skin
        put(2438485, 200);  // Red Circuit Damage Skin
        put(2438491, 201);  // Choco Bonbon Damage Skin
        put(2438492, 201);  // Choco Bonbon Damage Skin
        put(2438529, 202);  // Twelve Branches Damage Skin
        put(2438530, 202);  // Twelve Branches Damage Skin
        put(2438637, 203);  // Doodle Damage Skin
        put(2438672, 204);  // Funky Fools Damage Skin
        put(2438676, 205);  // Soccer Uniform Damage Skin
        put(2438713, 205);  // Soccer Uniform Damage Skin
        put(2438880, 206);  // Monster Damage Skin
        put(2438881, 206);  // Monster Damage Skin
        put(2438884, 207);  // 14th Street Damage Skin
        put(2438885, 207);  // 14th Street Damage Skin
        put(-1, 208);  // null // TODO Hangul Version of Unit Dmg Skin (Basic Dmg Skin)
        put(2439256, 209);  // Shinsoo Damage Skin
        put(2439298, 209);  // Shinsoo Damage Skin
        put(2439264, 210);  // Foggy Damage Skin
        put(2439265, 210);  // Foggy Damage Skin
        put(2439336, 211);  // Foggy Damage Skin
        put(2439337, 211);  // Foggy Damage Skin
        put(2439277, 212);  // Alliance Damage Skin
        put(2439338, 212);  // Alliance Damage Skin
        put(2439381, 213);  // Master Stellar Damage Skin
        put(2439392, 214);  // Labyrinth Flame Damage Skin
        put(2439393, 214);  // Labyrinth Flame Damage Skin
        put(2439394, 215);  // Labyrinth Flame Damage Skin
        put(2439395, 215);  // Labyrinth Flame Damage Skin
        put(2439407, 216);  // Living Chain Damage Skin
        put(2439408, 216);  // Living Chain Damage Skin
        put(-1, 217);  // null // TODO Hangul Version of Unit Dmg Skin (Star Planet Dmg Skin)
        put(2439616, 218);  // Challenge Damage Skin: Season 1
        put(2439617, 218);  // Challenge Damage Skin: Season 1
        put(2439652, 219);  // Harvest Damage Skin
        put(2439665, 219);  // Harvest Damage Skin
        put(2439683, 221);  // Hangul Day Damage Skin (KR)
        put(2439684, 221);  // Hangul Day Damage Skin (KR)
        put(2439685, 222);  // Hangul Day Traditional Damage Skin (KR)
        put(2439686, 222);  // Hangul Day Traditional Damage Skin (KR)
        put(2439768, 223);  // Hallowkitty Damage Skin V2
        put(2439769, 223);  // Hallowkitty Damage Skin V2
        put(2439925, 224);  // Detective Yettson and Peplock Damage Skin
        put(2439926, 224);  // Detective Yettson and Peplock Damage Skin
        put(2439927, 225);  // Pew Pew Damage Skin (Ver. 3)
        put(2439928, 225);  // Pew Pew Damage Skin (Ver. 3)
        put(-1, 226);  // 100% Crit Rate Damage Skin
        put(2630132, 227);  // Adventure Damage Skin
        put(2630137, 227);  // Adventure Damage Skin
        put(2630010, 228);  // Dazzling Ruby Damage Skin
        put(2630178, 229);  // Returned Legend Damage Skin (Ver.2)
        put(2630179, 229);  // Returned Legend Damage Skin (Ver.2)
        put(2630213, 230);  // Origami Damage Skin
        put(2630214, 230);  // Origami Damage Skin
        put(2630380, 231);  // Adventure Damage Skin
        put(2630381, 231);  // Adventure Damage Skin
        put(2630235, 232);  // Brawlosseum Damage Skin
        put(2630236, 232);  // Brawlosseum Damage Skin
        put(2630224, 233);  // Pathfinder Damage Skin
        put(2630225, 233);  // Pathfinder Damage Skin
        put(2630262, 234);  // Serpent Damage Skin
        put(2630263, 234);  // Serpent Damage Skin
        put(2630264, 235);  // Shadow Damage Skin
        put(2630265, 235);  // Shadow Damage Skin
        put(2630266, 236);  // Little Oinkers Damage Skin
        put(2630267, 236);  // Little Oinkers Damage Skin
        put(2630384, 237);  // Sleek Slither Damage Skin
        put(2630385, 237);  // Sleek Slither Damage Skin
        put(2630400, 238);  // Drowsy Rabbit Damage Skin
        put(2630421, 239);  // Spring Day Pup Damage Skin
        put(2630434, 239);  // Spring Day Pup Damage Skin
        put(2630435, 240);  // Toben Hair Trend Damage Skin
        put(2630436, 240);  // Toben Hair Trend Damage Skin
        put(2630477, 241);  // Pixel Starry Damage Skin
        put(2630478, 241);  // Pixel Starry Damage Skin
        put(2630479, 242);  // Pixel Nine-Tailed Fox Damage Skin
        put(2630480, 242);  // Pixel Nine-Tailed Fox Damage Skin
        put(2630481, 243);  // Pixel Basic Damage Skin
        put(2630482, 243);  // Pixel Basic Damage Skin
        put(2630483, 244);  // Pixel Snowstorm Damage Skin
        put(2630484, 244);  // Pixel Snowstorm Damage Skin
        put(2630485, 245);  // Pixel Neon Lights Damage Skin
        put(2630486, 245);  // Pixel Neon Lights Damage Skin
        put(2630552, 246);  // Pixel Star Planet Damage Skin
        put(2630553, 246);  // Pixel Star Planet Damage Skin
        put(2630554, 247);  // Pixel Scorching Heat Damage Skin
        put(2630555, 247);  // Pixel Scorching Heat Damage Skin
        put(2630556, 248);  // Pixel Full of Hearts Damage Skin
        put(2630557, 248);  // Pixel Full of Hearts Damage Skin
        put(2630558, 249);  // Pixel Crow Damage Skin
        put(2630559, 249);  // Pixel Crow Damage Skin
        put(2630560, 250);  // Pixel 12th Anniversary Maple Leaf Damage Skin
        put(2630561, 250);  // Pixel 12th Anniversary Maple Leaf Damage Skin
        put(2630652, 251);  // Extreme Breakthrough Damage Skin
        put(2630653, 251);  // Extreme Breakthrough Damage Skin
        put(2630743, 252);  // Hoyoung Damage Skin
        put(2630744, 252);  // Hoyoung Damage Skin
        put(2630745, 253);  // Celestial Damage Skin
        put(2630746, 253);  // Celestial Damage Skin
        put(2630747, 254);  // Ash Damage Skin
        put(2630748, 254);  // Ash Damage Skin
        put(2630749, 255);  // Dawn Damage Skin
        put(2630750, 255);  // Dawn Damage Skin
        put(2630751, 256);  // Red Flame Damage Skin
        put(2630752, 256);  // Red Flame Damage Skin
        put(2630753, 257);  // Glory Guard Damage Skin
        put(2630754, 257);  // Glory Guard Damage Skin
        put(2630780, 258);  // Glory Guard Damage Skin
        put(2630969, 259);  // Nine-Tailed Fox Damage Skin
        put(2630970, 259);  // Nine-Tailed Fox Damage Skin
        put(2631091, 260);  // Happy new Year Damage Skin
        put(2631095, 261);  // Happy new Year Damage Skin
        put(2631097, 262);  // Blaze Damage Skin
        put(2631134, 263);  // Halloween Night Damage Skin
        put(2631135, 263);  // Halloween Night Damage Skin
        put(2631189, 264);  // Master Shadow Damage Skin
        put(2631183, 265);  // Mu Lung Dojo Conquer Damage Skin
        put(2631184, 265);  // Mu Lung Dojo Conquer Damage Skin
        put(2631401, 266);  // Lucky Seven Damage Skin
        put(2631402, 266);  // Lucky Seven Damage Skin
        put(2631451, 267);  // Paper Ribbon Damage Skin [U]
        put(2631452, 267);  // Paper Ribbon Damage Skin [U]
        put(2631471, 268);  // Royal Classic Damage Skin
        put(2631472, 268);  // Royal Classic Damage Skin
        put(2631492, 269);  // Stained Glass Damage Skin
        put(2631493, 269);  // Stained Glass Damage Skin
        put(2631610, 270);  // Adele Damage Skin
        put(2631611, 270);  // Adele Damage Skin
        put(-1, 271);  // Purple Crown Damage Skin (TODO Unknown ItemID)
        put(2631797, 273);  // Wind Damage Skin
        put(2631798, 273);  // Wind Damage Skin
        put(2631814, 274);  // Cute Pink Bean Damage Skin
        put(2631815, 274);  // Cute Pink Bean Damage Skin
        put(2631884, 275); //Color Light Damage Skin
        put(2631885, 275); //Color Light Damage Skin
        put(2631892, 276);  // Crystal Gold Damage Skin
        put(2631893, 276);  // Crystal Gold Damage Skin
        put(2632123, 277);  // Awake Damage Skin (Unit) [U]
        put(2632124, 277);  // Awake Damage Skin (Unit) [U]
        put(2632281, 278);  // Arena Damage Skin
        put(2632282, 278);  // Arena Damage Skin
        put(2632287, 279);  // Forest of Tenacity [U]
        put(2632288, 279);  // Forest of Tenacity [U]
        put(2632348, 280);  // Cotton Candy Damage Skin (Unit) [U]
        put(2632350, 280);  // Cotton Candy Damage Skin (Unit) [U]
        put(2632429, 281);  // Autumn Sunset Damage Skin
        put(2632430, 281);  // Autumn Sunset Damage Skin
        put(2632544, 282);  // Returned Legend Damage Skin (Ver.3)
        put(2632452, 282);  // Returned Legend Damage Skin (Ver.3)
        put(2632497, 283);  // Frightful Night Damage Skin
        put(2632498, 283);  // Frightful Night Damage Skin
        put(2632711, 284);  // Yeti x Yeti Damage Skin
        put(2632712, 284);  // Yeti x Yeti Damage Skin
        put(5680862, 285);  // [BTS] Black Swan Damage Skin (Unit) [U]
        put(2632815, 286); //Aurora Damage Skin
        put(2632816, 286); //Aurora Damage Skin
        put(2632888, 286); //Liquid Cat Damage Skin
        put(2632975, 287); //2021 Twelve Branches Damage Skin
        put(2632976, 287); //2021 Twelve Branches Damage Skin
        put(2633047, 290); //Golden Damage Skin
        put(2633048, 290); //Golden Damage Skin
        put(2633073, 291); //Scorching Heat Damage Skin
        put(2633074, 291); //Scorching Heat Damage Skin
        put(2633218, 292); //Pink Bean Crayon Damage Skin
        put(2633219, 292); //Pink Bean Crayon Damage Skin
        put(2633220, 293); //Yeti Crayon Damage Skin
        put(2633221, 293); //Yeti Crayon Damage Skin
        put(2633305, 294); //Blooming Forest Damage Skin
        put(2633306, 294); //Blooming Forest Damage Skin
        put(2633312, 295); //Rock Spirit Damage Skin
        put(2633313, 295); //Rock Spirit Damage Skin
        put(2633556, 296); //Lara Damage Skin
        put(2633557, 296); //Lara Damage Skin
        put(2633573, 297); //Diamond Damage Skin
        put(2633574, 297); //Diamond Damage Skin
        put(2633598, 298); //Vintage Comc Book Damage Skin
        put(2633599, 298); //Vintage Comc Book Damage Skin
        put(2633994, 301); //Party Quest Damage Skin
        put(2633995, 301); //Party Quest Damage Skin
        put(2634019, 302); //Chu Chu Festival Damage Skin
        put(2634020, 302); //Chu Chu Festival Damage Skin
        put(2634176, 304); //Slime Damage Skin
        put(2634177, 304); //Slime Damage Skin
        put(2634250, 305); //Fantastic Item Damage Skin
        put(2634251, 305); //Fantastic Item Damage Skin

        put(2432591, 1000);  // Cherry Blossoms Damage Skin
        put(2433269, 1001);  // Golden Damage Skin
        put(2433267, 1002);  // Blood Damage Skin
        put(2433268, 1003);  // Zombie Damage Skin
        put(2432803, 1004);  // Princess No Damage Skin (30-Days)
        put(2433270, 1005);  // Jett Damage Skin
        put(2433081, 1006);  // Halloween Damage Skin
        put(2433901, 1007);  // Azure Beasts of Fury Damage Skin
        put(2433113, 1008);  // Chinese Marshmallow Damage Skin
        put(2433038, 1010);  // Chalk Damage Skin
        put(2433252, 1011);  // Dragon's Fire Damage Skin
        put(2433251, 1012);  // Violetta's Charming Damage Skin
        put(2433183, 1015);  // Super Spooky Damage Skin
        put(2433184, 1016);  // Wicked Witch Damage Skin
        put(2433214, 1017);  // Noise Damage Skin
        put(2433182, 1018);  // Jack o' Lantern Damage Skin
        put(2433236, 1019);  // Chalk Damage Skin
        put(2433900, 1020);  // Night Sky Damage Skin
        put(2433902, 1021);  // Crimson Beasts of Fury Damage Skin
        put(2436721, 1022);  // Sheep Damage Skin
        put(2433588, 1023);  // Chinese Spring Fireworks Damage Skin
        put(2433907, 1024);  // Antique Fantasy Damage Skin
        put(2433906, 1025);  // Scribble Crush Damage Skin
        put(2433905, 1026);  // Heart Balloon Damage Skin
        put(2433904, 1027);  // Dried Out Damage Skin
        put(2433903, 1028);  // Lovely Damage Skin
        put(2435511, 1029);  // Remnant of the Goddess Damage Skin
        put(2433709, 1030);  // Moon Bunny Damage Skin
        put(2434081, 1030);  // Moon Bunny Damage Skin
        put(2433777, 1031);  // Black Heaven Damage Skin
        put(2433775, 1032);  // Orchid Damage Skin
        put(2433776, 1033);  // Lotus Damage Skin
        put(2433828, 1034);  // White Heaven Sun Damage Skin
        put(2433829, 1035);  // White Heaven Rain Damage Skin
        put(2433830, 1036);  // White Heaven Rainbow Damage Skin
        put(2433831, 1037);  // White Heaven Snow Damage Skin
        put(2433832, 1038);  // White Heaven Lightning Damage Skin
        put(2433833, 1039);  // White Heaven Wind Damage Skin
        put(2433883, 1040);  // Earth Day Damage Skin
        put(2434004, 1041);  // Alishan Damage Skin
        put(2434147, 1042);  // Irena's Band Damage Skin
        put(2434157, 1043);  // Damien's Band Damage Skin
        put(-1, 1044);  // Dark Blood Damage Skin (TODO Unknown ItemID)
        put(2434375, 1045);  // Bonfire Damage Skin
        put(-1, 1046);  // Unknown Damage Skin (TODO Unknown ItemID)
        put(-1, 1047);  // Unknown Damage Skin (TODO Unknown ItemID)
        put(2434374, 1048);  // Autumn Festival Full Moon Damage Skin
        put(2434499, 1049);  // Autumn Festival Fireworks Damage Skin
        put(2434601, 1050);  // Invisible Damage Skin
        put(2435516, 1050);  // Invisible Damage Skin
        put(2438756, 1050);  // Invisible Damage Skin
        put(2434533, 1051);  // Blood Damage Skin
        put(2434534, 1052);  // Zombie Damage Skin
        put(2434544, 1053);  // Kanna Damage Skin
        put(2434545, 1054);  // Hayato Damage Skin
        put(2434570, 1056);  // Tot's Damage Skin
        put(2434619, 1057);  // Nine-Tailed Fox Damage Skin
        put(2434662, 1058);  // Jelly Bean Damage Skin
        put(2434663, 1059);  // Donut Damage Skin
        put(2434664, 1060);  // Soft Serve Damage Skin
        put(2434868, 1062);  // Christmas Lights Damage Skin
        put(2434871, 1063);  // Chess Damage Skin
        put(2434873, 1064);  // Secret Damage Skin_Music
        put(2435380, 1065);  // Math Symbol Damage Skin
        put(2434877, 1066);  // Secret Damage Skin_Special Character
        put(2435382, 1067);  // Secret Question Mark Damage Skin
        put(2434817, 1068);  // Cube Damage Skin
        put(2434818, 1069);  // One Winter Night Damage Skin
        put(2435374, 1070);  // Monkey Damage Skin
        put(-1, 1071);  // Unknown Damage Skin (TODO Unknown ItemID)
        put(-1, 1072);  // Unknown Damage Skin (TODO Unknown ItemID)
        put(-1, 1073);  // Unknown Damage Skin (TODO Unknown ItemID)
        put(-1, 1074);  // Unknown Damage Skin (TODO Unknown ItemID)
        put(2435194, 1075);  // Crimson Knight Damage Skin
        put(2435195, 1076);  // Corrupted Magician Damage Skin
        put(2435193, 1077);  // Krakian Damage Skin
        put(2435523, 1078);  // Chocolate Damage Skin
        put(2435196, 1079);  // Crow Damage Skin
        put(2435522, 1079);  // Crow Damage Skin
        put(2436025, 1079);  // Crow Damage Skin
        put(2435213, 1080);  // Antellion Damage Skin
        put(2435335, 1081);  // Candles Damage Skin
        put(2435336, 1082);  // Cupcakes Damage Skin
        put(2435486, 1083);  // TuTu Damage Skin
        put(2435487, 1084);  // Nenne Damage Skin
        put(2435488, 1085);  // Lingling Damage Skin
        put(2435489, 1086);  // Sheriff Damage Skin
        put(2435548, 1087);  // null
        put(2435549, 1088);  // null
        put(2435542, 1089);  // null
        put(2435543, 1090);  // Epic Lulz Damage Skin
        put(2435544, 1091);  // null
        put(2435545, 1092);  // Summer Damage Skin
        put(2435546, 1093);  // Blaster Damage Skin
        put(2435568, 1094);  // Heroes Shade Damage Skin
        put(2435565, 1095);  // Heroes Aran Damage Skin
        put(2435566, 1096);  // Heroes Luminous Damage Skin
        put(2435567, 1097);  // Heroes Evan Damage Skin
        put(2435673, 1098);  // Cygnus Water Warrior Damage Skin
        put(2435674, 1099);  // Resistance Water Warrior Damage Skin
        put(2435802, 1100);  // Dragon Fireworks Damage Skin
        put(2435905, 1114);  // Cat Paw Damage Skin
        put(2435906, 1115);  // Cat Face Damage Skin
        put(2435907, 1116);  // null
        put(2435908, 1117);  // null
        put(2435948, 1118);  // Halloween Town Damage Skin
        put(2435949, 1119);  // Too Spooky Damage Skin
        put(2435950, 1120);  // Floofy Bichon Damage Skin
        put(2435951, 1121);  // null
        put(2435952, 1122);  // null
        put(2435953, 1123);  // null
        put(2435954, 1124);  // Masque's Puzzle Damage Skin
        put(2435955, 1125);  // Wandering Soul Damage Skin
        put(2435956, 1126);  // War of Roses Damage Skin
        put(2435957, 1127);  // Snow Monster Damage Skin
        put(2436089, 1132);  // Highlighter Damage Skin
        put(2436132, 1133);  // Prism Damage Skin
        put(2436133, 1134);  // Chick Damage Skin
        put(2436134, 1135);  // null
        put(2436136, 1136);  // 'Magical' Bottle for Souls
        put(-1, 1137);  // Unknown Damage Skin (TODO Unknown ItemID)
        put(2436227, 1140);  // Lucid Butterfly Damage Skin (30 Day)
        put(2436228, 1141);  // Lucid Butterfly Damage Skin
        put(2436229, 1142);  // Cozy Christmas Damage Skin (30 Day)
        put(2436230, 1143);  // Cozy Christmas Damage Skin
        put(2436300, 1144);  // Sweetheart Choco Damage Skin
        put(2438252, 1159);  // Spades Damage Skin
        put(2438807, 1159);  // Spades Damage Skin
        put(2435840, 1160);  // Gilded Damage Skin
        put(2438253, 1160);  // Gilded Damage Skin
        put(2438808, 1160);  // Gilded Damage Skin
        put(2435841, 1161);  // Batty Damage Skin
        put(2438809, 1161);  // Batty Damage Skin
        put(2432803, 1186);  // Princess No Damage Skin (30-Days)
        put(2432804, 1186);  // Princess No Damage Skin (Permanent)
        put(2438201, 1186);  // Princess No Damage Skin
        put(2438747, 1186);  // Princess No Damage Skin
        put(2436474, 1230);  // XOXO Damage Skin
        put(2436475, 1231);  // Full of Hearts Damage Skin
        put(2436476, 1232);  // Full of Stars Damage Skin
        put(2436477, 1233);  // XOXO Damage Skin (30 Day)
        put(2436478, 1234);  // Full of Hearts Damage Skin (30 Day)
        put(2436479, 1235);  // Full of Stars Damage Skin (30 Day)
        put(2436563, 1236);  // Rocket Damage Skin
        put(2436651, 1237);  // Ink Damage Skin
        put(2436652, 1238);  // Ink Damage Skin (30 Day)
        put(2436653, 1239);  // Reverse Damage Skin
        put(2438814, 1239);  // Reverse Damage Skin
        put(2436654, 1240);  // Reverse Damage Skin (30 Day)
        put(2631749, 1240);  // Reverse Damage Skin
        put(2631750, 1240);  // Reverse Damage Skin
        put(2436655, 1241);  // Neon Easter Egg Damage Skin
        put(2436656, 1242);  // Neon Easter Egg Damage Skin (30 Day)
        put(2438815, 1242);  // Neon Easter Egg Damage Skin
        put(2436657, 1243);  // Watercolor Damage Skin
        put(2436658, 1244);  // Watercolor Damage Skin (30 Day)
        put(2438816, 1244);  // Watercolor Damage Skin
        put(2436643, 1245);  // Color Pop Damage Skin
        put(2436644, 1246);  // Color Pop Damage Skin (30 Day)
        put(2436645, 1247);  // Intense Damage Skin
        put(2436646, 1248);  // Intense Damage Skin (30 Day)
        put(2439093, 1248);  // Intense Damage Skin
        put(2434601, 1249);  // Invisible Damage Skin
        put(2435516, 1249);  // Invisible Damage Skin
        put(2438756, 1249);  // Invisible Damage Skin
        put(2436740, 1250);  // Japanese Kanji Character Damage Skin
        put(2436741, 1251);  // Chinese Text Damage Skin (30 Day)
        put(2438818, 1251);  // Japanese Kanji Character Damage Skin
        put(2436742, 1252);  // Chinese Text Damage Skin
        put(2436743, 1253);  // Chinese Text Damage Skin (30 Day)
        put(2438819, 1253);  // Chinese Text Damage Skin
        put(2438820, 1253);  // Chinese Text Damage Skin
        put(2436744, 1254);  // Chinese Text Damage Skin
        put(2436745, 1255);  // Chinese Text Damage Skin (30 Day)
        put(2436746, 1256);  // Roman Numeral Damage Skin
        put(2436747, 1257);  // Roman Numeral Damage Skin (30 Day)
        put(2438821, 1257);  // Roman Numeral Damage Skin
        put(2436748, 1258);  // Knife Wound Damage Skin
        put(2436749, 1259);  // Knife Wound Damage Skin (30 Day)
        put(2438822, 1259);  // Knife Wound Damage Skin
        put(2436808, 1260);  // Aspire Industries Damage Skin
        put(2436830, 1261);  // Gifts of the Ryuul Damage Skin
        put(2436831, 1262);  // Petal Damage Skin
        put(2437005, 1262);  // Petal Damage Skin
        put(2436832, 1263);  // aa
        put(2438825, 1263);  // Petal Damage Skin
        put(2436831, 1266);  // Petal Damage Skin
        put(2437005, 1266);  // Petal Damage Skin
        put(2438825, 1266);  // Petal Damage Skin
        put(2437049, 1267);  // Summer Sands Damage Skin
        put(2437050, 1268);  // Summer Sands Damage Skin (30 Day)
        put(2438827, 1268);  // Summer Sands Damage Skin
        put(2437051, 1269);  // Tropical Sunset Damage Skin
        put(2437052, 1270);  // Tropical Sunset Damage Skin (30 Day)
        put(2438828, 1270);  // Tropical Sunset Damage Skin
        put(2436984, 1271);  // Treasures of Eluna Damage Skin
        put(2436986, 1272);  // null
        put(2437166, 1273);  // Note Damage Skin
        put(2437167, 1274);  // Note Damage Skin (30 Day)
        put(2438830, 1274);  // Note Damage Skin
        put(2437168, 1275);  // Crayon Damage Skin
        put(2437169, 1276);  // Crayon Damage Skin (30 Day)
        put(2438831, 1276);  // Crayon Damage Skin
        put(2437268, 1277);  // Maple Damage Skin
        put(2437269, 1278);  // Maple Damage Skin (30 Day)
        put(2438832, 1278);  // Maple Damage Skin
        put(2437270, 1279);  // Embroidery Damage Skin
        put(2437271, 1280);  // Embroidery Damage Skin (30 Day)
        put(2438833, 1280);  // Embroidery Damage Skin
        put(2437274, 1281);  // Dice Master Damage Skin
        put(2438834, 1281);  // Dice Master Damage Skin
        put(2437484, 1286);  // Custom Kitty Damage Skin
        put(2438148, 1287);  // Kitty Face Damage Skin
        put(2438149, 1287);  // Kitty Face Damage Skin
        put(2437488, 1288);  // Ribbon Damage Skin
        put(2438839, 1288);  // Ribbon Damage Skin
        put(2437489, 1289);  // Ribbon Damage Skin (30 Day)
        put(2437490, 1290);  // Acorn Damage Skin
        put(2437491, 1291);  // Acorn Damage Skin (30 Day)
        put(2438840, 1291);  // Acorn Damage Skin
        put(2437521, 1292);  // Christmas Cane Damage Skin
        put(2437522, 1293);  // Christmas Cane Damage Skin (30 Day)
        put(2438841, 1293);  // Christmas Cane Damage Skin
        put(2437523, 1294);  // Snow Crystal Damage Skin
        put(2437524, 1295);  // Snow Crystal Damage Skin (30 Day)
        put(2438842, 1295);  // Snow Crystal Damage Skin
        put(2436084, 1298);  // Unyielding Fury Damage Skin
        put(2437708, 1298);  // Unyielding Fury Damage Skin
        put(2438266, 1298);  // Unyielding Fury Damage Skin
        put(2436103, 1299);  // Gilded Moonlight Damage Skin
        put(2438158, 1299);  // Gilded Moonlight Damage Skin
        put(2438267, 1299);  // Gilded Moonlight Damage Skin
        put(2437700, 1300);  // Kaleidoscope Damage Skin
        put(2437701, 1301);  // Kaleidoscope Damage Skin (30 Day)
        put(2438843, 1301);  // Kaleidoscope Damage Skin
        put(2437702, 1302);  // Winter Night Damage Skin
        put(2438150, 1302);  // Winter Night Damage Skin
        put(2437703, 1303);  // Winter Night Skin (30 Day)
        put(2438151, 1303);  // Winter Night Damage Skin
        put(2438265, 1304);  // Twilight Damage Skin
        put(2436083, 1304);  // Twilight Damage Skin
        put(2437707, 1304);  // Twilight Damage Skin
        put(2436084, 1305);  // Unyielding Fury Damage Skin
        put(2437708, 1305);  // Unyielding Fury Damage Skin
        put(2438266, 1305);  // Unyielding Fury Damage Skin
        put(2436085, 1306);  // Chestnut Damage Skin
        put(2437709, 1306);  // Chestnut Damage Skin
        put(2438264, 1306);  // Chestnut Damage Skin
        put(2433588, 1307);  // Chinese Spring Fireworks
        put(2433568, 1308);  // Lovely Damage Skin
        put(2433903, 1308);  // Lovely Damage Skin
        put(2435456, 1308);  // Lovely Damage Skin
        put(2437711, 1308);  // Lovely Damage Skin
        put(2438239, 1308);  // Lovely Damage Skin
        put(2434390, 1309);  // Teddy Damage Skin
        put(2436099, 1309);  // Teddy Damage Skin
        put(2437712, 1309);  // Teddy Damage Skin
        put(2436951, 1310);  // Constellation Damage Skin
        put(2437768, 1310);  // Constellation Damage Skin
        put(2438295, 1310);  // Constellation Damage Skin
        put(2438298, 1311);  // Solar Eclipse Damage Skin
        put(2437022, 1311);  // Solar Eclipse Damage Skin
        put(2437769, 1311);  // Solar Eclipse Damage Skin
        put(2437856, 1312);  // Frigid Ice Damage Skin
        put(2437164, 1313);  // Cadena Damage Skin
        put(2438032, 1313);  // Cadena Damage Skin
        put(2438302, 1313);  // Cadena Damage Skin
        put(2438925, 1313);  // Cadena Damage Skin
        put(2437490, 1314);  // Acorn Damage Skin
        put(2437491, 1314);  // Acorn Damage Skin (30 Day)
        put(2438840, 1314);  // Acorn Damage Skin
        put(2438085, 1315);  // Hong Bao Damage Skin
        put(2438848, 1315);  // Hong Bao Damage Skin
        put(2438086, 1316);  // Nyen Damage Skin
        put(2438849, 1316);  // Nyen Damage Skin
        put(2438087, 1317);  // Vengeful Nyen Damage Skin
        put(2438850, 1317);  // Vengeful Nyen Damage Skin
        put(2438088, 1318);  // Zodiac Dog Damage Skin
        put(2438851, 1318);  // Zodiac Dog Damage Skin
        put(2438089, 1319);  // Red-Orange Damage Skin
        put(2438852, 1319);  // Red-Orange Damage Skin
        put(2438347, 1320);  // Tweed Damage Skin
        put(2438853, 1320);  // Tweed Damage Skin
        put(2438348, 1321);  // Baseball Jacket Damage Skin
        put(2438854, 1321);  // Baseball Jacket Damage Skin
        put(2438467, 1322);  // Graffiti Damage Skin
        put(2438855, 1322);  // Graffiti Damage Skin
        put(2438469, 1323);  // Skull Damage Skin
        put(2438856, 1323);  // Skull Damage Skin
        put(2438471, 1324);  // Valentine's Day Damage Skin
        put(2438857, 1324);  // Valentine's Day Damage Skin
        put(2438473, 1325);  // White Chocolate Damage Skin
        put(2438858, 1325);  // White Chocolate Damage Skin
        put(2438477, 1326);  // Pastel Easter Egg Damage Skin
        put(2438859, 1326);  // Pastel Easter Egg Damage Skin
        put(2438592, 1327);  // Round 'n' Round Damage Skin
        put(2438860, 1327);  // Round 'n' Round Damage Skin
        put(2438594, 1328);  // Garden Damage Skin
        put(2438861, 1328);  // Garden Damage Skin
        put(2438596, 1329);  // Cake Icing Damage Skin
        put(2438862, 1329);  // Cake Icing Damage Skin
        put(-1, 1330);  // Unknown Damage Skin (TODO Unknown ItemID)
        put(2438655, 1331);  // Golden Damage Skin
        put(2438863, 1331);  // Golden Damage Skin
        put(2438659, 1332);  // Stamp Damage Skin
        put(2438864, 1332);  // Stamp Damage Skin
        put(2438661, 1333);  // Mustache Damage Skin
        put(2438865, 1333);  // Mustache Damage Skin
        put(2438671, 1337);  // High Noon Damage Skin
        put(2438869, 1337);  // High Noon Damage Skin
        put(2438918, 1339);  // Droplet Damage Skin
        put(2438929, 1339);  // Droplet Damage Skin
        put(2438920, 1340);  // Gummy Bear Damage Skin
        put(2438930, 1340);  // Gummy Bear Damage Skin
        put(2438931, 1341);  // 14th Anniversary Damage Skin
        put(2438927, 1342);  // Surfing Damage Skin
        put(2438928, 1343);  // Sweet Peach Damage Skin
        put(-1, 1344);  // Basic Damage Skin (Pink) (TODO Unknown ItemID)
        put(2439155, 1345);  // Abrup's Snowstorm Damage Skin
        put(2439156, 1345);  // Abrup's Snowstorm Damage Skin
        put(2439157, 1345);  // Abrup's Snowstorm Damage Skin
        put(2439158, 1346);  // Fembris Damage Skin
        put(2439163, 1346);  // Fembris Damage Skin
        put(2439164, 1346);  // Fembris Damage Skin
        put(2439167, 1347);  // Frostflail Yeti
        put(2439129, 1348);  // Summer Sea Damage Skin
        put(2439130, 1348);  // Summer Sea Damage Skin
        put(2439132, 1349);  // Popsicle Damage Skin
        put(2439133, 1349);  // Popsicle Damage Skin
        put(2439373, 1351);  // Bitty Baby Feet Damage Skin
        put(2439374, 1351);  // Bitty Baby Feet Damage Skin
        put(2439376, 1352);  // Pink Princess Damage Skin
        put(2439377, 1352);  // Pink Princess Damage Skin
        put(2439441, 1353);  // Custom Puppy Damage Skin
        put(2439442, 1353);  // Custom Puppy Damage Skin
        put(2439521, 1354);  // 8-Bit Damage Skin
        put(2439523, 1354);  // 8-Bit Damage Skin
        put(2439551, 1355);  // Devil Font Damage Skin
        put(2439552, 1355);  // Devil Font Damage Skin
        put(2439554, 1356);  // Trick or Treat Damage Skin
        put(2439555, 1356);  // Trick or Treat Damage Skin
        put(2439697, 1358);  // 3D Effect Damage Skin
        put(2439698, 1358);  // 3D Effect Damage Skin
        put(2439700, 1359);  // Black Damage Skin
        put(2439701, 1359);  // Black Damage Skin
        put(2439800, 1362);  // Jolly Holiday Damage Skin
        put(2439801, 1362);  // Jolly Holiday Damage Skin
        put(2439805, 1363);  // Golden Tinsel Damage Skin
        put(2439806, 1363);  // Golden Tinsel Damage Skin
        put(2439894, 1364);  // Lunar New Year Damage Skin
        put(2439895, 1364);  // Lunar New Year Damage Skin
        put(2439897, 1365);  // Valentine Damage Skin
        put(2439898, 1365);  // Valentine Damage Skin
        put(2439875, 1366);  // New Year Message Damage Skin
        put(2439876, 1367);  // New Year Golden Piggy Damage Skin
        put(2630153, 1368);  // Coral Reef Damage Skin
        put(2630154, 1368);  // Coral Reef Damage Skin
        put(2630156, 1369);  // Shimmerlight Damage Skin
        put(2630157, 1369);  // Shimmerlight Damage Skin
        put(2630301, 1370);  // Bunny Blossom Damage Skin
        put(2630302, 1370);  // Bunny Blossom Damage Skin
        put(2630304, 1371);  // Rock Spirit Damage Skin
        put(2630305, 1371);  // Rock Spirit Damage Skin
        put(2630390, 1372);  // Bingo Damage Skin
        put(2630391, 1372);  // Bingo Damage Skin
        put(2630393, 1373);  // Momentum Damage Skin
        put(2630394, 1373);  // Momentum Damage Skin
        put(2630446, 1374);  // Cold Drink Damage Skin
        put(2630447, 1374);  // Cold Drink Damage Skin
        put(2630449, 1375);  // Watermelon Symbol Damage Skin
        put(2630450, 1375);  // Watermelon Symbol Damage Skin
        put(2630528, 1376);  // Superstar Pink Bean Damage Skin
        put(2630529, 1376);  // Superstar Pink Bean Damage Skin
        put(2630542, 1377);  // Kanna Reborn Damage Skin
        put(2630543, 1377);  // Kanna Reborn Damage Skin
        put(2630589, 1380);  // Starry Light Damage Skin
        put(2630590, 1380);  // Starry Light Damage Skin
        put(2630586, 1381);  // Lightbulb Damage Skin
        put(2630587, 1381);  // Lightbulb Damage Skin
        put(2630769, 1382);  // Scribbled Note Damage Skin
        put(2630770, 1382);  // Scribbled Note Damage Skin
        put(2630772, 1383);  // Firework Burst Damage Skin
        put(2630773, 1383);  // Firework Burst Damage Skin
        put(2630837, 1386);  // Ghoulish Goo Damage Skin
        put(2630838, 1386);  // Ghoulish Goo Damage Skin
        put(2630840, 1387);  // Bubble Pop Damage Skin
        put(2630841, 1387);  // Bubble Pop Damage Skin
        put(2631034, 1388);  // Sealing Wax Damage Skin
        put(2631035, 1388);  // Sealing Wax Damage Skin
        put(2631037, 1389);  // Modern Art Damage Skin
        put(2631038, 1389);  // Modern Art Damage Skin
        put(2631149, 1390);  // Sparkles Damage Skin
        put(2631150, 1390);  // Sparkles Damage Skin
        put(2631152, 1391);  // Snow-capped Damage Skin
        put(2631153, 1391);  // Snow-capped Damage Skin
        put(2631152, 1392);  // Snow-capped Damage Skin
        put(2631390, 1393);  // Snowy Mouse Damage Skin
        put(2631391, 1393);  // Snowy Mouse Damage Skin
        put(2631423, 1394);  // Showa Town Damage Skin
        put(2631424, 1394);  // Showa Town Damage Skin
        put(2631425, 1394);  // Showa Town Damage Skin (30 Day)
        put(2631426, 1395);  // Ninja Castle Damage Skin
        put(2631427, 1395);  // Ninja Castle Damage Skin
        put(2631428, 1395);  // Ninja Castle Damage Skin (30 Day)
        put(2631484, 1396);  // Error Message Damage Skin
        put(2631485, 1397);  // Glitch Damage Skin
        put(2631513, 1398);  // Fire Raccoon Damage Skin
        put(2631514, 1398);  // Fire Raccoon Damage Skin
        put(2631477, 1399);  // Kaboom! Damage Skin
        put(2631478, 1399);  // Kaboom! Damage Skin
        put(2631479, 1399);  // Kaboom! Damage Skin (30 Day)
        put(2631480, 1400);  // Sweets Damage Skin
        put(2631481, 1400);  // Sweets Damage Skin
        put(2631482, 1400);  // Sweets Damage Skin (30 Day)
        put(2631627, 1401);  // Extravagameza Damage Skin
        put(2631654, 1402);  // Golden Damage Skin
        put(2631655, 1402);  // Golden Damage Skin
        put(2631657, 1403);  // Easter Cookie Damage Skin
        put(2631658, 1403);  // Easter Cookie Damage Skin
        put(2631752, 1404);  // Summer Seashell Damage Skin
        put(2631753, 1404);  // Summer Seashell Damage Skin
        put(-1, 1405);  // Unknown Damage Skin (TODO Unknown ItemID)
        put(2631786, 1407);  // Maple Welcome Damage Skin
        put(2631794, 1407);  // Maple Welcome Damage Skin
        put(2631825, 1408);  // Chug Boat Damage Skin
        put(2631826, 1408);  // Chug Boat Damage Skin
        put(2631828, 1409);  // Old Newspaper Damage Skin
        put(2631829, 1409);  // Old Newspaper Damage Skin
        put(2631929, 1410);  // Sticker Banner Damage Skin
        put(2631930, 1410);  // Sticker Banner Damage Skin
        put(2631932, 1411);  // Pastel Animal Damage Skin
        put(2631933, 1411);  // Pastel Animal Damage Skin
        put(-1, 1412);  // Unknown Damage Skin (TODO Unknown ItemID)
        put(2632009, 1413);  // Oda Damage Skin
        put(2632010, 1414);  // Sakuno Damage Skin
        put(2632011, 1415);  // Mitsuhide Damage Skin
        put(2632012, 1415);  // Mitsuhide Damage Skin
        put(2631991, 1416);  // Beads Damage Skin
        put(2631992, 1416);  // Beads Damage Skin
        put(2631994, 1417);  // Cactus Damage Skin
        put(2631995, 1417);  // Cactus Damage Skin
        put(2632184, 1418);  // Thumbs Up Damage Skin
        put(2632185, 1418);  // Thumbs Up Damage Skin
        put(2632187, 1419);  // Autumn Leaves Damage Skin
        put(2632188, 1419);  // Autumn Leaves Damage Skin
        put(2632209, 1421);  // Cappuccino Damage Skin
        put(2632210, 1421);  // Cappuccino Damage Skin
        put(2632212, 1422);  // Halloween Spider Damage Skin
        put(2632213, 1422);  // Halloween Spider Damage Skin
        put(2632371, 1423);  // Maplemas Ornament Damage Skin
        put(2632374, 1424);  // Snowstorm Damage Skin
        put(2632268, 1426);  // Basic Damage Skin (Unit) [U]
        put(2632274, 1426);  // Basic Damage Skin (Unit) [U]
        put(2632736, 1427);  // Candle Damage Skin
        put(2632739, 1428);  // Cotton Ball Damage Skin
        put(2632742, 1429);  // Dairy Cow Damage Skin
        put(2632745, 1430);  // Nostalgia Damage Skin
        put(2632964, 1432);  // Flower Garden Damage Skin
        put(2632967, 1433);  // Honey Bee Damage Skin
        put(2632998, 1434);  // Maple Cafe on a Spring Day Damage Skin
        put(2633052, 1435);  // Arabian Nights Damage Skin
        put(2633053, 1435);  // Arabian Nights Damage Skin
        put(2633055, 1436);  // Lotus Flower Damage Skin
        put(2633056, 1436);  // Lotus Flower Damage Skin
        put(2633265, 1437);  // Random Style Damage Skin
        put(2633266, 1437);  // Random Style Damage Skin
        put(2633268, 1438);  // Event Ticket Damage Skin
        put(2633269, 1438);  // Event Ticket Damage Skin
        put(2633277, 1440);  // Wings Damage Skin
        put(2633354, 1441);  // Goo Damage Skin
        put(2633428, 1441);  // Goo Damage Skin
        put(2633441, 1441);  // Goo Damage Skin
        put(2633364, 1442); // Goo Damage Skin
        put(2633442, 1442); // Goo Damage Skin
        put(2633382, 1443); // Kain Damage Skin
        put(2633421, 1443); // Kain Damage Skin
        put(2633475, 1444); // Desert Sunset Damage Skin
        put(2633476, 1444); // Desert Sunset Damage Skin
        put(2633478, 1445); // Desert Oasis Damage Skin
        put(2633479, 1445); // Desert Oasis Damage Skin
        put(2633729, 1449); // Stamp Damage Skin
        put(2633730, 1449); // Stamp Damage Skin
        put(2633732, 1450); // Full Moon Lantern Damage Skin
        put(2633733, 1450); // Full Moon Lantern Damage Skin
        put(2633812, 1451); // Spooky Stencil Damage Skin
        put(2633813, 1451); // Spooky Stencil Damage Skin
        put(2633815, 1452); // Defeated Damage Skin
        put(2633816, 1452); // Defeated Damage Skin
        put(2633818, 1453); // Cute Halloween Damage Skin
        put(2633819, 1453); // Cute Halloween Damage Skin
        put(2633821, 1454); // Autumn Damage Skin
        put(2633822, 1454); // Autumn Damage Skin
        put(2634061, 1456); // Mistletoe Damage Skin
        put(2634062, 1456); // Mistletoe Damage Skin
        put(2634064, 1457); // Holiday Snowman Damage Skin
        put(2634065, 1457); // Holiday Snowman Damage Skin
        put(2634150, 1459); // Macaroon Damage Skin
        put(2634151, 1459); // Macaroon Damage Skin
        put(2634153, 1460); // Black Tiger Damage Skin
        put(2634154, 1460); // Black Tiger Damage Skin
        put(2634262, 1462); // Wild Heart Damage Skin
        put(2634263, 1462); // Wild Heart Damage Skin
        put(2634406, 1463); // Easter Bunny Hunt Damage Skin
        put(2634407, 1463); // Easter Bunny Hunt Damage Skin
        put(2634409, 1464); // Raindrop Damage Skin
        put(2634410, 1464); // Raindrop Damage Skin
        // endregion Auto-generated Damage Skin Map
    }};

    public static int getFirstItemIdByDmgSkinId(int dmgSkinId) {
        return damageSkin.entrySet().stream().filter(ds -> ds.getValue() == dmgSkinId).map(Map.Entry::getKey).findFirst().orElse(0);
    }

    public static int getDamageSkinIdByItemId(int itemId) {
        return damageSkin.getOrDefault(itemId, -1);
    }

    public static boolean isHandledDamageSkinItemId(int itemId) {
        return damageSkin.containsKey(itemId);
    }

    public static int getRandomDamageSkinItemId() {
        List<Integer> dmgSkinList = damageSkin.entrySet().stream()
                .filter(entry -> entry.getKey() != -1)
                .map(Map.Entry::getValue)
                .collect(Collectors.toList());
        var randomDmgSkinId = Util.getRandomFromCollection(dmgSkinList);
        var itemId = getFirstItemIdByDmgSkinId(randomDmgSkinId);

        return itemId;
    }
}
