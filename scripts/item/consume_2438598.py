# Permanent Bloodthorn Mount Coupon
# 2438598
# Grants the Bloodthorn Mount skill.

mount = 80011584

if sm.hasSkill(mount):
    sm.chat("You already have the 'Bloodthorn' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Bloodthorn' mount.")
