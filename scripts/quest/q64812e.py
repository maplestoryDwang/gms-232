# [NLC] In the Footsteps of the Krakians
# 64812
# Corine (9201094)

corine = 9201094

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
response = sm.sendAskYesNo("Were you able to find anything?")
if response:
    sm.sendNext("For now, it seems like we won't be able to use the broken path...")

    sm.giveExp(5457600)
    sm.completeQuest(parentID)
    sm.chatScript("You can now enter the Scorched Altar!")