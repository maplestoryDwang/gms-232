# Permanent Cerberus Mount Coupon
# 2438945
# Grants the Cerberus Mount skill.

mount = 80011643

if sm.hasSkill(mount):
    sm.chat("You already have the 'Cerberus' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Cerberus' mount.")
