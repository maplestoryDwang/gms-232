# Permanent Blanket Rollup Mount Coupon
# 2438488
# Grants the Blanket Rollup Mount skill.

mount = 80002431

if sm.hasSkill(mount):
    sm.chat("You already have the 'Blanket Rollup' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Blanket Rollup' mount.")
