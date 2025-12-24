# Permanent Flame Bird Mount Coupon
# 2435986
# Grants the Flame Bird Mount skill.

mount = 80002227

if sm.hasSkill(mount):
    sm.chat("You already have the 'Flame Bird' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Flame Bird' mount.")
