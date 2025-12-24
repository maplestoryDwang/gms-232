# Permanent Toto Mount Coupon
# 2634035
# Grants the Toto Mount skill.

mount = 80003117

if sm.hasSkill(mount):
    sm.chat("You already have the 'Toto' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Toto' mount.")
