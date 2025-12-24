# Permanent Bubble Bubble Mount Coupon
# 2631476
# Grants the Bubble Bubble Mount skill.

mount = 80011945

if sm.hasSkill(mount):
    sm.chat("You already have the 'Bubble Bubble' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Bubble Bubble' mount.")
