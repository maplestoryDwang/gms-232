# id 22742 (Enjoying the Wait 2), field 101020400
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendNext("#face1#10 eggs! That's alla them. Good job.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("So we done here, Nero?")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face2##fs25##rI told you, my name is not Nero!")
sm.sendSay("#face3#...Oh, whatever. Call me what you want. Grendel the Really Old is taking his sweet time, so we should get some firewood for cooking.")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("Firewood? You're not asking me to chop wood, are you?")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("#face0#As much as I'd like to see that, no. We're gonna hunt monsters. So, uh, chopping monsters instead of wood!")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("More fighting? Really? Geez, do you people beat up monsters for everything you need?")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
res = sm.sendAskYesNo("#face0#Yup! Go hunt the #bAxe Stumps#k to collect 15 pieces of Firewood.\r\nAnd then take them to #bThree Moon#k.")
sm.setParam(37)
sm.sendSayOkay("#face2#Rawr! No work, no grub!")
