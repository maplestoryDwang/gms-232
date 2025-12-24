# Permanent Tiptoe Piggy Mount Coupon
# 2439908
# Grants the Tiptoe Piggy Mount skill.

mount = 80011761

if sm.hasSkill(mount):
    sm.chat("You already have the 'Tiptoe Piggy' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Tiptoe Piggy' mount.")
