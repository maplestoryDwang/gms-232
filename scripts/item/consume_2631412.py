# Permanent Enoki Mushroom Outfit Mount Coupon
# 2631412
# Grants the Enoki Mushroom Outfit Mount skill.

mount = 80011937

if sm.hasSkill(mount):
    sm.chat("You already have the 'Enoki Mushroom Outfit' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Enoki Mushroom Outfit' mount.")
