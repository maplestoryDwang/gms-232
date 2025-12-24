# Permanent Haechi Mount Coupon
# 2630971
# Grants the Haechi Mount skill.

mount = 80002853

if sm.hasSkill(mount):
    sm.chat("You already have the 'Haechi' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Haechi' mount.")
