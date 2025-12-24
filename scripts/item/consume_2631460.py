# Permanent Shrimp Tempura Mount Coupon
# 2631460
# Grants the Shrimp Tempura Mount skill.

mount = 80002870

if sm.hasSkill(mount):
    sm.chat("You already have the 'Shrimp Tempura' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Shrimp Tempura' mount.")
