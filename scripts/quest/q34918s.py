# id 34918 (Demolitions Expert Salvo), field 402000600
sm.setSpeakerID(3001400) # Zippy
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
res = sm.sendAskAccept("#face0#That's perfect! And now, do you think you could help gather food?")
sm.setSpeakerType(3)
sm.sendNext("#face0#Salvo organizes food procurement. If you find him, I'm sure he'll be able to tell you what we need.")
sm.startQuest(parentID)
