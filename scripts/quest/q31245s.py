# id 31245 ([Crimsonheart] Crimsonheart Escape), field 301000000
sm.setSpeakerType(3)
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(1032001) # Grendel the Really Old
sm.sendNext("那地方的情况怎么样？\r\n\r\n#b(我把在这里的所见所闻告诉了汉斯。)#k")
sm.sendSay("唔，绯红的情况确实挺糟糕。你说那地方一切的法制都被无视，魔族之间相互抓捕，用来献祭？那还真是个弱肉强食的世界啊。")
res = sm.sendAskYesNo("关于绯红的信息肯定不只有这些。你去帮助那些不幸的魔族居民，再观察一下那里的情况吧？")
sm.startQuest(parentID)
sm.sendNext("那事情就拜托你了。\r\n\r\n#b(为了找出帮助魔族人的办法，去和#p2134012#对话吧。)#k")
