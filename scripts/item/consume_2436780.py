# Permanent Air Dancer Mount Coupon
# 2436780
# Grants the Air Dancer Mount skill.

mount = 80002289

if sm.hasSkill(mount):
    sm.chat("You already have the 'Air Dancer' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Air Dancer' mount.")
