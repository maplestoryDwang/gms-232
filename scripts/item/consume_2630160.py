# Permanent Galaxy Echo Mount Coupon
# 2630160
# Grants the Galaxy Echo Mount skill.

mount = 80011772

if sm.hasSkill(mount):
    sm.chat("You already have the 'Galaxy Echo' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Galaxy Echo' mount.")
