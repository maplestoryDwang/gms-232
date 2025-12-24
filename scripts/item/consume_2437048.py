# Permanent Puffer Submersible Mount Coupon
# 2437048
# Grants the Puffer Submersible Mount skill.

mount = 80011489

if sm.hasSkill(mount):
    sm.chat("You already have the 'Puffer Submersible' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Puffer Submersible' mount.")
