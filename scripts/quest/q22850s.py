# Kinesis 4th job adv
sm.setSpeakerID(1531001)
sm.sendNext("凯内西斯,  你的ESP限制器充满了强大的力量,  这是怎么回事? ")
sm.sendNext("……原来是这样,  你变得太强了,  现在看来是已经达到了全新的境界,  估计现在的你,  就算进入陷坑,  也完全能够控制好自己了. ")
if sm.sendAskYesNo("只要你愿意,  我现在就可以帮你升级你的数据,  怎么样? \r\n#b(如果答应就可以进行四转. )#k\r\n\r\n#b#i1353203# #t1353203#"):
    if sm.canHold(1353203):
        sm.giveItem(1353203)
        sm.jobAdvance(14212)
        sm.startQuest(parentID)
        sm.completeQuest(parentID)
    else:
        sm.sendNext("恭喜,  升级已完成. \r\n现在你所用的技能可以被用得更加丰富多彩了. ")