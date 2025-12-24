# id 22745 (Know Your Own Strength), field 101020400
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendNext("The tighter you grasp the water, the faster it will flow through your fingers.")
sm.sendSay("Hold not with your hands what you can hold in a vessel. ")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("Are you telling me to... get a cup? Are you thirsty?")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
res = sm.sendAskYesNo("#face0#He's saying you need to train your body! I'll fill you in on the details! ")
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendNext("Go. Speak with the one you call Nero.\r\n\r\n#b(Train in this area until you reach level 30.)")
sm.startQuest(parentID)
