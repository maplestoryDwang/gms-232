# id 58917 ([Hieizan Temple] Strange Alliance Men -2-), field 811000014
sm.setSpeakerID(9130107) # Mysterious Boy
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(9130107) # Mysterious Boy
sm.sendNext("难道……这个就能帮助恢复士兵吗？")
sm.setParam(16)
sm.sendSay(" 这是什么？")
sm.setParam(4)
sm.sendSay("在我昏迷之前……有位一起被抓的士兵给我的纸条。")
sm.setParam(16)
sm.sendSay("(打开纸条)“织田军阴阳师的三色坛子据说可以装进纯粹的灵魂。请拜托别人把我们的灵魂装进那个坛子里。’ ")
sm.sendSay(" ……看来终究是没办法恢复了。")
sm.setParam(4)
res = sm.sendAskYesNo("我看到了织田军的阴阳师从袖子里拿出了坛子，纸条上说的似乎就是那个。你能把那个带给我吗？")
sm.startQuest(parentID)
sm.sendNext("他们真的都很好……我却不能为他们做些什么，好难过。")
sm.sendPrev("Whatever the case, I think we should get the jars first.")
