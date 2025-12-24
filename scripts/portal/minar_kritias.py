# Sky Nest 1
# 240010700
# Warp from Sky Nest 1 to Freezing Forest 2 if player is 170+.

if chr.getLevel() >= 170:
    sm.warp(241000218, 2)
else:
    sm.chat("You must be Level 170 or higher to enter Kritias.")
