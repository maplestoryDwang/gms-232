# id 34808 (A Divine Festival 1), field 402000526
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001305) # Professor Lutil
sm.sendNext("#face0#辛苦大家了！像今天这样,完成各自造型物的制作后,学期末在村庄广场展示即可。那下堂课见！")
sm.completeQuestNoCheck(parentID)
sm.createQuestWithQRValue(parentID, "exp=1;d2=1")
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/02/21/16/37")
sm.setInnerOverrideSpeakerTemplateID(3001310) # Morian
sm.sendSay("#face2#啊！这么看来,我还有个重要任务！")
sm.sendSay("#face0#今天的小组活动真有趣！那我先走了。")
sm.setInnerOverrideSpeakerTemplateID(3001350) # Illium
sm.sendSay("#face9#嗯！下次见！")
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
sm.sendSay("#face0#带你参加下一节课。")
sm.lockInGameUI(False, True)
