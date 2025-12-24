# Permanent Hot Dog Mount Coupon
# 2634023
# Grants the Hot Dog Mount skill.

mount = 80003116

if sm.hasSkill(mount):
    sm.chat("You already have the 'Hot Dog' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Hot Dog' mount.")
