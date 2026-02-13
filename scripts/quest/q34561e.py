# id 34561 ([Esfera] The Strangers), field 993017200
sm.setSpeakerType(3)
sm.setParam(56)
sm.setColor(1)
sm.sendNext("出什么事了？")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003480) # Jean
sm.sendSay("#face13#有报告说出现了一些可疑的家伙。\r\n好像正在窥探莫拉斯内部。")
sm.setParam(56)
sm.sendSay("#face13#他们好像进入了地下监狱。快跟我来。\r\n我想搜集更多关于这些人的情报。")
sm.setParam(36)
sm.sendSay("要现在就去吗？")
sm.setSpeakerType(4)
sm.setSpeakerID(3003432) # Jean
sm.setParam(57)
res = sm.sendAskAccept("可疑的家伙？")
sm.completeQuestNoCheck(parentID)
sm.warpInstanceIn(940204303)
