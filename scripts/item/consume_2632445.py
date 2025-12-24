# Permanent Inferno Wolf Mount Coupon
# 2632445
# Grants the Inferno Wolf Mount skill.

mount = 80002994

if sm.hasSkill(mount):
    sm.chat("You already have the 'Inferno Wolf' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Inferno Wolf' mount.")
