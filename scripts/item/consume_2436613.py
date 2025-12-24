# Ovo-Rocket Mount Permanent Coupon
# 2436613
# Grants the Ovo-Rocket Mount skill.

mount = 80011436

if sm.hasSkill(mount):
    sm.chat("You already have the 'Ovo-Rocket' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Ovo-Rocket' mount.")
