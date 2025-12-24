# Permanent Love Messenger Mount Coupon
# 2438743
# Grants the Love Messenger Mount skill.

mount = 80002441

if sm.hasSkill(mount):
    sm.chat("You already have the 'Love Messenger' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Love Messenger' mount.")
