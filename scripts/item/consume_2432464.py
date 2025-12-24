# Oz Point Points (Oz Tower)
# 2432464
#
from net.swordie.ms.client.partyquests.towerofoz import OzTowerModule
from net.swordie.ms.constants import OzConstants
from net.swordie.ms.util import Util

points = Util.getRandom(OzConstants.OZ_POINTS_FROM_POUCH_MIN, OzConstants.OZ_POINTS_FROM_POUCH_MAX)
chr.chatMessage("You gained {} Oz points".format(points))
OzTowerModule.increaseOzPoints(chr, points)
sm.consumeItem(parentID)