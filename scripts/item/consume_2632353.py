# Permanent Cotton Candy Unicorn Mount Coupon
# 2632353
# Grants the Cotton Candy Unicorn Mount skill.

mount = 80002987

if sm.hasSkill(mount):
    sm.chat("You already have the 'Cotton Candy Unicorn' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Cotton Candy Unicorn' mount.")
