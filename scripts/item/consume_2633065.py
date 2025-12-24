# Permanent Thunder Jellyfish Mount Coupon
# 2633065
# Grants the Thunder Jellyfish Mount skill.

mount = 80003030

if sm.hasSkill(mount):
    sm.chat("You already have the 'Thunder Jellyfish' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Thunder Jellyfish' mount.")
