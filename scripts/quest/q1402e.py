# 1402 - Magicians of Ellinia

sm.setSpeakerID(9000025) # Grendel the Really Old
response = sm.sendAskYesNo("So you want to become a Magician?")

if response:
    if sm.canHold(1372043):
        sm.jobAdvance(200) # Magician
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.giveItem(1372043)
        sm.completeQuest(parentID)
        sm.sendSayOkay("You are now a #bMagician#k.")
    else:
        sm.sendSayOkay("You need more inventory space.")