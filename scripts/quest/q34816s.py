# id 34816 (A Divine Festival 4), field 402000529
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendNext("#face0#为了制作造型物,你能帮我收集一些#i4036171# #b#t4036171##k来吗？至少需要#b10个#k。")
sm.setSpeakerType(4)
sm.setSpeakerID(3001339) # Illium Statue
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
res = sm.sendAskAccept("#face0#决定立即前往#r#o2400406##k所在地吗？\r\n#b(接受时将自动移动。)")
sm.startQuest(parentID)
sm.warp(402000504)
