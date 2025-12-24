from net.swordie.ms.enums import WeatherEffNoticeType

reactor.incHitCount()
sm.showWeatherNotice("Please allow me to mourn over your imminent demise.", WeatherEffNoticeType.BossCrimsonQueenCrownPink, 10000)
if reactor.getHitCount() == 5:
    sm.spawnMob(8920102, 37, 135, False, 315000000)
    sm.removeReactor()
