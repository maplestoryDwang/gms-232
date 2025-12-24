# Permanent Crazy Cabbie Mount Coupon
# 2437737
# Grants the Crazy Cabbie Mount skill.

mount = 80002354

if sm.hasSkill(mount):
    sm.chat("You already have the 'Crazy Cabbie' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Crazy Cabbie' mount.")
