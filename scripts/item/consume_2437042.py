# Permanent Beyond the Rainbow Mount Coupon
# 2437042
# Grants the Beyond the Rainbow Mount skill.

mount = 80002307

if sm.hasSkill(mount):
    sm.chat("You already have the 'Beyond the Rainbow' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Beyond the Rainbow' mount.")
