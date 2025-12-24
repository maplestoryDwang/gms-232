from net.swordie.ms.constants import OzConstants
from net.swordie.ms.util import Util


instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty("F35_Paused"):
        instance.addProperty("F35_Paused", True)
        instance.pauseTimer()

        if Util.succeedProp(OzConstants.F35_MEDAL_DROP_RATE):
            sm.dropItem(OzConstants.EXPERT_OF_OZ, -34, 141)
