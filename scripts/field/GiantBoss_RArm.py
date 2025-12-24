from net.swordie.ms.constants import BossConstants

GOLLUX_R_SHOULDER = 9390610

sm.showFieldEffect("Map/Effect.img/giantBoss/enter/" + str((parentID / 10) % 1000))
spawned = field.hasProperty(BossConstants.GOLLUX_SPAWN_KEY) and field.getProperty(BossConstants.GOLLUX_SPAWN_KEY)
if not spawned:
    field.setProperty(BossConstants.GOLLUX_SPAWN_KEY, True)
    sm.spawnMob(GOLLUX_R_SHOULDER, -19, 69, False, BossConstants.GOLLUX_R_SHOULDER_HP)
sm.showGolluxMiniMap()