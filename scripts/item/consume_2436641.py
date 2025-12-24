# Floaty Balloon House Mount (Permanent) Coupon
# 2436641
# Grants the Floaty Balloon House Mount skill.

mount = 80011448

if sm.hasSkill(mount):
    sm.chat("You already have the 'Floaty Balloon House' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Floaty Balloon House' mount.")
