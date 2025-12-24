from net.swordie.ms.constants import BossConstants

GOLLUX_ABDOMEN = 9390612

sm.showFieldEffect("Map/Effect.img/giantBoss/enter/" + str((parentID / 10) % 1000))
spawned = field.hasProperty(BossConstants.GOLLUX_SPAWN_KEY) and field.getProperty(BossConstants.GOLLUX_SPAWN_KEY)
if not spawned:
    field.setProperty(BossConstants.GOLLUX_SPAWN_KEY, True)
    sm.spawnMob(GOLLUX_ABDOMEN, -20, 87, False, BossConstants.GOLLUX_ABDOMEN_HP)
sm.showGolluxMiniMap()