# Permanent Rainbow Swing Mount Coupon
# 2438640
# Grants the Rainbow Swing Mount skill.

mount = 80002435

if sm.hasSkill(mount):
    sm.chat("You already have the 'Rainbow Swing' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Rainbow Swing' mount.")
