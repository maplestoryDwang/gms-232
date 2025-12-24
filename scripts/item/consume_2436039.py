# Lucid Soul
souls = [2591591, 2591592, 2591593, 2591594, 2591595, 2591596, 2591597, 2591598, 2591590]
rand = sm.getRandomIntBelow(len(souls))
if not sm.hasItem(2436039, 10):
    sm.sendSayOkay("You need at least 10 soul fragments to create a soul.")
elif chr.getConsumeInventory().isFull():
    sm.sendSayOkay("Please make some space in your USE inventory before using this.")
else:
    soul = souls[rand]
    sm.consumeItem(2436039, 10)
    sm.giveItem(soul)