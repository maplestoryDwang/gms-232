# LEONARD Hot-Air Balloon Mount Coupon
# 2630231
# Grants the LEONARD Hot-Air Balloon Mount skill.

mount = 80011774

if sm.hasSkill(mount):
    sm.chat("You already have the 'LEONARD Hot-Air Balloon' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'LEONARD Hot-Air Balloon' mount.")
