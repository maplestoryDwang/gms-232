# [NLC] A Brush with Trouble
# 64810
# Corine (9201094)

corine = 9201094

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(corine)
sm.sendNext("Thank you, my friend!")
sm.sendNext("There's still no shortage of screamers in the jungle, "
"but at least that area will know relief for a while thanks to you.")

sm.giveExp(5457600)
sm.completeQuest(parentID)
sm.chatScript("You can now enter the Jungle Clearing in the Krakian Jungle!")