# Permanent Tireless Santa Mount Coupon
# 2436168
# Grants the Tireless Santa Mount skill.

mount = 80011422

if sm.hasSkill(mount):
    sm.chat("You already have the 'Tireless Santa' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Tireless Santa' mount.")
