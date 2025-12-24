# Permanent Plush Bunny Mount Coupon
# 2631653
# Grants the Plush Bunny Mount skill.

mount = 80011960

if sm.hasSkill(mount):
    sm.chat("You already have the 'Plush Bunny' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Plush Bunny' mount.")
