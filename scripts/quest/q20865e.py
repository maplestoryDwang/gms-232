# The Path of a Thunder Breaker - Completion


sm.setSpeakerID(1101007) # Hawkeye
if sm.canHold(1482000):
    sm.jobAdvance(1500) # Thunder Breaker 1st Job
    sm.addSP(5)
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)
    sm.completeQuest(parentID)
    sm.giveItem(1482000) # Steel Knuckler
    sm.sendSayOkay("Congratulations, you are now a Thunder Breaker! I have added 5 AP and 5 SP, enjoy your journey!")
else:
    sm.sendSayOkay("Please make more room in your inventory")