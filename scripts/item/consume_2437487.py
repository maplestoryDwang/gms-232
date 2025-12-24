# Permanent Maple Leaf Mount Coupon
# 2437487
# Grants the Maple Leaf Mount skill.

mount = 80011503

if sm.hasSkill(mount):
    sm.chat("You already have the 'Maple Leaf' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Maple Leaf' mount.")
