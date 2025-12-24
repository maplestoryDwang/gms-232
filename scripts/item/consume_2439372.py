# Permanent Hamster Baller Mount Coupon
# 2439372
# Grants the Hamster Baller Mount skill.

mount = 80011707

if sm.hasSkill(mount):
    sm.chat("You already have the 'Hamster Baller' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Hamster Baller' mount.")
