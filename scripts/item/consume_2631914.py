# Permanent Kidult Shopping Mount Coupon
# 2631914
# Grants the Kidult Shopping Mount skill.

mount = 80002938

if sm.hasSkill(mount):
    sm.chat("You already have the 'Kidult Shopping' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Kidult Shopping' mount.")
