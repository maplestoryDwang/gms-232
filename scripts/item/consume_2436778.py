# Permanent Honey Cat Mount Coupon
# 2436778
# Grants the Honey Cat Mount skill.

mount = 80002287

if sm.hasSkill(mount):
    sm.chat("You already have the 'Honey Cat' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Honey Cat' mount.")
