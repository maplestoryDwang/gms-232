# Wee Moon Bunny Mount Coupon (Permanent)
# 2436080
# Grants the Wee Moon Bunny Mount skill.

mount = 80002233

if sm.hasSkill(mount):
    sm.chat("You already have the 'Wee Moon Bunny' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Wee Moon Bunny' mount.")
