# Permanent Toasted Taiyaki Mount Coupon
# 2632842
# Grants the Toasted Taiyaki Mount skill.

mount = 80002667

if sm.hasSkill(mount):
    sm.chat("You already have the 'Toasted Taiyaki' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Toasted Taiyaki' mount.")
