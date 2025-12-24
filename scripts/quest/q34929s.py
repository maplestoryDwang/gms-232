# id 34929 (Divide and Locate), field 402000600
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendNext("#face0#(The caravaners look hopeful but anxious as you show them the crystal shard and explain that there are two more to find.)")
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendSay("#face3#We may have to go out pretty far from the refuge to recover the other two.")
sm.setSpeakerType(4)
sm.setSpeakerID(3001400) # Zippy
res = sm.sendAskAccept("#face3#When you're ready to go, would you come to #r#m402000620##k?\r\nIt might be a long trip, so I want to say goodbye.")
sm.setSpeakerType(3)
sm.sendNext("#face0#And I'll gather the other caravaners, so we can give \r\nyou a good send-off for luck. See you there!")
sm.startQuest(parentID)
