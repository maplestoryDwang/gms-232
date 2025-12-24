# Permanent Training Dummy Mount Coupon
# 2630279
# Grants the Training Dummy Mount skill.

mount = 80002702

if sm.hasSkill(mount):
    sm.chat("You already have the 'Training Dummy' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Training Dummy' mount.")
