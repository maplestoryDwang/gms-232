# Flying Fish Mount Coupon (Permanent)
# 2436030
# Grants the Flying Fish Mount skill.

mount = 80002228

if sm.hasSkill(mount):
    sm.chat("You already have the 'Flying Fish' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Flying Fish' mount.")
