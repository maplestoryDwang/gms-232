# Permanent Wolf Constellation Mount Coupon
# 2631824
# Grants the Wolf Constellation Mount skill.

mount = 80011982

if sm.hasSkill(mount):
    sm.chat("You already have the 'Wolf Constellation' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Wolf Constellation' mount.")
