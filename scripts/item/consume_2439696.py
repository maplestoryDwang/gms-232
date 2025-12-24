# Permanent Rallying Knights Mount Coupon
# 2439696
# Grants the Rallying Knights Mount skill.

mount = 80011733

if sm.hasSkill(mount):
    sm.chat("You already have the 'Rallying Knights' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Rallying Knights' mount.")
