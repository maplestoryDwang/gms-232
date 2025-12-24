# Dazzling Sunlight Mount
# 2632971
# Grants the Dazzling Sunlight Mount skill.

mount = 80012090

if sm.hasSkill(mount):
    sm.chat("You already have the 'Dazzling Sunlight' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Dazzling Sunlight' mount.")
