# Permanent Steamboat Mount Coupon
# 2438137
# Grants the Steamboat Mount skill.

mount = 80002383

if sm.hasSkill(mount):
    sm.chat("You already have the 'Steamboat' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Steamboat' mount.")
