# Permanent Magpie Mount Coupon
# 2436031
# Grants the Magpie Mount skill.

mount = 80002259

if sm.hasSkill(mount):
    sm.chat("You already have the 'Magpie' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Magpie' mount.")
