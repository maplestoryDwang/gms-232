# 1401 - Warriors of Perion

sm.setSpeakerID(10202) # Dances with Balrog
response = sm.sendAskYesNo("So you want to become a Warrior?")

if response:
    if sm.canHold(1302182):
        sm.jobAdvance(100)
        sm.setSTR(4)
        sm.setINT(4)
        sm.setDEX(4)
        sm.setLUK(4)
        sm.setAP(4 + chr.getLevel() * 5)
        sm.sendSayOkay("You are now a #bWarrior#k.")
        sm.giveItem(1302182)
        sm.completeQuest(parentID)
    else:
        sm.sendSayOkay("Please make some room in your inventory")
