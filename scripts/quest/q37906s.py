# id 37906 ([Sellas] Suiting Up), field 450016000
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3003502) # Shubert
sm.sendNext("#face0#信号来源就在附近。正在周期性地发出震动。")
sm.setInnerOverrideSpeakerTemplateID(3003500) # Ollie
sm.sendSay("#face3#那是我们要找的目标吗？")
sm.setInnerOverrideSpeakerTemplateID(3003502) # Shubert
sm.sendSay("#face0#有很大可能。我们再靠近点。\r\n沃莉，你看着机器，告诉我是哪个方向。")
sm.setInnerOverrideSpeakerTemplateID(3003500) # Ollie
sm.sendSay("#face3#哦……嗯……那个……")
sm.sendSay("#face1#好像……在下面……")
sm.setInnerOverrideSpeakerTemplateID(3003502) # Shubert
sm.sendSay("#face0#那倒是……")
sm.sendSay("#face0#从这里往后的路，潜水艇进不去。我们下艇搜索吧。")
sm.setSpeakerType(4)
sm.setSpeakerID(3004804) # Shubert
res = sm.sendAskYesNo("#face0#我先过去了。你准备好就出来。")
sm.startQuest(parentID)
sm.createQuestWithQRValue(37900, "00=h0;01=h0;20=h0;02=h1;21=h0;03=h0;04=h0;41=h0;24=h1;25=h1;09=h0")
sm.createQuestWithQRValue(37900, "00=h0;10=h0;01=h0;20=h0;02=h1;21=h0;03=h0;04=h0;41=h0;24=h1;25=h1;09=h0")
sm.createQuestWithQRValue(37900, "00=h0;10=h0;01=h0;20=h0;02=h1;21=h0;03=h0;04=h0;05=h1;41=h0;24=h1;25=h1;09=h0")
sm.createQuestWithQRValue(37900, "00=h0;10=h0;01=h0;11=h1;20=h0;02=h1;21=h0;03=h0;04=h0;05=h1;41=h0;24=h1;25=h1;09=h0")
sm.warp(450016020)
