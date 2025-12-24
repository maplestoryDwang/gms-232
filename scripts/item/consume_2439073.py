# Permanent Pink Bean Tube Mount Coupon
# 2439073
# Grants the Pink Bean Tube Mount skill.

mount = 80011647

if sm.hasSkill(mount):
    sm.chat("You already have the 'Pink Bean Tube' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Pink Bean Tube' mount.")
