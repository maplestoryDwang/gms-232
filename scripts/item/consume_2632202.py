# Permanent Sengoku War Horse Mount Coupon
# 2632202
# Grants the Sengoku War Horse Mount skill.

mount = 80012003

if sm.hasSkill(mount):
    sm.chat("You already have the 'Sengoku War Horse' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Sengoku War Horse' mount.")
