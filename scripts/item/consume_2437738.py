# Permanent Flying Treasure Map Mount Coupon
# 2437738
# Grants the Flying Treasure Map Mount skill.

mount = 80002361

if sm.hasSkill(mount):
    sm.chat("You already have the 'Flying Treasure Map' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Flying Treasure Map' mount.")
