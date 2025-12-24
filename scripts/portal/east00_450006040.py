if sm.hasQuestCompleted(34252) and not sm.hasQuestCompleted(34253) and not sm.hasQuest(34253):
    sm.warp(450006110)
    sm.createQuestWithQRValue(34271, "23=h0;23=h1")
elif sm.hasQuestCompleted(34252):
    sm.warp(450006130)
else:
    sm.chat("Something is blocking your way.")
