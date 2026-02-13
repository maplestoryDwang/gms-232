# id 22744 (President Present), field 101020400
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531012) # Grendel the Really Old
sm.sendNext("你就是那个超能力者啊，\r\n我是魔法师协会的会长，我叫汉斯。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face2#哎哟，真是万幸。\r\n跟爷爷好像能说得通。")
sm.setInnerOverrideSpeakerTemplateID(1531012) # Grendel the Really Old
sm.sendSay("很抱歉让你等我，\r\n为了对你所在的巨大陷坑进行后续处理，我稍微来晚了点。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("#face0#……等下，你这是什么意思，爷爷？\r\n你说城市里出现了什么？")
sm.setInnerOverrideSpeakerTemplateID(1531012) # Grendel the Really Old
sm.sendSay("就如我所说的一样，\r\n那个世界的白魔法师，让你的能力溢出，在城市里造出了巨大的陷坑。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("你应该有很多事情都想知道吧，\r\n不管是什么尽管问我吧。")
sm.setInnerOverrideSpeakerTemplateID(1531012) # Grendel the Really Old
sm.sendSay("你更想知道什么呢？\r\n#b\r\n#L1#什么是魔法师协会？#l")
res = sm.sendNext("数百年前，自从席卷了大陆邪恶黑魔法师的封印之后……冒险岛世界的魔法师们就醒悟了，\r\n而没有分辨力的魔法研究最终遭致了悲剧。")
sm.sendNext("#b(黑魔法师啊……看样子是类似这个世界的魔王吧。)")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("自那之后，冒险岛世界的魔法师形成了可以互相分享自己的研究，并互相监视的组织，这便是魔法师协会。")
sm.setInnerOverrideSpeakerTemplateID(1531012) # Grendel the Really Old
sm.sendSay("我有几个首席弟子，你所见过的那个叫内罗的孩子也是其中之一。")
sm.sendSay("自从你所生活的世界被发现之后，一直以来我们就非常留心关注着你们，而内罗就是观察你所生活的城市的魔法师。")
sm.sendSay("#face2#老……老师，你刚刚可是相当自然地叫我内罗了啊！")
sm.setInnerOverrideSpeakerTemplateID(1531003) # Nero
sm.sendSay("你更想知道什么呢？\r\n#b\r\n#L2#为什么要带我来这里？#l")
sm.setInnerOverrideSpeakerTemplateID(1531012) # Grendel the Really Old
res = sm.sendNext("没办法了，如果你继续留在震源地，陷坑就会扩大到难以收拾的地步……")
sm.sendNext("我不得已动员了魔法师协会的所有人力，紧急将你召唤到了此地，就在你被转移到这个世界的同时，陷坑也暂时停止了扩张。")
sm.sendSay("如果你能够成长到足以控制自己力量的地步……你就可以回到自己所在的世界了，在此之前，希望你能够暂时留在这里。")
sm.sendSay("你更想知道什么呢？\r\n#b\r\n#L3#你对我的能力有所了解吗？#l")
sm.sendSay("其实对于我们而言，你的能力也是个问号，居然有种不直接碰触就可以移动物体的能力。")
sm.completeQuestNoCheck(parentID)
sm.completeQuestNoCheck(parentID)
sm.startQuest(11620)
sm.createQuestWithQRValue(15710, "lasttime=19/07/16/06/04")
