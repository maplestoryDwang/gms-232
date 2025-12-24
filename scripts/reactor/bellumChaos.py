from net.swordie.ms.enums import WeatherEffNoticeType

sm.removeReactor()
sm.spawnMob(8930000, -200, 440, False, 200000000000)
sm.showWeatherNotice("You ignore my warnings?! I will show you no mercy!", WeatherEffNoticeType.BossVellum, 10000)
sm.dispose()
