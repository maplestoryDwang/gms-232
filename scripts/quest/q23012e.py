# 23012 - Wild Hunter 1st job advancement quest

XBOW_ID = 1462092

sm.setSpeakerID(2151002) # Belle
if chr.getJob() == 3000 and chr.getLevel() >= 10:
    sm.setJob(3300)
    sm.addSP(5)
    sm.completeQuest(parentID)
    sm.giveItem(XBOW_ID, 1)
    sm.giveSkill(30001061) # Capture
    sm.giveSkill(30001062) # Call of the Hunter
    sm.giveItem(2061000, 2000)
    sm.setSTR(4)
    sm.setINT(4)
    sm.setDEX(4)
    sm.setLUK(4)
    sm.setAP(4 + chr.getLevel() * 5)
    sm.sendSayOkay("Congratulations, you are now a Wild Hunter! I have given you some SP and items to start out with, enjoy!")
else:
    sm.sendSayOkay("I don't think you are quite ready to become a Wild Hunter.")
