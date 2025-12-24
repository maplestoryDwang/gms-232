# Shaolin Temple : Sutra Depository - Top
from net.swordie.ms.enums import WeatherEffNoticeType

CHIEF_PRIEST = 9601068 # mob id
time = 30 *60

sm.setInstanceTime(time, 701220601)
sm.chatScript("I told you not to follow me..")

sm.invokeAfterDelay(3000, "showWeatherNotice", "Now, you will be my first victim!", WeatherEffNoticeType.BossChiefPriest)
sm.invokeAfterDelay(4000, "spawnMob", CHIEF_PRIEST, 150, 303, False)