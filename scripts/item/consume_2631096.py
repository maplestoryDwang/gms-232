# Isekai Friends Mount Coupon
# 2631096
# Grants the Isekai Friends Mount skill.

mount = 80011913

if sm.hasSkill(mount):
    sm.chat("You already have the 'Isekai Friends' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Isekai Friends' mount.")
