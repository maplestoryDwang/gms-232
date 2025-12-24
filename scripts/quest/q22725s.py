# id 22725 (Jay's On The Case), field 331002000
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("#face9#Kinesis, you need to get back here as soon as you can. I've discovered something very interesting.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("What is it? The last time you said that, it was a new torrent site for your Japanese cartoons.")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face9#It's called ANIME, you plebeian. And no, this is about the monsters you fought the other day.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face4#Talk to me, Jay. What did you find?")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face9#Dude, just come back here. I'm trying to be all dramatic.")
sm.sendSay("#face9#And pick up a tub of ice cream on the way. I'm out.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#b(Return to the Hideout and talk to Jay.)#k")
sm.createQuestWithQRValue(22700, "V01=1;V02=1;q21end=0;kinetuto=1;kinetuto2=1;E1=1;E2=1;E3=1")
sm.startQuest(parentID)
