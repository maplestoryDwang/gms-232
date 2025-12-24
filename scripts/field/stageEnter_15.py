from net.swordie.ms.constants import OzConstants
from net.swordie.ms.util import Util


sm.lockInGameUI(False, False)  # Used as you enter F15 from doing the FPS Mode Floor14

instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty("F15_Paused"):
        instance.addProperty("F15_Paused", True)
        instance.pauseTimer()

        if Util.succeedProp(OzConstants.F15_MEDAL_DROP_RATE):
            sm.dropItem(OzConstants.CAMPER_OF_OZ, -34, 141)
