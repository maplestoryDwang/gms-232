from net.swordie.ms.constants import OzConstants
from net.swordie.ms.enums import WeatherEffNoticeType
from net.swordie.ms.util import Util

side = "Right" if Util.getRandomBool() else "Left"
other_side = "Left" if side == "Right" else "Right"

instance = chr.getInstance()
if instance is not None:
    instance.addProperty(OzConstants.F4_CUR_SIDE, side)
    instance.addProperty(OzConstants.F4_BALANCE_POINTS, 0)
    sm.showWeatherNotice("Balance out the monster count on both sides. The Tower is leaning {}. Eliminate monsters on the {} side!".format(side, other_side), WeatherEffNoticeType.Oz_Alicia, 5000)