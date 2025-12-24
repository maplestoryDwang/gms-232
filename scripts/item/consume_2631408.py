# Permanent Red Mushroom Outfit Mount Coupon
# 2631408
# Grants the Red Mushroom Outfit Mount skill.

mount = 80011933

if sm.hasSkill(mount):
    sm.chat("You already have the 'Red Mushroom Outfit' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Red Mushroom Outfit' mount.")
