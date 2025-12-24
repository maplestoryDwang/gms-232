# Rare Treasure Chest
from net.swordie.ms.constants import ItemConstants
from net.swordie.ms.util import Util

totem_chance = 8

rewards = [
    ItemConstants.MIRACULOUS_CHAOS_SCROLL_50,
    ItemConstants.CHAOS_SCROLL_OF_GOODNESS_50,
    ItemConstants.ETERNAL_REBIRTH_FLAME
]

totems = [
    1202181,
    1202182,
    1202183,
    1202184,
    1202185,
    1202186,
]

item = rewards[sm.getRandomIntBelow(len(rewards))]
totem = totems[sm.getRandomIntBelow(len(totems))]
getTotem = Util.succeedProp(totem_chance)

if sm.hasAnyFullInventory():
    sm.chat("Please make some space before opening this.")
else:
    sm.giveItem(item)
    if getTotem:
        sm.giveItem(totem)
    sm.consumeItem(parentID)
