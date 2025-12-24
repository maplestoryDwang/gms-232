# 23160 - Blaster 1st job advancement quest

ARM_CANNON_ID = 1582000

sm.setSpeakerID(2151000) # Elex
if chr.getJob() == 3000 and chr.getLevel() >= 10:
    sm.setJob(3700)
    sm.addSP(5)
    sm.completeQuest(parentID)
    sm.giveItem(ARM_CANNON_ID, 1)
    sm.giveItem(1353400, 1) # Secondary (Rudimentary Charges)
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)
    sm.sendSayOkay("Congratulations, you are now a Blaster! I have given you some SP and items to start out with, enjoy!")
else:
    sm.sendSayOkay("I don't think you are quite ready to become a Blaster.")