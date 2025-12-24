# Permanent Arena Drone Mount: Season 1 Mount Coupon
# 2632283
# Grants the Arena Drone Mount: Season 1 Mount skill.

mount = 80002979

if sm.hasSkill(mount):
    sm.chat("You already have the 'Arena Drone Mount: Season 1' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Arena Drone Mount: Season 1' mount.")
