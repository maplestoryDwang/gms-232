from net.swordie.ms.constants import OzConstants
from net.swordie.ms.enums import WeatherEffNoticeType

sm.showWeatherNotice("Bring me 1000 Ancient Turtle Eggs.", WeatherEffNoticeType.Oz_Alicia, 5000)
instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty("F3_Inited"):
        instance.addProperty("F3_Inited", True)
        instance.addProperty(OzConstants.F3_EGG_PROP, 0)