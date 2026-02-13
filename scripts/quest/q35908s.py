# id 35908 (Helping Hand 1), field 100051000
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1013353) # Mascarpo
sm.sendNext("#face0#正如村长所说,现在还没准备好。\r\n要是有更多的人来帮忙,准备工作也许就能更快地完成,呵呵。")
sm.setSpeakerType(4)
sm.setSpeakerID(1013302) # Mascarpo
res = sm.sendAskAccept("#face0#如果可以,你也能一起帮村里做事吗？\r\n那样很快就能和村民们熟悉起来。")
sm.setSpeakerType(3)
sm.setParam(548)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendNext("#face0#没问题。需要我帮着做什么呢？")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1013353) # Mascarpo
sm.sendSay("#face0#哦……我就知道你一定会爽快地答应。\r\n我这就告诉你哪里需要人手。")
sm.sendSay("#face0#请你去找一个叫布里的孩子。他正在准备制作灵药的材料。\r\n那是工作量最大的工作,一定需要其他人的帮助。")
sm.sendSay("#face0#啊,布里是我们之中最善良、最体贴的孩子,所以不用担心。\r\n那就拜托你了,冒险家。")
sm.startQuest(parentID)
