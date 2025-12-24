# id 22743 (Finding Fanzy), field 101020400
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendNext("Our meal has come to be.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("Please tell me that means we can eat it.")
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendSay("Controlling your cravings is yet another key to disciplining your mind. Focus less on your hunger, and more on the power it masks.")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face1#OMNOMNOMNOM")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2#......")
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendSay("Grendel the Really Old remains absent. Perhaps you and the child should locate him.")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face1#OMNOMNOMNOM")
sm.setInnerOverrideSpeakerTemplateID(1531004) # Three Moon
sm.sendSay("...Perhaps you should locate him. I fear our youthful friend may be, ah, otherwise occupied.")
sm.setParam(36)
res = sm.sendAskYesNo("Make your way to the #bGiant Tree#k and speak with #bFanzy#k. Surely the feline knows of Grendel's whereabouts.")
sm.setParam(37)
sm.sendNext("Remember, it is at the #bGiant Tree#k that you will find #bFanzy#k the cat.")
sm.startQuest(parentID)
sm.avatarOriented("UI/tutorial.img/11")
