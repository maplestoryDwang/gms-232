# Permanent Alluring Whale Mount Coupon
# 2632120
# Grants the Alluring Whale Mount skill.

mount = 80002944

if sm.hasSkill(mount):
    sm.chat("You already have the 'Alluring Whale' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Alluring Whale' mount.")
