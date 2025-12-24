# Permanent Hoverboard Mount Coupon
# 2632183
# Grants the Hoverboard Mount skill.

mount = 80012019

if sm.hasSkill(mount):
    sm.chat("You already have the 'Hoverboard' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Hoverboard' mount.")
