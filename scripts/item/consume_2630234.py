# Boppin' LINE FRIENDS Truck Mount Coupon
# 2630234
# Grants the Boppin' LINE FRIENDS Truck Mount skill.

mount = 80011780

if sm.hasSkill(mount):
    sm.chat("You already have the 'Boppin' LINE FRIENDS Truck' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Boppin' LINE FRIENDS Truck' mount.")
