# Permanent Spirit Army Mount Coupon
# 2437625
# Grants the Spirit Army Mount skill.

mount = 80002347

if sm.hasSkill(mount):
    sm.chat("You already have the 'Spirit Army' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Spirit Army' mount.")
