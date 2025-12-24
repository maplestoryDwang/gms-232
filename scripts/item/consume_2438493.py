# Permanent Bamboodle Mount Coupon
# 2438493
# Grants the Bamboodle Mount skill.

mount = 80002427

if sm.hasSkill(mount):
    sm.chat("You already have the 'Bamboodle' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Bamboodle' mount.")
