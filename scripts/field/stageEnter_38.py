from net.swordie.ms.constants import OzConstants
from net.swordie.ms.enums import WeatherEffNoticeType

sm.showWeatherNotice("Talk to One Who Fights Darkness", WeatherEffNoticeType.Oz_Alicia, 5000)
instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty(OzConstants.F38_INITED):
        instance.addProperty(OzConstants.F38_INITED, True)
        instance.addProperty(OzConstants.F38_CUR_DARKNESS, OzConstants.DARKNESS_START_LEVEL)
