# Permanent Snowman Bounce Mount Coupon
# 2438380
# Grants the Snowman Bounce Mount skill.

mount = 80002400

if sm.hasSkill(mount):
    sm.chat("You already have the 'Snowman Bounce' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Snowman Bounce' mount.")
