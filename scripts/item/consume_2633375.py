# Black Giga-Goo Mount Coupon (Permanent)
# 2633375
# Grants the Black Giga-Goo Mount skill.

mount = 80012149

if sm.hasSkill(mount):
    sm.chat("You already have the 'Black Giga-Goo' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Black Giga-Goo' mount.")
