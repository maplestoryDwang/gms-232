# Permanent Peplock Holmes Mount Coupon
# 2633061
# Grants the Peplock Holmes Mount skill.

mount = 80003029

if sm.hasSkill(mount):
    sm.chat("You already have the 'Peplock Holmes' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Peplock Holmes' mount.")
