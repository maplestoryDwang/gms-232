# Permanent Chick Mount Coupon
# 2439667
# Grants the Chick Mount skill.

mount = 80002595

if sm.hasSkill(mount):
    sm.chat("You already have the 'Chick' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Chick' mount.")
