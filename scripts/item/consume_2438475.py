# Permanent Festival Train Mount Coupon
# 2438475
# Grants the Festival Train Mount skill.

mount = 80011551

if sm.hasSkill(mount):
    sm.chat("You already have the 'Festival Train' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Festival Train' mount.")
