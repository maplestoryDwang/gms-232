#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#Here we go! One nice, toasty flare. It even browned around the edges!")
if sm.sendAskYesNo("#face0#Okay, let's go ahead and launch this thing. I want to find Shubert and Melange before things get any weirder than they already are. I found a good turtle-free spot for us, so are you ready to roll? \r\n#b(Accept to be moved right away.)"):
    sm.completeQuest(34565)
    sm.startQuest(34566)
    sm.consumeItem(4036450, 100)
    sm.warp(450007040)
    sm.createQuestWithQRValue(34560, "40=h0;41=h0;43=h0")