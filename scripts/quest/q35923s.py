# id 35923 (Compass Directions), field 100051030
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1013350) # Brie
sm.sendNext("#face0#呃……真的要走了,感觉也有点迈不动步。\r\n因为我也一次都没去过那里。")
sm.setSpeakerType(4)
sm.setSpeakerID(1013309) # Brie
res = sm.sendAskAccept("#face0#但是不能就此放弃。\r\n既然决定了要解决问题,就必须坚持到底。")
sm.setSpeakerType(3)
sm.setParam(548)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendNext("#face6#要是敢碍我的事,我就一个人去好了。")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1013350) # Brie
sm.sendSay("#face0#呃啊,我会努力的,绝对不会拖你的后腿！\r\n我一定要查明怪声的原因,拯救村子。快出发吧。")
sm.startQuest(parentID)
sm.createQuestWithQRValue(35948, "00=h0;10=h0;11=h1;02=h1;21=h0;12=h0;22=h1;13=h0;23=h1;14=h0;24=h0;15=h0;06=h0;25=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0")
sm.createQuestWithQRValue(35948, "00=h0;10=h0;11=h1;02=h1;21=h0;12=h0;22=h1;13=h0;23=h1;14=h0;24=h0;15=h0;06=h0;25=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h1")
