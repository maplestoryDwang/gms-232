# Permanent Thunder Bird Mount Coupon
# 2631140
# Grants the Thunder Bird Mount skill.

mount = 80002855

if sm.hasSkill(mount):
    sm.chat("You already have the 'Thunder Bird' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Thunder Bird' mount.")
