# Permanent Moon Roller Mount Coupon
# 2632361
# Grants the Moon Roller Mount skill.

mount = 80002985

if sm.hasSkill(mount):
    sm.chat("You already have the 'Moon Roller' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Moon Roller' mount.")
