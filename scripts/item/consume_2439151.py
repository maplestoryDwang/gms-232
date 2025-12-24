# Shrelephant Mount
# 2439151
# Grants the Shrelephant Mount skill.

mount = 80011711

if sm.hasSkill(mount):
    sm.chat("You already have the 'Shrelephant' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Shrelephant' mount.")
