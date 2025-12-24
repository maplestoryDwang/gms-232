# Kerning Subway Line 2 Area 2
# 103020410
# Warps to a quest-instanced Line 2 Area 3 if JM's Next Request is active; otherwise, warps to the normal Area 3.

if sm.hasQuest(2866):
    sm.warpInstanceIn(910310200, False)
else:
    sm.warp(103020420)