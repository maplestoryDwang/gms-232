# id 17648 ([Commerci Republic] Back to San Commerci), field 865000000
sm.setSpeakerID(9390235) # Leon Daniella
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(9390202) # Leon Daniella
sm.sendNext("我就在此告辞了。")
sm.setInnerOverrideSpeakerTemplateID(9390204) # Robed Lady
sm.sendSay("我还打算问个名字什么的呢……")
sm.hideNpcByTemplateIdhi(9390255, True, True)
sm.setInnerOverrideSpeakerTemplateID(9390202) # Leon Daniella
sm.sendSay("嗯？怎么了？问到名字你打算干嘛？")
sm.setParam(2)
sm.sendSay("啊，没，没什么。就那个……赶紧去报告吧。")
sm.setParam(4)
sm.sendSay("真是个奇怪的家伙。嗯？村里怎么这么乱糟糟的呢？")
sm.setParam(2)
sm.sendSay("就是啊。有什么事吗。那有我们商团的船员。去问问他有什么事。")
sm.setParam(4)
sm.sendSay("请问村里在搞什么活动吗？")
sm.setParam(2)
sm.sendSay("哎哟，莱文大人你来了呀。你来得正是时候！")
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(9390217) # Tepes
sm.sendSay("有什么事么？为什么这么乱糟糟的。")
sm.setInnerOverrideSpeakerTemplateID(9390202) # Leon Daniella
sm.sendSay("其实海本王国又派人来了！")
sm.setInnerOverrideSpeakerTemplateID(9390217) # Tepes
sm.sendSay("海本王国？那些傲慢的家伙又打算来说什么可笑的话？")
sm.setInnerOverrideSpeakerTemplateID(9390202) # Leon Daniella
sm.sendSay("你说海本王国。你在说什么啊？")
sm.setParam(2)
sm.sendSay("啊……#h0#你还不知道啊。你等一小会儿再跟我说话。我整理一下思绪再跟你说明。")
sm.setParam(4)
sm.sendSay("啊对了，这是在普赛依船上发现的东西。就当作是谢谢你帮助我送你了。")
sm.sendSay("啊……那个……")
sm.completeQuestNoCheck(parentID)
sm.completeQuestNoCheck(17731)
sm.createQuestWithQRValue(18418, "B=33277")
sm.createQuestWithQRValue(18418, "B=33278")
sm.createQuestWithQRValue(18418, "B=33279")
