# Permanent Blue Aquastallion Mount Coupon
# 2630918
# Grants the Blue Aquastallion Mount skill.

mount = 80002845

if sm.hasSkill(mount):
    sm.chat("You already have the 'Blue Aquastallion' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Blue Aquastallion' mount.")
