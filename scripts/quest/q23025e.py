# 23025 - 2nd job advancement Mechanic

sm.setSpeakerID(2151004) # Checky
if sm.hasItem(4032739, 1) and chr.getJob() == 3500:
    sm.setJob(3510)
    sm.addSP(5)
    sm.completeQuest(23025)
    sm.sendSayOkay("Good job on finding the report. I've molded you into the next level of being a Mechanic.")
else:
    sm.sendSayOkay("I still think you're missing the report.")