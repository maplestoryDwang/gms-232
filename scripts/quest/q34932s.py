# id 34932 (Sandy Depths), field 402000630
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendNext("#face0#At least we're still getting a signal...")
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendSay("#face0#Lead the way.")
sm.setSpeakerType(4)
sm.setSpeakerID(3001411) # Ferret
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
res = sm.sendAskAccept("#face0#Okay. We can just follow it until we find them.")
sm.createQuestWithQRValue(34995, "00=h1;01=h0;10=h0;02=h0;11=h0;12=h0;04=h0;13=h0;05=h0;14=h0;23=h0;06=h0;15=h0;24=h0;07=h0;16=h0;17=h0;09=h0")
sm.createQuestWithQRValue(34995, "00=h1;01=h0;10=h0;02=h0;11=h0;12=h1;04=h0;13=h0;05=h0;14=h0;23=h0;06=h0;15=h0;24=h0;07=h0;16=h0;17=h0;09=h0")
sm.startQuest(parentID)
