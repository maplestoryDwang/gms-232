# Permanent Sleighing with Kemdi Mount Coupon
# 2438409
# Grants the Sleighing with Kemdi Mount skill.

mount = 80002418

if sm.hasSkill(mount):
    sm.chat("You already have the 'Sleighing with Kemdi' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Sleighing with Kemdi' mount.")
