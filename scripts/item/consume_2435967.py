# Permanent Blue Chu Chu Whale Mount Coupon
# 2435967
# Grants the Blue Chu Chu Whale Mount skill.

mount = 80002225

if sm.hasSkill(mount):
    sm.chat("You already have the 'Blue Chu Chu Whale' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Blue Chu Chu Whale' mount.")
