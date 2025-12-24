# Pheromone Perfume
# 2270000
# Captures a wild hog in map 922200000 for lv70 explorer mount
from net.swordie.ms.enums import InvType

hog_map = 922200000
current_map = sm.getFieldID()

if sm.getEmptyInventorySlots(InvType.CONSUME) == 0:
    sm.chat("Please check if you have space in your Use inventory.")
elif current_map == hog_map:
    sm.giveItem(2431856)  # Hog Coupon
    sm.consumeItem()
else:
    sm.chat("Unable to find a tameable monster in this area")
