#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(56)
sm.sendSay("Executors. One told us they lost their names and their forms...")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003501) #Melange
sm.sendSay("#face0#They were one of the smaller races of Grandis that vanished long ago.")
sm.sendSay("#face0#They wanted to find the domain of the gods, and were mocked for it.")
sm.setParam(56)
sm.sendSay("Looks like they succeeded.")
sm.setParam(36)
sm.sendSay("#face0#But the Executors here are not real. These are formed from Mirror World.")
sm.sendSay("#face0#Hunt them, and recharge the staff.")
if sm.sendAskYesNo("#face0##k200 Light Executor#k will be enough."):
    sm.startQuest(parentID)