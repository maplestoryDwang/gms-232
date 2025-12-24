from net.swordie.ms.constants import OzConstants
from net.swordie.ms.enums import WeatherEffNoticeType

sm.showWeatherNotice("Hit the nest to make the Pleads appear.", WeatherEffNoticeType.Oz_Alicia, 5000)
instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty("F28_Inited"):
        instance.addProperty("F28_Inited", True)
        instance.addProperty(OzConstants.F28_KILL_COUNT_BELLAMOA, 0)
        instance.addProperty(OzConstants.F28_KILL_COUNT_PLEAD, 0)
