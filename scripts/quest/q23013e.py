# 23013 - Mechanic 1st job advancement quest

sm.setSpeakerID(2151002) # Belle
if chr.getJob() == 3000 and chr.getLevel() >= 10:
    sm.setJob(3500)
    sm.addSP(5)
    sm.completeQuest(parentID)
    sm.giveItem(1492000, 1) # Pistol
    sm.giveItem(2330000, 2000) # Bullets
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)
    sm.sendSayOkay("Congratulations, you are now a Mechanic! I have given you some SP and items to start out with, enjoy!")
else:
    sm.sendSayOkay("I don't think you are quite ready to become a Mechanic.")
