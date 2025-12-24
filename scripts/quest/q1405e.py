# 1405 - Pirates of the Nautilus
sm.setSpeakerID(10204)
response = sm.sendAskYesNo("So you want to become a Pirate?")

if response:
    if sm.canHold(1492000) and sm.canHold(2330000, 2000) and sm.canHold(1482000):
        sm.jobAdvance(500) # Pirate
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.giveItem(1492000) # Pistol
        sm.giveItem(2330000, 2000) # Bullets
        sm.giveItem(1482000) # Knuckle
        sm.completeQuest(parentID)
        sm.sendSayOkay("You are now a #bPirate#k.")
    else:
        sm.sendSayOkay("Please make more room in your inventory")
sm.dispose()
