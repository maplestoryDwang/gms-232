# Permanent Music to my Feet Mount Coupon
# 2437923
# Grants the Music to my Feet Mount skill.

mount = 80002369

if sm.hasSkill(mount):
    sm.chat("You already have the 'Music to my Feet' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Music to my Feet' mount.")
