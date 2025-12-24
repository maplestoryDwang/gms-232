# Permanent Reindeer and Present Mount Coupon
# 2632834
# Grants the Reindeer and Present Mount skill.

mount = 80002995

if sm.hasSkill(mount):
    sm.chat("You already have the 'Reindeer and Present' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Reindeer and Present' mount.")
