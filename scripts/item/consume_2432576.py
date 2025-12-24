# Mad Mage Soul
souls = [2591350, 2591351, 2591352, 2591353, 2591354, 2591355, 2591356, 2591357, 2591314]
rand = sm.getRandomIntBelow(len(souls))
if not sm.hasItem(2432576, 10):
    sm.sendSayOkay("You need at least 10 soul fragments to create a soul.")
elif chr.getConsumeInventory().isFull():
    sm.sendSayOkay("Please make some space in your USE inventory before using this.")
else:
    soul = souls[rand]
    sm.consumeItem(2432576, 10)
    sm.giveItem(soul)