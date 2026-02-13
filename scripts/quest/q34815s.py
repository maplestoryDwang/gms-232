# id 34815 (A Divine Festival 3), field 402000529
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendNext("#face0#这次去找一种更稀有的金属#i4036170# #b#t4036170##k吧。这次差不多也需要#b10个#k左右。")
sm.setSpeakerType(4)
sm.setSpeakerID(3001339) # Illium Statue
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
res = sm.sendAskAccept("#face0#决定立即前往#r#o2400405##k所在地吗？\r\n#b(接受时将自动移动。)")
sm.startQuest(parentID)
sm.warp(402000509)
