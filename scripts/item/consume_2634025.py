# Group Food Truck (3-player) Mount Coupon
# 2634025
# Grants the Group Food Truck (3-player) Mount skill.

mount = 80003121

if sm.hasSkill(mount):
    sm.chat("You already have the 'Group Food Truck (3-player)' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Group Food Truck (3-player)' mount.")
