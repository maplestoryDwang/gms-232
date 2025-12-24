# Permanent Dandelion Puff Mount Coupon
# 2438670
# Grants the Dandelion Puff Mount skill.

mount = 80011581

if sm.hasSkill(mount):
    sm.chat("You already have the 'Dandelion Puff' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Dandelion Puff' mount.")
