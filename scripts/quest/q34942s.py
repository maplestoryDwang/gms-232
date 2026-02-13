# id 34942 (Separate Ways 2), field 402000402
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001509) # Salvo
sm.sendNext("#face3#哈哈，这里有很多可以吃的东西↗ 哦，所以我想趁这个机会多准备一些备用粮↗")
sm.setSpeakerType(4)
sm.setSpeakerID(3001419) # Salvo
res = sm.sendAskAccept("#face2#从#r河狸污水坑2#k的#o2400308#身上可以获得的#i4036351# #b#t4036351##k好像很好吃！你能帮我去搜集#b30个#k吗？")
sm.setSpeakerType(3)
sm.sendNext("#face2#晒干之后，应该可以放着吃很久↗ 好了，路上小心↗")
sm.startQuest(parentID)
