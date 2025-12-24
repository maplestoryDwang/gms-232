# Permanent Misty Swallow Mount Coupon
# 2630451
# Grants the Misty Swallow Mount skill.

mount = 80002715

if sm.hasSkill(mount):
    sm.chat("You already have the 'Misty Swallow' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Misty Swallow' mount.")
