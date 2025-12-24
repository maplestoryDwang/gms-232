#Goo Ruins Bronze Chest
if sm.canHold(4009495, 10):
    sm.consumeItem(2633346, 1)
    sm.giveItem(4009495, 10)
else:
    sm.chat("Please make some room in your ETC inventory")