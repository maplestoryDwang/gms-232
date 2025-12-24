# Permanent Pixel Frozen Tuna Mount Coupon
# 2630563
# Grants the Pixel Frozen Tuna Mount skill.

mount = 80002740

if sm.hasSkill(mount):
    sm.chat("You already have the 'Pixel Frozen Tuna' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Pixel Frozen Tuna' mount.")
