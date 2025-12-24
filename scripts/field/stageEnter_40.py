from net.swordie.ms.constants import OzConstants
from net.swordie.ms.enums import WeatherEffNoticeType

sm.showWeatherNotice("Defeat the Scarecrow.", WeatherEffNoticeType.Oz_Alicia, 5000)
instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty("F40_Inited"):
        instance.addProperty("F40_Inited", True)
        sm.spawnMob(OzConstants.SCARECROW, 1029, 155, False, OzConstants.SCARECROW_HP)
