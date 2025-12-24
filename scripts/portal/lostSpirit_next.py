# id 1 (next00), field 940200240
if not sm.hasMobsInField():
    sm.startQuest(34464)
    sm.completeQuestNoCheck(34464)
    sm.warp(940200210)
else:
    sm.chat("Please kill all monsters in this field before proceeding.")