# Jett 3rd job adv
sm.setSpeakerID(9270091)
sm.sendNext("Ooh, #bFire Ore#k! I could produce a ternary alloy from this that would break diamonds!")
if sm.sendAskYesNo("All right, it looks like the materials have been prepared. Could you give me the core fragment?"):
    item = chr.getEquippedInventory().getItemBySlot(11) # Primary
    if item is not None:
        chr.consumeItem(item)
        sm.giveAndEquip(1492141)
        sm.completeQuest(parentID)
        sm.jobAdvance(571)
        sm.consumeItem(4033252, 30)