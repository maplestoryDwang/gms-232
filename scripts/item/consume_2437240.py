# Permanent Banana Boat Mount Coupon
# 2437240
# Grants the Banana Boat Mount skill.

mount = 80002318

if sm.hasSkill(mount):
    sm.chat("You already have the 'Banana Boat' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Banana Boat' mount.")
