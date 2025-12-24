# Permanent Pink Rabbit Mount Coupon
# 2633310
# Grants the Pink Rabbit Mount skill.

mount = 80003050

if sm.hasSkill(mount):
    sm.chat("You already have the 'Pink Rabbit' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Pink Rabbit' mount.")
