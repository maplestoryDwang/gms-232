# Kyrin (1090000) | Navigation Room
if sm.getChr().getLevel() >= 10 and sm.getChr().getJob() == 0:
    if sm.sendAskYesNo("Would you like to become a Pirate?"):
        sm.giveItem(2330000, 3000)
        sm.giveItem(1492014)
        sm.giveItem(1482000)
        sm.setJob(500)
        sm.addSP(5)
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.addSP(3)
        sm.completeQuest(1400)
