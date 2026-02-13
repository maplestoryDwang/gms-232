# id 34924 (Crystal-Powered Airship), field 402000600
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendNext("#face0#（看到避难处周边的水晶之后，突然恢复了一部分记忆。那也许是我们的希望。）")
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendSay("#face2#你是说……要是把那个叫动力源的东西装上去，就能像船一样使用了吗……")
sm.sendSay("#face0#虽然听上去有点难以置信……但世界这么大，有这样的东西存在也不奇怪。")
sm.sendSay("#face2#……这也许是我们所剩不多的希望之一……")
sm.setSpeakerType(4)
sm.setSpeakerID(3001400) # Zippy
res = sm.sendAskAccept("#face0#我们会找找看，那个叫动力源的东西……你也会跟我们一起找，对吧？\r\n#b（接受时，移动到#m402000614#。）#k")
sm.setSpeakerType(3)
sm.sendNext("#face0#好吧，在这种时候，就应该去找擅长找东西的朋友帮忙了。")
sm.sendSay("#face0#嗯……我会带着维依到有水晶的地方去。我们在那里碰头。")
sm.startQuest(parentID)
sm.warp(402000614)
