# Welcome to Shanghai! (62114)

zhenLong = 9310532

yuGardenVisitor = 3700310

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(zhenLong)
sm.sendNext(sm.join(["Here's your ", sm.formatInlineItem(yuGardenVisitor), " to prove you passed the test."]))
if sm.canHold(yuGardenVisitor):
    sm.giveExp(170598)
    sm.giveItem(yuGardenVisitor)
    sm.completeQuest(parentID)

    sm.sendNext("啊！这是通过测试的证物，#i3700310:##t3700310#。")
    sm.sendNext("我现在真是焦头烂额，所以都没能好好欢迎你。虽然这里有些危险，还充满了僵尸……但还是欢迎你来上海！希望你能在上海度过快乐的时光！要是你有什么疑问或困难，可以随时来找我！")
else:
    sm.sendNext("啊……对了，你是否知道一个叫#p9310538#的哈夫林旅客呢？")