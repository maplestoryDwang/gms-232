# Permanent Gelato Cart Mount Coupon
# 2631928
# Grants the Gelato Cart Mount skill.

mount = 80011981

if sm.hasSkill(mount):
    sm.chat("You already have the 'Gelato Cart' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Gelato Cart' mount.")
