# Cosmic Bull Mount
# 2632749
# Grants the Cosmic Bull Mount skill.

mount = 80012080

if sm.hasSkill(mount):
    sm.chat("You already have the 'Cosmic Bull' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Cosmic Bull' mount.")
