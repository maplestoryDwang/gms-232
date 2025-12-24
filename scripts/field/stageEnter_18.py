from net.swordie.ms.constants import OzConstants
from net.swordie.ms.enums import WeatherEffNoticeType

sm.showWeatherNotice("You need to get {} Coconuts.".format(OzConstants.COCONUT_REQ), WeatherEffNoticeType.Oz_Alicia, 5000)

instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty("F18_Inited"):
        instance.addProperty("F18_Inited", True)
        instance.addProperty(OzConstants.F18_COCONUT_GATHERED, 0)
