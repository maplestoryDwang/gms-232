# Permanent Yeti Hoist 'n' Run Mount Coupon
# 2631386
# Grants the Yeti Hoist 'n' Run Mount skill.

mount = 80011927

if sm.hasSkill(mount):
    sm.chat("You already have the 'Yeti Hoist 'n' Run' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Yeti Hoist 'n' Run' mount.")
