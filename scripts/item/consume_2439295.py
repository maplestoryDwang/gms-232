# Permanent Blackheart Negative Mount Coupon
# 2439295
# Grants the Blackheart Negative Mount skill.

mount = 80002547

if sm.hasSkill(mount):
    sm.chat("You already have the 'Blackheart Negative' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Blackheart Negative' mount.")
