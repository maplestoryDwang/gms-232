#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#There's a #rball of spiders#k there on the right. I bet they're a present from Will.")
sm.sendSay("#face0# It'd be a good idea to get a handle on them now, before they really start multiplying.")
if sm.sendAskYesNo("#face0#Go to the #bMirror-touched Sea 2#k and hunt 200 #bAranya#k"):
    sm.sendSay("#face0#All right, let's get started. It's to the #bright#k.")
    sm.startQuest(parentID)
    sm.createQuestWithQRValue(34560, "30=h0;40=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0")