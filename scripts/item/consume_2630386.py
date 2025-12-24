# Permanent Glimmering Focus Mount Coupon
# 2630386
# Grants the Glimmering Focus Mount skill.

mount = 80002712

if sm.hasSkill(mount):
    sm.chat("You already have the 'Glimmering Focus' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Glimmering Focus' mount.")
