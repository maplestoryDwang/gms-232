# Permanent Glimmering Fennec Fox Mount Coupon
# 2437040
# Grants the Glimmering Fennec Fox Mount skill.

mount = 80002305

if sm.hasSkill(mount):
    sm.chat("You already have the 'Glimmering Fennec Fox' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Glimmering Fennec Fox' mount.")
