# Permanent Tranquil Sage Mount Coupon
# 2631043
# Grants the Tranquil Sage Mount skill.

mount = 80011908

if sm.hasSkill(mount):
    sm.chat("You already have the 'Tranquil Sage' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Tranquil Sage' mount.")
