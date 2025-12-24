# Permanent Budding Artist Mount Coupon
# 2630503
# Grants the Budding Artist Mount skill.

mount = 80011822

if sm.hasSkill(mount):
    sm.chat("You already have the 'Budding Artist' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Budding Artist' mount.")
