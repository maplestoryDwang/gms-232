from net.swordie.ms.constants import OzConstants
from net.swordie.ms.util import Util


instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty("F5_Paused"):
        instance.addProperty("F5_Paused", True)
        instance.pauseTimer()

        if Util.succeedProp(OzConstants.F5_MEDAL_DROP_RATE):
            sm.dropItem(OzConstants.TOURIST_OF_OZ, -34, 141)
