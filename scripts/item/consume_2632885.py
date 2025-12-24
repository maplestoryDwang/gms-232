# Permanent Soft Choco Bear Mount Coupon
# 2632885
# Grants the Soft Choco Bear Mount skill.

mount = 80002998

if sm.hasSkill(mount):
    sm.chat("You already have the 'Soft Choco Bear' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Soft Choco Bear' mount.")
