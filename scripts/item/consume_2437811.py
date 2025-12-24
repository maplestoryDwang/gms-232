# Snowman Bounce Mount Coupon (Mount)
# 2437811
# Grants the Snowman Bounce Mount skill.

mount = 80011533

if sm.hasSkill(mount):
    sm.chat("You already have the 'Snowman Bounce' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Snowman Bounce' mount.")
