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
    sm.sendSayOkay("你已经选好了吗……？……一旦决定，就无法后悔。慎重的决定可以使人变得贤明。")
else:
    sm.sendSayOkay("从现在开始，你就是风灵使者了。现在，我会分配给你一些能力……")