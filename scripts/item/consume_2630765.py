# Permanent Pegasus Mount Coupon
# 2630765
# Grants the Pegasus Mount skill.

mount = 80002744

if sm.hasSkill(mount):
    sm.chat("You already have the 'Pegasus' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Pegasus' mount.")
