# Subway Station Entrance
# 450001002
# Warp from Subway Station Entrance to Subway Tunnel Entrance if player is 205+.

if chr.getLevel() >= 205:
    sm.warp(450014010, 2)
else:
    sm.chat("You must be Level 205 or higher to enter Reverse City.")