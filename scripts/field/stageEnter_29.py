from net.swordie.ms.constants import OzConstants
from net.swordie.ms.enums import WeatherEffNoticeType
from net.swordie.ms.util import Util

req = Util.getRandom(1, 4)
sm.showWeatherNotice("Drop the Sand Crystals, up to {} at a time!.".format(req), WeatherEffNoticeType.Oz_Alicia, 5000)
instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty("F29_Inited"):
        instance.addProperty("F29_Inited", True)
        instance.addProperty(OzConstants.F29_CRYSTAL_REQ, req)
