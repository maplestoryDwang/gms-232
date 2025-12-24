# Permanent Frost Owl Mount Coupon
# 2631520
# Grants the Frost Owl Mount skill.

mount = 80002875

if sm.hasSkill(mount):
    sm.chat("You already have the 'Frost Owl' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Frost Owl' mount.")
