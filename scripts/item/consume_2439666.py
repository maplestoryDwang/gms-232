# Permanent Tractor Mount Coupon
# 2439666
# Grants the Tractor Mount skill.

mount = 80002594

if sm.hasSkill(mount):
    sm.chat("You already have the 'Tractor' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Tractor' mount.")
