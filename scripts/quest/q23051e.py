# 23051 - Mechanic 4th job advancement

sm.setSpeakerID(2159112) # Injured Checky
if chr.getJob() == 3511 and chr.getLevel() >= 100:
    sm.setJob(3512)
    sm.addSP(5)
    sm.completeQuest(23051)
    sm.chat("You... have outclassed me.")
    sm.warp(310000000)
else:
    sm.sendSayOkay("You do not meet the requirements to advance.")