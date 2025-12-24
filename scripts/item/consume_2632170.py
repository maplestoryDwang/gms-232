# Winged Messenger Mount Coupon
# 2632170
# Grants the Winged Messenger Mount skill.

mount = 80002873

if sm.hasSkill(mount):
    sm.chat("You already have the 'Winged Messenger' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Winged Messenger' mount.")
