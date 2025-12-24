# Permanent Soft Latte Bear Mount Coupon
# 2632887
# Grants the Soft Latte Bear Mount skill.

mount = 80003000

if sm.hasSkill(mount):
    sm.chat("You already have the 'Soft Latte Bear' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Soft Latte Bear' mount.")
