# Permanent Zilch Mount Coupon
# 2438494
# Grants the Zilch Mount skill.

mount = 80002425

if sm.hasSkill(mount):
    sm.chat("You already have the 'Zilch' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Zilch' mount.")
