# Permanent Surfin' Safari Mount Coupon
# 2630585
# Grants the Surfin' Safari Mount skill.

mount = 80011845

if sm.hasSkill(mount):
    sm.chat("You already have the 'Surfin' Safari' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Surfin' Safari' mount.")
