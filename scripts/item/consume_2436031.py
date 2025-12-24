# Baby Snipe Mount Coupon (Permanent)
# 2436031
# Grants the Baby Snipe Mount skill.

mount = 80002229

if sm.hasSkill(mount):
    sm.chat("You already have the 'Baby Snipe' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Baby Snipe' mount.")
