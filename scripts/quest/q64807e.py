# [NLC] Deep Into the Jungle
# 64807
# Corine (9201094)

corine = 9201094

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
response = sm.sendAskYesNo("Have you thinned out the Jungle Bugs?")
if response:
    sm.sendNext("Obriga taru'teha. Thank you!")

    sm.giveExp(5457600)
    sm.completeQuest(parentID)