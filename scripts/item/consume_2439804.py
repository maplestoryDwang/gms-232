# Permanent Teatime Bunny Mount Coupon
# 2439804
# Grants the Teatime Bunny Mount skill.

mount = 80011744

if sm.hasSkill(mount):
    sm.chat("You already have the 'Teatime Bunny' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Teatime Bunny' mount.")
