# 1404 - Thieves of Kerning City
sm.setSpeakerID(10203)
response = sm.sendAskYesNo("So you want to become a Thief?")

if response:
    if sm.canHold(2070000, 2000) and sm.canHold(1472000) and sm.canHold(1332007):
        sm.jobAdvance(400) # Thief
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.completeQuest(parentID)
        sm.giveItem(2070000, 2000)
        sm.giveItem(1472000, 1)
        sm.giveItem(1332007, 1)
        sm.sendSayOkay("You are now a #bThief#k.")
    else:
        sm.sendSayOkay("Please make more room in your inventory")