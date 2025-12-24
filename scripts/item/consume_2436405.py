# Permanent Heart of Ice Mount Coupon
# 2436405
# Grants the Heart of Ice Mount skill.

mount = 80002248

if sm.hasSkill(mount):
    sm.chat("You already have the 'Heart of Ice' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Heart of Ice' mount.")
