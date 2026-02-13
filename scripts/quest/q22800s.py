# Kinesis 3rd job adv
sm.setSpeakerID(1531001)
sm.sendNext("凯内西斯,  在陌生地方旅行还开心吗? ")
sm.sendNext("偶尔也给我发点照片嘛,  \r\n比方说可爱怪物的照片……")
sm.sendNext("什么? 全都被你打死了? 额……")
if sm.sendAskYesNo("总之你也变得够强大了,  我打算给你升级数据,  怎么样? \r\n#b(如果答应就可以进行三转. )#k\r\n\r\n#b#i1142865# #t1142865#\r\n#b#i1353202# #t1353202#"):
    if sm.canHold(1142865) and sm.canHold(1353202):
        sm.giveItem(1142865)
        sm.giveItem(1353202)
        sm.jobAdvance(14211)
        sm.startQuest(parentID)
        sm.completeQuest(parentID)
    else:
        sm.sendNext("恭喜,  升级已完成. \r\n现在就可以使用你的技能,  直接举起怪物了. ")