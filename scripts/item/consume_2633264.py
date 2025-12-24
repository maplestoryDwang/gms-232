# Permanent Sun-Favored Mount Coupon
# 2633264
# Grants the Sun-Favored Mount skill.

mount = 80012112

if sm.hasSkill(mount):
    sm.chat("You already have the 'Sun-Favored' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Sun-Favored' mount.")
