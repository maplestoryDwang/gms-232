# Big Crow-Tit Mount
# 2632735
# Grants the Big Crow-Tit Mount skill.

mount = 80012072

if sm.hasSkill(mount):
    sm.chat("You already have the 'Big Crow-Tit' mount.")
else:
    sm.consumeItem()
    sm.giveSkill(mount)
    sm.chat("Successfully added the 'Big Crow-Tit' mount.")
