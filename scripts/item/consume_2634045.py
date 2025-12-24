# Permanent 'PLE' Mount Coupon
# 2634045
# Grants the 'PLE' Mount skill.

mount = 80003120

if sm.hasSkill(mount):
    sm.chat("You already have the 'PLE' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'PLE' mount.")
