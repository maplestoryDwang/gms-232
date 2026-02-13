# 21302 - [Job Adv] (Lv.60)   Aran
sm.setSpeakerID(1201002)
sm.sendNext("啊！这、这是……你终于想起制作#t4032312#的方法了？啊啊……这就是为什么你再笨再健忘，我也依然对你不离不弃……哎呀，现在不是说这些的时候！快把宝石给我！")
if sm.sendAskYesNo("好了，#t4032312#的力量应该可以恢复了，你的能力也需要再唤醒一些。现在你的等级升高了不少，可以被唤醒的能力也更多了！"):
    if not sm.canHold(1142131):
        sm.sendSayOkay("赶紧恢复以前的能力吧，带上我一起去冒险……")
        sm.dispose()
    sm.completeQuest(parentID)
    sm.giveItem(1142131)
    sm.jobAdvance(2111)
    sm.consumeItem(4032312)
    sm.sendNext("Please get back all of your abilities soon. I want to explore with you like we did in the good old days.")
