# 23024 - 2nd job advancement Wild Hunter

sm.setSpeakerID(2151002) # Belle
if sm.hasItem(4032738, 1) and chr.getJob() == 3300:
    sm.setJob(3310)
    sm.addSP(5)
    sm.completeQuest(23024)
    sm.sendSayOkay("Good job on finding the report. I've molded you into the next level of being a Wild Hunter.")
else:
    sm.sendSayOkay("I still think you're missing the report.")