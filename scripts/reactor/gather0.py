from net.swordie.ms.constants import GameConstants
from net.swordie.ms.util import Util

ROSE_CLIPPING = 4032933
ROSE_CLIPPING_CHANCE = 5

MIN_DROP = 1
MAX_DROP = 5

reactor.incHitCount()
reactor.increaseState()
if reactor.getHitCount() >= 4:
    herb = GameConstants.HARVEST_HERB_START <= parentID <= GameConstants.HARVEST_HERB_END

    dropQuants = []
    drops = GameConstants.getGatherDrops(parentID)

    if  Util.succeedProp(ROSE_CLIPPING_CHANCE):
        dropQuants.append([ROSE_CLIPPING, 1])

    reqLevel = parentID % 100
    reqLevel = 10 if reqLevel > 10 else reqLevel
    sm.increaseMasteryAndShowSuccess(reqLevel, herb)

    for itemId in drops:
        dropQuants.append([itemId, sm.getRandomIntBetween(MIN_DROP, MAX_DROP)])

    pos = reactor.getPosition()
    sm.dropItemsWithQuantity(dropQuants, pos.getX(), pos.getY(), chr.getId())
    sm.removeReactor()
