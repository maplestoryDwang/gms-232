# Permanent Shadow War Horse Mount Coupon
# 2631146
# Grants the Shadow War Horse Mount skill.

mount = 80011914

if sm.hasSkill(mount):
    sm.chat("You already have the 'Shadow War Horse' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Shadow War Horse' mount.")
