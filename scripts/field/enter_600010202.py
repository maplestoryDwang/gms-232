# Gigantic Excavator Drill
# 600010202
# User enter script
# Post Cerberusian Gigantic Drill defeat cutscene.

youKnowTheDrill = 64824

nlc = 600000000

sm.lockInGameUI(True, False)
sm.blind(1, 255, 0, 0)
sm.sendDelay(1000)

sm.blind(0, 0, 0, 1000)
sm.sendDelay(2000)

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(57)
sm.sendNext("Yeah! I really smashed up that gigantic drill!")
sm.sendNext("...Am I gonna get teleported again?")

sm.blind(1, 255, 255, 255, 255, 2000)
sm.sendDelay(3000)
sm.lockInGameUI(False)

sm.completeQuest(youKnowTheDrill)
sm.warp(nlc)