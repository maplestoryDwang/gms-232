# 106030201
fieldID = sm.getFieldID()
if fieldID < 4000014:
    if (fieldID == 4000013 and not sm.hasQuestCompleted(32207)) or (fieldID == 4000012 and not sm.hasQuestCompleted(32204)):
        sm.chat("Please finish all the quests on the map.")
    else:
        sm.warp(sm.getFieldID() + 1)
    sm.dispose()
elif sm.getFieldID() == 4000014:
    if sm.hasQuest(32210):
        sm.warp(4000020, 0)
    else:
        sm.chat("Please finish all the quests on the map.")
    sm.dispose()