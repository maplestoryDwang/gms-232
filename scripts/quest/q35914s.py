# id 35914 (Ancient Compass), field 100051030
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1013351) # Gorgonz
sm.sendNext("#face0#我有个用来找东西的罗盘。\r\n只要把与想找的东西有关的东西放上去,它就会指出方向。")
sm.setSpeakerType(4)
sm.setSpeakerID(1013310) # Gorgonz
res = sm.sendAskAccept("#face0#要是感兴趣,就跟我来。\r\n就在房子后面,不用走太远。")
sm.setSpeakerType(3)
sm.setParam(548)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendNext("#face0##b(和想找的东西有关的东西……\r\n那么把遗物放上去,也许就能找到某种和遗迹有关的东西。)#k")
sm.startQuest(parentID)
sm.createQuestWithQRValue(35948, "00=h0;10=h1;11=h0;02=h1;12=h0;22=h1;13=h0;23=h1;14=h0;15=h0;06=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0")
sm.createQuestWithQRValue(35948, "00=h0;10=h0;11=h0;02=h1;12=h0;22=h1;13=h0;23=h1;14=h0;15=h0;06=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0")
