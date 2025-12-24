from net.swordie.ms.constants import OzConstants
from net.swordie.ms.enums import WeatherEffNoticeType

sm.showWeatherNotice("Answer the questions correctly to advance to the next floor", WeatherEffNoticeType.Oz_Alicia, 5000)

instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty("F39_Inited"):
        instance.addProperty("F39_Inited", True)
        instance.addProperty(OzConstants.F39_CUR_STAGE, 1)