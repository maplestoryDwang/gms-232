# Group Food Truck (5-player) Mount Coupon
# 2634026
# Grants the Group Food Truck (5-player) Mount skill.

mount = 80003122

if sm.hasSkill(mount):
    sm.chat("You already have the 'Group Food Truck (5-player)' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Group Food Truck (5-player)' mount.")
