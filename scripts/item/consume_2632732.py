# Permanent Magic Lamp Magic Carpet Mount Coupon
# 2632732
# Grants the Magic Lamp Magic Carpet Mount skill.

mount = 80012065

if sm.hasSkill(mount):
    sm.chat("You already have the 'Magic Lamp Magic Carpet' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Magic Lamp Magic Carpet' mount.")
