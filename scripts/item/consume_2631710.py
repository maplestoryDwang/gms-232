# Permanent Thunder Horse Mount Coupon
# 2631710
# Grants the Thunder Horse Mount skill.

mount = 80002920

if sm.hasSkill(mount):
    sm.chat("You already have the 'Thunder Horse' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Thunder Horse' mount.")
