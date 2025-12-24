# Permanent Shopaholic Pup Mount Coupon
# 2630448
# Grants the Shopaholic Pup Mount skill.

mount = 80002714

if sm.hasSkill(mount):
    sm.chat("You already have the 'Shopaholic Pup' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Shopaholic Pup' mount.")
