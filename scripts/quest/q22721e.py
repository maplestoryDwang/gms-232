# id 22721 (Vice President's Piece), field 331002000
sm.lockInGameUI(True, False)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendNext("Did you get all of the signatures? Nice.")
sm.sendSay("#face3#Hey, #b#h0##k... Don't you think maybe you've done enough of the hero thing?")
sm.sendSay("#face3#I know helping people is a noble cause, but your duty is to be a student. And on top of that, you're the Student Council President. How do you think we all feel when you ditch us to go levitate trucks and tear up pavement?")
res = sm.sendNext("#face3#Well, #b#h0##k?\r\n#b#L1#Yuna, you worry too much. I can help you relax...#l\r\n#L2#Maybe you can tell me more about that last council meeting...#l")
sm.createQuestWithQRValue(parentID, "done1=1")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("#face2#Is that a new ribbon? It's quite nice. You always look so good, but today you look-")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("#face1#Are you ALWAYS going to change the topic when this comes up?")
sm.sendSay("#face1#Maybe you should save those lines for your little groupies! Especially if you're not going to take this seriously!")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("Hey. If I wasn't serious, I wouldn't be here. The only girl I'm worried about is the one right in front of me.")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("#face1#Then enough with the lines and answer my question.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2#Sure, sure... What was it, again?")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("#face1#YOU. ARE. INFURIATING.")
sm.sendSay("#face2#Look... All I'm saying is, don't go getting yourself killed playing hero. I know you think you've got everything on lockdown, but you can't be prepared for everything...")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2#Are you worried that I'm going to get hurt? Or are you worried that I'm going to get more fans?")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("#face1#See? SEE? THIS is what I'm talking about! You don't LISTEN!")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face10##fs12#...You're so bad at this, yet she doesn't dump you. It's incredible.")
sm.setInnerOverrideSpeakerTemplateID(1531002) # Yuna
sm.sendSay("#face1#RRRRGH... Take this and GO. Just GO. I'm the Vice President, I don't deserve this kind of abuse.")
sm.sendSay("#face2##b...I keep feeling so anxious.#k")
sm.createQuestWithQRValue(22700, "V01=1;V02=1;q21end=1;kinetuto=1;kinetuto2=1;E1=1;E2=1;E3=1")
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
sm.sendDelay(1000)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("#face9#K, you're going to regret teasing Yuna so much.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2#I can't help it. It's too much fun.")
sm.sendSay("Hey, why aren't you here? You keep talking about wanting some field testing.")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face9#I'm not a fan of the sun, buddy. Plus, I like giving orders from on high.")
sm.blind(True, 200, 0, 0, 0, 1300)
sm.sendDelay(1600)
sm.sayMonologue("#fs20#\r\n\r\n#fEffect/BasicEff.img/QuestAlert/Default/0#\r\nClick the lightbulb on the left side of your screen to check the quests that have arrived remotely.", 1)
sm.playExclSoundWithDownBGM("Voice3.img/Kinesis/guide_10", 100)
sm.blind(False, 0, 0, 0, 0, 1300)
sm.sendDelay(1600)
sm.lockInGameUI(False, True)
