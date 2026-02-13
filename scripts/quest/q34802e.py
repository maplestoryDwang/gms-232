# id 34802 (Collect Grossular), field 402000526
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001302) # Professor Kalsat
sm.sendNext("#face0#怎么回事？这么晚才来？我担心你出事,正打算出去看看呢。")
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face0#那个……")
sm.setInnerOverrideSpeakerTemplateID(3001302) # Professor Kalsat
sm.sendSay("#face0#呼,第一节课还真不轻松。总之幸好大家都平安回来了。那下节课见。")
sm.completeQuestNoCheck(parentID)
sm.createQuestWithQRValue(parentID, "class1=1;out=2;exp=1")
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/02/21/16/06")
sm.startQuest(11620)
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
sm.sendSay("#face0#下节课是魔法战斗实战。我带你去教室。")
sm.sendSay("#face0#Your next class will teach you magical combat.")
sm.lockInGameUI(False, True)
