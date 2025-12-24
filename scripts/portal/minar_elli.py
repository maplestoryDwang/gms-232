# Green Tree Trunk / Minar Forest West Border
# 101030100 / 240010100
# Warps between Green Tree Trunk and Minar Forest West Border if player has a Magic Seed in their inventory.

greenTreeTrunk = 101030100
minarWestBorder = 240010100

magicSeed = 4031346

if sm.hasItem(magicSeed):
    sm.consumeItem(magicSeed)
    if sm.getFieldID() == minarWestBorder:
        sm.warp(greenTreeTrunk, 5)
    else:
        sm.warp(minarWestBorder, 5)
else:
    sm.chat("You need a Magic Seed to use this portal.")