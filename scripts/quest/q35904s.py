# id 35904 (Research and Rescue), field 100051010
sm.setSpeakerType(3)
sm.setParam(548)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendNext("#face1#喂，要我把你弄出来吗？")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1013353) # Mascarpo
sm.sendSay("#face1#拜，拜托了……请，请帮帮我！")
sm.setParam(548)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendSay("#face1#要是我帮了你，你什么都能答应我吗？")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1013353) # Mascarpo
sm.sendSay("#face1#好，好吧……但是……不能到村外去！\r\n除了那个之外，我什么都听你！")
sm.setParam(548)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendSay("#face1#很好，那我就开始拔了哦？")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1013353) # Mascarpo
sm.sendSay("#face1#呃……不，不行！\r\n要是那样，我马斯卡波的身体就要变成两截了！")
sm.setParam(548)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendSay("#face6#那该怎么办呢？")
sm.setSpeakerType(4)
sm.setSpeakerID(1013306) # Mascarpo
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1013353) # Mascarpo
res = sm.sendAskAccept("#face1#洒，洒点种子油，应该就能拔出来了！\r\n那个东西在附近很常见，应该很快就能找到！")
sm.setSpeakerType(3)
sm.sendNext("#face1#请帮我从#r#o2300201##k身上搜集#b10个#k#b#i4036524# #t4036524##k！\r\n胖胖花在附近的#r#m100051011##k就能找到！")
sm.startQuest(parentID)
