from net.swordie.ms.constants import BossConstants

fieldId = chr.getFieldID()

field.setProperty(BossConstants.GOLLUX_SPAWN_KEY, True)
sm.showGolluxMiniMap()
sm.showFieldEffect("Map/Effect.img/giantBoss/enter/" + str((parentID / 10) % 1000))


if field.hasProperty(BossConstants.GOLLUX_FINISHED_KEY) and field.getProperty(BossConstants.GOLLUX_FINISHED_KEY):
    sm.changeFoothold("open", True)
    sm.changeFoothold("clear", True)

sm.showGolluxMiniMap()