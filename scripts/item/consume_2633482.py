# Permanent Munch Train Mount Coupon
# 2633482
# Grants the Munch Train Mount skill.

mount = 80012203

if sm.hasSkill(mount):
    sm.chat("You already have the 'Munch Train' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Munch Train' mount.")
