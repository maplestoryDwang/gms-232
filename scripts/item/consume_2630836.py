# Permanent Spooky Boat Mount Coupon
# 2630836
# Grants the Spooky Boat Mount skill.

mount = 80011857

if sm.hasSkill(mount):
    sm.chat("You already have the 'Spooky Boat' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Spooky Boat' mount.")
