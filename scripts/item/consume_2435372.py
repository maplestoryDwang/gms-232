# Golden Nimbus Cloud Mount Permanent Coupon
# 2435372
# Grants the Golden Nimbus Cloud Mount skill.

mount = 80011350

if sm.hasSkill(mount):
    sm.chat("You already have the 'Golden Nimbus Cloud' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Golden Nimbus Cloud' mount.")
