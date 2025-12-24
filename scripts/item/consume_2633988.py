# Permanent Thunder Flower Fox Mount Coupon
# 2633602
# Grants the Thunder Flower Fox Mount skill.

mount = 80003098

if sm.hasSkill(mount):
    sm.chat("You already have the 'Thunder Flower Fox' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Thunder Flower Fox' mount.")
