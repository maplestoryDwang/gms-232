# Groom's Wedding Limousine Mount (Permanent) Coupon
# 2436637
# Grants the Groom's Wedding Limousine Mount skill.

mount = 80011444

if sm.hasSkill(mount):
    sm.chat("You already have the 'Groom's Wedding Limousine' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Groom's Wedding Limousine' mount.")
