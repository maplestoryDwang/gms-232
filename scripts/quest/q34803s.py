# id 34803 (Combat Training), field 402000527
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001303) # Professor Andrada
sm.sendNext("#fn黑体##fs18#第二课：魔法战斗实践")
sm.setParam(37)
sm.sendSay("#face0#哎~这样怎么行！？快出来！我给你示范~~！！")
sm.setSpeakerType(4)
sm.setSpeakerID(3001333) # Professor Andrada
res = sm.sendAskAccept("#face0#迪恩学生,在魔法训练中开玩笑是很危险的。再有下次,加倍罚你做作业。")
sm.startQuest(parentID)
sm.setSpeakerType(3)
sm.sendNext("#face2#呃！你……")
