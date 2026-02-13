# id 34803 (Combat Training), field 402000527
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001303) # Professor Andrada
sm.sendNext("#face0#这种程度应该跟其他学生的水平差不多了。啊,当然算不上出众。")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face0#那下次见喽。")
sm.setInnerOverrideSpeakerTemplateID(3001303) # Professor Andrada
sm.sendSay("#face0#带你前往下一个教室。")
sm.completeQuestNoCheck(parentID)
sm.createQuestWithQRValue(parentID, "kc=22;exp=1")
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/02/21/16/09")
sm.startQuest(11620)
sm.startQuest(11620)
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
sm.sendSay("#face0#Hm...")
sm.sendSay("#face0#I'll guide you to the next classroom.")
sm.lockInGameUI(False, True)
