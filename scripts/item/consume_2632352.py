# Permanent Jewel Box Mount Coupon
# 2632352
# Grants the Jewel Box Mount skill.

mount = 80002986

if sm.hasSkill(mount):
    sm.chat("You already have the 'Jewel Box' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Jewel Box' mount.")
