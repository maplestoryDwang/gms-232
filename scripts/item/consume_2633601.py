# Permanent Brown Bear Mount Coupon
# 2633601
# Grants the Brown Bear Mount skill.

mount = 80003066

if sm.hasSkill(mount):
    sm.chat("You already have the 'Brown Bear' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Brown Bear' mount.")
