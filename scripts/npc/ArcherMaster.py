# Athena Pierce (1012100)
if sm.getChr().getLevel() >= 10 and sm.getChr().getJob() == 0:
    if sm.sendAskYesNo("Would you like to become an archer?"):
        sm.giveItem(2060000, 9000)
        sm.giveItem(1452002)
        sm.setJob(300)
        sm.addSP(5)
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.addSP(3)
        sm.completeQuest(1400)



