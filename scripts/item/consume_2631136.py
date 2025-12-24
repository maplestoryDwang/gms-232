# Permanent Halloween Ghost Mount Coupon
# 2631136
# Grants the Halloween Ghost Mount skill.

mount = 80002858

if sm.hasSkill(mount):
    sm.chat("You already have the 'Halloween Ghost' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Halloween Ghost' mount.")
