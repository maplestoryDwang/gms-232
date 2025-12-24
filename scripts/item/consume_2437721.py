# Permanent Twinkling Cotton Candy Mount Coupon
# 2437721
# Grants the Twinkling Cotton Candy Mount skill.

mount = 80002356

if sm.hasSkill(mount):
    sm.chat("You already have the 'Twinkling Cotton Candy' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Twinkling Cotton Candy' mount.")
