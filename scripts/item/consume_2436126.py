# Fluttering Hangul Mount Coupon
# 2436126
# Grants the Fluttering Hangul Mount skill.

mount = 80002235

if sm.hasSkill(mount):
    sm.chat("You already have the 'Fluttering Hangul' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Fluttering Hangul' mount.")
