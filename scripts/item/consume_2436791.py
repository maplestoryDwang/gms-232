# Kid Cloud Mount (Permanent)
# 2436791
# Grants the Kid Cloud Mount skill.

mount = 80002219

if sm.hasSkill(mount):
    sm.chat("You already have the 'Kid Cloud' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Kid Cloud' mount.")
