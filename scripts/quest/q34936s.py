# id 34936 (Search and Success), field 402000648
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001509) # Salvo
sm.sendNext("#face2#Haha! Now it's time for my pyrotechnic magic! Yes!")
sm.setInnerOverrideSpeakerTemplateID(3001512) # Digs
sm.sendSay("#face0#This place looks familiar... I don't think I like it here.")
sm.setInnerOverrideSpeakerTemplateID(3001513) # Grit
sm.sendSay("#face0#Ferret, are we sure it's okay to use explosives here?")
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendSay("#face4#It's all right. We're a long way from that cave. It's very sturdy here.")
sm.sendSay("#face1#Hm, the signal is getting weaker. Time to do your thing, Salvo! And hurry!")
sm.setInnerOverrideSpeakerTemplateID(3001509) # Salvo
sm.sendSay("#face3#Yes! I get to blow stuff up!\r\nGet ready for some fun!")
sm.setSpeakerType(4)
sm.setSpeakerID(3001415) # Salvo
res = sm.sendAskAccept("#face4#Let's get started, everyone!")
sm.setSpeakerType(3)
sm.sendNext("#face3#Listen to the rhythm of your heaaart.\r\n Hit the button, and blast stuff apaaart!")
sm.warp(402090006)
