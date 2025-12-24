# Permanent Bouncy Snowman Mount Coupon
# 2632821
# Grants the Bouncy Snowman Mount skill.

mount = 80002993

if sm.hasSkill(mount):
    sm.chat("You already have the 'Bouncy Snowman' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Bouncy Snowman' mount.")
