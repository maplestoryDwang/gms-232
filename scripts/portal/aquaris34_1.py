# Portal in Tower Of Oz F34
# Teleports User with 10 Yellow Leather to the top to kill purple curly cows
#
from net.swordie.ms.constants import OzConstants

if sm.hasItem(OzConstants.YELLOW_LEATHER, OzConstants.F34_ITEMS_LOOTED):
    sm.teleportToPortal(5)
    sm.consumeItem(OzConstants.YELLOW_LEATHER, OzConstants.F34_ITEMS_LOOTED)

