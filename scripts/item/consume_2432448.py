# Seal Breaker Card
# 2432448
# Used in Tower of Oz Floor 2. To Cheat the Seal Breakers
#
from net.swordie.ms.client.partyquests.towerofoz import OzTowerModule
from net.swordie.ms.constants import OzConstants

colours = ["r", "g", "b", "y"]


instance = chr.getInstance()
if instance is not None:

    number = sm.getRandomIntBelow(8) + 1  # 1, 2, 3, 4, 5, 6, 7, 8
    colour = colours[sm.getRandomIntBelow(len(colours))]  # 0, 1, 2, 3
    display_colour = colour if number < 8 else "v"

    instance.addProperty(OzConstants.F2_CURRENT_CARD_COLOUR, display_colour)
    instance.addProperty(OzConstants.F2_CURRENT_CARD_NUMBER, number)
    OzTowerModule.showSealBreakerCard(instance, colour, display_colour, number)

