# [NLC] Escape from the Jungle
# 64809
# Elpam Gorlab (9201055)

elpam = 9201055

floraSample = 4036626

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(elpam)
sm.sendNext("#face0#Ah, you're back, and with the samples, too! "
"I can't wait to start analyzing them!")
sm.sendNext("#face0#Oh, right! Corine said she has something she'd like to ask your help with. "
"Could you speak with her and see what she needs?")

sm.giveExp(5457600)
sm.completeQuest(parentID)
sm.consumeItem(floraSample, 50)