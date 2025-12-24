# Permanent Crystal Aura Mount Coupon
# 2437623
# Grants the Crystal Aura Mount skill.

mount = 80002345

if sm.hasSkill(mount):
    sm.chat("You already have the 'Crystal Aura' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Crystal Aura' mount.")
