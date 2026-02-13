# id 34916 (Caravan Leader Zippy), field 402000600
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendNext("#face2#谢谢你救了马尔。很想拿什么报答你……但是你也看到了避难处的情况很困难……")
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendSay("#face0#啊，对了，我想问你点事。有几个问题……你能回答我吗？")
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendSay("#face2#嗯……那个随时都可以。虽然不知道我能否回答你……但我会尽力的。")
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendSay("#face0#（讲述了目前所处的情况。说为了找回记忆，必须先离开这片荒地。）")
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendSay("#face3#离开这里的方法……我也不知道。")
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendSay("#face2#什么！？")
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendSay("#face3#因为我，还有我们商队的人，不是在这里土生土长的人。也不是自愿来到这里的。")
sm.setSpeakerType(4)
sm.setSpeakerID(3001400) # Zippy
res = sm.sendAskAccept("#face0#嗯……关于这个地方，我没有太多的可以告诉你。如果你想知道，我就说给你听。关于我们的故事……")
sm.setSpeakerType(3)
sm.sendNext("#face0#哈，等我整理一下思绪，然后再跟你讲。虽然可能不是你想知道的事……")
sm.startQuest(parentID)
