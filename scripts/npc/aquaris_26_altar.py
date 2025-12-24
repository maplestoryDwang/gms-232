# Burning Altar
# 2540020
# Sacrifice 10 Slime Liquid to increase the spawn rate in Tower Of Oz Floor 26

from net.swordie.ms.constants import OzConstants

pos_list = [
    [-1250, -640],
    [-1250, -400],
    [-1250, -160],
    [-1250, 80],

    [-850, -700], [-600, -700],
    [-850, -460], [-600, -460],
    [-850, -220], [-600, -220],
    [-850, 20], [-600, 20],

    [600, -700], [850, -700],
    [600, -460], [850, -460],
    [600, -220], [850, -220],
    [600, 20], [850, 20],

    [1250, -640],
    [1250, -400],
    [1250, -160],
    [1250, 80],
]

if sm.hasItem(OzConstants.ORANGE_SLIME_LIQUID, OzConstants.ORANGE_SLIME_LIQUID_REQ):
    sm.consumeItem(OzConstants.ORANGE_SLIME_LIQUID, OzConstants.ORANGE_SLIME_LIQUID_REQ)

    for _ in range(OzConstants.SPAWNED_PER_ALTAR):
        rand_pos = pos_list[sm.getRandomIntBelow(len(pos_list))]
        x = rand_pos[0]
        y = rand_pos[1]

        sm.spawnMob(OzConstants.ORANGE_ANCIENT_SLIME, x, y, False)
