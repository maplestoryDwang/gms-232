# Permanent Wind-Up Chicken Mount Coupon
# 2436031
# Grants the Wind-Up Chicken Mount skill.

mount = 80011432

if sm.hasSkill(mount):
    sm.chat("You already have the 'Wind-Up Chicken' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Wind-Up Chicken' mount.")
