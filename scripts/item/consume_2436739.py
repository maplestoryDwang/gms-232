# Permanent Floral Music Note Mount Coupon
# 2436739
# Grants the Floral Music Note Mount skill.

mount = 80011452

if sm.hasSkill(mount):
    sm.chat("You already have the 'Floral Music Note' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Floral Music Note' mount.")
