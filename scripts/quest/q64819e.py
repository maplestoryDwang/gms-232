# [NLC] The Final Clue
# 64819
# Elpam Gorlab (9201055)

elpam = 9201055

lianium = 4009481

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(elpam)
sm.sendNext("#face0#Oh! Have you found any #bRefined Lianium#k?")
sm.sendNext("#face0#Ahh, most excellent. I will begin my research immediately.")

sm.giveExp(5457600)
sm.completeQuest(parentID)
sm.consumeItem(lianium)