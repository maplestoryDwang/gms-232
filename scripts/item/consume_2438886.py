# Permanent Pink Bean Scooter Mount Coupon
# 2438886
# Grants the Pink Bean Scooter Mount skill.

mount = 80002447

if sm.hasSkill(mount):
    sm.chat("You already have the 'Pink Bean Scooter' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Pink Bean Scooter' mount.")
