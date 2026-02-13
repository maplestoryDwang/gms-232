# id 34918 (Demolitions Expert Salvo), field 402000600
sm.setSpeakerID(3001400) # Zippy
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
res = sm.sendAskAccept("#face0#现在这里的东西好像足够了。可，可以的话，你能去帮助搜集粮食吗？")
sm.setSpeakerType(3)
sm.sendNext("#face0#搜集粮食的事情由巴克巴克负责。你去找他，他就会告诉你需要什么东西。")
sm.startQuest(parentID)
