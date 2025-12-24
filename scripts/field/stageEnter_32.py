from net.swordie.ms.client.partyquests.towerofoz import OzTowerModule
from net.swordie.ms.enums import WeatherEffNoticeType

sm.showWeatherNotice("Eliminate all the Blue slimes", WeatherEffNoticeType.Oz_Alicia, 5000)

OzTowerModule.clearStage(chr.getInstance(), chr)