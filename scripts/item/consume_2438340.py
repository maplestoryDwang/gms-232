# Permanent Golden Shark Mount Coupon
# 2438340
# Grants the Golden Shark Mount skill.

mount = 80002375

if sm.hasSkill(mount):
    sm.chat("You already have the 'Golden Shark' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Golden Shark' mount.")
