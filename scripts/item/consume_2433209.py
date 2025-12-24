# Sengoku School Bag
# 2433209
# Produces one of the following items at random.

import random

from net.swordie.ms.enums import InvType

rewardList = [
    2048301, # Gold Bonus Potential Stamp
    2048305, # Bonus Potential Scroll 70%
    2049500, # Gold Potential Stamp
    2049600, # Innocence Scroll 70%
    2049700, # Epic Potential Scroll 100%
    3012007, # Fox God
    3012029, # Kitsune Torii
    3015195, # Ghost Fox Chair
    5010134, # Dark Onmyouji
]

if sm.getEmptyInventorySlots(InvType.CONSUME) == 0 or sm.getEmptyInventorySlots(InvType.INSTALL) == 0 or sm.getEmptyInventorySlots(InvType.CASH) == 0:
    sm.chat("Please check if you have space in your Use, Set-up, and Cash inventories.")
else:
    sm.consumeItem()
    sm.giveItem(random.choice(rewardList))
    