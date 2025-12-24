if sm.hasQuest(34119):
    sm.warpInstanceIn(450001340, 0, False)
    sm.setInstanceTime(20 * 60)
    sm.setReturnField(450001219)
elif sm.hasQuestCompleted(34119):
    sm.warp(450001240, 1)