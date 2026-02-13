# 6995 - Zakum Statue of the dread
sm.setSpeakerID(2020008)
sm.sendNext("你好, 最近, 我一直听说你的成长速度非常惊人啊。")
if sm.sendAskYesNo("也没别的事, 我找你来只是想看看, 身为一位名声大噪的战士是如何挑战扎昆的。"):
    sm.sendNext("怎么样? 你想挑战扎昆吗? \r\n#r<< 接受后, 将会移动到#b冰峰雪域山脉长老的公馆#r。>>")
    sm.startQuest(parentID)
    sm.warp(211000001)
