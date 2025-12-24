# Magic Donut Mount Coupon (Permanent)
# 2436292
# Grants the Magic Donut Mount skill.

mount = 80002240

if sm.hasSkill(mount):
    sm.chat("You already have the 'Magic Donut' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Magic Donut' mount.")
