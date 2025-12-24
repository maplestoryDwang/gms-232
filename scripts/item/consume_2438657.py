# Permanent Spring Tulip Mount Coupon
# 2438657
# Grants the Spring Tulip Mount skill.

mount = 80002437

if sm.hasSkill(mount):
    sm.chat("You already have the 'Spring Tulip' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Spring Tulip' mount.")
