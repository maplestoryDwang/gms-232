# Permanent Thunder Duck Mount Coupon
# 2632275
# Grants the Thunder Duck Mount skill.

mount = 80002980

if sm.hasSkill(mount):
    sm.chat("You already have the 'Thunder Duck' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Thunder Duck' mount.")
