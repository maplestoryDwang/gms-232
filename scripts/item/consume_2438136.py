# Permanent Chug Boat Mount Coupon
# 2438136
# Grants the Chug Boat Mount skill.

mount = 80002382

if sm.hasSkill(mount):
    sm.chat("You already have the 'Chug Boat' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Chug Boat' mount.")
