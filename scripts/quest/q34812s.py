# id 34812 (A Special Day), field 402000530
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001301) # Agate
sm.sendNext("#face1#伊利温,今天进行特别活动的地点有些不同。请到#m402000501#来吧。")
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
res = sm.sendAskAccept("#face0#决定立即前往#m402000501#吗？\r\n#b(接受时将自动移动。)")
sm.startQuest(parentID)
sm.warp(402000501)
