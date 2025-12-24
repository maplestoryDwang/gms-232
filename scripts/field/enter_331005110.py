# id 331005110 (null), field 331005110
sm.changeBGM("Bgm00.img/Silence", 0, 0)
sm.lockInGameUI(True, False)
sm.blind(True, 255, 0, 0, 0, 0)
sm.blind(True, 255, 0, 0, 0, 0)
sm.sendDelay(1200)
sm.blind(False, 0, 0, 0, 0, 1000)
sm.sendDelay(1400)
sm.sendDelay(1000)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("#face4#This is such a disaster. I'm sure it'll make the news tonight.")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face11#K, you doing okay?")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("I'm fine. What about you?")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face9#Eh, no big. That cat you brought in is missing, though.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("Wait, what? Where did Nero go?")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face9#No idea. It left right after you did. Maybe you didn't pet it enough.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("You should have stopped it, Jay.")
