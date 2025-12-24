from net.swordie.ms.constants import OzConstants
from net.swordie.ms.enums import WeatherEffNoticeType

sm.showWeatherNotice("Defeat the Giant Spider.", WeatherEffNoticeType.Oz_Alicia, 5000)

instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty("F10_Inited"):
        instance.addProperty("F10_Inited", True)
        sm.spawnMob(OzConstants.GIANT_SPIDER_TEMPLATE_ID, 1075, 155, False, OzConstants.GIANT_SPIDER_HP)  # Giant Spider