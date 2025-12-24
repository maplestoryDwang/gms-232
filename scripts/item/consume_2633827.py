# Permanent Shopping Bunny Mount Coupon
# 2633827
# Grants the Shopping Bunny Mount skill.

mount = 80012256

if sm.hasSkill(mount):
    sm.chat("You already have the 'Shopping Bunny' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Shopping Bunny' mount.")
