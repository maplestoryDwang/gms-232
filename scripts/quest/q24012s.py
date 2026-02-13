if sm.getChr().getJob() == 2310:
    sm.jobAdvance(2311)
    sm.setSpeakerID(1033210)
    sm.sendSayOkay("……精灵之王双弩精灵……你已经具备了资格，我允许你获得国王之力。")
    sm.startQuest(parentID)
    sm.completeQuest(parentID)