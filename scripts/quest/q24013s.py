if sm.getChr().getJob() == 2311:
    sm.jobAdvance(2312)
    sm.setSpeakerID(1033210)
    sm.sendSayOkay("I have improved your power as much as I could, I now leave you to journey on your own.")
    sm.startQuest(parentID)
    sm.completeQuest(parentID)