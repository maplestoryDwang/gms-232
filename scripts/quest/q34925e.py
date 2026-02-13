# id 34925 (Crystal Excavation), field 402000600
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendNext("#face0#嗯……好了，首先，备用粮、武器和防具我想拜托商队的其他人去办。")
sm.sendSay("#face2#亚克，你负责的是……探索准备。和维依、巴克巴克一起……他们俩就拜托了。")
sm.sendSay("#face0#你先去见见维依然后再去帮巴克巴克做好准备。全部完成之后，再重新集合。")
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
sm.createQuestWithQRValue(parentID, "exp=1")
