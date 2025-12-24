# Permanent Eclipse Bird Mount Coupon
# 2439675
# Grants the Eclipse Bird Mount skill.

mount = 80002648

if sm.hasSkill(mount):
    sm.chat("You already have the 'Eclipse Bird' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Eclipse Bird' mount.")
