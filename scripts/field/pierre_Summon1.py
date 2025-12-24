from net.swordie.ms.enums import WeatherEffNoticeType
PIERRE = 8900000

sm.spawnMob(PIERRE, 1155, 551, False, 80000000000)
sm.showFieldEffect("Map/Effect.img/rootabyss/firework") # "Welcome" effect
sm.showWeatherNotice("From the bottom of my heart, welcome to the tea party!", WeatherEffNoticeType.BossPierre, 10000)
