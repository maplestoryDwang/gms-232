sm.setSpeakerID(1101002)
if sm.sendAskYesNo("米哈尔，你已经完成了考验吗？"):
    if not sm.canHold(1142401):
        sm.sendSayOkay("你现在觉醒了更强的力量，继续走在光之道路上吧!")
    else:
        if chr.getJob() == 5110:
            sm.jobAdvance(5111)
            sm.giveItem(1142401)
            sm.completeQuest(parentID)
        else:
            sm.sendNext("You are not a Mihile.")

