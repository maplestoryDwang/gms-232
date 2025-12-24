# Grendel the Really Old (1032001) | Ellinia Magic Library
if sm.getChr().getLevel() >= 10 and sm.getChr().getJob() == 0:
    if sm.sendAskYesNo("Would you like to become a Magician?"):
        sm.giveItem(1372005)
        sm.setJob(200)
        sm.addSP(5)
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.addSP(3)
        sm.completeQuest(1400)


