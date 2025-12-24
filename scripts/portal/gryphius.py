# Portal to Griffin
from net.swordie.ms.constants import JobConstants

if JobConstants.getJobLevel(chr.getJob()) == 3 or (JobConstants.isDualBlade(chr.getJob()) and JobConstants.getJobLevel(chr.getJob()) == 5):
    sm.warp(924000201, 0, True)
else:
    sm.warp(240020101, 3, True)
