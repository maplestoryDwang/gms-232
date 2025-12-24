# Permanent Bubble Balloon Mount Coupon
# 2439915
# Grants the Bubble Balloon Mount skill.

mount = 80002665

if sm.hasSkill(mount):
    sm.chat("You already have the 'Bubble Balloon' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Bubble Balloon' mount.")
