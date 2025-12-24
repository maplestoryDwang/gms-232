from net.swordie.ms.client.partyquests.towerofoz import OzTowerModule
from net.swordie.ms.enums import WeatherEffNoticeType

sm.showWeatherNotice("Prepare yourself to face her!", WeatherEffNoticeType.Oz_Alicia, 10000)

if chr.getInstance() is not None:
    OzTowerModule.clearStage(chr.getInstance(), chr, False)
