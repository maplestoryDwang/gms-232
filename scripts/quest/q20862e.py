# The Path of a Blaze Wizard - Completion

sm.setSpeakerID(1101004) # Oz
if sm.canHold(1382000):
    sm.jobAdvance(1200) # Blaze Wizard 1st Job
    sm.addSP(5)
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)
    sm.completeQuest(parentID)
    sm.giveItem(1382000) # Wooden Staff
    sm.sendSayOkay("Congratulations, you are now a Blaze Wizard! I have added 5 AP and 5 SP, enjoy your journey!")
else:
    sm.sendSayOkay("Please make more space in your inventory.")