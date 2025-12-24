# 1403 - Bowmen of Henesys

sm.setSpeakerID(10200)
response = sm.sendAskYesNo("So you want to become a Bowman?")

if response:
    if sm.canHold(1452051) and sm.canHold(2060000, 2000):
        sm.giveItem(1452051)
        sm.giveItem(2060000, 2000)
        sm.jobAdvance(300)
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.completeQuest(parentID)
        sm.sendSayOkay("You are now an #bArcher#k.")
    else:
        sm.sendSayOkay("Please make some room in your inventory to receive items.")