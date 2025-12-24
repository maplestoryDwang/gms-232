# Permanent Blue Flame Griffin Mount Coupon
# 2630399
# Grants the Blue Flame Griffin Mount skill.

mount = 80011809

if sm.hasSkill(mount):
    sm.chat("You already have the 'Blue Flame Griffin' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Blue Flame Griffin' mount.")
