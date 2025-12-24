#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(56)
sm.sendSay("We need to charge the staff first, right?")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
if sm.sendAskYesNo("#face0#Yup, I think 200 #baraneas#k will do the trick."):
    sm.sendSay("#face0#And please be careful. Those spiders might be poisonous, and... I've had enough of dealing with poison.")
    sm.startQuest(parentID)