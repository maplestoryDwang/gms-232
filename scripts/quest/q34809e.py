# id 34809 (A Stranger's Cries), field 402000513
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendNext("#face0#啊，那个！是我们班的卡尼里恩啊！")
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(3001308) # Carnelian
sm.sendSay("#face0#(看起来心情不太好。过去跟她聊聊吧。)")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face0#卡尼里恩……？")
sm.setInnerOverrideSpeakerTemplateID(3001308) # Carnelian
sm.sendSay("#face2#莫里奥……伊利温……")
sm.completeQuestNoCheck(parentID)
sm.createQuestWithQRValue(parentID, "exp=1")
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/02/21/16/30")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face0#有什么……事吗？")
sm.createQuestWithQRValue(16700, "count=152;date=20190221")
sm.createQuestWithQRValue(16700, "count=153;date=20190221")
sm.createQuestWithQRValue(16700, "count=154;date=20190221")
sm.lockInGameUI(False, True)
