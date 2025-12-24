from net.swordie.ms.constants import OzConstants
from net.swordie.ms.enums import WeatherEffNoticeType

sm.showWeatherNotice("Defeat the Tin Woodman.", WeatherEffNoticeType.Oz_Alicia, 5000)
instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty("F20_Inited"):
        instance.addProperty("F20_Inited", True)
        sm.spawnMob(OzConstants.TIN_WOODMAN, 1029, 155, False, OzConstants.TIN_WOODMAN_HP)