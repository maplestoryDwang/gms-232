# Permanent Summer Water Festival Mount Coupon
# 2438549
# Grants the Summer Water Festival Mount skill.

mount = 80002545

if sm.hasSkill(mount):
    sm.chat("You already have the 'Summer Water Festival' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Summer Water Festival' mount.")
