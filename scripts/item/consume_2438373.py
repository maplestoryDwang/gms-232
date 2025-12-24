# Permanent Discovery Parachute Mount Coupon
# 2438373
# Grants the Discovery Parachute Mount skill.

mount = 80002392

if sm.hasSkill(mount):
    sm.chat("You already have the 'Discovery Parachute' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Discovery Parachute' mount.")
