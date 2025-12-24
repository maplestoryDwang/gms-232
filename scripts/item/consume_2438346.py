# Kangaroo Mount (Permanent)
# 2438346
# Grants the Kangaroo Mount skill.

mount = 80011542

if sm.hasSkill(mount):
    sm.chat("You already have the 'Kangaroo' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Kangaroo' mount.")
