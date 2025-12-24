# Permanent Cruise Ship Mount Coupon
# 2438138
# Grants the Cruise Ship Mount skill.

mount = 80002384

if sm.hasSkill(mount):
    sm.chat("You already have the 'Cruise Ship' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Cruise Ship' mount.")
