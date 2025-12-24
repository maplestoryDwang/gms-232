# Scuba Diving Mount (Permanent) Coupon
# 2435296
# Grants the Scuba Diving Mount skill.

mount = 80001981

if sm.hasSkill(mount):
    sm.chat("You already have the 'Scuba Diving' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Scuba Diving' mount.")
