# Permanent Glory Guard Mount Coupon
# 2630763
# Grants the Glory Guard Mount skill.

mount = 80002742

if sm.hasSkill(mount):
    sm.chat("You already have the 'Glory Guard' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Glory Guard' mount.")
