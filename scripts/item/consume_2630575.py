# Permanent Petite Shark Mount Coupon
# 2630575
# Grants the Petite Shark Mount skill.

mount = 80002756

if sm.hasSkill(mount):
    sm.chat("You already have the 'Petite Shark' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Petite Shark' mount.")
