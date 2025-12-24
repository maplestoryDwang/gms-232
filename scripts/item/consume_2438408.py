# Permanent Yephinx Mount Coupon
# 2438408
# Grants the Yephinx Mount skill.

mount = 80002417

if sm.hasSkill(mount):
    sm.chat("You already have the 'Yephinx' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Yephinx' mount.")
