# Portal to Manon
from net.swordie.ms.constants import JobConstants

if JobConstants.getJobLevel(chr.getJob()) == 3 or (JobConstants.isDualBlade(chr.getJob()) and JobConstants.getJobLevel(chr.getJob()) == 5):
    sm.warp(924000200, 0, True)
else:
    sm.warp(240020401, 3, True)

