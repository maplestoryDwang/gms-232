# Hilla Soul
souls = [2591241, 2591242, 2591243, 2591244, 2591245, 2591246, 2591247, 2591248, 2591233]
rand = sm.getRandomIntBelow(len(souls))
if not sm.hasItem(2431896, 10):
    sm.sendSayOkay("You need at least 10 soul fragments to create a soul.")
elif chr.getConsumeInventory().isFull():
    sm.sendSayOkay("Please make some space in your USE inventory before using this.")
else:
    soul = souls[rand]
    sm.consumeItem(2431896, 10)
    sm.giveItem(soul)