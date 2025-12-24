# Permanent Flying Whale Mount Coupon
# 2436792
# Grants the Flying Whale Mount skill.

mount = 80002220

if sm.hasSkill(mount):
    sm.chat("You already have the 'Flying Whale' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Flying Whale' mount.")
