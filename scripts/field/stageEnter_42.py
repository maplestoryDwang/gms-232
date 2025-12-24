from net.swordie.ms.constants import OzConstants
from net.swordie.ms.enums import ObstacleAtomEnum
from net.swordie.ms.enums import WeatherEffNoticeType

sm.showWeatherNotice("Eliminate {} of each monster".format(OzConstants.F42_KILL_COUNT), WeatherEffNoticeType.Oz_Alicia, 5000)
instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty("F42_Inited"):
        instance.addProperty("F42_Inited", True)
        instance.addProperty(OzConstants.F42_BEETLE_KILLS, 0)
        instance.addProperty(OzConstants.F42_DUAL_BEETLE_KILLS, 0)
        instance.addProperty(OzConstants.F42_HARP_KILLS, 0)
        instance.addProperty(OzConstants.F42_BLOOD_HARP_KILLS, 0)

        sm.spawnMob(OzConstants.BEETLE, -768, -452, True, 200000000)
        sm.spawnMob(OzConstants.BEETLE, -941, -452, True, 200000000)
        sm.spawnMob(OzConstants.BEETLE, -1041, -452, True, 200000000)
        sm.spawnMob(OzConstants.BEETLE, -1241, -452, True, 200000000)
        sm.spawnMob(OzConstants.BEETLE, -1441, -452, True, 200000000)
        sm.spawnMob(OzConstants.BEETLE, -1641, -452, True, 200000000)
        sm.spawnMob(OzConstants.BEETLE, -1841, -452, True, 200000000)
        sm.spawnMob(OzConstants.BEETLE, -2041, -452, True, 200000000)

        sm.spawnMob(OzConstants.DUAL_BEETLE, -171, -88, True, 200000000)
        sm.spawnMob(OzConstants.DUAL_BEETLE, -50, -88, True, 200000000)
        sm.spawnMob(OzConstants.DUAL_BEETLE, 171, -88, True, 200000000)
        sm.spawnMob(OzConstants.DUAL_BEETLE, 338, -88, True, 200000000)
        sm.spawnMob(OzConstants.DUAL_BEETLE, -178, -388, True, 200000000)
        sm.spawnMob(OzConstants.DUAL_BEETLE, -78, -388, True, 200000000)
        sm.spawnMob(OzConstants.DUAL_BEETLE, 78, -388, True, 200000000)
        sm.spawnMob(OzConstants.DUAL_BEETLE, 175, -388, True, 200000000)

        sm.spawnMob(OzConstants.HARP, 1895, -388, True, 200000000)
        sm.spawnMob(OzConstants.HARP, 1435, -88, True, 200000000)
        sm.spawnMob(OzConstants.HARP, 1081, -88, True, 200000000)
        sm.spawnMob(OzConstants.HARP, 1181, -508, True, 200000000)
        sm.spawnMob(OzConstants.HARP, 1895, -388, True, 200000000)
        sm.spawnMob(OzConstants.HARP, 1435, -88, True, 200000000)
        sm.spawnMob(OzConstants.HARP, 1081, -88, True, 200000000)
        sm.spawnMob(OzConstants.HARP, 1181, -508, True, 200000000)

        sm.spawnMob(OzConstants.BLOOD_HARP, 2147, -88, True, 200000000)
        sm.spawnMob(OzConstants.BLOOD_HARP, 2157, -44, True, 200000000)
        sm.spawnMob(OzConstants.BLOOD_HARP, 2324, -208, True, 200000000)
        sm.spawnMob(OzConstants.BLOOD_HARP, 2421, -388, True, 200000000)
        sm.spawnMob(OzConstants.BLOOD_HARP, 2147, -88, True, 200000000)
        sm.spawnMob(OzConstants.BLOOD_HARP, 2157, -44, True, 200000000)
        sm.spawnMob(OzConstants.BLOOD_HARP, 2324, -208, True, 200000000)
        sm.spawnMob(OzConstants.BLOOD_HARP, 2421, -388, True, 200000000)

        sm.invokeAtFixedRate(500, OzConstants.METEOR_GREEN_ATOM_EXECUTION_DELAY, 0,
                             "createObstacleAtomToFoothold",
                             ObstacleAtomEnum.GreenMeteor,
                             OzConstants.F42_METEOR_RECT,
                             OzConstants.METEOR_GREEN_ATOM_DAMAGE,
                             OzConstants.METEOR_GREEN_ATOM_VELOCITY,
                             0,
                             OzConstants.METEOR_GREEN_ATOM_AMOUNT,
                             OzConstants.METEOR_GREEN_ATOM_PROP)

        sm.invokeAtFixedRate(500, OzConstants.METEOR_BLUE_ATOM_EXECUTION_DELAY, 0,
                             "createObstacleAtomToFoothold",
                             ObstacleAtomEnum.BlueMeteor,
                             OzConstants.F42_METEOR_RECT,
                             OzConstants.METEOR_BLUE_ATOM_DAMAGE,
                             OzConstants.METEOR_BLUE_ATOM_VELOCITY,
                             0,
                             OzConstants.METEOR_BLUE_ATOM_AMOUNT,
                             OzConstants.METEOR_BLUE_ATOM_PROP)

