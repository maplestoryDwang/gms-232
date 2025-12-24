# Permanent Sea Explorer Mount Coupon
# 2631748
# Grants the Sea Explorer Mount skill.

mount = 80011962

if sm.hasSkill(mount):
    sm.chat("You already have the 'Sea Explorer' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Sea Explorer' mount.")
