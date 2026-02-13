# 20411 - [Job Adv] (Lv.100) Mihile 4rd job adv
sm.setSpeakerID(1101002)
sm.sendNext("米哈尔，你已经完成了考验吗？")
if not sm.canHold(1142402):
    sm.sendSayOkay("你已经觉醒了最终的力量，为了贯彻光之道路，今后继续努力吧!")
    sm.dispose()
else:
    if chr.getJob() == 5111:
        if sm.canHold(1142402):
            sm.jobAdvance(5112)
            sm.giveItem(1142402)
            sm.completeQuest(parentID)
        else:
            sm.sendSayOkay("Please make some space in your Equip inventory.")
    else:
        sm.sendNext("You are not a mihile class.")