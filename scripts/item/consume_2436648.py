# Legion Rank Mount Coupon
# 2436648
# Grants the Legion Rank Mount skill.

mount = 80002266

if sm.hasSkill(mount):
    sm.chat("You already have the 'Legion Rank' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Legion Rank' mount.")
