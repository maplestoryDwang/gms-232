# Permanent Alpaca Mount Coupon
# 2436759
# Grants the Alpaca Mount skill.

mount = 80011454

if sm.hasSkill(mount):
    sm.chat("You already have the 'Alpaca' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Alpaca' mount.")
