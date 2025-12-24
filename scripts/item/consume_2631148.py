# Permanent Monks' Entrouge Mount Coupon
# 2631148
# Grants the Monks' Entrouge Mount skill.

mount = 80011924

if sm.hasSkill(mount):
    sm.chat("You already have the 'Monks' Entrouge' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Monks' Entrouge' mount.")
