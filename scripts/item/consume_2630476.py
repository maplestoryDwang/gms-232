# Permanent Cotton Candy Bean Mount Coupon
# 2630476
# Grants the Cotton Candy Bean Mount skill.

mount = 80002735

if sm.hasSkill(mount):
    sm.chat("You already have the 'Cotton Candy Bean' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Cotton Candy Bean' mount.")
