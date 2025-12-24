# Permanent Polar Bear Mount Coupon
# 2436715
# Grants the Polar Bear Mount skill.

mount = 80002271

if sm.hasSkill(mount):
    sm.chat("You already have the 'Polar Bear' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Polar Bear' mount.")
