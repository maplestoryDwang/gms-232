from net.swordie.ms.enums import WeatherEffNoticeType
PIERRE = 8900100

sm.spawnMob(PIERRE, 1155, 551, False)
sm.showFieldEffect("Map/Effect.img/rootabyss/firework") # "Welcome" effect
sm.showWeatherNotice("From the bottom of my heart, welcome to the tea party!", WeatherEffNoticeType.BossPierre, 10000)
