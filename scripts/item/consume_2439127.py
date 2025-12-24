# Permanent Fluffy Flying Squirrel Mount Coupon
# 2439127
# Grants the Fluffy Flying Squirrel Mount skill.

mount = 80002454

if sm.hasSkill(mount):
    sm.chat("You already have the 'Fluffy Flying Squirrel' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Fluffy Flying Squirrel' mount.")
