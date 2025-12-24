# CONY Hot-Air Balloon Mount Coupon
# 2630232
# Grants the CONY Hot-Air Balloon Mount skill.

mount = 80011776

if sm.hasSkill(mount):
    sm.chat("You already have the 'CONY Hot-Air Balloon' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'CONY Hot-Air Balloon' mount.")
