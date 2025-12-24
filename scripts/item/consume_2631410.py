# Permanent Blue Jelly Mushroom Outfit Mount Coupon
# 2631410
# Grants the Blue Jelly Mushroom Outfit Mount skill.

mount = 80011935

if sm.hasSkill(mount):
    sm.chat("You already have the 'Blue Jelly Mushroom Outfit' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Blue Jelly Mushroom Outfit' mount.")
