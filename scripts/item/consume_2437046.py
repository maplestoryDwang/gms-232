# Permanent Confession Teddy Mount Coupon
# 2437046
# Grants the Confession Teddy Mount skill.

mount = 80011487

if sm.hasSkill(mount):
    sm.chat("You already have the 'Confession Teddy' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Confession Teddy' mount.")
