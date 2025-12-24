# Bride's Wedding Limousine Mount (Permanent) Coupon
# 2436639
# Grants the Bride's Wedding Limousine Mount skill.

mount = 80011446

if sm.hasSkill(mount):
    sm.chat("You already have the 'Bride's Wedding Limousine' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Bride's Wedding Limousine' mount.")
