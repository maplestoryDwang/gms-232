# id 37904 ([Sellas] Dive, Dive, Dive), field 450007040
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3004324) # Cygnus Soldier
sm.sendNext("#face0#南哈特。（窃窃私语）……")
sm.setInnerOverrideSpeakerTemplateID(1540451) # Neinheart
sm.sendSay("#face2#啊，正巧准备工作刚刚结束。")
sm.setSpeakerType(4)
sm.setSpeakerID(3004801) # Neinheart
res = sm.sendAskYesNo("#face2#有东西给你们看。大家走吧。")
sm.startQuest(parentID)
sm.createQuestWithQRValue(37900, "00=h0;01=h0;41=h0")
sm.createQuestWithQRValue(37900, "00=h0;01=h0;02=h1;41=h0")
sm.createQuestWithQRValue(37900, "00=h0;01=h0;02=h1;03=h1;41=h0")
sm.createQuestWithQRValue(37900, "00=h0;01=h0;02=h1;03=h1;41=h0;09=h1")
sm.createQuestWithQRValue(37900, "00=h0;01=h0;02=h1;03=h1;41=h0;24=h1;09=h1")
sm.createQuestWithQRValue(37900, "00=h0;01=h0;02=h1;03=h1;41=h0;24=h1;25=h1;09=h1")
sm.warp(450007170)
