# Permanent Unicorn Seahorse Mount Coupon
# 2634266
# Grants the Unicorn Seahorse Mount skill.

mount = 80012296

if sm.hasSkill(mount):
    sm.chat("You already have the 'Unicorn Seahorse' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Unicorn Seahorse' mount.")
