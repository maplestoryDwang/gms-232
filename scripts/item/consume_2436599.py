# Permanent Flamefoot Husky Mount Coupon
# 2436599
# Grants the Flamefoot Husky Mount skill.

mount = 80002262

if sm.hasSkill(mount):
    sm.chat("You already have the 'Flamefoot Husky' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Flamefoot Husky' mount.")
