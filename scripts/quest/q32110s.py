# id 32110 ([Ellinel Fairy Academy] Combing the Academy 1), field 101072200
sm.setSpeakerID(1500011) # Cootie the Really Small
sm.sendNext("你来啦，#h #。那么开始搜索吧？")
sm.setParam(2)
sm.sendSay("从哪里开始入手呢？")
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(1500011) # Cootie the Really Small
sm.sendSay("你知道孩子们最喜欢什么吗？就是他们之间的秘密。我也常常背着师傅，偷偷和其他弟子交换纸条，然后偷偷地笑呢。有时也在秘密的地方藏东西。那种事情可是非常有趣的呢。")
sm.setParam(0)
res = sm.sendNext("凭我的直觉，孩子们之间有个共同的秘密。那个秘密应该就是关键。不过现在的问题是，要怎样做才能找到孩子们的秘密呢？\r\n\r\n")
if res == 0:
    sm.sendNext("#L1##b先找到孩子们之后，再询问秘密。#l\r\n")
elif res == 1:
    sm.sendNext("#L2##b寻找一下写有秘密的纸条如问？#l\r\n")
elif res == 2:
    sm.sendNext("#L3##b我也不知道，你怎么看？#l\r\n")
    sm.startQuest(parentID)
    sm.addQRValue(32133, "1")
