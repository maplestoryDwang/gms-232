# Permanent Halloween Jack-O-Lantern Mount Coupon
# 2634146
# Grants the Halloween Jack-O-Lantern Mount skill.

mount = 80003123

if sm.hasSkill(mount):
    sm.chat("You already have the 'Halloween Jack-O-Lantern' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Halloween Jack-O-Lantern' mount.")
