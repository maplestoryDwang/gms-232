# Just a Little Test 2 (62113)

zhenLong = 9310532

redBeanPorridge = 4034643
garlic = 4034656

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(zhenLong)
sm.sendNext("你带来红豆粥和蒜了吗？")

sm.completeQuest(parentID)
sm.giveExp(170598)
sm.consumeItem(redBeanPorridge)
sm.consumeItem(garlic)
sm.startQuest(62114)

sm.sendNext("嗯……你还真把红豆粥和蒜带来了啊。很抱歉我怀疑了你。不过这测试非做不可。")
sm.sendNext("呼……我不知道你对上海有多少了解。")

sm.setParam(57)
sm.sendNext("上海是著名的旅游城市！我听说上海有美丽的夜景和漂亮的街道。")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(zhenLong)
sm.sendNext("哎……那已经是过去的事情了。因为就在平凡的某一天，上海的上空突然出现了黑云。笼罩着天空的黑云让人无法分辨早晨和夜晚，那黑云甚至都没有散去的迹象。")
sm.sendNext("事实上，一开始并没有什么大问题，这样反倒还更好了。上海是有名的夜都，这样一来旅客就更多了，不过……")

sm.setParam(57)
sm.sendNext("不过？")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(zhenLong)
sm.sendNext("因为黑云的影响，已经有100多天没看到太阳了，上海还开始出现异常现象。很多动物都发疯似地乱蹦乱跳，街上的招牌和信号灯也像有生命似的开始动起来了。而且……")
sm.sendNext("而且……还出现了僵尸。")

sm.setParam(57)
sm.sendNext("僵尸？！？")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(zhenLong)
sm.sendNext("没错，僵尸。就是会动的尸体。传说中的那种僵尸在上海出现了。")
sm.sendNext("出现僵尸后，人们便纷纷往豫园避难。通往豫园的入口处有一座九曲桥，据说僵尸无法通过那座桥。")
sm.sendNext("幸运的是，那个传说是真的。这座桥需要拐九个弯才能通过，那些僵尸当然无法做到吧。不过我们也不能放松警惕。根据传闻，有一些僵尸关节灵活、能学人说话……所以，需要对初来豫园的陌生人进行一下测试。")

sm.setParam(57)
sm.sendNext("可你为什么要让我去搜集红豆粥和蒜呢？")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(zhenLong)
sm.sendNext("啊 ，这是因为，僵尸讨厌红豆粥和蒜。不过，这也只是传说罢了……")

sm.setParam(57)
sm.sendNext("啊！对了，既然你通过了测试，那我就给你一个证物吧。我现在就去找证物，你能不能稍后再跟我说话呢？")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(zhenLong)
sm.sendNext("I'm so sorry! Since you passed the test, do you mind if I gave you a little token to celebrate? "
"I have it around here somewhere.")