# Bookshelf
# 1000001
# 101000011 Ellinia: Magical Library
# Drops a quest item for Wing The Fairy's request 2  (10879)
from net.swordie.ms.enums import InvType
quest = 10879
magical_potion_guide=4033005

if sm.hasQuest(quest):
    sm.sendSayOkay("You found the book that Wing was looking for! You should go back to her.")

    if sm.getEmptyInventorySlots(InvType.ETC) == 0 :
        sm.sendSayOkay("You should make some inventory space in your ETC. inventory.")
    else:
        sm.giveItem(magical_potion_guide)
else:
    sm.sendSayOkay("This is just a random bookshelf containing relating to magic potions.")