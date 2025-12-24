# Permanent Fantasia Swan Mount Coupon
# 2439331
# Grants the Fantasia Swan Mount skill.

mount = 80002573

if sm.hasSkill(mount):
    sm.chat("You already have the 'Fantasia Swan' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Fantasia Swan' mount.")
