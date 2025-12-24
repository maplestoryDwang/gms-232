# Permanent Wildflower Spirit Mount Coupon
# 2633309
# Grants the Wildflower Spirit Mount skill.

mount = 80003057

if sm.hasSkill(mount):
    sm.chat("You already have the 'Wildflower Spirit' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Wildflower Spirit' mount.")
