# Permanent Glimmering Raccoon Suit Mount Coupon
# 2436407
# Grants the Glimmering Raccoon Suit Mount skill.

mount = 80002250

if sm.hasSkill(mount):
    sm.chat("You already have the 'Glimmering Raccoon Suit' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Glimmering Raccoon Suit' mount.")
