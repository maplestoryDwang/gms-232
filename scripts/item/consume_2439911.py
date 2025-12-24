# Permanent Floating LED Mount Coupon
# 2439911
# Grants the Floating LED Mount skill.

mount = 80002661

if sm.hasSkill(mount):
    sm.chat("You already have the 'Floating LED' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Floating LED' mount.")
