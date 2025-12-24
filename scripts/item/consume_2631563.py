# Permanent Fruit Tart Mount Coupon
# 2631563
# Grants the Fruit Tart Mount skill.

mount = 80002884

if sm.hasSkill(mount):
    sm.chat("You already have the 'Fruit Tart' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Fruit Tart' mount.")
