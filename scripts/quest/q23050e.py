# 23050 - WH 4th job advancement

sm.setSpeakerID(2159110)
if chr.getJob() == 3311 and chr.getLevel() >= 100:
    sm.setJob(3312)
    sm.addSP(5)
    sm.completeQuest(23050)
    sm.chat("You... have outclassed me.")
    sm.warp(310000000)
else:
    sm.sendSayOkay("You do not meet the requirements to advance.")