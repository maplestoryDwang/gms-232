# Permanent Fantasia Deer Mount Coupon
# 2439329
# Grants the Deer Fantasia Mount skill.

mount = 80002571

if sm.hasSkill(mount):
    sm.chat("You already have the 'Deer Fantasia' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Deer Fantasia' mount.")
