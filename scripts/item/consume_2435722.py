# Permanent Bling Bling Heart Mount Coupon
# 2435722
# Grants the Bling Bling Heart Mount skill.

mount = 80001997

if sm.hasSkill(mount):
    sm.chat("You already have the 'Bling Bling Heart' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Bling Bling Heart' mount.")
