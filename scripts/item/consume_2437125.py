# Permanent Bath With Ducky Mount Coupon
# 2437125
# Grants the Bath With Ducky Mount skill.

mount = 80002315

if sm.hasSkill(mount):
    sm.chat("You already have the 'Bath With Ducky' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Bath With Ducky' mount.")
