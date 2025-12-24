# id 34561 ([Esfera] The Strangers), field 993017200
sm.setSpeakerType(3)
sm.setParam(56)
sm.setColor(1)
sm.sendNext("What's up?")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003480) # Jean
sm.sendSay("#face13#I've heard some suspicious folks arrived in Morass the other day. Sounds like they've been looking for something.")
sm.setParam(56)
sm.sendSay("Suspicious folks? Suspicious how? ")
sm.setParam(36)
sm.sendSay("#face13#You'll know what I mean when you see 'em. Last anyone saw, they were headed for the dungeon. Might wanna look for 'em there. I'll see if I can find out what else they've been up to.")
sm.setSpeakerType(4)
sm.setSpeakerID(3003432) # Jean
sm.setParam(57)
res = sm.sendAskAccept("Should I head out now?")
sm.completeQuestNoCheck(parentID)
sm.warpInstanceIn(940204303)
