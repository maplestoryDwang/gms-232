# Permanent Banana Moon Mount Coupon
# 2436728
# Grants the Banana Moon Mount skill.

mount = 80002278

if sm.hasSkill(mount):
    sm.chat("You already have the 'Banana Moon' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Banana Moon' mount.")
