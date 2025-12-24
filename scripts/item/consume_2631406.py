# Permanent Oyster Mushroom Outfit Mount Coupon
# 2631406
# Grants the Oyster Mushroom Outfit Mount skill.

mount = 80011931

if sm.hasSkill(mount):
    sm.chat("You already have the 'Oyster Mushroom Outfit' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Oyster Mushroom Outfit' mount.")
