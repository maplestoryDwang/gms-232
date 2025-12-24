# Permanent Yellow Aquastallion Mount Coupon
# 2630919
# Grants the Yellow Aquastallion Mount skill.

mount = 80002846

if sm.hasSkill(mount):
    sm.chat("You already have the 'Yellow Aquastallion' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Yellow Aquastallion' mount.")
