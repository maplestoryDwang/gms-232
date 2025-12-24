# id 37905 ([Sellas] Testing the Waters), field 450007170
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1540451) # Neinheart
sm.sendNext("#face2#With that said, Shubert is a veteran of Edelstein's #bdiving unit#k. I'm giving him command of the mission.")
sm.setParam(56)
sm.sendSay("Diving unit, huh?")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003502) # Shubert
sm.sendSay("#face0#A long time ago, yeah.")
sm.setInnerOverrideSpeakerTemplateID(1540451) # Neinheart
sm.sendSay("#face2#You know your equipment, I am sure you'll lead the other two well.")
sm.setSpeakerType(4)
sm.setSpeakerID(3004802) # Neinheart
res = sm.sendAskYesNo("#face2#When you're ready, step inside the submersible.")
sm.setSpeakerType(3)
sm.setInnerOverrideSpeakerTemplateID(3003502) # Shubert
sm.sendNext("#face0#Ollie and I are gonna load our gear into the sub. Come join us when you're ready.")
sm.startQuest(parentID)
sm.createQuestWithQRValue(37900, "00=h0;01=h0;02=h1;03=h0;41=h0;24=h1;25=h1;09=h1")
sm.createQuestWithQRValue(37900, "00=h0;01=h0;02=h1;03=h0;41=h0;24=h1;25=h1;09=h0")
sm.createQuestWithQRValue(37900, "00=h0;01=h0;20=h1;02=h1;03=h0;41=h0;24=h1;25=h1;09=h0")
sm.createQuestWithQRValue(37900, "00=h0;01=h0;20=h1;02=h1;21=h1;03=h0;41=h0;24=h1;25=h1;09=h0")
