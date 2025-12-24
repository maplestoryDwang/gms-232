#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#Yo!")
sm.setParam(56)
sm.sendSay("Huh?")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#It's me. It's Jean. #h #, I need your help.")
sm.setParam(56)
sm.sendSay("Oh, hey Jean! Did something happen?")
sm.setParam(36)
if sm.sendAskYesNo("#face0#Yah, and it could be big. I'll fill you in when you get here. Can you meet me in Trueffet Square? Like, now? \r\n\r\n #b(Accept to be moved right away.)"):
    sm.setParam(56)
    sm.sendSay("Okay, I'm on my way!")
    sm.startQuest(parentID)
    sm.warp(450006130)