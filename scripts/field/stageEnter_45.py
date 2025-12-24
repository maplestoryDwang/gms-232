from net.swordie.ms.constants import OzConstants
from net.swordie.ms.util import Util


instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty("F45_Paused"):
        instance.addProperty("F45_Paused", True)
        instance.pauseTimer()

        if Util.succeedProp(OzConstants.F45_MEDAL_DROP_RATE):
            sm.dropItem(OzConstants.MASTER_OF_OZ, -34, 141)
