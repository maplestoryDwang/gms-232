# id 34564 ([Esfera] High and Dry), field 450007010
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3003500) # Ollie
sm.sendNext("#face3##h0#, do you see that over there? I don't think these coral trees burn but I see a... Tree-like object moving around.")
sm.setParam(56)
sm.sendSay("I don't see anything over there. You must have real good eyes, Ollie.")
sm.setParam(36)
sm.sendSay("#face0#Hey, they made me a scout for a reason.")
sm.setSpeakerType(4)
sm.setSpeakerID(3003542) # Ollie
res = sm.sendAskAccept("#face0#Whatever it is, I bet we could burn it to dry the flare out. Let's get going.")
sm.startQuest(parentID)
sm.setSpeakerType(3)
sm.sendNext("#face0#Follow me! We'll need to head out to #bLiving Spring 4#k.")
sm.createQuestWithQRValue(34560, "30=h0;40=h0;41=h0;42=h0")
sm.warp(450007030)
