# Permanent Best Friend Ballooncycle Mount Coupon
# 2436714
# Grants the Best Friend Ballooncycle Mount skill.

mount = 80002270

if sm.hasSkill(mount):
    sm.chat("You already have the 'Best Friend Ballooncycle' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Best Friend Ballooncycle' mount.")
