# Permanent Zooming Scooter Mount Coupon
# 2436730
# Grants the Zooming Scooter Mount skill.

mount = 80002276

if sm.hasSkill(mount):
    sm.chat("You already have the 'Zooming Scooter' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Zooming Scooter' mount.")
