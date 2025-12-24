# Permanent Paper Airplane Mount Coupon
# 2438917
# Grants the Paper Airplane Mount skill.

mount = 80011640

if sm.hasSkill(mount):
    sm.chat("You already have the 'Paper Airplane' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Paper Airplane' mount.")
