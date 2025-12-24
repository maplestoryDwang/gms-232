# Hallowkitty and Me Mount
# 2633825
# Grants the Hallowkitty and Me Mount skill.

mount = 80012249

if sm.hasSkill(mount):
    sm.chat("You already have the 'Hallowkitty and Me' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Hallowkitty and Me' mount.")
