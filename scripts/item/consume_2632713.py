# Permanent Superstar Yeti Mount Coupon
# 2632713
# Grants the Superstar Yeti Mount skill.

mount = 80002990

if sm.hasSkill(mount):
    sm.chat("You already have the 'Superstar Yeti' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Superstar Yeti' mount.")
