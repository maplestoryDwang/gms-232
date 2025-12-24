from net.swordie.ms.constants import OzConstants
from net.swordie.ms.enums import WeatherEffNoticeType

instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty(OzConstants.F30_INITED):
        instance.addProperty(OzConstants.F30_INITED, True)
        sm.spawnMob(OzConstants.COWARDLY_LION, 1111, 155, False, OzConstants.COWARDLY_LION_HP)
        sm.showWeatherNotice("The cowardly Lion bothered to show up! Chase him down!", WeatherEffNoticeType.Oz_Alicia, 5000)