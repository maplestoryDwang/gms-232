#Goo Ruins Gold Chest
if sm.canHold(4009495, 20):
    sm.consumeItem(2633344, 1)
    sm.giveItem(4009495, 20)
else:
    sm.chat("Please make some room in your ETC inventory")