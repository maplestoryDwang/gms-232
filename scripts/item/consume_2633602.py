# Permanent Super Influencer Mount Coupon
# 2633602
# Grants the Super Influencer Mount skill.

mount = 80003067

if sm.hasSkill(mount):
    sm.chat("You already have the 'Super Influencer' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Super Influencer' mount.")
