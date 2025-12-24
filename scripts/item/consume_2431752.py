# Ephenia Soul
souls = [2591203, 2591204, 2591205, 2591206, 2591207, 2591208, 2591209]
rand = sm.getRandomIntBelow(len(souls))
if not sm.hasItem(2431752, 10):
    sm.sendSayOkay("You need at least 10 soul fragments to create a soul.")
elif chr.getConsumeInventory().isFull():
    sm.sendSayOkay("Please make some space in your USE inventory before using this.")
else:
    soul = souls[rand]
    sm.consumeItem(2431752, 10)
    sm.giveItem(soul)