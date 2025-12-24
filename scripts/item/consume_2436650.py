# Permanent Luxury Sports Car Mount Coupon
# 2436650
# Grants the Luxury Sports Car Mount skill.

mount = 80011439

if sm.hasSkill(mount):
    sm.chat("You already have the 'Luxury Sports Car' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Luxury Sports Car' mount.")
