# id 35917 (Fragmented Compass), field 100051030
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1013350) # Brie
sm.sendNext("#face0#唉……真是乱来。向勇士提出了这么多奇怪的要求。\r\n他其实不是个坏人。")
sm.sendSay("#face0#啊,对了。快去找罗盘碎片吧。\r\n从现在开始,我来给你带路。")
sm.setSpeakerType(4)
sm.setSpeakerID(1013309) # Brie
res = sm.sendAskAccept("#face2#嘿嘿,和我一起去,应该很快就能找到罗盘碎片。\r\n因为我很熟悉这里的路。好了……你想跟我一起去吗？")
sm.setSpeakerType(3)
sm.sendNext("#face2#好的,请跟我来,勇士。\r\n嘿嘿,我们快到森林虫之地去寻找罗盘碎片吧～！")
sm.createQuestWithQRValue(35948, "00=h0;10=h0;11=h1;02=h1;12=h0;22=h1;13=h0;23=h1;14=h0;15=h0;06=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0")
sm.createQuestWithQRValue(35948, "00=h0;10=h0;11=h1;02=h1;12=h1;22=h1;13=h0;23=h1;14=h0;15=h0;06=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0")
sm.startQuest(parentID)
