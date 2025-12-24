# Permanent Ice Dragon Mount Coupon
# 2437259
# Grants the Ice Dragon Mount skill.

mount = 80002319

if sm.hasSkill(mount):
    sm.chat("You already have the 'Ice Dragon' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Ice Dragon' mount.")
