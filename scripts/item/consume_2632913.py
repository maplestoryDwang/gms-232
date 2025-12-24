# Permanent Warm Tangerine Mount Coupon
# 2632913
# Grants the Tangerelephant Mount skill.

mount = 80003024

if sm.hasSkill(mount):
    sm.chat("You already have the 'Tangerelephant' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Tangerelephant' mount.")
