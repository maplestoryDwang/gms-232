# Korean Kite Mount Coupon (Permanent)
# 2436081
# Grants the Korean Kite Mount skill.

mount = 80002234

if sm.hasSkill(mount):
    sm.chat("You already have the 'Korean Kite' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Korean Kite' mount.")
