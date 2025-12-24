# Choco Chip Slime Mount Coupon
# 2630116
# Grants the Choco Chip Slime Mount skill.

mount = 80002668

if sm.hasSkill(mount):
    sm.chat("You already have the 'Choco Chip Slime' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Choco Chip Slime' mount.")
