# [NLC] The Altar of the Krakians
# 64813
# Corine (9201094)

corine = 9201094

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("You're back!")
sm.sendNext("Unfortunately, the altar showed no signs of use.")

sm.setParam(57)
sm.sendNext("The good news is that there are three altars here, so it's too early to give up hope yet!")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("Thank you. It's not every day I get to hear words of encouragement.")

sm.giveExp(5457600)
sm.completeQuest(parentID)
sm.chatScript("You can now enter the Land of Sacrifices!")