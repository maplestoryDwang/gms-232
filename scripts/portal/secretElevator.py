# Edelstein Strolling Path 3 
# 310030200
# Direct warp from Edelstein Strolling Path 3 to Android Research Lab 3 if player is 60+.

if chr.getLevel() >= 60:
    sm.warp(310060120)
else:
    sm.chat("You must be Level 60 or higher to use the elevator.")