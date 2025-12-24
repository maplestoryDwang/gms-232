# Permanent Ducky Mount Coupon
# 2631831
# Grants the Ducky Mount skill.

mount = 80011966

if sm.hasSkill(mount):
    sm.chat("You already have the 'Ducky' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Ducky' mount.")
