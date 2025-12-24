#Goo Ruins Silver Chest
if sm.canHold(4009495, 15):
    sm.consumeItem(2633345, 1)
    sm.giveItem(4009495, 15)
else:
    sm.chat("Please make some room in your ETC inventory")