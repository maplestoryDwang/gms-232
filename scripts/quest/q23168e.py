# 23168 - Blaster 4th job advancement

sm.setSpeakerID(2159488) # Injured Elex
if chr.getJob() == 3711 and chr.getLevel() >= 100:
    sm.setJob(3712)
    sm.addSP(5)
    sm.completeQuest(23168)
    sm.chat("You... have outclassed me.")
    sm.warp(310000000)
else:
    sm.sendSayOkay("You do not meet the requirements to advance.")