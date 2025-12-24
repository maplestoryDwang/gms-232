# [NLC] Naricain's Blood
# 64817
# Elpam Gorlab (9201055)

elpam = 9201055

ecologicalSample = 4036627

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(elpam)
sm.sendNext("#face0#Ah, you brought the ecological samples!")
sm.sendNext("#face0#Sweet success! My hyopthesis was correct. "
"All flora and fauna--in fact, all life forms originating in this jungle--are contaminated with #rNaricain's Blood#k.")

sm.giveExp(5457600)
sm.completeQuest(parentID)
sm.consumeItem(ecologicalSample, 50)