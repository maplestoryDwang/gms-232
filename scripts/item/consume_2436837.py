# Permanent Heart Constellation Mount Coupon
# 2436837
# Grants the Heart Constellation Mount skill.

mount = 80002294

if sm.hasSkill(mount):
    sm.chat("You already have the 'Heart Constellation' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Heart Constellation' mount.")
