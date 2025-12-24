#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(56)
sm.sendSay("Are you okay, Ollie? You're hurt...")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#I-it's nothing. I'll get Shubert to look at it back at camp. N-no worries.")
sm.setParam(56)
sm.sendSay("Okay, but...")
sm.setParam(36)
sm.sendSay("#face0#That's that, but what does #rUltimate light and Ultimate Darkness#k mean?")
sm.setParam(56)
sm.sendSay("Yeah... Will's trying to tell us something. Commanders don't just speak nonsense.")
sm.setParam(36)
sm.sendSay("#face0#Oh, Shubert is calling.")
sm.setInnerOverrideSpeakerTemplateID(3003502) #Shubert
sm.sendSay("#face0#What's happening, gang? Everything okay out there?")
sm.setParam(56)
sm.sendSay("Actually... (You fill him in on everything that's happened)")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003502) #Shubert
sm.sendSay("#face0#First the ship gets attacked, and then a commander shows up. I sure do miss missions where I just blow stuff up.")
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#I'm sure we'll be fine. None of them are a match for #h #, after all!")
sm.setParam(56)
sm.sendSay("Th-thats...")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003502) #Shubert
sm.sendSay("#face0#Hah! I had a feeling we were in good hands.")
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#So, should I come back and contact HQ?")
sm.setInnerOverrideSpeakerTemplateID(3003502) #Shubert
sm.sendSay("#face0#Not possible right now, I'm afraid. I've got the transmitter working for short-range communication but the long-range array won't run without lubricant.")
sm.sendSay("#face0#I've patched it as best as I can but the servos are dried out. It squealed loud enough to wake Melange when I tried to align it with HQ. She's still mad about that.")
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#I'm pretty sure we could use #bAnimal Fat#k as lubrican, yeah? But first we'd better get moving, since our enemies know where we are now.")
if sm.sendAskYesNo("#face0#We'll head out to #bLiving Spring 7#k"):
    sm.sendSay("#face0#I'll scout ahead for monsters and super-powerful villains.")
    sm.startQuest(parentID)
    sm.createQuestWithQRValue(34560, "30=h0;40=h0;41=h0;42=h0;43=h0;44=h0")