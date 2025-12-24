# Permanent Pixel Flame Bird Mount Coupon
# 2630488
# Grants the Pixel Flame Bird Mount skill.

mount = 80002738

if sm.hasSkill(mount):
    sm.chat("You already have the 'Pixel Flame Bird' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Pixel Flame Bird' mount.")
