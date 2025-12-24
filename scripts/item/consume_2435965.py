# Permanent Pink Chu Chu Whale Mount Coupon
# 2435965
# Grants the Pink Chu Chu Whale Mount skill.

mount = 80002223

if sm.hasSkill(mount):
    sm.chat("You already have the 'Pink Chu Chu Whale' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Pink Chu Chu Whale' mount.")
