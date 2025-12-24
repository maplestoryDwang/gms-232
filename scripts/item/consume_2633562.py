# Permanent Sunlight Spirit Mount Coupon
# 2633562
# Grants the Sunlight Spirit Mount skill.

mount = 80003065

if sm.hasSkill(mount):
    sm.chat("You already have the 'Sunlight Spirit' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Sunlight Spirit' mount.")
