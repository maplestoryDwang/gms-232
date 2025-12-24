# id 22720 (Jay's Gripe), field 331002000
sm.lockInGameUI(True, False)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendNext("#b#h0##k! You jerk, I've been waiting TWO DAYS for you to get back to me! Have you been fooling with Jay again?")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("He forgot to tell me until just now, and I came as soon as I could. You know I hate to keep you waiting.")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("#face1#...Like I haven't heard THAT before.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2#(Her expression softens. Nice save.)#k")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("Well... You know, this wouldn't happen if you'd just show up for Student Council Meetings. I mean, you ARE the president! Give me the Meeting Minutes.")
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
