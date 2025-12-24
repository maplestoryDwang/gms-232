# Permanent Halloween Raven Mount Coupon
# 2439550
# Grants the Halloween Raven Mount skill.

mount = 80011721

if sm.hasSkill(mount):
    sm.chat("You already have the 'Halloween Raven' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Halloween Raven' mount.")
