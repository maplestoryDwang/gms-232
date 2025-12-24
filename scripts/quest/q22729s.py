# id 22729 (Are Black Cats Unlucky?), field 331000000
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendNext("A cat? Here? Hey kitty, this place is dangerous. ")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face4#Meow.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("Geez, you're still a kitten. ")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face5#Meow! ")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("What are you so mad about? You're such a small kitty. Did you lose your mommy?")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face5#MEOW! ")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("Ha. Yeah, you've got some fight in you. You look lost, want to come with me? ")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face4#...Meow! ")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("Good. Let's call you... Nero! How about Nero? ")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face4#..")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2#You like that? Of course you do. I came up with it.")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face4#Meow... ")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
res = sm.sendAskYesNo("#b(Take it with you? )#k")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSayOkay("#face4#Meow... ")
