# Permanent Night Tiger Mount Coupon
# 2634157
# Grants the Night Tiger Mount skill.

mount = 80012292

if sm.hasSkill(mount):
    sm.chat("You already have the 'Night Tiger' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Night Tiger' mount.")
