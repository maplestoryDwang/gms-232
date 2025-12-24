# Permanent Maple World's Santa Mount Coupon
# 2631448
# Grants the Maple World's Santa Mount skill.

mount = 80002869

if sm.hasSkill(mount):
    sm.chat("You already have the 'Maple World's Santa' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Maple World's Santa' mount.")
