# Permanent Cake Coupe Mount Coupon
# 2439677
# Grants the Cake Coupe Mount skill.

mount = 80002650

if sm.hasSkill(mount):
    sm.chat("You already have the 'Cake Coupe' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Cake Coupe' mount.")
