# Permanent Football Rabbit Mount Coupon
# 2436525
# Grants the Football Rabbit Mount skill.

mount = 80002258

if sm.hasSkill(mount):
    sm.chat("You already have the 'Football Rabbit' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Football Rabbit' mount.")
