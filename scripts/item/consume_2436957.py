# Permanent Spaceship Mount Coupon
# 2436957
# Grants the Spaceship Mount skill.

mount = 80002302

if sm.hasSkill(mount):
    sm.chat("You already have the 'Spaceship' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Spaceship' mount.")
