# Permanent Paca Paca Mount Coupon
# 2439144
# Grants the Paca Paca Mount skill.

mount = 80002424

if sm.hasSkill(mount):
    sm.chat("You already have the 'Paca Paca' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Paca Paca' mount.")
