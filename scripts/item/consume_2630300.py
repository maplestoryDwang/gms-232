# Permanent Cutesy Dino Mount Coupon
# 2630300
# Grants the Cutesy Dino Mount skill.

mount = 80011799

if sm.hasSkill(mount):
    sm.chat("You already have the 'Cutesy Dino' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Cutesy Dino' mount.")
