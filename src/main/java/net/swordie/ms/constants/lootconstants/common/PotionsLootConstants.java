package net.swordie.ms.constants.lootconstants.common;

import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.life.drop.DropInfo;

import java.util.ArrayList;
import java.util.List;

/**
 * Created on 31/12/2021.
 *
 * @author Asura
 */
public class PotionsLootConstants {
    public static final List<DropInfo> POTIONS_LOOT = new ArrayList<>() {{
        add(new DropInfo(ItemConstants.POWER_ELIXIR, 7000, 15, 30));
        add(new DropInfo(ItemConstants.REINDEER_MILK, 7000, 15, 30));
        add(new DropInfo(ItemConstants.ELIXIR, 7000, 15, 30));
        add(new DropInfo(ItemConstants.SUNRISE_DEW, 7000, 15, 30));
        add(new DropInfo(ItemConstants.SUNSET_DEW, 7000, 15, 30));
    }};
}
