# Permanent One-Eyed Turtle Mount Coupon
# 2630570
# Grants the Pirate Turtle Mount skill.

mount = 80002752

if sm.hasSkill(mount):
    sm.chat("You already have the 'Pirate Turtle' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Pirate Turtle' mount.")
