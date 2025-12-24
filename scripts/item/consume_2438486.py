# Permanent Fly! Zoom with Bunny Mount Coupon
# 2438486
# Grants the Zoom Bunny Mount skill.

mount = 80002429

if sm.hasSkill(mount):
    sm.chat("You already have the 'Zoom Bunny' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Zoom Bunny' mount.")
