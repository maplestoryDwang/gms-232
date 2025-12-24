# Permanent Great Golden Dragon Mount Coupon
# 2630768
# Grants the Great Golden Dragon Mount skill.

mount = 80011851

if sm.hasSkill(mount):
    sm.chat("You already have the 'Great Golden Dragon' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Great Golden Dragon' mount.")
