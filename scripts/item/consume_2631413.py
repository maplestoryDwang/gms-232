# Permanent Holy Pink Beanity Mount Coupon
# 2631413
# Grants the Holy Pink Beanity Mount skill.

mount = 80002862

if sm.hasSkill(mount):
    sm.chat("You already have the 'Holy Pink Beanity' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Holy Pink Beanity' mount.")
