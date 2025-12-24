#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003504) #Light Executor
if sm.sendAskYesNo("#face0#My purpose here has been served #bMirror-touched Sea 7#k. That is where you will find her."):
    sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
    sm.sendSay("#face0#Wait, before you go... Why are you helping us?")
    sm.setInnerOverrideSpeakerTemplateID(3003504) #Light Executor
    sm.sendSay("#face0#It is her will.")
    sm.sendSay("#face0#The spider is the enemy. The enmy of an enemy is a friend.")
    sm.sendSay("#face0#Go now. To the right.")
    sm.startQuest(parentID)
    sm.createQuestWithQRValue(34560, "30=h0;40=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0;52=h0")