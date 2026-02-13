#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("木柴搜集到了。")
if sm.sendAskYesNo("#face0#这么多应该足够了。我来点上火，把信号弹烤干。"):
    sm.completeQuest(34565)
    sm.startQuest(34566)
    sm.consumeItem(4036450, 100)
    sm.warp(450007040)
    sm.createQuestWithQRValue(34560, "40=h0;41=h0;43=h0")