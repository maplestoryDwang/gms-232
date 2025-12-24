# Permanent Bouncy Orange Mushroom Mount Coupon
# 2631800
# Grants the Bouncy Orange Mushroom Mount skill.

mount = 80002922

if sm.hasSkill(mount):
    sm.chat("You already have the 'Bouncy Orange Mushroom' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Bouncy Orange Mushroom' mount.")
