# Tuesday's Growth box
rand = 10 + sm.getRandomIntBelow(20)

COIN = 4310020

if not chr.getEtcInventory().isFull():
    sm.giveItem(4310020, rand)
    sm.consumeItem()
else:
    chr.chatMessage("Your ETC inventory is full.")