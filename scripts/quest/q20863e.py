# Path of a Wind Archer - Completion

sm.setSpeakerID(1101005) # Irena
if sm.canHold(1452002) and sm.canHold(2060000, 1000):
    sm.jobAdvance(1300) # Wind Archer 1st Job
    sm.addSP(5)
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)
    sm.completeQuest(parentID)
    sm.giveItem(1452002) # War Bow
    sm.giveItem(2060000, 1000) # Bow Arrow
    sm.sendSayOkay("Congratulations, you are now a Wind Archer! I have added 5 AP and 5 SP, enjoy your journey!")
else:
    sm.sendSayOkay("Please make some room in your inventory")