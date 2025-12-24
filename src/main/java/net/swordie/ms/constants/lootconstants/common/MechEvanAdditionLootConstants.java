package net.swordie.ms.constants.lootconstants.common;

import net.swordie.ms.life.drop.DropInfo;

import java.util.Arrays;
import java.util.List;

/**
 * Created on 30/12/2021.
 *
 * @author Asura
 */
public class MechEvanAdditionLootConstants {
    public static final List<DropInfo> EVAN_GOLD_ADDITION_LOOT = Arrays.asList(
            new DropInfo(1942001, 1000),  // Gold Mask
            new DropInfo(1952001, 1000),  // Gold Pendant
            new DropInfo(1962001, 1000),  // Gold Wings
            new DropInfo(1972001, 1000)   // Gold Tail
    );

    public static final List<DropInfo> MECH_PURE_GOLD_ADDITION_LOOT = Arrays.asList(
            new DropInfo(1612004, 1000),  // Pure Gold Engine
            new DropInfo(1622004, 1000),  // Pure Gold Machine Arm
            new DropInfo(1632003, 1000),  // Pure Gold Machine Leg
            new DropInfo(1642002, 1000),  // Pure Gold Body Frame
            new DropInfo(1652004, 1000)   // Pure Gold Transistor
    );
}
