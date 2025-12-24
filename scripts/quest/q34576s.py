#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#It's not really that easy, y'know. We need to charge it up, and that means defeating monsters, so..")
sm.setInnerOverrideSpeakerTemplateID(3003504) #Light Executor
if sm.sendAskYesNo("#face0#Then defeat 200 #bKeepers of light#k."):
    sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
    sm.sendSay("#face0#Uhhh.. Aren't you on their side?")
    sm.setInnerOverrideSpeakerTemplateID(3003504) #Light Executor
    sm.sendSay("#face0#I follow only the voice.")
    sm.startQuest(parentID)