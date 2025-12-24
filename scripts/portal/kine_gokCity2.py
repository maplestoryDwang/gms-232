# id 3 (go_out), field 331001000
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("No, Nero. You stay here. Jay, make sure Nero doesn't follow me.")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face4#Meow! Meow! ")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("#face1#Are... are you telling me to hold that thing?!")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("I can't take a kitten into battle. Think of it as a special mission... partner.")
sm.warp(331000000)
