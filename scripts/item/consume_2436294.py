# Permanent Shopping Cart Mount Coupon
# 2436294
# Grants the Shopping Cart Mount skill.

mount = 80002242

if sm.hasSkill(mount):
    sm.chat("You already have the 'Shopping Cart' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Shopping Cart' mount.")
