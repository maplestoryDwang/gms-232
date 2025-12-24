# Tower of Oz stage 18
from net.swordie.ms.constants import OzConstants

reactor.incHitCount()
if reactor.getHitCount() >= 4:
    x, y = sm.getPosition(objectID).getX(), sm.getPosition(objectID).getY()
    sm.dropItem(OzConstants.COCONUT, x, y)
    sm.removeReactor()
