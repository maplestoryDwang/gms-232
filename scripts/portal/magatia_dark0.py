# Lab - Area B-3
# 261020600
# Warp from Lab - Area B-3 to Lab - Area A-3.
# If [Magatia's Secret] An Incident, and the Missing Alchemist active, the player will be warped to Dark Lab instead.

incident = 3309

if sm.hasQuest(incident):
    sm.warpInstanceIn(926120000, False)
else:
    sm.warp(261020700, 1)