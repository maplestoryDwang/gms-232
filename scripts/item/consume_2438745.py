# Permanent Celebrity Supercar Mount Coupon
# 2438745
# Grants the Celebrity Supercar Mount skill.

mount = 80002443

if sm.hasSkill(mount):
    sm.chat("You already have the 'Celebrity Supercar' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Celebrity Supercar' mount.")
