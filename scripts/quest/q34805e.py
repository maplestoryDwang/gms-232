# id 34805 (Making a Crystal Gate 1), field 402000530
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001304) # Professor Citrine
sm.sendNext("#face0#虽然算不上出众,但你的表现已经很不错了。那下节课见。慢走。")
sm.completeQuestNoCheck(parentID)
sm.createQuestWithQRValue(parentID, "exp=1")
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/02/21/16/19")
sm.setInnerOverrideSpeakerTemplateID(3001310) # Morian
sm.sendSay("#face0#伊利温！我要走了,下次再一起吧！")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face9#啊！嗯！下次见！")
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
sm.sendSay("#face0#今天的课程全部结束了,最好去拜访一下阿加特大人。我带你去校长室吧。")
sm.lockInGameUI(False, True)
