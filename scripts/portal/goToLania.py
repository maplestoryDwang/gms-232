# Close to the Birds
# 101020100
# Warps Luminous to Lania's Front Yard.

from net.swordie.ms.constants import JobConstants

if JobConstants.isLuminous(chr.getJob()):
    sm.warp(101000101, 2)
else:
    sm.chat("There's nothing of interest here.")