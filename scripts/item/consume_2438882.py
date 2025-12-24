# Permanent 14th Street Tour Bus Mount Coupon
# 2438882
# Grants the 14th Street Tour Bus Mount skill.

mount = 80002446

if sm.hasSkill(mount):
    sm.chat("You already have the '14th Street Tour Bus' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the '14th Street Tour Bus' mount.")
