# [NLC] Street Sweeping
# 64803
# Lita Lawless (9201054)

lita = 9201054

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(lita)
response = sm.sendAskYesNo("You're done already?!")
if response:
    sm.sendNext("That's the best news I've heard in days. I'd figured you'd take way longer than this.")

    sm.giveExp(5457600)
    sm.completeQuest(parentID)