#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#I think we should get in there and check it out.")
if sm.sendAskYesNo("#face0#Go to the #bMirror-touched Sea 4#k"):
    sm.sendSay("#face0#We should hurry to the #bright#k, I don't want to miss the action!")
    sm.startQuest(parentID)
    sm.createQuestWithQRValue(34560, "30=h0;40=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0")