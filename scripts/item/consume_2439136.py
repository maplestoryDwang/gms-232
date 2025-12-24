# Permanent Baby Suitcase Mount Coupon
# 2439136
# Grants the Baby Suitcase Mount skill.

mount = 80011698

if sm.hasSkill(mount):
    sm.chat("You already have the 'Baby Suitcase' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Baby Suitcase' mount.")
