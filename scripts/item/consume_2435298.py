# Permanent Spring Breeze Mount Coupon
# 2435298
# Grants the Spring Breeze Mount skill.

mount = 80001983

if sm.hasSkill(mount):
    sm.chat("You already have the 'Spring Breeze' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Spring Breeze' mount.")
