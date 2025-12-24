# Permanent Flame Horse Mount Coupon
# 2439036
# Grants the Flame Horse Mount skill.

mount = 80002450

if sm.hasSkill(mount):
    sm.chat("You already have the 'Flame Horse' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Flame Horse' mount.")
