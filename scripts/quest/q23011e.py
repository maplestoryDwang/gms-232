# 23011 - Battle mage 1st job advancement quest

STAFF_ID = 1382000

sm.setSpeakerID(2151001) # Briston
if chr.getJob() == 3000 and chr.getLevel() >= 10:
    sm.setJob(3200)
    sm.addSP(5)
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)
    sm.completeQuest(parentID)
    sm.giveItem(STAFF_ID, 1)
    sm.sendSayOkay("Congratulations, you are now a battle mage! I have given you some SP and items to start out with, enjoy!")
else:
    sm.sendSayOkay("I don't think you are quite ready to become a Battle Mage.")
