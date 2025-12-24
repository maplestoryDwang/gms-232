# Permanent Source of Darkness Mount Coupon
# 2439406
# Grants the Source of Darkness Mount skill.

mount = 80002622

if sm.hasSkill(mount):
    sm.chat("You already have the 'Source of Darkness' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Source of Darkness' mount.")
