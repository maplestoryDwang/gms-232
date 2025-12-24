# Permanent Snowmobile Mount Coupon
# 2437799
# Grants the Snowmobile Mount skill.

mount = 80011532

if sm.hasSkill(mount):
    sm.chat("You already have the 'Snowmobile' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Snowmobile' mount.")
