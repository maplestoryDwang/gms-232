# id 37906 ([Sellas] Suiting Up), field 450016000
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3003502) # Shubert
sm.sendNext("#face0#Ooh, contact right away, close by. It's making regular pulses.")
sm.setInnerOverrideSpeakerTemplateID(3003500) # Ollie
sm.sendSay("#face3#Think it's our target?")
sm.setInnerOverrideSpeakerTemplateID(3003502) # Shubert
sm.sendSay("#face0#It definitely could be. Let's get a little closer. Ollie, keep an eye on the screen and give me a heading.")
sm.setInnerOverrideSpeakerTemplateID(3003500) # Ollie
sm.sendSay("#face3#Uh... hmm... so...")
sm.sendSay("#face1#I think it's... down below us.")
sm.setInnerOverrideSpeakerTemplateID(3003502) # Shubert
sm.sendSay("#face0#Yeah, figures.")
sm.sendSay("#face0#It wouldn't be easy to get the submersible any closer. We'll have to go out in diving suits.")
sm.setSpeakerType(4)
sm.setSpeakerID(3004804) # Shubert
res = sm.sendAskYesNo("#face0#I'll take point. Come out when you're ready.")
sm.startQuest(parentID)
sm.createQuestWithQRValue(37900, "00=h0;01=h0;20=h0;02=h1;21=h0;03=h0;04=h0;41=h0;24=h1;25=h1;09=h0")
sm.createQuestWithQRValue(37900, "00=h0;10=h0;01=h0;20=h0;02=h1;21=h0;03=h0;04=h0;41=h0;24=h1;25=h1;09=h0")
sm.createQuestWithQRValue(37900, "00=h0;10=h0;01=h0;20=h0;02=h1;21=h0;03=h0;04=h0;05=h1;41=h0;24=h1;25=h1;09=h0")
sm.createQuestWithQRValue(37900, "00=h0;10=h0;01=h0;11=h1;20=h0;02=h1;21=h0;03=h0;04=h0;05=h1;41=h0;24=h1;25=h1;09=h0")
sm.warp(450016020)
