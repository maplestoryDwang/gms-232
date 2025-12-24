# Permanent Starry Jellyfish Mount Coupon
# 2439906
# Grants the Starry Jellyfish Mount skill.

mount = 80011758

if sm.hasSkill(mount):
    sm.chat("You already have the 'Starry Jellyfish' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Starry Jellyfish' mount.")
