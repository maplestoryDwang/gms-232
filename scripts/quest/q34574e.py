#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(56)
sm.sendSay("Turns out those spiders weren't poisonous, so, y'know, all clear.")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#That's a relief. The staff's all charged up, too.")
if sm.sendAskYesNo("#face0#Should we use the staff now?"):
    sm.completeQuest(parentID)