#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(56)
sm.sendSay("Melange?")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003501) #Melange
sm.sendSay("#face0#I can help you from here.")
sm.setParam(56)
sm.sendSay("What is this place? I thought everything would be white because... y'know, sun.")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003501) #Melange
sm.sendSay("#face0#This is the temple where Tana once lived. It's now the manifestation of mirror world.")
sm.setParam(56)
sm.sendSay("What happens now? What was this sun created for?")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003501) #Melange
sm.sendSay("#face0#That's what we need to figure out now. We need to examine the memories formed in this space.")
sm.setParam(56)
sm.sendSay("But we need to hurry! If we don't, Ollie will...")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003501) #Melange
sm.sendSay("#face0#If you hurry, you'll only get yourself into worse trouble. Isn't that what just happened?")
sm.setParam(56)
sm.sendSay("...")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003501) #Melange
if sm.sendAskYesNo("#face0#Let's go. It's just ahead"):
    sm.startQuest(parentID)
    sm.createQuestWithQRValue(34560, "30=h0;31=h0;40=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0;50=h0;51=h0;52=h0;53=h0;54=h0;55=h0")