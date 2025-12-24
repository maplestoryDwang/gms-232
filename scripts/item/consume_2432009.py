cost = 20
titanium_heart = 1672040

sm.setSpeakerID(3003775)  # Necro Damien
sel = sm.sendAskYesNo("Do you want to exchange #r{}#k #z{}#s for a #z{}#?".format(cost, parentID, titanium_heart))
if sel:

    if chr.getEquipInventory().isFull():
        sm.sendSayOkay("Please make sure you have enough inventory space.")
        sm.dispose()

    if not sm.hasItem(parentID, cost):
        sm.sendSayOkay("You do not have enough #z{}#s".format(parentID))
        sm.dispose()

    sm.consumeItem(parentID, cost)
    sm.giveItem(titanium_heart)
