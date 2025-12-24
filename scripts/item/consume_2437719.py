# Permanent Love Floats Mount Coupon
# 2437719
# Grants the Love Floats Mount skill.

mount = 80002358

if sm.hasSkill(mount):
    sm.chat("You already have the 'Love Floats' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Love Floats' mount.")
