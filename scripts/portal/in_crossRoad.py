# [Future] Dreamy Forest Trail
# 271010400
# Warp from Dreamy Forest Trail to Six Path Crossway Ruins if player is 180+.

if chr.getLevel() >= 180:
    sm.warp(271010500)
else:
    sm.chat("You must be Level 180 or higher to enter the Six Path Crossway Ruins.")
