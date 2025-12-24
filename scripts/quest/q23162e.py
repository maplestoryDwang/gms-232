# 23162 - 2nd job advancement Blaster

sm.setSpeakerID(2151000) # Elex
if sm.hasItem(4034787, 1) and chr.getJob() == 3700:
    sm.setJob(3710)
    sm.addSP(5)
    sm.completeQuest(23162)
    sm.sendSayOkay("Good job on finding the report. I've molded you into the next level of being a Blaster.")
else:
    sm.sendSayOkay("I still think you're missing the report.")