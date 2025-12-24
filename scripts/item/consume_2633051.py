# Ryan of Justice Mount
# 2633051
# Grants the Ryan of Justice Mount skill.

mount = 80012104

if sm.hasSkill(mount):
    sm.chat("You already have the 'Ryan of Justice' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Ryan of Justice' mount.")
