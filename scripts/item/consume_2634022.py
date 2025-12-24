# Permanent Ricey Roll Mount Coupon
# 2634022
# Grants the Rice Roll Mount skill.

mount = 80003115

if sm.hasSkill(mount):
    sm.chat("You already have the 'Rice Roll' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Rice Roll' mount.")
