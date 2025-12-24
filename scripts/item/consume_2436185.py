# Permanent Bouncy Deer Mount Coupon
# 2436185
# Grants the Bouncy Deer Mount skill.

mount = 80002238

if sm.hasSkill(mount):
    sm.chat("You already have the 'Bouncy Deer' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Bouncy Deer' mount.")
