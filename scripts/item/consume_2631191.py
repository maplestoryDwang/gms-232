# Permanent Radical Skateboard Mount Coupon
# 2631191
# Grants the Radical Skateboard Mount skill.

mount = 80002859

if sm.hasSkill(mount):
    sm.chat("You already have the 'Radical Skateboard' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Radical Skateboard' mount.")
