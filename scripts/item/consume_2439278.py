# Permanent Giant Monster Mount Coupon
# 2439278
# Grants the Giant Monster Mount skill.

mount = 80002546

if sm.hasSkill(mount):
    sm.chat("You already have the 'Giant Monster' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Giant Monster' mount.")
