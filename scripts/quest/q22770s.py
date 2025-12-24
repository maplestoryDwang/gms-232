# Kinesis 2nd job adv
sm.setSpeakerID(1531001)
sm.sendNext("K? Kinesis? Hello-ooo? You still in there?")
sm.sendNext("THERE you are. I figured you wouldn't bite it that easily. Can't get a trace on you, though... where did you end up?")
sm.sendNext("I'm guessing you have quite a story. Yuna's waiting for you too, so hustle.")
sm.sendNext("I bet your power level rose since I saw you last, I can't WAIT to chart you.")
if sm.sendAskYesNo("You wanna go ahead and update your data? Say yes."):
    if sm.canHold(1142864) and sm.canHold(1353201):
        sm.giveItem(1142864)
        sm.giveItem(1353201)
        sm.jobAdvance(14210)
        sm.startQuest(parentID)
        sm.completeQuest(parentID)
    else:
        sm.sendNext("Please have 2 or more free spaces in your EQUIP Inventory.")