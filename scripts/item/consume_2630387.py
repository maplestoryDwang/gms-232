# Permanent Adventurous Black Bean Mount Coupon
# 2630387
# Grants the Adventurous Black Bean Mount skill.

mount = 80002713

if sm.hasSkill(mount):
    sm.chat("You already have the 'Adventurous Black Bean' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Adventurous Black Bean' mount.")
