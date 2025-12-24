#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#I'm ready. Let's go.")
sm.setInnerOverrideSpeakerTemplateID(3003502) #Shubert
sm.sendSay("#face0#Will you be okay? Will doesn't sound like the kinda guy to let you run around willy-nilly.")
sm.setParam(56)
sm.sendSay("...Don't think I didn't catch that, Shubert. Ollie, what about your injury?")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#I'll be fine. It's patched up.")
sm.sendSay("#face0#Shubert, keep an eye on the ship for us. Will we be able to reach you while we're out?")
sm.setInnerOverrideSpeakerTemplateID(3003502) #Shubert
sm.sendSay("#face0#Shouldn't be a problem. Short-range comms are working fine and animal fat-free. Be sure to keep me in the loop, especially if things get sticky.")
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#Gross. Once Tana is secured, I'll contact you immediately.")
sm.sendSay("#face0#And if things go... wrong... make sure #h # gets clear.")
sm.setParam(56)
sm.sendSay("But...")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0##h #, you're the one that'll fight the #rBlack Mage#k someday.")
sm.setParam(56)
sm.sendSay("...")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003502) #Shubert
sm.sendSay("#face0#No worries, I know my job. You two get going before you make this any more awkward.")
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
if sm.sendSayOkay("#face0#Okay. Let's get going."):
    sm.startQuest(parentID)
    sm.createQuestWithQRValue(34560, "30=h0;40=h0;41=h0;42=h0;43=h0;44=h0;45=h0")
    sm.warp(450007100)