# The Path of a Dawn Warrior - Completion

sm.setSpeakerID(1101003) # Mihile
if sm.canHold(1402001):
    sm.jobAdvance(1100) # Dawn Warrior 1st Job
    sm.addSP(5)
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)
    sm.completeQuest(parentID)
    sm.giveItem(1402001) # Wooden Sword (2H)
    sm.sendSayOkay("Congratulations, you are now a Dawn Warrior! I have added 5 AP and 5 SP, enjoy your journey!")
else:
    sm.sendSayOkay("Please make more room in your inventory.")