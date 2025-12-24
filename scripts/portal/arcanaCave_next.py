# id 1 (next00), field 940200320
if not sm.hasMobsInField():
    sm.startQuest(34476)
    sm.completeQuestNoCheck(34476)
    sm.warp(450005000)
else:
    sm.chat("Please kill all monsters in this field before proceeding.")