# Permanent Pegasus Chariot Mount Coupon
# 2630240
# Grants the Pegasus Chariot Mount skill.

mount = 80002698

if sm.hasSkill(mount):
    sm.chat("You already have the 'Pegasus Chariot' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Pegasus Chariot' mount.")
