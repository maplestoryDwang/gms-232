# Cernium Square
# 410000500
# Warp from Cernium Square to Destroyed Cernium Square if player is 265+.

currentLevel = chr.getLevel()

if currentLevel >= 265:
    sm.warp(410000800, 4)
else:
    sm.chat("You must be Level 265 or higher to move to Burning Cernium.")