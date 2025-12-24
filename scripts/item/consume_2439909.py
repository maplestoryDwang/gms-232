# Permanent Snowball Mount Coupon
# 2439909
# Grants the Snowball Mount skill.

mount = 80002659

if sm.hasSkill(mount):
    sm.chat("You already have the 'Snowball' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Snowball' mount.")
