# Motorcycle SF Mount Coupon
# 2633272
# Grants the Motorcycle SF Mount skill.

mount = 80012141

if sm.hasSkill(mount):
    sm.chat("You already have the 'Motorcycle SF' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Motorcycle SF' mount.")
