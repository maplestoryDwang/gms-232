# Permanent Glacier Mount Coupon
# 2439913
# Grants the Glacier Mount skill.

mount = 80002663

if sm.hasSkill(mount):
    sm.chat("You already have the 'Glacier' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Glacier' mount.")
