from net.swordie.ms.constants import BossConstants

field.setProperty(BossConstants.GOLLUX_FINISHED_KEY, True)
sm.golluxPortalOpen("phase3")
sm.golluxPortalOpen("clear")
sm.changeFoothold("phase3", True)
sm.changeFoothold("clear", True)

sm.showGolluxMiniMap()