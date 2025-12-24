from net.swordie.ms.constants import OzConstants
from net.swordie.ms.enums import WeatherEffNoticeType

sm.showWeatherNotice("Talk to Secreta", WeatherEffNoticeType.Oz_Alicia, 5000)

instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty("F36_Inited"):
        instance.addProperty("F36_Inited", True)
        instance.addProperty(OzConstants.F36_CUR_STAGE, 1)
        instance.addProperty(OzConstants.F36_USER_PATTERN, "")
