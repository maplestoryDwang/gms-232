# Permanent Tangerelephant Mount Coupon
# 2438382
# Grants the Tangerelephant Mount skill.

mount = 80002402

if sm.hasSkill(mount):
    sm.chat("You already have the 'Tangerelephant' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Tangerelephant' mount.")
