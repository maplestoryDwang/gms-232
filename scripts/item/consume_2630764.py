# Permanent Taotie Mount Coupon
# 2630764
# Grants the Taotie Mount skill.

mount = 80002743

if sm.hasSkill(mount):
    sm.chat("You already have the 'Taotie' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Taotie' mount.")
