# Giant CAPOO Mount Coupon (Permanent)
# 2633035
# Grants the Giant CAPOO Mount skill.

mount = 80012096

if sm.hasSkill(mount):
    sm.chat("You already have the 'Giant CAPOO' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Giant CAPOO' mount.")
