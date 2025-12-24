# Permanent Vroom Vroom Mushroom Mount Coupon
# 2436788
# Grants the Vroom Vroom Mushroom Mount skill.

mount = 80011463

if sm.hasSkill(mount):
    sm.chat("You already have the 'Vroom Vroom Mushroom' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Vroom Vroom Mushroom' mount.")
