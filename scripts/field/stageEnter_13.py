from net.swordie.ms.constants import OzConstants
from net.swordie.ms.enums import ObstacleAtomEnum
from net.swordie.ms.enums import WeatherEffNoticeType
from net.swordie.ms.util import Util

sm.showWeatherNotice("Dodge the falling debris and eliminate all the monsters before they get to the stone. You shouldn't get too far from it, either.", WeatherEffNoticeType.Oz_Alicia, 5000)

instance = chr.getInstance()
if instance is not None:
    if not instance.hasProperty("F13_Inited"):
        instance.addProperty("F13_Inited", True)
        instance.addProperty(OzConstants.F13_ROCK_HITS, 0)

        mobs = [
            OzConstants.BLUE_FLOWER_COW,
            OzConstants.GREEN_FLOWER_COW,
            OzConstants.WHITE_THORNY_BEAR,
            OzConstants.BROWN_THORNY_BEAR
        ]

        x = 4000
        for i in range(100):
            rngMob = Util.getRandomFromCollection(mobs)
            sm.spawnMob(rngMob, x - (20 * i), 260, False, OzConstants.F13_MOB_HP)


        sm.invokeAtFixedRate(2000, OzConstants.METEOR_GREEN_ATOM_EXECUTION_DELAY, 0,
                             "createObstacleAtom", ObstacleAtomEnum.GreenMeteor, 1, OzConstants.METEOR_GREEN_ATOM_DAMAGE,
                             OzConstants.METEOR_GREEN_ATOM_VELOCITY, OzConstants.METEOR_GREEN_ATOM_AMOUNT,
                             OzConstants.METEOR_GREEN_ATOM_PROP)

        sm.invokeAtFixedRate(2000, OzConstants.METEOR_BLUE_ATOM_EXECUTION_DELAY, 0,
                             "createObstacleAtom", ObstacleAtomEnum.BlueMeteor, 1, OzConstants.METEOR_BLUE_ATOM_DAMAGE,
                             OzConstants.METEOR_BLUE_ATOM_VELOCITY, OzConstants.METEOR_BLUE_ATOM_AMOUNT,
                             OzConstants.METEOR_BLUE_ATOM_PROP)
