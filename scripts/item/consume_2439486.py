# Permanent Lucid Wings Mount Coupon
# 2439486
# Grants the Lucid Wings Mount skill.

mount = 80002630

if sm.hasSkill(mount):
    sm.chat("You already have the 'Lucid Wings' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Lucid Wings' mount.")
