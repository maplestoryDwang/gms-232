# Permanent 'M' Mount Coupon
# 2634043
# Grants the 'M' Mount skill.

mount = 80003118

if sm.hasSkill(mount):
    sm.chat("You already have the 'M' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'M' mount.")
