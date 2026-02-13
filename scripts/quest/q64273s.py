# id 64273 ([MONAD] Abrup Mission Board Unlocked!), field 867200110
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(9400593) # Hawalu
sm.sendNext("你好，勇士！")
sm.sendSay("瞧~~！这是我、妈妈、郁兰姐姐还有叔叔们一起为你准备的。")
sm.setInnerOverrideSpeakerTemplateID(9400588) # Ullan
sm.sendSay("哈瓦尔？你在那儿做什么呢！")
sm.setInnerOverrideSpeakerTemplateID(9400593) # Hawalu
sm.sendSay("我想告诉勇士任务板的用处！")
sm.setInnerOverrideSpeakerTemplateID(9400588) # Ullan
sm.sendSay("你没长门牙，说不清楚的，这东西很重要，要是人家勇士听不懂该怎么办？还是姐姐来吧。")
sm.sendSay("勇士！你好。\r\n这段时间真的谢谢你了……\r\n我们一直在想到底该怎么报答你，阿布鲁的所有居民绞尽脑汁，为你准备了这个#e[任务板]#n！")
sm.openUI(1886)
sm.sendSay("#e[任务板]#n上有#b[每日任务]#k、#b[每周任务]#k还有#b[成就任务]#k。")
sm.sendSay("#b[每日任务]#k是每天都可以做的事，只要通关一次“阿布鲁的大篷车”就可以获得礼物了！\r\n对了，每日任务会在#b每天午夜重置#k，你可别忘了哦！")
sm.sendSay("#b[每周任务]#k是每周可以进行一次的事，每天来阿布鲁玩，就能自然而然地完成了哦！\r\n#每周任务会在#b每周三重置#k，在此之前一定要记得拿好礼物哦！")
sm.sendSay("#b[成就任务]#k是只能进行一次的事，为了报答勇士你对我们的付出，我们真的是超认真地在准备礼物哦！你可不能被吓到哦！")
sm.sendSay("鼠标悬停在各个任务的礼物箱图标上，就能看到完成时可以领取的道具了。")
sm.sendSay("除了那个之外，我们还准备了像#i3700493:##t3700493#,#i3700502:##t3700502#,#i3700496:##t3700496#这些酷炫的称号，还有#i2028372:##t2028372#这类勇士一定会用到的东西，一定不要忘了拿哦。")
sm.setInnerOverrideSpeakerTemplateID(9400593) # Hawalu
sm.sendSay("别忘了，一定要记得拿哦！")
sm.setInnerOverrideSpeakerTemplateID(9400588) # Ullan
sm.sendSay("那……再见咯，勇士！")
sm.setInnerOverrideSpeakerTemplateID(9400593) # Hawalu
sm.sendSay("再见哦，勇士！")
sm.createQuestWithQRValue(parentID, "chk=1")
sm.completeQuestNoCheck(parentID)
