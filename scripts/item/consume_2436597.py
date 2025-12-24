# Permanent Cat Cushion Mount Coupon
# 2436597
# Grants the Cat Cushion Mount skill.

mount = 80002260

if sm.hasSkill(mount):
    sm.chat("You already have the 'Cat Cushion' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Cat Cushion' mount.")
