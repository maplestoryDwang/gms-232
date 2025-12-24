# Permanent Jeweled Bird Mount Coupon
# 2438715
# Grants the Jeweled Bird Mount skill.

mount = 80002439

if sm.hasSkill(mount):
    sm.chat("You already have the 'Jeweled Bird' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Jeweled Bird' mount.")
