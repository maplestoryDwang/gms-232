#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003501) #Melange
sm.sendSay("#face0#Hm... Do you feel that? The #rmoon#k is getting closer.")
sm.setParam(56)
sm.sendSay("Are you serious? Is that a thing that can happen?")
sm.setParam(36)
sm.sendSay("#face0#Eh... Let's have a look at the next memory first.")
if sm.sendAskYesNo("#face0#You need to hunt #b200 Dark Executor#k."):
    sm.startQuest(parentID)