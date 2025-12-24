# Tower of Oz stage 18
from net.swordie.ms.constants import OzConstants

reactor.incHitCount()
if reactor.getHitCount() >= 3:
    x, y = sm.getPosition(objectID).getX(), sm.getPosition(objectID).getY()
    for i in range(10):
        sm.spawnMob(OzConstants.CLANG, x, y, False, OzConstants.F18_MOB_HP)
        sm.spawnMob(OzConstants.LORANG, x, y, False, OzConstants.F18_MOB_HP)
    sm.removeReactor()
