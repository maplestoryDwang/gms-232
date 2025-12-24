# Permanent Aurora Jewel Mount Coupon
# 2632820
# Grants the Aurora Jewel Mount skill.

mount = 80002991

if sm.hasSkill(mount):
    sm.chat("You already have the 'Aurora Jewel' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Aurora Jewel' mount.")
