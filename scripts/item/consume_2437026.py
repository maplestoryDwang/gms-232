# Permanent Glow-in-the-Dark Star Mount Coupon
# 2437026
# Grants the Glow-in-the-Dark Star Mount skill.

mount = 80002304

if sm.hasSkill(mount):
    sm.chat("You already have the 'Glow-in-the-Dark Star' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Glow-in-the-Dark Star' mount.")
