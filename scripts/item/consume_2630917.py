# Permanent Red Aquastallion Mount Coupon
# 2630917
# Grants the Red Aquastallion Mount skill.

mount = 80002831

if sm.hasSkill(mount):
    sm.chat("You already have the 'Red Aquastallion' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Red Aquastallion' mount.")
