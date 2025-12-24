# Permanent Vroom Vroom Pink Bean Mount Coupon
# 2435720
# Grants the Vrrrroom Pink Bean Mount skill.

mount = 80001995

if sm.hasSkill(mount):
    sm.chat("You already have the 'Vrrrroom Pink Bean' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Vrrrroom Pink Bean' mount.")
