#Arkarium ban map |Sinister Inner Lot
from net.swordie.ms.constants import BossConstants
from net.swordie.ms.enums import WeatherEffNoticeType

sm.showWeatherNotice("How does it feel to see the true ugliness that lurks inside?", WeatherEffNoticeType.ArkariumNotice_3, 5000)
field.setProperty("killed", False)
sm.spawnMob(BossConstants.TWISTED_DARKNESS_DUPLICATE, 34, 95)