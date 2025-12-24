package net.swordie.ms.constants;

import net.swordie.ms.life.drop.DropInfo;
import net.swordie.ms.util.Util;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

/**
 * Created on 06/07/2021.
 *
 * @author Asura
 */
public class LotteryItemConstants {

    // Lottery Item - Map< ItemId, Weight within random selection >
    private static final HashMap<Integer, Set<DropInfo>> lotteryItemRewardsMap = new HashMap<>() {{
        put(OzConstants.ALICIAS_RING_BOX_1,
                new HashSet<>() {{
                    add(new DropInfo(1113070, 1));  // Scarlet Ring

                    add(new DropInfo(1402224, 2));  // Ryude's Sword
                    add(new DropInfo(1032232, 2));  // Ocean Glow Earrings
                    add(new DropInfo(1452229, 2));  // Light Seeker

                    add(new DropInfo(1113098, 3));  // Ring of Restraint
                    add(new DropInfo(1113099, 6));  // Ultimatum Ring
                    add(new DropInfo(1113100, 6));  // Limit Ring
                    add(new DropInfo(1113101, 6));  // Health Cut Ring
                    add(new DropInfo(1113102, 6));  // Mana Cut Ring
                    add(new DropInfo(1113103, 6));  // Durability Ring
                    add(new DropInfo(1113104, 6));  // Critical Damage Ring
                    add(new DropInfo(1113105, 6));  // Critical Defense Ring
                    add(new DropInfo(1113106, 6));  // Critical Shift Ring
                    add(new DropInfo(1113107, 6));  // Stance Shift Ring
                    add(new DropInfo(1113108, 6));  // Totalling Ring
                    add(new DropInfo(1113109, 6));  // Level Jump S Ring
                    add(new DropInfo(1113110, 6));  // Level Jump D Ring
                    add(new DropInfo(1113111, 6));  // Level Jump I Ring
                    add(new DropInfo(1113112, 6));  // Level Jump L Ring
                    add(new DropInfo(1113113, 6));  // Weapon Jump S Ring
                    add(new DropInfo(1113114, 6));  // Weapon Jump D Ring
                    add(new DropInfo(1113115, 6));  // Weapon Jump I Ring
                    add(new DropInfo(1113116, 6));  // Weapon Jump L Ring
                    add(new DropInfo(1113117, 6));  // Swift Ring
                    add(new DropInfo(1113118, 6));  // Overdrive Ring
                    add(new DropInfo(1113119, 6));  // Berserker Ring
                    add(new DropInfo(1113120, 6));  // Reflective Ring
                    add(new DropInfo(1113121, 6));  // Cleansing Ring
                    add(new DropInfo(1113122, 3));  // Risk Taker Ring
                    add(new DropInfo(1113123, 6));  // Crisis H Ring
                    add(new DropInfo(1113124, 6));  // Crisis M Ring
                    add(new DropInfo(1113125, 6));  // Crisis HM Ring
                    add(new DropInfo(1113126, 6));  // Clean Stance Ring
                    add(new DropInfo(1113127, 6));  // Clean Defense Ring
                    add(new DropInfo(1113128, 6));  // Tower Boost Ring

                    add(new DropInfo(ItemConstants.INCREDIBLE_CHAOS_SCROLL_OF_GOODNESS_50, 10)); // ICoG 50
                    add(new DropInfo(ItemConstants.INCREDIBLE_CHAOS_SCROLL_OF_GOODNESS_60, 8)); // ICoG 60
                    add(new DropInfo(ItemConstants.INNOCENCE_SCROLL_50, 10)); // Inno 50
                    add(new DropInfo(ItemConstants.INNOCENCE_SCROLL_60, 10)); // Inno 60
                    add(new DropInfo(ItemConstants.INNOCENCE_SCROLL_100, 10)); // Inno 100

                    add(new DropInfo(ItemConstants.OZ_POINT_POUCH, 30, 5, 10));  // Oz Point Pouch ( 5 - 10 )
                    add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 30, 4500, 5000)); // Spell Trace (4500 - 5000)
                }});

