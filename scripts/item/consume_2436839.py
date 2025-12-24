# Permanent Cosmic Star Whale Mount Coupon
# 2436839
# Grants the Cosmic Star Whale Mount skill.

mount = 80002296

if sm.hasSkill(mount):
    sm.chat("You already have the 'Cosmic Star Whale' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Cosmic Star Whale' mount.")
