# id 35910 (Helping Hand 3), field 100051000
sm.setSpeakerID(1013300) # Brie
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1013350) # Brie
res = sm.sendAskAccept("#face0#我需要#b10个#k从#r#o2300202##k身上可以获得的#b#i4036526# #t4036526##k。\r\n毒毒花生活在#r#m100051013##k。")
sm.setSpeakerType(3)
sm.sendNext("#face2#那就拜托你了,勇士。\r\n啊,毒毒花含有剧毒,一定要小心。明白了吗？")
sm.startQuest(parentID)
