# The Path of a Night Walker - Completion

sm.setSpeakerID(1101006) # Eckhart
if sm.canHold(1472000) and sm.canHold(2070000, 2000):
    sm.jobAdvance(1400) # Night Walker 1st Job
    sm.addSP(5)
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)
    sm.completeQuest(parentID)
    sm.giveItem(1472000) # Garnier
    sm.giveItem(2070000, 2000) # Subi Throwing Stars
    sm.sendSayOkay("Congratulations, you are now a Night Walker! I have added 5 AP and 5 SP, enjoy your journey!")
else:
    sm.sendSayOkay("Please make more room in your inventory.")