# MOON Scooter Mount Coupon
# 2630233
# Grants the MOON Scooter Mount skill.

mount = 80011778

if sm.hasSkill(mount):
    sm.chat("You already have the 'MOON Scooter' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'MOON Scooter' mount.")
