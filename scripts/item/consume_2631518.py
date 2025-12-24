# Permanent Snowmaker Mount Coupon
# 2631518
# Grants the Snowmaker Mount skill.

mount = 80002872

if sm.hasSkill(mount):
    sm.chat("You already have the 'Snowmaker' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Snowmaker' mount.")
