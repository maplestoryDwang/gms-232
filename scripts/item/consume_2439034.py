# Permanent Aurora Dolphin Mount Coupon
# 2439034
# Grants the Aurora Dolphin Mount skill.

mount = 80002448

if sm.hasSkill(mount):
    sm.chat("You already have the 'Aurora Dolphin' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Aurora Dolphin' mount.")
