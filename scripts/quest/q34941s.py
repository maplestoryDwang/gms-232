# id 34941 (Separate Ways 1), field 402000402
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
sm.sendNext("#face0#嗯……那么我想请你帮个忙……嗯，嗯……")
sm.sendSay("#face2#这块水晶好像太显眼了……")
sm.sendSay("#face3#呃呃，经常会有怪物被吸引过来……所以……觉得很碍事……")
sm.setInnerOverrideSpeakerTemplateID(3001509) # Salvo
sm.sendSay("#face3#现在就藏在这个垃圾堆里↗\r\n哈哈，怎么样？没看到吧！？在哪呢！？")
sm.setInnerOverrideSpeakerTemplateID(3001510) # Ferret
sm.sendSay("#face0#叽，叽勒……所以我们需要什么东西来把它遮起来。")
sm.setSpeakerType(4)
sm.setSpeakerID(3001418) # Zippy
sm.setInnerOverrideSpeakerTemplateID(3001508) # Zippy
res = sm.sendAskAccept("#face2#没，没错……嗯……周围有很多废铁之类的东西……我们也正在努力……")
sm.setSpeakerType(3)
sm.sendNext("#face2#希望你能帮我从#r废弃物处理场3#k的#o2400306#身上，搜集#b30个#k#i4036350# #b#t4036350##k……")
sm.startQuest(parentID)
