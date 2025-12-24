# Pastel Bicycle Mount Coupon (Permanent)
# 2436183
# Grants the Pastel Bicycle Mount skill.

mount = 80002236

if sm.hasSkill(mount):
    sm.chat("You already have the 'Pastel Bicycle' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Pastel Bicycle' mount.")
