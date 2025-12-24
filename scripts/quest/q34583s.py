#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003501) #Melange
if sm.sendAskYesNo("#face0#Now follow me. We need to get to #bTemple of Life 4#k."):
    sm.sendSay("#face0#It's to the right.")
    sm.startQuest(parentID)
    sm.createQuestWithQRValue(34560, "30=h0;31=h0;40=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0;50=h0;51=h0;52=h0;53=h0;54=h0;55=h0;56=h0")