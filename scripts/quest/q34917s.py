# id 34917 (Medical Supplies), field 402000600
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendNext("#face3#嗯……你有什么话想说吗？啊，或者我做错了什么吗！？")
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendSay("#face0#我也去帮忙。因为现在我的首要任务……也是活下去。和你们一样。")
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendSay("#face2#啊，你救了马尔，我们还没能报答你……不过现在我们确实需要人手……")
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendSay("#face4#不要有什么负担。和你们一起寻找离开这里的方法……也是为了我自己。")
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendSay("#face2#是，是的，我们应该互相帮助……好吧，为了救治伤员，需要大量可以当作绷带使用的东西……")
sm.setSpeakerType(4)
sm.setSpeakerID(3001400) # Zippy
res = sm.sendAskAccept("#face2#你去从#r#m402000610##k的#o2400350#身上搜集#b20个#k#i4036344# #b#t4036344##k。")
sm.setSpeakerType(3)
sm.sendNext("#face2#啊，对了，抱歉上次对你太无理了……嗯，嗯……好了，路上小心。")
sm.startQuest(parentID)
