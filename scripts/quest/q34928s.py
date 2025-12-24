# id 34928 (Ferreting Out the Signal), field 402000600
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendNext("#face0#Oh, good. You're here. Ferret got a better signal, and it turns out the crystal we need is in pieces and scattered all over the place.")
sm.sendSay("#face0#We should check the piece at the location closest to the refuge first, so we can get an idea of what we're dealing with.")
sm.setSpeakerType(4)
sm.setSpeakerID(3001400) # Zippy
res = sm.sendAskAccept("#face0#Ark, go with Ferret and check the first location.")
sm.setSpeakerType(3)
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendNext("#face4#Yes! The signal's coming from #r#m402000615##k. Let's check it out.")
sm.startQuest(parentID)
