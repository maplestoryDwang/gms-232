# Dojo Start Map
from time import sleep

from net.swordie.ms.enums import WeatherEffNoticeType

sm.showWeatherNotice("All buffs have been removed due to a special technique. This should make it fair. I'll give you 30 seconds to head upstairs.", WeatherEffNoticeType.MuLungDojo)
sm.removeAllBuffs()
sm.getChr().setDeathCount(0)
sm.invokeAfterDelay(30000, "createDojoClock", 901)
sleep(30000)
field.setProperty("cleared", True)


