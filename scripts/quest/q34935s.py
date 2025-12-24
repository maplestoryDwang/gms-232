# id 34935 (Gritty Escape), field 402000635
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendNext("#face6#I'm... I'm okay. Let's get out of here. We've got to find the last piece of the crystal.")
sm.setSpeakerType(4)
sm.setSpeakerID(3001414) # Ferret
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
res = sm.sendAskAccept("#face2#Right. Let's get aboveground everyone.")
sm.setSpeakerType(3)
sm.sendNext("#face4#We're lucky. I've got a strong lock on the signal for the last piece.")
sm.startQuest(parentID)
sm.createQuestWithQRValue(34995, "00=h1;01=h0;10=h0;02=h0;11=h0;12=h0;04=h0;13=h0;05=h0;14=h0;23=h0;06=h0;15=h0;24=h0;07=h0;16=h0;17=h0;09=h0")
sm.createQuestWithQRValue(34995, "00=h1;01=h0;10=h0;02=h0;11=h0;12=h0;04=h0;13=h0;05=h0;14=h0;23=h0;06=h0;15=h1;24=h0;07=h0;16=h0;17=h0;09=h0")
sm.createQuestWithQRValue(34995, "00=h1;01=h0;10=h0;02=h0;11=h0;12=h0;04=h0;13=h0;05=h0;14=h0;23=h0;06=h0;15=h1;24=h0;07=h0;16=h1;17=h0;09=h0")
sm.warp(402090012)
