# Permanent 'A' Mount Coupon
# 2634044
# Grants the 'A' Mount skill.

mount = 80003119

if sm.hasSkill(mount):
    sm.chat("You already have the 'A' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'A' mount.")
