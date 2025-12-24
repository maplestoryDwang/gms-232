# Permanent Shining Yacht Mount Coupon
# 2437123
# Grants the Shining Yacht Mount skill.

mount = 80002313

if sm.hasSkill(mount):
    sm.chat("You already have the 'Shining Yacht' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Shining Yacht' mount.")
