# id 35909 (Helping Hand 2), field 100051000
sm.setSpeakerID(1013300) # Brie
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1013350) # Brie
res = sm.sendAskAccept("#face0#我需要#b10个#k可以从#r#o2300201##k身上获得的#b#i4036525# #t4036525##k。\r\n胖胖花就生活在#r#m100051013##k。")
sm.setSpeakerType(3)
sm.sendNext("#face2#那就拜托你了,勇士。\r\n啊,胖胖花的刺很尖,小心别被戳到。明白了吗？")
sm.startQuest(parentID)
