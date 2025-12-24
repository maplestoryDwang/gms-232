# Permanent VIP Cabbie Mount Coupon
# 2437794
# Grants the VIP Cabbie Mount skill.

mount = 80002355

if sm.hasSkill(mount):
    sm.chat("You already have the 'VIP Cabbie' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'VIP Cabbie' mount.")
