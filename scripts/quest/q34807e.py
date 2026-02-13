# id 34807 (Dean's Lost Stuff), field 402000532
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001307) # Dean
sm.sendNext("#face1#哇！这不是我的东西嘛！！真是太感谢你了,伊利温！")
sm.sendSay("#face1#你可真善良！今后我们常联络吧！谢啦！")
sm.sendSay("#face3#那有缘再见！")
sm.completeQuestNoCheck(parentID)
sm.createQuestWithQRValue(parentID, "exp=1;d2=1")
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/02/21/16/26")
sm.startQuest(11620)
sm.lockInGameUI(True, False)
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
sm.sendSay("#face0#可是……主人。")
sm.sendSay("#face0#貌似是有人改造过练习机器人,以此来攻击水晶学院的全体学生和教授。")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face0#……明天跟阿加特大人说吧。")
sm.blind(True, 255, 0, 0, 0, 500)
sm.sendDelay(500)
sm.lockInGameUI(False, True)
sm.warp(402000526)
