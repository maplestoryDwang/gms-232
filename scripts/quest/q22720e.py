# id 22720 (Jay's Gripe), field 331002000
sm.lockInGameUI(True, False)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendNext("#b#h0##k！！你居然现在才来，真是令人难以置信，我让杰帮我传话都已经是两天前的事情了！！")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("我真的是刚刚才听到他跟我说这件事的，\r\n一听说你在等，我真的是以超新星爆炸的速度奔过来的。")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("#face1#是……是嘛？")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2#嗯。#b(瞧瞧脸色立马就恢复正常了，多可爱啊。)#k")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("嗯，那也没办法了，如果你一开始能够准点地出现在总学生会会议上，也就不会有这种事情了，会议录给我。")
sm.playSound("Sound/SoundEff.img/PvP/80001740_Use", 100)
sm.onLayer(500, "0", 800, 0, 12, "Map/Effect2.img/kinesis/chaYuna", 5, True, -1, False)
sm.moveLayer(300, "0", -800, 0)
sm.sendDelay(5000)
sm.playSound("Sound/SoundEff.img/12thMS/jump_m", 100)
sm.offLayer(500, "0", False)
sm.moveLayer(300, "0", 800, 0)
sm.sendDelay(1000)
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/07/16/05/29")
sm.createQuestWithQRValue(25980, "normal=#;hard=#")
sm.lockInGameUI(False, True)
