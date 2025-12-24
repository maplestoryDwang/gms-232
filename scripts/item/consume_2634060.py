# Permanent Tasty Hamburger Mount Coupon
# 2634060
# Grants the Tasty Hamburger Mount skill.

mount = 80012267

if sm.hasSkill(mount):
    sm.chat("You already have the 'Tasty Hamburger' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Tasty Hamburger' mount.")
