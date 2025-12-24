sm.setSpeakerID(1101002)
if sm.sendAskYesNo("Now you're a REAL knight. Would you like to take your Job Advancement?"):
    if not sm.canHold(1142401):
        sm.sendSayOkay("You need inventory space.")
    else:
        if chr.getJob() == 5110:
            sm.jobAdvance(5111)
            sm.giveItem(1142401)
            sm.completeQuest(parentID)
        else:
            sm.sendNext("You are not a Mihile.")

