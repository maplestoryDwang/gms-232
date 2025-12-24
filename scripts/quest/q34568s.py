#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#Oh, here we go! It says the staff is rechargeable. So...")
sm.setParam(56)
sm.sendSay("What kind of magic staff is rechargeable? Does it run on batteries?")
sm.setParam(36)
sm.sendSay("#face0#According to this, the staff needs to be charged when its light grows weak. Defeating living things near it allows the staff to absorb magic from them.")
if sm.sendAskYesNo("#face0#Okay, so, our staff is powered by violence. I think we can work with that! Why don't you hunt some #bBellalions#k? Maybe 200, just to be safe?"):
    sm.sendSay("#face0#Remember, it's for a good cause!")
    sm.startQuest(parentID)