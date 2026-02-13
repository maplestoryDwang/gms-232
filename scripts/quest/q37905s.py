# id 37905 ([Sellas] Testing the Waters), field 450007170
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1540451) # Neinheart
sm.sendNext("#face2#那么，现场指挥就请休麦负责。\r\n据我所知，你过去曾在埃德尔斯坦的#b潜水部队#k服役过。")
sm.setParam(56)
sm.sendSay("#face0#是也有过那样的时候。")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003502) # Shubert
sm.sendSay("#face2#他能娴熟地操作各种装备，一定可以很好地领导二位。")
sm.setInnerOverrideSpeakerTemplateID(1540451) # Neinheart
sm.sendSay("#face2#等你准备好了，就进入潜水艇。")
sm.setSpeakerType(4)
sm.setSpeakerID(3004802) # Neinheart
res = sm.sendAskYesNo("#face0#我和沃莉先去潜水艇里进行修整，你准备好了就进来。")
sm.setSpeakerType(3)
sm.setInnerOverrideSpeakerTemplateID(3003502) # Shubert
sm.sendNext("潜水部队？")
sm.startQuest(parentID)
sm.createQuestWithQRValue(37900, "00=h0;01=h0;02=h1;03=h0;41=h0;24=h1;25=h1;09=h1")
sm.createQuestWithQRValue(37900, "00=h0;01=h0;02=h1;03=h0;41=h0;24=h1;25=h1;09=h0")
sm.createQuestWithQRValue(37900, "00=h0;01=h0;20=h1;02=h1;03=h0;41=h0;24=h1;25=h1;09=h0")
sm.createQuestWithQRValue(37900, "00=h0;01=h0;20=h1;02=h1;21=h1;03=h0;41=h0;24=h1;25=h1;09=h0")
