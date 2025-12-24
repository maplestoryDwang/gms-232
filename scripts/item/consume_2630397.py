# Permanent Meerkat Pack Mount Coupon
# 2630397
# Grants the Meerkat Pack Mount skill.

mount = 80011807

if sm.hasSkill(mount):
    sm.chat("You already have the 'Meerkat Pack' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Meerkat Pack' mount.")
