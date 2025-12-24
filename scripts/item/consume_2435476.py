# Wild Bean Balloon Mount Coupon (Permanent)
# 2435476
# Grants the Wild Bean Balloon Mount skill.

mount = 80001992

if sm.hasSkill(mount):
    sm.chat("You already have the 'Wild Bean Balloon' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Wild Bean Balloon' mount.")
