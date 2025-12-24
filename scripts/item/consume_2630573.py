# Permanent Fluffy Rabbit Mount Coupon
# 2630573
# Grants the Fluffy Rabbit Mount skill.

mount = 80002754

if sm.hasSkill(mount):
    sm.chat("You already have the 'Fluffy Rabbit' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Fluffy Rabbit' mount.")
