# Permanent Orange Mushroom Outfit Mount Coupon
# 2631404
# Grants the Orange Mushroom Outfit Mount skill.

mount = 80011929

if sm.hasSkill(mount):
    sm.chat("You already have the 'Orange Mushroom Outfit' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Orange Mushroom Outfit' mount.")
