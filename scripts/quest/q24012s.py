if sm.getChr().getJob() == 2310:
    sm.jobAdvance(2311)
    sm.setSpeakerID(1033210)
    sm.sendSayOkay("I have increased your powers.")
    sm.startQuest(parentID)
    sm.completeQuest(parentID)