#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#No sign of WIll. We should be smug-free while we work.")
sm.sendSay("#face0#I think we can gather animal fat from those guys.")
if sm.sendAskYesNo("#face0#Hunt #bBellalis#k and gather 100 #bAnimal Fat#k if you can."):
    sm.startQuest(parentID)