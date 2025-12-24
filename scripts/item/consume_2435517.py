# Permanent Starry Night Cloud Mount Coupon
# 2435517
# Grants the Starry Night Cloud Mount skill.

mount = 80001993

if sm.hasSkill(mount):
    sm.chat("You already have the 'Starry Night Cloud' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Starry Night Cloud' mount.")