        put(OzConstants.ALICIAS_RING_BOX_2,
                new HashSet<>() {{
                    add(new DropInfo(1402224, 1));  // Ryude's Sword
                    add(new DropInfo(1032232, 1));  // Ocean Glow Earrings
                    add(new DropInfo(1452229, 1));  // Light Seeker

                    add(new DropInfo(1113098, 2));  // Ring of Restraint
                    add(new DropInfo(1113099, 6));  // Ultimatum Ring
                    add(new DropInfo(1113100, 6));  // Limit Ring
                    add(new DropInfo(1113101, 6));  // Health Cut Ring
                    add(new DropInfo(1113102, 6));  // Mana Cut Ring
                    add(new DropInfo(1113103, 6));  // Durability Ring
                    add(new DropInfo(1113104, 6));  // Critical Damage Ring
                    add(new DropInfo(1113105, 6));  // Critical Defense Ring
                    add(new DropInfo(1113106, 6));  // Critical Shift Ring
                    add(new DropInfo(1113107, 6));  // Stance Shift Ring
                    add(new DropInfo(1113108, 6));  // Totalling Ring
                    add(new DropInfo(1113109, 6));  // Level Jump S Ring
                    add(new DropInfo(1113110, 6));  // Level Jump D Ring
                    add(new DropInfo(1113111, 6));  // Level Jump I Ring
                    add(new DropInfo(1113112, 6));  // Level Jump L Ring
                    add(new DropInfo(1113113, 6));  // Weapon Jump S Ring
                    add(new DropInfo(1113114, 6));  // Weapon Jump D Ring
                    add(new DropInfo(1113115, 6));  // Weapon Jump I Ring
                    add(new DropInfo(1113116, 6));  // Weapon Jump L Ring
                    add(new DropInfo(1113117, 6));  // Swift Ring
                    add(new DropInfo(1113118, 6));  // Overdrive Ring
                    add(new DropInfo(1113119, 6));  // Berserker Ring
                    add(new DropInfo(1113120, 6));  // Reflective Ring
                    add(new DropInfo(1113121, 6));  // Cleansing Ring
                    add(new DropInfo(1113122, 2));  // Risk Taker Ring
                    add(new DropInfo(1113123, 6));  // Crisis H Ring
                    add(new DropInfo(1113124, 6));  // Crisis M Ring
                    add(new DropInfo(1113125, 6));  // Crisis HM Ring
                    add(new DropInfo(1113126, 6));  // Clean Stance Ring
                    add(new DropInfo(1113127, 6));  // Clean Defense Ring
                    add(new DropInfo(1113128, 6));  // Tower Boost Ring

                    add(new DropInfo(ItemConstants.INCREDIBLE_CHAOS_SCROLL_OF_GOODNESS_50, 8)); // ICoG 50
                    add(new DropInfo(ItemConstants.INCREDIBLE_CHAOS_SCROLL_OF_GOODNESS_60, 6)); // ICoG 60
                    add(new DropInfo(ItemConstants.INNOCENCE_SCROLL_50, 8)); // Inno 50
                    add(new DropInfo(ItemConstants.INNOCENCE_SCROLL_60, 8)); // Inno 60
                    add(new DropInfo(ItemConstants.INNOCENCE_SCROLL_100, 8)); // Inno 100

                    add(new DropInfo(ItemConstants.OZ_POINT_POUCH, 30, 3, 7));  // Oz Point Pouch ( 3 - 7 )
                    add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 30, 2500, 5000)); // Spell Trace (2500 - 5000)
        }});

        put(OzConstants.ALICIAS_RING_BOX_3,
                new HashSet<>() {{
                    add(new DropInfo(1113098, 3));  // Ring of Restraint
                    add(new DropInfo(1113099, 7));  // Ultimatum Ring
                    add(new DropInfo(1113100, 7));  // Limit Ring
                    add(new DropInfo(1113101, 7));  // Health Cut Ring
                    add(new DropInfo(1113102, 7));  // Mana Cut Ring
                    add(new DropInfo(1113103, 7));  // Durability Ring
                    add(new DropInfo(1113104, 7));  // Critical Damage Ring
                    add(new DropInfo(1113105, 7));  // Critical Defense Ring
                    add(new DropInfo(1113106, 7));  // Critical Shift Ring
                    add(new DropInfo(1113107, 7));  // Stance Shift Ring
                    add(new DropInfo(1113108, 7));  // Totalling Ring
                    add(new DropInfo(1113109, 7));  // Level Jump S Ring
                    add(new DropInfo(1113110, 7));  // Level Jump D Ring
                    add(new DropInfo(1113111, 7));  // Level Jump I Ring
                    add(new DropInfo(1113112, 7));  // Level Jump L Ring
                    add(new DropInfo(1113113, 7));  // Weapon Jump S Ring
                    add(new DropInfo(1113114, 7));  // Weapon Jump D Ring
                    add(new DropInfo(1113115, 7));  // Weapon Jump I Ring
                    add(new DropInfo(1113116, 7));  // Weapon Jump L Ring
                    add(new DropInfo(1113117, 7));  // Swift Ring
                    add(new DropInfo(1113118, 7));  // Overdrive Ring
                    add(new DropInfo(1113119, 7));  // Berserker Ring
                    add(new DropInfo(1113120, 7));  // Reflective Ring
                    add(new DropInfo(1113121, 7));  // Cleansing Ring
                    add(new DropInfo(1113122, 3));  // Risk Taker Ring
                    add(new DropInfo(1113123, 7));  // Crisis H Ring
                    add(new DropInfo(1113124, 7));  // Crisis M Ring
                    add(new DropInfo(1113125, 7));  // Crisis HM Ring
                    add(new DropInfo(1113126, 7));  // Clean Stance Ring
                    add(new DropInfo(1113127, 7));  // Clean Defense Ring
                    add(new DropInfo(1113128, 7));  // Tower Boost Ring

                    add(new DropInfo(ItemConstants.INCREDIBLE_CHAOS_SCROLL_OF_GOODNESS_50, 5)); // ICoG 50
                    add(new DropInfo(ItemConstants.INCREDIBLE_CHAOS_SCROLL_OF_GOODNESS_60, 3)); // ICoG 60
                    add(new DropInfo(ItemConstants.INNOCENCE_SCROLL_50, 5)); // Inno 50
                    add(new DropInfo(ItemConstants.INNOCENCE_SCROLL_60, 5)); // Inno 60
                    add(new DropInfo(ItemConstants.INNOCENCE_SCROLL_100, 5)); // Inno 100

                    add(new DropInfo(ItemConstants.OZ_POINT_POUCH, 30, 2, 4));  // Oz Point Pouch ( 2 - 4 )
                    add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 30, 2500, 4000)); // Spell Trace (2500 - 4000)
        }});

        put(OzConstants.ALICIAS_RING_BOX_4,
                new HashSet<>() {{
                    add(new DropInfo(1113109, 3));  // Level Jump S Ring
                    add(new DropInfo(1113110, 3));  // Level Jump D Ring
                    add(new DropInfo(1113111, 3));  // Level Jump I Ring
                    add(new DropInfo(1113112, 3));  // Level Jump L Ring
                    add(new DropInfo(1113113, 3));  // Weapon Jump S Ring
                    add(new DropInfo(1113114, 3));  // Weapon Jump D Ring
                    add(new DropInfo(1113115, 3));  // Weapon Jump I Ring
                    add(new DropInfo(1113116, 3));  // Weapon Jump L Ring
                    add(new DropInfo(1113117, 4));  // Swift Ring
                    add(new DropInfo(1113118, 4));  // Overdrive Ring
                    add(new DropInfo(1113119, 4));  // Berserker Ring
                    add(new DropInfo(1113120, 4));  // Reflective Ring
                    add(new DropInfo(1113121, 4));  // Cleansing Ring
                    add(new DropInfo(1113122, 3));  // Risk Taker Ring
                    add(new DropInfo(1113123, 4));  // Crisis H Ring
                    add(new DropInfo(1113124, 4));  // Crisis M Ring
                    add(new DropInfo(1113125, 4));  // Crisis HM Ring
                    add(new DropInfo(1113126, 4));  // Clean Stance Ring
                    add(new DropInfo(1113127, 4));  // Clean Defense Ring
                    add(new DropInfo(1113128, 4));  // Tower Boost Ring

                    add(new DropInfo(ItemConstants.OZ_POINT_POUCH, 40, 1, 2));  // Oz Point Pouch ( 1 - 2 )
                    add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 40, 1500, 2000)); // Spell Trace (1500 - 2000)
        }});

        put(OzConstants.ALICIAS_RING_BOX_5,
                new HashSet<>() {{
                    add(new DropInfo(1113109, 3));  // Level Jump S Ring
                    add(new DropInfo(1113110, 3));  // Level Jump D Ring
                    add(new DropInfo(1113111, 3));  // Level Jump I Ring
                    add(new DropInfo(1113112, 3));  // Level Jump L Ring
                    add(new DropInfo(1113113, 3));  // Weapon Jump S Ring
                    add(new DropInfo(1113114, 3));  // Weapon Jump D Ring
                    add(new DropInfo(1113115, 3));  // Weapon Jump I Ring
                    add(new DropInfo(1113116, 3));  // Weapon Jump L Ring
                    add(new DropInfo(1113117, 4));  // Swift Ring
                    add(new DropInfo(1113118, 4));  // Overdrive Ring
                    add(new DropInfo(1113119, 4));  // Berserker Ring
                    add(new DropInfo(1113120, 4));  // Reflective Ring
                    add(new DropInfo(1113121, 4));  // Cleansing Ring
                    add(new DropInfo(1113122, 3));  // Risk Taker Ring
                    add(new DropInfo(1113123, 4));  // Crisis H Ring
                    add(new DropInfo(1113124, 4));  // Crisis M Ring
                    add(new DropInfo(1113125, 4));  // Crisis HM Ring
                    add(new DropInfo(1113126, 4));  // Clean Stance Ring
                    add(new DropInfo(1113127, 4));  // Clean Defense Ring
                    add(new DropInfo(1113128, 4));  // Tower Boost Ring

                    add(new DropInfo(ItemConstants.OZ_POINT_POUCH, 50, 1, 1));  // Oz Point Pouch ( 1 - 1 )
                    add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 50, 1000, 1500)); // Spell Trace (1000 - 1500)
        }});

        put(OzConstants.ALICIAS_RING_BOX_6,
                new HashSet<>() {{
                    add(new DropInfo(1113109, 2));  // Level Jump S Ring
                    add(new DropInfo(1113110, 2));  // Level Jump D Ring
                    add(new DropInfo(1113111, 2));  // Level Jump I Ring
                    add(new DropInfo(1113112, 2));  // Level Jump L Ring
                    add(new DropInfo(1113113, 2));  // Weapon Jump S Ring
                    add(new DropInfo(1113114, 2));  // Weapon Jump D Ring
                    add(new DropInfo(1113115, 2));  // Weapon Jump I Ring
                    add(new DropInfo(1113116, 2));  // Weapon Jump L Ring
                    add(new DropInfo(1113117, 4));  // Swift Ring
                    add(new DropInfo(1113118, 4));  // Overdrive Ring
                    add(new DropInfo(1113119, 4));  // Berserker Ring
                    add(new DropInfo(1113120, 4));  // Reflective Ring
                    add(new DropInfo(1113121, 4));  // Cleansing Ring
                    add(new DropInfo(1113122, 3));  // Risk Taker Ring
                    add(new DropInfo(1113123, 4));  // Crisis H Ring
                    add(new DropInfo(1113124, 4));  // Crisis M Ring
                    add(new DropInfo(1113125, 4));  // Crisis HM Ring
                    add(new DropInfo(1113126, 4));  // Clean Stance Ring
                    add(new DropInfo(1113127, 4));  // Clean Defense Ring
                    add(new DropInfo(1113128, 4));  // Tower Boost Ring

                    add(new DropInfo(ItemConstants.BROKEN_BOX_PIECE, 30, 4, 7));  // Broken Box Piece (4 - 7)
                    add(new DropInfo(ItemConstants.OZ_POINT_POUCH, 60, 1, 1));  // Oz Point Pouch ( 1 - 1 )
                    add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 60, 1000, 1500)); // Spell Trace (1000 - 1500)
        }});

        put(OzConstants.ALICIAS_RING_BOX_7,
                new HashSet<>() {{
                    add(new DropInfo(1113109, 1));  // Level Jump S Ring
                    add(new DropInfo(1113110, 1));  // Level Jump D Ring
                    add(new DropInfo(1113111, 1));  // Level Jump I Ring
                    add(new DropInfo(1113112, 1));  // Level Jump L Ring
                    add(new DropInfo(1113113, 1));  // Weapon Jump S Ring
                    add(new DropInfo(1113114, 1));  // Weapon Jump D Ring
                    add(new DropInfo(1113115, 1));  // Weapon Jump I Ring
                    add(new DropInfo(1113116, 1));  // Weapon Jump L Ring
                    add(new DropInfo(1113117, 3));  // Swift Ring
                    add(new DropInfo(1113118, 3));  // Overdrive Ring
                    add(new DropInfo(1113119, 3));  // Berserker Ring
                    add(new DropInfo(1113120, 3));  // Reflective Ring
                    add(new DropInfo(1113121, 3));  // Cleansing Ring
                    add(new DropInfo(1113122, 1));  // Risk Taker Ring
                    add(new DropInfo(1113123, 3));  // Crisis H Ring
                    add(new DropInfo(1113124, 3));  // Crisis M Ring
                    add(new DropInfo(1113125, 3));  // Crisis HM Ring
                    add(new DropInfo(1113126, 3));  // Clean Stance Ring
                    add(new DropInfo(1113127, 3));  // Clean Defense Ring
                    add(new DropInfo(1113128, 3));  // Tower Boost Ring

                    add(new DropInfo(ItemConstants.BROKEN_BOX_PIECE, 40, 3, 5));  // Broken Box Piece (3 - 5)
                    add(new DropInfo(ItemConstants.OZ_POINT_POUCH, 50, 1, 1));  // Oz Point Pouch ( 1 - 1 )
                    add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 50, 500, 800)); // Spell Trace (500 - 800)
        }});

        put(OzConstants.ALICIAS_RING_BOX_8,
                new HashSet<>() {{
                    add(new DropInfo(ItemConstants.BROKEN_BOX_PIECE, 50, 2, 4));  // Broken Box Piece (2 - 4)
                    add(new DropInfo(ItemConstants.OZ_POINT_POUCH, 60, 1, 1));  // Oz Point Pouch ( 1 - 1 )
                    add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 70, 300, 600)); // Spell Trace (300 - 600)
        }});

        put(OzConstants.ALICIAS_RING_BOX_9,
                new HashSet<>() {{
                    add(new DropInfo(ItemConstants.BROKEN_BOX_PIECE, 40, 1, 3));  // Broken Box Piece (1 - 3)
                    add(new DropInfo(ItemConstants.OZ_POINT_POUCH, 60, 1, 1));  // Oz Point Pouch ( 1 - 1 )
                    add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 80, 200, 500)); // Spell Trace (200 - 500)
        }});

        put(OzConstants.ALICIAS_RING_BOX_10,
                new HashSet<>() {{
                    add(new DropInfo(ItemConstants.BROKEN_BOX_PIECE, 30, 1, 1));  // Broken Box Piece (1 - 1)
                    add(new DropInfo(ItemConstants.OZ_POINT_POUCH, 60, 1, 1));  // Oz Point Pouch ( 1 - 1 )
                    add(new DropInfo(ItemConstants.SPELL_TRACE_ID, 80, 50, 150)); // Spell Trace (50 - 150)
        }});


        put(ItemConstants.HIDDEN_RING_BOX,
                new HashSet<>() {{
                    add(new DropInfo(1113098, 1));  // Ring of Restraint
                    add(new DropInfo(1113099, 60));  // Ultimatum Ring
                    add(new DropInfo(1113100, 60));  // Limit Ring
                    add(new DropInfo(1113101, 80));  // Health Cut Ring
                    add(new DropInfo(1113102, 80));  // Mana Cut Ring
                    add(new DropInfo(1113103, 20));  // Durability Ring
                    add(new DropInfo(1113104, 10));  // Critical Damage Ring
                    add(new DropInfo(1113105, 10));  // Critical Defense Ring
                    add(new DropInfo(1113106, 10));  // Critical Shift Ring
                    add(new DropInfo(1113107, 50));  // Stance Shift Ring
                    add(new DropInfo(1113108, 20));  // Totalling Ring
                    add(new DropInfo(1113109, 10));  // Level Jump S Ring
                    add(new DropInfo(1113110, 10));  // Level Jump D Ring
                    add(new DropInfo(1113111, 10));  // Level Jump I Ring
                    add(new DropInfo(1113112, 10));  // Level Jump L Ring
                    add(new DropInfo(1113113, 8));  // Weapon Jump S Ring
                    add(new DropInfo(1113114, 8));  // Weapon Jump D Ring
                    add(new DropInfo(1113115, 8));  // Weapon Jump I Ring
                    add(new DropInfo(1113116, 8));  // Weapon Jump L Ring
                    add(new DropInfo(1113117, 20));  // Swift Ring
                    add(new DropInfo(1113118, 25));  // Overdrive Ring
                    add(new DropInfo(1113119, 20));  // Berserker Ring
                    add(new DropInfo(1113120, 20));  // Reflective Ring
                    add(new DropInfo(1113121, 20));  // Cleansing Ring
                    add(new DropInfo(1113122, 20));  // Risk Taker Ring
                    add(new DropInfo(1113123, 50));  // Crisis H Ring
                    add(new DropInfo(1113124, 50));  // Crisis M Ring
                    add(new DropInfo(1113125, 15));  // Crisis HM Ring
                    add(new DropInfo(1113126, 80));  // Clean Stance Ring
                    add(new DropInfo(1113127, 80));  // Clean Defense Ring
                    add(new DropInfo(1113128, 70));  // Tower Boost Ring
        }});
    }};

    public static Set<DropInfo> getRewardPoolFromLotteryItem(int lotteryItemId) {
        if (lotteryItemRewardsMap.containsKey(lotteryItemId)) {
            return lotteryItemRewardsMap.get(lotteryItemId);
        }
        return new HashSet<>();
    }

    public static DropInfo getRandomItemFromRewardPool(int lotteryItemId) {
        var rewards = lotteryItemRewardsMap.get(lotteryItemId);

        return Util.getRandomDropInfoByChance(rewards);
    }
}
