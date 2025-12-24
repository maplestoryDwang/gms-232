# Permanent Spring Duck Mount Coupon
# 2438638
# Grants the Spring Duck Mount skill.

mount = 80002433

if sm.hasSkill(mount):
    sm.chat("You already have the 'Spring Duck' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Spring Duck' mount.")
