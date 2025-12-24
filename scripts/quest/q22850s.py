# Kinesis 4th job adv
sm.setSpeakerID(1531001)
sm.sendNext("Holy! K, your psy-limiter is maxed out! Where did all that power come from?")
sm.sendNext("Man, you really took it to the limit. I guess this means you can finally handle yourself in the sinkhole, huh.")
if sm.sendAskYesNo("This might be a good time to upgrade again. you Ready?"):
    if sm.canHold(1353203):
        sm.giveItem(1353203)
        sm.jobAdvance(14212)
        sm.startQuest(parentID)
        sm.completeQuest(parentID)
    else:
        sm.sendNext("Please have 1 or more free spaces in your EQUIP Inventory.")