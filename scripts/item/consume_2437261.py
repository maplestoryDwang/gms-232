# Permanent Catty Camping Car Mount Coupon
# 2437261
# Grants the Catty Camping Car Mount skill.

mount = 80002321

if sm.hasSkill(mount):
    sm.chat("You already have the 'Catty Camping Car' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Catty Camping Car' mount.")
