#34230 [Esfera]  The Strangers
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(56)
sm.sendSay("好像没有毒。")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003500) #Ollie
sm.sendSay("#face0#太好了。已经充好能了。")
if sm.sendAskYesNo("#face0#你想现在使用法杖吗？\r\n#b（接受时立即移动。）#k"):
    sm.completeQuest(parentID)