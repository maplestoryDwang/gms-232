# Permanent Harp Seal Mount Coupon
# 2439443
# Grants the Harp Seal Mount skill.

mount = 80002585

if sm.hasSkill(mount):
    sm.chat("You already have the 'Harp Seal' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Harp Seal' mount.")
