# Sled Mount Coupon (Permanent)
# 2437881
# Grants the Sled Mount skill.

mount = 80011535

if sm.hasSkill(mount):
    sm.chat("You already have the 'Sled' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Sled' mount.")
