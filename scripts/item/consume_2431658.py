# Rex Soul Soul
souls = [2591110, 2591111, 2591112, 2591113, 2591114, 2591115, 2591116]
rand = sm.getRandomIntBelow(len(souls))
if not sm.hasItem(2431658, 10):
    sm.sendSayOkay("You need at least 10 soul fragments to create a soul.")
elif chr.getConsumeInventory().isFull():
    sm.sendSayOkay("Please make some space in your USE inventory before using this.")
else:
    soul = souls[rand]
    sm.consumeItem(2431658, 10)
    sm.giveItem(soul)