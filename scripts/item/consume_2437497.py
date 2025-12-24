# Permanent Slime Snow Maker Mount Coupon
# 2437497
# Grants the Slime Snow Maker Mount skill.

mount = 80002335

if sm.hasSkill(mount):
    sm.chat("You already have the 'Slime Snow Maker' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Slime Snow Maker' mount.")
