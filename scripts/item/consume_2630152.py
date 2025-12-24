# Permanent Spring Creature Mount Coupon
# 2630152
# Grants the Spring Creature Mount skill.

mount = 80011785

if sm.hasSkill(mount):
    sm.chat("You already have the 'Spring Creature' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Spring Creature' mount.")
