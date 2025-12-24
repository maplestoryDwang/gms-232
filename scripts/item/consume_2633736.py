# Songless Bird Mount
# 2633736
# Grants the Songless Bird Mount skill.

mount = 80012225

if sm.hasSkill(mount):
    sm.chat("You already have the 'Songless Bird' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Songless Bird' mount.")
