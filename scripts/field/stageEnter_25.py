from net.swordie.ms.constants import OzConstants
from net.swordie.ms.util import Util


instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty("F25_Paused"):
        instance.addProperty("F25_Paused", True)
        instance.pauseTimer()

        if Util.succeedProp(OzConstants.F25_MEDAL_DROP_RATE):
            sm.dropItem(OzConstants.TRAVELER_OF_OZ, -34, 141)
