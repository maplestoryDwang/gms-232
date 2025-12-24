# Palace Hallway 
# 260000302 
# Warps to Treasure Room of Queen if Eleska's Test is active.

eleskaTest = 3935

if sm.hasQuest(eleskaTest):
    sm.chat("The wall collapses, and in comes a secret door.")
    sm.warpInstanceIn(926000010, False)