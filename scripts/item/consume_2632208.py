# Permanent Fluffy Bat Mount Coupon
# 2632208
# Grants the Fluffy Bat Mount skill.

mount = 80012055

if sm.hasSkill(mount):
    sm.chat("You already have the 'Fluffy Bat' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Fluffy Bat' mount.")
