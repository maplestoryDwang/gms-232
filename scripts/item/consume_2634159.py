# Permanent Void Guide Mount Coupon
# 2634159
# Grants the Void Guide Mount skill.

mount = 80012294

if sm.hasSkill(mount):
    sm.chat("You already have the 'Void Guide' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Void Guide' mount.")
