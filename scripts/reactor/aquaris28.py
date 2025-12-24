# Tower of Oz stage 28
from net.swordie.ms.constants import OzConstants
from net.swordie.ms.util import Util

positions = [
    [-450, -445], [750, -445],
    [-250, -205], [450, -205],
    [-800, 95], [900, 95],
    [-650, 275], [730, 275],
]

reactor.incHitCount()
if reactor.getHitCount() > 3:
    reactor.setHitCount(0)

    rand_pos = positions[sm.getRandomIntBelow(len(positions))]

    x, y = rand_pos[0], rand_pos[1]
    for i in range(OzConstants.F28_MOBS_SPAWNED_PER_ACTIVATION):
        if Util.getRandomBool():
            sm.spawnMob(OzConstants.BELLAMOA, x, y, False)
        else:
            sm.spawnMob(OzConstants.PLEAD, x, y, False)

