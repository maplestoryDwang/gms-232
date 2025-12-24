# Permanent Rocky Road Truck Mount Coupon
# 2439484
# Grants the Rocky Road Truck Mount skill.

mount = 80002628

if sm.hasSkill(mount):
    sm.chat("You already have the 'Rocky Road Truck' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Rocky Road Truck' mount.")
