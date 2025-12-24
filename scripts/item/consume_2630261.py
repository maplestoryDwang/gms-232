# Permanent Galloping Piggy Mount Coupon
# 2630261
# Grants the Galloping Piggy Mount skill.

mount = 80002699

if sm.hasSkill(mount):
    sm.chat("You already have the 'Galloping Piggy' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Galloping Piggy' mount.")
