# Permanent Chestnut Mount Coupon
# 2437809
# Grants the Chestnut Mount skill.

mount = 80002367

if sm.hasSkill(mount):
    sm.chat("You already have the 'Chestnut' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Chestnut' mount.")
