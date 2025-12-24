# Permanent Pengu Can Fly Too Mount Coupon
# 2631041
# Grants the Pengu Can Fly Too Mount skill.

mount = 80011907

if sm.hasSkill(mount):
    sm.chat("You already have the 'Pengu Can Fly Too' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Pengu Can Fly Too' mount.")
